import React from 'react';
import { motion } from 'framer-motion';

export const AdmissionTicker: React.FC = () => {
  // Repeating "Admissions 2026-2027" in marquee
  const phrase = "Admissions 2026-2027";
  const items = Array(16).fill(phrase);

  return (
    <div className="bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 text-slate-950 font-extrabold text-xs py-1 overflow-hidden relative shadow-xs z-40 select-none border-b border-amber-500/40 flex items-center">
      {/* Infinite scrolling marquee containing only "Admissions 2026-2027" */}
      <div className="flex overflow-hidden whitespace-nowrap w-full mask-[linear-gradient(to_right,transparent,black_3%,black_97%,transparent)]">
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            ease: 'linear',
            duration: 20,
            repeat: Infinity,
          }}
          className="flex items-center gap-10 text-[11px] sm:text-xs shrink-0 tracking-wider uppercase font-extrabold"
        >
          {items.map((item, idx) => (
            <span key={idx} className="inline-flex items-center gap-10">
              <span>{item}</span>
              <span className="text-amber-800/60 font-black">•</span>
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
