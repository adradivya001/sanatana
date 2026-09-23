import React, { useState } from 'react';
import type { WhySanatanaSectionData } from '../../types/school';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, UserCheck, Leaf, Sun } from 'lucide-react';

interface WhySanatanaProps {
  data?: WhySanatanaSectionData;
}

// Custom minimal line art Lotus icon (01 Values at the Core)
const LotusIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg 
    viewBox="0 0 24 24" 
    className={`${className} stroke-current fill-none stroke-[1.6]`} 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M12 21c-4-4-7-8-7-12 0-3 3-5 7-5s7 2 7 5c0 4-3 8-7 12z" />
    <path d="M12 4c-2 3-3 6-3 9 0 2 1 4 3 6 2-2 3-4 3-6 0-3-1-6-3-9z" />
    <path d="M5.5 10.5C3.5 13 3 16 4 18c2.5 1 5-.5 6.5-2.5" />
    <path d="M18.5 10.5c2 2.5 2.5 5.5 1.5 7.5-2.5 1-5-.5-6.5-2.5" />
  </svg>
);

const getReasonIcon = (index: number) => {
  switch (index) {
    case 0:
      return LotusIcon;
    case 1:
      return UserCheck;
    case 2:
      return BookOpen;
    case 3:
      return Leaf;
    case 4:
    default:
      return Sun;
  }
};

