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
    description: "We nurture respect, integrity, compassion and responsibility.",
  },
  {
    id: "stage-02",
    stageNumber: "02",
    fraction: "02 / 05",
    titleTop: "EVERY CHILD",
    titleBottom: "MATTERS",
    description: "Every child is unique, with their own interests, abilities and curiosity.",
  },
  {
    id: "stage-03",
    stageNumber: "03",
    fraction: "03 / 05",
    titleTop: "WISDOM MEETS",
    titleBottom: "MODERN LEARNING",
    description: "Vedic heritage and Indian knowledge are thoughtfully connected with contemporary teaching methods.",
  },
  {
    id: "stage-04",
    stageNumber: "04",
    fraction: "04 / 05",
    titleTop: "LEARNING",
    titleBottom: "BEYOND BOOKS",
    description: "Yoga, arts, culture, nature and real-world exploration make learning meaningful.",
  },
  {
    id: "stage-05",
    stageNumber: "05",
    fraction: "05 / 05",
    titleTop: "PREPARED",
    titleBottom: "FOR TOMORROW",
    description: "We help children become confident, curious, independent and responsible lifelong learners.",
  },
];

export const WhySanatana: React.FC<WhySanatanaProps> = ({ data }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll tracking for the 500vh sticky scroll canvas
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 85,
    damping: 28,
    restDelta: 0.001,
  });

  // Cumulative Progressive Om stroke reveals mapped across 5 stages:
  // Stroke 1 (Top '3' Arch): Starts 0, completes by 0.20
  const stroke1 = useTransform(smoothProgress, [0, 0.20], [0.15, 1]);
  const stroke1Opacity = useTransform(smoothProgress, [0, 0.05, 0.20], [0.7, 0.9, 1]);

  // Stroke 2 (Bottom '3' Loop & Tail): Starts 0.20, completes by 0.40
  const stroke2 = useTransform(smoothProgress, [0.18, 0.40], [0, 1]);
  const stroke2Opacity = useTransform(smoothProgress, [0.18, 0.22, 0.40], [0, 0.9, 1]);

  // Stroke 3 (Center Rightward Tail): Starts 0.40, completes by 0.60
  const stroke3 = useTransform(smoothProgress, [0.38, 0.60], [0, 1]);
  const stroke3Opacity = useTransform(smoothProgress, [0.38, 0.42, 0.60], [0, 0.9, 1]);

  // Stroke 4 (Upper Crescent / Chandrabindu base): Starts 0.60, completes by 0.80
  const stroke4 = useTransform(smoothProgress, [0.58, 0.80], [0, 1]);
  const stroke4Opacity = useTransform(smoothProgress, [0.58, 0.62, 0.80], [0, 0.9, 1]);

  // Stroke 5 (Upper Bindu dot / diamond): Starts 0.80, completes by 1.00
  const stroke5 = useTransform(smoothProgress, [0.78, 1.00], [0, 1]);
  const stroke5Opacity = useTransform(smoothProgress, [0.78, 0.82, 1.00], [0, 0.9, 1]);

  return (
    <section 
      id="why-sanatana" 
      ref={containerRef} 
      className="relative bg-[#FFF9F0] text-[#3B2A24] selection:bg-[#F9DDC4] selection:text-[#3B2A24]"
    >
      {/* ============================================================ */}
      {/* DESKTOP / TABLET: 500vh Cinematic Sticky Canvas Theater     */}
      {/* ============================================================ */}
      <div className="hidden lg:block relative h-[500vh]">
        
        {/* Sticky 100vh Canvas Viewport */}
        <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-between py-8 px-12 xl:px-16 pointer-events-auto select-none">
          
          {/* Layer 0: Giant low-opacity background editorial word: EXPERIENCE */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0 overflow-hidden">
            <span 
              className="text-[12vw] font-serif font-bold uppercase text-[#E85A1A] opacity-[0.04] tracking-wider whitespace-nowrap leading-none select-none"
              style={{ fontFamily: "'Playfair Display', 'Cormorant Garamond', Georgia, serif" }}
            >
              EXPERIENCE
            </span>
          </div>

          {/* Layer 1: Subtle Botanical / Ornamental Background Accents */}
          <div className="absolute inset-0 pointer-events-none z-[1]">
            {/* Top Left Subtle Floral Line */}
            <svg className="absolute top-6 left-6 w-24 h-24 opacity-15" viewBox="0 0 100 100" fill="none" stroke="#E85A1A">
              <path d="M10 50 Q 50 10 90 50 Q 50 90 10 50" strokeWidth="0.8" />
              <circle cx="50" cy="50" r="1.5" fill="#E85A1A" />
            </svg>
            {/* Bottom Right Subtle Arc */}
            <svg className="absolute bottom-10 right-10 w-28 h-28 opacity-15" viewBox="0 0 100 100" fill="none" stroke="#E85A1A">
              <circle cx="50" cy="50" r="35" strokeWidth="0.8" strokeDasharray="3 4" />
            </svg>
          </div>

          {/* ============================================================ */}
          {/* TOP LEFT: Section Header                                     */}
          {/* ============================================================ */}
          <div className="relative z-10 w-full max-w-7xl mx-auto flex items-start justify-between">
            <div className="flex flex-col items-start">
              <h2 
                className="text-4xl xl:text-[46px] font-bold text-[#3B2A24] tracking-tight leading-tight"
                style={{ fontFamily: "'Playfair Display', 'Cormorant Garamond', Georgia, serif" }}
              >
                {data?.heading || "WHY SANĀTANA?"}
              </h2>
              {/* Thin orange horizontal rule */}
              <div className="w-12 h-[1.5px] bg-[#E85A1A] my-2" />
              <span className="text-[10px] xl:text-[11px] font-bold tracking-[0.25em] text-[#E85A1A] uppercase font-sans">
                {data?.eyebrow || "MORE THAN EDUCATION"}
              </span>
            </div>
          </div>

          {/* ============================================================ */}
          {/* CENTER ARENA: Floating Stage Content & Soft Progressive Om  */}
          {/* ============================================================ */}
          <div className="relative z-10 flex-1 w-full max-w-7xl mx-auto grid grid-cols-12 items-center gap-6 my-auto">
            
            {/* LEFT / CENTER-LEFT: Active Stage Typography (Cols 1 - 5) */}
            <div className="col-span-5 relative h-64 flex flex-col justify-center pl-2">
              {STAGES.map((stg, idx) => {
                const start = idx * 0.20;
                const end = start + 0.20;
                
                const isFirst = idx === 0;
                const isLast = idx === STAGES.length - 1;

                // Smooth crossfade transitions between stages
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
                    ? [0, 0, -16]
                    : isLast
                    ? [18, 0]
                    : [18, 0, 0, -16]
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
                    {/* Active Stage Indicator */}
                    <div className="text-xs font-mono font-bold tracking-widest text-[#E85A1A] mb-3">
                      {stg.fraction}
                    </div>

                    {/* Stage Heading */}
                    <h3 
                      className="text-4xl xl:text-[44px] font-bold tracking-tight text-[#3B2A24] leading-[1.1] mb-3"
                      style={{ fontFamily: "'Playfair Display', 'Cormorant Garamond', Georgia, serif" }}
                    >
                      <span className="block">{stg.titleTop}</span>
                      <span className="block text-[#E85A1A]">{stg.titleBottom}</span>
                    </h3>

                    {/* Stage Description Floating Directly On Canvas */}
                    <p className="text-sm xl:text-base text-[#5C453C] max-w-sm leading-relaxed font-sans font-normal">
                      “{stg.description}”
                    </p>
                  </motion.div>
                );
              })}
            </div>

            {/* CENTER / RIGHT-CENTER: Elegant Soft Progressive Om (Cols 6 - 11) */}
            <div className="col-span-6 relative flex items-center justify-center">
              <div className="relative w-[380px] h-[380px] xl:w-[440px] xl:h-[440px] flex items-center justify-center">
                
                {/* SVG ॐ with Layer 1 (Faint Ghost Outline) & Layer 2 (Active Orange Reveal) */}
                <svg
                  viewBox="0 0 500 500"
                  fill="none"
                  className="w-full h-full overflow-visible"
                >
                  <defs>
                    <linearGradient id="softOmOrange" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#E85A1A" />
                      <stop offset="60%" stopColor="#F57C00" />
                      <stop offset="100%" stopColor="#D94B17" />
                    </linearGradient>

                    {/* Soft filled ghost gradient */}
                    <linearGradient id="ghostGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#E85A1A" stopOpacity="0.08" />
                      <stop offset="100%" stopColor="#F9DDC4" stopOpacity="0.14" />
                    </linearGradient>
                  </defs>

                  {/* ============================================================ */}
                  {/* LAYER 1: FAINT TRANSLUCENT GHOST OM OUTLINE (0.15 - 0.25 opacity) */}
                  {/* ============================================================ */}
                  <g stroke="#E85A1A" strokeWidth="8" strokeOpacity="0.18" strokeLinecap="round" strokeLinejoin="round" fill="none">
                    {/* Segment 1: Upper '3' Arch */}
                    <path d="M 140 230 C 130 150, 240 120, 290 180 C 315 210, 305 245, 270 265" />
                    {/* Segment 2: Lower '3' Body & Graceful Bottom Curl */}
                    <path d="M 270 265 C 330 280, 350 350, 300 400 C 240 450, 140 410, 130 340 C 125 295, 175 275, 200 300 C 215 318, 205 345, 180 345" />
                    {/* Segment 3: Central Rightward Sweeping Wing */}
                    <path d="M 270 265 C 330 255, 380 295, 410 345 C 430 380, 440 425, 420 455" />
                    {/* Segment 4: Upper Crescent Chandrabindu Arc */}
                    <path d="M 280 120 C 340 120, 400 145, 440 100" />
                    {/* Segment 5: Upper Bindu Dot / Diamond */}
                    <path d="M 365 45 L 380 65 L 365 85 L 350 65 Z" fill="#E85A1A" fillOpacity="0.18" strokeWidth="0" />
                  </g>

                  {/* ============================================================ */}
                  {/* LAYER 2: ACTIVE PROGRESSIVE ORANGE STROKE REVEAL              */}
                  {/* ============================================================ */}
                  <g stroke="url(#softOmOrange)" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" fill="none">
                    {/* Stroke 1: Stage 01 Reveal */}
                    <motion.path
                      d="M 140 230 C 130 150, 240 120, 290 180 C 315 210, 305 245, 270 265"
                      style={{ pathLength: stroke1, opacity: stroke1Opacity }}
                    />
                    
                    {/* Stroke 2: Stage 02 Reveal */}
                    <motion.path
                      d="M 270 265 C 330 280, 350 350, 300 400 C 240 450, 140 410, 130 340 C 125 295, 175 275, 200 300 C 215 318, 205 345, 180 345"
                      style={{ pathLength: stroke2, opacity: stroke2Opacity }}
                    />

                    {/* Stroke 3: Stage 03 Reveal */}
                    <motion.path
                      d="M 270 265 C 330 255, 380 295, 410 345 C 430 380, 440 425, 420 455"
                      style={{ pathLength: stroke3, opacity: stroke3Opacity }}
                    />

                    {/* Stroke 4: Stage 04 Reveal */}
                    <motion.path
                      d="M 280 120 C 340 120, 400 145, 440 100"
                      style={{ pathLength: stroke4, opacity: stroke4Opacity }}
                    />

                    {/* Stroke 5: Stage 05 Reveal */}
                    <motion.path
                      d="M 365 45 L 380 65 L 365 85 L 350 65 Z"
                      strokeWidth="0"
                      fill="url(#softOmOrange)"
                      style={{
                        scale: stroke5,
                        opacity: stroke5Opacity,
                        transformOrigin: "365px 65px"
                      }}
                    />
                  </g>
                </svg>

                {/* Gentle Ambient Warm Glow at Final Stage */}
                <motion.div
                  style={{
                    opacity: useTransform(smoothProgress, [0.80, 1.0], [0, 0.35]),
                    scale: useTransform(smoothProgress, [0.80, 1.0], [0.85, 1.05]),
                  }}
                  className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#E85A1A]/15 via-[#F9DDC4]/25 to-transparent blur-2xl pointer-events-none"
                />
              </div>
            </div>

            {/* RIGHT SIDE: Vertical Progress Indicator (Col 12) */}
            <div className="col-span-1 relative flex flex-col items-end pr-2 justify-center space-y-5">
              {/* Vertical subtle background track */}
              <div className="absolute right-[5px] top-2 bottom-2 w-[1px] bg-[#E85A1A]/20 z-0" />

              {STAGES.map((stg, i) => {
                const isActive = useTransform(
                  smoothProgress,
                  [i * 0.2 - 0.05, i * 0.2 + 0.02, (i + 1) * 0.2 - 0.02, (i + 1) * 0.2 + 0.05],
                  [0.3, 1, 1, 0.3]
                );

                const dotColor = useTransform(
                  smoothProgress,
                  [i * 0.2 - 0.05, i * 0.2 + 0.02, (i + 1) * 0.2 - 0.02, (i + 1) * 0.2 + 0.05],
                  ["#F9DDC4", "#E85A1A", "#E85A1A", "#F9DDC4"]
                );

                const dotScale = useTransform(
                  smoothProgress,
                  [i * 0.2 - 0.05, i * 0.2 + 0.02, (i + 1) * 0.2 - 0.02, (i + 1) * 0.2 + 0.05],
                  [0.85, 1.25, 1.25, 0.85]
                );

                return (
                  <motion.div
                    key={stg.stageNumber}
                    className="relative z-10 flex items-center gap-2 group cursor-pointer"
                    style={{ opacity: isActive }}
                  >
                    <span className="text-[11px] font-mono font-bold tracking-wider text-[#3B2A24]">
                      {stg.stageNumber}
                    </span>
                    <motion.div
                      style={{
                        backgroundColor: dotColor,
                        scale: dotScale,
                      }}
                      className="w-1.5 h-1.5 rounded-full shadow-xs"
                    />
                  </motion.div>
                );
              })}
            </div>

          </div>

          {/* ============================================================ */}
          {/* BOTTOM REGION: Left Prompt, Center Statement, Right Anchor   */}
          {/* ============================================================ */}
          <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-12 items-end pb-2">
            
            {/* BOTTOM LEFT: Minimal Scroll Prompt */}
            <div className="col-span-3 flex items-center gap-2.5 text-left">
              <div className="w-4 h-7 rounded-full border-[1.2px] border-[#E85A1A]/40 flex items-start justify-center p-0.5">
                <motion.div
                  animate={{ y: [0, 6, 0] }}
                  transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                  className="w-1 h-1.5 rounded-full bg-[#E85A1A]"
                />
              </div>
              <div className="text-[9px] font-bold tracking-[0.2em] text-[#7A3E2D] uppercase leading-tight font-sans">
                SCROLL<br />TO EXPLORE
              </div>
            </div>

            {/* BOTTOM CENTER: The Sanātana Path Editorial Climax */}
            <div className="col-span-6 text-center flex flex-col items-center">
              <span className="text-[10px] font-bold tracking-[0.25em] text-[#E85A1A] uppercase font-sans mb-0.5">
                THE SANĀTANA PATH
              </span>
              <h4 
                className="text-lg xl:text-xl font-bold tracking-tight text-[#3B2A24] leading-tight"
                style={{ fontFamily: "'Playfair Display', 'Cormorant Garamond', Georgia, serif" }}
              >
                <span className="text-[#E85A1A]">A JOURNEY </span>
                <span>THAT SHAPES TOMORROW</span>
              </h4>
              <p className="text-[11px] xl:text-xs text-[#5C453C] font-serif italic mt-0.5 max-w-md">
                A childhood shaped by knowledge, character, curiosity and culture.
              </p>
            </div>

            {/* BOTTOM RIGHT: Rooted In Values Statement */}
            <div className="col-span-3 flex flex-col items-end text-right">
              <span className="text-[9px] xl:text-[10px] font-extrabold tracking-[0.22em] text-[#E85A1A] uppercase font-sans">
                ROOTED IN VALUES.<br />READY FOR THE FUTURE.
              </span>
              <div className="w-14 h-[1.2px] bg-[#E85A1A] mt-1.5" />
            </div>

          </div>

        </div>
      </div>

      {/* ============================================================ */}
      {/* MOBILE EXPERIENCE: Progressive Cumulative Om Scroll Flow     */}
      {/* ============================================================ */}
      <div className="lg:hidden py-14 px-6 relative overflow-hidden flex flex-col">
        
        {/* Giant Watermark Background */}
        <div className="absolute top-10 right-0 pointer-events-none select-none opacity-10 overflow-hidden">
          <span 
            className="text-[24vw] font-serif font-bold uppercase text-[#F9DDC4]"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            EXPERIENCE
          </span>
        </div>

        {/* Mobile Header */}
        <div className="relative z-10 mb-6">
          <h2 
            className="text-3xl font-bold text-[#3B2A24] tracking-tight mb-1.5"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            {data?.heading || "WHY SANĀTANA?"}
          </h2>
          <div className="w-10 h-[1.5px] bg-[#E85A1A] mb-1.5" />
          <span className="text-[10px] font-bold tracking-[0.22em] text-[#E85A1A] uppercase font-sans block">
            {data?.eyebrow || "MORE THAN EDUCATION"}
          </span>
        </div>

        {/* Central Responsive Om Graphic */}
        <div className="relative z-10 my-4 flex justify-center items-center">
          <div className="w-48 h-48 relative">
            <svg viewBox="0 0 500 500" fill="none" className="w-full h-full">
              <defs>
                <linearGradient id="omMobileGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#E85A1A" />
                  <stop offset="100%" stopColor="#D94B17" />
                </linearGradient>
              </defs>
              {/* Full Ghost Outline */}
              <g stroke="#E85A1A" strokeWidth="10" strokeOpacity="0.18" strokeLinecap="round" strokeLinejoin="round" fill="none">
                <path d="M 140 230 C 130 150, 240 120, 290 180 C 315 210, 305 245, 270 265" />
                <path d="M 270 265 C 330 280, 350 350, 300 400 C 240 450, 140 410, 130 340 C 125 295, 175 275, 200 300 C 215 318, 205 345, 180 345" />
                <path d="M 270 265 C 330 255, 380 295, 410 345 C 430 380, 440 425, 420 455" />
                <path d="M 280 120 C 340 120, 400 145, 440 100" />
                <path d="M 365 45 L 380 65 L 365 85 L 350 65 Z" fill="#E85A1A" fillOpacity="0.18" strokeWidth="0" />
              </g>
              {/* Active Full Om Vector */}
              <g stroke="url(#omMobileGrad)" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" fill="none">
                <path d="M 140 230 C 130 150, 240 120, 290 180 C 315 210, 305 245, 270 265" />
                <path d="M 270 265 C 330 280, 350 350, 300 400 C 240 450, 140 410, 130 340 C 125 295, 175 275, 200 300 C 215 318, 205 345, 180 345" />
                <path d="M 270 265 C 330 255, 380 295, 410 345 C 430 380, 440 425, 420 455" />
                <path d="M 280 120 C 340 120, 400 145, 440 100" />
                <path d="M 365 45 L 380 65 L 365 85 L 350 65 Z" strokeWidth="0" fill="url(#omMobileGrad)" />
              </g>
            </svg>
          </div>
        </div>

        {/* 5 Stages Mobile Editorial Sequence */}
        <div className="relative z-10 space-y-6 pl-4 border-l-[1.2px] border-[#E85A1A]/30 mt-4">
          {STAGES.map((stg) => (
            <div key={stg.id} className="relative pl-3">
              <div className="absolute -left-[22px] top-1 w-3 h-3 rounded-full bg-[#FFF9F0] border-2 border-[#E85A1A]" />
              
              <div className="text-xs font-mono font-bold text-[#E85A1A] tracking-wider mb-0.5">
                {stg.fraction}
              </div>

              <h3 
                className="text-xl font-bold text-[#3B2A24] leading-tight mb-1.5"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                <span>{stg.titleTop} </span>
                <span className="text-[#E85A1A]">{stg.titleBottom}</span>
              </h3>

              <p className="text-xs text-[#5C453C] leading-relaxed font-sans">
                “{stg.description}”
              </p>
            </div>
          ))}
        </div>

        {/* Mobile Conclusion */}
        <div className="relative z-10 pt-10 text-center border-t border-[#E85A1A]/20 mt-10">
          <span className="text-[10px] font-bold tracking-[0.25em] text-[#E85A1A] uppercase font-sans block mb-1">
            THE SANĀTANA PATH
          </span>
          <h4 
            className="text-lg font-bold text-[#3B2A24] mb-1.5"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            <span className="text-[#E85A1A]">A JOURNEY </span>
            <span>THAT SHAPES TOMORROW</span>
          </h4>
          <p className="text-xs text-[#5C453C] italic font-serif max-w-xs mx-auto mb-3">
            A childhood shaped by knowledge, character, curiosity and culture.
          </p>
          <div className="text-[9px] font-extrabold tracking-[0.2em] text-[#E85A1A] uppercase">
            ROOTED IN VALUES. READY FOR THE FUTURE.
          </div>
        </div>

      </div>
    </section>
  );
};


