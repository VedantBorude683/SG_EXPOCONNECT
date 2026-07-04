import React, { useRef, useState } from 'react';
import { motion, useInView } from 'motion/react';
import { Briefcase, Globe, Zap } from 'lucide-react';

export default function OurExpertise() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-15%" });

  const [isSettled, setIsSettled] = useState(false);
  const [activeCard, setActiveCard] = useState<number | null>(null);

  // Close active card if user clicks outside
  const handleStageClick = () => {
    if (activeCard !== null) setActiveCard(null);
  };

  return (
    <section className="w-full bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center gap-12 py-24 px-8 overflow-visible">

        {/* Left Column (Typography - 45% width) */}
        <div className="w-full lg:w-[45%] flex flex-col justify-center relative z-40">
          <h2
            className="text-5xl md:text-6xl font-bold leading-tight mb-6 text-[#0A1931]"
            style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
          >
            Orchestrating Global Business <span className="text-[#D4AF37] italic pr-2">Ecosystems.</span>
          </h2>
          <p className="text-gray-700 font-sans text-lg md:text-xl leading-relaxed">
            We engineer world-class trade exhibitions and B2B platforms that accelerate industry growth and forge international partnerships.
          </p>
        </div>

        {/* Right Column (The Animation Stage - 55% width) */}
        <div
          className="w-full lg:w-[55%] relative h-[600px] flex items-center justify-center cursor-pointer"
          ref={containerRef}
          onClick={handleStageClick}
        >
          {/* Shared Positioning Container for the Z-Index Sandwich */}
          <div className="relative w-[360px] h-[240px] flex items-center justify-center">

            {/* LAYER 1 (Z-0): ENVELOPE BACK */}
            <motion.div
              initial={{ y: 0, opacity: 1 }}
              animate={isInView ? { y: 200, opacity: 0, display: "none" } : {}}
              transition={{ y: { duration: 0.5, delay: 1.4 }, opacity: { duration: 0.5, delay: 1.4 }, display: { delay: 1.9 } }}
              className="absolute inset-0 z-0 bg-[#0A1931] rounded-2xl shadow-xl flex items-center justify-center pointer-events-none"
            >
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 2px, transparent 2px)', backgroundSize: '16px 16px' }} />
            </motion.div>

            {/* LAYER 2 (Z-10): THE CARDS */}
            <div className="absolute z-10 inset-0 flex items-center justify-center">

              {/* Card 1 (B2B Networking - Left) */}
              <motion.div
                initial={{ y: 60, x: 0, scale: 0.35, opacity: 0, rotate: 0 }}
                animate={
                  activeCard === 1 ? { y: -40, x: 0, scale: 1.15, rotate: 0, zIndex: 100, opacity: 1 } :
                    (isSettled ? { y: -50, x: -180, scale: 1, rotate: -12, zIndex: 30, opacity: activeCard !== null ? 0.4 : 1 } :
                      (isInView ? {
                        y: [60, -250, -250, -50],
                        x: [0, 0, 0, -180],
                        rotate: [0, 0, 0, -12],
                        scale: [0.35, 0.35, 0.35, 1],
                        opacity: [0, 1, 1, 1]
                      } : {}))
                }
                transition={isSettled ? { type: "spring", bounce: 0.3, duration: 0.6 } : { duration: 2.2, delay: 0.6, times: [0, 0.3, 0.6, 1], ease: "easeInOut" }}
                onAnimationComplete={() => setIsSettled(true)}
                onClick={(e) => { e.stopPropagation(); setActiveCard(activeCard === 1 ? null : 1); }}
                className="absolute origin-center z-30"
              >
                <motion.div
                  whileHover={activeCard === null ? { y: -20, scale: 1.05, zIndex: 60 } : {}}
                  className={`w-[300px] h-[400px] bg-white/70 backdrop-blur-2xl border-[1.5px] border-white shadow-[0_30px_60px_rgba(0,0,0,0.12)] rounded-3xl p-8 flex flex-col justify-between cursor-pointer pointer-events-auto transition-all ${activeCard === 1 ? 'shadow-[0_40px_80px_rgba(10,25,49,0.2)] bg-white/90' : ''}`}
                >
                  <div className="w-14 h-14 bg-[#D4AF37]/10 rounded-2xl flex items-center justify-center text-[#D4AF37] mb-6">
                    <Globe size={32} />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-[#0A1931] mb-4 tracking-tight" style={{ fontFamily: '"Playfair Display", Georgia, serif' }}>B2B Networking</h3>
                    <p className="text-gray-600 font-light leading-relaxed text-[15px]">Curated business connections tailored to scale your reach globally across diverse emerging markets.</p>
                  </div>
                </motion.div>
              </motion.div>

              {/* Card 2 (World-Class Events - Center) */}
              <motion.div
                initial={{ y: 60, x: 0, scale: 0.35, opacity: 0, rotate: 0 }}
                animate={
                  activeCard === 2 ? { y: -40, x: 0, scale: 1.15, rotate: 0, zIndex: 100, opacity: 1 } :
                    (isSettled ? { y: -80, x: 0, scale: 1, rotate: 0, zIndex: 40, opacity: activeCard !== null ? 0.4 : 1 } :
                      (isInView ? {
                        y: [60, -250, -250, -80],
                        x: [0, 0, 0, 0],
                        rotate: [0, 0, 0, 0],
                        scale: [0.35, 0.35, 0.35, 1],
                        opacity: [0, 1, 1, 1]
                      } : {}))
                }
                transition={isSettled ? { type: "spring", bounce: 0.3, duration: 0.6 } : { duration: 2.2, delay: 0.6, times: [0, 0.3, 0.6, 1], ease: "easeInOut" }}
                onClick={(e) => { e.stopPropagation(); setActiveCard(activeCard === 2 ? null : 2); }}
                className="absolute origin-center z-40"
              >
                <motion.div
                  whileHover={activeCard === null ? { y: -20, scale: 1.05, zIndex: 60 } : {}}
                  className={`w-[300px] h-[400px] bg-white/80 backdrop-blur-2xl border-[1.5px] border-white shadow-[0_30px_60px_rgba(0,0,0,0.12)] rounded-3xl p-8 flex flex-col justify-between cursor-pointer pointer-events-auto relative overflow-hidden transition-all ${activeCard === 2 ? 'shadow-[0_40px_80px_rgba(10,25,49,0.2)] bg-white/95' : ''}`}
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37]/20 blur-3xl rounded-full pointer-events-none" />
                  <div className="w-14 h-14 bg-[#0A1931] rounded-2xl flex items-center justify-center text-white mb-6 relative z-10">
                    <Briefcase size={32} />
                  </div>
                  <div className="relative z-10">
                    <h3 className="text-3xl font-bold text-[#0A1931] mb-4 tracking-tight" style={{ fontFamily: '"Playfair Display", Georgia, serif' }}>World-Class Events</h3>
                    <p className="text-gray-600 font-light leading-relaxed text-[15px]">Premium industry conferences and flawless on-site event execution designed to leave a lasting impact.</p>
                  </div>
                </motion.div>
              </motion.div>

              {/* Card 3 (Market Expansion - Right) */}
              <motion.div
                initial={{ y: 60, x: 0, scale: 0.35, opacity: 0, rotate: 0 }}
                animate={
                  activeCard === 3 ? { y: -40, x: 0, scale: 1.15, rotate: 0, zIndex: 100, opacity: 1 } :
                    (isSettled ? { y: -50, x: 180, scale: 1, rotate: 12, zIndex: 50, opacity: activeCard !== null ? 0.4 : 1 } :
                      (isInView ? {
                        y: [60, -250, -250, -50],
                        x: [0, 0, 0, 180],
                        rotate: [0, 0, 0, 12],
                        scale: [0.35, 0.35, 0.35, 1],
                        opacity: [0, 1, 1, 1]
                      } : {}))
                }
                transition={isSettled ? { type: "spring", bounce: 0.3, duration: 0.6 } : { duration: 2.2, delay: 0.6, times: [0, 0.3, 0.6, 1], ease: "easeInOut" }}
                onClick={(e) => { e.stopPropagation(); setActiveCard(activeCard === 3 ? null : 3); }}
                className="absolute origin-center z-50"
              >
                <motion.div
                  whileHover={activeCard === null ? { y: -20, scale: 1.05, zIndex: 60 } : {}}
                  className={`w-[300px] h-[400px] bg-white/70 backdrop-blur-2xl border-[1.5px] border-white shadow-[0_30px_60px_rgba(0,0,0,0.12)] rounded-3xl p-8 flex flex-col justify-between cursor-pointer pointer-events-auto transition-all ${activeCard === 3 ? 'shadow-[0_40px_80px_rgba(10,25,49,0.2)] bg-white/90' : ''}`}
                >
                  <div className="w-14 h-14 bg-[#D4AF37]/10 rounded-2xl flex items-center justify-center text-[#D4AF37] mb-6">
                    <Zap size={32} />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-[#0A1931] mb-4 tracking-tight" style={{ fontFamily: '"Playfair Display", Georgia, serif' }}>Market Expansion</h3>
                    <p className="text-gray-600 font-light leading-relaxed text-[15px]">Bridging local innovators with global stakeholders to seamlessly scale your business ecosystem.</p>
                  </div>
                </motion.div>
              </motion.div>
            </div>

            {/* LAYER 3 (Z-20): ENVELOPE FRONT & FLAP */}
            <motion.div
              initial={{ y: 0, opacity: 1 }}
              animate={isInView ? { y: 200, opacity: 0, display: "none" } : {}}
              transition={{ y: { duration: 0.5, delay: 1.4 }, opacity: { duration: 0.5, delay: 1.4 }, display: { delay: 1.9 } }}
              className="absolute inset-0 z-20 flex flex-col justify-end pointer-events-none"
            >
              {/* The Flap (Top 80px) */}
              <div className="relative w-full h-[80px]">
                <motion.div
                  initial={{ rotateX: 0 }}
                  animate={isInView ? { rotateX: 180 } : {}}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-b from-[#F0D060] to-[#D4AF37]"
                  style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)', originY: 1 }}
                />
              </div>

              {/* The Front Pocket (Bottom 160px) */}
              <div className="w-full h-[160px] bg-gradient-to-br from-[#1e3a68] to-[#0A1931] rounded-b-2xl shadow-[0_-5px_15px_rgba(0,0,0,0.1)] relative">
                {/* Decorative Gold Rim */}
                <div className="absolute top-0 left-0 w-full h-[2px] bg-[#D4AF37]" />
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
