import React from 'react';
import { motion } from 'framer-motion';
import { FadeIn, Reveal, StaggerContainer, StaggerItem } from '../animations';
import { Sparkles, CheckCircle2 } from 'lucide-react';

interface WhatSetsUsApartProps {
  data?: {
    badgeTitle: string;
    image: string;
    leftPoints: string[];
    rightPoints: string[];
  };
}

export const WhatSetsUsApart: React.FC<WhatSetsUsApartProps> = ({ data }) => {
  if (!data) return null;

  return (
    <Reveal className="py-12 sm:py-16 bg-[#FFF8F1] overflow-hidden border-t border-[rgba(243,107,33,0.1)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header Badge */}
        <div className="text-center mb-10 sm:mb-12">
          <FadeIn direction="up">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#F36B21] to-[#D94F16] text-white font-extrabold text-sm sm:text-base uppercase tracking-wider px-8 py-2.5 rounded-full shadow-lg">
              <Sparkles className="w-4 h-4 text-amber-200 animate-pulse" />
              <span>{data.badgeTitle}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#D94F16] font-heading mt-4">
              Nurturing Young Minds with Care & Excellence
            </h2>
            <div className="w-16 h-1 bg-[#F36B21] mx-auto rounded-full mt-2" />
          </FadeIn>
        </div>

        {/* 3-Column Layout: Left Capsules - Center Visual Illustration - Right Capsules */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Feature Capsules */}
          <div className="lg:col-span-4 flex flex-col gap-4 order-2 lg:order-1">
            <StaggerContainer staggerChildren={0.1}>
              {data.leftPoints.map((pt, idx) => (
                <StaggerItem key={idx}>
                  <motion.div
                    whileHover={{ scale: 1.03, x: 4 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    className="flex items-center gap-3 bg-gradient-to-r from-amber-400 via-amber-400 to-amber-500 text-slate-900 font-bold text-xs sm:text-sm px-5 py-3.5 rounded-full shadow-md hover:shadow-lg border border-amber-300 cursor-default"
                  >
                    <div className="w-6 h-6 rounded-full bg-white/40 flex items-center justify-center shrink-0 text-amber-950">
                      <CheckCircle2 className="w-4 h-4 text-slate-900" />
                    </div>
                    <span className="leading-snug">{pt}</span>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

          {/* Center Illustration Frame with Floating Badges */}
          <div className="lg:col-span-4 flex justify-center order-1 lg:order-2">
            <FadeIn direction="up" className="relative w-full max-w-sm sm:max-w-md">
              {/* Soft decorative background aura */}
              <div className="absolute inset-0 bg-gradient-to-tr from-amber-200/40 via-sky-200/30 to-purple-200/40 rounded-full blur-2xl transform scale-95 pointer-events-none" />
              
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white aspect-square flex items-center justify-center p-2 group">
                <img
                  src={data.image}
                  alt="Child learning creatively"
                  className="w-full h-full object-contain rounded-2xl group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </FadeIn>
          </div>

          {/* Right Feature Capsules */}
          <div className="lg:col-span-4 flex flex-col gap-4 order-3">
            <StaggerContainer staggerChildren={0.1} delayChildren={0.2}>
              {data.rightPoints.map((pt, idx) => (
                <StaggerItem key={idx}>
                  <motion.div
                    whileHover={{ scale: 1.03, x: -4 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    className="flex items-center gap-3 bg-gradient-to-r from-amber-400 via-amber-400 to-amber-500 text-slate-900 font-bold text-xs sm:text-sm px-5 py-3.5 rounded-full shadow-md hover:shadow-lg border border-amber-300 cursor-default"
                  >
                    <div className="w-6 h-6 rounded-full bg-white/40 flex items-center justify-center shrink-0 text-amber-950">
                      <CheckCircle2 className="w-4 h-4 text-slate-900" />
                    </div>
                    <span className="leading-snug">{pt}</span>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

        </div>

      </div>
    </Reveal>
  );
};
