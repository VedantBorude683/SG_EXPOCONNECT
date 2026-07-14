import React from 'react';
import { motion } from 'motion/react';
import Footer from './components/Footer';
import p2 from '../assets/p2.jpg';
import p3 from '../assets/p3.jpg';
import p4 from '../assets/p4.jpg';
import p5 from '../assets/p5.jpg';
import leader1 from '../assets/leader1.jpg';
import p6 from '../assets/p6.jpg';

export default function Team() {
  const team = [
    {
      name: "Jaishree Gomes",
      role: "Founder",
      image: p3,
      position: "object-center",
      bio: "Visionary leader with a proven track record of establishing premier global trade exhibitions and fostering international business partnerships."
    },
    {
      name: "Sujoy Gomes",
      role: "Founder & Managing Director",
      image: leader1,
      position: "object-center",
      bio: "Driving strategic growth and operational excellence, ensuring every event delivers massive commercial value and flawless execution."
    },
    {
      name: "Piyush Gomes",
      role: "COO Chief operating officer",
      image: p4,
      position: "object-center",
      bio: "Spearheading corporate innovation and expanding the company's footprint across key international markets and emerging industries."
    },
    {
      name: "Bharati Mera",
      role: "Exhibition Head",
      image: p2,
      position: "object-center",
      bio: "Leading global exhibition strategies and execution with over a decade of industry expertise."
    },
    {
      name: "Nageshwari Tambe",
      role: "Finance Manager",
      image: p5,
      position: "object-center",
      bio: "Overseeing financial operations and strategic investments to drive sustainable company growth."
    },
    {
      name: "Manas Gomes",
      role: "Office Manager",
      image: p6,
      position: "object-[10%_top]",
      bio: "Ensuring seamless day-to-day operations and fostering a collaborative corporate environment."
    }
  ];

  const renderCard = (member: any, idx: number) => (
    <div key={idx} className="relative h-[450px] md:h-[500px] w-full rounded-[2rem] overflow-hidden group shadow-[0_8px_40px_rgba(10,25,49,0.12)] text-left">
      <div className="absolute inset-0 w-full h-full transition-transform duration-700 group-hover:scale-105">
        <img
          src={member.image}
          alt={member.name}
          className={`w-full h-full object-cover ${member.position} ${member.name === 'Piyush Gomes' ? 'scale-125' : ''}`}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A1931] via-[#0A1931]/60 to-transparent opacity-90 h-[60%] mt-auto" />
      <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 flex flex-col justify-end z-20">
        <h3 className="text-white font-extrabold text-3xl md:text-4xl mb-2 drop-shadow-md">{member.name}</h3>
        <p className="text-yellow-400 font-semibold text-sm md:text-base uppercase tracking-widest drop-shadow-sm mb-3">{member.role}</p>
        <p className="text-gray-200 text-sm leading-relaxed">{member.bio}</p>
      </div>
    </div>
  );

  return (
    <main className="min-h-screen bg-[#FCFAF5] text-[#0A1931] overflow-hidden font-sans selection:bg-[#D4AF37] selection:text-white">
      <section className="bg-[#FCFAF5] py-24 px-6 relative z-10">

        {/* Header Wrapper */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-serif font-bold text-[#0A1931] mb-6"
          >
            Meet the experts driving our success
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600 leading-relaxed"
          >
            A dedicated team of industry veterans, innovators, and execution experts driving the future of international trade exhibitions.
          </motion.p>
        </div>

        {/* The Pyramid Layout 1-1-1-3 */}
        <div className="flex flex-col items-center gap-12 md:gap-16 max-w-7xl mx-auto mt-16">
          
          {/* Row 1 (Top Boss) */}
          <motion.div
            className="w-full max-w-[420px]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {renderCard(team[0], 0)}
          </motion.div>

          {/* Row 2 (Second in Command) */}
          <motion.div
            className="w-full max-w-[420px]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {renderCard(team[1], 1)}
          </motion.div>

          {/* Row 3 (Third in Command) */}
          <motion.div
            className="w-full max-w-[420px]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {renderCard(team[2], 2)}
          </motion.div>

          {/* Row 4 (The Department Heads - 3 cols) */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl mt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {team.slice(3).map((member, idx) => renderCard(member, idx + 3))}
          </motion.div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
