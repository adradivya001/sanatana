import React from 'react';
import type { WhySanatanaSectionData } from '../../types/school';
import { motion } from 'framer-motion';

interface WhySanatanaProps {
  data?: WhySanatanaSectionData;
}

interface FeatureItem {
  id: string;
  num: string;
  title: string;
  subtitle: string;
  description: string;
  tag: string;
  icon: 'values' | 'child' | 'wisdom' | 'activity' | 'future';
}

const FEATURES: FeatureItem[] = [
  {
    id: "feat-01",
    num: "01",
    title: "Values at the Core",
    subtitle: "Character & Integrity",
    description: "We nurture respect, integrity, compassion, and responsibility as the foundational pillar of every child's growth.",
    tag: "Ethical Foundation",
    icon: 'values',
  },
  {
    id: "feat-02",
    num: "02",
    title: "Every Child Matters",
    subtitle: "Individual Potential",
    description: "Every child is unique, with their own boundless curiosity, distinct potential, and creative voice.",
    tag: "Personalized Care",
    icon: 'child',
  },
  {
    id: "feat-03",
    num: "03",
    title: "Wisdom Meets Learning",
    subtitle: "Vedic & Modern Blend",
    description: "Vedic heritage and Indian wisdom are thoughtfully connected with contemporary global teaching methods.",
    tag: "Holistic Academics",
    icon: 'wisdom',
  },
  {
    id: "feat-04",
    num: "04",
    title: "Learning Beyond Books",
    subtitle: "Experiential Growth",
    description: "Yoga, arts, culture, nature exploration, and real-world projects make education meaningful and joyful.",
    tag: "Life Skills & Arts",
    icon: 'activity',
  },
  {
    id: "feat-05",
    num: "05",
    title: "Prepared for Tomorrow",
    subtitle: "Future Readiness",
    description: "We help children become confident, independent, analytical, and responsible lifelong learners.",
    tag: "Global Readiness",
    icon: 'future',
  },
];

const FeatureIcon: React.FC<{ type: FeatureItem['icon'] }> = ({ type }) => {
  switch (type) {
    case 'values':
      return (
        <svg viewBox="0 0 24 24" className="w-6 h-6 stroke-[#D95D24] fill-none stroke-2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
      );
    case 'child':
      return (
        <svg viewBox="0 0 24 24" className="w-6 h-6 stroke-[#D95D24] fill-none stroke-2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="7" r="4" />
          <path d="M5.5 21v-2a6.5 6.5 0 0 1 13 0v2" />
        </svg>
      );
    case 'wisdom':
      return (
        <svg viewBox="0 0 24 24" className="w-6 h-6 stroke-[#D95D24] fill-none stroke-2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
        </svg>
      );
    case 'activity':
      return (
        <svg viewBox="0 0 24 24" className="w-6 h-6 stroke-[#D95D24] fill-none stroke-2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      );
    case 'future':
      return (
        <svg viewBox="0 0 24 24" className="w-6 h-6 stroke-[#D95D24] fill-none stroke-2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="5" />
          <line x1="12" y1="1" x2="12" y2="3" />
          <line x1="12" y1="21" x2="12" y2="23" />
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
          <line x1="1" y1="12" x2="3" y2="12" />
          <line x1="21" y1="12" x2="23" y2="12" />
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        </svg>
      );
  }
};

export const WhySanatana: React.FC<WhySanatanaProps> = ({ data }) => {
  return (
    <section id="why-sanatana" className="py-20 lg:py-28 bg-[#FFFBF7] text-[#2C1D16] relative overflow-hidden">
      {/* Background Decorative Rings */}
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#FCEBE1]/60 blur-2xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-[#FCEBE1]/60 blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 mb-3"
          >
            <span className="w-6 h-[1.5px] bg-[#D95D24]" />
            <span className="text-xs font-bold tracking-[0.25em] text-[#D95D24] uppercase font-sans">
              {data?.eyebrow || "MORE THAN EDUCATION"}
            </span>
            <span className="w-6 h-[1.5px] bg-[#D95D24]" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2C1D16] tracking-tight font-serif mb-4"
            style={{ fontFamily: "'Playfair Display', 'Cormorant Garamond', Georgia, serif" }}
          >
            {data?.heading || "Why Choose Sanātana?"}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-[#614D45] leading-relaxed font-sans"
          >
            {data?.supportingText || data?.mainStatement || "Where time-tested Indian values blend seamlessly with modern academic rigor to shape tomorrow's leaders."}
          </motion.p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {FEATURES.map((feat, idx) => (
            <motion.div
              key={feat.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl border border-[#F3E5D8] transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between ${
                idx === 0 ? 'lg:col-span-1' : ''
              }`}
            >
              <div>
                {/* Card Top: Number Circle & Tag */}
                <div className="flex items-center justify-between mb-6">
                  {/* Circle Number Badge */}
                  <div className="w-12 h-12 rounded-full bg-[#FFF4EC] border border-[#FAD7C3] flex items-center justify-center text-[#D95D24] font-mono font-bold text-sm shadow-inner group-hover:scale-110 group-hover:bg-[#D95D24] group-hover:text-white transition-all duration-300">
                    {feat.num}
                  </div>

                  <span className="text-[11px] font-bold tracking-wider uppercase text-[#D95D24] bg-[#FFF4EC] px-3 py-1 rounded-full border border-[#FAD7C3]/60">
                    {feat.tag}
                  </span>
                </div>

                {/* Card Icon Circle */}
                <div className="w-12 h-12 rounded-xl bg-[#FFFBF7] border border-[#F3E5D8] flex items-center justify-center mb-5 group-hover:border-[#D95D24]/30 transition-colors">
                  <FeatureIcon type={feat.icon} />
                </div>

                {/* Title & Subtitle */}
                <h3 
                  className="text-2xl font-bold text-[#2C1D16] mb-1 font-serif group-hover:text-[#D95D24] transition-colors"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  {feat.title}
                </h3>
                <span className="text-xs font-semibold text-[#8C6D62] uppercase tracking-wider block mb-3 font-sans">
                  {feat.subtitle}
                </span>

                {/* Description */}
                <p className="text-sm text-[#5C453C] leading-relaxed font-sans">
                  {feat.description}
                </p>
              </div>

              {/* Bottom Subtle Accent Bar */}
              <div className="w-8 h-[2px] bg-[#D95D24]/30 group-hover:w-full group-hover:bg-[#D95D24] transition-all duration-300 mt-6" />
            </motion.div>
          ))}

          {/* 6th Highlight Summary Card */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-gradient-to-br from-[#D95D24] to-[#B84514] rounded-2xl p-8 text-white shadow-md flex flex-col justify-between"
          >
            <div>
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#FDE8DC] block mb-3">
                THE SANĀTANA PROMISE
              </span>
              <h3 
                className="text-2xl sm:text-3xl font-bold text-white mb-3 font-serif"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Rooted in Values. Ready for the Future.
              </h3>
              <p className="text-sm text-[#FDE8DC] leading-relaxed font-sans">
                A joyful childhood shaped by knowledge, character, curiosity, and cultural heritage.
              </p>
            </div>

            <div className="pt-6 border-t border-white/20 mt-6 flex items-center justify-between">
              <span className="text-xs font-semibold tracking-wider uppercase text-white/90">
                Join Our Family
              </span>
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white">
                →
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};





