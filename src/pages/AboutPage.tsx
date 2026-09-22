import React, { useState } from 'react';
import type { AboutPageData } from '../types/school';
import { useSchool } from '../context/SchoolContext';
import { DynamicIcon } from '../components/common/DynamicIcon';
import { TopBar } from '../components/layout/TopBar';
import { AdmissionTicker } from '../components/layout/AdmissionTicker';
import { Navbar } from '../components/layout/Navbar';
import { PageHero } from '../components/layout/PageHero';
import { Footer } from '../components/layout/Footer';
import { ArrowRight, Quote, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { FadeIn, Reveal, StaggerContainer, StaggerItem, ScaleIn, ParallaxImage } from '../components/animations';

interface AboutPageProps {
  data: AboutPageData;
}

export const AboutPage: React.FC<AboutPageProps> = ({ data }) => {
  const { schoolData, openEnquiryModal } = useSchool();
  // State for collapsible about info sections (all open by default or collapsible)
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    vision: true,
    principles: false,
    promise: false,
    advantages: false,
    whySanatana: false,
    weAlsoAimTo: false,
    safetyAndSecurity: false,
  });

  const toggleSection = (key: string) => {
    setOpenSections((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <TopBar data={schoolData.topBar} />
      <AdmissionTicker />
      <Navbar schoolName={schoolData.name} tagline={schoolData.tagline} navItems={schoolData.navigation} />

      {/* 1. Page Hero with Organic White Cloud Bottom Transition */}
      <PageHero
        title="About us"
        backgroundImage={data.hero.image}
      />

      {/* 2. Our Purpose */}
      <Reveal className="py-10 sm:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <FadeIn direction="left" className="lg:col-span-6">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#c2410c] font-heading mb-3">
                {data.purpose.heading}
              </h2>
              <div className="space-y-3 text-slate-600 leading-relaxed text-xs sm:text-sm mb-5">
                {data.purpose.paragraphs ? (
                  data.purpose.paragraphs.map((p, idx) => (
                    <p key={idx} className={idx === 0 ? "font-medium text-slate-800" : ""}>
                      {p}
                    </p>
                  ))
                ) : (
                  <p>{data.purpose.description}</p>
                )}
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={openEnquiryModal}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#c2410c] text-white font-bold text-xs shadow-md hover:bg-[#9a3412] transition-all cursor-pointer"
              >
                <span>{data.purpose.ctaText}</span>
                <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
              </motion.button>
            </FadeIn>
            <FadeIn direction="right" className="lg:col-span-6">
              <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-white h-[280px] sm:h-[340px] group">
                <ParallaxImage src={data.purpose.image} alt="Our Purpose" className="w-full h-full" />
              </div>
            </FadeIn>
          </div>
        </div>
      </Reveal>

      {/* 3. Detailed Institutional Overview (Clean Expandable Accordion Matching Reference) */}
      <Reveal className="py-12 sm:py-16 bg-white border-y border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-700 bg-amber-50 px-3.5 py-1 rounded-full inline-block mb-2">
              Discover Sanatana
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#c2410c] font-heading">
              Our Vision, Principles &amp; Standards
            </h3>
            <p className="text-slate-500 text-xs sm:text-sm mt-1">
              Click on each section to explore our educational philosophy, guarantees, and standards.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs divide-y divide-slate-100 overflow-hidden">
            
            {/* 1. Vision & Mission Accordion */}
            <div className="transition-colors hover:bg-slate-50/40">
              <button
                onClick={() => toggleSection('vision')}
                className="w-full flex items-center justify-between p-5 sm:p-6 text-left cursor-pointer transition-colors group"
              >
                <span className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-[#c2410c] transition-colors">
                  {data.visionMissionValues.badgeTitle || "Vision & Mission"}
                </span>
                <motion.div
                  animate={{ rotate: openSections.vision ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="shrink-0 text-slate-400 group-hover:text-[#c2410c]"
                >
                  <ChevronDown className="w-5 h-5" />
                </motion.div>
              </button>
              <AnimatePresence initial={false}>
                {openSections.vision && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-6 sm:px-6 sm:pb-7 pt-1 text-xs sm:text-sm text-slate-600 space-y-3 leading-relaxed border-t border-slate-100/60">
                      {data.visionMissionValues.paragraphs ? (
                        data.visionMissionValues.paragraphs.map((para, pIdx) => (
                          <p key={pIdx} className="leading-relaxed">
                            {para}
                          </p>
                        ))
                      ) : (
                        <p>{data.visionMissionValues.mission.description}</p>
                      )}

                      {data.visionMissionValues.admissionNote && (
                        <div className="p-3.5 bg-amber-50/60 rounded-xl border border-amber-100 mt-4">
                          <h6 className="font-bold text-slate-900 text-xs sm:text-sm mb-0.5">
                            {data.visionMissionValues.admissionNote.title}
                          </h6>
                          <p className="text-xs text-slate-600">
                            {data.visionMissionValues.admissionNote.text}
                          </p>
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* 2. Our Principles Accordion */}
            {data.principles && (
              <div className="transition-colors hover:bg-slate-50/40">
                <button
                  onClick={() => toggleSection('principles')}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left cursor-pointer transition-colors group"
                >
                  <span className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-[#c2410c] transition-colors">
                    {data.principles.badgeTitle}
                  </span>
                  <motion.div
                    animate={{ rotate: openSections.principles ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="shrink-0 text-slate-400 group-hover:text-[#c2410c]"
                  >
                    <ChevronDown className="w-5 h-5" />
                  </motion.div>
                </button>
                <AnimatePresence initial={false}>
                  {openSections.principles && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-6 sm:px-6 sm:pb-7 pt-1 text-xs sm:text-sm text-slate-600 border-t border-slate-100/60">
                        <ol className="space-y-2.5 list-decimal list-inside leading-relaxed">
                          {data.principles.list.map((item, idx) => (
                            <li key={idx} className="text-slate-700">
                              <span className="font-medium text-slate-800">{item}</span>
                            </li>
                          ))}
                        </ol>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )}

            {/* 3. Our Promise Accordion */}
            {data.promise && (
              <div className="transition-colors hover:bg-slate-50/40">
                <button
                  onClick={() => toggleSection('promise')}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left cursor-pointer transition-colors group"
                >
                  <span className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-[#c2410c] transition-colors">
                    {data.promise.badgeTitle}
                  </span>
                  <motion.div
                    animate={{ rotate: openSections.promise ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="shrink-0 text-slate-400 group-hover:text-[#c2410c]"
                  >
                    <ChevronDown className="w-5 h-5" />
                  </motion.div>
                </button>
                <AnimatePresence initial={false}>
                  {openSections.promise && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-6 sm:px-6 sm:pb-7 pt-1 text-xs sm:text-sm text-slate-600 border-t border-slate-100/60">
                        <p className="font-semibold text-slate-800 mb-3">{data.promise.intro}</p>
                        <ol className="space-y-2.5 list-decimal list-inside leading-relaxed">
                          {data.promise.list.map((item, idx) => (
                            <li key={idx} className="text-slate-700">
                              <span className="font-medium text-slate-800">{item}</span>
                            </li>
                          ))}
                        </ol>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )}

            {/* 4. Advantages With Sanatana Schools Accordion */}
            {data.advantages && (
              <div className="transition-colors hover:bg-slate-50/40">
                <button
                  onClick={() => toggleSection('advantages')}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left cursor-pointer transition-colors group"
                >
                  <span className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-[#c2410c] transition-colors">
                    {data.advantages.badgeTitle}
                  </span>
                  <motion.div
                    animate={{ rotate: openSections.advantages ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="shrink-0 text-slate-400 group-hover:text-[#c2410c]"
                  >
                    <ChevronDown className="w-5 h-5" />
                  </motion.div>
                </button>
                <AnimatePresence initial={false}>
                  {openSections.advantages && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-6 sm:px-6 sm:pb-7 pt-1 text-xs sm:text-sm text-slate-600 border-t border-slate-100/60">
                        <ol className="space-y-2.5 list-decimal list-inside leading-relaxed">
                          {data.advantages.list.map((item, idx) => (
                            <li key={idx} className="text-slate-700">
                              <span className="font-medium text-slate-800">{item}</span>
                            </li>
                          ))}
                        </ol>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )}

            {/* 5. Why Sanatana? Accordion */}
            {data.whySanatana && (
              <div className="transition-colors hover:bg-slate-50/40">
                <button
                  onClick={() => toggleSection('whySanatana')}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left cursor-pointer transition-colors group"
                >
                  <span className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-[#c2410c] transition-colors">
                    {data.whySanatana.badgeTitle}
                  </span>
                  <motion.div
                    animate={{ rotate: openSections.whySanatana ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="shrink-0 text-slate-400 group-hover:text-[#c2410c]"
                  >
                    <ChevronDown className="w-5 h-5" />
                  </motion.div>
                </button>
                <AnimatePresence initial={false}>
                  {openSections.whySanatana && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-6 sm:px-6 sm:pb-7 pt-1 text-xs sm:text-sm text-slate-600 space-y-3 leading-relaxed border-t border-slate-100/60">
                        {data.whySanatana.paragraphs.map((p, idx) => (
                          <p key={idx} className="leading-relaxed">
                            {p}
                          </p>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )}

            {/* 6. We Also Aim To Accordion */}
            {data.weAlsoAimTo && (
              <div className="transition-colors hover:bg-slate-50/40">
                <button
                  onClick={() => toggleSection('weAlsoAimTo')}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left cursor-pointer transition-colors group"
                >
                  <span className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-[#c2410c] transition-colors">
                    {data.weAlsoAimTo.badgeTitle}
                  </span>
                  <motion.div
                    animate={{ rotate: openSections.weAlsoAimTo ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="shrink-0 text-slate-400 group-hover:text-[#c2410c]"
                  >
                    <ChevronDown className="w-5 h-5" />
                  </motion.div>
                </button>
                <AnimatePresence initial={false}>
                  {openSections.weAlsoAimTo && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-6 sm:px-6 sm:pb-7 pt-1 text-xs sm:text-sm text-slate-600 border-t border-slate-100/60">
                        <ul className="space-y-2.5 leading-relaxed">
                          {data.weAlsoAimTo.list.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-slate-700">
                              <span className="font-bold text-[#c2410c] shrink-0">•</span>
                              <span className="font-medium text-slate-800">{item}</span>
                            </li>
                          ))}
                        </ul>
                        {data.weAlsoAimTo.quote && (
                          <p className="mt-4 pt-3 border-t border-slate-100 italic font-serif text-slate-600 text-xs sm:text-sm">
                            "{data.weAlsoAimTo.quote}"
                          </p>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )}

            {/* 7. Safety & Security Accordion */}
            {data.safetyAndSecurity && (
              <div className="transition-colors hover:bg-slate-50/40">
                <button
                  onClick={() => toggleSection('safetyAndSecurity')}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left cursor-pointer transition-colors group"
                >
                  <span className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-[#c2410c] transition-colors">
                    {data.safetyAndSecurity.badgeTitle}
                  </span>
                  <motion.div
                    animate={{ rotate: openSections.safetyAndSecurity ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="shrink-0 text-slate-400 group-hover:text-[#c2410c]"
                  >
                    <ChevronDown className="w-5 h-5" />
                  </motion.div>
                </button>
                <AnimatePresence initial={false}>
                  {openSections.safetyAndSecurity && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-6 sm:px-6 sm:pb-7 pt-1 text-xs sm:text-sm text-slate-600 border-t border-slate-100/60">
                        <ol className="space-y-2.5 list-decimal list-inside leading-relaxed">
                          {data.safetyAndSecurity.list.map((item, idx) => (
                            <li key={idx} className="text-slate-700">
                              <span className="font-medium text-slate-800">{item}</span>
                            </li>
                          ))}
                        </ol>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )}

          </div>
        </div>
      </Reveal>

      {/* 4. Message from the Principal */}
      <Reveal className="py-10 sm:py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScaleIn duration={0.6} className="bg-amber-50/50 rounded-3xl p-6 sm:p-10 border border-amber-100 shadow-md">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
              <div className="lg:col-span-4 flex flex-col items-center text-center">
                <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-2xl overflow-hidden shadow-lg border-4 border-white mb-3 group">
                  <ParallaxImage src={data.principalMessage.image} alt={data.principalMessage.name} className="w-full h-full" />
                </div>
                <h4 className="text-base font-bold text-slate-900 font-heading">{data.principalMessage.name}</h4>
                <p className="text-xs text-amber-700 font-semibold">{data.principalMessage.role}</p>
              </div>
              <div className="lg:col-span-8 flex flex-col items-start">
                <span className="text-[11px] font-bold uppercase tracking-wider text-amber-700 mb-1.5">
                  Leadership Desk
                </span>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#c2410c] font-heading mb-3">
                  {data.principalMessage.heading}
                </h3>
                <div className="relative pl-5 border-l-4 border-amber-400 mb-5">
                  <Quote className="w-5 h-5 text-amber-400/40 absolute -left-2.5 -top-2" />
                  <p className="text-xs sm:text-sm font-serif italic text-slate-700 leading-relaxed">
                    "{data.principalMessage.quote}"
                  </p>
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={openEnquiryModal}
                  className="px-5 py-2 rounded-full bg-[#c2410c] text-white font-bold text-xs shadow-md cursor-pointer"
                >
                  {data.principalMessage.ctaText}
                </motion.button>
              </div>
            </div>
          </ScaleIn>
        </div>
      </Reveal>

      {/* 5. Our Journey Timeline */}
      <Reveal className="py-10 sm:py-12 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn direction="up">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#c2410c] font-heading mb-8">
              Our Journey
            </h3>
          </FadeIn>
          <StaggerContainer
            staggerChildren={0.08}
            className="grid grid-cols-2 md:grid-cols-5 gap-3 sm:gap-4"
          >
            {data.timeline.map((item, idx) => (
              <StaggerItem key={idx}>
                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                  className="h-full bg-white rounded-2xl p-4 border border-slate-200/80 shadow-xs hover:shadow-md transition-shadow"
                >
                  <span className="text-lg sm:text-xl font-black text-amber-600 font-heading block mb-1">
                    {item.year}
                  </span>
                  <h5 className="text-xs font-bold text-slate-900 mb-1">{item.title}</h5>
                  <p className="text-[11px] text-slate-500">{item.description}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </Reveal>

      {/* 6. Our Campus & Community Metrics */}
      <Reveal className="py-10 sm:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            <FadeIn direction="left" className="lg:col-span-6">
              <h4 className="text-lg font-bold text-[#c2410c] font-heading mb-3">Our Campus</h4>
              <div className="rounded-2xl overflow-hidden shadow-md h-56 relative group">
                <ParallaxImage src={data.campusPreview.image} alt="Campus" className="w-full h-full" />
                <button
                  onClick={openEnquiryModal}
                  className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-md text-white px-3.5 py-1 rounded-lg text-xs font-bold cursor-pointer hover:bg-black/80 transition-colors"
                >
                  {data.campusPreview.ctaText}
                </button>
              </div>
            </FadeIn>

            <div className="lg:col-span-6">
              <FadeIn direction="up">
                <h4 className="text-lg font-bold text-[#c2410c] font-heading mb-3 text-center sm:text-left">Our Community</h4>
              </FadeIn>
              <StaggerContainer staggerChildren={0.06} className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {data.communityMetrics.map((m, idx) => (
                  <StaggerItem key={idx}>
                    <motion.div
                      whileHover={{ y: -3 }}
                      transition={{ duration: 0.2 }}
                      className="flex flex-col items-center text-center p-3.5 rounded-xl bg-slate-50 border border-slate-100 shadow-xs hover:shadow-sm"
                    >
                      <div className="w-9 h-9 rounded-full bg-orange-100 text-[#c2410c] flex items-center justify-center mb-1.5">
                        <DynamicIcon name={m.iconName} className="w-4.5 h-4.5" />
                      </div>
                      <span className="text-base font-bold text-slate-900 font-heading">{m.count}</span>
                      <span className="text-[11px] text-slate-600 mt-0.5">{m.label}</span>
                    </motion.div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </div>
        </div>
      </Reveal>

      {/* Footer */}
      <Footer schoolName={schoolData.name} tagline={schoolData.tagline} footer={schoolData.footer} />
    </div>
  );
};


