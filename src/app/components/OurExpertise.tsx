import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

// Card Data with inline animated SVGs for top-tier visual feedback
const expertiseCards = [
  {
    id: 1,
    title: "B2B Networking",
    desc: "Curated business connections tailored to scale your reach globally across diverse emerging markets.",
    tags: ["Verified Matches", "Global Buyers", "C-Level Access"],
    renderIcon: () => (
      <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
        {/* Network Mesh Lines */}
        <motion.line x1="20" y1="50" x2="50" y2="20" stroke="currentColor" strokeWidth="2" strokeOpacity="0.4" />
        <motion.line x1="50" y1="20" x2="80" y2="50" stroke="currentColor" strokeWidth="2" strokeOpacity="0.4" />
        <motion.line x1="20" y1="50" x2="50" y2="80" stroke="currentColor" strokeWidth="2" strokeOpacity="0.4" />
        <motion.line x1="50" y1="80" x2="80" y2="50" stroke="currentColor" strokeWidth="2" strokeOpacity="0.4" />
        
        {/* Central Pulse */}
        <motion.circle cx="50" cy="50" r="14" fill="currentColor" fillOpacity="0.2" animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0.5, 0.2] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} />
        <motion.circle cx="50" cy="50" r="6" fill="currentColor" />
        
        {/* Satellite Nodes */}
        <motion.circle cx="20" cy="50" r="5" fill="currentColor" animate={{ scale: [1, 1.4, 1] }} transition={{ duration: 2, repeat: Infinity, delay: 0.5 }} />
        <motion.circle cx="80" cy="50" r="5" fill="currentColor" animate={{ scale: [1, 1.4, 1] }} transition={{ duration: 2, repeat: Infinity, delay: 1 }} />
        <motion.circle cx="50" cy="20" r="5" fill="currentColor" animate={{ scale: [1, 1.4, 1] }} transition={{ duration: 2, repeat: Infinity, delay: 1.5 }} />
        <motion.circle cx="50" cy="80" r="5" fill="currentColor" animate={{ scale: [1, 1.4, 1] }} transition={{ duration: 2, repeat: Infinity, delay: 0 }} />
      </svg>
    )
  },
  {
    id: 2,
    title: "World-Class Events",
    desc: "Premium industry conferences and flawless on-site event execution designed to leave a lasting impact.",
    tags: ["Turnkey Execution", "Hybrid Formats", "VIP Hosting"],
    renderIcon: () => (
      <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
        <motion.g animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} style={{ originX: '50px', originY: '50px' }}>
          {/* Geometric Star Spotlight */}
          <path d="M 50 10 L 60 40 L 90 50 L 60 60 L 50 90 L 40 60 L 10 50 L 40 40 Z" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="1" />
          <path d="M 50 25 L 56 44 L 75 50 L 56 56 L 50 75 L 44 56 L 25 50 L 44 44 Z" fill="currentColor" />
        </motion.g>
        <motion.circle cx="50" cy="50" r="3" fill="#fff" animate={{ opacity: [0, 1, 0], scale: [0.8, 1.2, 0.8] }} transition={{ duration: 2, repeat: Infinity }} />
      </svg>
    )
  },
  {
    id: 3,
    title: "Market Expansion",
    desc: "Bridging local innovators with global stakeholders to seamlessly scale your business ecosystem.",
    tags: ["Strategic Entry", "Local Partners", "Scale Fast"],
    renderIcon: () => (
      <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
        <motion.circle cx="50" cy="50" r="10" fill="currentColor" />
        {/* Expanding Concentric Radar Rings */}
        <motion.circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="2" animate={{ scale: [1, 1.8], opacity: [0.6, 0] }} transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut", delay: 0 }} />
        <motion.circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="2" animate={{ scale: [1, 1.8], opacity: [0.6, 0] }} transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut", delay: 1.25 }} />
        <circle cx="50" cy="50" r="38" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" opacity="0.3" />
        {/* Radar Sweep Arc */}
        <motion.path d="M 50 50 L 50 12 A 38 38 0 0 1 88 50 Z" fill="currentColor" opacity="0.1" style={{ originX: '50px', originY: '50px' }} animate={{ rotate: 360 }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }} />
      </svg>
    )
  },
  {
    id: 4,
    title: "End-to-End Solutions",
    desc: "Comprehensive event management from concept development, marketing, to post-event data analysis.",
    tags: ["Concept Design", "Full Logistics", "Data Analytics"],
    renderIcon: () => (
      <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
        {/* Infinity / Continuous Loop Track */}
        <path 
          d="M 25 50 C 25 30, 45 30, 50 50 C 55 70, 75 70, 75 50 C 75 30, 55 30, 50 50 C 45 70, 25 70, 25 50 Z" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="3" 
          strokeOpacity="0.2"
        />
        {/* Drawing Infinity Loop */}
        <motion.path 
          d="M 25 50 C 25 30, 45 30, 50 50 C 55 70, 75 70, 75 50 C 75 30, 55 30, 50 50 C 45 70, 25 70, 25 50 Z" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="3"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        />
        <circle cx="25" cy="50" r="5" fill="currentColor" />
        <circle cx="75" cy="50" r="5" fill="currentColor" />
      </svg>
    )
  }
];

