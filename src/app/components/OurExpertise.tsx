import React from 'react';
import { motion } from 'motion/react';

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
  return (
    <section className="relative w-full bg-[#FDFCF8] py-24 md:py-32 overflow-hidden">
      
      {/* Subtle, High-End Dot-Matrix Background Texture */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-60 z-0" 
        style={{ 
          backgroundImage: 'radial-gradient(#e5e7eb 1px, transparent 1px)', 
          backgroundSize: '24px 24px' 
        }} 
      />

      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>

      <div className="w-full flex flex-col lg:flex-row items-center relative z-10">
        
        {/* Header Column */}
        <div className="w-full lg:w-[35%] lg:min-w-[450px] px-8 lg:px-16 mb-12 lg:mb-0 flex flex-col justify-center">
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

        {/* Manually Scrollable Horizontal Track */}
        <div className="w-full lg:w-[65%] relative">
          
          {/* Elegant Gradient Layout Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-[200vw] h-[2px] bg-gradient-to-r from-transparent via-gray-300 to-transparent -translate-y-1/2 z-0 pointer-events-none" />

          {/* Scroll Container */}
          <div 
            className="flex gap-8 lg:gap-12 px-8 lg:px-12 pb-16 pt-8 overflow-x-auto snap-x snap-mandatory no-scrollbar relative z-10 w-full"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {expertiseCards.map((card) => (
              <motion.div 
                key={card.id}
                whileHover={{ y: -12, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="bg-white/60 lg:bg-white/40 backdrop-blur-2xl border border-white/60 shadow-xl lg:shadow-[0_20px_50px_rgba(0,0,0,0.05)] rounded-[2.5rem] p-8 lg:p-10 shrink-0 w-[85vw] md:w-[400px] lg:w-[460px] min-h-[460px] lg:h-[520px] flex flex-col justify-between cursor-pointer relative group transition-colors duration-300 hover:bg-white snap-center"
              >
                {/* Top Zone: Animated SVG Logo inside Soft Gold Squircle */}
                <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-3xl bg-gradient-to-br from-[#D4AF37]/10 to-[#D4AF37]/5 flex items-center justify-center text-[#D4AF37] p-4 lg:p-5 shadow-inner border border-[#D4AF37]/20">
                  {card.renderIcon()}
                </div>
                
                {/* Middle Zone: Rich Editorial Typography */}
                <div className="mt-8 mb-auto">
                  <h3 className="text-2xl lg:text-3xl font-bold text-[#0A1931] mb-4 tracking-tight">
                    {card.title}
                  </h3>
                  <p className="text-lg lg:text-xl text-gray-600 leading-relaxed font-light">
                    {card.desc}
                  </p>
                </div>

                {/* Bottom Zone: Premium Feature Badges */}
                <div className="flex items-center gap-2 lg:gap-3 mt-8 flex-wrap">
                  {card.tags.map((tag, i) => (
                    <span key={i} className="px-3 lg:px-4 py-1.5 lg:py-2 bg-white/50 backdrop-blur-md border border-gray-200/50 rounded-full text-xs lg:text-sm font-semibold text-[#0A1931] tracking-wide shadow-sm group-hover:bg-white transition-colors duration-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
