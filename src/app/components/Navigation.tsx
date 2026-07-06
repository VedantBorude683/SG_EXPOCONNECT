import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router';
import logoVideo from '../../assets/logo.mp4';

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
        className={`fixed w-full top-0 left-0 z-50 transition-all duration-700 ${isScrolled
          ? 'bg-white shadow-sm'
          : 'bg-transparent py-2'
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between h-20">

          {/* Logo */}
          <Link to="/" className="flex items-center flex-shrink-0">
            <video
              src={logoVideo}
              autoPlay
              loop
              muted
              playsInline
              className="h-14 md:h-16 w-auto object-contain"
              style={{
                backgroundColor: 'transparent',
                mixBlendMode: 'multiply',
              }}
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
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-[#FCFAF5] flex flex-col pt-28 px-8 pb-12 lg:hidden"
          >
            <ul className="flex flex-col gap-6">
              {navLinks.map((item, idx) => {
                const isActive = location.pathname === item.path;
                return (
                  <motion.li
                    key={item.name}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.07, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <Link
                      to={item.path}
                      className={`text-3xl font-bold tracking-tight transition-colors ${isActive ? 'text-[#0A1931]' : 'text-[#0A1931]/40 hover:text-[#0A1931]'}`}
                    >
                      {item.name}
                    </Link>
                  </motion.li>
                );
              })}
            </ul>
            <div className="mt-auto">
              <p className="text-gray-400 text-sm">© {new Date().getFullYear()} SG Expo Connect</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
