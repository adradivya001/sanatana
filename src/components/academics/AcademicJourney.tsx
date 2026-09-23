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

        {/* 5 Distinct Stage Cards matching reference image layout */}
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-5 items-stretch">
          {data.stages.map((stage) => (
            <StaggerItem key={stage.id} className="h-full">
              <motion.div
                whileHover={{ y: -6, boxShadow: "0 20px 35px -10px rgba(0,0,0,0.07)" }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="group relative flex flex-col h-full bg-white rounded-[1.75rem] p-6 shadow-sm border border-orange-100/50 hover:border-orange-200 transition-all duration-300"
              >
                {/* Pastel Rounded Square Stage Icon */}
                <div
                  className={`w-12 h-12 rounded-2xl ${stage.bgColor} ${stage.iconColor} flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-105`}
                >
                  <DynamicIcon name={stage.iconName} className="w-5 h-5 stroke-[2.2]" />
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-[17px] font-extrabold text-[#1E293B] leading-tight mb-0.5 font-heading">
                  {stage.title}
                </h3>
                <p className="text-[11px] font-semibold text-[#64748B] mb-3">
                  {stage.subtitle}
                </p>

                {/* Tagline / Keywords in burnt orange */}
                <p className="text-[10px] font-extrabold text-[#C2410C] tracking-wide uppercase mb-3">
                  {stage.keywords}
                </p>

                {/* Description */}
                <p className="text-[12px] text-[#475569] leading-[1.65] mb-6 font-normal flex-1">
                  {stage.description}
                </p>

                {/* Clean Learn More Link */}
                <button
                  onClick={openEnquiryModal}
                  className="mt-auto inline-flex items-center gap-1.5 text-xs font-bold text-[#C2410C] hover:text-[#EA580C] transition-colors text-left cursor-pointer pt-2 group/btn"
                >
                  <span>{stage.linkText}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1.5 transition-transform" />
                </button>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

      </div>
    </Reveal>
  );
};