export const WhySanatana: React.FC<WhySanatanaProps> = ({ data }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  if (!data) return null;

  const r1 = data.reasons[0];
  const r2 = data.reasons[1];
  const r3 = data.reasons[2];
  const r4 = data.reasons[3];
  const r5 = data.reasons[4];

  // Helper renderer for each reason node
  const renderReasonItem = (reason: typeof data.reasons[0], index: number, alignment: 'left' | 'right' | 'center' = 'left') => {
    const isHovered = hoveredIndex === index;
    const IconComponent = getReasonIcon(index);

    const alignClass = 
      alignment === 'right' 
        ? 'sm:items-end sm:text-right' 
        : alignment === 'center' 
          ? 'items-center text-center' 
          : 'sm:items-start sm:text-left';

    return (
      <motion.div
        onMouseEnter={() => setHoveredIndex(index)}
        onMouseLeave={() => setHoveredIndex(null)}
        onClick={() => setHoveredIndex(isHovered ? null : index)}
        whileHover={{ y: -3 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className={`group relative flex flex-col ${alignClass} p-5 sm:p-6 rounded-2xl transition-all duration-300 cursor-pointer ${
          isHovered 
            ? 'bg-gradient-to-b from-white/90 to-[#FFF7EE]/90 shadow-[0_12px_30px_rgba(217,75,23,0.08)] border border-orange-200/60' 
            : 'bg-transparent hover:bg-white/40 border border-transparent'
        }`}
      >
        {/* Number & Line Art Icon Bar */}
        <div className={`flex items-center gap-3.5 mb-2.5 ${alignment === 'right' ? 'sm:flex-row-reverse' : ''}`}>
          <span className="text-xs sm:text-sm font-black tracking-widest text-[#D94B17] font-mono group-hover:scale-105 transition-transform">
            {reason.number}
          </span>
          <div className="w-5 h-[1px] bg-orange-300/60" />
          <div className="text-[#D94B17] transition-transform duration-300 group-hover:scale-115">
            <IconComponent className="w-5 h-5" />
          </div>
        </div>

        {/* Title */}
        <h3 
          className={`text-base sm:text-lg font-bold tracking-tight mb-2 transition-colors duration-200 ${
            isHovered ? 'text-[#D94B17]' : 'text-[#2C211B]'
          }`}
          style={{ fontFamily: "'Cormorant Garamond', 'Playfair Display', Georgia, serif" }}
        >
          {reason.title}
        </h3>

        {/* Expanding Accent Underline on Hover */}
        <motion.div 
          initial={false}
          animate={{ 
            width: isHovered ? '48px' : '20px',
            backgroundColor: isHovered ? '#D94B17' : '#FDBA74'
          }}
          transition={{ duration: 0.3 }}
          className="h-[1.5px] mb-2.5"
        />

        {/* Description */}
        <p className="text-xs sm:text-sm text-[#4A3D36] leading-[1.65] font-normal max-w-xs transition-opacity">
          {reason.description}
        </p>
      </motion.div>
    );
  };

  return (
    <section 
      id="why-sanatana" 
      className="relative py-20 sm:py-24 lg:py-28 bg-[#FFF9F0] text-[#3E2A24] overflow-hidden border-t border-orange-200/30"
    >
      {/* ============================================================ */}
      {/* BACKGROUND DECORATIVE ELEMENTS: Subtle Lotus & Mandala Lines */}
      {/* ============================================================ */}
      
      {/* Soft warm radial glow at center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#FFE8D1]/40 via-[#FFF1E0]/20 to-transparent rounded-full blur-3xl pointer-events-none" />

      {/* Faint corner botanical leaf & mandala accents */}
      <div className="absolute top-0 right-0 w-80 h-80 opacity-[0.06] text-[#D94B17] pointer-events-none">
        <svg viewBox="0 0 200 200" className="w-full h-full fill-none stroke-current" strokeWidth="0.8">
          <circle cx="200" cy="0" r="180" strokeDasharray="3 3" />
          <circle cx="200" cy="0" r="140" />
          <circle cx="200" cy="0" r="100" />
          <circle cx="200" cy="0" r="60" strokeDasharray="4 4" />
        </svg>
      </div>

      <div className="absolute bottom-0 left-0 w-72 h-72 opacity-[0.06] text-[#D94B17] pointer-events-none">
        <svg viewBox="0 0 200 200" className="w-full h-full fill-none stroke-current" strokeWidth="0.8">
          <circle cx="0" cy="200" r="170" strokeDasharray="3 3" />
          <circle cx="0" cy="200" r="130" />
          <circle cx="0" cy="200" r="90" />
          <circle cx="0" cy="200" r="50" strokeDasharray="4 4" />
        </svg>
      </div>

      {/* ============================================================ */}
      {/* CONTENT CONTAINER                                            */}
      {/* ============================================================ */}
      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 lg:px-12 w-full">
        
        {/* ============================================================ */}
        {/* 1. SECTION HEADER: Eyebrow + Heading + Supporting Statement */}
        {/* ============================================================ */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
          
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex items-center justify-center gap-3 mb-3.5"
          >
            <div className="w-8 sm:w-12 h-[1px] bg-[#D94B17]/60" />
            <span className="text-[11px] sm:text-xs font-bold tracking-[0.24em] text-[#D94B17] uppercase font-sans">
              {data.eyebrow}
            </span>
            <div className="w-8 sm:w-12 h-[1px] bg-[#D94B17]/60" />
          </motion.div>

          {/* Main Heading: WHY SANĀTANA? */}
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="text-4xl sm:text-5xl lg:text-[60px] font-bold text-[#2C211B] tracking-tight leading-none mb-4"
            style={{ fontFamily: "'Playfair Display', 'Cormorant Garamond', Georgia, serif" }}
          >
            {data.heading}
          </motion.h2>

          {/* Statement: Where Strong Roots Meet a Modern Education */}
          <motion.h3
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-xl sm:text-2xl lg:text-[28px] font-medium text-[#D94B17] italic font-serif leading-snug mb-5"
          >
            {data.mainStatement}
          </motion.h3>

          {/* Supporting Text */}
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="text-xs sm:text-sm md:text-base text-[#4A3D36] leading-relaxed max-w-2xl mx-auto font-sans"
          >
            {data.supportingText}
          </motion.p>
        </div>

        {/* ============================================================ */}
        {/* 2. FIVE CORE REASONS SURROUNDING SUBTLE CENTRAL OM          */}
        {/* ============================================================ */}
        <div className="relative my-8 sm:my-12">
          
          {/* Central Sacred Om Watermark (Subtle & Elegant, 120px-150px) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.35, ease: "easeOut" }}
            className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 items-center justify-center pointer-events-none select-none z-0"
          >
            <span 
              className="text-[130px] lg:text-[150px] font-serif font-black leading-none text-[#F6C8A5] opacity-40 select-none"
              style={{
                textShadow: '0 0 35px rgba(246, 200, 165, 0.5)',
              }}
            >
              ॐ
            </span>
          </motion.div>

          {/* Desktop/Tablet Editorial Layout: 
                Top Row: 01 (Left) & 02 (Right)
                Center: 03 (Centered under Om)
                Bottom Row: 04 (Left) & 05 (Right)
          */}
          <div className="relative z-10 flex flex-col gap-6 sm:gap-8">
            
            {/* Top Row: 01 & 02 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-16">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                {renderReasonItem(r1, 0, 'left')}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.35 }}
              >
                {renderReasonItem(r2, 1, 'right')}
              </motion.div>
            </div>

            {/* Middle Row: 03 Wisdom Meets Modern Learning (Center Keystone) */}
            <div className="flex justify-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="w-full md:max-w-md"
              >
                {renderReasonItem(r3, 2, 'center')}
              </motion.div>
            </div>

            {/* Bottom Row: 04 & 05 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-16">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.45 }}
              >
                {renderReasonItem(r4, 3, 'left')}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                {renderReasonItem(r5, 4, 'right')}
              </motion.div>
            </div>

          </div>

        </div>

        {/* ============================================================ */}
        {/* 3. BOTTOM STATEMENT                                          */}
        {/* ============================================================ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="mt-16 sm:mt-20 pt-8 sm:pt-10 border-t border-orange-200/50 text-center"
        >
          <div className="flex items-center justify-center gap-4 sm:gap-6 mb-3">
            <div className="w-12 sm:w-24 h-[1px] bg-[#D94B17]/40" />
            <h4 className="text-xs sm:text-sm md:text-base font-extrabold tracking-[0.24em] text-[#D94B17] uppercase font-sans">
              {data.bottomStatement.main}
            </h4>
            <div className="w-12 sm:w-24 h-[1px] bg-[#D94B17]/40" />
          </div>

          <p className="text-xs sm:text-sm text-[#5C453C] italic font-serif tracking-wide">
            "{data.bottomStatement.sub}"
          </p>
        </motion.div>

      </div>
    </section>
  );
};
