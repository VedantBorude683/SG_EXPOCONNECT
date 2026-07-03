import React from 'react';
import { motion } from 'motion/react';
import Footer from './components/Footer';
import AntiGravityHero from './components/AntiGravityHero';
import OurStory from './components/OurStory';
import OurExpertise from './components/OurExpertise';
import OurMission from './components/OurMission';

export default function AboutUs() {
  const fadeUpSequence = {
    hidden: { opacity: 0, y: 40, filter: 'blur(10px)' },
    visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <main className="min-h-screen bg-[#FDFCF8] text-[#0A1931] overflow-hidden font-sans selection:bg-[#D4AF37] selection:text-white">
      {/* Background Mesh (Reused from App) */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#FDFCF8]">
        <div className="absolute inset-0 opacity-[0.05] mix-blend-multiply" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>
        <motion.div animate={{ x: ['-5%', '5%', '-5%'], y: ['-5%', '5%', '-5%'], scale: [1, 1.1, 1] }} transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }} className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-[#D4AF37]/[0.08] rounded-full blur-[100px]" />
        <motion.div animate={{ x: ['5%', '-5%', '5%'], y: ['5%', '-5%', '5%'], scale: [1, 1.2, 1] }} transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-[#B87333]/[0.06] rounded-full blur-[120px]" />
      </div>

      {/* Anti-Gravity Hero Section */}
      <div className="relative z-10">
        <AntiGravityHero />
      </div>

      {/* Section 1: Cinematic Story Reveal (The Staggered Entrance) */}
      <div className="relative z-10 pt-16">
        <OurStory />
      </div>

      {/* Section 2: 3D Scrolling Expertise (The Smooth Handoff) */}
      <div className="relative z-10 pt-32">
        <OurExpertise />
      </div>

      {/* Section 3: Our Mission (The Grand Finale) */}
      <div className="relative z-10 pt-32 pb-16">
        <OurMission />
      </div>

      <div className="relative z-10">
        <Footer />
      </div>
    </main>
  );
}
