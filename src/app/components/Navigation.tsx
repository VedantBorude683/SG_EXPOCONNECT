import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link, useLocation } from 'react-router';
import logoImg from '../../assets/logo.png';

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
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay }}
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-700 ${isScrolled
        ? 'bg-[#FCFAF5]/80 backdrop-blur-md border-b border-gray-200/50'
        : 'bg-transparent py-2'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center relative h-20">
        <Link to="/" className="flex items-center -ml-12">
          <img
            src={logoImg}
            alt="Logo"
            className="h-12 md:h-16 w-auto object-contain mix-blend-multiply"
            style={{ mixBlendMode: 'multiply' }}
          />
        </Link>

        <ul className="hidden lg:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          {[
            { name: 'Home', path: '/' },
            { name: 'About Us', path: '/about-us' },
            { name: 'Team', path: '/team' },
            { name: 'Projects', path: '/projects' },
            { name: 'Contact', path: '/contact' }
          ].map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className={`text-sm font-semibold tracking-wide transition-colors relative group uppercase ${isActive ? 'text-[#0A1931]' : 'text-[#0A1931]/70 hover:text-[#0A1931]'}`}
                >
                  {item.name}
                  <span className={`absolute -bottom-2 left-0 h-[2px] bg-[#0A1931] transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                </Link>
              </li>
            );
          })}
        </ul>


      </div>
    </motion.nav>
  );
}
