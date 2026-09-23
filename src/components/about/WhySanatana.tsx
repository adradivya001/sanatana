import React, { useRef } from 'react';
import type { WhySanatanaSectionData } from '../../types/school';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

interface WhySanatanaProps {
  data?: WhySanatanaSectionData;
}

interface StepData {
  num: string;
  numberPrefix: string;
  topWord: string;
  bottomWord: string;
  giantWord: string;
  description: string;
  illustration: 'lotus' | 'child' | 'book' | 'nature' | 'sunrise';
}

const STEPS: StepData[] = [
  {
    num: "01",
    numberPrefix: "01",
    topWord: "VALUES",
    bottomWord: "AT THE CORE",
    giantWord: "VALUES",
    description: "Respect. Integrity. Compassion. Responsibility.",
    illustration: 'lotus',
  },
  {
    num: "02",
    numberPrefix: "02",
    topWord: "EVERY CHILD",
    bottomWord: "MATTERS",
    giantWord: "CHILD",
    description: "Every child is unique, curious and full of potential.",
    illustration: 'child',
  },
  {
    num: "03",
    numberPrefix: "03",
    topWord: "WISDOM",
    bottomWord: "MEETS MODERN LEARNING",
    giantWord: "WISDOM",
    description: "Vedic heritage meets contemporary education.",
    illustration: 'book',
  },
  {
    num: "04",
    numberPrefix: "04",
    topWord: "BEYOND",
    bottomWord: "THE BOOKS",
    giantWord: "EXPERIENCE",
    description: "Yoga, arts, culture, nature and real-world exploration.",
    illustration: 'nature',
  },
  {
    num: "05",
    numberPrefix: "05",
    topWord: "READY",
    bottomWord: "FOR TOMORROW",
    giantWord: "FUTURE",
    description: "Confident, curious and responsible lifelong learners.",
    illustration: 'sunrise',
  },
];

