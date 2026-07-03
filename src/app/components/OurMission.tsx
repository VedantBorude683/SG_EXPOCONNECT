import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'motion/react';
import { Target, ArrowRight } from 'lucide-react';

const carouselData = [
  {
    image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=1974&auto=format&fit=crop",
    title: "Lasting Partnerships",
    text: "Inspiring strategic alliances and sustainable growth across diverse global markets."
  },
  {
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=2000&auto=format&fit=crop",
    title: "World-Class Platforms",
    text: "Dedicated to creating impactful business platforms that elevate global trade and local innovation."
  },
  {
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop",
    title: "Our Mission",
    text: "To connect businesses, create opportunities, and drive industry advancement through meaningful, large-scale events."
  },
  {
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2069&auto=format&fit=crop",
    title: "Industry Advancement",
    text: "Fostering thought leadership and driving forward-thinking, industry-defining conversations at scale."
  },
  {
    image: "https://images.unsplash.com/photo-1515169067868-5387ec356754?q=80&w=2070&auto=format&fit=crop",
    title: "Professional Execution",
    text: "A professional exhibition and conference management company delivering flawless, turnkey event solutions."
  }
];

export default function OurMission() {
  const [introDone, setIntroDone] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);
  const [activeIndex, setActiveIndex] = useState(2); // Start with middle image
  
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView && !hasTriggered) {
      setHasTriggered(true);
      // Timeline:
      // 0.0s: Target scales in
      // 0.6s: Arrow shoots in
      // 1.1s: Arrow hits -> Ripple explodes
      // 2.2s: Intro dissolves -> UI orchestrates in
      setTimeout(() => {
        setIntroDone(true);
      }, 2200);
    }
  }, [isInView, hasTriggered]);
  
  // Autoplay the carousel every 2 seconds, BUT only after intro is done
  useEffect(() => {
    if (!introDone) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % carouselData.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [introDone]);

  // Math for the Curved Carousel (Rolodex / Fan effect)
  const getCardStyle = (index: number) => {
    const offset = index - activeIndex;
    const absOffset = Math.abs(offset);
    
    return {
      rotate: offset * 12,
      y: absOffset === 0 ? 0 : absOffset === 1 ? 50 : 120,
      scale: absOffset === 0 ? 1.1 : absOffset === 1 ? 0.9 : 0.8,
      zIndex: 50 - absOffset * 10,
      x: offset * 220, 
      opacity: absOffset > 2 ? 0 : 1,
    };
  };

  return (
    <section 
      ref={containerRef}
      className="relative w-full min-h-screen bg-transparent overflow-hidden flex flex-col pb-24"
    >
      
      {/* PHASE 1: The Orchestrated "Mission Target" Intro */}
      <AnimatePresence>
        {!introDone && (
          <motion.div 
            className="absolute inset-0 z-[100] bg-transparent flex items-center justify-center overflow-hidden"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <div className="relative flex items-center justify-center">
              
              {/* 1. Target rotates and scales in */}
              <motion.div 
                className="text-[#D4AF37] relative z-20"
                initial={{ scale: 0, opacity: 0, rotate: -180 }}
                animate={{ scale: 1, opacity: 1, rotate: 0 }}
                transition={{ duration: 1, type: "spring", bounce: 0.4 }}
              >
                <Target size={140} strokeWidth={1} />
              </motion.div>
              
              <motion.div 
                className="absolute w-3 h-3 bg-[#D4AF37] rounded-full z-20"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.4, duration: 0.3 }}
              />

              {/* 2. Arrow shoots in at extreme speed */}
              {hasTriggered && (
                <motion.div 
                  className="absolute z-30 text-[#0A1931] flex items-center"
                  initial={{ x: "-100vw", opacity: 1 }}
                  animate={{ x: "-30px", opacity: 0 }} 
                  transition={{ duration: 0.5, delay: 0.6, ease: "easeIn" }}
                >
                  <ArrowRight size={80} strokeWidth={1.5} className="text-[#0A1931]" />
                </motion.div>
              )}

              {/* 3. Golden Shockwave Ripple on Impact */}
              {hasTriggered && (
                <motion.div 
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#D4AF37] z-10"
                  initial={{ width: 0, height: 0, opacity: 1, borderWidth: "50px" }}
                  animate={{ width: "300vw", height: "300vw", opacity: 0, borderWidth: "1px" }}
                  transition={{ duration: 1.2, delay: 1.1, ease: "easeOut" }}
                />
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* PHASE 2 & 3: The Interactive Curved Carousel & Content Reveal */}
      <div className="relative w-full min-h-[500px] md:min-h-[600px] flex items-center justify-center pt-24 md:pt-32 shrink-0 z-10">
        
        {/* The Carousel Track */}
        <div className="relative flex items-center justify-center w-full max-w-7xl mx-auto">
          {carouselData.map((card, index) => {
            const style = getCardStyle(index);
            const isMobileHidden = Math.abs(index - activeIndex) > 1 ? "hidden md:block" : "block";

            return (
              <motion.div
                key={index}
                className={`absolute w-[260px] h-[340px] md:w-[320px] md:h-[420px] lg:w-[360px] lg:h-[480px] rounded-3xl border-[6px] border-[#FDFCF8] shadow-[0_30px_60px_rgba(0,0,0,0.15)] cursor-pointer overflow-hidden ${isMobileHidden}`}
                // The Cinematic Fan-Out Reveal: Cards start stacked at 0, then spring out to their calculated positions
                initial={{ x: 0, y: 0, rotate: 0, scale: 0.8, opacity: 0 }}
                animate={introDone ? style : { x: 0, y: 0, rotate: 0, scale: 0.8, opacity: 0 }}
                transition={{ 
                  type: "spring", 
                  stiffness: 260, 
                  damping: 25, 
                  // Stagger the fanning out effect from the center
                  delay: introDone ? 0.2 + (Math.abs(index - 2) * 0.1) : 0 
                }}
                onClick={() => setActiveIndex(index)}
                whileHover={{ scale: style.scale === 1.1 ? 1.12 : style.scale + 0.05 }}
              >
                <img 
                  src={card.image} 
                  alt={card.title} 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
                
                <motion.div 
                  className="absolute inset-0 bg-black pointer-events-none"
                  animate={{ opacity: index === activeIndex ? 0 : 0.4 }}
                  transition={{ duration: 0.4 }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* PHASE 3: Premium Editorial Typography Block Reveal */}
      <motion.div 
        className="relative w-full flex-1 flex flex-col items-center justify-start pt-12 md:pt-16 z-50"
        initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
        animate={introDone ? { opacity: 1, y: 0, filter: "blur(0px)" } : { opacity: 0, y: 50, filter: "blur(10px)" }}
        transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }} // Arrives right after the cards fan out
      >
        <div className="max-w-4xl px-6 md:px-12 w-full flex flex-col items-start text-left">
          <h2 
            className="text-6xl md:text-7xl lg:text-[6rem] font-serif text-[#0A1931] leading-[1.05] mb-6 tracking-tight"
            style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
          >
            Our <br className="hidden md:block" />
            <span className="text-[#D4AF37] italic pr-4">Mission.</span>
          </h2>
          <p className="text-lg md:text-[1.35rem] text-gray-600 leading-[1.8] font-sans max-w-3xl">
            Our mission is to connect businesses, create opportunities, and drive industry advancement through meaningful events that inspire innovation, partnerships, and sustainable growth.
          </p>
        </div>
      </motion.div>

    </section>
  );
}
