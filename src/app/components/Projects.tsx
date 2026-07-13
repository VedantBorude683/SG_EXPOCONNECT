import React from 'react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router';
import { Download } from 'lucide-react';
import leadersIndiaExhibition from "../../assets/leaders_india_exhibition.png";
import project1 from "../../assets/project1.jpg";
import project2 from "../../assets/project2.png";
import brochurePdf from "../../assets/Brochure.pdf";
import aseeBrochure from "../../assets/ASEE-brochure 2027.pdf";

const topProjects = [
  {
    name: "Taste Exhibition",
    category: "Food & Beverage",
    description: "Orchestrating a world-class trade exhibition that connects global food and beverage innovators, facilitating B2B networking events and creating a premium platform for culinary industry advancement.",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=2070&auto=format&fit=crop"
  },
  {
    name: "Leader's in India Exhibition",
    category: "Corporate Summits",
    description: "An exclusive industry conference uniting top corporate decision-makers and government bodies under one roof to foster leadership partnerships and drive massive economic growth across diverse sectors.",
    image: leadersIndiaExhibition
  },
  {
    name: "Festival of Bharat Exhibition",
    category: "Cultural Events",
    description: "Delivering an end-to-end event management solution that bridges traditional artisanship with modern commerce, creating meaningful opportunities for cultural enterprises and global sponsors.",
    image: "https://th-i.thgim.com/public/incoming/l67bs5/article66214623.ece/alternates/FREE_1200/02frkathakali4.JPG"
  },
  {
    name: "Hospital Build & Infrastructure Exhibition",
    category: "Healthcare Infrastructure",
    description: "Organizing a highly impactful business platform connecting leading healthcare infrastructure companies with international investors to drive sustainable growth in medical facility development.",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop"
  },
  {
    name: "Medical Fair India Exhibition",
    category: "Medical Tech",
    description: "A premier knowledge-sharing forum and exhibition bringing together medical tech innovators and industry experts to foster collaboration and showcase breakthrough healthcare solutions.",
    image: "https://www.messe-duesseldorf.de/cache/pica/1/5/5/9/4/15001654083400/MEDIKABAZAAR.jpg"
  },
  {
    name: "Plastvision Arabia Exhibition",
    category: "Industrial Manufacturing",
    description: "Managing a massive Middle Eastern trade exhibition that delivers exceptional value to exhibitors and delegates, connecting raw material suppliers with global manufacturing leaders.",
    image: "https://scontent.fpnq13-6.fna.fbcdn.net/v/t39.30808-6/508230988_9323221987779880_8584564715799938566_n.jpg?stp=dst-jpg_tt6&cstp=mx2048x1365&ctp=s2048x1365&_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=UF0k2VlEgXkQ7kNvwGELWXc&_nc_oc=AdpGNuSoJwuikpYUCnK8t0SXeNxOPmtLxkugoHcb3Sx3IZ69983af0eHHXuQ-i-eIvnNFGEAhsjlaXCUaJLmVBw9&_nc_zt=23&_nc_ht=scontent.fpnq13-6.fna&_nc_gid=R78CZ_VufaWSOjepKsKcVg&_nc_ss=7b289&oh=00_AQBvJ_hxuCitTf60DA_rtoJJiKZMKRxLHES9qqhyFDx6EQ&oe=6A593CA3"
  }
];

