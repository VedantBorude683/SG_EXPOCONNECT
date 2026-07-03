import React from 'react';
import { Target, Users, Globe, Award, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

export default function BentoAboutUs() {
  return (
    <section 
      className="relative z-10 w-full bg-[#FDFDFD] py-24 overflow-visible"
      style={{ fontFamily: '"Inter", "SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif' }}
    >
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 auto-rows-[minmax(100px,auto)]">
          
          {/* Left Side: Visuals (Masonry Stack) */}
          <div className="lg:col-span-5 flex flex-col gap-8 relative mt-10 lg:mt-0">
            
            {/* Overlapping Glass Card: Global Reach */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="absolute top-10 -left-6 z-20 w-56 bg-white/60 backdrop-blur-md border border-white/40 shadow-xl shadow-black/5 rounded-3xl p-6 transition-transform duration-300 hidden md:block"
            >
              <Globe className="text-[#D4AF37] w-8 h-8 mb-4" />
              <h4 className="font-bold text-lg mb-2 text-[#0A1931] tracking-tight">Global Reach</h4>
              <p className="text-gray-600 text-sm leading-relaxed">Connecting businesses across diverse sectors globally.</p>
            </motion.div>

            {/* Top Image */}
            <motion.div 
              whileHover={{ scale: 1.02 }} 
              className="transition-transform duration-300 h-[400px] w-full md:w-[90%] md:ml-auto relative rounded-3xl overflow-hidden shadow-lg shadow-black/5"
            >
               <img src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop" alt="Exhibition" className="w-full h-full object-cover" />
            </motion.div>

            {/* Bottom Image */}
            <motion.div 
              whileHover={{ scale: 1.02 }} 
              className="transition-transform duration-300 h-[320px] w-full md:w-[85%] relative rounded-3xl overflow-hidden shadow-lg shadow-black/5"
            >
               <img src="https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2069&auto=format&fit=crop" alt="Conference" className="w-full h-full object-cover" />
               
               {/* Overlapping Glass Card: Innovation */}
               <div className="absolute -bottom-4 -right-4 md:-right-8 z-20 w-52 bg-white/60 backdrop-blur-md border border-white/40 shadow-xl shadow-black/5 rounded-3xl p-6 hidden sm:block transition-transform duration-300 hover:scale-[1.02]">
                 <Sparkles className="text-[#D4AF37] w-8 h-8 mb-4" />
                 <h4 className="font-bold text-lg mb-2 text-[#0A1931] tracking-tight">Innovation</h4>
                 <p className="text-gray-600 text-sm leading-relaxed">Pioneering futuristic business platforms.</p>
               </div>
            </motion.div>

          </div>

          {/* Right Side: Content & Features */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            
            {/* Main Text Block (Spans full width of right col) */}
            <motion.div 
              whileHover={{ scale: 1.01 }} 
              className="bg-white/60 backdrop-blur-md border border-white/40 shadow-xl shadow-black/5 rounded-[2rem] p-10 md:p-12 transition-transform duration-300"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#0A1931] mb-6 tracking-tight">Our Story</h2>
              <p className="text-lg text-gray-600 font-normal leading-relaxed mb-6">
                We are a professional exhibition and conference management company dedicated to creating impactful business platforms. We orchestrate world-class trade exhibitions, industry conferences, and B2B networking events across diverse sectors.
              </p>
              <p className="text-lg text-gray-600 font-normal leading-relaxed">
                With a strong focus on delivering value to exhibitors, sponsors, and delegates, we bring together leading companies, industry experts, and government bodies under one roof to foster global collaboration.
              </p>
            </motion.div>

            {/* Grid of Smaller Square Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 flex-1">
              
              <motion.div 
                whileHover={{ scale: 1.02 }} 
                className="bg-white/60 backdrop-blur-md border border-white/40 shadow-xl shadow-black/5 rounded-[2rem] p-10 flex flex-col justify-center transition-transform duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] mb-6">
                  <Users size={28} />
                </div>
                <h4 className="font-bold text-[#0A1931] text-xl tracking-tight mb-3">B2B Networking</h4>
                <p className="text-gray-600 leading-relaxed font-normal">Curated business connections tailored to scale your reach globally.</p>
              </motion.div>

              <motion.div 
                whileHover={{ scale: 1.02 }} 
                className="bg-white/60 backdrop-blur-md border border-white/40 shadow-xl shadow-black/5 rounded-[2rem] p-10 flex flex-col justify-center transition-transform duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] mb-6">
                  <Award size={28} />
                </div>
                <h4 className="font-bold text-[#0A1931] text-xl tracking-tight mb-3">World-Class Events</h4>
                <p className="text-gray-600 leading-relaxed font-normal">Premium industry conferences and flawless on-site event execution.</p>
              </motion.div>

            </div>

            {/* The Mission Card: Wide Dark Mode Card */}
            <motion.div 
              whileHover={{ scale: 1.01 }} 
              className="bg-[#0A1931] rounded-[2rem] p-10 md:p-12 shadow-[0_20px_50px_rgba(212,175,55,0.15)] transition-transform duration-300 relative overflow-hidden flex flex-col justify-center mt-2"
            >
               <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at top right, #D4AF37 0%, transparent 60%)' }} />
               <div className="relative z-10">
                 <h3 className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-3 text-white tracking-tight">
                   <Target className="text-[#D4AF37] w-8 h-8" /> The Mission
                 </h3>
                 <p className="text-lg text-gray-300 font-light leading-relaxed">
                   To connect businesses, create opportunities, and drive industry advancement through meaningful events that inspire innovation, partnerships, and sustainable growth. From concept development and event planning to marketing and sponsorship acquisition, we provide end-to-end solutions tailored to elevate your brand presence.
                 </p>
               </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
