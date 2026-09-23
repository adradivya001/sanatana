import React from 'react';
import type { SchoolData } from '../../types/school';
import { motion } from 'framer-motion';

interface AboutSchoolProps {
  about: SchoolData['about'];
}

export const AboutSchool: React.FC<AboutSchoolProps> = ({ about }) => {
  const paragraphs = about.welcomeIntro?.paragraphs || [
    "Sanātana is a school for learning aimed at delivering education in its truest sense blending the great yesterday's techniques of our vedic culture and today's methodologies of modern education to prepare students for tomorrow.",
    "We stand out by following a teaching philosophy still uncommon in the world – we put the child and her/his well-being in the centre.",
    "We are not just a pre-school but a place where children are nurtured to be life-long learners and responsible citizens.",
    "At Sanātana, we respect each child as a unique individual, bubbling with limitless potential, curious and interested in their world around them. We acknowledge children as sophisticated thinkers and communicators, adopting numerous ways to share their thoughts and feelings. We embrace our role in providing a stress-free, secure and playful environment where learning is celebrated, curiosity enhanced and conversations with trained facilitators encouraged."
  ];

  return (
    <section 
      id="about" 
      className="relative min-h-[900px] lg:min-h-[950px] w-full bg-[#FFF7EE] text-[#2C2420] overflow-hidden flex flex-col justify-between py-12 sm:py-16 lg:py-20 select-none"
    >
      {/* ============================================================ */}
      {/* 1. BACKGROUND PHOTOGRAPHIC HERITAGE ENVIRONMENT              */}
      {/* ============================================================ */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center sm:bg-right pointer-events-none opacity-90"
        style={{
          backgroundImage: `url('/philosophy_clean_bg.jpg')`,
          filter: 'contrast(1.02) brightness(1.01)',
        }}
      />

      {/* ============================================================ */}
      {/* 2. TOP EYEBROWS (Left: OUR PHILOSOPHY | Right: ROOTED...)    */}
      {/* ============================================================ */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 w-full flex items-center justify-between mb-2 sm:mb-4">
        {/* Top-Left Eyebrow */}
        <motion.div
          initial={{ opacity: 0, x: -15 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3"
        >
          <div className="w-8 sm:w-10 h-[1.5px] bg-[#C2410C]" />
          <span className="text-[11px] sm:text-xs font-bold tracking-[0.22em] text-[#C2410C] uppercase font-sans">
            OUR PHILOSOPHY
          </span>
        </motion.div>

        {/* Top-Right Heritage Slogan */}
        <motion.div
          initial={{ opacity: 0, x: 15 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="hidden sm:flex flex-col items-end text-right"
        >
          <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.22em] text-[#9A3412] uppercase">
            ROOTED IN VALUES
          </span>
          <span className="text-[9px] sm:text-[10px] font-medium tracking-[0.16em] text-[#78350F] uppercase">
            READY FOR THE FUTURE
          </span>
        </motion.div>
      </div>

      {/* ============================================================ */}
      {/* 3. MAIN EDITORIAL CONTENT (Left 58% Text Column)             */}
      {/* ============================================================ */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 w-full flex-1 flex flex-col justify-center my-4 sm:my-6">
        
        {/* Two-Line Editorial Serif Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="max-w-2xl mb-6 sm:mb-7"
        >
          <h2 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-bold tracking-[-0.015em] leading-[1.05]"
            style={{ fontFamily: "'Playfair Display', 'Cormorant Garamond', Georgia, serif" }}
          >
            <span className="text-[#D94F16] block">
              Blending Vedic Culture
            </span>
            <span className="text-[#3D1A10] block mt-1">
              with Modern Methodologies
            </span>
          </h2>
        </motion.div>

        {/* Paragraphs (Left-aligned clean typography) */}
        <div className="max-w-[700px] space-y-3.5 sm:space-y-4 text-[#332A26] text-xs sm:text-sm md:text-[14.5px] leading-[1.65] font-normal font-sans">
          
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <strong className="text-[#1F1916] font-bold">Sanātana</strong> is a school for learning aimed at delivering education in its truest sense blending the great yesterday's techniques of our vedic culture and today's methodologies of modern education to prepare students for tomorrow.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-[#4A3D36]"
          >
            We stand out by following a teaching philosophy still uncommon in the world – we put the child and her/his well-being in the centre.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-[#4A3D36]"
          >
            We are not just a pre-school but a place where children are nurtured to be life-long learners and responsible citizens.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-[#4A3D36] leading-relaxed"
          >
            At Sanātana, we respect each child as a unique individual, bubbling with limitless potential, curious and interested in their world around them. We acknowledge children as sophisticated thinkers and communicators, adopting numerous ways to share their thoughts and feelings. We embrace our role in providing a stress-free, secure and playful environment where learning is celebrated, curiosity enhanced and conversations with trained facilitators encouraged.
          </motion.p>

        </div>

      </div>

      {/* ============================================================ */}
      {/* 4. BOTTOM SECTION: Real Books Stack + 4 Pillars + Tagline    */}
      {/* ============================================================ */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 w-full mt-8 sm:mt-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end pb-5 sm:pb-6">
          
          {/* BOTTOM-LEFT: Leather Book Stack matching reference image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-4 flex flex-col items-start"
          >
            <div className="flex flex-col items-start gap-1 w-full max-w-[280px]">
              {[
                { title: "VEDAS", width: "w-56 sm:w-60", height: "h-7", bg: "bg-gradient-to-r from-[#6E2B16] via-[#8C3A1F] to-[#542010]" },
                { title: "VALUES", width: "w-60 sm:w-64", height: "h-7", bg: "bg-gradient-to-r from-[#592312] via-[#752E18] to-[#43190C]" },
                { title: "KNOWLEDGE", width: "w-64 sm:w-68", height: "h-7", bg: "bg-gradient-to-r from-[#7D341B] via-[#9E4223] to-[#612714]" },
                { title: "CHARACTER", width: "w-68 sm:w-72", height: "h-7", bg: "bg-gradient-to-r from-[#501E0E] via-[#6B2914] to-[#3B150A]" },
                { title: "BRIGHTER TOMORROW", width: "w-72 sm:w-76", height: "h-8", bg: "bg-gradient-to-r from-[#632713] via-[#85341A] to-[#4D1D0D]" },
              ].map((book) => (
                <div
                  key={book.title}
                  className={`${book.width} ${book.height} rounded-r-md rounded-l-[1px] ${book.bg} shadow-md flex items-center px-3.5 text-[#FDE68A] border-y border-amber-950/60 relative select-none`}
                  style={{
                    boxShadow: '0 4px 10px rgba(45, 17, 8, 0.28), inset 2px 0 0 rgba(255,255,255,0.12)',
                  }}
                >
                  {/* Spine ridge line */}
                  <div className="absolute left-2 top-0 bottom-0 w-[1.5px] bg-amber-400/40" />
                  
                  <span 
                    className="text-[10px] sm:text-[11px] font-black tracking-[0.14em] uppercase font-serif pl-2 text-amber-200 drop-shadow-sm"
                  >
                    {book.title}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* BOTTOM-CENTER / RIGHT: Four Minimal Line-Art Philosophy Pillars */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="lg:col-span-8 w-full"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 relative items-center">
              
              {/* Pillar 1: Nurturing Individuals (Lotus Line Art) */}
              <div className="flex flex-col items-center text-center p-2 group">
                <div className="w-8 h-8 text-[#C2410C] mb-2 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-7 h-7 stroke-current fill-none stroke-[1.6]" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 21c-4-4-7-8-7-12 0-3 3-5 7-5s7 2 7 5c0 4-3 8-7 12z" />
                    <path d="M12 4c-2 3-3 6-3 9 0 2 1 4 3 6 2-2 3-4 3-6 0-3-1-6-3-9z" />
                  </svg>
                </div>
                <h4 className="text-xs sm:text-[13px] font-serif font-bold text-[#3B302A] leading-tight">
                  Nurturing<br />Individuals
                </h4>
              </div>

              {/* Vertical divider */}
              <div className="hidden md:block absolute left-[25%] top-2 bottom-2 w-[1px] bg-[#C2410C]/25" />

              {/* Pillar 2: Holistic Education (Open Book Line Art) */}
              <div className="flex flex-col items-center text-center p-2 group">
                <div className="w-8 h-8 text-[#C2410C] mb-2 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-7 h-7 stroke-current fill-none stroke-[1.6]" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                  </svg>
                </div>
                <h4 className="text-xs sm:text-[13px] font-serif font-bold text-[#3B302A] leading-tight">
                  Holistic<br />Education
                </h4>
              </div>

              {/* Vertical divider */}
              <div className="hidden md:block absolute left-[50%] top-2 bottom-2 w-[1px] bg-[#C2410C]/25" />

              {/* Pillar 3: Life-long Learners (People / Group Line Art) */}
              <div className="flex flex-col items-center text-center p-2 group">
                <div className="w-8 h-8 text-[#C2410C] mb-2 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-7 h-7 stroke-current fill-none stroke-[1.6]" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <h4 className="text-xs sm:text-[13px] font-serif font-bold text-[#3B302A] leading-tight">
                  Life-long<br />Learners
                </h4>
              </div>

              {/* Vertical divider */}
              <div className="hidden md:block absolute left-[75%] top-2 bottom-2 w-[1px] bg-[#C2410C]/25" />

              {/* Pillar 4: Responsible Citizens (Sprout / Leaf Line Art) */}
              <div className="flex flex-col items-center text-center p-2 group">
                <div className="w-8 h-8 text-[#C2410C] mb-2 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-7 h-7 stroke-current fill-none stroke-[1.6]" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
                    <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
                  </svg>
                </div>
                <h4 className="text-xs sm:text-[13px] font-serif font-bold text-[#3B302A] leading-tight">
                  Responsible<br />Citizens
                </h4>
              </div>

            </div>
          </motion.div>

        </div>

        {/* ============================================================ */}
        {/* CLOSING STATEMENT TAGLINE: A BRIGHTER TOMORROW              */}
        {/* ============================================================ */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="pt-4 sm:pt-5 flex items-center justify-center gap-4 sm:gap-6 border-t border-[#C2410C]/20"
        >
          <div className="w-16 sm:w-32 h-[1px] bg-[#C2410C]/35" />
          <span className="text-[10px] sm:text-[11px] font-extrabold tracking-[0.32em] text-[#C2410C] uppercase text-center font-sans">
            A BRIGHTER TOMORROW
          </span>
          <div className="w-16 sm:w-32 h-[1px] bg-[#C2410C]/35" />
        </motion.div>

      </div>
    </section>
  );
};