export default function OurExpertise() {
  const targetRef = useRef<HTMLDivElement>(null);
  
  // Attach Framer Motion's scroll hook to track the wrapper's physical scroll position
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Calculate negative horizontal translation (x) of the horizontal track.
  // -60% perfectly reveals the 4th massive card dynamically while keeping it framed correctly.
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-60%"]);

  return (
    // 1. The Target Wrapper: 300vh height ensures a beautiful, long horizontal scroll experience
    <section ref={targetRef} className="relative w-full bg-[#FDFCF8] lg:h-[300vh]">
      
      {/* Subtle, High-End Dot-Matrix Background Texture */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-60 z-0" 
        style={{ 
          backgroundImage: 'radial-gradient(#e5e7eb 1px, transparent 1px)', 
          backgroundSize: '24px 24px' 
        }} 
      />

      {/* 2. The Sticky Container */}
      <div className="lg:sticky lg:top-0 lg:h-screen w-full flex flex-col lg:flex-row items-center lg:overflow-hidden relative z-10">
        
        <div className="w-full h-full flex flex-col lg:flex-row items-center max-w-[100vw]">
          
          {/* Header Column: Sticky on the left */}
          <div className="w-full lg:w-[35%] lg:min-w-[450px] px-8 lg:px-16 pt-24 lg:pt-0 z-20 flex flex-col justify-center h-full bg-[#FDFCF8]/80 backdrop-blur-md lg:bg-transparent relative shadow-xl lg:shadow-none pb-12 lg:pb-0">
            <h2 
              className="text-5xl md:text-6xl lg:text-7xl font-serif text-[#0A1931] tracking-tight leading-[1.1] mb-6"
              style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
            >
              Orchestrating <br className="hidden lg:block" />
              Global Business <br className="hidden lg:block" />
              <span className="italic text-[#D4AF37]">Ecosystems.</span>
            </h2>
            <p className="text-xl text-gray-600 font-light leading-relaxed max-w-sm">
              We engineer world-class trade exhibitions and B2B platforms that accelerate industry growth and forge international partnerships.
            </p>
          </div>

          {/* Horizontal Track (Desktop Only) */}
          <div className="hidden lg:flex w-[65%] h-full items-center relative">
            
            {/* Elegant Gradient Layout Line */}
            <div className="absolute top-1/2 left-0 w-[400vw] h-[2px] bg-gradient-to-r from-transparent via-gray-300 to-transparent -translate-y-1/2 z-0" />

            {/* The Animated Track holding the cards */}
            <motion.div style={{ x }} className="flex gap-12 px-12 z-10 w-max items-center h-full">
              {expertiseCards.map((card) => (
                <motion.div 
                  key={card.id}
                  // 4. Micro-Interactions: Premium Physical Lift
                  whileHover={{ y: -12, scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="bg-white/40 backdrop-blur-2xl border border-white/60 shadow-[0_20px_50px_rgba(0,0,0,0.05)] rounded-[2.5rem] p-10 min-w-[460px] w-[460px] h-[520px] flex flex-col justify-between cursor-pointer relative group transition-colors duration-300 hover:bg-white/60"
                >
                  {/* Top Zone: Animated SVG Logo inside Soft Gold Squircle */}
                  <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-[#D4AF37]/10 to-[#D4AF37]/5 flex items-center justify-center text-[#D4AF37] p-5 shadow-inner border border-[#D4AF37]/20">
                    {card.renderIcon()}
                  </div>
                  
                  {/* Middle Zone: Rich Editorial Typography */}
                  <div className="mt-8 mb-auto">
                    <h3 className="text-3xl font-bold text-[#0A1931] mb-4 tracking-tight">
                      {card.title}
                    </h3>
                    <p className="text-xl text-gray-600 leading-relaxed font-light">
                      {card.desc}
                    </p>
                  </div>

                  {/* Bottom Zone: Premium Feature Badges */}
                  <div className="flex items-center gap-3 mt-8 flex-wrap">
                    {card.tags.map((tag, i) => (
                      <span key={i} className="px-4 py-2 bg-white/50 backdrop-blur-md border border-gray-200/50 rounded-full text-sm font-semibold text-[#0A1931] tracking-wide shadow-sm group-hover:bg-white transition-colors duration-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Responsive Fallback: Vertical Stack for Mobile */}
          <div className="lg:hidden flex flex-col gap-10 px-6 pb-24 pt-12 w-full relative z-10">
             {/* Vertical Timeline Gradient for mobile */}
             <div className="absolute top-12 left-[4.5rem] w-[2px] h-[80%] bg-gradient-to-b from-transparent via-gray-300 to-transparent z-0" />

             {expertiseCards.map((card) => (
               <div 
                 key={card.id}
                 className="bg-white/60 backdrop-blur-2xl border border-white/60 shadow-xl rounded-[2rem] p-8 flex flex-col justify-between relative z-10 w-full max-w-md mx-auto min-h-[420px]"
               >
                 <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-[#D4AF37]/10 to-[#D4AF37]/5 flex items-center justify-center text-[#D4AF37] p-4 shadow-inner border border-[#D4AF37]/20 mb-6">
                   {card.renderIcon()}
                 </div>
                 
                 <div className="mb-8">
                   <h3 className="text-2xl font-bold text-[#0A1931] mb-3 tracking-tight">
                     {card.title}
                   </h3>
                   <p className="text-lg text-gray-600 leading-relaxed font-light">
                     {card.desc}
                   </p>
                 </div>

                 <div className="flex items-center gap-2 flex-wrap mt-auto">
                    {card.tags.map((tag, i) => (
                      <span key={i} className="px-3 py-1.5 bg-white/50 border border-gray-200/50 rounded-full text-xs font-semibold text-[#0A1931] shadow-sm">
                        {tag}
                      </span>
                    ))}
                 </div>
               </div>
             ))}
          </div>

        </div>
      </div>
    </section>
  );
}
