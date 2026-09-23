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
    stiffness: 90,
    damping: 26,
    restDelta: 0.001,
  });

  // Stroke reveal progress for each of the 5 Devanagari ॐ strokes:
  // Stroke 1 (Upper '3' arch): reveals 0.00 -> 0.20, fully drawn by 0.20 and stays
  const stroke1 = useTransform(smoothProgress, [0, 0.20], [0, 1]);
  // Stroke 2 (Lower '3' curve): reveals 0.20 -> 0.40, fully drawn by 0.40 and stays
  const stroke2 = useTransform(smoothProgress, [0.18, 0.40], [0, 1]);
  // Stroke 3 (Center right tail/loop): reveals 0.40 -> 0.60, fully drawn by 0.60 and stays
  const stroke3 = useTransform(smoothProgress, [0.38, 0.60], [0, 1]);
  // Stroke 4 (Upper crescent / Chandrabindu curve): reveals 0.60 -> 0.80, fully drawn by 0.80 and stays
  const stroke4 = useTransform(smoothProgress, [0.58, 0.80], [0, 1]);
  // Stroke 5 (Upper Bindu dot): reveals 0.80 -> 1.00, fully drawn by 1.00
  const stroke5 = useTransform(smoothProgress, [0.78, 1.00], [0, 1]);

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
        <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-between py-10 px-12 xl:px-16 pointer-events-auto select-none">
          
          {/* Layer 0: Giant low-opacity background editorial word: EXPERIENCE */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0 overflow-hidden">
            <span 
              className="text-[14vw] font-serif font-bold uppercase text-[#F9DDC4] opacity-35 tracking-tight whitespace-nowrap leading-none select-none"
              style={{ fontFamily: "'Playfair Display', 'Cormorant Garamond', Georgia, serif" }}
            >
              EXPERIENCE
            </span>
          </div>

          {/* Layer 1: Subtle Decorative Background Corner Elements */}
          <div className="absolute inset-0 pointer-events-none z-[1]">
            {/* Top Right Decorative Arc & Dot */}
            <svg className="absolute top-8 right-16 w-32 h-32 opacity-20" viewBox="0 0 100 100" fill="none" stroke="#E85A1A">
              <circle cx="50" cy="50" r="40" strokeWidth="0.8" strokeDasharray="3 3" />
              <circle cx="50" cy="50" r="28" strokeWidth="0.5" />
              <circle cx="50" cy="50" r="2" fill="#E85A1A" />
            </svg>
            {/* Bottom Left Subtle Accent */}
            <svg className="absolute bottom-16 left-12 w-28 h-28 opacity-15" viewBox="0 0 100 100" fill="none" stroke="#E85A1A">
              <path d="M10 90 Q 50 10 90 90" strokeWidth="0.8" />
              <circle cx="50" cy="45" r="1.5" fill="#E85A1A" />
            </svg>
          </div>

          {/* ============================================================ */}
          {/* TOP LEFT: Section Header                                     */}
          {/* ============================================================ */}
          <div className="relative z-10 flex items-start justify-between w-full max-w-7xl mx-auto">
            <div className="flex flex-col items-start">
              <h2 
                className="text-4xl xl:text-5xl font-bold text-[#3B2A24] tracking-tight leading-tight"
                style={{ fontFamily: "'Playfair Display', 'Cormorant Garamond', Georgia, serif" }}
              >
                {data?.heading || "WHY SANĀTANA?"}
              </h2>
              {/* Thin orange horizontal rule */}
              <div className="w-14 h-[1.5px] bg-[#E85A1A] my-2.5" />
              <span className="text-[11px] font-bold tracking-[0.25em] text-[#E85A1A] uppercase font-sans">
                {data?.eyebrow || "MORE THAN EDUCATION"}
              </span>
            </div>
          </div>

          {/* ============================================================ */}
          {/* CENTER ARENA: Floating Stage Content & Central Progressive Om */}
          {/* ============================================================ */}
          <div className="relative z-10 flex-1 w-full max-w-7xl mx-auto grid grid-cols-12 items-center gap-6 my-auto">
            
            {/* LEFT / CENTER-LEFT: Active Stage Typography (Cols 1 - 5) */}
            <div className="col-span-5 relative h-72 flex flex-col justify-center">
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
                    ? [0, 0, -18]
                    : isLast
                    ? [20, 0]
                    : [20, 0, 0, -18]
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
                    <div className="text-sm font-mono font-bold tracking-widest text-[#E85A1A] mb-3">
                      {stg.fraction}
                    </div>

                    {/* Stage Heading */}
                    <h3 
                      className="text-4xl xl:text-5xl font-bold tracking-tight text-[#3B2A24] leading-[1.08] mb-4"
                      style={{ fontFamily: "'Playfair Display', 'Cormorant Garamond', Georgia, serif" }}
                    >
                      <span className="block">{stg.titleTop}</span>
                      <span className="block text-[#E85A1A]">{stg.titleBottom}</span>
                    </h3>

                    {/* Stage Description Floating Directly On Canvas */}
                    <p className="text-base xl:text-lg text-[#5C453C] max-w-md leading-relaxed font-sans font-normal">
                      “{stg.description}”
                    </p>
                  </motion.div>
                );
              })}
            </div>

            {/* CENTER / RIGHT-CENTER: Large Progressive Stroke-by-Stroke Om (Cols 6 - 11) */}
            <div className="col-span-6 relative flex items-center justify-center">
              <div className="relative w-[480px] h-[480px] xl:w-[560px] xl:h-[560px] flex items-center justify-center">
                
                {/* SVG ॐ with Layer 1 (Faint Ghost Outline) & Layer 2 (Active Orange Reveal) */}
                <svg
                  viewBox="0 0 400 400"
                  fill="none"
                  className="w-full h-full overflow-visible drop-shadow-[0_4px_30px_rgba(232,90,26,0.08)]"
                >
                  <defs>
                    <linearGradient id="omOrangeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#E85A1A" />
                      <stop offset="50%" stopColor="#F57C00" />
                      <stop offset="100%" stopColor="#D94B17" />
                    </linearGradient>
                  </defs>

                  {/* ============================================================ */}
                  {/* LAYER 1: GHOST OUTLINE (Faint Background Path Structure)     */}
                  {/* ============================================================ */}
                  <g stroke="#E85A1A" strokeWidth="12" strokeOpacity="0.08" strokeLinecap="round" strokeLinejoin="round" fill="none">
                    {/* Path 1: Top '3' Upper Arch */}
                    <path d="M 120 180 C 120 110, 200 90, 240 140 C 260 165, 250 200, 220 215" />
                    {/* Path 2: Bottom '3' Lower Sweep & Tail Loop */}
                    <path d="M 220 215 C 270 230, 280 290, 240 330 C 190 370, 110 340, 105 285 C 102 245, 140 230, 160 250 C 175 265, 165 290, 145 290" />
                    {/* Path 3: Center Rightward Ascending Tail */}
                    <path d="M 220 215 C 270 210, 310 240, 335 280 C 350 305, 360 345, 345 375" />
                    {/* Path 4: Upper Crescent Chandrabindu Curve */}
                    <path d="M 230 95 C 280 95, 330 115, 360 80" />
                    {/* Path 5: Bindu Dot */}
                    <circle cx="305" cy="52" r="10" strokeWidth="0" fill="#E85A1A" fillOpacity="0.08" />
                  </g>

                  {/* ============================================================ */}
                  {/* LAYER 2: ACTIVE PROGRESSIVE STROKE REVEAL (Orange Draw)      */}
                  {/* ============================================================ */}
                  <g stroke="url(#omOrangeGradient)" strokeWidth="13" strokeLinecap="round" strokeLinejoin="round" fill="none">
                    {/* Stroke 1: Stage 01 Reveal (Top '3' Arch) */}
                    <motion.path
                      d="M 120 180 C 120 110, 200 90, 240 140 C 260 165, 250 200, 220 215"
                      style={{ pathLength: stroke1 }}
                    />
                    
                    {/* Stroke 2: Stage 02 Reveal (Bottom '3' Lower Curve & Inner Curl) */}
                    <motion.path
                      d="M 220 215 C 270 230, 280 290, 240 330 C 190 370, 110 340, 105 285 C 102 245, 140 230, 160 250 C 175 265, 165 290, 145 290"
                      style={{ pathLength: stroke2 }}
                    />

                    {/* Stroke 3: Stage 03 Reveal (Center Rightward Tail) */}
                    <motion.path
                      d="M 220 215 C 270 210, 310 240, 335 280 C 350 305, 360 345, 345 375"
                      style={{ pathLength: stroke3 }}
                    />

                    {/* Stroke 4: Stage 04 Reveal (Upper Crescent Chandrabindu) */}
                    <motion.path
                      d="M 230 95 C 280 95, 330 115, 360 80"
                      style={{ pathLength: stroke4 }}
                    />

                    {/* Stroke 5: Stage 05 Reveal (Bindu Dot & Glow) */}
                    <motion.circle
                      cx="305"
                      cy="52"
                      r="10"
                      strokeWidth="0"
                      fill="url(#omOrangeGradient)"
                      style={{
                        scale: stroke5,
                        opacity: stroke5,
                        transformOrigin: "305px 52px"
                      }}
                    />
                  </g>
                </svg>

                {/* Atmospheric Glow in Stage 05 Complete Reveal */}
                <motion.div
                  style={{
                    opacity: useTransform(smoothProgress, [0.80, 1.0], [0, 0.45]),
                    scale: useTransform(smoothProgress, [0.80, 1.0], [0.8, 1.1]),
                  }}
                  className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#E85A1A]/20 via-[#F9DDC4]/30 to-transparent blur-3xl pointer-events-none"
                />
              </div>
            </div>

            {/* RIGHT SIDE: Vertical Progress Indicator (Col 12) */}
            <div className="col-span-1 relative flex flex-col items-center justify-center space-y-6">
              {/* Vertical subtle background line */}
              <div className="absolute top-3 bottom-3 w-[1px] bg-[#E85A1A]/20 z-0" />

              {STAGES.map((stg, i) => {
                const isActive = useTransform(
                  smoothProgress,
                  [i * 0.2 - 0.05, i * 0.2 + 0.02, (i + 1) * 0.2 - 0.02, (i + 1) * 0.2 + 0.05],
                  [0.25, 1, 1, 0.25]
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
                    <span className="text-xs font-mono font-bold tracking-wider text-[#3B2A24]">
                      {stg.stageNumber}
                    </span>
                    <motion.div
                      style={{
                        backgroundColor: dotColor,
                        scale: dotScale,
                      }}
                      className="w-2 h-2 rounded-full shadow-xs"
                    />
                  </motion.div>
                );
              })}
            </div>

          </div>

          {/* ============================================================ */}
          {/* BOTTOM REGION: Left Prompt, Center Statement, Right Anchor   */}
          {/* ============================================================ */}
          <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-12 items-end pt-2">
            
            {/* BOTTOM LEFT: Minimal Scroll Prompt */}
            <div className="col-span-3 flex items-center gap-3 text-left">
              <div className="w-5 h-8 rounded-full border-[1.5px] border-[#E85A1A]/40 flex items-start justify-center p-1">
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                  className="w-1 h-1.5 rounded-full bg-[#E85A1A]"
                />
              </div>
              <div className="text-[10px] font-bold tracking-[0.2em] text-[#7A3E2D] uppercase leading-tight font-sans">
                SCROLL<br />TO EXPLORE
              </div>
            </div>

            {/* BOTTOM CENTER: The Sanātana Path Editorial Climax */}
            <div className="col-span-6 text-center flex flex-col items-center">
              <span className="text-[10px] font-bold tracking-[0.25em] text-[#E85A1A] uppercase font-sans mb-1">
                THE SANĀTANA PATH
              </span>
              <h4 
                className="text-xl xl:text-2xl font-bold tracking-tight text-[#3B2A24] leading-tight"
                style={{ fontFamily: "'Playfair Display', 'Cormorant Garamond', Georgia, serif" }}
              >
                <span className="text-[#E85A1A]">A JOURNEY </span>
                <span>THAT SHAPES TOMORROW</span>
              </h4>
              <p className="text-xs text-[#5C453C] font-serif italic mt-1 max-w-md">
                A childhood shaped by knowledge, character, curiosity and culture.
              </p>
            </div>

            {/* BOTTOM RIGHT: Rooted In Values Statement */}
            <div className="col-span-3 flex flex-col items-end text-right">
              <span className="text-[10px] font-extrabold tracking-[0.22em] text-[#E85A1A] uppercase font-sans">
                ROOTED IN VALUES.<br />READY FOR THE FUTURE.
              </span>
              <div className="w-16 h-[1.5px] bg-[#E85A1A] mt-2" />
            </div>

          </div>

        </div>
      </div>

      {/* ============================================================ */}
      {/* MOBILE EXPERIENCE: Progressive Cumulative Om Scroll Flow     */}
      {/* ============================================================ */}
      <div className="lg:hidden py-16 px-6 relative overflow-hidden flex flex-col">
        
        {/* Giant Watermark Background */}
        <div className="absolute top-10 right-0 pointer-events-none select-none opacity-20 overflow-hidden">
          <span 
            className="text-[28vw] font-serif font-bold uppercase text-[#F9DDC4]"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            SANĀTANA
          </span>
        </div>

        {/* Mobile Header */}
        <div className="relative z-10 mb-8">
          <h2 
            className="text-3xl font-bold text-[#3B2A24] tracking-tight mb-2"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            {data?.heading || "WHY SANĀTANA?"}
          </h2>
          <div className="w-12 h-[1.5px] bg-[#E85A1A] mb-2" />
          <span className="text-[10px] font-bold tracking-[0.22em] text-[#E85A1A] uppercase font-sans block">
            {data?.eyebrow || "MORE THAN EDUCATION"}
          </span>
        </div>

        {/* Central Responsive Om Graphic */}
        <div className="relative z-10 my-4 flex justify-center items-center">
          <div className="w-56 h-56 relative">
            <svg viewBox="0 0 400 400" fill="none" className="w-full h-full">
              <defs>
                <linearGradient id="omMobileGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#E85A1A" />
                  <stop offset="100%" stopColor="#D94B17" />
                </linearGradient>
              </defs>
              {/* Full Ghost Outline */}
              <g stroke="#E85A1A" strokeWidth="14" strokeOpacity="0.12" strokeLinecap="round" strokeLinejoin="round" fill="none">
                <path d="M 120 180 C 120 110, 200 90, 240 140 C 260 165, 250 200, 220 215" />
                <path d="M 220 215 C 270 230, 280 290, 240 330 C 190 370, 110 340, 105 285 C 102 245, 140 230, 160 250 C 175 265, 165 290, 145 290" />
                <path d="M 220 215 C 270 210, 310 240, 335 280 C 350 305, 360 345, 345 375" />
                <path d="M 230 95 C 280 95, 330 115, 360 80" />
                <circle cx="305" cy="52" r="10" strokeWidth="0" fill="#E85A1A" fillOpacity="0.12" />
              </g>
              {/* Active Full Om Vector */}
              <g stroke="url(#omMobileGrad)" strokeWidth="14" strokeLinecap="round" strokeLinejoin="round" fill="none">
                <path d="M 120 180 C 120 110, 200 90, 240 140 C 260 165, 250 200, 220 215" />
                <path d="M 220 215 C 270 230, 280 290, 240 330 C 190 370, 110 340, 105 285 C 102 245, 140 230, 160 250 C 175 265, 165 290, 145 290" />
                <path d="M 220 215 C 270 210, 310 240, 335 280 C 350 305, 360 345, 345 375" />
                <path d="M 230 95 C 280 95, 330 115, 360 80" />
                <circle cx="305" cy="52" r="10" strokeWidth="0" fill="url(#omMobileGrad)" />
              </g>
            </svg>
          </div>
        </div>

        {/* 5 Stages Mobile Editorial Sequence */}
        <div className="relative z-10 space-y-8 pl-4 border-l-[1.5px] border-[#E85A1A]/30 mt-6">
          {STAGES.map((stg) => (
            <div key={stg.id} className="relative pl-3">
              <div className="absolute -left-[23px] top-1 w-3.5 h-3.5 rounded-full bg-[#FFF9F0] border-2 border-[#E85A1A]" />
              
              <div className="text-xs font-mono font-bold text-[#E85A1A] tracking-wider mb-1">
                {stg.fraction}
              </div>

              <h3 
                className="text-2xl font-bold text-[#3B2A24] leading-tight mb-2"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                <span>{stg.titleTop} </span>
                <span className="text-[#E85A1A]">{stg.titleBottom}</span>
              </h3>

              <p className="text-sm text-[#5C453C] leading-relaxed font-sans">
                “{stg.description}”
              </p>
            </div>
          ))}
        </div>

        {/* Mobile Conclusion */}
        <div className="relative z-10 pt-12 text-center border-t border-[#E85A1A]/20 mt-12">
          <span className="text-[10px] font-bold tracking-[0.25em] text-[#E85A1A] uppercase font-sans block mb-1">
            THE SANĀTANA PATH
          </span>
          <h4 
            className="text-xl font-bold text-[#3B2A24] mb-2"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            <span className="text-[#E85A1A]">A JOURNEY </span>
            <span>THAT SHAPES TOMORROW</span>
          </h4>
          <p className="text-xs text-[#5C453C] italic font-serif max-w-xs mx-auto mb-4">
            A childhood shaped by knowledge, character, curiosity and culture.
          </p>
          <div className="text-[10px] font-extrabold tracking-[0.2em] text-[#E85A1A] uppercase">
            ROOTED IN VALUES. READY FOR THE FUTURE.
          </div>
        </div>

      </div>
    </section>
  );
};