export default function Projects() {
  const navigate = useNavigate();

  return (
    <>
      <section className="w-full bg-[#FCFAF5] py-24 relative z-10 overflow-hidden">

      <div className="max-w-7xl mx-auto px-6 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <h2 className="font-serif font-bold text-[#0A1931] text-4xl md:text-5xl lg:text-6xl tracking-tight mb-16">
            Our <span className="font-bold text-yellow-600 font-light">Completed Projects</span>
          </h2>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-16">
        {topProjects.map((project, index) => (
          <motion.div
            key={project.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            onClick={() => navigate('/projects')}
            className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-[420px] cursor-pointer"
          >
            <div className="h-[220px] w-full overflow-hidden relative">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
              />
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <h3 className="text-xs font-bold text-yellow-600 uppercase tracking-widest mb-2">
                {project.category}
              </h3>
              <h4 className="text-xl font-bold text-[#0A1931] mb-2">
                {project.name}
              </h4>
              <p className="text-sm text-gray-500 line-clamp-3 mb-4">
                {project.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="flex justify-center mt-4">
        <button
          onClick={() => navigate('/projects')}
          className="px-8 py-3 rounded-full border border-yellow-600 text-yellow-600 text-sm font-semibold tracking-wide hover:bg-yellow-600 hover:text-white transition-colors"
        >
          See More
        </button>
      </div>
    </section>

    {/* Current Projects Section */}
    <section className="w-full bg-white py-24 px-6 relative overflow-hidden">
        {/* Section Header */}
        <div className="max-w-7xl mx-auto mb-16 border-b border-[#0A1931]/10 pb-8 flex flex-col items-start relative z-10">
          <span className="text-yellow-600 text-sm font-bold tracking-widest uppercase mb-4">
            Live & Upcoming
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#0A1931]">
            Our Current Projects
          </h2>
        </div>

        {/* Asymmetrical 2-Card Grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10">

          {/* Card 1 — 7i-Gears (Portrait / Left-Right split) */}
          <div className="lg:col-span-7 bg-[#FCFAF5] border border-gray-100 rounded-3xl overflow-hidden hover:shadow-xl transition-shadow duration-300 group flex flex-col sm:flex-row h-auto sm:h-[500px] cursor-pointer">
            <div className="w-full sm:w-[45%] relative overflow-hidden flex-shrink-0">
              <img
                src={project1}
                alt="7i-Gears (EGY-AFRICA EXPOS)"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="w-full sm:w-[55%] p-6 lg:p-8 flex flex-col justify-start bg-white">
              <span className="text-yellow-600 text-xs font-bold uppercase tracking-widest mb-2">
                4th Edition • New Cairo, Egypt
              </span>
              <h3 className="text-xl font-bold text-[#0A1931] mb-3">
                7i-Gears (EGY-AFRICA EXPOS)
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-4">
                The Fourth Edition of 7i-Gears — the EGY-AFRICA EXPOS FOR ENGINEERING INDUSTRIES & INNOVATIONS. A premier platform for industrial progress and collaboration in the Africa-Egypt corridor.
              </p>
              <div className="flex flex-col gap-2 text-sm text-gray-600 mb-6">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-yellow-500 flex-shrink-0"></span>
                  <span><strong className="text-[#0A1931]">Venue:</strong> Egypt International Exhibition Center</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-yellow-500 flex-shrink-0"></span>
                  <span><strong className="text-[#0A1931]">Date:</strong> 28–30 November 2026</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-yellow-500 flex-shrink-0"></span>
                  <span><strong className="text-[#0A1931]">Focus:</strong> Engineering Industries & Innovations</span>
                </div>
              </div>
              <a
                href={brochurePdf}
                download
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-[#0A1931] px-4 py-2.5 rounded-full font-bold text-sm transition-all shadow-sm hover:shadow-md w-max"
              >
                <Download size={14} /> Download Brochure
              </a>
            </div>
          </div>

          {/* Card 2 — ASEE-ASEAN (Landscape / Top-Bottom stack) */}
          <div className="lg:col-span-5 bg-[#FCFAF5] border border-gray-100 rounded-3xl overflow-hidden hover:shadow-xl transition-shadow duration-300 group flex flex-col cursor-pointer">
            <div className="w-full relative overflow-hidden">
              <img
                src={project2}
                alt="ASEE-ASEAN Smart Energy Expo"
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="p-6 flex flex-col flex-1 bg-white">
              <span className="text-yellow-600 text-xs font-bold uppercase tracking-widest mb-2">
                Mar 17-19, 2027 • Bangkok, Thailand
              </span>
              <h3 className="text-2xl font-bold text-[#0A1931] mb-3">
                ASEE-ASEAN Smart Energy Expo
              </h3>
              <p className="text-gray-600 text-sm line-clamp-3 mb-6">
                A major industry event focused on Solar PV, Energy Storage, and E-Mobility. Anticipating 20,000+ visitors and 500+ exhibitors to accelerate deal-making in Southeast Asia's rapid energy transition.
              </p>
              <div className="mt-auto">
                <a
                  href={aseeBrochure}
                  download
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-[#0A1931] px-5 py-2.5 rounded-full font-bold text-sm transition-all shadow-sm hover:shadow-md w-max"
                >
                  <Download size={16} /> Download Brochure
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
