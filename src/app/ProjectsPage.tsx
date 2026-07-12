import React, { useState } from 'react';
import { motion } from 'motion/react';
import { X } from 'lucide-react';
import Footer from './components/Footer';
import maharashtraexhibition from "../assets/maharashtraexhitbition.png";
import leadersIndiaExhibition from "../assets/leaders_india_exhibition.png";

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<{ name: string; category: string; description: string; image: string } | null>(null);

  const projects = [
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
      image: "https://images.unsplash.com/photo-1514222134-b57cbb8ce073?q=80&w=2069&auto=format&fit=crop"
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
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop"
    },
    {
      name: "Plastvision Arabia Exhibition",
      category: "Industrial Manufacturing",
      description: "Managing a massive Middle Eastern trade exhibition that delivers exceptional value to exhibitors and delegates, connecting raw material suppliers with global manufacturing leaders.",
      image: "https://scontent.fpnq13-6.fna.fbcdn.net/v/t39.30808-6/508230988_9323221987779880_8584564715799938566_n.jpg?stp=dst-jpg_tt6&cstp=mx2048x1365&ctp=s2048x1365&_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=UF0k2VlEgXkQ7kNvwGELWXc&_nc_oc=AdpGNuSoJwuikpYUCnK8t0SXeNxOPmtLxkugoHcb3Sx3IZ69983af0eHHXuQ-i-eIvnNFGEAhsjlaXCUaJLmVBw9&_nc_zt=23&_nc_ht=scontent.fpnq13-6.fna&_nc_gid=R78CZ_VufaWSOjepKsKcVg&_nc_ss=7b289&oh=00_AQBvJ_hxuCitTf60DA_rtoJJiKZMKRxLHES9qqhyFDx6EQ&oe=6A593CA3"
    },
    {
      name: "Acrex India Exhibition",
      category: "HVAC & Construction",
      description: "Designing a world-class exhibition for HVAC and construction sectors, focused on sustainable building technologies and creating strategic B2B networking opportunities for industry advancement.",
      image: "https://media.hitex.co.in/posts/2025/hvac-growth-and-sustainability-in-focus-at-acrex-2025.jpg?1741746111"
    },
    {
      name: "Fensterbau Frontale Exhibition",
      category: "Architecture",
      description: "Providing end-to-end management for the premier architectural trade show, uniting global facade and window technology leaders through roundtable discussions and impactful exhibitions.",
      image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=2070&auto=format&fit=crop"
    },
    {
      name: "Food Hospitality World Exhibition",
      category: "Hospitality",
      description: "Creating an elite business platform that connects premium hospitality brands with global suppliers, driving meaningful partnerships and massive growth within the hotelier industry.",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop"
    },
    {
      name: "Medical Electronic Innovation Exhibition",
      category: "Healthcare Innovation",
      description: "Orchestrating an advanced healthcare conference that brings together IoT pioneers and clinical experts, fostering innovation and knowledge-sharing in next-generation medical tech.",
      image: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?q=80&w=2064&auto=format&fit=crop"
    },
    {
      name: "Construct Maharashtra Exhibition",
      category: "Infrastructure",
      description: "An expertly planned regional infrastructure exhibition connecting government bodies and leading real estate companies to drive massive development opportunities across the state.",
      image: maharashtraexhibition
    },
    {
      name: "Central Beauty Asia Exhibition",
      category: "Cosmetics & Wellness",
      description: "A highly successful B2B networking event uniting global cosmetics brands and wellness innovators, delivering significant commercial value to sponsors and salon decision-makers.",
      image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=2087&auto=format&fit=crop"
    },
    {
      name: "WETEX Exhibition Dubai",
      category: "Sustainability",
      description: "Leading the charge in sustainable growth by organizing a massive Middle Eastern trade exhibition focused on water, energy, and environmental technology partnerships.",
      image: "https://www.utilities-me.com/wp-content/uploads/cloud/2024/09/05/qy602vgw1k80xqapn.jpeg"
    },
    {
      name: "Arab Health Exhibition",
      category: "Global Healthcare",
      description: "An unparalleled global healthcare platform that seamlessly connects international medical leaders with regional distributors through meticulously managed B2B networking and conferences.",
      image: "https://etimg.etb2bimg.com/photo/128783273.cms"
    },
    {
      name: "Plastico Brazil Exhibition",
      category: "Industrial Trade",
      description: "Managing a high-impact South American industrial trade fair, bringing together leading plastics manufacturers to foster cross-continental business growth and innovation.",
      image: "https://i.ytimg.com/vi/Pf5pXqSJjcg/maxresdefault.jpg"
    },
    {
      name: "Gulf Traffic Exhibition",
      category: "Transport & Logistics",
      description: "Orchestrating a premier smart transportation exhibition that unites logistics experts and government bodies to drive meaningful advancement in Middle Eastern mobility solutions.",
      image: "https://www.exhibitionstand.contractors/Content/media/image/2019/01/1672_orig.jpg"
    },
    {
      name: "India Auto Exhibition",
      category: "Automotive Industry",
      description: "Delivering an end-to-end automotive showcase that connects EV innovators with traditional manufacturing giants, creating lucrative B2B opportunities and driving industry evolution.",
      image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=2183&auto=format&fit=crop"
    },
    {
      name: "Cement Exhibition India",
      category: "Heavy Industry",
      description: "(Currently Working) Organizing a massive heavy industry exhibition, seamlessly connecting top cement manufacturers with infrastructure decision-makers for sustainable national growth.",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2076&auto=format&fit=crop"
    },
    {
      name: "Cement Exhibition Dubai",
      category: "Heavy Industry",
      description: "(Currently Working) Executing a high-stakes Middle Eastern trade conference that brings together global concrete suppliers and regional construction leaders to foster massive infrastructure partnerships.",
      image: "https://cdnmedia.mapei.com/images/librariesprovider59/banner/2-io8a8599.jpg?sfvrsn=495fdc8a_1"
    },
    {
      name: "Future of Waste Management in India",
      category: "Environmental Tech",
      description: "A critical knowledge-sharing forum and exhibition designed to connect environmental tech innovators with government bodies, driving sustainable waste solutions and circular economy growth.",
      image: "https://www.banyannation.com/wp-content/uploads/2024/10/Sustainable-Waste-Management.jpg"
    },
    {
      name: "Future of Healthcare in India",
      category: "Healthcare Strategy",
      description: "Organizing a highly impactful industry conference that unites telemedicine pioneers and policy-makers for progressive roundtable discussions on the digital transformation of patient care.",
      image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=2070&auto=format&fit=crop"
    },
    {
      name: "RAHSTA Exhibition",
      category: "Road Tech",
      description: "An expertly managed road construction and safety technology exhibition, providing a focused platform for infrastructure innovators to connect and secure lucrative industry partnerships.",
      image: "https://crystalcraftexpo.com/wp-content/uploads/2024/09/WhatsApp-Image-2024-04-10-at-12.51.56-PM.jpeg"
    },
    {
      name: "Construction Technology Exhibition",
      category: "Construction Innovation",
      description: "Creating a dynamic business platform that showcases bleeding-edge building innovations, from 3D printing to AI management, fostering collaboration among global construction experts.",
      image: "https://cdn.pangea-network.com/2025/06/BCT-Press-Release.jpg"
    }
  ];

  return (
    <main className="min-h-screen bg-[#FCFAF5] text-[#0A1931] overflow-hidden font-sans selection:bg-[#D4AF37] selection:text-white">
      <section className="bg-[#FCFAF5] pt-16 pb-24 px-6 font-sans relative z-10 overflow-hidden">
        {/* Page Header & Intro Description */}
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center mb-24">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >

            <h1 className="text-6xl md:text-7xl font-serif font-bold text-[#0A1931] mb-6 leading-tight">
              A legacy of <span className="text-yellow-600 font-bold font-light">intelligence.</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-light mb-6">
              Explore a curated selection of our most impactful global ventures and premium exhibitions.
            </p>
            <p className="text-lg text-gray-500 leading-relaxed font-light">
              Each project represents our commitment to redefining B2B matchmaking, driving massive international growth, and delivering flawlessly executed events that leave a lasting industry footprint.
            </p>
          </motion.div>
        </div>

        {/* 3-Column Grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => setSelectedProject(project)}
              className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-[420px] cursor-pointer"
            >
              {/* Image Section */}
              <div className="h-[220px] w-full overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              {/* Card Text Section */}
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
      </section>

      {/* Floating Modal Overlay */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 bg-[#0A1931]/80 backdrop-blur-sm flex items-center justify-center p-4 md:p-8 animate-in fade-in duration-300">
          <div className="bg-white rounded-[2rem] w-full max-w-4xl max-h-[90vh] overflow-y-auto relative flex flex-col md:flex-row shadow-2xl animate-in zoom-in-95 duration-300">

            {/* Cancel/Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-50 bg-white/90 hover:bg-gray-100 text-[#0A1931] w-10 h-10 rounded-full flex items-center justify-center shadow-md transition-all"
            >
              <X size={20} />
            </button>

            {/* Left Side (Image) */}
            <div className="w-full md:w-1/2 min-h-[300px] md:min-h-[450px] relative overflow-hidden flex-shrink-0">
              <img
                src={selectedProject.image}
                alt={selectedProject.name}
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
            </div>

            {/* Right Side (Text) */}
            <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
              <h3 className="text-yellow-600 text-sm font-bold tracking-widest uppercase mb-4">
                {selectedProject.category}
              </h3>
              <h2 className="text-3xl font-serif font-bold text-[#0A1931] mb-6">
                {selectedProject.name}
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                {selectedProject.description}
              </p>
            </div>

          </div>
        </div>
      )}

      <Footer />
    </main>
  );
}
