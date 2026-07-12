import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const services = [
  {
    title: "Exhibition",
    description: "Showcase your brand globally through masterfully organized and heavily attended trade exhibitions.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdgJW-r9rlV1vAlGk1K4nnE5xdmVEWsQbgHLODqF5SRLkDZWETd3BxDSo&s=10"
  },
  {
    title: "Conference",
    description: "Host world-class conferences that inspire, educate, and bring industry leaders together under one roof.",
    image: "https://cdn.prod.website-files.com/637391ec846652083583cb2d/63c66e42aa3524e7199a77d1_conference%20atmosphere.jpg"
  },
  {
    title: "Awards",
    description: "Celebrate excellence with premium corporate award ceremonies and unforgettable gala evenings.",
    image: "https://images.stockcake.com/public/7/5/1/751ac869-0d0c-46ac-80dc-1f33bdfe3d7a_large/trophy-award-showcase-stockcake.jpg"
  },
  {
    title: "Roundtable",
    description: "Facilitate exclusive executive roundtables designed for deep, strategic business discussions.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1VkYIFTnjPVgtE-iGS_WJOCuLvpivURKLT9gjiW4teU_O07KKUmI5bY6t&s=10"
  },
  {
    title: "B2B Meetings",
    description: "Drive your business forward with highly targeted networking and strategic B2B meeting setups.",
    image: "https://img.magnific.com/free-photo/business-meeting-office_1268-21523.jpg?semt=ais_hybrid&w=740&q=80"
  }
];

export default function PremiumGallery(props: any) {
  return (
    <section className="w-full bg-[#FCFAF5] py-24 relative z-10 overflow-hidden font-sans">

      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-[#D4AF37] font-semibold tracking-widest uppercase text-sm mb-4">
            Our Work In Action
          </motion.div>
          <h2 className="font-serif font-bold text-[#0A1931] text-4xl md:text-5xl lg:text-6xl tracking-tight">
            Global Exhibitions & <span className="font-serif font-bold text-yellow-600 font-light">Events.</span>
          </h2>
        </motion.div>
      </div>

      {/* Classic Grid Layout */}
      <div className="max-w-7xl mx-auto px-6 bg-[#FCFAF5]">
        <div className="flex flex-wrap justify-center gap-8 mt-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="w-full md:w-[calc(50%-2rem)] lg:w-[calc(33.333%-2rem)] max-w-[400px] bg-white rounded-2xl shadow-[0_4px_20px_rgb(0,0,0,0.05)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.1)] transition-shadow duration-300 overflow-hidden flex flex-col group cursor-pointer"
            >

              {/* Top Half (Image) */}
              <div className="relative w-full h-[250px] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Bottom Half (Text Content) */}
              <div className="p-8 flex flex-col flex-grow bg-white">
                <h3 className="text-2xl font-bold text-[#0A1931] mb-3">
                  {service.title}
                </h3>

                <p className="text-gray-600 text-sm mb-6 flex-grow leading-relaxed">
                  {service.description}
                </p>

              </div>

            </motion.div>
          ))}
        </div>
      </div>

    </section>
  );
}
