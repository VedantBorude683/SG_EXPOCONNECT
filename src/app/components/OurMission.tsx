import React from 'react';
import { motion } from 'motion/react';
import { Briefcase } from 'lucide-react';

export default function OurMission() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.8,
      }
    }
  };

  const lineVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { duration: 0.6, ease: "easeOut" } 
    }
  };

  const textLines1 = [
    "From concept development and strategic planning to",
    "marketing, sponsorship acquisition, and seamless",
    "on-site execution, we deliver comprehensive",
    "end-to-end event management solutions."
  ];

  const textLines2 = [
    "Our mission is to connect businesses, unlock new",
    "opportunities, and accelerate industry growth by",
    "creating meaningful platforms that foster innovation,",
    "strategic partnerships, knowledge exchange,",
    "and sustainable progress."
  ];

  return (
    <section className="relative w-full bg-[#FDFCF8] py-24 md:py-32 px-6 lg:px-12 overflow-hidden z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="flex flex-col lg:flex-row-reverse items-center gap-16 lg:gap-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          
          {/* Right Column: Visuals (50%) */}
          <div className="lg:w-1/2 w-full relative flex justify-center mt-12 lg:mt-0">
            {/* The Aurora Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#B87333]/20 blur-3xl rounded-full z-0 pointer-events-none" />

            <div className="relative w-full h-[500px] md:h-[600px] lg:h-[550px] z-10 mx-auto max-w-md lg:max-w-none">
              
              {/* Image 1: Main Image */}
              <motion.img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
                alt="Team Collaboration"
                className="absolute right-0 top-10 w-[75%] h-[80%] object-cover rounded-[2rem] shadow-xl z-10"
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              />

              {/* Image 2: Top Overlap */}
              <motion.img 
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop"
                alt="Strategic Planning"
                className="absolute left-0 top-0 w-[50%] h-[45%] md:w-[45%] md:h-[40%] object-cover rounded-2xl shadow-2xl z-20 border-[6px] border-[#FDFCF8] cursor-pointer"
                initial={{ y: -30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              />

              {/* Image 3: Bottom Overlap */}
              <motion.img 
                src="https://images.unsplash.com/photo-1557425955-df376b5903c8?q=80&w=2070&auto=format&fit=crop"
                alt="Business Growth"
                className="absolute -left-4 bottom-12 w-[60%] h-[35%] md:w-[55%] object-cover rounded-2xl shadow-2xl z-30 border-[6px] border-[#FDFCF8] cursor-pointer"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              />

              {/* The Glassmorphism Card */}
              <motion.div 
                className="absolute -right-4 md:-right-8 bottom-0 z-[50] w-56 md:w-64 bg-white/70 backdrop-blur-2xl border border-white/50 shadow-2xl rounded-3xl p-6 hidden sm:block"
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 1.0 }} 
              >
                <Briefcase className="text-[#B87333] w-10 h-10 mb-4 drop-shadow-sm" />
                <h4 className="font-bold text-xl mb-2 text-[#0A1931] tracking-tight">End-to-End</h4>
                <p className="text-gray-600 text-sm leading-relaxed font-medium">Delivering comprehensive event management solutions.</p>
              </motion.div>

              {/* The Spinning Badge */}
              <div className="absolute left-4 md:left-10 -top-8 z-[40] w-28 h-28 md:w-32 md:h-32 animate-[spin_10s_linear_infinite]">
                <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-lg text-[#0A1931]">
                  <path id="circlePath2" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="transparent" />
                  <text className="text-[12px] font-bold tracking-[0.25em] uppercase" fill="currentColor">
                    <textPath href="#circlePath2" startOffset="0%">
                      OUR MISSION • INNOVATION • OUR MISSION •
                    </textPath>
                  </text>
                  <polygon points="50,38 53,46 62,46 55,51 58,60 50,55 42,60 45,51 38,46 47,46" fill="#B87333" />
                </svg>
              </div>

            </div>
          </div>

          {/* Left Column: The Story Reveal (50%) */}
          <div className="lg:w-1/2 flex flex-col justify-center text-left pr-0 lg:pr-8 mt-16 lg:mt-0">
            {/* Elegant Vertical Grounding Line */}
            <div className="border-l-[3px] border-gray-300 pl-6 md:pl-8 py-2">
              <motion.h2 
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-5xl md:text-6xl lg:text-7xl font-serif text-[#0A1931] mb-10 tracking-tight leading-tight"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                Our Mission
              </motion.h2>
              
              {/* Staggered Line-by-Line Reveal */}
              <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <div className="mb-8">
                  {textLines1.map((line, index) => (
                    <div key={`p1-${index}`} className="overflow-hidden">
                      <motion.p variants={lineVariants} className="text-lg md:text-xl text-gray-600 font-light leading-relaxed block">
                        {line}
                      </motion.p>
                    </div>
                  ))}
                </div>
                
                <div>
                  {textLines2.map((line, index) => (
                    <div key={`p2-${index}`} className="overflow-hidden">
                      <motion.p variants={lineVariants} className="text-lg md:text-xl text-gray-600 font-light leading-relaxed block">
                        {line}
                      </motion.p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
