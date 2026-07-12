import React from 'react';
import { motion } from 'motion/react';
import p2 from '../../assets/p2.jpg';
import p3 from '../../assets/p3.jpg';
import p4 from '../../assets/p4.jpg';
import p5 from '../../assets/p5.jpg';
import leader1 from '../../assets/leader1.jpg';
import leader2 from '../../assets/leader2.jpg';
import p6 from '../../assets/p6.jpg';

export default function MeetTheTeam() {
  const team = [
    { name: "Jaishree Gomes", role: "Founder", image: p3, position: "object-center" },
    { name: "Sujoy Gomes", role: "Founder & Managing Director", image: leader1, position: "object-center" },
    { name: "Piyush Gomes", role: "Director Operation", image: p4, position: "object-center" },
    { name: "Bharati Mera", role: "Exhibition Head", image: p2, position: "object-center" },
    { name: "Nageshwari Tambe", role: "Finance Manager", image: p5, position: "object-center" },
    { name: "Manas Gomes", role: "Office Manager", image: p6, position: "object-[10%_top]" }
  ];

  const renderCard = (member: any, idx: number) => (
    <div key={idx} className="relative h-[450px] w-full rounded-3xl overflow-hidden group shadow-lg">
      <div className="absolute inset-0 w-full h-full transition-transform duration-700 group-hover:scale-105">
        <img
          src={member.image}
          alt={member.name}
          className={`w-full h-full object-cover ${member.position} ${member.name === 'Piyush Gomes' ? 'scale-125' : ''}`}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A1931] via-[#0A1931]/60 to-transparent opacity-90 h-1/2 mt-auto" />
      <div className="absolute bottom-0 left-0 w-full p-6 flex flex-col justify-end z-20">
        <h3 className="text-white font-extrabold text-4xl mb-2 drop-shadow-md">{member.name}</h3>
        <p className="text-yellow-400 font-semibold text-base md:text-lg uppercase tracking-widest drop-shadow-sm">{member.role}</p>
      </div>
    </div>
  );

  return (
    <section className="w-full bg-[#FCFAF5] py-24 relative z-10 overflow-hidden font-sans">

      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 relative z-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="text-[#D4AF37] font-semibold tracking-widest uppercase text-sm mb-4">
            Meet the Team
          </div>
          <h2 className="font-serif font-bold text-[#0A1931] text-4xl md:text-5xl lg:text-6xl tracking-tight">
            Our <span className="font-serif font-bold text-yellow-600 font-light">Leaders.</span>
          </h2>
        </motion.div>
      </div>

      {/* The Pyramid Layout */}
      <div className="flex flex-col items-center gap-16 max-w-7xl mx-auto px-6 mt-16">

        {/* Row 1 (Top Boss) */}
        <motion.div
          className="w-full max-w-[320px]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {renderCard(team[0], 0)}
        </motion.div>

        {/* Row 2 (Second in Command) */}
        <motion.div
          className="w-full max-w-[320px]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {renderCard(team[1], 1)}
        </motion.div>

        {/* Row 3 (Third in Command) */}
        <motion.div
          className="w-full max-w-[320px]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {renderCard(team[2], 2)}
        </motion.div>

        {/* Row 4 (The Department Heads) */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {team.slice(3).map((member, idx) => renderCard(member, idx + 3))}
        </motion.div>

      </div>
    </section>
  );
}
