import React from 'react';
import type { SchoolData } from '../../types/school';
import { DynamicIcon } from '../common/DynamicIcon';
import { ArrowRight } from 'lucide-react';
import { useSchool } from '../../context/SchoolContext';
import { motion } from 'framer-motion';
import { Reveal, StaggerContainer, StaggerItem, FadeIn } from '../animations';

interface AcademicJourneyProps {
  data: SchoolData['academicJourney'];
}

export const AcademicJourney: React.FC<AcademicJourneyProps> = ({ data }) => {
  const { openEnquiryModal, setActivePage } = useSchool();

  return (
    <Reveal id="academics" className="py-12 lg:py-14 bg-[#FFF4E8] border-t border-[rgba(243,107,33,0.1)] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with View All Programmes on Right */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-3">
          <FadeIn direction="up">
            <span className="text-xs font-bold tracking-widest text-[#F36B21] uppercase block mb-2">
              {data.eyebrow}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#D94F16] font-heading tracking-tight">
              {data.heading}
            </h2>
          </FadeIn>

          <FadeIn direction="up" delay={0.1}>
            <button
              onClick={() => setActivePage('academics')}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#D94F16] hover:text-[#F36B21] transition-colors group self-start sm:self-auto cursor-pointer"
            >
              <span>{data.viewAllText}</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform" />
            </button>
          </FadeIn>
        </div>        {/* 5 Distinct Stage Cards */}
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {data.stages.map((stage) => (
            <StaggerItem key={stage.id} className="h-full">
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="group relative flex flex-col h-full bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-xl hover:border-amber-200 transition-all duration-300"
              >
                {/* Stage Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 border border-amber-100/80 flex items-center justify-center mb-5 group-hover:bg-[#D94F16] group-hover:text-white transition-colors duration-300 shadow-sm"
                >
                  <DynamicIcon name={stage.iconName} className="w-6 h-6" />
                </motion.div>

                {/* Title & Subtitle */}
                <h3 className="text-base font-bold text-slate-900 leading-snug">
                  {stage.title}
                </h3>
                <p className="text-xs font-semibold text-slate-500 mb-2.5">
                  {stage.subtitle}
                </p>

                {/* Keywords Tagline */}
                <p className="text-[10px] font-bold text-[#D94F16] tracking-wide uppercase mb-3">
                  {stage.keywords}
                </p>

                {/* Description */}
                <p className="text-xs text-slate-600 leading-relaxed mb-5 font-normal flex-1">
                  {stage.description}
                </p>

                {/* CTA Link */}
                <button
                  onClick={openEnquiryModal}
                  className="mt-auto inline-flex items-center gap-1.5 text-xs font-bold text-[#D94F16] hover:text-[#F36B21] transition-colors text-left cursor-pointer pt-2 border-t border-slate-100"
                >
                  <span>{stage.linkText}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform" />
                </button>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

      </div>
    </Reveal>
  );
};


