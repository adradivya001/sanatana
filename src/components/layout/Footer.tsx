import React from 'react';
import type { SchoolData } from '../../types/school';
import { useSchool } from '../../context/SchoolContext';
import { MapPin, Phone, Mail, ArrowUp } from 'lucide-react';
import { motion } from 'framer-motion';
import { FadeIn } from '../animations';

interface FooterProps {
  schoolName: string;
  tagline: string;
  footer: SchoolData['footer'];
}

export const Footer: React.FC<FooterProps> = ({ schoolName, tagline, footer }) => {
  const { setActivePage, schoolData } = useSchool();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (href: string) => {
    const pageId = href.replace('#', '');
    if (pageId) {
      setActivePage(pageId);
    }
  };

  const socialLinks = schoolData.topBar.socialLinks;

  return (
    <footer className="bg-white text-slate-700 pt-10 pb-5 border-t border-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 4-Column Grid with refined compact padding & spacing */}
        <FadeIn direction="up" duration={0.6} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-8 border-b border-slate-100">
          
          {/* Col 1: Logo, Sanatana School of Excellence (4 cols) */}
          <div className="lg:col-span-4 flex flex-col items-start space-y-2">
            <button onClick={() => setActivePage('home')} className="flex items-center gap-3 text-left focus:outline-hidden cursor-pointer group">
              {schoolData.logoImage ? (
                <img
                  src={schoolData.logoImage}
                  alt={schoolName}
                  className="h-12 w-auto object-contain"
                />
              ) : (
                <>
                  <div className="w-10 h-10 flex items-center justify-center shrink-0">
                    <svg viewBox="0 0 100 100" className="w-10 h-10 fill-[#c2410c]" xmlns="http://www.w3.org/2000/svg">
                      <path d="M50 10 C35 10 25 22 25 35 C25 45 31 52 38 57 C36 60 33 65 30 75 C28 80 32 82 35 80 C40 76 45 70 47 62 C48 70 48 85 48 90 C48 92 52 92 52 90 C52 85 52 70 53 62 C55 70 60 76 65 80 C68 82 72 80 70 75 C67 65 64 60 62 57 C69 52 75 45 75 35 C75 22 65 10 50 10 Z" />
                      <circle cx="50" cy="24" r="5" fill="#d97706" />
                      <circle cx="38" cy="34" r="4" fill="#0d9488" />
                      <circle cx="62" cy="34" r="4" fill="#0d9488" />
                      <circle cx="44" cy="46" r="3.5" fill="#d97706" />
                      <circle cx="56" cy="46" r="3.5" fill="#d97706" />
                    </svg>
                  </div>
                  <div>
                    <span className="block text-lg sm:text-xl font-black text-[#c2410c] font-heading tracking-tight leading-none">
                      {schoolName}
                    </span>
                    <span className="block text-[10px] font-bold text-slate-800 tracking-wider uppercase mt-0.5">
                      INTERNATIONAL SCHOOL
                    </span>
                    <span className="block text-[9px] text-slate-400 font-semibold tracking-wider mt-0.5">
                      {tagline}
                    </span>
                  </div>
                </>
              )}
            </button>
            <p className="text-xs text-slate-500 leading-relaxed max-w-sm pt-0.5">
              {footer.shortDescription}
            </p>
          </div>

          {/* Col 2: Quick Links (2-column layout matching reference) (3 cols) */}
          <div className="lg:col-span-3 space-y-2">
            <h4 className="text-xs font-bold text-slate-900 tracking-tight">
              Quick Links
            </h4>
            <div className="grid grid-cols-2 gap-x-4 gap-y-1.5 text-xs">
              <div>
                <ul className="space-y-1.5">
                  {footer.quickLinks.map((item) => (
                    <li key={item.label}>
                      <button onClick={() => handleNavClick(item.href)} className="text-slate-600 hover:text-[#c2410c] hover:translate-x-1 transition-all text-left cursor-pointer inline-block">
                        {item.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <ul className="space-y-1.5">
                  {footer.facilitiesLinks.map((item) => (
                    <li key={item.label}>
                      <button onClick={() => handleNavClick(item.href)} className="text-slate-600 hover:text-[#c2410c] hover:translate-x-1 transition-all text-left cursor-pointer inline-block">
                        {item.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Col 3: Contact Us (3 cols) */}
          <div className="lg:col-span-3 space-y-2">
            <h4 className="text-xs font-bold text-slate-900 tracking-tight">
              Contact Us
            </h4>
            
            <div className="space-y-2 text-xs text-slate-600">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#c2410c] shrink-0 mt-0.5" />
                <span className="leading-snug whitespace-pre-line">{footer.contact.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#c2410c] shrink-0" />
                <span>{footer.contact.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#c2410c] shrink-0" />
                <span>{footer.contact.email}</span>
              </div>
            </div>
          </div>

          {/* Col 4: Follow Us (2 cols) */}
          <div className="lg:col-span-2 space-y-2">
            <h4 className="text-xs font-bold text-slate-900 tracking-tight">
              Follow Us
            </h4>
            
            {socialLinks && (
              <div className="space-y-2">
                <div className="flex items-center gap-2.5 text-[#c2410c]">
                  {socialLinks.facebook && (
                    <motion.a whileHover={{ scale: 1.1, y: -1 }} href={socialLinks.facebook} target="_blank" rel="noreferrer" className="w-7 h-7 rounded-full bg-[#c2410c] text-white flex items-center justify-center transition-colors shadow-2xs hover:bg-orange-800" title="Facebook">
                      <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                    </motion.a>
                  )}
                  {socialLinks.instagram && (
                    <motion.a whileHover={{ scale: 1.1, y: -1 }} href={socialLinks.instagram} target="_blank" rel="noreferrer" className="w-7 h-7 rounded-full bg-[#c2410c] text-white flex items-center justify-center transition-colors shadow-2xs hover:bg-orange-800" title="Instagram">
                      <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                    </motion.a>
                  )}
                  {socialLinks.youtube && (
                    <motion.a whileHover={{ scale: 1.1, y: -1 }} href={socialLinks.youtube} target="_blank" rel="noreferrer" className="w-7 h-7 rounded-full bg-[#c2410c] text-white flex items-center justify-center transition-colors shadow-2xs hover:bg-orange-800" title="YouTube">
                      <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                    </motion.a>
                  )}
                  {socialLinks.linkedin && (
                    <motion.a whileHover={{ scale: 1.1, y: -1 }} href={socialLinks.linkedin} target="_blank" rel="noreferrer" className="w-7 h-7 rounded-full bg-[#c2410c] text-white flex items-center justify-center transition-colors shadow-2xs hover:bg-orange-800" title="LinkedIn">
                      <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                    </motion.a>
                  )}
                </div>
                <p className="text-[11px] text-slate-500 leading-tight">
                  {footer.socialMessage}
                </p>
              </div>
            )}
          </div>

        </FadeIn>

        {/* Bottom Bar: Copyright, Legal & Scroll to Top */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>© 2026 Sanatana International School. All Rights Reserved.</p>

          <div className="flex items-center gap-4 sm:gap-6">
            <a href="#" className="hover:text-[#c2410c] transition-colors">Privacy Policy</a>
            <span className="text-slate-300">|</span>
            <a href="#" className="hover:text-[#c2410c] transition-colors">Terms &amp; Conditions</a>
            <span className="text-slate-300">|</span>
            <a href="#" className="hover:text-[#c2410c] transition-colors">Sitemap</a>
            
            {/* Scroll To Top Button exactly styled like reference image (dark teal circle) */}
            <motion.button
              whileHover={{ scale: 1.1, y: -1 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToTop}
              className="w-7 h-7 rounded-full bg-[#c2410c] hover:bg-orange-800 text-white flex items-center justify-center transition-colors shadow-xs ml-1 cursor-pointer"
              title="Scroll to Top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </motion.button>
          </div>
        </div>

      </div>
    </footer>
  );
};
