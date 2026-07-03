import React from 'react';
import { Mail, Globe } from 'lucide-react';
import { Link } from 'react-router';

export default function Footer() {
  return (
    <footer className="relative bg-[#0A1931] text-white pt-16 pb-8 overflow-hidden rounded-t-[3rem] z-20 mt-20">
      <div className="absolute inset-0 opacity-15" style={{ backgroundImage: 'radial-gradient(circle at top right, #D4AF37 0%, transparent 60%)' }} />

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="lg:col-span-2">
            <h3 className="text-5xl font-black tracking-tighter mb-6">
              SG<span className="text-[#D4AF37] font-light">Expo</span>
            </h3>
            <p className="text-gray-400 text-xl max-w-md font-light leading-relaxed mb-10">
              Redefining global business connections through extraordinary exhibition experiences.
            </p>
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full border border-[#D4AF37]/30 flex items-center justify-center hover:bg-[#D4AF37] hover:border-transparent transition-all cursor-pointer"><Mail size={20} /></div>
              <div className="w-12 h-12 rounded-full border border-[#D4AF37]/30 flex items-center justify-center hover:bg-[#D4AF37] hover:border-transparent transition-all cursor-pointer"><Globe size={20} /></div>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-8 text-white">Platform</h4>
            <ul className="space-y-4">
              {['Exhibitions', 'Networking', 'Partnerships', 'Global Reach'].map(link => (
                <li key={link}><a href="#" className="text-gray-400 hover:text-[#D4AF37] transition-colors">{link}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-8 text-white">Company</h4>
            <ul className="space-y-4">
              <li><Link to="/about-us" className="text-gray-400 hover:text-[#D4AF37] transition-colors">About SG Expo</Link></li>
              <li><Link to="/team" className="text-gray-400 hover:text-[#D4AF37] transition-colors">Leadership</Link></li>
              <li><Link to="/careers" className="text-gray-400 hover:text-[#D4AF37] transition-colors">Careers</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-[#D4AF37] transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500">&copy; {new Date().getFullYear()} SG Expo Connect India Pvt Ltd. All rights reserved.</p>
          <div className="flex gap-8 text-gray-500 text-sm">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