// Atmospheric minimalist line art vector illustrations
const StepIllustration: React.FC<{ type: StepData['illustration'] }> = ({ type }) => {
  switch (type) {
    case 'lotus':
      return (
        <svg viewBox="0 0 100 100" className="w-24 h-24 sm:w-32 sm:h-32 stroke-[#D94B17] fill-none stroke-[1.4]" strokeLinecap="round" strokeLinejoin="round">
          <path d="M50 85C35 65 20 50 20 35c0-12 12-20 30-20s30 8 30 20c0 15-15 30-30 50z" opacity="0.4" />
          <path d="M50 85C42 70 32 55 35 40c2-10 10-15 15-15s13 5 15 15c3 15-7 30-15 45z" />
          <path d="M50 85c-15-5-28-15-32-28-3-10 2-18 12-16 10 2 18 18 20 44z" opacity="0.6" />
          <path d="M50 85c15-5 28-15 32-28 3-10-2-18-12-16-10 2-18 18-20 44z" opacity="0.6" />
          <circle cx="50" cy="50" r="3" fill="#D94B17" />
        </svg>
      );
    case 'child':
      return (
        <svg viewBox="0 0 100 100" className="w-24 h-24 sm:w-32 sm:h-32 stroke-[#D94B17] fill-none stroke-[1.4]" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="50" cy="30" r="12" />
          <path d="M25 80c0-15 12-25 25-25s25 10 25 25" />
          <path d="M35 55Q20 45 15 30" opacity="0.5" />
          <path d="M65 55Q80 45 85 30" opacity="0.5" />
          <circle cx="85" cy="28" r="3" fill="#D94B17" opacity="0.8" />
          <circle cx="15" cy="28" r="2.5" fill="#D94B17" opacity="0.8" />
          <path d="M50 15v-5M43 17l-3-4M57 17l3-4" opacity="0.6" />
        </svg>
      );
    case 'book':
      return (
        <svg viewBox="0 0 100 100" className="w-24 h-24 sm:w-32 sm:h-32 stroke-[#D94B17] fill-none stroke-[1.4]" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 30c10-5 25-5 35 0v45c-10-5-25-5-35 0V30z" />
          <path d="M85 30c-10-5-25-5-35 0v45c10-5 25-5 35 0V30z" />
          <line x1="50" y1="30" x2="50" y2="75" strokeWidth="1.8" />
          <path d="M25 42h15M25 52h15M60 42h15M60 52h15" opacity="0.5" strokeWidth="1" />
          <path d="M50 24C45 18 55 12 50 6" opacity="0.7" strokeDasharray="2 2" />
          <circle cx="50" cy="5" r="2" fill="#D94B17" />
        </svg>
      );
    case 'nature':
      return (
        <svg viewBox="0 0 100 100" className="w-24 h-24 sm:w-32 sm:h-32 stroke-[#D94B17] fill-none stroke-[1.4]" strokeLinecap="round" strokeLinejoin="round">
          <path d="M50 85V45" strokeWidth="1.8" />
          <path d="M50 45c0-18 18-30 35-30 0 18-12 35-35 30z" />
          <path d="M50 60c0-14-14-24-28-24 0 14 10 28 28 24z" opacity="0.7" />
          <path d="M50 72c0-10 10-18 20-18 0 10-7 20-20 18z" opacity="0.5" />
          <circle cx="50" cy="20" r="1.5" fill="#D94B17" />
          <circle cx="70" cy="30" r="1.5" fill="#D94B17" />
        </svg>
      );
    case 'sunrise':
      return (
        <svg viewBox="0 0 100 100" className="w-24 h-24 sm:w-32 sm:h-32 stroke-[#D94B17] fill-none stroke-[1.4]" strokeLinecap="round" strokeLinejoin="round">
          <line x1="10" y1="70" x2="90" y2="70" strokeWidth="1.8" />
          <path d="M25 70a25 25 0 0 1 50 0" strokeWidth="1.6" />
          <line x1="50" y1="35" x2="50" y2="20" />
          <line x1="32" y1="42" x2="22" y2="32" />
          <line x1="68" y1="42" x2="78" y2="32" />
          <line x1="20" y1="60" x2="8" y2="58" />
          <line x1="80" y1="60" x2="92" y2="58" />
          <path d="M30 78h40M40 84h20" opacity="0.5" />
        </svg>
      );
  }
};

