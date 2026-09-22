import React, { useState, useEffect } from 'react';
import type { NavItem } from '../../types/school';
import { useSchool } from '../../context/SchoolContext';
import { Menu, X, ArrowRight, Trees } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeInDown } from '../animations';

interface NavbarProps {
  schoolName: string;
  tagline: string;
  navItems: NavItem[];
}

export const Navbar: React.FC<NavbarProps> = ({ schoolName, tagline, navItems }) => {
  const { openEnquiryModal, activePage, setActivePage, schoolData } = useSchool();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setActivePage(id);
    setMobileMenuOpen(false);
  };

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={fadeInDown}
      className={`sticky top-0 z-50 bg-[#FFFCF8]/95 backdrop-blur-md border-b border-[rgba(243,107,33,0.12)] transition-all duration-300 ${
        scrolled ? 'py-0 shadow-md shadow-orange-950/5' : 'py-1 shadow-xs shadow-orange-950/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between transition-all duration-300 ${scrolled ? 'h-16' : 'h-20'}`}>
          {/* Left Container: Logo Brand + Left-Aligned Navigation Links with Equal Spacing */}
          <div className="flex items-center gap-8 lg:gap-10">
            {/* Logo Brand */}
            <button onClick={() => handleNavClick('home')} className="flex items-center gap-3 group text-left focus:outline-hidden cursor-pointer shrink-0">
              {schoolData.logoImage ? (
                <img
                  src={schoolData.logoImage}
                  alt={schoolName}
                  className={`w-auto object-contain transition-all duration-300 ${
                    scrolled ? 'h-11 sm:h-12' : 'h-13 sm:h-14'
                  }`}
                />
              ) : (
                <>
                  <div className={`rounded-xl bg-gradient-to-br from-[#F36B21] to-[#D94F16] text-white flex items-center justify-center shadow-md group-hover:scale-105 transition-all duration-300 ${
                    scrolled ? 'w-10 h-10' : 'w-12 h-12'
                  }`}>
                    <Trees className={`text-amber-200 transition-all duration-300 ${scrolled ? 'w-5 h-5' : 'w-7 h-7'}`} />
                  </div>
                  <div>
                    <span className={`block font-black tracking-tight text-[#D94F16] font-heading leading-none transition-all duration-300 ${
                      scrolled ? 'text-lg sm:text-xl' : 'text-xl sm:text-2xl'
                    }`}>
                      {schoolName}
                    </span>
                    <span className="block text-[10px] text-[#5F6368] font-semibold tracking-wider uppercase mt-0.5">
                      {tagline}
                    </span>
                  </div>
                </>
              )}
            </button>

            {/* Desktop Nav Links (Positioned on the left immediately next to logo with equal spacing) */}
            <div className="hidden xl:flex items-center gap-7">
              {navItems.filter(item => !item.isButton).map((item) => {
                const isActive = activePage === item.id;

                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`text-[13px] font-semibold transition-colors relative py-1 focus:outline-hidden cursor-pointer tracking-wide ${
                      isActive ? 'text-[#F36B21] font-bold' : 'text-[#263238] hover:text-[#F36B21]'
                    }`}
                  >
                    {item.label}
                    {isActive ? (
                      <motion.span
                        layoutId="activeNavUnderline"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#F36B21]"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    ) : null}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Action Button: Enquire Now */}
          <div className="hidden xl:flex items-center">
            {navItems.filter(item => item.isButton).map((item) => (
              <motion.button
                key={item.id}
                whileHover={{ scale: 1.03, y: -1 }}
                whileTap={{ scale: 0.98 }}
                onClick={openEnquiryModal}
                className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#F36B21] to-[#D94F16] hover:from-[#D94F16] hover:to-[#c2410c] text-white font-bold text-xs shadow-md hover:shadow-orange-600/25 transition-all flex items-center gap-1.5 cursor-pointer group"
              >
                <span>{item.label}</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            ))}
          </div>

          {/* Tablet/Mobile Enquiry and Hamburger */}
          <div className="flex items-center gap-3 xl:hidden">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={openEnquiryModal}
              className="px-4 py-2 rounded-full bg-gradient-to-r from-[#F36B21] to-[#D94F16] text-white font-bold text-xs shadow-xs flex items-center gap-1 cursor-pointer"
            >
              <span>Enquire</span>
              <ArrowRight className="w-3 h-3" />
            </motion.button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-hidden cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="xl:hidden py-4 border-t border-slate-100 space-y-2 overflow-hidden"
            >
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full text-left px-3 py-2 text-sm font-medium rounded-lg flex items-center justify-between cursor-pointer ${
                    activePage === item.id ? 'bg-orange-50 text-[#c2410c] font-bold' : 'text-slate-800 hover:bg-slate-50'
                  }`}
                >
                  <span>{item.label}</span>
                  {activePage === item.id && <span className="w-2 h-2 rounded-full bg-orange-600"></span>}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

