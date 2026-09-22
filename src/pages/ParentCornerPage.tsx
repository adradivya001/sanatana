import React from 'react';
import type { ParentCornerPageData } from '../types/school';
import { useSchool } from '../context/SchoolContext';
import { DynamicIcon } from '../components/common/DynamicIcon';
import { TopBar } from '../components/layout/TopBar';
import { AdmissionTicker } from '../components/layout/AdmissionTicker';
import { Navbar } from '../components/layout/Navbar';
import { PageHero } from '../components/layout/PageHero';
import { Footer } from '../components/layout/Footer';
import { motion } from 'framer-motion';
import { 
  FadeIn, 
  Reveal, 
  StaggerContainer, 
  StaggerItem, 
  ScaleIn, 
  ParallaxImage,
  transitions 
} from '../components/animations';

interface ParentCornerPageProps {
  data: ParentCornerPageData;
}

export const ParentCornerPage: React.FC<ParentCornerPageProps> = ({ data }) => {
  const { schoolData, openEnquiryModal } = useSchool();

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={transitions.smooth}
      className="flex flex-col min-h-screen bg-white"
    >
      <TopBar data={schoolData.topBar} />
      <AdmissionTicker />
      <Navbar schoolName={schoolData.name} tagline={schoolData.tagline} navItems={schoolData.navigation} />

      {/* 1. Page Hero with Organic White Cloud Bottom Transition */}
      <PageHero
        title="Parent Corner"
        backgroundImage={data.hero.image}
      />

      {/* 2. Unique Bento-Grid & Interactive Parent Hub */}
      <Reveal className="py-14 sm:py-18 bg-gradient-to-b from-white via-teal-50/20 to-slate-50 relative overflow-hidden">
        {/* Subtle decorative background mesh glows */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-orange-100/40 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-amber-100/40 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Header with Live Status Capsule */}
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12">
            <FadeIn direction="up">
              <div className="inline-flex items-center gap-2 bg-teal-900/5 border border-teal-900/10 px-4 py-1.5 rounded-full mb-3 shadow-xs">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#c2410c]">
                  Sanatana Parent Central • Active 2026-27
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#c2410c] font-heading tracking-tight mb-3">
                Parent Resources &amp; Digital Hub
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto leading-relaxed">
                A unified, streamlined dashboard connecting families to daily classroom reports, academic timetables, attendance, and administrative services.
              </p>
            </FadeIn>
          </div>

          {/* Unique Bento Interactive Cards Grid */}
          <StaggerContainer staggerDelay={0.06} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {data.portalCards.map((card, idx) => {
              // Highlight the first 2 primary cards with a distinctive accent header
              const isFeature = idx === 0 || idx === 1;

              return (
                <StaggerItem key={card.id}>
                  <motion.div
                    whileHover={{ y: -8, scale: 1.02 }}
                    transition={transitions.smooth}
                    onClick={openEnquiryModal}
                    className={`group relative rounded-3xl p-6 border transition-all duration-300 flex flex-col justify-between cursor-pointer h-full overflow-hidden ${
                      isFeature 
                        ? 'bg-gradient-to-b from-white to-teal-50/40 border-orange-200/90 shadow-md hover:shadow-2xl hover:border-[#c2410c]/40' 
                        : 'bg-white border-slate-200/90 shadow-xs hover:shadow-xl hover:border-teal-300/80'
                    }`}
                  >
                    {/* Top Animated Corner Gradient Line */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-500 via-amber-400 to-teal-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <div>
                      {/* Top Action Row: Soft Floating 3D-Like Icon & Live Status Badge */}
                      <div className="flex items-center justify-between mb-5">
                        <motion.div
                          whileHover={{ rotate: [0, -8, 8, 0], scale: 1.12 }}
                          transition={transitions.fast}
                          className={`w-13 h-13 rounded-2xl ${card.bgColor} flex items-center justify-center shadow-xs group-hover:shadow-md transition-all duration-300 relative`}
                        >
                          <DynamicIcon name={card.iconName} className={`w-6 h-6 ${card.iconColor}`} />
                        </motion.div>

                        <span className="text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full bg-slate-100 group-hover:bg-[#c2410c] text-slate-500 group-hover:text-white transition-all duration-300">
                          {isFeature ? '★ Direct Access' : 'Available'}
                        </span>
                      </div>

                      {/* Title & Description */}
                      <h3 className="text-base font-extrabold text-slate-900 font-heading mb-2 group-hover:text-[#c2410c] transition-colors flex items-center gap-1.5">
                        <span>{card.title}</span>
                      </h3>
                      <p className="text-xs text-slate-500 leading-relaxed">
                        {card.description}
                      </p>
                    </div>

                    {/* Bottom Action Footer */}
                    <div className="mt-6 pt-3.5 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-[11px] font-bold text-slate-400 group-hover:text-[#c2410c] transition-colors">
                        Launch Service
                      </span>
                      <motion.div
                        whileHover={{ x: 4 }}
                        className="w-7 h-7 rounded-full bg-orange-50 group-hover:bg-amber-400 flex items-center justify-center text-orange-800 group-hover:text-slate-950 transition-colors shadow-2xs font-bold text-xs"
                      >
                        →
                      </motion.div>
                    </div>
                  </motion.div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>

          {/* Bottom Quick Help Info Banner */}
          <FadeIn direction="up" delay={0.2} className="mt-10">
            <div className="bg-gradient-to-r from-[#9a3412] to-[#c2410c] rounded-2xl p-4 sm:p-5 text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg border border-orange-800/40">
              <div className="flex items-center gap-3 text-center sm:text-left">
                <div className="w-10 h-10 rounded-xl bg-amber-400 text-slate-950 flex items-center justify-center font-bold shrink-0 shadow-sm">
                  💬
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold font-heading">Need help logging into the Parent Portal?</h4>
                  <p className="text-[11px] text-orange-100/70">Our school helpdesk is available from 8:30 AM to 4:30 PM on all working days.</p>
                </div>
              </div>
              <button
                onClick={openEnquiryModal}
                className="px-5 py-2 rounded-full bg-amber-400 hover:bg-amber-500 text-slate-950 font-bold text-xs shadow-xs cursor-pointer transition-colors whitespace-nowrap shrink-0"
              >
                Contact Helpdesk
              </button>
            </div>
          </FadeIn>

        </div>
      </Reveal>

      {/* 3. Stay Connected Login CTA */}
      <Reveal className="py-10 sm:py-12 bg-[#093c3c] text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <ScaleIn>
            <h3 className="text-xl sm:text-2xl font-bold font-heading mb-4">{data.cta.heading}</h3>
            <div className="flex flex-wrap items-center justify-center gap-3.5">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={openEnquiryModal}
                className="px-5 py-2.5 rounded-full bg-amber-400 hover:bg-amber-500 text-slate-950 font-bold text-xs shadow-md cursor-pointer transition-colors"
              >
                {data.cta.primaryBtn}
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={openEnquiryModal}
                className="px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-xs cursor-pointer transition-colors backdrop-blur-xs"
              >
                {data.cta.secondaryBtn}
              </motion.button>
            </div>
          </ScaleIn>
        </div>
      </Reveal>

      {/* Footer */}
      <Footer schoolName={schoolData.name} tagline={schoolData.tagline} footer={schoolData.footer} />
    </motion.div>
  );
};
