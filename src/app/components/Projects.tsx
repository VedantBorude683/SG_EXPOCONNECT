import React from 'react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router';
import leadersIndiaExhibition from "../../assets/leaders_india_exhibition.png";

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
  );
}
