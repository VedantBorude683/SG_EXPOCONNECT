import React, { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Globe, Briefcase, Users, Zap, ArrowRight, Play, ArrowUpRight, Mail } from 'lucide-react';
import { Link } from 'react-router';
import heroVideo from '../assets/mainvideo.mp4';
import PremiumGallery from './components/PremiumGallery';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import OurStory from './components/OurStory';
import MeetTheTeam from './components/MeetTheTeam';
import Projects from './components/Projects';

const galleryImages = [
  {
    url: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop",
    title: "Global Exhibitions",
    caption: "Experience world-class business networking environments."
  },
  {
    url: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop",
    title: "Premium Venues",
    caption: "Immersive spaces designed to foster innovation and connection."
  },
  {
    url: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop",
    title: "Industry Leaders",
    caption: "Learn from the visionaries shaping the future of global enterprise."
  },
  {
    url: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?q=80&w=2070&auto=format&fit=crop",
    title: "Elite Matchmaking",
    caption: "Curated encounters that accelerate your brand's international growth."
  }
];

const services = [
  { icon: Globe, title: 'Global Network', desc: 'Connecting businesses across the world with unparalleled reach and precision.' },
  { icon: Briefcase, title: 'B2B Expos', desc: 'Premium exhibition events and world-class industry conferences for leaders.' },
  { icon: Users, title: 'Matchmaking', desc: 'AI-driven networking tailored exclusively for top executives.' },
  { icon: Zap, title: 'Rapid Growth', desc: 'Accelerating your brand presence instantly in emerging global markets.' },
];

const marqueeItems = [...services, ...services, ...services, ...services];

const gatewaySections = [
  {
    title: "Contact Us",
    subtitle: "Get In Touch",
    description: "Ready to elevate your brand globally? Get in touch with our team to start planning your next monumental business opportunity.",
    link: "#contact",
    images: [
      "https://images.unsplash.com/photo-1516387938699-a93567ec168e?q=80&w=2071&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1557425955-df376b5903c8?q=80&w=2070&auto=format&fit=crop"
    ]
  }
];

