import React from 'react';
import { motion } from 'motion/react';
import Footer from './components/Footer';
import aboutPhoto from '../assets/about_us_photo.png';

export default function AboutUs() {
  const fadeUpSequence = {
    hidden: { opacity: 0, y: 40, filter: 'blur(10px)' },
    visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } }
  };

  const stats = [
    { value: '15+', label: 'Years of Industry Experience' },
    { value: '15K+', label: 'Business Connections' },
    { value: '25K+', label: 'Event Interactions' },
    { value: '500+', label: 'Exhibitors & Partners' }
  ];

  return (
    <main className="min-h-screen bg-[#FDFCF8] text-[#0A1931] overflow-hidden font-sans selection:bg-[#D4AF37] selection:text-white pt-24">
      {/* Background Mesh (Reused from App) */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#FDFCF8]">
        <div className="absolute inset-0 opacity-[0.05] mix-blend-multiply" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>
        <motion.div animate={{ x: ['-5%', '5%', '-5%'], y: ['-5%', '5%', '-5%'], scale: [1, 1.1, 1] }} transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }} className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-[#D4AF37]/[0.08] rounded-full blur-[100px]" />
        <motion.div animate={{ x: ['5%', '-5%', '5%'], y: ['5%', '-5%', '5%'], scale: [1, 1.2, 1] }} transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-[#B87333]/[0.06] rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 lg:py-32 space-y-32">
        {/* About Us */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUpSequence}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Left Side: Photo */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[400px] md:h-[600px] w-full group">
            <img 
              src={aboutPhoto} 
              alt="About SG Expo Connect" 
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-700"></div>
          </div>

          {/* Right Side: Text */}
          <div className="text-left md:pl-8">
            <h1 className="text-sm font-semibold tracking-widest uppercase text-[#D4AF37] mb-4">About Us</h1>
            <h2 className="text-4xl md:text-5xl font-light text-[#0A1931] leading-tight mb-8">
              Your Gateway to Exhibitions and <span className="text-[#D4AF37] italic">Business Connections</span>
            </h2>
            <div className="text-lg text-black/70 space-y-6 font-light">
              <p>
                SG Expo Connect is a modern platform built to simplify and enhance the exhibition experience for exhibitors, visitors, and event organizers. We believe that every expo is more than just an event — it is an opportunity to discover innovations, meet industry leaders, build partnerships, and create new business opportunities.
              </p>
              <p>
                Our platform helps users explore events, discover exhibitors, schedule meetings, connect with professionals, and stay informed about important event updates. By bringing event discovery, networking, and communication into one connected platform, we make exhibitions more accessible, engaging, and valuable for everyone involved.
              </p>
              <p>
                Whether you are an exhibitor looking to showcase your products, a visitor searching for new solutions, or an organizer managing a large-scale expo, SG Expo Connect helps you connect with the right people and make every interaction count.
              </p>
            </div>
          </div>
        </motion.section>

        {/* What We Do */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUpSequence}
          className="grid md:grid-cols-2 gap-16 items-center"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-light text-[#0A1931] mb-6">
              SG Expo Connect — <br /><span className="text-[#D4AF37] italic">What We Do</span>
            </h2>
          </div>
          <div className="text-lg text-black/70 space-y-6 font-light">
            <p>
              At SG Expo Connect, we provide end-to-end solutions for exhibitions, trade shows, conferences, and business networking events. We connect exhibitors, visitors, industry professionals, and event organizers through a seamless platform designed to make event discovery, participation, and networking easier.
            </p>
            <p>
              From discovering upcoming expos and exploring exhibitors to scheduling meetings and building meaningful business connections, SG Expo Connect brings the entire exhibition ecosystem together in one place. Our goal is to help businesses showcase their innovations, expand their network, discover new opportunities, and create valuable industry connections.
            </p>
          </div>
        </motion.section>

        {/* Our Impact */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUpSequence}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-[#0A1931]">
              Our <span className="text-[#D4AF37] italic">Impact</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-8 rounded-2xl bg-white/50 backdrop-blur-sm border border-black/5 hover:bg-white/80 transition-colors duration-300"
              >
                <div className="text-4xl md:text-5xl font-light text-[#D4AF37] mb-4">{stat.value}</div>
                <div className="text-xs md:text-sm font-medium tracking-wide text-black/60 uppercase">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>

      <div className="relative z-10">
        <Footer />
      </div>
    </main>
  );
}
