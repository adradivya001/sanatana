import React from 'react';
import type { SchoolData } from '../../types/school';
import { useSchool } from '../../context/SchoolContext';
import { ArrowRight, Sun } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp, slideInRight, staggerContainer } from '../animations';

interface SchoolHeroProps {
  hero: SchoolData['hero'];
}

export const SchoolHero: React.FC<SchoolHeroProps> = ({ hero }) => {
  const { openEnquiryModal } = useSchool();

  return (
    <section id="hero" className="relative py-12 lg:py-20 bg-gradient-to-b from-slate-50 via-white to-white overflow-hidden">
      {/* Decorative subtle background ambient glows with very slow breath */}
      <motion.div
        animate={{ scale: [1, 1.05, 1], opacity: [0.4, 0.6, 0.4] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-50/60 rounded-full blur-3xl -z-10 pointer-events-none"
      />
      <motion.div
        animate={{ scale: [1.05, 1, 1.05], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-amber-50/50 rounded-full blur-3xl -z-10 pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Typography & CTAs (Staggered Entrance Sequence) */}
          <motion.div
            variants={staggerContainer(0.1, 0.05)}
            initial="hidden"
            animate="visible"
            className="lg:col-span-6 flex flex-col items-start text-left"
          >
            {/* 1. Eyebrow */}
            <motion.span variants={fadeInUp} className="text-xs sm:text-sm font-bold tracking-widest text-[#c2410c] uppercase mb-4">
              {hero.eyebrow}
            </motion.span>

            {/* 2. Main Headline with Serif + Handwritten Script Accent */}
            <motion.h1 variants={fadeInUp} className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#c2410c] font-heading tracking-tight leading-[1.15] mb-6">
              Nurturing <br />
              Confident Minds <br />
              for a{' '}
              <motion.span
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.35, duration: 0.5 }}
                className="font-script text-amber-500 font-normal italic text-5xl sm:text-6xl lg:text-7xl ml-1 inline-block drop-shadow-xs"
              >
                {hero.headlineAccent}
              </motion.span>
            </motion.h1>

            {/* 3. Description */}
            <motion.p variants={fadeInUp} className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl mb-8 font-normal">
              {hero.description}
            </motion.p>

            {/* 4. Action Buttons */}
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={openEnquiryModal}
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#c2410c] hover:bg-[#9a3412] text-white font-bold text-sm shadow-lg hover:shadow-teal-900/20 transition-all flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>{hero.primaryCtaText}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform text-amber-400" />
              </motion.button>

              <motion.a
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                href="#about"
                className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-white hover:bg-slate-50 text-slate-800 font-bold text-sm border border-slate-300 shadow-xs transition-all text-center cursor-pointer"
              >
                {hero.secondaryCtaText}
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Column: Editorial School/Student Image with Script Decorations */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            animate="visible"
            className="lg:col-span-6 relative flex justify-center"
          >
            {/* Decorative Top-Right Handwritten Script */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="absolute -top-6 -right-2 sm:right-6 z-20 flex items-start gap-1 font-script text-slate-700 text-xl sm:text-2xl leading-none select-none"
            >
              <span className="whitespace-pre-line text-right font-bold">
                {hero.decorativeTopText}
              </span>
              <Sun className="w-6 h-6 text-amber-400 animate-spin-slow ml-1" />
            </motion.div>

            {/* Main Rounded Image Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10 w-full max-w-[460px] h-[460px] sm:h-[520px] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white bg-slate-100 group"
            >
              <img
                src={hero.image}
                alt="Happy School Student"
                className="w-full h-full object-cover object-top group-hover:scale-104 transition-transform duration-700 ease-out"
              />
              
              {/* Bottom Subtle Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

              {/* Floating Book Card Accent inside image */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute bottom-6 right-6 z-20 bg-amber-50/95 backdrop-blur-md px-5 py-3 rounded-2xl shadow-xl border border-amber-200 text-center select-none"
              >
                <span className="block font-heading text-xs font-bold text-amber-900 leading-tight">
                  {hero.decorativeBottomPill.title}
                </span>
                <span className="block font-heading text-[11px] text-amber-800 font-medium leading-tight mt-0.5">
                  {hero.decorativeBottomPill.subtitle}
                </span>
              </motion.div>
            </motion.div>

            {/* Decorative soft pastel circle under image */}
            <div className="absolute -bottom-6 -left-6 w-64 h-64 bg-orange-100/50 rounded-full blur-2xl -z-10" />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

