import React from 'react';
import { motion } from 'motion/react';
import { AlignCenter, ArrowRight } from 'lucide-react';
import p1 from '../../assets/p1.jpg';
import p2 from '../../assets/p2.jpg';
import p3 from '../../assets/p3.jpg';
import p4 from '../../assets/p4.jpg';
import p5 from '../../assets/p5.jpg';

export default function MeetTheTeam() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const team = [
    { name: "Eleanor Wright", role: "Chief Executive Officer", image: p1, position: "object-center" },
    { name: "Sophia Lin", role: "Global Operations", image: p3, position: "object-top" },
    { name: "Marcus Thorne", role: "Head of Exhibitions", image: p2, position: "object-center" },
    { name: "James Holden", role: "Creative Director", image: p4, position: "object-center" },
    { name: "David Chen", role: "Strategy Director", image: p5, position: "object-center" }
  ];

  const renderCard = (member: any, idx: number) => (
    <motion.div key={idx} variants={itemVariants} className="relative h-[450px] w-[85vw] sm:w-[320px] flex-shrink-0 snap-center rounded-[2rem] overflow-hidden group cursor-pointer border border-black/5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-500 bg-white">

      {/* The Image (Full Color) */}
      <img
        src={member.image}
        alt={member.name}
        className={`w-full h-full object-cover ${member.position} transition-transform duration-700 ease-out group-hover:scale-105`}
      />

      {/* The Dark Gradient Overlay (Restricted to bottom half) */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#0A1931] via-[#0A1931]/80 to-transparent opacity-95 pointer-events-none" />

      {/* The Text Content (Bottom Aligned) */}
      <div className="absolute bottom-0 left-0 w-full p-8 flex flex-col justify-end pointer-events-none">
        <h3 className="text-2xl font-bold text-white mb-1">{member.name}</h3>
        <p className="text-xs font-bold tracking-[0.15em] text-yellow-500 uppercase mb-4">{member.role}</p>

        {/* The "Read More" Button */}
        <div className="overflow-hidden">
          <button className="flex items-center text-white/90 font-medium text-sm hover:text-white transition-colors transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 duration-500 ease-out pointer-events-auto">
            Read More
            <ArrowRight className="ml-2 w-4 h-4" />
          </button>
        </div>
      </div>

    </motion.div>
  );

  return (
    <section className="w-full bg-[#FCFAF5] py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-8">

        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="font-serif text-[#0A1931] font-bold text-5xl md:text-6xl tracking-tight">
            Meet our <span className="bold  text-yellow-600 font-light">Leaders.</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-6 text-lg">
            The minds behind the world's most impactful global exhibitions.
          </p>
        </motion.div>

        {/* The Carousel */}
        <motion.div
          className="flex overflow-x-auto gap-6 pb-12 pt-4 px-4 snap-x snap-mandatory scroll-smooth hide-scrollbar mt-16 -mx-4 sm:mx-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {team.map((member, idx) => renderCard(member, idx))}
        </motion.div>

      </div>

      {/* Hide Scrollbar CSS */}
      <style dangerouslySetInnerHTML={{
        __html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </section>
  );
}
