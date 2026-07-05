import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const projects = [
  { name: "Taste Exhibition", isActive: false },
  { name: "Leader's in India Exhibition", isActive: false },
  { name: "Festival of Bharat Exhibition", isActive: false },
  { name: "Hospital Build & Infrastructure Exhibition", isActive: false },
  { name: "Medical Fair India Exhibition", isActive: false },
  { name: "Plastvision Arabia Exhibition", isActive: false },
  { name: "Acrex India Exhibition", isActive: false },
  { name: "Fensterbau Frontale Exhibition", isActive: false },
  { name: "Food Hospitality World Exhibition", isActive: false },
  { name: "Medical Electronic Innovation Exhibition", isActive: false },
  { name: "Construct Maharashtra Exhibition", isActive: false },
  { name: "Central Beauty Asia Exhibition", isActive: false },
  { name: "WETEX Exhibition Dubai", isActive: false },
  { name: "Arab Health Exhibition", isActive: false },
  { name: "Plastico Brazil Exhibition", isActive: false },
  { name: "Gulf Traffic Exhibition", isActive: false },
  { name: "India Auto Exhibition", isActive: false },
  { name: "Cement Exhibition India", isActive: true },
  { name: "Cement Exhibition Dubai", isActive: true },
  { name: "Future of Waste Management in india", isActive: false },
  { name: "Future of Healthcare in india", isActive: false },
  { name: "RAHSTA Exhibition", isActive: false },
  { name: "Construction Technology Exhibition", isActive: false }
];

export default function Projects() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="w-full bg-[#FCFAF5] py-24 relative z-10 overflow-hidden">

      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >

          <h2 className="font-serif font-bold text-[#0A1931] text-4xl md:text-5xl lg:text-6xl tracking-tight">
            Our <span className="font-bold text-yellow-600 font-light">Projects</span>
          </h2>
        </motion.div>
      </div>

      {/* Premium Index Layout (3-Column Grid) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-2 max-w-[90rem] mx-auto px-6 mt-12 pb-24">
        {projects.map((project, index) => {
          // Format index with leading zero (e.g., 01, 02)
          const number = (index + 1).toString().padStart(2, '0');

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: (index % 10) * 0.05, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className={`group items-center justify-between py-6 border-b border-gray-200 cursor-pointer hover:bg-white hover:shadow-sm hover:px-6 transition-all duration-300 ease-out rounded-xl ${!isExpanded && index >= 6 ? 'hidden md:flex' : 'flex'}`}
            >

              {/* Left Side (Number + Title) */}
              <div className="flex items-center gap-6">
                <span className="text-sm font-bold text-gray-400 font-mono">
                  {number}
                </span>
                <h3 className="text-base md:text-lg font-sans font-semibold text-[#0A1931] group-hover:text-yellow-600 transition-colors">
                  {project.name}
                </h3>
              </div>

              {/* Right Side (Badges & Arrow) */}
              <div className="flex items-center gap-4">
                {project.isActive && (
                  <span className="flex items-center text-[10px] font-bold text-green-700 uppercase tracking-widest bg-green-100 px-3 py-1 rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse mr-2"></span>
                    Active
                  </span>
                )}
                <ArrowRight className="w-6 h-6 text-gray-300 group-hover:text-yellow-600 group-hover:translate-x-2 transition-all duration-300" />
              </div>

            </motion.div>
          );
        })}
      </div>

      {/* Mobile Read More Button */}
      {!isExpanded && projects.length > 6 && (
        <div className="md:hidden flex justify-center mt-4">
          <button
            onClick={() => setIsExpanded(true)}
            className="px-8 py-3 rounded-full border border-yellow-600 text-yellow-600 text-sm font-semibold tracking-wide hover:bg-yellow-600 hover:text-white transition-colors"
          >
            Read More
          </button>
        </div>
      )}
    </section>
  );
}
