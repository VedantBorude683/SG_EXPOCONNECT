import React, { useState } from 'react';
import { motion } from 'motion/react';
import { X, Download } from 'lucide-react';
import Footer from './components/Footer';
import project1 from '../assets/project1.jpg';
import project2 from '../assets/project2.png';
import brochurePdf from '../assets/Brochure.pdf';
import aseeBrochure from '../assets/ASEE-brochure 2027.pdf';

const currentProjects = [
  {
    name: '7i-Gears (EGY-AFRICA EXPOS)',
    category: '4th Edition • New Cairo, Egypt',
    description: 'The Fourth Edition of 7i-Gears, the EGY-AFRICA EXPOS FOR ENGINEERING INDUSTRIES & INNOVATIONS. Held at the Egypt International Exhibition Center in New Cairo, serving as a premier platform for industrial progress and collaboration.',
    image: project1,
    brochureLink: brochurePdf,
    details: [
      { label: 'Venue', value: 'Egypt International Exhibition Center' },
      { label: 'Date', value: '28–30 November 2026' },
      { label: 'Focus', value: 'Engineering Industries & Innovations' },
      { label: 'Region', value: 'EGY-AFRICA Industrial Belt' },
    ],
  },
  {
    name: 'ASEE-ASEAN Smart Energy Expo',
    category: 'Mar 17-19, 2027 • Bangkok, Thailand',
    description: "A major industry event focused on Solar PV, Energy Storage, and E-Mobility. Anticipating 20,000+ visitors and 500+ exhibitors to accelerate deal-making in Southeast Asia's rapid energy transition.",
    image: project2,
    brochureLink: aseeBrochure,
    details: [
      { label: 'Venue', value: 'IMPACT Exhibition Center, Bangkok' },
      { label: 'Date', value: 'March 17–19, 2027' },
      { label: 'Focus', value: 'Solar PV, Energy Storage & E-Mobility' },
      { label: 'Scale', value: '20,000+ Visitors • 500+ Exhibitors' },
    ],
  },
];

