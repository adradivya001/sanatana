import React, { useRef } from 'react';
import type { WhySanatanaSectionData } from '../../types/school';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

interface WhySanatanaProps {
  data?: WhySanatanaSectionData;
}

interface StageContent {
  id: string;
  stageNumber: string;
  fraction: string;
  titleTop: string;
  titleBottom: string;
  description: string;
}

const STAGES: StageContent[] = [
  {
    id: "stage-01",
    stageNumber: "01",
    fraction: "01 / 05",
    titleTop: "VALUES",
    titleBottom: "AT THE CORE",
    description: "We nurture respect, integrity, compassion and responsibility as the foundational pillar of growth.",
  },
  {
    id: "stage-02",
    stageNumber: "02",
    fraction: "02 / 05",
    titleTop: "EVERY CHILD",
    titleBottom: "MATTERS",
    description: "Every child is unique, with their own boundless curiosity, distinct potential, and creative voice.",
  },
  {
    id: "stage-03",
    stageNumber: "03",
    fraction: "03 / 05",
    titleTop: "WISDOM MEETS",
    titleBottom: "MODERN LEARNING",
    description: "Vedic heritage and Indian wisdom are thoughtfully blended with modern pedagogical excellence.",
  },
  {
    id: "stage-04",
    stageNumber: "04",
    fraction: "04 / 05",
    titleTop: "LEARNING",
    titleBottom: "BEYOND BOOKS",
    description: "Yoga, arts, culture, nature exploration and hands-on experiences bring genuine meaning to learning.",
  },
  {
    id: "stage-05",
    stageNumber: "05",
    fraction: "05 / 05",
    titleTop: "PREPARED",
    titleBottom: "FOR TOMORROW",
    description: "We cultivate confident, compassionate, independent and responsible lifelong learners ready for the world.",
  },
];

