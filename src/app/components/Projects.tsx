import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const galleryProjects = [
  { title: "Cement Exhibition Dubai", subtitle: "Currently Working", image: "https://pasusea.com/wp-content/uploads/2025/02/2025-02-03-09.50-3-scaled.jpeg" },
  { title: "Arab Health Exhibition", subtitle: "Global Medical Expo", image: "https://emag.medicalexpo.com/wp-content/uploads/sites/9/Arab-Health-3-1.jpg" },
  { title: "Festival of Bharat", subtitle: "Cultural Summit", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZmo2-8gHgz_shfwvS_Rm8vrRl5sO-O5nY4UYcr1z310UmoRoQUUgPw88&s=10" },
  { title: "WETEX Exhibition Dubai", subtitle: "Sustainability", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSblW6NcZIGMJ8TLJROLP_FC3s-9cNeMfctQl1Ol1Jmgg&s=10" }
];

export default function Projects() {
  return (
    <section className="w-full bg-[#FCFAF5] py-24 relative z-10 overflow-hidden">

      {/* Header */}
      <div className="max-w-7xl mx-auto px-8 relative z-20">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="font-serif text-[#0A1931] font-bold text-0.5xl md:text-6xl tracking-tight">
            Our Global <span className="bold text-yellow-600 font-light">Projects</span>
          </h2>
        </motion.div>
      </div>

      {/* Featured Projects Grid */}
      <div className="max-w-7xl mx-auto px-6 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mt-12 md:mt-16">

          {/* Card 1: Cement Dubai - Large Left */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-2 lg:col-span-2 lg:row-span-2 relative h-[280px] md:h-[400px] lg:h-[525px] rounded-3xl overflow-hidden group bg-slate-100 cursor-pointer shadow-lg"
          >
            <img
              src={galleryProjects[0].image}
              alt={galleryProjects[0].title}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out z-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A1931] via-[#0A1931]/50 to-transparent z-10 pointer-events-none opacity-90 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="absolute top-6 left-6 flex items-center gap-2 bg-black/30 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 z-20">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.8)]" />
              <span className="text-white text-xs font-bold tracking-widest uppercase">Currently Active</span>
            </div>

            <div className="absolute bottom-0 left-0 w-full p-6 z-20 pointer-events-none flex flex-col justify-end">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{galleryProjects[0].title}</h3>
              <p className="text-yellow-500 font-bold tracking-widest text-sm uppercase">{galleryProjects[0].subtitle}</p>
            </div>
          </motion.div>

          {/* Card 2: Arab Health - Top Middle */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-1 lg:row-span-1 relative h-[220px] md:h-[250px] rounded-3xl overflow-hidden group bg-slate-100 cursor-pointer shadow-lg"
          >
            <img
              src={galleryProjects[1].image}
              alt={galleryProjects[1].title}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out z-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A1931] via-[#0A1931]/50 to-transparent z-10 pointer-events-none opacity-90 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="absolute bottom-0 left-0 w-full p-6 z-20 pointer-events-none flex flex-col justify-end">
              <h3 className="text-xl font-bold text-white mb-1">{galleryProjects[1].title}</h3>
              <p className="text-yellow-500 font-bold tracking-widest text-xs uppercase">{galleryProjects[1].subtitle}</p>
            </div>
          </motion.div>

          {/* Card 3: Festival of Bharat - Top Right */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-1 lg:row-span-1 relative h-[220px] md:h-[250px] rounded-3xl overflow-hidden group bg-slate-100 cursor-pointer shadow-lg"
          >
            <img
              src={galleryProjects[2].image}
              alt={galleryProjects[2].title}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out z-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A1931] via-[#0A1931]/50 to-transparent z-10 pointer-events-none opacity-90 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="absolute bottom-0 left-0 w-full p-6 z-20 pointer-events-none flex flex-col justify-end">
              <h3 className="text-xl font-bold text-white mb-1">{galleryProjects[2].title}</h3>
              <p className="text-yellow-500 font-bold tracking-widest text-xs uppercase">{galleryProjects[2].subtitle}</p>
            </div>
          </motion.div>

          {/* Card 4: WETEX - Bottom Middle */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-1 lg:row-span-1 relative h-[220px] md:h-[250px] rounded-3xl overflow-hidden group bg-slate-100 cursor-pointer shadow-lg"
          >
            <img
              src={galleryProjects[3].image}
              alt={galleryProjects[3].title}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out z-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A1931] via-[#0A1931]/50 to-transparent z-10 pointer-events-none opacity-90 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="absolute bottom-0 left-0 w-full p-6 z-20 pointer-events-none flex flex-col justify-end">
              <h3 className="text-xl font-bold text-white mb-1">{galleryProjects[3].title}</h3>
              <p className="text-yellow-500 font-bold tracking-widest text-xs uppercase">{galleryProjects[3].subtitle}</p>
            </div>
          </motion.div>

          {/* Card 5: View All Projects CTA (Bottom Right) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-1 lg:row-span-1 h-[220px] md:h-[250px] flex items-center justify-center"
          >
            <button className="flex items-center gap-3 bg-[#0A1931] hover:bg-[#0A1931]/90 text-white font-semibold text-lg px-8 py-4 rounded-full transition-all duration-300 shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.2)] hover:-translate-y-1 group">
              View All Projects
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </motion.div>

        </div>
      </div>

    </section>
  );
}
