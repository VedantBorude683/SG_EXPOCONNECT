import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'motion/react';
import { Check, Globe, Users, Calendar } from 'lucide-react';
import Footer from './components/Footer';
import aboutPhoto from '../assets/about_us_photo.png';

const MobileScrollFeature = ({ feature }: { feature: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-40% 0px -40% 0px" });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const active = isMobile && isInView;

  return (
    <div ref={ref} data-active={active} className="flex items-center gap-4 group cursor-pointer">
      <div className="w-10 h-10 rounded-full bg-yellow-100 text-yellow-600 flex items-center justify-center shrink-0 group-hover:scale-110 group-active:scale-110 group-data-[active=true]:scale-110 group-hover:bg-yellow-500 group-active:bg-yellow-500 group-data-[active=true]:bg-yellow-500 group-hover:text-white group-active:text-white group-data-[active=true]:text-white transition-all duration-300">
        <Check size={20} strokeWidth={3} />
      </div>
      <span className="font-bold text-[#0A1931] group-hover:text-yellow-600 group-active:text-yellow-600 group-data-[active=true]:text-yellow-600 transition-colors duration-300">{feature}</span>
    </div>
  );
};

const MobileScrollCard = ({ children, className }: { children: React.ReactNode, className: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-40% 0px -40% 0px" });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const active = isMobile && isInView;

  return (
    <div ref={ref} data-active={active} className={className}>
      {children}
    </div>
  );
};

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
    <main className="min-h-screen bg-white text-[#0A1931] overflow-hidden font-sans selection:bg-[#D4AF37] selection:text-white pt-24">
      {/* Background Mesh (Reused from App) */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-white">
        <div className="absolute inset-0 opacity-[0.05] mix-blend-multiply" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>
        <motion.div animate={{ x: ['-5%', '5%', '-5%'], y: ['-5%', '5%', '-5%'], scale: [1, 1.1, 1] }} transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }} className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-[#D4AF37]/[0.08] rounded-full blur-[100px]" />
        <motion.div animate={{ x: ['5%', '-5%', '5%'], y: ['5%', '-5%', '5%'], scale: [1, 1.2, 1] }} transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-[#B87333]/[0.06] rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 pb-20 lg:pb-32 space-y-32 pt-8">
        {/* About Us */}
        {/* About Us - Simplified Redesign */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUpSequence}
          className="pb-24 w-full relative z-10"
        >
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center px-6">

            {/* Left Column (Single Clean Image) */}
            <div className="relative w-full flex items-center justify-center">
              <img
                src={aboutPhoto}
                alt="About SG Expo Connect"
                className="w-full h-[300px] sm:h-[400px] lg:h-[600px] object-cover rounded-3xl lg:rounded-[2rem] shadow-xl"
              />
            </div>

            {/* Right Column (Scannable Typography) */}
            <div className="text-left">

              <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#0A1931] leading-tight mb-6">
                Your Gateway to Exhibitions and <span className="font-bold text-[#D4AF37]">Business Connections</span>
              </h2>

              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                SG Expo Connect is a modern platform built to simplify and enhance the exhibition experience for exhibitors, visitors, and event organizers. We believe that every expo is more than just an event — it is an opportunity to discover innovations, meet industry leaders, build partnerships, and create new business opportunities.
              </p>

              {/* Feature Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  "Global Network",
                  "Bespoke Matchmaking",
                  "Industry Innovators",
                  "End-to-End Management"
                ].map((feature, idx) => (
                  <MobileScrollFeature key={idx} feature={feature} />
                ))}
              </div>
            </div>

          </div>
        </motion.section>
      </div>

      {/* Section 1: Purpose, Vision, Values (The Foundation) */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUpSequence}
        className="w-full bg-[#FCFAF5] py-24 px-6 relative z-10"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <span className="text-3xl font-bold tracking-widest text-yellow-500 uppercase">What We Do</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#0A1931] mt-4 mb-16 max-w-3xl mx-auto text-center">
              Transforming the global <span className="font-bold text-yellow-600 font-light">exhibition ecosystem.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <MobileScrollCard className="group cursor-pointer bg-white p-10 rounded-3xl shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] active:shadow-[0_8px_30px_rgb(0,0,0,0.08)] data-[active=true]:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:-translate-y-2 active:-translate-y-2 data-[active=true]:-translate-y-2 transition-all duration-500 border-t-4 border-yellow-500 border-x border-b border-transparent hover:border-yellow-600/20 active:border-yellow-600/20 data-[active=true]:border-yellow-600/20">
              <div className="w-14 h-14 rounded-2xl bg-[#0A1931]/5 group-hover:bg-yellow-500 group-active:bg-yellow-500 group-data-[active=true]:bg-yellow-500 transition-colors duration-500 flex items-center justify-center mb-8">
                <Globe className="text-[#0A1931] group-hover:text-white group-active:text-white group-data-[active=true]:text-white transition-colors duration-500" size={28} />
              </div>
              <h3 className="text-xl font-bold text-[#0A1931] group-hover:text-yellow-600 group-active:text-yellow-600 group-data-[active=true]:text-yellow-600 transition-colors mb-4">End-to-End Management</h3>
              <p className="text-gray-600 leading-relaxed">
                Seamless solutions for exhibitions, trade shows, and conferences, bringing the entire ecosystem together in one place.
              </p>
            </MobileScrollCard>

            {/* Card 2 */}
            <MobileScrollCard className="group cursor-pointer bg-white p-10 rounded-3xl shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] active:shadow-[0_8px_30px_rgb(0,0,0,0.08)] data-[active=true]:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:-translate-y-2 active:-translate-y-2 data-[active=true]:-translate-y-2 transition-all duration-500 border-t-4 border-yellow-500 border-x border-b border-transparent hover:border-yellow-600/20 active:border-yellow-600/20 data-[active=true]:border-yellow-600/20">
              <div className="w-14 h-14 rounded-2xl bg-[#0A1931]/5 group-hover:bg-yellow-500 group-active:bg-yellow-500 group-data-[active=true]:bg-yellow-500 transition-colors duration-500 flex items-center justify-center mb-8">
                <Users className="text-[#0A1931] group-hover:text-white group-active:text-white group-data-[active=true]:text-white transition-colors duration-500" size={28} />
              </div>
              <h3 className="text-xl font-bold text-[#0A1931] group-hover:text-yellow-600 group-active:text-yellow-600 group-data-[active=true]:text-yellow-600 transition-colors mb-4">Meaningful Connections</h3>
              <p className="text-gray-600 leading-relaxed">
                Connect exhibitors, visitors, and industry professionals through a bespoke matchmaking platform designed for growth.
              </p>
            </MobileScrollCard>

            {/* Card 3 */}
            <MobileScrollCard className="group cursor-pointer bg-white p-10 rounded-3xl shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] active:shadow-[0_8px_30px_rgb(0,0,0,0.08)] data-[active=true]:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:-translate-y-2 active:-translate-y-2 data-[active=true]:-translate-y-2 transition-all duration-500 border-t-4 border-yellow-500 border-x border-b border-transparent hover:border-yellow-600/20 active:border-yellow-600/20 data-[active=true]:border-yellow-600/20">
              <div className="w-14 h-14 rounded-2xl bg-[#0A1931]/5 group-hover:bg-yellow-500 group-active:bg-yellow-500 group-data-[active=true]:bg-yellow-500 transition-colors duration-500 flex items-center justify-center mb-8">
                <Calendar className="text-[#0A1931] group-hover:text-white group-active:text-white group-data-[active=true]:text-white transition-colors duration-500" size={28} />
              </div>
              <h3 className="text-xl font-bold text-[#0A1931] group-hover:text-yellow-600 group-active:text-yellow-600 group-data-[active=true]:text-yellow-600 transition-colors mb-4">Discovery & Scheduling</h3>
              <p className="text-gray-600 leading-relaxed">
                From exploring upcoming global expos to seamlessly scheduling meetings, we make event participation effortless.
              </p>
            </MobileScrollCard>
          </div>
        </div>
      </motion.section>

      {/* Missing Section: Purpose, Vision, Values */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUpSequence}
        className="w-full bg-[#FCFAF5] py-24 px-6 relative z-10"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h3 className="text-yellow-600 text-sm font-bold tracking-widest uppercase mb-4">Core Identity</h3>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#0A1931] mb-16">
              Our Purpose, Vision & Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1: Our Purpose */}
            <div className="relative w-full h-[450px] rounded-3xl overflow-hidden group cursor-pointer  hover:shadow-lg transition-all duration-500">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1TfDnwptbOzm9ZIEEzrElPwmzUW4pEPuRwrNuyOWPsg&s=10"
                alt="Our Purpose"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out z-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1931] via-[#0A1931]/70 to-black/10 z-10" />
              <div className="absolute top-0 left-0 w-full h-2 bg-yellow-500 z-20 opacity-90" />
              <div className="absolute bottom-0 left-0 w-full p-8 z-30 flex flex-col justify-end">
                <h3 className="text-3xl font-bold text-white mb-3">Our Purpose</h3>
                <p className="text-gray-200 text-sm leading-relaxed">
                  To engineer world-class global exhibitions that drive industry innovation and connect decision-makers.
                </p>
              </div>
            </div>

            {/* Card 2: Our Vision */}
            <div className="relative w-full h-[450px] rounded-3xl overflow-hidden group cursor-pointer shadow-sm hover:shadow-md transition-all duration-500">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNGSnaUFV7x3wDnvdvUlncW_gds0qWJAtV3pjrWXgL1VmSv7-0wZjXubE&s=10"
                alt="Our Vision"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out z-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1931] via-[#0A1931]/70 to-black/10 z-10" />
              <div className="absolute top-0 left-0 w-full h-2 bg-yellow-500 z-20 opacity-90" />
              <div className="absolute bottom-0 left-0 w-full p-8 z-30 flex flex-col justify-end">
                <h3 className="text-3xl font-bold text-white mb-3">Our Vision</h3>
                <p className="text-gray-200 text-sm leading-relaxed">
                  To be the undisputed global platform for B2B matchmaking, shaping the future of international trade.
                </p>
              </div>
            </div>

            {/* Card 3: Our Values */}
            <div className="relative w-full h-[450px] rounded-3xl overflow-hidden group cursor-pointer shadow-sm hover:shadow-md transition-all duration-500">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2000&auto=format&fit=crop"
                alt="Our Values"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out z-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1931] via-[#0A1931]/70 to-black/10 z-10" />
              <div className="absolute top-0 left-0 w-full h-2 bg-yellow-500 z-20 opacity-90" />
              <div className="absolute bottom-0 left-0 w-full p-8 z-30 flex flex-col justify-end">
                <h3 className="text-3xl font-bold text-white mb-3">Our Values</h3>
                <p className="text-gray-200 text-sm leading-relaxed">
                  Excellence in execution, uncompromising integrity, and a commitment to sustainable global growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>


      {/* Section 3: Our Culture (The Human Element) */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUpSequence}
        className="w-full bg-[#FCFAF5] pt-16 pb-28 px-6 lg:px-16 relative z-10"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column (Text) */}
          <div className="lg:col-span-5 flex flex-col justify-center order-1 text-center lg:text-left">
            <h3 className="text-yellow-600 text-2xl font-bold tracking-widest uppercase mb-4">Life at SG ExpoConnect</h3>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#0A1931] mb-6">
              Driven by passion & Defined by excellence
            </h2>
            <div className="space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed">
                Behind every world-class trade exhibition and industry conference is a team of dedicated professionals driven by a shared passion for excellence. We thrive in a fast-paced, highly collaborative environment where creativity and precision meet.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our culture empowers individuals to take ownership, innovate fearlessly, and work seamlessly across borders. Whether it's concept development or on-site execution, our team brings the energy and expertise required to pull off massive international events flawlessly.
              </p>
            </div>
          </div>
          {/* Right Column (Image Collage) */}
          <div className="lg:col-span-7 w-full grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 h-[320px] sm:h-[400px] lg:h-[480px] order-2 mt-8 lg:mt-0">
            {/* Image 1 (Tall, Left) */}
            <div className="col-span-1 row-span-2 w-full h-full rounded-2xl lg:rounded-[2rem] overflow-hidden shadow-sm bg-gray-100 relative group">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd-ZuYOA8FDdALfRJDks9eFQsfWtGIDEq78QenLGHTWJVbdMKoHrSK9zE&s=10"
                alt="Team Collaboration"
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            {/* Image 2 (Top Right) */}
            <div className="col-span-1 row-span-1 w-full h-full rounded-2xl lg:rounded-[2rem] overflow-hidden shadow-sm bg-gray-100 relative group">
              <img
                src="https://www.cvent.com/sites/default/files/styles/column_content_width/public/image/2024-06/53322146052_90bc13d238_c%20%281%29.jpg.webp?itok=En_R8nwG"
                alt="Event Crowd"
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            {/* Image 3 (Bottom Right) */}
            <div className="col-span-1 row-span-1 w-full h-full rounded-2xl lg:rounded-[2rem] overflow-hidden shadow-sm bg-gray-100 relative group">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ-GrM6bWXctXXKCiTQT51PO_litzC8izdnDNqYDuKb1GF-NsKjY4eEXCC&s=10"
                alt="Professional Handshake"
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </motion.section>

      <div className="relative z-10">
        <Footer />
      </div>
    </main>
  );
}
