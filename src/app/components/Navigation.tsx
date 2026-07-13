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
        className="fixed w-full top-0 left-0 z-50 bg-[#FCFAF5] transition-all duration-700"
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
              className="w-28 sm:w-32 md:w-40 lg:w-48 h-auto max-h-32 object-contain transition-none duration-300 cursor-pointer"
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
            className="lg:hidden flex items-center justify-center w-10 h-10 rounded-full border border-gray-200 bg-[#FCFAF5]/80 text-[#0A1931] hover:bg-[#0A1931] hover:text-white transition-all"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Drawer — Premium Agency Takeover */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
            animate={{ opacity: 1, clipPath: 'inset(0 0 0% 0)' }}
            exit={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[100] bg-[#FCFAF5] flex flex-col w-full h-screen overflow-hidden lg:hidden"
          >
            {/* Top Header Row */}
            <div className="w-full px-8 py-4 flex items-center justify-between flex-shrink-0">
              <Link to="/" onClick={() => setMenuOpen(false)} className="flex items-center flex-shrink-0">
                <video
                  src={mainVideo}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-24 sm:w-28 h-auto max-h-20 object-contain cursor-pointer"
                />
              </Link>
              <button
                onClick={() => setMenuOpen(false)}
                className="p-3 bg-white rounded-full shadow-sm border border-gray-200 text-[#0A1931] hover:bg-gray-50 transition-all"
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
            </div>

            {/* Divider */}
            <div className="w-full h-px bg-gray-200 flex-shrink-0" />

            {/* Main Nav Links */}
            <nav className="flex-1 flex flex-col justify-center px-10 gap-10">
              {navLinks.map((item, idx) => {
                const isActive = location.pathname === item.path;
                const num = String(idx + 1).padStart(2, '0');
                return (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.15 + idx * 0.07, ease: [0.22, 1, 0.36, 1], duration: 0.5 }}
                  >
                    <Link
                      to={item.path}
                      onClick={() => setMenuOpen(false)}
                      className="group cursor-pointer"
                    >
                      <span className={`text-4xl sm:text-5xl font-serif font-bold transition-colors duration-300 ${isActive ? 'text-yellow-600' : 'text-[#0A1931] group-hover:text-yellow-600'}`}>
                        {item.name}
                      </span>
                    </Link>
                  </motion.div>
                );
              })}
            </nav>

            {/* Divider */}
            <div className="w-full h-px bg-gray-200 flex-shrink-0" />

            {/* Footer Row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55, duration: 0.6 }}
              className="w-full px-10 py-8 flex justify-between items-end flex-shrink-0"
            >
              <div className="flex flex-col gap-1">
                <p className="text-lg font-bold text-[#0A1931]">SG Expo Connect</p>
                <p className="text-xs text-gray-500">Connecting Business. Connecting People.</p>
                <p className="text-xs text-gray-400">© {new Date().getFullYear()} All Rights Reserved</p>
              </div>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2.5 rounded-full text-sm font-bold transition-all shadow-md"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
