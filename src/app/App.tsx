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

      <section className="relative min-h-screen flex flex-col items-center justify-center pb-12 z-10 w-full overflow-hidden bg-[#FDFCF8]">
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
                className="w-full max-w-sm lg:max-w-full h-auto object-contain mix-blend-multiply shadow-none border-none -translate-y-4 lg:-translate-y-8"
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

      {/* --- WHATSAPP FLOATING BUTTON --- */}
      <a
        href="https://wa.me/919594546757"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 flex items-center justify-center cursor-pointer"
        aria-label="Chat on WhatsApp"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c-.003 1.396.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
        </svg>
      </a>

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
