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

      image: p3
    },
    {
      name: "Sujoy Gomes",
      role: "Founder & Managing Director",

      image: leader1
    },
    {
      name: "Piyush Gomes",
      role: "Director",

      image: p4
    },
    {
      name: "Bharati Mera",
      role: "Exhibition Head",

      image: p2
    },
    {
      name: "Nageshwari Tambe",
      role: "Finance Manager",

      image: p5
    },
    {
      name: "Manas Gomes",
      role: "Office Manager",

      image: p6
    }
  ];

  return (
    <main className="min-h-screen bg-[#FCFAF5] text-[#0A1931] overflow-hidden font-sans selection:bg-[#D4AF37] selection:text-white">

      <section className="bg-[#FCFAF5] pt-36 pb-16 px-6 font-sans relative z-10 overflow-hidden">
        {/* 1. Page Header & Intro Description */}
        <div className="max-w-4xl mx-auto text-center mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-bold text-yellow-600 mb-6"
          >
            Meet our team
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-gray-600 leading-relaxed"
          >
            Behind every world-class exhibition is a team of visionary leaders and relentless execution experts. Get to know the minds driving SG ExpoConnect.
          </motion.p>
        </div>

        {/* 3. The Alternating Rows (Zig-Zag UI) */}
        <div className="max-w-7xl mx-auto px-6 pb-32 flex flex-col gap-24">
          {team.map((member, index) => {
            const isOdd = index % 2 !== 0;
            const maxWidthClass =
              member.name === 'Manas Gomes' ? 'max-w-[350px]' :
                member.name === 'Sujoy Gomes' ? 'max-w-[490px]' :
                  member.name === 'Piyush Gomes' ? 'max-w-[390px]' :
                    member.name === 'Nageshwari Tambe' ? 'max-w-[390px]' :
                      member.name === 'Bharati Mera' ? 'max-w-[370px]' :
                        'max-w-[380px]';

            const imageClass =
              member.name === 'Manas Gomes' ? 'w-full h-[500px] object-cover object-top block' :
              member.name === 'Sujoy Gomes' ? 'w-full max-lg:h-[400px] max-lg:object-cover max-lg:object-top lg:h-auto block' :
                'w-full h-auto block';

            return (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
              >

                {/* Image Container */}
                <div className={`relative w-full ${maxWidthClass} mx-auto rounded-[2rem] overflow-hidden shadow-xl ${isOdd ? 'lg:order-last' : ''}`}>
                  <img
                    src={member.image}
                    alt={member.name}
                    className={`${imageClass} hover:scale-105 transition-transform duration-700`}
                  />
                </div>

                {/* Text Container */}
                <div className={`flex flex-col justify-center max-lg:items-center max-lg:text-center ${(member.name === "Manas Gomes" || member.name === "Bharati Mera")
                  ? 'lg:order-first lg:items-end lg:text-right'
                  : isOdd ? 'lg:order-first lg:pl-12 xl:pl-20' : 'lg:pr-12 xl:pr-20'
                  }`}>
                  <h3 className="text-yellow-600 text-lg md:text-2xl lg:text-xl xl:text-2xl font-bold tracking-widest uppercase mb-3">
                    {member.role}
                  </h3>
                  <h4 className="text-3xl lg:text-4xl font-serif font-bold text-[#0A1931] mb-4 lg:mb-6">
                    {member.name}
                  </h4>
                  <p className="text-base lg:text-lg text-gray-600 leading-relaxed max-lg:max-w-xl">
                    {member.description}
                  </p>
                </div>

              </motion.div>
            );
          })}
        </div>
      </section>

      <Footer />
    </main>
  );
}