export default function App() {
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.25], [1, 0.92]);
  const heroY = useTransform(scrollYProgress, [0, 0.25], [0, 80]);

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fast sequential loading times
  const tCurtain = 0.0;
  const tNav = 0.1;
  const tSubtitle = 0.2;
  const tTitle1 = 0.3;
  const tTitle2 = 0.4;
  const tDesc = 0.5;
  const tButtons = 0.6;
  const tVideo = 0.7;

  const fadeUpSequence = {
    hidden: { opacity: 0, y: 40, filter: 'blur(15px)' },
    visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <main className="min-h-screen bg-[#FDFCF8] text-[#0A1931] overflow-hidden font-sans selection:bg-[#D4AF37] selection:text-white">


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
        {/* <motion.div
          animate={{ x: ['5%', '-5%', '5%'], y: ['5%', '-5%', '5%'], scale: [1, 1.2, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-[#B87333]/[0.06] rounded-full blur-[120px]"
        /> */}

        {/* Soft Navy Ambient Shadow Wash */}
        {/* <motion.div
          animate={{ x: ['0%', '10%', '0%'], y: ['10%', '0%', '10%'], scale: [1, 1.05, 1] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[20%] right-[20%] w-[40vw] h-[40vw] bg-[#0A1931]/[0.03] rounded-full blur-[110px]"
        /> */}
      </div>

      {/* --- SMART GLASS NAVIGATION --- */}

      <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-12 z-10 w-full overflow-hidden bg-gradient-to-b from-white via-white to-transparent">
        <motion.div
          className="w-full relative flex flex-col items-center"
          style={{ opacity: heroOpacity, y: heroY, scale: heroScale }}
        >
          {/* The Seamless White Matcher */}
          <div className="w-full flex justify-center items-center py-10 bg-transparent">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut", delay: tVideo }}
              className="w-full max-w-[750px] mx-auto"
            >
              <video
                src={heroVideo}
                autoPlay
                loop
                muted
                playsInline
                className="w-full max-w-[750px] h-auto object-contain mx-auto shadow-none border-none"
                style={{ backgroundColor: '#FCFAF5' }}
              />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* --- PREMIUM STORYTELLING GALLERY --- */}
      <PremiumGallery images={galleryImages} />

      {/* --- HOMEPAGE ABOUT US (STATISTICS GRID) --- */}
      <div className="relative z-10 w-full">
        <OurStory />
      </div>

      {/* --- MEET THE TEAM SECTION --- */}
      <div className="relative z-10 w-full">
        <MeetTheTeam />
      </div>

      {/* --- PROJECTS SECTION --- */}
      <div className="relative z-10 w-full">
        <Projects />
      </div>

      {/* --- PAGE GATEWAY SECTIONS --- */}
      <div className="relative z-10 bg-white">
        {gatewaySections.map((section, idx) => {
          const isEven = idx % 2 === 0;
          return (
            <section key={idx} className={`relative py-32 overflow-hidden ${isEven ? 'bg-white' : 'bg-[#FDFCF8] border-y border-gray-100/50'}`}>
              <div className="max-w-7xl mx-auto px-8">
                <div className={`flex flex-col lg:flex-row items-center gap-16 lg:gap-24 ${!isEven ? 'lg:flex-row-reverse' : ''}`}>

                  {/* Text Content */}
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={{
                      hidden: { opacity: 0 },
                      visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
                    }}
                    className="flex-1 w-full flex flex-col items-start"
                  >
                    <motion.div variants={{ hidden: { opacity: 0, x: isEven ? -40 : 40 }, visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } } }}>
                      <div className="px-6 py-2 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 text-[#B87333] font-semibold text-sm tracking-widest uppercase mb-6 shadow-sm inline-block">
                        {section.subtitle}
                      </div>
                    </motion.div>
                    <motion.h2 variants={{ hidden: { opacity: 0, x: isEven ? -40 : 40 }, visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } } }} className="text-[clamp(2.5rem,4vw,3.5rem)] font-black text-[#0A1931] tracking-tight leading-[1.1] mb-6">
                      {section.title}
                    </motion.h2>
                    <motion.p variants={{ hidden: { opacity: 0, x: isEven ? -40 : 40 }, visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } } }} className="text-xl text-gray-600 font-light leading-relaxed mb-10">
                      {section.description}
                    </motion.p>
                    <motion.div variants={{ hidden: { opacity: 0, x: isEven ? -40 : 40 }, visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } } }}>
                      {section.link.startsWith('/') ? (
                        <Link to={section.link} className="group inline-flex items-center gap-3 px-8 py-4 bg-[#0A1931] text-white rounded-full font-medium hover:bg-[#D4AF37] transition-colors shadow-lg">
                          Read More
                          <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                      ) : (
                        <a href={section.link} className="group inline-flex items-center gap-3 px-8 py-4 bg-[#0A1931] text-white rounded-full font-medium hover:bg-[#D4AF37] transition-colors shadow-lg">
                          Read More
                          <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </a>
                      )}
                    </motion.div>
                  </motion.div>

                  {/* Stacked Image Collection */}
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex-1 w-full"
                  >
                    <div className="relative w-full aspect-[4/3] group cursor-pointer perspective-[1000px]">
                      {/* Back Image Card (slightly offset) */}
                      <div className="absolute inset-4 sm:inset-8 bg-gray-200 rounded-[2rem] overflow-hidden shadow-xl transition-all duration-700 ease-[0.16,1,0.3,1] group-hover:rotate-[8deg] group-hover:translate-x-10 group-hover:-translate-y-4" style={{ transformOrigin: 'bottom left', rotate: '4deg' }}>
                        <img src={section.images[1]} className="w-full h-full object-cover opacity-70 mix-blend-multiply" alt="Background" />
                        <div className="absolute inset-0 bg-[#0A1931]/10" />
                      </div>

                      {/* Front Image Card */}
                      <div className="absolute inset-0 sm:inset-4 bg-white rounded-[2rem] overflow-hidden shadow-[0_20px_40px_rgba(10,25,49,0.15)] transition-all duration-700 ease-[0.16,1,0.3,1] group-hover:-rotate-[4deg] group-hover:-translate-x-6 group-hover:translate-y-2 z-10 border-[6px] border-white" style={{ transformOrigin: 'bottom right', rotate: '-2deg' }}>
                        <img src={section.images[0]} className="w-full h-full object-cover" alt={section.title} />
                        <div className="absolute inset-0 bg-gradient-to-tr from-[#D4AF37]/0 via-white/10 to-[#D4AF37]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                      </div>
                    </div>
                  </motion.div>

                </div>
              </div>
            </section>
          )
        })}
      </div>

      {/* --- PREMIERE FOOTER --- */}
      <Footer />

      <style dangerouslySetInnerHTML={{
        __html: `
        .mask-gradient {
          mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }

      `}} />
    </main>
  );
}
