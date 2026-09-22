import React from 'react';
import type { SchoolData } from '../../types/school';
import { DynamicIcon } from '../common/DynamicIcon';
import { motion } from 'framer-motion';
import { Reveal, StaggerContainer, StaggerItem, FadeIn, CountUp } from '../animations';

interface AchievementStatsProps {
  data: SchoolData['achievements'];
}

export const AchievementStats: React.FC<AchievementStatsProps> = ({ data }) => {
  return (
    <Reveal className="relative py-12 lg:py-14 bg-[#093c3c] text-white overflow-hidden">
      {/* Background students silhouette / pattern overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-15 mix-blend-luminosity"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=1600&q=80')`
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#093c3c] via-[#093c3c]/90 to-[#093c3c]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left: Heading & Description */}
          <FadeIn direction="left" className="lg:col-span-4 flex flex-col items-start text-left">
            <span className="text-xs font-bold tracking-widest text-amber-400 uppercase mb-2">
              {data.eyebrow}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading tracking-tight mb-3">
              {data.heading}
            </h2>
            <p className="text-sm text-orange-100/80 leading-relaxed font-normal">
              {data.description}
            </p>
          </FadeIn>

          {/* Right: 4 Clean White Statistic Cards with CountUp animations */}
          <div className="lg:col-span-8">
            <StaggerContainer
              staggerChildren={0.08}
              delayChildren={0.1}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6"
            >
              {data.stats.map((stat) => (
                <StaggerItem key={stat.id}>
                  <motion.div
                    whileHover={{ y: -5, scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                    className="bg-white rounded-2xl p-6 sm:p-7 flex flex-col items-center text-center shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-default"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                      className="w-10 h-10 rounded-full bg-orange-50 text-teal-900 flex items-center justify-center mb-3"
                    >
                      <DynamicIcon name={stat.iconName} className="w-5 h-5 text-amber-600" />
                    </motion.div>
                    <span className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight font-heading">
                      <CountUp value={stat.value} duration={1.6} />
                    </span>
                    <span className="text-xs font-bold text-slate-600 mt-1">
                      {stat.label}
                    </span>
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