export const WhySanatana: React.FC<WhySanatanaProps> = ({ data }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // 500vh scroll container for sticky storytelling
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 75,
    damping: 24,
    restDelta: 0.001,
  });

  // Cumulative reveal for the 5 Devanagari ॐ strokes
  const stroke1 = useTransform(smoothProgress, [0, 0.18], [0.35, 1]);
  const stroke2 = useTransform(smoothProgress, [0.18, 0.38], [0, 1]);
  const stroke3 = useTransform(smoothProgress, [0.38, 0.58], [0, 1]);
  const stroke4 = useTransform(smoothProgress, [0.58, 0.78], [0, 1]);
  const stroke5 = useTransform(smoothProgress, [0.78, 0.98], [0, 1]);

  return (
    <section 
      id="why-sanatana" 
      ref={containerRef} 
      className="relative bg-[#FFFDF9] text-[#2C1D16] selection:bg-[#FBE4D2] selection:text-[#2C1D16]"
    >
      {/* ============================================================ */}
      {/* DESKTOP: 500vh Immersive Clean Sticky Canvas                */}
      {/* ============================================================ */}
      <div className="hidden lg:block relative h-[500vh]">
        
        {/* Sticky 100vh Canvas Viewport */}
        <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-between py-10 px-12 xl:px-20 pointer-events-auto select-none">
          
          {/* Subtle Warm Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-radial from-[#FEEFE4]/70 via-[#FFF9F3]/30 to-transparent rounded-full pointer-events-none z-0 blur-3xl" />

          {/* Layer 0: Giant Faint Background Watermark: EXPERIENCE */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0 overflow-hidden">
            <span 
              className="text-[13vw] font-serif font-bold uppercase tracking-wider text-[#D95D24]/[0.035] whitespace-nowrap leading-none select-none"
              style={{ fontFamily: "'Playfair Display', 'Cormorant Garamond', Georgia, serif" }}
            >
              EXPERIENCE
            </span>
          </div>

          {/* ============================================================ */}
          {/* TOP HEADER: Clean & Luxurious                                */}
          {/* ============================================================ */}
          <div className="relative z-10 w-full max-w-7xl mx-auto flex items-start justify-between">
            <div className="flex flex-col items-start">
              <span className="text-[11px] font-bold tracking-[0.25em] text-[#D95D24] uppercase font-sans mb-1.5 flex items-center gap-2">
                <span className="w-5 h-[1.5px] bg-[#D95D24]" />
                {data?.eyebrow || "MORE THAN EDUCATION"}
              </span>
              <h2 
                className="text-4xl xl:text-5xl font-bold text-[#2C1D16] tracking-tight font-serif"
                style={{ fontFamily: "'Playfair Display', 'Cormorant Garamond', Georgia, serif" }}
              >
                {data?.heading || "WHY SANĀTANA?"}
              </h2>
            </div>
          </div>

          {/* ============================================================ */}
          {/* CENTER ARENA: Stage Content (Left) & Elegant Om (Right)      */}
          {/* ============================================================ */}
          <div className="relative z-10 flex-1 w-full max-w-7xl mx-auto grid grid-cols-12 items-center gap-10 my-auto">
            
            {/* LEFT / CENTER-LEFT: Active Stage Typography (Cols 1 - 5) */}
            <div className="col-span-5 relative h-64 flex flex-col justify-center pl-2">
              {STAGES.map((stg, idx) => {
                const start = idx * 0.20;
                const end = start + 0.20;
                const isFirst = idx === 0;
                const isLast = idx === STAGES.length - 1;

                const stageOpacity = useTransform(
                  smoothProgress,
                  isFirst
                    ? [0, 0.02, 0.16, 0.22]
                    : isLast
                    ? [start - 0.04, start + 0.02, 0.98, 1]
                    : [start - 0.04, start + 0.02, end - 0.04, end + 0.02],
                  isFirst
                    ? [1, 1, 1, 0]
                    : isLast
                    ? [0, 1, 1, 1]
                    : [0, 1, 1, 0]
                );

                const stageY = useTransform(
                  smoothProgress,
                  isFirst
                    ? [0, 0.16, 0.22]
                    : isLast
                    ? [start - 0.04, start + 0.02]
                    : [start - 0.04, start + 0.02, end - 0.04, end + 0.02],
                  isFirst
                    ? [0, 0, -12]
                    : isLast
                    ? [14, 0]
                    : [14, 0, 0, -12]
                );

                return (
                  <motion.div
                    key={stg.id}
                    style={{
                      opacity: stageOpacity,
                      y: stageY,
                    }}
                    className="absolute inset-0 flex flex-col justify-center text-left pointer-events-none"
                  >
                    {/* Stage Fraction */}
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs font-mono font-bold tracking-widest text-[#D95D24]">
                        {stg.fraction}
                      </span>
                      <div className="w-8 h-[1px] bg-[#D95D24]/40" />
                    </div>

                    {/* Stage Heading */}
                    <h3 
                      className="text-3xl xl:text-4xl font-bold tracking-tight text-[#2C1D16] leading-[1.12] mb-3.5 font-serif"
                      style={{ fontFamily: "'Playfair Display', 'Cormorant Garamond', Georgia, serif" }}
                    >
                      <span className="block text-[#D95D24]">{stg.titleTop}</span>
                      <span className="block text-[#2C1D16] mt-0.5">{stg.titleBottom}</span>
                    </h3>

                    {/* Stage Description */}
                    <p className="text-sm xl:text-[15px] text-[#614D45] max-w-sm leading-relaxed font-sans font-normal">
                      “{stg.description}”
                    </p>
                  </motion.div>
                );
              })}
            </div>

            {/* CENTER / RIGHT: Elegant, Clean & Soft Progressive Om Graphic (Cols 6 - 11) */}
            <div className="col-span-6 relative flex items-center justify-center">
              <div className="relative w-[360px] h-[360px] xl:w-[420px] xl:h-[420px] flex items-center justify-center">
                
                <svg
                  viewBox="0 0 500 500"
                  fill="none"
                  className="w-full h-full overflow-visible"
                >
                  <defs>
                    <linearGradient id="cleanOmGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#E05B1E" />
                      <stop offset="50%" stopColor="#F48B47" />
                      <stop offset="100%" stopColor="#D24B10" />
                    </linearGradient>
                  </defs>

                  {/* LAYER 1: Very Faint Translucent Ghost Track (Clean & Subtle) */}
                  <g stroke="#D95D24" strokeWidth="8" strokeOpacity="0.12" strokeLinecap="round" strokeLinejoin="round" fill="none">
                    <path d="M 140 230 C 130 150, 240 120, 290 180 C 315 210, 305 245, 270 265" />
                    <path d="M 270 265 C 330 280, 350 350, 300 400 C 240 450, 140 410, 130 340 C 125 295, 175 275, 200 300 C 215 318, 205 345, 180 345" />
                    <path d="M 270 265 C 330 255, 380 295, 410 345 C 430 380, 440 425, 420 455" />
                    <path d="M 280 120 C 340 120, 400 145, 440 100" />
                    <circle cx="365" cy="65" r="9" fill="#D95D24" fillOpacity="0.12" strokeWidth="0" />
                  </g>

                  {/* LAYER 2: Progressive Active Orange Drawing */}
                  <g stroke="url(#cleanOmGrad)" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" fill="none">
                    {/* Stroke 1 */}
                    <motion.path
                      d="M 140 230 C 130 150, 240 120, 290 180 C 315 210, 305 245, 270 265"
                      style={{ pathLength: stroke1 }}
                    />
                    
                    {/* Stroke 2 */}
                    <motion.path
                      d="M 270 265 C 330 280, 350 350, 300 400 C 240 450, 140 410, 130 340 C 125 295, 175 275, 200 300 C 215 318, 205 345, 180 345"
                      style={{ pathLength: stroke2 }}
                    />

                    {/* Stroke 3 */}
                    <motion.path
                      d="M 270 265 C 330 255, 380 295, 410 345 C 430 380, 440 425, 420 455"
                      style={{ pathLength: stroke3 }}
                    />

                    {/* Stroke 4 */}
                    <motion.path
                      d="M 280 120 C 340 120, 400 145, 440 100"
                      style={{ pathLength: stroke4 }}
                    />

                    {/* Stroke 5 (Bindu Dot) */}
                    <motion.circle
                      cx="365"
                      cy="65"
                      r="9"
                      fill="url(#cleanOmGrad)"
                      strokeWidth="0"
                      style={{
                        scale: stroke5,
                        opacity: stroke5,
                        transformOrigin: "365px 65px"
                      }}
                    />
                  </g>
                </svg>

                {/* Soft ambient finale glow */}
                <motion.div
                  style={{
                    opacity: useTransform(smoothProgress, [0.80, 1.0], [0, 0.3]),
                    scale: useTransform(smoothProgress, [0.80, 1.0], [0.85, 1.1]),
                  }}
                  className="absolute inset-0 rounded-full bg-[#E05B1E]/15 blur-3xl pointer-events-none"
                />
              </div>
            </div>

            {/* RIGHT SIDE: Vertical Stage Indicator (Col 12) */}
            <div className="col-span-1 relative flex flex-col items-end pr-2 justify-center space-y-5">
              <div className="absolute right-[5px] top-2 bottom-2 w-[1px] bg-[#D95D24]/15 z-0" />

              {STAGES.map((stg, i) => {
                const isActive = useTransform(
                  smoothProgress,
                  [i * 0.2 - 0.05, i * 0.2 + 0.02, (i + 1) * 0.2 - 0.02, (i + 1) * 0.2 + 0.05],
                  [0.35, 1, 1, 0.35]
                );

                const dotColor = useTransform(
                  smoothProgress,
                  [i * 0.2 - 0.05, i * 0.2 + 0.02, (i + 1) * 0.2 - 0.02, (i + 1) * 0.2 + 0.05],
                  ["#FCE3D2", "#D95D24", "#D95D24", "#FCE3D2"]
                );

                const dotScale = useTransform(
                  smoothProgress,
                  [i * 0.2 - 0.05, i * 0.2 + 0.02, (i + 1) * 0.2 - 0.02, (i + 1) * 0.2 + 0.05],
                  [0.85, 1.25, 1.25, 0.85]
                );

                return (
                  <motion.div
                    key={stg.stageNumber}
                    className="relative z-10 flex items-center gap-2.5"
                    style={{ opacity: isActive }}
                  >
                    <span className="text-[11px] font-mono font-bold tracking-wider text-[#2C1D16]">
                      {stg.stageNumber}
                    </span>
                    <motion.div
                      style={{
                        backgroundColor: dotColor,
                        scale: dotScale,
                      }}
                      className="w-1.5 h-1.5 rounded-full"
                    />
                  </motion.div>
                );
              })}
            </div>

          </div>

          {/* ============================================================ */}
          {/* BOTTOM REGION: Clean, Balanced Three-Part Footer             */}
          {/* ============================================================ */}
          <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-12 items-end pb-2">
            
            {/* BOTTOM LEFT: Scroll Prompt */}
            <div className="col-span-3 flex items-center gap-2.5 text-left">
              <div className="w-4 h-7 rounded-full border-[1.2px] border-[#2C1D16]/60 flex items-start justify-center p-0.5">
                <motion.div
                  animate={{ y: [0, 6, 0] }}
                  transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                  className="w-1 h-1.5 rounded-full bg-[#D95D24]"
                />
              </div>
              <span className="text-[9px] font-bold tracking-[0.2em] text-[#614D45] uppercase leading-tight font-sans">
                SCROLL<br />TO EXPLORE
              </span>
            </div>

            {/* BOTTOM CENTER: Sanātana Path Statement */}
            <div className="col-span-6 text-center flex flex-col items-center">
              <span className="text-[10px] font-bold tracking-[0.25em] text-[#D95D24] uppercase font-sans mb-0.5">
                THE SANĀTANA PATH
              </span>
              <h4 
                className="text-lg xl:text-xl font-bold tracking-tight text-[#2C1D16] leading-tight font-serif"
                style={{ fontFamily: "'Playfair Display', 'Cormorant Garamond', Georgia, serif" }}
              >
                <span className="text-[#D95D24]">A JOURNEY </span>
                <span>THAT SHAPES TOMORROW</span>
              </h4>
              <p className="text-xs text-[#614D45] font-serif italic mt-0.5">
                A childhood shaped by knowledge, character, curiosity and culture.
              </p>
            </div>

            {/* BOTTOM RIGHT: Rooted In Values */}
            <div className="col-span-3 flex flex-col items-end text-right">
              <span className="text-[9px] xl:text-[10px] font-extrabold tracking-[0.22em] text-[#D95D24] uppercase font-sans">
                ROOTED IN VALUES.<br />READY FOR THE FUTURE.
              </span>
              <div className="w-12 h-[1px] bg-[#D95D24] mt-1.5" />
            </div>

          </div>

        </div>
      </div>

      {/* ============================================================ */}
      {/* MOBILE EXPERIENCE: Clean Vertical Storytelling              */}
      {/* ============================================================ */}
      <div className="lg:hidden py-14 px-6 relative overflow-hidden flex flex-col">
        
        {/* Mobile Header */}
        <div className="relative z-10 mb-8">
          <span className="text-[10px] font-bold tracking-[0.22em] text-[#D95D24] uppercase font-sans block mb-1">
            {data?.eyebrow || "MORE THAN EDUCATION"}
          </span>
          <h2 
            className="text-3xl font-bold text-[#2C1D16] tracking-tight font-serif"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            {data?.heading || "WHY SANĀTANA?"}
          </h2>
        </div>

        {/* Central Om Graphic */}
        <div className="relative z-10 my-4 flex justify-center items-center">
          <div className="w-48 h-48 relative">
            <svg viewBox="0 0 500 500" fill="none" className="w-full h-full">
              <defs>
                <linearGradient id="cleanOmMobileGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#E05B1E" />
                  <stop offset="100%" stopColor="#F48B47" />
                </linearGradient>
              </defs>
              <g stroke="url(#cleanOmMobileGrad)" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" fill="none">
                <path d="M 140 230 C 130 150, 240 120, 290 180 C 315 210, 305 245, 270 265" />
                <path d="M 270 265 C 330 280, 350 350, 300 400 C 240 450, 140 410, 130 340 C 125 295, 175 275, 200 300 C 215 318, 205 345, 180 345" />
                <path d="M 270 265 C 330 255, 380 295, 410 345 C 430 380, 440 425, 420 455" />
                <path d="M 280 120 C 340 120, 400 145, 440 100" />
                <circle cx="365" cy="65" r="9" fill="url(#cleanOmMobileGrad)" strokeWidth="0" />
              </g>
            </svg>
          </div>
        </div>

        {/* 5 Stages Sequence */}
        <div className="relative z-10 space-y-6 pl-4 border-l-[1.5px] border-[#D95D24]/25 mt-4">
          {STAGES.map((stg) => (
            <div key={stg.id} className="relative pl-3">
              <div className="absolute -left-[23px] top-1 w-3.5 h-3.5 rounded-full bg-[#FFFDF9] border-2 border-[#D95D24]" />
              
              <div className="text-xs font-mono font-bold text-[#D95D24] tracking-wider mb-0.5">
                {stg.fraction}
              </div>

              <h3 
                className="text-xl font-bold text-[#2C1D16] leading-tight mb-1 font-serif"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                <span className="text-[#D95D24]">{stg.titleTop} </span>
                <span>{stg.titleBottom}</span>
              </h3>

              <p className="text-xs text-[#614D45] leading-relaxed font-sans">
                {stg.description}
              </p>
            </div>
          ))}
        </div>

        {/* Mobile Conclusion */}
        <div className="relative z-10 pt-10 text-center border-t border-[#D95D24]/15 mt-10">
          <span className="text-[10px] font-bold tracking-[0.25em] text-[#D95D24] uppercase font-sans block mb-1">
            THE SANĀTANA PATH
          </span>
          <h4 
            className="text-lg font-bold text-[#2C1D16] mb-1 font-serif"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            <span className="text-[#D95D24]">A JOURNEY </span>
            <span>THAT SHAPES TOMORROW</span>
          </h4>
          <p className="text-xs text-[#614D45] italic font-serif max-w-xs mx-auto mb-3">
            A childhood shaped by knowledge, character, curiosity and culture.
          </p>
          <div className="text-[9px] font-extrabold tracking-[0.2em] text-[#D95D24] uppercase">
            ROOTED IN VALUES. READY FOR THE FUTURE.
          </div>
        </div>

      </div>
    </section>
  );
};




