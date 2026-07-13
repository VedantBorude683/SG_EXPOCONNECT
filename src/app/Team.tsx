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

  // Reordering Tier 1: Sujoy (Left), Jaishree (Center), Piyush (Right)
  const tier1 = [team[1], team[0], team[2]];
  const tier2 = team.slice(3);

  return (
    <main className="min-h-screen bg-[#FCFAF5] text-[#0A1931] overflow-hidden font-sans selection:bg-[#D4AF37] selection:text-white">
      <section className="bg-[#FCFAF5] py-24 px-6 relative z-10">

        {/* Header Wrapper */}
        <div className="max-w-4xl mx-auto text-center mb-20">
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

        {/* Tier 1: Leadership Grid (Sujoy, Jaishree, Piyush) */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 items-center mb-24">
          {tier1.map((member, idx) => {
            const isCenter = member.name === "Jaishree Gomes";
            return (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col group cursor-pointer ${isCenter ? 'transform lg:scale-105 z-10 shadow-lg' : 'transform lg:scale-95 opacity-95 hover:opacity-100'}`}
              >
                <div className={`w-full overflow-hidden relative bg-gray-100 ${isCenter ? 'aspect-[4/5]' : 'aspect-square'}`}>
                  <img
                    src={member.image}
                    alt={member.name}
                    className={`w-full h-full object-cover ${member.position} group-hover:scale-105 transition-transform duration-500`}
                  />
                </div>
                <div className="p-8 flex flex-col flex-1 items-center text-center">
                  <p className="text-sm md:text-base font-bold tracking-widest text-yellow-600 uppercase mb-2">
                    {member.role}
                  </p>
                  <h3 className={`font-serif font-bold text-[#0A1931] mb-4 ${isCenter ? 'text-3xl' : 'text-2xl'}`}>
                    {member.name}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Tier 2: Department Heads Grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pb-16">
          {tier2.map((member, idx) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col group cursor-pointer"
            >
              <div className="w-full aspect-[4/5] overflow-hidden relative bg-gray-100">
                <img
                  src={member.image}
                  alt={member.name}
                  className={`w-full h-full object-cover ${member.position} group-hover:scale-105 transition-transform duration-500`}
                />
              </div>
              <div className="p-8 flex flex-col flex-1 items-center text-center">
                <p className="text-sm md:text-base font-bold tracking-widest text-yellow-600 uppercase mb-2">
                  {member.role}
                </p>
                <h3 className="text-xl md:text-2xl font-serif font-bold text-[#0A1931] mb-4">
                  {member.name}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed flex-1">
                  {member.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </section>

      <Footer />
    </main>
  );
}
