import React from 'react';
import { motion } from 'framer-motion';
import { FadeIn, transitions } from '../animations';

interface PageHeroBannerProps {
  title: string;
  subtitle?: string;
  description?: string;
  breadcrumb?: string;
  image?: string;
  decorativeTag?: string;
  actions?: React.ReactNode;
}

export const PageHeroBanner: React.FC<PageHeroBannerProps> = ({
  title,
  subtitle,
  description,
  breadcrumb,
  image = 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=85',
  decorativeTag,
  actions,
}) => {
  return (
    <section className="relative pt-16 pb-20 sm:pt-20 sm:pb-24 bg-gradient-to-r from-[#c2410c] via-[#ea580c] to-[#7c2d12] text-white overflow-hidden select-none">
      {/* Background Image with Overlay */}
      <motion.div
        initial={{ scale: 1.05, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.35 }}
        transition={transitions.slow}
        className="absolute inset-0 bg-cover bg-center mix-blend-overlay pointer-events-none"
        style={{ backgroundImage: `url('${image}')` }}
      />

      {/* Hero Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-2xl text-left">
            {breadcrumb && (
              <FadeIn direction="down" delay={0.05}>
                <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block mb-2">
                  {breadcrumb}
                </span>
              </FadeIn>
            )}

            <FadeIn direction="up" delay={0.1}>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading tracking-tight mb-3 leading-tight">
                {title}
              </h1>
            </FadeIn>

            {subtitle && (
              <FadeIn direction="up" delay={0.15}>
                <p className="text-sm sm:text-base text-orange-100 mb-2 leading-relaxed">
                  {subtitle}
                </p>
              </FadeIn>
            )}

            {description && (
              <FadeIn direction="up" delay={0.2}>
                <p className="text-xs sm:text-sm text-teal-200/90 leading-relaxed max-w-xl">
                  {description}
                </p>
              </FadeIn>
            )}

            {actions && (
              <FadeIn direction="up" delay={0.25} className="mt-5">
                {actions}
              </FadeIn>
            )}
          </div>

          {decorativeTag && (
            <FadeIn direction="right" delay={0.2} className="hidden lg:block shrink-0">
              <div className="font-script text-3xl sm:text-4xl text-amber-300 font-bold whitespace-pre-line text-right leading-tight">
                {decorativeTag}
              </div>
            </FadeIn>
          )}
        </div>
      </div>

      {/* Cloud Wave Bottom Divider (Exactly matching reference UI) */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none pointer-events-none z-20">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative block w-full h-10 sm:h-14 lg:h-16 text-white preserve-3d"
        >
          {/* Layered smooth organic cloud puffs */}
          <path
            d="M0,120 L1440,120 L1440,50 C1380,30 1330,65 1280,45 C1220,20 1160,55 1100,35 C1040,15 980,50 920,30 C860,10 800,45 740,25 C680,5 620,40 560,20 C500,0 440,35 380,18 C320,0 260,35 200,15 C140,-5 80,30 0,15 Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </section>
  );
};
