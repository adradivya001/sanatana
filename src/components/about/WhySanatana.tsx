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
    description: "We nurture respect, integrity,\ncompassion and responsibility.",
  },
  {
    id: "stage-02",
    stageNumber: "02",
    fraction: "02 / 05",
    titleTop: "EVERY CHILD",
    titleBottom: "MATTERS",
    description: "Every child is unique, with their own\ninterests, abilities and curiosity.",
  },
  {
    id: "stage-03",
    stageNumber: "03",
    fraction: "03 / 05",
    titleTop: "WISDOM MEETS",
    titleBottom: "MODERN LEARNING",
    description: "Vedic heritage and Indian knowledge are\nthoughtfully connected with contemporary methods.",
  },
  {
    id: "stage-04",
    stageNumber: "04",
    fraction: "04 / 05",
    titleTop: "LEARNING",
    titleBottom: "BEYOND BOOKS",
    description: "Yoga, arts, culture, nature and real-world\nexploration make learning meaningful.",
  },
  {
    id: "stage-05",
    stageNumber: "05",
    fraction: "05 / 05",
    titleTop: "PREPARED",
    titleBottom: "FOR TOMORROW",
    description: "We help children become confident, curious,\nindependent and responsible lifelong learners.",
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
    stiffness: 90,
    damping: 25,
    restDelta: 0.001,
  });

  // Stroke / segment reveal opacity and clip progression for the 5 Om segments:
  // Segment 1 (Top '3' Arch): Active in Stage 01 (0 -> 0.20) and stays
  const seg1Opacity = useTransform(smoothProgress, [0, 0.02, 0.20], [1, 1, 1]);
  
  // Segment 2 (Bottom '3' Loop & Hook): Active in Stage 02 (0.20 -> 0.40)
  const seg2Opacity = useTransform(smoothProgress, [0.18, 0.26, 1.0], [0, 1, 1]);
  
  // Segment 3 (Rightward Sweeping Wing): Active in Stage 03 (0.40 -> 0.60)
  const seg3Opacity = useTransform(smoothProgress, [0.38, 0.46, 1.0], [0, 1, 1]);
  
  // Segment 4 (Upper Chandrabindu Crescent): Active in Stage 04 (0.60 -> 0.80)
  const seg4Opacity = useTransform(smoothProgress, [0.58, 0.66, 1.0], [0, 1, 1]);
  
  // Segment 5 (Upper Diamond Bindu): Active in Stage 05 (0.80 -> 1.00)
  const seg5Opacity = useTransform(smoothProgress, [0.78, 0.86, 1.0], [0, 1, 1]);

  return (
    <section 
      id="why-sanatana" 
      ref={containerRef} 
      className="relative bg-[#FFF9F3] text-[#2D1B14] selection:bg-[#F9DDC4] selection:text-[#2D1B14]"
    >
      {/* ============================================================ */}
      {/* DESKTOP / TABLET: 500vh Cinematic Sticky Canvas Theater     */}
      {/* ============================================================ */}
      <div className="hidden lg:block relative h-[500vh]">
        
        {/* Sticky 100vh Canvas Viewport */}
        <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-between py-7 px-10 xl:px-14 pointer-events-auto select-none">
          
          {/* Layer 0: Giant Watermark Background Word: EXPERIENCE */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0 overflow-hidden">
            <span 
              className="text-[14.5vw] font-serif font-bold uppercase tracking-tight text-[#E85A1A]/[0.055] whitespace-nowrap leading-none select-none"
              style={{ fontFamily: "'Playfair Display', 'Cormorant Garamond', Georgia, serif" }}
            >
              EXPERIENCE
            </span>
          </div>

          {/* Layer 1: Subtle Bottom Right Mandala / Lotus Outline */}
          <div className="absolute -bottom-16 -right-16 pointer-events-none z-[1] w-80 h-80 opacity-40">
            <svg viewBox="0 0 200 200" fill="none" stroke="#D96B27" strokeWidth="0.75" className="w-full h-full">
              <circle cx="100" cy="100" r="90" strokeDasharray="3 3" />
              <circle cx="100" cy="100" r="75" />
              <circle cx="100" cy="100" r="60" />
              <circle cx="100" cy="100" r="45" strokeDasharray="2 2" />
              {/* Petals radiating outward */}
              {[...Array(16)].map((_, i) => (
                <path
                  key={i}
                  d={`M 100 100 Q ${100 + 40 * Math.cos((i * 22.5 * Math.PI) / 180)} ${100 + 40 * Math.sin((i * 22.5 * Math.PI) / 180)}, ${100 + 80 * Math.cos(((i * 22.5 + 11.25) * Math.PI) / 180)} ${100 + 80 * Math.sin(((i * 22.5 + 11.25) * Math.PI) / 180)}`}
                />
              ))}
            </svg>
          </div>

          {/* ============================================================ */}
          {/* TOP LEFT: Section Header                                     */}
          {/* ============================================================ */}
          <div className="relative z-10 w-full max-w-[1400px] mx-auto flex items-start justify-between pt-1">
            <div className="flex flex-col items-start">
              <h2 
                className="text-4xl xl:text-[44px] font-bold text-[#2D1B14] tracking-normal leading-tight font-serif"
                style={{ fontFamily: "'Playfair Display', 'Cormorant Garamond', Georgia, serif" }}
              >
                {data?.heading || "WHY SANĀTANA?"}
              </h2>
              <span className="text-[11px] font-bold tracking-[0.26em] text-[#E85A1A] uppercase font-sans mt-2.5">
                {data?.eyebrow || "MORE THAN EDUCATION"}
              </span>
            </div>
          </div>

          {/* ============================================================ */}
          {/* CENTER ARENA: Stage Text (Left) + Shaded Om Visual (Center)   */}
          {/* ============================================================ */}
          <div className="relative z-10 flex-1 w-full max-w-[1400px] mx-auto grid grid-cols-12 items-center my-auto">
            
            {/* LEFT / CENTER-LEFT: Active Stage Typography (Cols 1 - 5) */}
            <div className="col-span-4 relative h-60 flex flex-col justify-center pl-2 z-10">
              {STAGES.map((stg, idx) => {
                const start = idx * 0.20;
                const end = start + 0.20;
                
                const isFirst = idx === 0;
                const isLast = idx === STAGES.length - 1;

                // Crossfade animation between active stages
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
                    ? [0, 0, -14]
                    : isLast
                    ? [14, 0]
                    : [14, 0, 0, -14]
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
                    {/* Active Stage Indicator with underline */}
                    <div className="inline-block mb-3.5">
                      <span className="text-xs font-mono font-bold tracking-widest text-[#E85A1A] block mb-1.5">
                        {stg.fraction}
                      </span>
                      <div className="w-10 h-[1.5px] bg-[#E85A1A]" />
                    </div>

                    {/* Stage Heading */}
                    <h3 
                      className="text-3xl xl:text-[38px] font-bold tracking-tight text-[#2D1B14] leading-[1.12] mb-3 font-serif"
                      style={{ fontFamily: "'Playfair Display', 'Cormorant Garamond', Georgia, serif" }}
                    >
                      <span className="block text-[#E85A1A]">{stg.titleTop}</span>
                      <span className="block text-[#2D1B14]">{stg.titleBottom}</span>
                    </h3>

                    {/* Stage Description */}
                    <p className="text-xs xl:text-[13.5px] text-[#6B534B] max-w-[280px] xl:max-w-[320px] leading-relaxed font-sans font-normal whitespace-pre-line">
                      {stg.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            {/* CENTER / RIGHT-CENTER: Large Shaded Brushstroke Om Visual (Cols 5 - 11) */}
            <div className="col-span-7 relative flex items-center justify-center -ml-8">
              <div className="relative w-[520px] h-[520px] xl:w-[600px] xl:h-[600px] flex items-center justify-center">
                
                {/* Master SVG for the Om Illustration */}
                <svg
                  viewBox="0 0 600 600"
                  fill="none"
                  className="w-full h-full overflow-visible"
                >
                  <defs>
                    {/* Gradients for the soft watercolor/brushstroke Om fills */}
                    <linearGradient id="omBrush1" x1="20%" y1="0%" x2="90%" y2="100%">
                      <stop offset="0%" stopColor="#EA7338" stopOpacity="0.85" />
                      <stop offset="60%" stopColor="#F5A070" stopOpacity="0.65" />
                      <stop offset="100%" stopColor="#FDE6D2" stopOpacity="0.25" />
                    </linearGradient>

                    <linearGradient id="omBrush2" x1="10%" y1="0%" x2="85%" y2="100%">
                      <stop offset="0%" stopColor="#F5A070" stopOpacity="0.6" />
                      <stop offset="50%" stopColor="#EA7338" stopOpacity="0.85" />
                      <stop offset="100%" stopColor="#FDE6D2" stopOpacity="0.2" />
                    </linearGradient>

                    <linearGradient id="omBrush3" x1="0%" y1="20%" x2="100%" y2="90%">
                      <stop offset="0%" stopColor="#EA7338" stopOpacity="0.8" />
                      <stop offset="70%" stopColor="#F5A070" stopOpacity="0.6" />
                      <stop offset="100%" stopColor="#FDE6D2" stopOpacity="0.15" />
                    </linearGradient>

                    <linearGradient id="omBrush4" x1="0%" y1="50%" x2="100%" y2="50%">
                      <stop offset="0%" stopColor="#FDE6D2" stopOpacity="0.25" />
                      <stop offset="50%" stopColor="#EA7338" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#F5A070" stopOpacity="0.4" />
                    </linearGradient>

                    <linearGradient id="omBrush5" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#EA7338" stopOpacity="0.9" />
                      <stop offset="100%" stopColor="#F5A070" stopOpacity="0.75" />
                    </linearGradient>

                    {/* Radial glow filter */}
                    <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
                      <feGaussianBlur stdDeviation="6" result="blur" />
                      <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                  </defs>

                  {/* ============================================================ */}
                  {/* LAYER 1: FAINT DOTTED / DASHED OUTLINE FOR THE ENTIRE OM     */}
                  {/* ============================================================ */}
                  <g stroke="#D96B27" strokeWidth="1.2" strokeDasharray="3 4" strokeOpacity="0.45" fill="none">
                    {/* Top '3' Arch dotted boundary */}
                    <path d="M 170 270 C 145 190, 240 145, 305 200 C 340 230, 335 280, 285 305 C 235 290, 200 230, 250 185 C 285 155, 300 170, 305 200" />
                    
                    {/* Bottom '3' Curve dotted boundary */}
                    <path d="M 285 305 C 340 330, 360 410, 305 465 C 230 520, 130 470, 130 380 C 130 330, 185 310, 215 340 C 230 360, 215 390, 185 390" />
                    
                    {/* Rightward Sweeping Wing dotted boundary */}
                    <path d="M 285 305 C 350 280, 420 310, 455 365 C 490 420, 480 480, 430 515 C 380 470, 370 380, 285 305" />
                    
                    {/* Upper Crescent Chandrabindu dotted boundary */}
                    <path d="M 290 145 C 370 145, 450 190, 490 130 C 430 175, 350 140, 290 145" />
                    
                    {/* Upper Diamond Bindu dotted boundary */}
                    <path d="M 405 55 L 430 85 L 405 115 L 380 85 Z" />
                  </g>

                  {/* ============================================================ */}
                  {/* LAYER 2: SHADED GRADIENT BRUSHSTROKE SEGMENTS (Progressive)   */}
                  {/* ============================================================ */}
                  
                  {/* SEGMENT 1: Top Arch (Stage 01) */}
                  <motion.g style={{ opacity: seg1Opacity }}>
                    {/* Filled soft shape */}
                    <path
                      d="M 170 270 C 140 180, 230 140, 300 195 C 330 220, 325 265, 285 295 C 265 270, 235 220, 205 225 C 180 230, 175 255, 170 270 Z"
                      fill="url(#omBrush1)"
                    />
                    {/* Outer accent contour line */}
                    <path
                      d="M 170 270 C 140 180, 230 140, 300 195 C 330 220, 325 265, 285 295"
                      stroke="#EA7338"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      opacity="0.8"
                    />
                  </motion.g>

                  {/* SEGMENT 2: Bottom Curve & Inner Loop (Stage 02) */}
                  <motion.g style={{ opacity: seg2Opacity }}>
                    <path
                      d="M 285 295 C 340 325, 360 405, 310 460 C 240 515, 135 470, 135 385 C 135 335, 190 315, 218 342 C 230 360, 218 388, 190 388 C 160 388, 160 360, 185 350 C 210 340, 250 380, 285 410 C 315 370, 310 325, 285 295 Z"
                      fill="url(#omBrush2)"
                    />
                    <path
                      d="M 285 295 C 340 325, 360 405, 310 460 C 240 515, 135 470, 135 385 C 135 335, 190 315, 218 342"
                      stroke="#EA7338"
                      strokeWidth="2"
                      strokeLinecap="round"
                      opacity="0.8"
                    />
                  </motion.g>

                  {/* SEGMENT 3: Center-Right Sweeping Wing (Stage 03) */}
                  <motion.g style={{ opacity: seg3Opacity }}>
                    <path
                      d="M 285 295 C 350 275, 420 305, 455 360 C 490 415, 485 475, 435 510 C 420 480, 425 430, 400 385 C 370 335, 325 305, 285 295 Z"
                      fill="url(#omBrush3)"
                    />
                    <path
                      d="M 285 295 C 350 275, 420 305, 455 360 C 490 415, 485 475, 435 510"
                      stroke="#EA7338"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      opacity="0.85"
                    />
                  </motion.g>

                  {/* SEGMENT 4: Upper Crescent Chandrabindu Arc (Stage 04) */}
                  <motion.g style={{ opacity: seg4Opacity }}>
                    <path
                      d="M 290 145 C 370 145, 450 190, 490 130 C 435 170, 355 138, 290 145 Z"
                      fill="url(#omBrush4)"
                    />
                    <path
                      d="M 290 145 C 370 145, 450 190, 490 130"
                      stroke="#EA7338"
                      strokeWidth="2"
                      strokeLinecap="round"
                      opacity="0.85"
                    />
                  </motion.g>

                  {/* SEGMENT 5: Upper Diamond Bindu (Stage 05) */}
                  <motion.g style={{ opacity: seg5Opacity }}>
                    <path
                      d="M 405 55 L 430 85 L 405 115 L 380 85 Z"
                      fill="url(#omBrush5)"
                      filter="url(#softGlow)"
                    />
                    <path
                      d="M 405 55 L 430 85 L 405 115 L 380 85 Z"
                      stroke="#D94B17"
                      strokeWidth="1"
                      fill="none"
                      opacity="0.9"
                    />
                  </motion.g>

                </svg>
              </div>
            </div>

            {/* RIGHT SIDE: Vertical Stage Progress Numbers (Col 12) */}
            <div className="col-span-1 relative flex flex-col items-end pr-1 justify-center space-y-6">
              {/* Subtle background connecting line */}
              <div className="absolute right-[4px] top-2 bottom-2 w-[1px] bg-[#E85A1A]/25 z-0" />

              {STAGES.map((stg, i) => {
                const isActive = useTransform(
                  smoothProgress,
                  [i * 0.2 - 0.05, i * 0.2 + 0.02, (i + 1) * 0.2 - 0.02, (i + 1) * 0.2 + 0.05],
                  [0.35, 1, 1, 0.35]
                );

                const dotColor = useTransform(
                  smoothProgress,
                  [i * 0.2 - 0.05, i * 0.2 + 0.02, (i + 1) * 0.2 - 0.02, (i + 1) * 0.2 + 0.05],
                  ["#FCE1CD", "#E85A1A", "#E85A1A", "#FCE1CD"]
                );

                const dotScale = useTransform(
                  smoothProgress,
                  [i * 0.2 - 0.05, i * 0.2 + 0.02, (i + 1) * 0.2 - 0.02, (i + 1) * 0.2 + 0.05],
                  [0.85, 1.3, 1.3, 0.85]
                );

                return (
                  <motion.div
                    key={stg.stageNumber}
                    className="relative z-10 flex items-center gap-2 group cursor-pointer"
                    style={{ opacity: isActive }}
                  >
                    <span className="text-[11px] font-mono font-bold tracking-wider text-[#2D1B14]">
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
          {/* BOTTOM REGION: Scroll Prompt, Center Statement, Right Anchor */}
          {/* ============================================================ */}
          <div className="relative z-10 w-full max-w-[1400px] mx-auto grid grid-cols-12 items-end pb-1">
            
            {/* BOTTOM LEFT: Minimal Scroll Prompt with Mouse Icon */}
            <div className="col-span-3 flex items-center gap-3 text-left">
              <div className="w-[18px] h-8 rounded-full border-[1.5px] border-[#2D1B14]/80 flex items-start justify-center p-0.5 relative">
                <div className="w-[1px] h-2 bg-[#2D1B14]/80 absolute top-1" />
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                  className="w-1 h-1 rounded-full bg-[#E85A1A] mt-2"
                />
              </div>
              <div className="text-[10px] font-bold tracking-[0.2em] text-[#6B534B] uppercase leading-[1.25] font-sans">
                SCROLL<br />TO EXPLORE
              </div>
            </div>

            {/* BOTTOM CENTER: The Sanātana Path Climax */}
            <div className="col-span-6 text-center flex flex-col items-center">
              <span className="text-[10px] font-bold tracking-[0.28em] text-[#6B534B] uppercase font-sans mb-1">
                THE SANĀTANA PATH
              </span>
              <h4 
                className="text-2xl xl:text-[26px] font-bold tracking-tight text-[#2D1B14] leading-tight font-serif"
                style={{ fontFamily: "'Playfair Display', 'Cormorant Garamond', Georgia, serif" }}
              >
                <span className="text-[#E85A1A]">A JOURNEY </span>
                <span>THAT SHAPES TOMORROW</span>
              </h4>
              <p className="text-xs text-[#6B534B] font-serif italic mt-1 max-w-md">
                A childhood shaped by knowledge, character, curiosity and culture.
              </p>
            </div>

            {/* BOTTOM RIGHT: Rooted In Values Statement */}
            <div className="col-span-3 flex flex-col items-end text-right">
              <span className="text-[10px] font-extrabold tracking-[0.24em] text-[#E85A1A] uppercase font-sans">
                ROOTED IN VALUES. READY FOR THE FUTURE.
              </span>
              <div className="w-16 h-[1.5px] bg-[#E85A1A] mt-2" />
            </div>

          </div>

        </div>
      </div>

      {/* ============================================================ */}
      {/* MOBILE EXPERIENCE: Clean Storytelling Flow                   */}
      {/* ============================================================ */}
      <div className="lg:hidden py-14 px-6 relative overflow-hidden flex flex-col">
        
        {/* Background Watermark */}
        <div className="absolute top-8 right-0 pointer-events-none select-none opacity-10 overflow-hidden">
          <span 
            className="text-[26vw] font-serif font-bold uppercase text-[#E85A1A]"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            EXPERIENCE
          </span>
        </div>

        {/* Mobile Header */}
        <div className="relative z-10 mb-6">
          <h2 
            className="text-3xl font-bold text-[#2D1B14] tracking-tight mb-2 font-serif"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            {data?.heading || "WHY SANĀTANA?"}
          </h2>
          <span className="text-[10px] font-bold tracking-[0.22em] text-[#E85A1A] uppercase font-sans block">
            {data?.eyebrow || "MORE THAN EDUCATION"}
          </span>
        </div>

        {/* Central Responsive Om Graphic */}
        <div className="relative z-10 my-4 flex justify-center items-center">
          <div className="w-56 h-56 relative">
            <svg viewBox="0 0 600 600" fill="none" className="w-full h-full">
              <defs>
                <linearGradient id="omMobileGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#EA7338" />
                  <stop offset="100%" stopColor="#F5A070" />
                </linearGradient>
              </defs>
              {/* Dotted ghost outline */}
              <g stroke="#D96B27" strokeWidth="1.5" strokeDasharray="4 4" strokeOpacity="0.45" fill="none">
                <path d="M 170 270 C 145 190, 240 145, 305 200 C 340 230, 335 280, 285 305 C 235 290, 200 230, 250 185 C 285 155, 300 170, 305 200" />
                <path d="M 285 305 C 340 330, 360 410, 305 465 C 230 520, 130 470, 130 380 C 130 330, 185 310, 215 340 C 230 360, 215 390, 185 390" />
                <path d="M 285 305 C 350 280, 420 310, 455 365 C 490 420, 480 480, 430 515 C 380 470, 370 380, 285 305" />
                <path d="M 290 145 C 370 145, 450 190, 490 130 C 430 175, 350 140, 290 145" />
                <path d="M 405 55 L 430 85 L 405 115 L 380 85 Z" />
              </g>
              {/* Full shaded fill */}
              <g fill="url(#omMobileGrad)" opacity="0.85">
                <path d="M 170 270 C 140 180, 230 140, 300 195 C 330 220, 325 265, 285 295 C 265 270, 235 220, 205 225 C 180 230, 175 255, 170 270 Z" />
                <path d="M 285 295 C 340 325, 360 405, 310 460 C 240 515, 135 470, 135 385 C 135 335, 190 315, 218 342 C 230 360, 218 388, 190 388 C 160 388, 160 360, 185 350 C 210 340, 250 380, 285 410 C 315 370, 310 325, 285 295 Z" />
                <path d="M 285 295 C 350 275, 420 305, 455 360 C 490 415, 485 475, 435 510 C 420 480, 425 430, 400 385 C 370 335, 325 305, 285 295 Z" />
                <path d="M 290 145 C 370 145, 450 190, 490 130 C 435 170, 355 138, 290 145 Z" />
                <path d="M 405 55 L 430 85 L 405 115 L 380 85 Z" />
              </g>
            </svg>
          </div>
        </div>

        {/* 5 Stages Mobile Editorial Sequence */}
        <div className="relative z-10 space-y-6 pl-4 border-l-[1.5px] border-[#E85A1A]/30 mt-4">
          {STAGES.map((stg) => (
            <div key={stg.id} className="relative pl-3">
              <div className="absolute -left-[23px] top-1 w-3.5 h-3.5 rounded-full bg-[#FFF9F3] border-2 border-[#E85A1A]" />
              
              <div className="text-xs font-mono font-bold text-[#E85A1A] tracking-wider mb-0.5">
                {stg.fraction}
              </div>

              <h3 
                className="text-xl font-bold text-[#2D1B14] leading-tight mb-1.5 font-serif"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                <span className="text-[#E85A1A]">{stg.titleTop} </span>
                <span>{stg.titleBottom}</span>
              </h3>

              <p className="text-xs text-[#6B534B] leading-relaxed font-sans whitespace-pre-line">
                {stg.description}
              </p>
            </div>
          ))}
        </div>

        {/* Mobile Conclusion */}
        <div className="relative z-10 pt-10 text-center border-t border-[#E85A1A]/20 mt-10">
          <span className="text-[10px] font-bold tracking-[0.25em] text-[#6B534B] uppercase font-sans block mb-1">
            THE SANĀTANA PATH
          </span>
          <h4 
            className="text-lg font-bold text-[#2D1B14] mb-1.5 font-serif"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            <span className="text-[#E85A1A]">A JOURNEY </span>
            <span>THAT SHAPES TOMORROW</span>
          </h4>
          <p className="text-xs text-[#6B534B] italic font-serif max-w-xs mx-auto mb-3">
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



