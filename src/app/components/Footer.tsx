import React from 'react';
import { Link } from 'react-router';
import mainVideo from '../../assets/mainvideo.mp4';
import { Linkedin, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-[#FDFCF8] border-t border-[#e8e0d0]/60 text-[#0A1931] relative z-20">

      {/* Main Footer Body */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-12 md:py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-12">

        {/* Column 1: Brand */}
        <div className="flex flex-col gap-5">
          <video
            src={mainVideo}
            autoPlay
            loop
            muted
            playsInline
            className="w-56 h-auto object-contain"
            style={{ backgroundColor: 'transparent', mixBlendMode: 'darken', borderRadius: '4px' }}
          />
          <p className="text-gray-500 text-sm leading-relaxed">
            With years of industry experience, we are a dedicated team of exhibition professionals who understand that every event is an opportunity to make a lasting impression.
          </p>
          <div className="flex gap-3 mt-2">
            <a href="#" style={{ WebkitTapHighlightColor: 'transparent' }} className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:border-yellow-600 hover:text-yellow-600 active:text-yellow-600 transition-all cursor-pointer">
              <Linkedin size={15} />
            </a>
            <a href="#" style={{ WebkitTapHighlightColor: 'transparent' }} className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:border-yellow-600 hover:text-yellow-600 active:text-yellow-600 transition-all cursor-pointer">
              <Facebook size={15} />
            </a>
            <a href="#" style={{ WebkitTapHighlightColor: 'transparent' }} className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:border-yellow-600 hover:text-yellow-600 active:text-yellow-600 transition-all cursor-pointer">
              <Instagram size={15} />
            </a>
            <a href="#" style={{ WebkitTapHighlightColor: 'transparent' }} className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:border-yellow-600 hover:text-yellow-600 active:text-yellow-600 transition-all cursor-pointer">
              <Twitter size={15} />
            </a>
            <a href="#" style={{ WebkitTapHighlightColor: 'transparent' }} className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:border-yellow-600 hover:text-yellow-600 active:text-yellow-600 transition-all cursor-pointer">
              <Youtube size={15} />
            </a>
          </div>
        </div>

        {/* Column 2: Company Links */}
        <div className="flex flex-col gap-4">
          <h4 className="text-yellow-600 font-bold text-base tracking-wide mb-1">Company</h4>
          <div className="w-10 h-px bg-yellow-600 mb-3" />
          <ul className="flex flex-col gap-3">
            {['Home', 'About Us', 'Team', 'Projects', 'Contact Us'].map((item) => (
              <li key={item} className="flex items-center gap-2 text-gray-500 text-sm hover:text-[#0A1931] transition-colors cursor-pointer group">
                <span className="w-1.5 h-1.5 rounded-full bg-yellow-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Services */}
        <div className="flex flex-col gap-4">
          <h4 className="text-yellow-600 font-bold text-base tracking-wide mb-1">Services</h4>
          <div className="w-10 h-px bg-yellow-600 mb-3" />
          <ul className="flex flex-col gap-3">
            {[
              'Exhibition Space Selling',
              'Conference Selling',
              'Awarda Selling',
              'Pavallion Selling',
              'Roundtable Selling',
              'B2B meeting selling',
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-gray-500 text-sm hover:text-[#0A1931] transition-colors cursor-pointer group">
                <span className="w-1.5 h-1.5 rounded-full bg-yellow-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Contact Info */}
        <div className="flex flex-col gap-4">
          <h4 className="text-yellow-600 font-bold text-base tracking-wide mb-1">Contact Info</h4>
          <div className="w-10 h-px bg-yellow-600 mb-3" />
          <div className="flex flex-col gap-4 text-gray-500 text-sm">
            <p className="leading-relaxed">
              SG Expo Connect India Pvt Ltd<br />
              Mumbai, India
            </p>

            <a href="tel:09594546757" className="text-yellow-600 hover:text-yellow-500 transition-colors">
              +91 09594546757
            </a>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200/60">
        <div className="max-w-7xl mx-auto px-8 py-5 flex justify-center items-center">
          <p className="text-sm text-gray-500">
            Copyright © {new Date().getFullYear()} SG Expo Connect India Pvt Ltd. All Rights Reserved.
          </p>
        </div>
      </div>

    </footer>
  );
}
