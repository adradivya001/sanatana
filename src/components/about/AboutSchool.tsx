import React from 'react';
import type { SchoolData } from '../../types/school';
import { motion } from 'framer-motion';
import { Sparkles, BookOpen, Users, Heart, Sprout } from 'lucide-react';

interface AboutSchoolProps {
  about: SchoolData['about'];
}

export const AboutSchool: React.FC<AboutSchoolProps> = ({ about }) => {
  const paragraphs = about.welcomeIntro?.paragraphs || [
    "Sanātana is a school for learning aimed at delivering education in its truest sense blending the great yesterday's techniques of our vedic culture and today's methodologies of modern education to prepare students for tomorrow.",
    "We stand out by following a teaching philosophy still uncommon in the world – we put the child and her/his well-being in the centre.",
    "We are not just pre-school but a place where children are nurtured to be life-long learners and responsible citizens.",
    "At Sanātana, we respect each child as unique individual, bubbling with limitless potential, curious and interested in their world around them. We acknowledge children as sophisticated thinkers and communicators, adopting numerous ways to share their thoughts and feelings. We embrace our role in providing a stress-free, secure and playful environment where learning is celebrated, curiosity enhanced and conversations with trained facilitators encouraged."
  ];

  const books = [
    { title: "VEDAS", subtitle: "Rooted Wisdom", width: "w-52 sm:w-56 md:w-60", color: "from-[#4A2013] to-[#2B1008]", ribbon: "#D97706" },
    { title: "VALUES", subtitle: "Moral Compass", width: "w-48 sm:w-52 md:w-56", color: "from-[#5D2816] to-[#38160B]", ribbon: "#B45309" },
    { title: "KNOWLEDGE", subtitle: "Curious Minds", width: "w-44 sm:w-48 md:w-52", color: "from-[#70321A] to-[#451B0D]", ribbon: "#D94F16" },
    { title: "CHARACTER", subtitle: "Inner Strength", width: "w-40 sm:w-44 md:w-48", color: "from-[#853C1F] to-[#54210F]", ribbon: "#F59E0B" },
    { title: "BRIGHTER TOMORROW", subtitle: "Future Readiness", width: "w-36 sm:w-40 md:w-44", color: "from-[#9E4825] to-[#632813]", ribbon: "#FBBF24" },
  ];

  const pillars = [
    {
      id: "nurturing",
      title: "Nurturing\nIndividuals",
      icon: Heart,
    },
    {
      id: "holistic",
      title: "Holistic\nEducation",
      icon: BookOpen,
    },
    {
      id: "lifelong",
      title: "Life-long\nLearners",
      icon: Users,
    },
    {
      id: "citizens",
      title: "Responsible\nCitizens",
      icon: Sprout,
    },
  ];

  return (
    <section 
      id="about" 
      className="relative min-h-screen lg:min-h-[110vh] bg-gradient-to-b from-[#FFFDF9] via-[#FFF5EB] to-[#FCECDC] text-[#2C2420] overflow-hidden flex flex-col justify-between py-16 sm:py-20 lg:py-24 selection:bg-[#F6C8A5] selection:text-[#552719]"
    >
      {/* ============================================================ */}
      {/* LAYER 1: Background Atmospheric Atmosphere & Silhouettes    */}
      {/* ============================================================ */}
      
      {/* Soft warm sun glow */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-[#FFE0C4]/45 via-[#FFD1A9]/20 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-gradient-to-br from-[#FFEBD9]/40 to-transparent blur-2xl pointer-events-none" />

      {/* ============================================================ */}
      {/* LAYER 2: Decorative Mandala (Top-Left)                      */}
      {/* ============================================================ */}
      <div className="absolute -top-16 -left-16 sm:-top-24 sm:-left-24 w-80 sm:w-[450px] h-80 sm:h-[450px] pointer-events-none opacity-20 sm:opacity-25 z-10">
        <svg viewBox="0 0 400 400" className="w-full h-full text-[#D94F16] animate-[spin_160s_linear_infinite]" fill="none" stroke="currentColor">
          <circle cx="200" cy="200" r="190" strokeWidth="1" strokeDasharray="4 6" />
          <circle cx="200" cy="200" r="160" strokeWidth="1.2" />
          <circle cx="200" cy="200" r="130" strokeWidth="0.8" strokeDasharray="3 3" />
          <circle cx="200" cy="200" r="100" strokeWidth="1.5" />
          <circle cx="200" cy="200" r="70" strokeWidth="0.8" />
          <circle cx="200" cy="200" r="40" strokeWidth="1.2" />
          <circle cx="200" cy="200" r="15" strokeWidth="1" fill="currentColor" fillOpacity="0.05" />
          {/* 12 radial petal petals */}
          {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => (
            <g key={deg} transform={`rotate(${deg} 200 200)`}>
              <path d="M 200 40 Q 215 100 200 160 Q 185 100 200 40" strokeWidth="1" fill="currentColor" fillOpacity="0.03" />
              <path d="M 200 100 Q 208 135 200 170 Q 192 135 200 100" strokeWidth="0.8" />
              <line x1="200" y1="10" x2="200" y2="40" strokeWidth="1.5" />
              <circle cx="200" cy="25" r="3" fill="currentColor" />
            </g>
          ))}
        </svg>
      </div>

      {/* ============================================================ */}
      {/* LAYER 3: Heritage Silhouettes (Pavilion, Banyan Tree, Birds) */}
      {/* ============================================================ */}
      
      {/* Top-Right Soft Birds in sky */}
      <div className="absolute top-12 sm:top-20 right-16 sm:right-32 pointer-events-none opacity-30 text-[#853C1F]">
        <svg width="140" height="70" viewBox="0 0 140 70" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
          <path d="M 10 25 Q 16 18 22 25 Q 28 18 34 25" />
          <path d="M 50 15 Q 58 6 66 15 Q 74 6 82 15" />
          <path d="M 95 32 Q 101 26 107 32 Q 113 26 119 32" />
        </svg>
      </div>

      {/* Right Edge: Subtle Indian Heritage Pavilion Silhouette */}
      <div className="absolute top-1/3 -right-6 sm:right-4 w-72 sm:w-96 h-80 sm:h-[420px] pointer-events-none opacity-[0.14] text-[#D94F16] z-0">
        <svg viewBox="0 0 300 400" className="w-full h-full" fill="currentColor">
          {/* Chhatri / Indian Heritage Dome Structure */}
          <path d="M 150 20 Q 160 50 190 70 L 110 70 Q 140 50 150 20 Z" />
          <rect x="148" y="5" width="4" height="18" />
          <circle cx="150" cy="5" r="4" />
          <rect x="95" y="70" width="110" height="8" rx="2" />
          {/* Pillars */}
          <rect x="105" y="78" width="8" height="160" />
          <rect x="146" y="78" width="8" height="160" />
          <rect x="187" y="78" width="8" height="160" />
          {/* Arch details */}
          <path d="M 105 110 Q 125.5 85 146 110" stroke="#FFFDF9" strokeWidth="4" fill="none" />
          <path d="M 146 110 Q 166.5 85 187 110" stroke="#FFFDF9" strokeWidth="4" fill="none" />
          {/* Base */}
          <rect x="85" y="238" width="130" height="12" rx="3" />
          <rect x="75" y="250" width="150" height="16" rx="4" />
          {/* Soft tree branch framing pavilion */}
          <path d="M 280 120 Q 230 110 200 130 Q 170 150 140 140" stroke="currentColor" strokeWidth="3" fill="none" opacity="0.6" />
          <circle cx="210" cy="115" r="14" opacity="0.3" />
          <circle cx="240" cy="105" r="20" opacity="0.3" />
          <circle cx="265" cy="120" r="18" opacity="0.3" />
        </svg>
      </div>

      {/* Left Edge: Soft Vedic Ashram / Banyan Tree Foliage Silhouette */}
      <div className="absolute bottom-28 -left-12 sm:left-0 w-64 sm:w-80 h-72 sm:h-96 pointer-events-none opacity-[0.10] text-[#70321A] z-0">
        <svg viewBox="0 0 300 400" className="w-full h-full" fill="currentColor">
          <path d="M 30 380 Q 60 250 110 210 Q 140 180 160 120" stroke="currentColor" strokeWidth="12" strokeLinecap="round" fill="none" />
          <circle cx="160" cy="100" r="60" />
          <circle cx="110" cy="140" r="45" />
          <circle cx="70" cy="180" r="40" />
          <circle cx="200" cy="120" r="40" />
        </svg>
      </div>

      {/* ============================================================ */}
      {/* LAYER 4: Giant Om Watermark + Sanskrit Typography           */}
      {/* ============================================================ */}
      <div 
        className="absolute top-1/2 -translate-y-1/2 right-0 sm:right-[5%] lg:right-[8%] w-[380px] sm:w-[520px] lg:w-[620px] aspect-square pointer-events-none select-none z-[2] flex flex-col items-center justify-center"
        aria-hidden="true"
      >
        <motion.div
          animate={{
            y: [-6, 6, -6],
            scale: [1, 1.015, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative flex flex-col items-center justify-center w-full h-full"
        >
          {/* Giant Om Sacred Symbol */}
          <span 
            className="text-[280px] sm:text-[380px] lg:text-[460px] font-serif font-black leading-none text-[#F6C8A5] opacity-[0.38] sm:opacity-[0.42] select-none transform transition-transform duration-1000"
            style={{
              textShadow: '0 0 60px rgba(246, 200, 165, 0.4)',
              filter: 'drop-shadow(0 8px 24px rgba(217, 79, 22, 0.08))',
            }}
          >
            ॐ
          </span>

          {/* Sanskrit Editorial Accent Beneath Om */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.6 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.4 }}
            className="absolute bottom-10 lg:bottom-14 flex items-center gap-3"
          >
            <div className="w-8 h-[1px] bg-[#D94F16]/40" />
            <span className="text-xs sm:text-sm font-serif tracking-[0.35em] text-[#7A2F18] font-bold uppercase">
              विद्या • ज्ञानम् • संस्कारः
            </span>
            <div className="w-8 h-[1px] bg-[#D94F16]/40" />
          </motion.div>
        </motion.div>
      </div>

      {/* ============================================================ */}
      {/* LAYER 5: Foreground Main Content (Left 58% Editorial Block)  */}
      {/* ============================================================ */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 w-full pt-4 sm:pt-6">
        
        {/* TOP LEFT EYEBROW WITH HORIZONTAL ACCENT LINE */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex items-center gap-3.5 mb-5 sm:mb-7"
        >
          <div className="w-10 sm:w-14 h-[1.5px] bg-[#D94B17]" />
          <span className="text-[11px] sm:text-xs font-bold tracking-[0.22em] text-[#D94B17] uppercase font-sans">
            OUR PHILOSOPHY
          </span>
        </motion.div>

        {/* TWO-LINE EDITORIAL SERIF MAIN HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          className="max-w-3xl mb-8 sm:mb-10"
        >
          <h2 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[66px] font-bold tracking-[-0.02em] leading-[1.02] sm:leading-[1.04]"
            style={{ fontFamily: "'Cormorant Garamond', 'Playfair Display', Georgia, serif" }}
          >
            <span className="text-[#D94B17] block">
              Blending Vedic Culture
            </span>
            <span className="text-[#552719] block mt-1 sm:mt-1.5 font-medium italic sm:not-italic">
              with Modern Methodologies
            </span>
          </h2>
        </motion.div>

        {/* SANĀTANA BODY PARAGRAPHS (Left Editorial Column) */}
        <div className="max-w-[780px] space-y-4 sm:space-y-5 text-[#3B302A] text-sm sm:text-base md:text-[17px] leading-[1.68] sm:leading-[1.74] font-normal font-sans">
          
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#2C211B] font-medium text-base sm:text-lg md:text-[18px] leading-relaxed"
          >
            {paragraphs[0]}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-[#4A3D36]"
          >
            {paragraphs[1]}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-[#4A3D36]"
          >
            {paragraphs[2]}
          </motion.p>

          {paragraphs[3] && (
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-[#4A3D36] text-xs sm:text-sm md:text-[15px] leading-relaxed opacity-95 pt-1"
            >
              {paragraphs[3]}
            </motion.p>
          )}

        </div>

      </div>

      {/* ============================================================ */}
      {/* LAYER 6: Bottom Section - Book Stack + 4 Pillars + Tagline   */}
      {/* ============================================================ */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 w-full mt-14 sm:mt-18 lg:mt-20">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-end pb-8 sm:pb-10 border-b border-[#E85A1A]/18">
          
          {/* BOTTOM-LEFT: Vedic Book Stack (Grounding the heritage wisdom) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
            className="lg:col-span-4 flex flex-col items-start"
          >
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#D94F16]" />
              <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.2em] text-[#7A2F18] uppercase">
                Foundations of Wisdom
              </span>
            </div>

            {/* Realistic Stacked Perspective Books */}
            <div className="flex flex-col-reverse items-start gap-1 sm:gap-1.5 pt-1">
              {books.map((book, idx) => (
                <motion.div
                  key={book.title}
                  whileHover={{ x: 6 }}
                  transition={{ duration: 0.2 }}
                  className={`${book.width} h-7 sm:h-8 rounded-r-md rounded-l-[2px] bg-gradient-to-r ${book.color} shadow-md flex items-center justify-between px-3 text-white border-y border-amber-900/40 relative cursor-default select-none`}
                  style={{
                    boxShadow: '0 4px 12px rgba(43, 16, 8, 0.22), inset 2px 0 0 rgba(255,255,255,0.15)',
                    transform: `translateX(${idx * 3}px)`,
                  }}
                >
                  {/* Spine ridge accent */}
                  <div className="absolute left-1.5 top-0 bottom-0 w-[1.5px] bg-amber-500/30" />
                  
                  <span className="text-[9px] sm:text-[10px] font-bold tracking-wider uppercase font-serif pl-2 text-amber-100">
                    {book.title}
                  </span>

                  <span className="text-[8px] sm:text-[9px] text-amber-300/80 font-mono tracking-tight">
                    {book.subtitle}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* BOTTOM-CENTER / RIGHT: Four Philosophy Pillars */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
            className="lg:col-span-8 w-full"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 relative">
              {pillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <div key={pillar.id} className="relative flex items-center group">
                    {/* Vertical Divider between pillars on desktop */}
                    {idx !== 0 && (
                      <div className="hidden md:block absolute -left-3 top-2 bottom-2 w-[1px] bg-gradient-to-b from-transparent via-[#D94F16]/30 to-transparent" />
                    )}

                    <div className="flex flex-col items-center text-center w-full p-2">
                      {/* Minimal Line Art Icon without cards/boxes */}
                      <div className="w-10 h-10 flex items-center justify-center text-[#D94F16] mb-2.5 transition-transform duration-300 group-hover:scale-110">
                        <Icon className="w-5 h-5 stroke-[1.6]" />
                      </div>

                      <h4 
                        className="text-xs sm:text-sm font-bold text-[#3B302A] leading-snug whitespace-pre-line group-hover:text-[#D94F16] transition-colors"
                        style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
                      >
                        {pillar.title}
                      </h4>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

        </div>

        {/* ============================================================ */}
        {/* CLOSING STATEMENT TAGLINE: A BRIGHTER TOMORROW              */}
        {/* ============================================================ */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="pt-6 sm:pt-7 flex items-center justify-center gap-4 sm:gap-6"
        >
          <div className="w-12 sm:w-28 h-[1px] bg-[#D94F16]/30" />
          <span className="text-[11px] sm:text-xs font-extrabold tracking-[0.3em] text-[#D94F16] uppercase text-center">
            A BRIGHTER TOMORROW
          </span>
          <div className="w-12 sm:w-28 h-[1px] bg-[#D94F16]/30" />
        </motion.div>

      </div>

      {/* ============================================================ */}
      {/* LAYER 7: Subtle Horizon Floor Atmosphere                    */}
      {/* ============================================================ */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#F8DEC7]/40 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#E85A1A]/15 pointer-events-none" />
    </section>
  );
};

