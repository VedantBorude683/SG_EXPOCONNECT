import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router';
import mainVideo from '../../assets/mainvideo.mp4';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about-us' },
  { name: 'Team', path: '/team' },
  { name: 'Projects', path: '/projects' },
  { name: 'Contact', path: '/contact' }
];

export default function Navigation({ delay = 0 }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => { setMenuOpen(false); }, [location]);

  return (
    <>
      <motion.nav
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay }}
        className="fixed w-full top-0 left-0 z-50 bg-white transition-all duration-700"
      >
        <div className="w-full px-8 md:px-12 py-2 flex items-center justify-between h-36">

          {/* Logo */}
          <Link to="/" className="flex items-center flex-shrink-0">
            <video
              src={mainVideo}
              autoPlay
              loop
              muted
              playsInline
              className="w-28 sm:w-32 md:w-40 lg:w-48 h-auto max-h-32 object-contain transition-none duration-300 cursor-pointer bg-white rounded-xl md:rounded-[24px] lg:rounded-[39px]"
            />
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((item) => {
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

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden flex items-center justify-center w-10 h-10 rounded-full border border-gray-200 bg-white/80 text-[#0A1931] hover:bg-[#0A1931] hover:text-white transition-all"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-[#FCFAF5] flex flex-col pt-48 px-8 pb-12 lg:hidden shadow-2xl"
          >
            <ul className="flex flex-col gap-8">
              {navLinks.map((item, idx) => {
                const isActive = location.pathname === item.path;
                return (
                  <motion.li
                    key={item.name}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + idx * 0.05, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Link
                      to={item.path}
                      onClick={() => setMenuOpen(false)}
                      className={`text-2xl sm:text-3xl font-sans font-semibold tracking-wide transition-all duration-300 block ${isActive ? 'text-[#D4AF37] translate-x-2' : 'text-[#0A1931] hover:text-[#D4AF37] hover:translate-x-2'}`}
                    >
                      {item.name}
                    </Link>
                  </motion.li>
                );
              })}
            </ul>

            {/* Upgraded Mobile Footer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="mt-auto border-t border-gray-200 pt-8"
            >
              <p className="text-[#0A1931] font-bold text-lg mb-1">SG Expo Connect</p>
              <p className="text-gray-500 text-sm mb-6">Connecting Business. Connecting People.</p>
              <p className="text-gray-400 text-xs">© {new Date().getFullYear()} All Rights Reserved</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