export default function CurrentProjects() {
  const [selectedProject, setSelectedProject] = useState<(typeof currentProjects)[0] | null>(null);

  return (
    <main className="min-h-screen bg-[#FCFAF5] text-[#0A1931] font-sans selection:bg-[#D4AF37] selection:text-white overflow-hidden">

      {/* Page Header */}
      <section className="bg-[#FCFAF5] pt-16 pb-20 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mb-6"
          >
            <span className="text-yellow-600 text-md font-bold tracking-widest uppercase">
              Live & Upcoming
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-7xl font-serif font-bold text-[#0A1931] leading-tight mb-6"
          >
            Our Current <span className="text-yellow-600">Projects</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg md:text-xl text-gray-500 font-light max-w-2xl leading-relaxed"
          >
            Flagship exhibitions we are actively working on right now — bringing industry leaders and innovators together on a global stage.
          </motion.p>
        </div>
      </section>

      {/* Asymmetrical Cards Grid */}
      <section className="py-20 px-6 relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">

          {/* Card 1 — 7i-Gears */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            onClick={() => setSelectedProject(currentProjects[0])}
            className="lg:col-span-7 bg-white border border-gray-100 rounded-3xl overflow-hidden hover:shadow-xl transition-all duration-300 group flex flex-col sm:flex-row h-auto sm:h-[500px] hover:sm:h-[500px] cursor-pointer"
          >
            <div className="w-full sm:w-[45%] relative overflow-hidden flex-shrink-0">
              <img src={project1} alt="7i-Gears" className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="w-full sm:w-[55%] p-6 lg:p-8 flex flex-col justify-start bg-white">
              <span className="text-yellow-600 text-xs font-bold uppercase tracking-widest mb-2">4th Edition • New Cairo, Egypt</span>
              <h2 className="text-xl font-bold text-[#0A1931] mb-3">7i-Gears (EGY-AFRICA EXPOS)</h2>
              <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-4">
                The Fourth Edition of 7i-Gears — the EGY-AFRICA EXPOS FOR ENGINEERING INDUSTRIES & INNOVATIONS. A premier platform for industrial progress and collaboration in the Africa-Egypt corridor.
              </p>
              <div className="flex flex-col gap-2 text-sm text-gray-600 mb-6">
                {currentProjects[0].details.map((d) => (
                  <div key={d.label} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-yellow-500 flex-shrink-0" />
                    <span><strong className="text-[#0A1931]">{d.label}:</strong> {d.value}</span>
                  </div>
                ))}
              </div>
              <a href={brochurePdf} download onClick={(e) => e.stopPropagation()} className="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-[#0A1931] px-4 py-2.5 rounded-full font-bold text-sm transition-all shadow-sm hover:shadow-md w-max">
                <Download size={14} /> Download Brochure
              </a>
            </div>
          </motion.div>

          {/* Card 2 — ASEE-ASEAN */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            onClick={() => setSelectedProject(currentProjects[1])}
            className="lg:col-span-5 bg-white border border-gray-100 rounded-3xl overflow-hidden hover:shadow-xl transition-shadow duration-300 group flex flex-col cursor-pointer"
          >
            <div className="w-full relative overflow-hidden">
              <img src={project2} alt="ASEE-ASEAN Smart Energy Expo" className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="p-6 flex flex-col flex-1 bg-white">
              <span className="text-yellow-600 text-xs font-bold uppercase tracking-widest mb-2">Mar 17-19, 2027 • Bangkok, Thailand</span>
              <h2 className="text-2xl font-bold text-[#0A1931] mb-3">ASEE-ASEAN Smart Energy Expo</h2>
              <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                A major industry event focused on Solar PV, Energy Storage, and E-Mobility. Anticipating 20,000+ visitors and 500+ exhibitors to accelerate deal-making in Southeast Asia's rapid energy transition.
              </p>
              <div className="flex flex-col gap-2 text-sm text-gray-600 mb-6">
                {currentProjects[1].details.map((d) => (
                  <div key={d.label} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-yellow-500 flex-shrink-0" />
                    <span><strong className="text-[#0A1931]">{d.label}:</strong> {d.value}</span>
                  </div>
                ))}
              </div>
              <div className="mt-auto">
                <a href={aseeBrochure} download onClick={(e) => e.stopPropagation()} className="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-[#0A1931] px-5 py-2.5 rounded-full font-bold text-sm transition-all shadow-sm hover:shadow-md w-max">
                  <Download size={16} /> Download Brochure
                </a>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 bg-[#0A1931]/80 backdrop-blur-sm flex items-center justify-center p-4 md:p-8">

          {/* Card 1 (7i-Gears) — original side-by-side layout */}
          {selectedProject.name === currentProjects[0].name ? (
            <div className="bg-white rounded-[2rem] w-full max-w-4xl max-h-[90vh] overflow-y-auto relative flex flex-col md:flex-row shadow-2xl">
              <button onClick={() => setSelectedProject(null)} className="absolute top-4 right-4 z-50 bg-white/90 hover:bg-gray-100 text-[#0A1931] w-10 h-10 rounded-full flex items-center justify-center shadow-md transition-all">
                <X size={20} />
              </button>
              <div className="w-full md:w-1/2 relative flex-shrink-0 bg-[#0A1931]">
                <img src={selectedProject.image} alt={selectedProject.name} className="w-full h-auto block" />
              </div>
              <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                <h3 className="text-yellow-600 text-sm font-bold tracking-widest uppercase mb-4">{selectedProject.category}</h3>
                <h2 className="text-3xl font-serif font-bold text-[#0A1931] mb-4">{selectedProject.name}</h2>
                <p className="text-gray-600 leading-relaxed text-base mb-6">{selectedProject.description}</p>
                <div className="flex flex-col gap-2 text-sm text-gray-600 mb-8">
                  {selectedProject.details.map((d) => (
                    <div key={d.label} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-yellow-500 flex-shrink-0" />
                      <span><strong className="text-[#0A1931]">{d.label}:</strong> {d.value}</span>
                    </div>
                  ))}
                </div>
                <a href={selectedProject.brochureLink} download className="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-[#0A1931] px-6 py-3 rounded-full font-bold text-sm transition-all shadow-sm hover:shadow-md w-max">
                  <Download size={16} /> Download Brochure
                </a>
              </div>
            </div>
          ) : (
            /* Card 2 (ASEE-ASEAN) — vertical full-image layout */
            <div className="bg-white rounded-[2rem] w-full max-w-3xl max-h-[90vh] overflow-y-auto relative shadow-2xl flex flex-col">
              <button onClick={() => setSelectedProject(null)} className="absolute top-4 right-4 z-50 bg-white/90 hover:bg-gray-100 text-[#0A1931] w-10 h-10 rounded-full flex items-center justify-center shadow-md transition-all">
                <X size={20} />
              </button>
              <div className="w-full rounded-t-[2rem] overflow-hidden flex-shrink-0">
                <img src={selectedProject.image} alt={selectedProject.name} className="w-full h-auto object-contain" />
              </div>
              <div className="p-8 md:p-10 flex flex-col">
                <h3 className="text-yellow-600 text-sm font-bold tracking-widest uppercase mb-3">{selectedProject.category}</h3>
                <h2 className="text-3xl font-serif font-bold text-[#0A1931] mb-4">{selectedProject.name}</h2>
                <p className="text-gray-600 leading-relaxed text-base mb-6">{selectedProject.description}</p>
                <div className="flex flex-col gap-2 text-sm text-gray-600 mb-8">
                  {selectedProject.details.map((d) => (
                    <div key={d.label} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-yellow-500 flex-shrink-0" />
                      <span><strong className="text-[#0A1931]">{d.label}:</strong> {d.value}</span>
                    </div>
                  ))}
                </div>
                <a href={selectedProject.brochureLink} download className="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-[#0A1931] px-6 py-3 rounded-full font-bold text-sm transition-all shadow-sm hover:shadow-md w-max">
                  <Download size={16} /> Download Brochure
                </a>
              </div>
            </div>
          )}
        </div>
      )}

      <Footer />
    </main>
  );
}
