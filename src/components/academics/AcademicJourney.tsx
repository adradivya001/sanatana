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
        </div>

        {/* 4 Academic Stage Cards Grid */}
        <StaggerContainer
          staggerChildren={0.08}
          delayChildren={0.1}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {data.stages.map((stage) => (
            <StaggerItem key={stage.id}>
              <motion.div
                whileHover={{ y: -8, transition: { duration: 0.25, ease: 'easeOut' } }}
                className={`h-full rounded-3xl p-6 sm:p-7 ${stage.bgColor} border ${stage.borderColor} shadow-[0_8px_30px_rgba(217,79,22,0.06)] hover:shadow-[0_16px_36px_rgba(217,79,22,0.12)] transition-all duration-300 flex flex-col group bg-white`}
              >
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.2 }}
                  className={`w-13 h-13 rounded-2xl ${stage.iconBgColor} flex items-center justify-center mb-6 shadow-xs group-hover:scale-105 transition-transform`}
                >
                  <DynamicIcon name={stage.iconName} className={`w-7 h-7 ${stage.iconColor}`} />
                </motion.div>

                {/* Title & Subtitle */}
                <h3 className="text-lg font-bold text-slate-900 leading-tight">
                  {stage.title}
                </h3>
                <p className="text-xs font-bold text-slate-500 mb-3">
                  {stage.subtitle}
                </p>

                {/* Keywords Tagline */}
                <p className="text-[11px] font-bold text-amber-700 tracking-wide uppercase mb-3">
                  {stage.keywords}
                </p>

                {/* Description */}
                <p className="text-xs text-slate-600 leading-relaxed mb-6 font-normal">
                  {stage.description}
                </p>

                {/* CTA Link */}
                <button
                  onClick={openEnquiryModal}
                  className="mt-auto inline-flex items-center gap-1 text-xs font-bold text-[#c2410c] group-hover:text-orange-800 transition-colors text-left cursor-pointer"
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


