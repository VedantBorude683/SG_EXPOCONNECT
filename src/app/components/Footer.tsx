import React from 'react';
import { Link } from 'react-router';
import logo from '../../assets/logo.png';
import { Mail, Globe } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-[#FCFAF5] border-t border-gray-200/50 pt-20 pb-10 relative z-20">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-12 gap-12">

        {/* Left Column (The Anchor) */}
        <div className="md:col-span-8 flex flex-col items-start gap-6">
          <img
            src={logo}
            alt="SG Expo Connect Logo"
            className="w-56 h-auto object-contain mix-blend-multiply"
          />
          <p className="text-gray-500 font-medium max-w-sm leading-relaxed">
            Redefining global business connections through extraordinary exhibition experiences.
          </p>
          <div className="flex gap-4 mt-2">
            <div className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:bg-[#D4AF37] hover:text-white hover:border-transparent transition-all cursor-pointer"><Mail size={18} /></div>
            <div className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:bg-[#D4AF37] hover:text-white hover:border-transparent transition-all cursor-pointer"><Globe size={18} /></div>
          </div>
        </div>

        {/* Right Column (Links) */}
        <div className="md:col-span-4 flex flex-col items-start md:items-end gap-6">
          <h4 className="text-lg font-bold text-[#0A1931] uppercase tracking-widest mb-2">Explore</h4>
          <ul className="flex flex-col items-start md:items-end gap-4">
            {[
              { name: 'Home', path: '/' },
              { name: 'About Us', path: '/about-us' },
              { name: 'Team', path: '/team' },
              { name: 'Projects', path: '/projects' },
              { name: 'Contact', path: '/contact' }
            ].map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className="text-gray-600 font-semibold uppercase tracking-wider text-sm transition-colors hover:text-blue-900"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 mt-16 pt-8 border-t border-gray-200/50 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-gray-400 font-medium">
          © {new Date().getFullYear()} SG Expo Connect India Pvt Ltd. All rights reserved.
        </p>
        <div className="flex gap-6 text-sm text-gray-400">
          <a href="#" className="hover:text-blue-900 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-blue-900 transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
