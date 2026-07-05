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
import Contact from './components/Contact';

const galleryImages = [
  {
    url: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop",
    title: "World-Class Exhibitions",
    caption: "SG Expo Connect orchestrates large-scale international trade exhibitions across the globe, bringing industries together under one roof."
  },
  {
    url: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop",
    title: "Industry Conferences",
    caption: "We design and manage high-impact conferences that position your brand at the forefront of global industry conversations."
  },
  {
    url: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop",
    title: "B2B Networking Platforms",
    caption: "Our bespoke matchmaking events connect decision-makers, investors, and innovators for meaningful business partnerships."
  },
  {
    url: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?q=80&w=2070&auto=format&fit=crop",
    title: "Global Event Management",
    caption: "From Dubai to Mumbai, we execute events with precision, creativity, and an unwavering commitment to excellence."
  }
];

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

      <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 md:pt-32 pb-12 z-10 w-full overflow-hidden bg-[#FCFAF5]">
        <motion.div
          className="w-full max-w-7xl mx-auto px-6 md:px-8 relative"
          style={{ opacity: heroOpacity, y: heroY, scale: heroScale }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-center">

            {/* Left Column: Video */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut", delay: tVideo }}
              className="w-full relative flex justify-center items-center order-1 lg:order-1"
            >
              <video
                src={heroVideo}
                autoPlay
                loop
                muted
                playsInline
                className="w-full max-w-sm lg:max-w-full h-auto object-contain mix-blend-multiply shadow-none border-none"
                style={{ backgroundColor: '#FCFAF5' }}
              />
            </motion.div>

            {/* Right Column: Text Content */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUpSequence}
              className="flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-2"
            >
              <h1 className="font-serif font-black text-[#0A1931] text-[clamp(2rem,6vw,3.5rem)] leading-[1.1] tracking-tight mb-4">
                <span className="block mb-1 text-gray-800">Where Industries Meet</span>
                <span className="block mb-1 text-gray-800">Where Ideas Connect</span>
                <span className="block text-[#D4AF37]">Where Business Grows</span>
              </h1>

              <p className="text-gray-600 text-base md:text-lg font-light leading-relaxed mb-6 max-w-lg">
                <strong className="font-semibold text-[#0A1931]">SG Expo Connect</strong> creates powerful exhibitions, conferences, and business networking platforms that bring together industry leaders, innovators, and decision-makers.
              </p>

              <div className="mb-8">
                <p className="text-lg font-medium tracking-wide text-[#0A1931]">
                  Connect. Collaborate. Grow.
                </p>
              </div>


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

      {/* --- CONTACT SECTION --- */}
      <div className="relative z-10 w-full">
        <Contact />
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
