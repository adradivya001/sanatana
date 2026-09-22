import React from 'react';
import type { FeatureHighlight } from '../../types/school';
import { DynamicIcon } from '../common/DynamicIcon';
import { motion } from 'framer-motion';
import { StaggerContainer, StaggerItem } from '../animations';

interface SchoolHighlightsProps {
  highlights: FeatureHighlight[];
}

export const SchoolHighlights: React.FC<SchoolHighlightsProps> = ({ highlights }) => {
  return (
    <section className="py-8 bg-[#FFF8F1] border-y border-[rgba(243,107,33,0.12)] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <StaggerContainer
          staggerChildren={0.06}
          delayChildren={0.05}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6"
        >
          {highlights.map((item) => (
            <StaggerItem key={item.id}>
              <motion.div
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
                className="flex items-center gap-3.5 p-3 sm:p-4 rounded-2xl bg-white/70 hover:bg-white border border-orange-200/40 shadow-xs hover:shadow-md transition-all duration-200 group cursor-default"
              >
                {/* Soft Pastel Circle Icon */}
                <motion.div
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.2 }}
                  className={`w-12 h-12 rounded-full ${item.bgColor} flex items-center justify-center shrink-0 shadow-xs transition-transform`}
                >
                  <DynamicIcon name={item.iconName} className={`w-5 h-5 ${item.iconColor}`} />
                </motion.div>

                {/* Title */}
                <span className="text-xs font-bold text-[#263238] whitespace-pre-line leading-tight group-hover:text-[#F36B21] transition-colors">
                  {item.title}
                </span>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};