export const WhySanatana: React.FC<WhySanatanaProps> = ({ data }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll tracking for the entire 500vh journey
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 25,
    restDelta: 0.001,
  });

  // Dynamic values mapped across the 5 storytelling chapters (0 to 1)
  // Step 1: 0.00 - 0.20
  // Step 2: 0.20 - 0.40
  // Step 3: 0.40 - 0.60
  // Step 4: 0.60 - 0.80
  // Step 5 & Finale: 0.80 - 1.00
  const stepIndexFloat = useTransform(smoothProgress, [0, 0.2, 0.4, 0.6, 0.8, 1], [0, 1, 2, 3, 4, 4]);

  const pathLength = useTransform(smoothProgress, [0, 0.9], [0, 1]);

  return (
    <div 
      id="why-sanatana" 
      ref={containerRef} 
      className="relative bg-[#FFF9F0] text-[#3E2A24] selection:bg-[#F2C7A4] selection:text-[#4A2A20]"
    >
      {/* ============================================================ */}
      {/* DESKTOP / TABLET: 500vh Cinematic Sticky Scroll Journey     */}
      {/* ============================================================ */}
      <div className="hidden lg:block relative h-[520vh]">
        
        {/* Sticky 100vh Viewport Theater */}
        <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-between py-10 px-8 sm:px-14 lg:px-20">
          
          {/* Layer 1: Oversized Atmospheric Background Typography */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0">
            {STEPS.map((step, idx) => {
              // Calculate opacity based on active step range
              const start = idx * 0.2;
              const mid = start + 0.1;
              const end = start + 0.2;
              const wordOpacity = useTransform(
                smoothProgress,
                [start - 0.05, start + 0.02, mid, end - 0.02, end + 0.05],
                [0, 0.04, 0.09, 0.04, 0]
              );
              const wordY = useTransform(
                smoothProgress,
                [start - 0.05, end + 0.05],
                [40, -40]
              );

              return (
                <motion.div
                  key={step.giantWord}
                  style={{ opacity: wordOpacity, y: wordY }}
                  className="absolute text-[16vw] font-black tracking-tighter uppercase font-serif text-[#D94B17] whitespace-nowrap"
                >
                  {step.giantWord}
                </motion.div>
              );
            })}
          </div>

          {/* Layer 2: Subtle Central ॐ Cultural Anchor (120px-150px, low opacity) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none z-[1]">
            <motion.div
              style={{
                opacity: useTransform(smoothProgress, [0, 0.1, 0.85, 1], [0.12, 0.18, 0.18, 0.25]),
                scale: useTransform(smoothProgress, [0, 1], [0.95, 1.05]),
                filter: 'drop-shadow(0 0 40px rgba(242, 199, 164, 0.4))',
              }}
              className="text-[140px] font-serif font-black leading-none text-[#D94B17]"
            >
              ॐ
            </motion.div>
          </div>

          {/* Layer 3: Organic Flowing SVG Path Line Running Through All 5 Stages */}
          <div className="absolute inset-0 w-full h-full pointer-events-none z-[2]">
            <svg 
              viewBox="0 0 1200 800" 
              fill="none" 
              className="w-full h-full"
              preserveAspectRatio="xMidYMid slice"
            >
              {/* Background faint guide track */}
              <path
                d="M 150 180 C 400 120, 450 380, 600 400 C 750 420, 850 250, 1050 280 C 1150 300, 1050 550, 850 600 C 650 650, 350 550, 200 680 C 100 760, 450 780, 600 780"
                stroke="#D94B17"
                strokeWidth="1.5"
                strokeOpacity="0.12"
                strokeDasharray="4 6"
              />

              {/* Dynamic scroll-drawn organic vine/river path */}
              <motion.path
                d="M 150 180 C 400 120, 450 380, 600 400 C 750 420, 850 250, 1050 280 C 1150 300, 1050 550, 850 600 C 650 650, 350 550, 200 680 C 100 760, 450 780, 600 780"
                stroke="url(#pathGradient)"
                strokeWidth="2.5"
                strokeLinecap="round"
                style={{
                  pathLength: pathLength,
                }}
              />

              <defs>
                <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#D94B17" stopOpacity="0.8" />
                  <stop offset="50%" stopColor="#F2C7A4" stopOpacity="1" />
                  <stop offset="100%" stopColor="#D94B17" stopOpacity="0.9" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* ============================================================ */}
          {/* HEADER: Always Visible in Sticky Theater                     */}
          {/* ============================================================ */}
          <div className="relative z-10 flex items-start justify-between w-full max-w-7xl mx-auto pt-2">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-[1.5px] bg-[#D94B17]" />
                <span className="text-[11px] font-bold tracking-[0.25em] text-[#D94B17] uppercase font-sans">
                  {data?.eyebrow || "MORE THAN EDUCATION"}
                </span>
              </div>
              <h2 
                className="text-3xl sm:text-4xl font-bold text-[#2C211B] tracking-tight"
                style={{ fontFamily: "'Playfair Display', 'Cormorant Garamond', Georgia, serif" }}
              >
                {data?.heading || "WHY SANĀTANA?"}
              </h2>
            </div>

            {/* Sub-statement on Right */}
            <div className="max-w-xs text-right">
              <span className="text-xs sm:text-sm font-serif italic text-[#7A3E2D] block">
                “Where Strong Roots Meet
                a Modern Education”
              </span>
            </div>
          </div>

          {/* ============================================================ */}
          {/* CENTER STAGE: The 5 Editorial Moments in Sequential Scroll  */}
          {/* ============================================================ */}
          <div className="relative z-10 flex-1 flex items-center justify-center max-w-5xl mx-auto w-full">
            {STEPS.map((step, idx) => {
              const start = idx * 0.18;
              const mid = start + 0.09;
              const end = start + 0.18;

              // Step Opacity & Y motion
              const isLast = idx === STEPS.length - 1;
              const itemOpacity = useTransform(
                smoothProgress,
                isLast 
                  ? [start - 0.04, start + 0.04, 0.95, 1] 
                  : [start - 0.04, start + 0.03, mid, end - 0.02, end + 0.04],
                isLast
                  ? [0, 1, 1, 1]
                  : [0, 1, 1, 1, 0]
              );

              const itemY = useTransform(
                smoothProgress,
                isLast
                  ? [start - 0.04, start + 0.04]
                  : [start - 0.04, start + 0.03, end - 0.02, end + 0.04],
                isLast
                  ? [30, 0]
                  : [30, 0, 0, -25]
              );

              const itemScale = useTransform(
                smoothProgress,
                [start, mid, end],
                [0.97, 1, 0.97]
              );

              return (
                <motion.div
                  key={step.num}
                  style={{
                    opacity: itemOpacity,
                    y: itemY,
                    scale: itemScale,
                  }}
                  className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none"
                >
                  {/* Subtle Atmospheric Icon / Line Art */}
                  <motion.div 
                    className="mb-4"
                    animate={{ y: [-3, 3, -3] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <StepIllustration type={step.illustration} />
                  </motion.div>

                  {/* Step Number */}
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-mono font-bold tracking-widest text-[#D94B17]">
                      {step.numberPrefix}
                    </span>
                    <div className="w-6 h-[1px] bg-[#D94B17]/40" />
                    <span className="text-[10px] uppercase font-bold tracking-widest text-[#7A3E2D]">
                      THE SANĀTANA PATH
                    </span>
                  </div>

                  {/* Large Editorial Title */}
                  <h3 
                    className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#2C211B] leading-[1.08] max-w-2xl"
                    style={{ fontFamily: "'Cormorant Garamond', 'Playfair Display', Georgia, serif" }}
                  >
                    <span className="text-[#D94B17] block">
                      {step.topWord}
                    </span>
                    <span className="text-[#3E2A24] block mt-1 font-medium">
                      {step.bottomWord}
                    </span>
                  </h3>

                  {/* Supporting Description */}
                  <p className="text-sm sm:text-base md:text-lg text-[#5C453C] max-w-lg mt-4 leading-relaxed font-sans font-normal">
                    “{step.description}”
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* ============================================================ */}
          {/* BOTTOM CONTROLS & EMOTIONAL CONCLUSION                      */}
          {/* ============================================================ */}
          <div className="relative z-10 w-full max-w-7xl mx-auto pb-2 flex items-end justify-between">
            
            {/* Step Progress Dots & Indicator (01 / 05) */}
            <div className="flex items-center gap-4">
              <span className="text-xs font-mono font-bold text-[#D94B17]">
                0{Math.min(5, Math.floor(smoothProgress.get() * 5) + 1)} / 05
              </span>
              <div className="flex items-center gap-1.5">
                {STEPS.map((_, dotIdx) => {
                  return (
                    <motion.div
                      key={dotIdx}
                      style={{
                        backgroundColor: useTransform(
                          smoothProgress,
                          [dotIdx * 0.2 - 0.05, dotIdx * 0.2 + 0.05, (dotIdx + 1) * 0.2],
                          ["rgba(217, 75, 23, 0.2)", "#D94B17", "rgba(217, 75, 23, 0.4)"]
                        ),
                        width: useTransform(
                          smoothProgress,
                          [dotIdx * 0.2 - 0.05, dotIdx * 0.2 + 0.05, (dotIdx + 1) * 0.2],
                          [6, 22, 6]
                        ),
                      }}
                      className="h-1.5 rounded-full transition-all duration-300"
                    />
                  );
                })}
              </div>
            </div>

            {/* Bottom Emotional Conclusion Statement */}
            <div className="text-right">
              <span className="text-[10px] sm:text-[11px] font-extrabold tracking-[0.26em] text-[#D94B17] uppercase block font-sans">
                ROOTED IN VALUES. READY FOR THE FUTURE.
              </span>
              <span className="text-[10px] sm:text-xs italic text-[#7A3E2D] font-serif block mt-0.5">
                A childhood shaped by knowledge, character, curiosity and culture.
              </span>
            </div>

          </div>

        </div>
      </div>

      {/* ============================================================ */}
      {/* MOBILE COMPOSITION: Continuous Vertical Path Journey         */}
      {/* ============================================================ */}
      <div className="lg:hidden py-16 px-6 relative overflow-hidden">
        
        {/* Subtle Background Om on Mobile */}
        <div className="absolute top-1/3 right-0 -translate-y-1/2 pointer-events-none opacity-15 text-[#D94B17] select-none text-[180px] font-serif font-black">
          ॐ
        </div>

        {/* Mobile Header */}
        <div className="mb-14">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-6 h-[1.5px] bg-[#D94B17]" />
            <span className="text-[10px] font-bold tracking-[0.22em] text-[#D94B17] uppercase font-sans">
              MORE THAN EDUCATION
            </span>
          </div>
          <h2 
            className="text-3xl font-bold text-[#2C211B] tracking-tight mb-2"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            WHY SANĀTANA?
          </h2>
          <p className="text-xs font-serif italic text-[#7A3E2D]">
            Where Strong Roots Meet a Modern Education
          </p>
        </div>

        {/* Vertical Flowing Path with Nodes */}
        <div className="relative pl-8 space-y-12">
          
          {/* Vertical Path Line */}
          <div className="absolute left-[11px] top-3 bottom-6 w-[2px] bg-gradient-to-b from-[#D94B17] via-[#F2C7A4] to-[#D94B17]" />

          {STEPS.map((step) => (
            <div key={step.num} className="relative group">
              {/* Path Node Bullet */}
              <div className="absolute -left-[30px] top-1 w-5 h-5 rounded-full bg-[#FFF9F0] border-2 border-[#D94B17] flex items-center justify-center shadow-xs">
                <div className="w-2 h-2 rounded-full bg-[#D94B17]" />
              </div>

              {/* Node Content */}
              <div>
                <span className="text-[11px] font-mono font-bold text-[#D94B17] tracking-wider block mb-1">
                  {step.numberPrefix} • {step.giantWord}
                </span>
                
                <h3 
                  className="text-xl font-bold text-[#2C211B] leading-tight mb-2"
                  style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
                >
                  <span className="text-[#D94B17]">{step.topWord} </span>
                  <span>{step.bottomWord}</span>
                </h3>

                <p className="text-xs text-[#5C453C] leading-relaxed font-sans">
                  “{step.description}”
                </p>
              </div>
            </div>
          ))}

          {/* Ending Sun / Climax on Mobile */}
          <div className="relative pt-4">
            <div className="absolute -left-[32px] top-5 w-6 h-6 rounded-full bg-gradient-to-tr from-[#D94B17] to-[#F59E0B] text-white flex items-center justify-center shadow-md text-xs font-bold">
              ☀
            </div>
            
            <div className="pl-1 pt-1">
              <h4 className="text-xs font-extrabold tracking-[0.2em] text-[#D94B17] uppercase font-sans mb-1">
                ROOTED IN VALUES. READY FOR THE FUTURE.
              </h4>
              <p className="text-[11px] italic text-[#7A3E2D] font-serif">
                A childhood shaped by knowledge, character, curiosity and culture.
              </p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
