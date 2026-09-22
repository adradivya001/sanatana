import React from 'react';
import type { SchoolData } from '../../types/school';
import { DynamicIcon } from '../common/DynamicIcon';
import { Play, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { FadeIn, Reveal, StaggerContainer, StaggerItem, ParallaxImage } from '../animations';

interface AboutSchoolProps {
  about: SchoolData['about'];
}

export const AboutSchool: React.FC<AboutSchoolProps> = ({ about }) => {
  return (
    <Reveal id="about" className="py-12 lg:py-16 bg-[#FFF4E8] overflow-hidden border-t border-[rgba(243,107,33,0.08)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Campus Image with Video Play Badge & Script Tag */}
          <FadeIn direction="left" className="lg:col-span-6 relative">
            {/* Handwritten Script Header on image */}
            <div className="absolute top-6 left-6 z-20 font-script text-white text-2xl font-bold drop-shadow-md select-none">
              <span className="whitespace-pre-line leading-none">
                {about.handwrittenTag}
              </span>
            </div>

            {/* Campus Image Frame */}
            <div className="relative rounded-[2rem] overflow-hidden shadow-xl border-4 border-white bg-white h-[380px] sm:h-[440px] group">
              <ParallaxImage
                src={about.image}
                alt="School Campus"
                className="w-full h-full"
                imageClassName="group-hover:scale-103 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

              {/* Center Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-16 h-16 rounded-full bg-white/90 backdrop-blur-md text-[#D94F16] flex items-center justify-center shadow-2xl cursor-pointer"
                >
                  <Play className="w-7 h-7 fill-[#D94F16] ml-1" />
                </motion.div>
              </div>

              {/* Bottom Label Strip */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs font-bold bg-black/40 backdrop-blur-md px-5 py-2.5 rounded-xl border border-white/20">
                <span>{about.videoBadgeText}</span>
                <span className="w-10 h-1 bg-amber-400 rounded-full"></span>
              </div>
            </div>
          </FadeIn>

          {/* Right Column: Heading, Description, and Strengths */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <FadeIn direction="up" delay={0.05}>
              <div className="inline-block bg-gradient-to-r from-[#F36B21] to-[#D94F16] text-white text-xs sm:text-sm font-extrabold uppercase tracking-wider px-4 py-1.5 rounded-full shadow-md mb-3">
                {about.welcomeIntro?.badgeTitle || "Welcome To Santana School"}
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={0.1}>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#D94F16] font-heading tracking-tight leading-tight mb-4">
                Blending Vedic Culture with Modern Methodologies
              </h2>
            </FadeIn>

            <FadeIn direction="up" delay={0.15}>
              <div className="space-y-3 text-xs sm:text-sm text-[#5F6368] leading-relaxed font-normal mb-6">
                {about.welcomeIntro?.paragraphs ? (
                  about.welcomeIntro.paragraphs.map((p, idx) => (
                    <p key={idx} className={idx === 0 ? "font-medium text-[#263238]" : "text-[#5F6368]"}>
                      {p}
                    </p>
                  ))
                ) : (
                  <p>{about.description}</p>
                )}
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={0.2}>
              <a
                href="#academics"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#D94F16] hover:text-[#F36B21] transition-colors mb-6 group cursor-pointer"
              >
                <span className="underline decoration-[#D94F16]/40 underline-offset-4">{about.ctaText}</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </a>
            </FadeIn>

            {/* Vertical 2-Column List of School Strengths */}
            <StaggerContainer
              staggerChildren={0.06}
              delayChildren={0.2}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 w-full pt-4 border-t border-orange-200/40"
            >
              {about.strengths.map((s) => (
                <StaggerItem key={s.id}>
                  <motion.div
                    whileHover={{ x: 3 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-center gap-3 p-2 rounded-xl bg-white/70 hover:bg-white border border-orange-200/30 transition-all shadow-2xs cursor-default"
                  >
                    <div className={`w-8 h-8 rounded-full ${s.bgColor} flex items-center justify-center shrink-0 shadow-2xs`}>
                      <DynamicIcon name={s.iconName} className={`w-4 h-4 ${s.iconColor}`} />
                    </div>
                    <span className="text-xs font-bold text-[#263238]">
                      {s.title}
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


