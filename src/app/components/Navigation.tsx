import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link, useLocation } from 'react-router';

export default function Navigation({ delay = 0 }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay }}
      className={`fixed top-0 w-full z-50 transition-all duration-700 ${
        isScrolled 
          ? 'bg-[#FDFCF8]/70 backdrop-blur-xl border-b border-[#D4AF37]/10 shadow-[0_10px_40px_rgba(10,25,49,0.03)] py-3' 
          : 'bg-transparent py-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
        <Link to="/" className="text-3xl font-black text-[#0A1931] tracking-tighter">
          SG<span className="text-[#D4AF37] font-light">Expo</span>
        </Link>

        <ul className="hidden lg:flex items-center gap-8">
          {[
            { name: 'Home', path: '/' },
            { name: 'About Us', path: '/about-us' },
            { name: 'Team', path: '/team' },
            { name: 'Projects', path: '/projects' },
            { name: 'Contact Us', path: '/contact' }
          ].map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <li key={item.name}>
                <Link 
                  to={item.path} 
                  className={`text-sm font-semibold tracking-wide transition-colors relative group uppercase ${isActive ? 'text-[#0A1931]' : 'text-gray-500 hover:text-[#0A1931]'}`}
                >
                  {item.name}
                  <span className={`absolute -bottom-2 left-0 h-[2px] bg-[#D4AF37] transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                </Link>
              </li>
            );
          })}
        </ul>

        <motion.button
          whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
          className="group relative px-8 py-3.5 bg-[#0A1931] text-white rounded-full font-semibold overflow-hidden shadow-[0_10px_20px_rgba(10,25,49,0.15)]"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37] to-[#B87333] translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-500 ease-[0.16,1,0.3,1]" />
          <span className="relative z-10 flex items-center gap-2">Initiate Contact <ArrowRight size={16} /></span>
        </motion.button>
      </div>
    </motion.nav>
  );
}
