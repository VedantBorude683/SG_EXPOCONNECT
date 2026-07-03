import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const floatingElements = [
  {
    id: 1,
    type: 'image',
    src: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=600&auto=format&fit=crop',
    className: 'top-[5%] left-[2%] md:top-[10%] md:left-[5%] w-32 h-24 md:w-64 md:h-40 rounded-xl shadow-[0_30px_60px_rgba(10,25,49,0.3)] rotate-[-6deg] p-[4px] bg-gradient-to-br from-[#F0D060] via-[#D4AF37] to-[#8A6D1C]',
    yBob: 15,
    duration: 4,
    delay: 0.2,
    innerClass: 'w-full h-full object-cover rounded-lg'
  },
  {
    id: 2,
    type: 'svg',
    // Star outline with light trails
    content: (
      <svg viewBox="0 0 100 100" fill="none" className="w-full h-full text-[#D4AF37] drop-shadow-[0_0_15px_rgba(212,175,55,0.6)]">
        <motion.path 
          d="M50 5L61 35H95L68 55L78 85L50 65L22 85L32 55L5 35H39L50 5Z" 
          stroke="currentColor" 
          strokeWidth="1.5"
          initial={{ pathLength: 0, opacity: 0.5 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 4, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
        />
        <motion.path 
          d="M50 15L58 38H82L62 52L70 75L50 60L30 75L38 52L18 38H42L50 15Z" 
          stroke="currentColor" 
          strokeWidth="0.5"
          className="opacity-50"
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          style={{ originX: "50px", originY: "50px" }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        />
      </svg>
    ),
    className: 'top-[15%] right-[5%] md:top-[12%] md:right-[10%] w-24 h-24 md:w-36 md:h-36 rotate-[15deg]',
    yBob: -20,
    duration: 5,
    delay: 0.4
  },
  {
    id: 3,
    type: 'card',
    content: (
      <div className="relative overflow-hidden flex flex-col gap-1 items-center justify-center p-4 md:p-6 w-full h-full bg-white/40 backdrop-blur-md border border-white/60 rounded-3xl">
        <motion.div 
          className="absolute top-0 left-[-100%] w-1/2 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-20deg]"
          animate={{ left: ['-100%', '200%'] }}
          transition={{ duration: 3, repeat: Infinity, repeatDelay: 4, ease: 'easeInOut' }}
        />
        <span className="text-2xl md:text-4xl font-black text-[#D4AF37] drop-shadow-sm">500+</span>
        <span className="text-[0.65rem] md:text-xs font-bold text-[#0A1931] uppercase tracking-widest text-center">Global Partners</span>
      </div>
    ),
    className: 'bottom-[10%] left-[2%] md:bottom-[15%] md:left-[8%] w-36 md:w-56 shadow-[0_20px_50px_rgba(10,25,49,0.15)] rotate-[4deg]',
    yBob: 18,
    duration: 4.5,
    delay: 0.6
  },
  {
    id: 4,
    type: 'image',
    src: 'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=600&auto=format&fit=crop',
    className: 'bottom-[5%] right-[2%] md:bottom-[10%] md:right-[5%] w-28 h-28 md:w-56 md:h-56 rounded-full shadow-[0_30px_60px_rgba(10,25,49,0.2)] p-[4px] bg-gradient-to-tr from-[#0A1931] to-[#1e3a68] rotate-[-8deg]',
    yBob: -15,
    duration: 6,
    delay: 0.8,
    innerClass: 'w-full h-full object-cover rounded-full mix-blend-luminosity opacity-80 hover:mix-blend-normal hover:opacity-100 transition-all duration-700'
  },
  {
    id: 5,
    type: 'svg',
    // Brass sextant/compass
    content: (
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
        className="w-full h-full"
      >
        <svg viewBox="0 0 100 100" fill="none" className="w-full h-full text-[#B87333] drop-shadow-[0_10px_20px_rgba(184,115,51,0.3)]">
          <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="2" strokeDasharray="2 4"/>
          <circle cx="50" cy="50" r="35" stroke="currentColor" strokeWidth="4"/>
          <circle cx="50" cy="50" r="8" fill="currentColor"/>
          <path d="M50 15L55 42H45L50 15Z" fill="currentColor"/>
          <path d="M50 85L45 58H55L50 85Z" fill="currentColor"/>
          <path d="M85 50L58 45V55L85 50Z" fill="currentColor"/>
          <path d="M15 50L42 55V45L15 50Z" fill="currentColor"/>
        </svg>
      </motion.div>
    ),
    className: 'top-[45%] left-[-5%] md:top-[40%] md:left-[-2%] w-24 h-24 md:w-48 md:h-48 -z-10',
    yBob: 25,
    duration: 7,
    delay: 1.0
  },
  {
    id: 6,
    type: 'card',
    content: (
      <div className="relative overflow-hidden flex items-center gap-3 p-2 md:p-3 w-full h-full bg-white/50 backdrop-blur-2xl border border-white/60 rounded-full pr-4">
        <motion.div 
          className="absolute top-0 left-[-100%] w-1/2 h-full bg-gradient-to-r from-transparent via-white/50 to-transparent skew-x-[-20deg]"
          animate={{ left: ['-100%', '200%'] }}
          transition={{ duration: 3, repeat: Infinity, repeatDelay: 5, ease: 'easeInOut' }}
        />
        <div className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#8A6D1C] flex items-center justify-center text-white shadow-inner">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <polyline points="22 4 12 14.01 9 11.01"></polyline>
          </svg>
        </div>
        <div className="flex flex-col pr-2">
          <span className="text-sm md:text-base font-black text-[#0A1931]">Premium</span>
          <span className="text-[0.65rem] md:text-xs text-gray-600 font-bold tracking-wide">Execution</span>
        </div>
      </div>
    ),
    className: 'top-[50%] right-[1%] md:top-[45%] md:right-[2%] shadow-[0_20px_40px_rgba(0,0,0,0.1)] rotate-[-5deg]',
    yBob: -12,
    duration: 5.5,
    delay: 0.9
  }
];

export default function AntiGravityHero() {
  return (
    <section className="relative min-h-[90vh] md:min-h-screen w-full flex items-center justify-center pt-24 pb-20 overflow-hidden z-10">
      
      {/* Background Texture */}
      <div className="absolute inset-0 pointer-events-none z-0" style={{
        backgroundColor: '#f9f8f4',
        backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22 opacity=%220.06%22/%3E%3C/svg%3E")'
      }} />

      {/* Glowing Geometric Wireframe World Map (Background for Text) */}
      <div className="absolute inset-0 flex items-center justify-center opacity-30 pointer-events-none z-0">
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 3, ease: 'easeOut' }}
          className="w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] flex items-center justify-center"
        >
          <svg viewBox="0 0 400 200" fill="none" stroke="url(#map-gradient)" strokeWidth="0.5" className="w-full h-auto drop-shadow-[0_0_20px_rgba(212,175,55,0.4)]">
            <defs>
              <radialGradient id="map-gradient" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#D4AF37" stopOpacity="1" />
                <stop offset="100%" stopColor="#0A1931" stopOpacity="0" />
              </radialGradient>
            </defs>
            {/* Abstract World Map Wireframe */}
            <path d="M50 50 Q 80 20 120 40 T 180 30 T 250 60 T 320 40 T 380 80" />
            <path d="M40 80 Q 90 60 130 90 T 200 80 T 260 110 T 330 90 T 390 120" />
            <path d="M60 110 Q 100 140 140 120 T 220 150 T 280 130 T 350 160" />
            <path d="M80 150 Q 120 180 160 160 T 240 190 T 300 170" />
            {/* Longitudes & Latitudes */}
            <path d="M200 0 V 200" strokeDasharray="2 4" />
            <path d="M100 0 V 200" strokeDasharray="2 4" />
            <path d="M300 0 V 200" strokeDasharray="2 4" />
            <path d="M0 100 H 400" strokeDasharray="2 4" />
          </svg>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 max-w-[1400px] mx-auto w-full h-full pointer-events-none z-10">
        {floatingElements.map((el) => (
          <div key={el.id} className={`absolute ${el.className}`}>
            <motion.div
              initial={{ y: '100vh', opacity: 0, rotate: 0 }}
              animate={{ y: 0, opacity: 1, rotate: 0 }}
              transition={{
                duration: 1.5,
                ease: [0.16, 1, 0.3, 1],
                delay: el.delay
              }}
              className="w-full h-full"
            >
              <motion.div
                animate={{ y: [0, el.yBob, 0] }}
                transition={{
                  duration: el.duration,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: el.delay + 1.5
                }}
                className="w-full h-full"
              >
                {el.type === 'image' && (
                  <img src={el.src} alt="Floating Element" className={`${el.innerClass} pointer-events-auto`} />
                )}
                {el.type === 'svg' && (
                  <div className="w-full h-full pointer-events-auto">{el.content}</div>
                )}
                {el.type === 'card' && (
                  <div className="w-full h-full pointer-events-auto">{el.content}</div>
                )}
              </motion.div>
            </motion.div>
          </div>
        ))}
      </div>

      {/* Central Typography Block */}
      <motion.div 
        initial={{ opacity: 0, filter: 'blur(20px)', scale: 0.9 }}
        animate={{ opacity: 1, filter: 'blur(0px)', scale: 1 }}
        transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        className="relative z-20 text-center max-w-4xl mx-auto px-6 pointer-events-auto flex flex-col items-center"
      >
        <h1 
          className="text-[clamp(3.5rem,7vw,7rem)] font-serif tracking-tight leading-[1.05] mb-8 text-[#0A1931]"
          style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
        >
          We make the <br className="hidden md:block" />
          <span className="italic bg-clip-text text-transparent bg-gradient-to-r from-[#D4AF37] via-[#F0D060] to-[#8A6D1C] drop-shadow-[0_2px_15px_rgba(212,175,55,0.4)]">global</span> simple.
        </h1>
        
        {/* Initiate Contact Button */}
        <motion.button
          animate={{ boxShadow: ['0px 0px 0px 0px rgba(212,175,55,0)', '0px 0px 20px 5px rgba(212,175,55,0.3)', '0px 0px 0px 0px rgba(212,175,55,0)'] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-8 px-10 py-4 bg-gradient-to-r from-[#0A1931] to-[#1e3a68] text-white rounded-full font-bold flex items-center gap-3 hover:shadow-[0_15px_30px_rgba(10,25,49,0.3)] transition-all border border-white/10"
        >
          Initiate Contact <ArrowRight size={18} className="text-[#D4AF37]" />
        </motion.button>
      </motion.div>

    </section>
  );
}
