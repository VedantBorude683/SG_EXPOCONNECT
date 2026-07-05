import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'motion/react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export interface GalleryImage {
  url: string;
  title?: string;
  caption?: string;
}

interface PremiumGalleryProps {
  images: GalleryImage[];
  autoplayInterval?: number;
}

const DRAG_THRESHOLD = 50;
const SPRING_CONFIG = { damping: 25, stiffness: 200, mass: 1 };

export default function PremiumGallery({ images, autoplayInterval = 4000 }: PremiumGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [autoplayDirection, setAutoplayDirection] = useState(1);

  // Mouse tilt effect for the active card
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth out mouse values
  const smoothMouseX = useSpring(mouseX, { damping: 20, stiffness: 150, mass: 0.5 });
  const smoothMouseY = useSpring(mouseY, { damping: 20, stiffness: 150, mass: 0.5 });

  // Map mouse values to rotations (-15deg to 15deg)
  const rotateX = useTransform(smoothMouseY, [-1, 1], [15, -15]);
  const rotateY = useTransform(smoothMouseX, [-1, 1], [-15, 15]);

  // Map mouse values to glossy glare
  const glareX = useTransform(smoothMouseX, [-1, 1], [100, 0]);
  const glareY = useTransform(smoothMouseY, [-1, 1], [100, 0]);

  const paginate = useCallback(
    (direction: number) => {
      setActiveIndex((prev) => {
        let nextIndex = prev + direction;
        if (nextIndex <= 0) {
          setAutoplayDirection(1);
          return 0;
        }
        if (nextIndex >= images.length - 1) {
          setAutoplayDirection(-1);
          return images.length - 1;
        }
        return nextIndex;
      });
    },
    [images.length]
  );

  useEffect(() => {
    if (isHovering || isDragging) return;

    const timer = setInterval(() => {
      paginate(autoplayDirection);
    }, autoplayInterval);

    return () => clearInterval(timer);
  }, [isHovering, isDragging, paginate, autoplayInterval, autoplayDirection]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Normalize coordinates from -1 to 1 based on center of card
    const normalizedX = (x / rect.width) * 2 - 1;
    const normalizedY = (y / rect.height) * 2 - 1;

    mouseX.set(normalizedX);
    mouseY.set(normalizedY);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  if (!images || images.length === 0) return null;

  return (
    <section className="relative w-full py-16 md:py-20 overflow-hidden z-20 font-sans">

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 flex flex-col items-center">

        {/* Title */}
        <div className="text-center mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-[#D4AF37] font-semibold tracking-widest uppercase text-sm mb-4">
            Our Work In Action
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="font-serif font-bold text-[#0A1931] text-4xl md:text-5xl tracking-tight">
            Global Exhibitions & <span className="font-serif font-bold text-yellow-600 font-light">Events.</span>
          </motion.h2>
        </div>

        {/* 3D Floating Cards Container */}
        <div
          className="relative w-full h-[400px] md:h-[500px] flex items-center justify-center perspective-[1500px]"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={handleMouseLeave}
        >
          <AnimatePresence initial={false}>
            {images.map((image, index) => {
              const offset = index - activeIndex;
              const isActive = offset === 0;

              // Compute transforms based on offset
              const xPos = offset * 25; // 25% shift per offset
              const zPos = Math.abs(offset) * -150; // push back
              const scale = 1 - (Math.abs(offset) * 0.1); // shrink
              const rotation = offset * -15; // slight inward turn
              const opacity = Math.max(0, 1 - (Math.abs(offset) * 0.35)); // fade out gently

              return (
                <motion.div
                  key={index}
                  animate={{
                    x: `${xPos}%`,
                    z: zPos,
                    rotateY: rotation,
                    scale: scale,
                    opacity: opacity,
                    zIndex: 10 - Math.abs(offset),
                    filter: isActive ? 'blur(0px)' : 'blur(6px)',
                  }}
                  transition={SPRING_CONFIG}
                  drag={isActive ? "x" : false}
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.2}
                  onDragStart={() => setIsDragging(true)}
                  onDragEnd={(e, { offset }) => {
                    setIsDragging(false);
                    if (offset.x < -DRAG_THRESHOLD) paginate(1);
                    else if (offset.x > DRAG_THRESHOLD) paginate(-1);
                    else {
                      // reset drag manually if they didn't drag far enough
                      mouseX.set(0);
                    }
                  }}
                  onMouseMove={isActive ? handleMouseMove : undefined}
                  className={`absolute w-[85vw] max-w-[800px] h-full rounded-[2rem] overflow-hidden shadow-2xl preserve-3d will-change-transform ${isActive ? 'cursor-grab active:cursor-grabbing' : 'cursor-pointer'}`}
                  onClick={() => {
                    if (!isActive) paginate(offset > 0 ? 1 : -1);
                  }}
                >
                  {/* Image Background */}
                  <motion.div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${image.url})` }}
                    animate={{ scale: isActive ? 1.05 : 1 }} // Internal parallax
                    transition={{ duration: 1.5, ease: "easeOut" }}
                  />

                  {/* Deep Shadow Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/10 transition-opacity duration-700" />
                  <div className={`absolute inset-0 bg-black transition-opacity duration-700 ${isActive ? 'opacity-0' : 'opacity-40'}`} />

                  {/* Glossy Glare Reflection (Only on active) */}
                  {isActive && (
                    <motion.div
                      className="absolute inset-0 pointer-events-none mix-blend-overlay"
                      style={{
                        background: useTransform(
                          () => `radial-gradient(circle at ${glareX.get()}% ${glareY.get()}%, rgba(255,255,255,0.4) 0%, transparent 60%)`
                        )
                      }}
                    />
                  )}

                  {/* Text Content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12 z-10 pointer-events-none">
                    <AnimatePresence mode="wait">
                      {isActive && (
                        <motion.div
                          key={`content-${index}`}
                          initial={{ opacity: 0, y: 30 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20, transition: { duration: 0.2 } }}
                          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        >
                          {/* Index Tracker */}
                          <div className="text-white/60 text-sm font-semibold tracking-widest mb-4 flex items-center gap-3">
                            <span className="w-8 h-[1px] bg-[#D4AF37] block" />
                            {(index + 1).toString().padStart(2, '0')} / {images.length.toString().padStart(2, '0')}
                          </div>

                          {image.title && (
                            <h3 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-white drop-shadow-xl">
                              {image.title}
                            </h3>
                          )}
                          {image.caption && (
                            <p className="text-base md:text-lg text-white/70 font-light max-w-xl drop-shadow-md">
                              {image.caption}
                            </p>
                          )}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Premium border highlight */}
                  <div className={`absolute inset-0 rounded-[2rem] border transition-colors duration-700 pointer-events-none ${isActive ? 'border-white/20' : 'border-white/5'}`} />
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Custom Navigation */}
        <div className="flex gap-6 mt-12 z-20">
          <button
            onClick={() => paginate(-1)}
            className="w-14 h-14 rounded-full border border-gray-300 flex items-center justify-center bg-transparent hover:bg-[#D4AF37]/10 hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all duration-300 text-[#0A1931]"
          >
            <ArrowLeft size={20} />
          </button>
          <button
            onClick={() => paginate(1)}
            className="w-14 h-14 rounded-full border border-gray-300 flex items-center justify-center bg-transparent hover:bg-[#D4AF37]/10 hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all duration-300 text-[#0A1931]"
          >
            <ArrowRight size={20} />
          </button>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
          .perspective-\\[1500px\\] {
            perspective: 1500px;
          }
          .preserve-3d {
            transform-style: preserve-3d;
          }
        `
      }} />
    </section>
  );
}
