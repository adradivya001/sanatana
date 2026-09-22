import React from 'react';
import { motion } from 'framer-motion';
import { FadeIn, transitions } from '../animations';
import { CloudDivider } from '../common/CloudDivider';

export interface PageHeroProps {
  title: string;
  backgroundImage: string;
  overlayOpacity?: number;
  className?: string;
}

export const PageHero: React.FC<PageHeroProps> = ({
  title,
  backgroundImage,
  overlayOpacity = 0.18,
  className = '',
}) => {
  return (
    <section
      className={`relative w-full h-[260px] sm:h-[320px] md:h-[380px] lg:h-[420px] overflow-hidden select-none bg-slate-900 ${className}`}
    >
      {/* 1. Full-width Photographic Hero Background Image - Crystal Clear */}
      <motion.div
        initial={{ scale: 1.03, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={transitions.slow}
        className="absolute inset-0 bg-cover bg-center pointer-events-none"
        style={{
          backgroundImage: `url('${backgroundImage}')`,
          backgroundPosition: 'center center',
          backgroundSize: 'cover',
        }}
      />

      {/* 2. Very subtle soft gradient overlay so photo remains completely clear and bright */}
      <div
        className="absolute inset-0 pointer-events-none z-10 bg-gradient-to-t from-black/60 via-black/20 to-black/10"
        style={{ opacity: overlayOpacity > 0.3 ? 0.25 : overlayOpacity }}
      />

      {/* 3. Centered Large Bold Title with subtle text shadow for high legibility */}
      <div className="relative z-10 w-full h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center">
        <FadeIn direction="up" delay={0.1}>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-extrabold text-white font-heading tracking-tight drop-shadow-[0_3px_10px_rgba(0,0,0,0.7)] leading-tight">
            {title}
          </h1>
          <div className="w-16 sm:w-20 h-1 bg-[#ea580c] mx-auto rounded-full mt-3 shadow-md" />
        </FadeIn>
      </div>

      {/* 4. Subtle sleek bottom gradient transition instead of huge blocking clouds */}
      <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-white to-transparent pointer-events-none z-20" />
    </section>
  );
};

