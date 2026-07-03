import React from 'react';
import { motion } from 'motion/react';
import { Building2, Compass, CheckCircle2 } from 'lucide-react';

const floatingElements = [
  {
    id: 1,
    type: 'card',
    content: (
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-[#0A1931] flex items-center justify-center text-white">
          <span className="font-bold">500+</span>
        </div>
        <div className="flex flex-col">
          <span className="font-bold text-[#0A1931]">Global Clients</span>
          <span className="text-xs text-gray-500 font-medium tracking-wide">High Impact</span>
        </div>
      </div>
    ),
    className: 'top-[15%] right-[10%] w-64 rotate-[5deg]',
    yBob: 12,
    duration: 5,
  },
  {
    id: 2,
    type: 'image',
    src: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=800&auto=format&fit=crop', // Female Surgeon/Professional
    className: 'top-[25%] left-[8%] w-56 h-72 rotate-[-4deg]',
    innerClass: 'object-cover w-full h-full rounded-[2rem]',
    yBob: -15,
    duration: 6,
  },
  {
    id: 3,
    type: 'card',
    content: (
      <div className="flex flex-col items-center justify-center text-center p-4">
        <Compass className="text-[#D4AF37] w-12 h-12 mb-3" />
        <h4 className="font-bold text-[#0A1931] text-lg">True North</h4>
        <p className="text-xs text-gray-500 mt-1">Guiding your business to its peak.</p>
      </div>
    ),
    className: 'bottom-[20%] right-[15%] w-48 h-48 rotate-[-8deg]',
    yBob: 18,
    duration: 4.5,
  },
  {
    id: 4,
    type: 'card',
    content: (
      <div className="flex items-center gap-3 w-full">
        <CheckCircle2 className="text-[#3b82f6] w-8 h-8" />
        <span className="font-bold text-[#0A1931]">Premium Execution</span>
      </div>
    ),
    className: 'bottom-[12%] left-[20%] w-64 rotate-[3deg]',
    yBob: -12,
    duration: 5.5,
  },
  {
    id: 5,
    type: 'image',
    src: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop', // Base Building
    className: 'top-[10%] left-[35%] w-40 h-40 rotate-[12deg]',
    innerClass: 'object-cover w-full h-full rounded-[2rem]',
    yBob: 15,
    duration: 6.5,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', damping: 25, stiffness: 60 },
  },
};

export default function AntigravityBentoHero() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center bg-[#f9f8f4] overflow-hidden">
      
      {/* Background Texture (Subtle grid/noise) */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: 'radial-gradient(#D4AF37 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      />

      {/* Central Typography Block */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="relative z-30 text-center max-w-3xl px-6 pointer-events-none"
      >
        <h1 className="text-5xl md:text-7xl font-serif text-[#0A1931] tracking-tight leading-tight">
          We make the <br />
          <span className="italic font-light text-[#D4AF37]">hard</span> simple.
        </h1>
      </motion.div>

      {/* Asymmetric Bento Grid / Floating Elements */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="absolute inset-0 max-w-[1400px] mx-auto w-full h-full pointer-events-none z-20"
      >
        {floatingElements.map((el, index) => (
          <motion.div
            key={el.id}
            variants={itemVariants}
            className={`absolute ${el.className}`}
          >
            {/* Bobbing Container (Starts after stagger) */}
            <motion.div
              animate={{ y: [-el.yBob, el.yBob, -el.yBob] }}
              transition={{
                duration: el.duration,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 1.5 + index * 0.1, // delay bobbing until entrance is mostly done
              }}
              className="w-full h-full"
            >
              {/* Interactive Hover Container */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="w-full h-full pointer-events-auto"
                style={{ originX: 0.5, originY: 0.5 }}
              >
                {el.type === 'card' ? (
                  <div className="w-full h-full p-6 bg-white/40 backdrop-blur-xl border border-white/50 shadow-[0_20px_50px_rgba(10,25,49,0.08)] rounded-[2rem] hover:shadow-[0_30px_60px_rgba(10,25,49,0.15)] transition-shadow duration-300 flex items-center justify-center">
                    {el.content}
                  </div>
                ) : (
                  <div className="w-full h-full p-2 bg-white/30 backdrop-blur-xl border border-white/50 shadow-[0_20px_50px_rgba(10,25,49,0.08)] rounded-[2rem] hover:shadow-[0_30px_60px_rgba(10,25,49,0.15)] transition-shadow duration-300">
                     <img src={el.src} alt="Floating Asset" className={el.innerClass} />
                  </div>
                )}
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

    </section>
  );
}
