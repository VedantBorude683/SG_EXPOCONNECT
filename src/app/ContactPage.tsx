import React from 'react';
import { motion } from 'motion/react';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#FCFAF5] text-[#0A1931] overflow-hidden font-sans selection:bg-[#D4AF37] selection:text-white">
      {/* Background Mesh */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#FCFAF5]">
        <div
          className="absolute inset-0 opacity-[0.05] mix-blend-multiply"
          style={{
            backgroundImage:
              'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")',
          }}
        />
        <motion.div
          animate={{ x: ['-5%', '5%', '-5%'], y: ['-5%', '5%', '-5%'], scale: [1, 1.1, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-[#D4AF37]/[0.08] rounded-full blur-[100px]"
        />
        <motion.div
          animate={{ x: ['5%', '-5%', '5%'], y: ['5%', '-5%', '5%'], scale: [1, 1.2, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-[#B87333]/[0.06] rounded-full blur-[120px]"
        />
      </div>

      {/* Page Header */}
      <div className="relative z-10 pt-12 pb-4 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="inline-block text-yellow-600 font-semibold text-sm tracking-widest uppercase mb-4">
            Contact Us
          </span>
          <h1 className="font-serif font-bold text-[#0A1931] text-5xl md:text-6xl lg:text-7xl tracking-tight leading-tight">
            Let's Build Something{' '}
            <span className="font-bold text-yellow-600 font-light">Exceptional.</span>
          </h1>
          <p className="text-gray-500 text-lg font-light mt-6 max-w-2xl mx-auto leading-relaxed">
            Have an exhibition or event in mind? We'd love to hear about it. Reach out and our team will get back to you promptly with a tailored proposal.
          </p>
        </motion.div>
      </div>

      {/* Get In Touch Form Section (reused from homepage) */}
      <div className="relative z-10">
        <Contact />
      </div>

      {/* Footer */}
      <div className="relative z-10">
        <Footer />
      </div>
    </main>
  );
}
