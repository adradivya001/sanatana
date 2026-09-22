import React from 'react';
import type { SchoolData } from '../../types/school';
import { useSchool } from '../../context/SchoolContext';
import { ArrowRight, Leaf } from 'lucide-react';
import { motion } from 'framer-motion';
import { Reveal, ScaleIn, FadeIn } from '../animations';

interface AdmissionCTAProps {
  data: SchoolData['admissionCTA'];
}

export const AdmissionCTA: React.FC<AdmissionCTAProps> = ({ data }) => {
  const { openEnquiryModal } = useSchool();

  return (
    <Reveal id="admissions" className="py-12 lg:py-16 bg-[#FFF0E3] relative overflow-hidden border-t border-[rgba(243,107,33,0.1)]">
      {/* Decorative leafy illustrations with slow, subtle rotation (2deg) */}
      <motion.div
        animate={{ rotate: [-45, -43, -45], y: [0, -5, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -left-10 top-1/2 -translate-y-1/2 text-[#F36B21]/10 pointer-events-none select-none"
      >
        <Leaf className="w-48 h-48" />
      </motion.div>
      <motion.div
        animate={{ rotate: [45, 47, 45], y: [0, 5, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -right-10 top-1/2 -translate-y-1/2 text-[#F36B21]/10 pointer-events-none select-none"
      >
        <Leaf className="w-48 h-48" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center text-center">
          
          {/* Left Script Decoration: "Their Dreams Start Here" */}
          <div className="hidden lg:flex lg:col-span-3 justify-center">
            <FadeIn direction="left" delay={0.1}>
              <span className="font-script text-3xl sm:text-4xl text-[#D94F16] font-bold leading-tight select-none rotate-[-4deg] inline-block opacity-90">
                {data.decorativeLeftText}
              </span>
            </FadeIn>
          </div>

          {/* Center Call to Action */}
          <div className="lg:col-span-6 flex flex-col items-center">
            <ScaleIn duration={0.6}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#D94F16] font-heading tracking-tight mb-3">
                {data.heading}
              </h2>
              <p className="text-sm sm:text-base text-[#5F6368] mb-8 max-w-lg font-normal">
                {data.description}
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={openEnquiryModal}
                  className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-[#F36B21] to-[#D94F16] hover:from-[#D94F16] hover:to-[#c2410c] text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-orange-600/25 transition-all flex items-center justify-center gap-2 group cursor-pointer"
                >
                  <span>{data.primaryBtnText}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={openEnquiryModal}
                  className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-white hover:bg-orange-50/50 text-[#263238] font-bold text-xs sm:text-sm border border-orange-200/60 shadow-xs transition-all cursor-pointer"
                >
                  {data.secondaryBtnText}
                </motion.button>
              </div>
            </ScaleIn>
          </div>

          {/* Right Script Decoration: "Learn Grow Belong" */}
          <div className="hidden lg:flex lg:col-span-3 justify-center">
            <FadeIn direction="right" delay={0.1}>
              <span className="font-script text-3xl sm:text-4xl text-[#D94F16] font-bold leading-tight select-none rotate-[4deg] inline-block opacity-90">
                {data.decorativeRightText}
              </span>
            </FadeIn>
          </div>

        </div>
      </div>
    </Reveal>
  );
};


