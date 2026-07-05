import React from 'react';
import { motion } from 'motion/react';
import { Eye, Hexagon, Target, Handshake, Palette, Bird } from 'lucide-react';

const whyUsData = [
  {
    icon: Eye,
    title: "Where Vision Meets Excellence",
    description: "We're more than just event planners — we're experience architects. Every project we take on is guided by a commitment to creativity, precision, and purpose. Here's what sets us apart."
  },
  {
    icon: Hexagon,
    title: "Bespoke Solutions",
    description: "No templates. No shortcuts. We craft every event and production with your unique goals, audience, and aesthetic in mind."
  },
  {
    icon: Target,
    title: "Detail-Driven Execution",
    description: "We believe excellence lives in the details. From lighting cues to linen textures, we obsess over the small things — so your big picture shines."
  },
  {
    icon: Handshake,
    title: "Seamless Collaboration",
    description: "We're your partners from concept to curtain call. Expect clear communication, proactive problem-solving, and a team that truly listens."
  },
  {
    icon: Palette,
    title: "Creative Vision, Technical Mastery",
    description: "We blend imaginative styling with rock-solid technical know-how. The result? Experiences that are not only beautiful but flawlessly executed."
  },
  {
    icon: Bird,
    title: "Peace of Mind",
    description: "With us, you can breathe easy. We handle the pressure, the logistics, and the unexpected — so you can be present, engaged, and proud."
  }
];

export default function OurStory() {
  return (
    <section className="w-full relative z-10 overflow-hidden py-16 md:py-24 bg-[#0A1931]">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop"
          alt="Event Background"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A1931]/90 via-[#0A1931]/80 to-[#0A1931]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="text-[#D4AF37] font-semibold text-sm tracking-widest mb-4">

          </div>
          <h2 className="font-serif font-bold text-white text-4xl md:text-5xl lg:text-6xl tracking-tight leading-tight">
            Why Choose Us
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border border-white/10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.1 }
            }
          }}
        >
          {whyUsData.map((item, idx) => {
            const Icon = item.icon;
            // Add borders to create the grid effect similar to the image
            const borderClasses = `
              border-b border-white/10 p-6 md:p-10 flex flex-col items-center text-center
              ${idx % 3 !== 2 ? 'lg:border-r' : ''}
              ${idx % 2 !== 1 ? 'md:border-r lg:border-r-0' : 'md:border-r-0'}
              ${idx >= 3 ? 'lg:border-b-0' : ''}
              ${idx >= 4 ? 'md:border-b-0' : ''}
            `;

            return (
              <motion.div
                key={idx}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
                  }
                }}
                className={borderClasses}
              >
                <div className="w-16 h-16 rounded-full bg-[#D4AF37]/10 flex items-center justify-center mb-6">
                  <Icon size={32} className="text-[#D4AF37]" strokeWidth={2} />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed font-light">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
