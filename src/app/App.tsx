import React, { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'motion/react';
import { Globe, Briefcase, Users, Zap, ArrowRight, Play, ArrowUpRight, Mail } from 'lucide-react';
import introVideo from '../imports/intro-video.mp4';
import v1Video from '../imports/v1.mov';

const services = [
  { icon: Globe, title: 'Global Network', desc: 'Connecting businesses across the world with unparalleled reach and precision.' },
  { icon: Briefcase, title: 'B2B Expos', desc: 'Premium exhibition events and world-class industry conferences for leaders.' },
  { icon: Users, title: 'Matchmaking', desc: 'AI-driven networking tailored exclusively for top executives.' },
  { icon: Zap, title: 'Rapid Growth', desc: 'Accelerating your brand presence instantly in emerging global markets.' },
];

const marqueeItems = [...services, ...services, ...services, ...services];

export default function App() {
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.25], [1, 0.92]);
  const heroY = useTransform(scrollYProgress, [0, 0.25], [0, 80]);

  const [isScrolled, setIsScrolled] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Custom Smooth Cursor
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springConfig = { damping: 40, stiffness: 400, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };
    window.addEventListener('mousemove', moveCursor);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', moveCursor);
    };
  }, [cursorX, cursorY]);

  // Premium sequential loading times
  const tCurtain = 1.0;
  const tNav = tCurtain + 0.4;
  const tSubtitle = tCurtain + 0.6;
  const tTitle1 = tCurtain + 0.9;
  const tTitle2 = tCurtain + 1.2;
  const tDesc = tCurtain + 1.5;
  const tButtons = tCurtain + 1.8;
  const tVideo = tCurtain + 2.2;

  const fadeUpSequence = {
    hidden: { opacity: 0, y: 40, filter: 'blur(10px)' },
    visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <main className="min-h-screen bg-[#FDFCF8] text-[#0A1931] overflow-hidden font-sans selection:bg-[#D4AF37] selection:text-white cursor-none">

      {/* --- CINEMATIC CURTAIN PRELOADER --- */}
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: "-100%" }}
        transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1], delay: tCurtain }}
        className="fixed inset-0 bg-[#0A1931] z-[200] flex flex-col items-center justify-center origin-top"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
          animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center gap-6"
        >
          <div className="w-16 h-16 rounded-full border border-white/20 border-t-[#D4AF37] animate-spin" />
          <div className="text-white text-3xl font-black tracking-widest uppercase flex gap-2 overflow-hidden">
            <motion.span initial={{ y: 40 }} animate={{ y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>SG</motion.span>
            <motion.span initial={{ y: 40 }} animate={{ y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="text-[#D4AF37] font-light">Expo</motion.span>
          </div>
        </motion.div>
      </motion.div>

      {/* --- CUSTOM CURSOR --- */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-[#D4AF37] pointer-events-none z-[100] mix-blend-difference"
        style={{ x: cursorXSpring, y: cursorYSpring }}
        animate={{ scale: isHovering ? 2.5 : 1, backgroundColor: isHovering ? 'rgba(212, 175, 55, 0.1)' : 'transparent' }}
        transition={{ duration: 0.2 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-[#D4AF37] rounded-full pointer-events-none z-[100]"
        style={{ x: cursorX, y: cursorY, translateX: 12, translateY: 12 }}
      />

      {/* --- LUXURY PASTEL / "CRAYON" MESH BACKGROUND --- */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#FDFCF8]">
        {/* High-end fine paper/canvas tooth texture */}
        <div className="absolute inset-0 opacity-[0.05] mix-blend-multiply" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>

        {/* Soft Gold Crayon Wash */}
        <motion.div
          animate={{ x: ['-5%', '5%', '-5%'], y: ['-5%', '5%', '-5%'], scale: [1, 1.1, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-[#D4AF37]/[0.08] rounded-full blur-[100px]"
        />

        {/* Soft Copper Crayon Wash */}
        <motion.div
          animate={{ x: ['5%', '-5%', '5%'], y: ['5%', '-5%', '5%'], scale: [1, 1.2, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-[#B87333]/[0.06] rounded-full blur-[120px]"
        />

        {/* Soft Navy Ambient Shadow Wash */}
        <motion.div
          animate={{ x: ['0%', '10%', '0%'], y: ['10%', '0%', '10%'], scale: [1, 1.05, 1] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[20%] right-[20%] w-[40vw] h-[40vw] bg-[#0A1931]/[0.03] rounded-full blur-[110px]"
        />
      </div>

      {/* --- SMART GLASS NAVIGATION --- */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: tNav }}
        className={`fixed top-0 w-full z-50 transition-all duration-700 ${isScrolled ? 'bg-[#FDFCF8]/70 backdrop-blur-xl border-b border-[#D4AF37]/10 shadow-[0_10px_40px_rgba(10,25,49,0.03)] py-3' : 'bg-transparent py-8'
          }`}
      >
        <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
          <a href="/" className="text-3xl font-black text-[#0A1931] tracking-tighter" onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
            SG<span className="text-[#D4AF37] font-light">Expo</span>
          </a>

          <ul className="hidden md:flex items-center gap-12">
            {['Expertise', 'Experiences', 'Network'].map((item) => (
              <li key={item}>
                <a href={`#${item.toLowerCase()}`} className="text-sm font-semibold tracking-wide text-gray-500 hover:text-[#0A1931] transition-colors relative group uppercase" onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
                  {item}
                  <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-[#D4AF37] transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>

          <motion.button
            whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
            onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}
            className="group relative px-8 py-3.5 bg-[#0A1931] text-white rounded-full font-semibold overflow-hidden shadow-[0_10px_20px_rgba(10,25,49,0.15)]"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37] to-[#B87333] translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-500 ease-[0.16,1,0.3,1]" />
            <span className="relative z-10 flex items-center gap-2">Initiate Contact <ArrowUpRight size={16} /></span>
          </motion.button>
        </div>
      </motion.nav>

      {/* --- HERO SECTION --- */}
      <section className="relative min-h-screen flex items-center pt-24 z-10 max-w-7xl mx-auto px-8">
        <motion.div className="flex flex-col lg:flex-row items-center justify-between gap-16 w-full" style={{ opacity: heroOpacity, y: heroY, scale: heroScale }}>

          {/* Left Side: Sequenced Content */}
          <div className="flex-1 flex flex-col items-start w-full relative z-20">
            <div className="relative w-full">

              {/* Uploaded Video as an Animated Floating Logo */}
              <motion.div 
                initial="hidden" animate="visible" variants={fadeUpSequence} transition={{ delay: tVideo + 0.3 }}
                className="mb-8 relative w-full max-w-[250px] flex justify-start items-center"
              >
                <video 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  src={v1Video}
                  className="w-full h-auto mix-blend-multiply opacity-90"
                  style={{
                    filter: 'contrast(1.15) brightness(1.05)',
                    maskImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25'%3E%3Cdefs%3E%3Cfilter id='b'%3E%3CfeGaussianBlur stdDeviation='8' /%3E%3C/filter%3E%3C/defs%3E%3Crect x='5%25' y='5%25' width='90%25' height='90%25' rx='25' fill='black' filter='url(%23b)' /%3E%3C/svg%3E")`,
                    WebkitMaskImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25'%3E%3Cdefs%3E%3Cfilter id='b'%3E%3CfeGaussianBlur stdDeviation='8' /%3E%3C/filter%3E%3C/defs%3E%3Crect x='5%25' y='5%25' width='90%25' height='90%25' rx='25' fill='black' filter='url(%23b)' /%3E%3C/svg%3E")`,
                    maskSize: '100% 100%',
                    WebkitMaskSize: '100% 100%',
                    maskRepeat: 'no-repeat',
                    WebkitMaskRepeat: 'no-repeat'
                  }}
                />
              </motion.div>

              <motion.div
                initial="hidden" animate="visible" variants={fadeUpSequence} transition={{ delay: tSubtitle }}
                className="flex items-center gap-4 mb-8"
              >
                <div className="w-12 h-[1px] bg-[#D4AF37]" />
                <p className="text-[#B87333] font-bold tracking-[0.25em] uppercase text-xs">India Pvt Ltd</p>
              </motion.div>

              <div className="relative leading-[0.9] mb-12 z-10">
                <motion.span
                  initial="hidden" animate="visible" variants={fadeUpSequence} transition={{ delay: tTitle1 }}
                  className="block text-[clamp(4.5rem,8vw,8rem)] font-black text-[#0A1931] tracking-[0.2em]"
                  style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}
                >
                  sg expo
                </motion.span>
                <motion.span
                  initial={{ clipPath: 'inset(0 100% 0 0)' }}
                  animate={{ clipPath: 'inset(0 0% 0 0)' }}
                  transition={{ duration: 1.5, ease: 'easeOut', delay: tTitle2 }}
                  className="absolute top-[35%] left-[22%] -rotate-[6deg] font-['Caveat'] text-[clamp(5.5rem,10vw,9rem)] text-[#D4AF37] drop-shadow-[0_15px_30px_rgba(212,175,55,0.25)] pointer-events-none tracking-normal"
                >
                  connect
                </motion.span>
              </div>

              <motion.p
                initial="hidden" animate="visible" variants={fadeUpSequence} transition={{ delay: tDesc }}
                className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed max-w-xl mb-14"
              >
                Forging <strong className="font-semibold text-[#0A1931]">Business Empires</strong>. <br />
                Uniting <strong className="font-semibold text-[#0A1931]">Global Visionaries</strong>.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: tButtons, duration: 1, ease: "easeOut" }}
              className="flex items-center gap-8"
            >
              <motion.button
                onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}
                whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                className="group flex items-center gap-4 px-10 py-5 bg-[#0A1931] text-white rounded-full text-lg font-medium shadow-[0_20px_40px_rgba(10,25,49,0.15)] hover:shadow-[0_25px_50px_rgba(10,25,49,0.25)] transition-all duration-500"
              >
                Discover Excellence
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 group-hover:translate-x-2 transition-all duration-500">
                  <ArrowRight size={20} />
                </div>
              </motion.button>

              <motion.button
                onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}
                whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                className="group flex items-center gap-4 text-[#0A1931] font-semibold hover:text-[#D4AF37] transition-colors"
              >
                <div className="w-16 h-16 rounded-full border border-gray-300 flex items-center justify-center group-hover:border-[#D4AF37] group-hover:bg-[#D4AF37]/10 transition-all duration-500 shadow-sm group-hover:shadow-md" style={{ backdropFilter: 'blur(4px)' }}>
                  <Play size={20} className="ml-1 text-[#D4AF37]" fill="currentColor" />
                </div>
                <span>Play Showreel</span>
              </motion.button>
            </motion.div>
          </div>

          {/* Right Side: The Masterpiece Video Sequence */}
          <motion.div
            className="flex-1 w-full max-w-[750px] aspect-square relative z-10 flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8, filter: 'blur(30px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            transition={{ duration: 2, delay: tVideo, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Soft backdrop glow to anchor the video */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#D4AF37]/10 to-[#0A1931]/5 rounded-full blur-[80px] -z-10 animate-pulse" style={{ animationDuration: '4s' }} />

            <motion.div
              className="w-full h-full relative"
              animate={{ y: [-15, 15, -15] }}
              transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
            >
              <video
                ref={videoRef}
                src={introVideo}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover mix-blend-multiply opacity-95"
                style={{
                  /* Pushes contrast to ensure backgrounds dissolve entirely when multiplied */
                  filter: 'contrast(1.1) brightness(1.05) grayscale(0.1)',
                  /* Ultimate feathering mask: zero sharp edges, pure seamless blend */
                  maskImage: 'radial-gradient(circle at center, black 35%, transparent 75%)',
                  WebkitMaskImage: 'radial-gradient(circle at center, black 35%, transparent 75%)',
                }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* --- CAPABILITIES MARQUEE --- */}
      <section className="relative py-40 z-10 overflow-hidden bg-gradient-to-b from-transparent to-[#FDFCF8] border-t border-gray-100/50">
        <div className="max-w-7xl mx-auto px-8 mb-24 flex flex-col items-center">
          <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="px-6 py-2 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 text-[#B87333] font-semibold text-sm tracking-widest uppercase mb-8 shadow-sm">
            Global Infrastructure
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-[clamp(3rem,6vw,4.5rem)] font-black text-[#0A1931] tracking-tighter text-center">
            Unrivaled <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#B87333]">Capabilities</span>
          </motion.h2>
        </div>

        <div className="relative w-full overflow-hidden flex py-12 pointer-events-auto group mask-gradient">
          <motion.div className="flex gap-10 w-max pl-10" animate={{ x: ["0%", "-50%"] }} transition={{ repeat: Infinity, ease: "linear", duration: 45 }} style={{ animationPlayState: 'var(--play-state, running)' }} onHoverStart={(e) => (e.currentTarget.style.setProperty('--play-state', 'paused'))} onHoverEnd={(e) => (e.currentTarget.style.setProperty('--play-state', 'running'))}>
            {marqueeItems.map((svc, idx) => (
              <motion.div key={idx} onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)} className="relative w-[400px] h-[320px] bg-white border border-[#D4AF37]/10 rounded-[2.5rem] p-10 cursor-pointer shadow-[0_15px_40px_rgba(10,25,49,0.04)] transition-all duration-700 overflow-hidden group/card hover:border-[#D4AF37]/40 hover:shadow-[0_30px_60px_rgba(212,175,55,0.12)] hover:-translate-y-4 flex-shrink-0 flex flex-col justify-between">
                <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/0 via-transparent to-[#B87333]/[0.05] opacity-0 group-hover/card:opacity-100 transition-opacity duration-700 pointer-events-none" />

                <div className="relative z-10 flex justify-between items-start">
                  <div className="w-20 h-20 rounded-2xl bg-[#FDFCF8] border border-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37] group-hover/card:text-white group-hover/card:bg-[#0A1931] group-hover/card:scale-110 group-hover/card:-rotate-6 transition-all duration-500 shadow-sm">
                    <svc.icon size={36} strokeWidth={1.5} />
                  </div>
                  <div className="w-10 h-10 rounded-full border border-[#D4AF37]/30 flex items-center justify-center opacity-0 -translate-x-4 group-hover/card:opacity-100 group-hover/card:translate-x-0 transition-all duration-500 text-[#D4AF37]">
                    <ArrowUpRight size={20} />
                  </div>
                </div>

                <div className="relative z-10 mt-8">
                  <h3 className="text-3xl font-bold text-[#0A1931] mb-4 tracking-tight">{svc.title}</h3>
                  <p className="text-gray-500 leading-relaxed text-lg">{svc.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- PREMIERE FOOTER --- */}
      <footer className="relative bg-[#0A1931] text-white pt-32 pb-12 overflow-hidden rounded-t-[4rem] z-20">
        <div className="absolute inset-0 opacity-15" style={{ backgroundImage: 'radial-gradient(circle at top right, #D4AF37 0%, transparent 60%)' }} />

        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
            <div className="lg:col-span-2">
              <h3 className="text-5xl font-black tracking-tighter mb-6">
                SG<span className="text-[#D4AF37] font-light">Expo</span>
              </h3>
              <p className="text-gray-400 text-xl max-w-md font-light leading-relaxed mb-10">
                Redefining global business connections through extraordinary exhibition experiences.
              </p>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full border border-[#D4AF37]/30 flex items-center justify-center hover:bg-[#D4AF37] hover:border-transparent transition-all cursor-pointer"><Mail size={20} /></div>
                <div className="w-12 h-12 rounded-full border border-[#D4AF37]/30 flex items-center justify-center hover:bg-[#D4AF37] hover:border-transparent transition-all cursor-pointer"><Globe size={20} /></div>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-8 text-white">Platform</h4>
              <ul className="space-y-4">
                {['Exhibitions', 'Networking', 'Partnerships', 'Global Reach'].map(link => (
                  <li key={link}><a href="#" className="text-gray-400 hover:text-[#D4AF37] transition-colors">{link}</a></li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-8 text-white">Company</h4>
              <ul className="space-y-4">
                {['About SG Expo', 'Leadership', 'Careers', 'Contact'].map(link => (
                  <li key={link}><a href="#" className="text-gray-400 hover:text-[#D4AF37] transition-colors">{link}</a></li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-gray-500">&copy; {new Date().getFullYear()} SG Expo Connect India Pvt Ltd. All rights reserved.</p>
            <div className="flex gap-8 text-gray-500 text-sm">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

      <style dangerouslySetInnerHTML={{
        __html: `
        .mask-gradient {
          mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }
        /* Hide default cursor on desktop since we have a custom one */
        @media (pointer: fine) {
          body, a, button { cursor: none !important; }
        }
      `}} />
    </main>
  );
}
