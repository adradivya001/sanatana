import React from 'react';
import type { SchoolData } from '../../types/school';
import { DynamicIcon } from '../common/DynamicIcon';
import { ArrowRight } from 'lucide-react';
import { useSchool } from '../../context/SchoolContext';
import { motion } from 'framer-motion';
import { Reveal, StaggerContainer, StaggerItem, FadeIn } from '../animations';

interface BeyondAcademicsProps {
  data: SchoolData['beyondAcademics'];
}

export const BeyondAcademics: React.FC<BeyondAcademicsProps> = ({ data }) => {
  const { setActivePage } = useSchool();

  return (
    <Reveal id="beyond-academics" className="py-12 lg:py-14 bg-[#FFF9F4] border-t border-[rgba(243,107,33,0.08)] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: Heading, Description & CTA button */}
          <FadeIn direction="left" className="lg:col-span-5 flex flex-col items-start">
            <span className="text-xs font-bold tracking-widest text-[#F36B21] uppercase mb-2">
              {data.eyebrow}
            </span>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#D94F16] font-heading tracking-tight mb-4">
              {data.heading}
            </h2>

            <p className="text-sm sm:text-base text-[#5F6368] leading-relaxed mb-6 font-normal">
              {data.description}
            </p>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setActivePage('beyond-classrooms')}
              className="px-7 py-3 rounded-full bg-gradient-to-r from-[#F36B21] to-[#D94F16] hover:from-[#D94F16] hover:to-[#c2410c] text-white font-bold text-xs shadow-md hover:shadow-orange-600/25 transition-all flex items-center gap-2 group cursor-pointer"
            >
              <span>{data.ctaText}</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform text-amber-200" />
            </motion.button>
          </FadeIn>

          {/* Right Column: 6 Large Circular Activity Icons in Grid/Horizontal Row */}
          <div className="lg:col-span-7">
            <StaggerContainer
              staggerChildren={0.06}
              delayChildren={0.1}
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6"
            >
              {data.activities.map((act) => (
                <StaggerItem key={act.id}>
                  <div
                    onClick={() => setActivePage('beyond-classrooms')}
                    className="flex flex-col items-center text-center group cursor-pointer"
                  >
                    <motion.div
                      whileHover={{ scale: 1.08, y: -4 }}
                      transition={{ duration: 0.2 }}
                      className={`w-16 h-16 sm:w-18 sm:h-18 rounded-full ${act.bgColor} flex items-center justify-center shadow-xs group-hover:shadow-md transition-shadow mb-3`}
                    >
                      <DynamicIcon name={act.iconName} className={`w-7 h-7 sm:w-8 sm:h-8 ${act.iconColor}`} />
                    </motion.div>
                    <span className="text-xs font-bold text-slate-800 whitespace-pre-line leading-tight group-hover:text-[#c2410c] transition-colors">
                      {act.title}
                    </span>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

        </div>
      </div>
    </Reveal>
  );
};


