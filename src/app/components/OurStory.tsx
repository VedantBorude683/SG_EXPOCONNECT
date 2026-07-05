import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform, animate, useInView } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router';

// Counter component for animating numbers
const Counter = ({ from = 0, to, duration = 2 }: { from?: number, to: number, duration?: number }) => {
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    if (inView) {
      const controls = animate(count, to, { duration, ease: "easeOut" });
      return () => controls.stop();
    }
  }, [inView, count, to, duration]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
};

export default function OurStory() {
  const initialImages = [
    { id: 1, url: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop" },
    { id: 2, url: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2069&auto=format&fit=crop" },
    { id: 3, url: "https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=1974&auto=format&fit=crop" },
    { id: 4, url: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?q=80&w=2070&auto=format&fit=crop" }
  ];

  const [images, setImages] = useState(initialImages);

  const moveToEnd = () => {
    setImages((prev) => {
      const newImages = [...prev];
      const first = newImages.shift();
      if (first) {
        newImages.push(first);
      }
      return newImages;
    });
  };

  const handleDragEnd = (event: any, info: any) => {
    if (info.offset.x > 100 || info.offset.x < -100) {
      moveToEnd();
    }
  };

  const statCards = [
    { target: 10, suffix: "+", label: "Years of Excellence" },
    { target: 500, suffix: "+", label: "Global Exhibitions" },
    { target: 50, suffix: "k+", label: "Attendees" },
    { target: 100, suffix: "+", label: "Expert Staff" }
  ];

  return (
    <section className="w-full bg-[#FCFAF5] py-24 relative z-10 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto px-8 items-center">

        {/* Left Column (Text + Swappable Image Stack) */}
        <motion.div
          className="flex flex-col items-start"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="font-serif font-bold text-[#0A1931] text-5xl md:text-6xl tracking-tight mb-8 leading-tight">
            Why <span className="bold text-yellow-600 font-light">Us</span>
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-8">
            We are a professional exhibition and conference management company dedicated to creating impactful business platforms. Our expertise lies in orchestrating world-class trade exhibitions, industry conferences, B2B networking events, and knowledge-sharing forums across diverse sectors.
          </p>
          <Link to="/about-us" className="group inline-flex items-center gap-3 px-8 py-4 bg-[#0A1931] text-white rounded-full font-medium hover:bg-[#D4AF37] transition-colors shadow-lg">
            Read More
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>

          {/* Draggable Image Stack */}
          <div className="w-full h-[300px] mt-0 relative flex justify-center items-center">
            <AnimatePresence>
              {images.map((image, index) => {
                const isTop = index === 0;
                const scaleOffset = 1 - (index * 0.05);
                const yOffset = index * 15;
                const zIndex = 10 - index;

                return (
                  <motion.div
                    key={image.id}
                    layout
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{
                      opacity: 1,
                      scale: scaleOffset,
                      y: yOffset,
                      zIndex: zIndex
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    drag={isTop ? "x" : false}
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={1}
                    onDragEnd={isTop ? handleDragEnd : undefined}
                    className="absolute w-full max-w-[550px] h-[280px] rounded-3xl shadow-2xl overflow-hidden cursor-grab active:cursor-grabbing border-4 border-white"
                  >
                    <img src={image.url} alt="Exhibition" className="w-full h-full object-cover pointer-events-none" />
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Right Column (The 2x2 Stats Grid) */}
        <motion.div
          className="grid grid-cols-2 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15
              }
            }
          }}
        >
          {statCards.map((stat, idx) => (
            <motion.div
              key={idx}
              variants={{
                hidden: { opacity: 0, y: 30, scale: 0.95 },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: { type: "spring", stiffness: 200, damping: 20 }
                }
              }}
              whileHover={{
                scale: 1.05,
                y: -10,
                boxShadow: "0 25px 50px -12px rgba(212, 175, 55, 0.2)",
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.98 }}
              className="group bg-white/80 backdrop-blur-md rounded-2xl p-8 border border-gray-100 shadow-xl cursor-default flex flex-col justify-center items-center text-center relative overflow-hidden"
            >
              {/* Subtle gold gradient glow that appears on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-600/0 to-yellow-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="text-5xl font-black text-[#0A1931] flex items-center group-hover:text-yellow-600 transition-colors duration-300 z-10">
                <Counter to={stat.target} />
                <span>{stat.suffix}</span>
              </div>
              <div className="text-xs font-bold tracking-widest text-gray-500 group-hover:text-[#0A1931] uppercase mt-4 transition-colors duration-300 z-10">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
