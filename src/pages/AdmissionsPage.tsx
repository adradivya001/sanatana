import React, { useState } from 'react';
import type { AdmissionsPageData } from '../types/school';
import { useSchool } from '../context/SchoolContext';
import { DynamicIcon } from '../components/common/DynamicIcon';
import { TopBar } from '../components/layout/TopBar';
import { AdmissionTicker } from '../components/layout/AdmissionTicker';
import { Navbar } from '../components/layout/Navbar';
import { PageHero } from '../components/layout/PageHero';
import { Footer } from '../components/layout/Footer';
import { CheckCircle2, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FadeIn, 
  Reveal, 
  StaggerContainer, 
  StaggerItem, 
  ParallaxImage,
  transitions 
} from '../components/animations';

interface AdmissionsPageProps {
  data: AdmissionsPageData;
}

export const AdmissionsPage: React.FC<AdmissionsPageProps> = ({ data }) => {
  const { schoolData, openEnquiryModal } = useSchool();
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

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
        title="Admissions"
        backgroundImage={data.hero.image}
      />

      {/* 2. Innovative Why Choose Us Feature Cards */}
      <Reveal className="py-12 sm:py-16 bg-gradient-to-b from-white via-slate-50/50 to-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <FadeIn direction="up">
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-amber-600 bg-amber-50 border border-amber-200/60 px-3.5 py-1 rounded-full inline-block mb-2.5">
              The Sanatana Advantage
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#c2410c] font-heading mb-8">
              Why Choose Us
            </h2>
          </FadeIn>
          
          <StaggerContainer staggerDelay={0.08} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5">
            {data.whyChooseUs.map((item, idx) => (
              <StaggerItem key={idx}>
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={transitions.smooth}
                  className="group relative p-5 rounded-3xl bg-white border border-slate-200/80 shadow-xs hover:shadow-xl hover:border-orange-200/80 transition-all duration-300 flex flex-col items-center text-center h-full overflow-hidden"
                >
                  {/* Subtle top decorative corner accent glow on hover */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-teal-100/50 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  
                  {/* Floating Soft Badge Icon with Pulse Effect on Hover */}
                  <motion.div 
                    whileHover={{ rotate: [0, -6, 6, 0], scale: 1.1 }}
                    transition={transitions.fast}
                    className={`w-14 h-14 rounded-2xl ${item.bgColor} flex items-center justify-center mb-3.5 shadow-sm group-hover:shadow-md transition-all duration-300 relative`}
                  >
                    <DynamicIcon name={item.iconName} className={`w-6 h-6 ${item.iconColor}`} />
                    <span className="absolute -bottom-1 -right-1 w-5 h-5 bg-white rounded-full flex items-center justify-center text-[10px] font-black text-slate-400 border border-slate-100 shadow-2xs">
                      {idx + 1}
                    </span>
                  </motion.div>

                  <h3 className="text-xs sm:text-sm font-bold text-slate-800 leading-snug group-hover:text-[#c2410c] transition-colors">
                    {item.title}
                  </h3>

                  {/* Bottom animated accent pill */}
                  <div className="w-6 h-1 bg-slate-200 group-hover:w-12 group-hover:bg-[#c2410c] rounded-full mt-3.5 transition-all duration-300" />
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </Reveal>

      {/* 3. Innovative Connected Admission Process Roadmap */}
      <Reveal className="py-14 sm:py-18 bg-[#9a3412] text-white relative overflow-hidden">
        {/* Ambient atmospheric backdrop */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-teal-800/30 via-[#9a3412] to-[#042020] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <FadeIn direction="up">
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-amber-400 bg-amber-400/10 border border-amber-400/20 px-3.5 py-1 rounded-full inline-block mb-2.5">
              Step-by-Step Guidance
            </span>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white font-heading mb-3">
              Admission Process
            </h3>
            <p className="text-xs sm:text-sm text-orange-100/70 max-w-xl mx-auto mb-10">
              A smooth, transparent, and parent-friendly 5-stage pathway to welcome your child into Sanatana.
            </p>
          </FadeIn>
          
          <div className="relative">
            {/* Desktop Connecting Flow Line */}
            <div className="hidden lg:block absolute top-[44px] left-[8%] right-[8%] h-0.5 bg-gradient-to-r from-amber-400/20 via-amber-400/80 to-amber-400/20 z-0" />

            <StaggerContainer staggerDelay={0.1} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5 relative z-10">
              {data.processSteps.map((step, idx) => (
                <StaggerItem key={idx}>
                  <motion.div
                    whileHover={{ y: -8, scale: 1.02 }}
                    transition={transitions.smooth}
                    className="bg-white/5 backdrop-blur-md hover:bg-white/10 rounded-3xl p-5 border border-white/10 hover:border-amber-400/50 shadow-lg flex flex-col items-center text-center h-full group transition-all duration-300 relative"
                  >
                    {/* Glowing Circular Milestone Badge */}
                    <div className="relative mb-4">
                      <motion.div 
                        whileHover={{ scale: 1.15 }}
                        transition={transitions.fast}
                        className="w-12 h-12 rounded-full bg-gradient-to-tr from-amber-500 to-amber-300 text-slate-950 font-black text-sm flex items-center justify-center font-heading shadow-md ring-4 ring-[#9a3412] group-hover:ring-amber-400/30 transition-all duration-300"
                      >
                        {step.step}
                      </motion.div>
                    </div>

                    <h4 className="text-sm font-bold text-white mb-2 font-heading group-hover:text-amber-300 transition-colors">
                      {step.title}
                    </h4>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {step.description}
                    </p>

                    {/* Active Milestone Progress Indicator */}
                    <div className="mt-auto pt-4 flex items-center gap-1 opacity-60 group-hover:opacity-100 transition-opacity">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                      <span className="text-[10px] font-semibold text-amber-300/80">Step {idx + 1} of 5</span>
                    </div>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </Reveal>

      {/* 4. Admission Eligibility & Pre-School Program (Matching Reference Layout) */}
      <Reveal className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left Column: Numbered Eligibility List + Clean Program Table */}
            <FadeIn direction="left" className="lg:col-span-8">
              {/* Title with underline */}
              <div className="mb-6">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading underline decoration-black underline-offset-8">
                  {data.eligibility.title}
                </h3>
              </div>

              {/* Numbered Requirements */}
              {data.eligibility.points && (
                <ol className="space-y-2.5 text-xs sm:text-sm text-slate-800 font-medium mb-8">
                  {data.eligibility.points.map((pt, idx) => (
                    <li key={idx} className="leading-relaxed">
                      <span>{idx + 1}. </span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ol>
              )}

              {/* Pre-School Program Table */}
              {data.eligibility.preSchoolProgram && (
                <div className="mt-8">
                  <h4 className="text-base sm:text-lg font-bold text-slate-900 mb-3 font-heading">
                    {data.eligibility.preSchoolProgram.tableTitle}
                  </h4>
                  <div className="overflow-hidden rounded-xl border border-slate-200 shadow-xs">
                    <table className="min-w-full divide-y divide-slate-200 text-left text-xs sm:text-sm">
                      <thead className="bg-[#d5e3d7] text-slate-800 font-extrabold tracking-wider">
                        <tr>
                          <th scope="col" className="px-5 py-3 border-r border-slate-200">
                            CLASS
                          </th>
                          <th scope="col" className="px-5 py-3">
                            AGE
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200 bg-white">
                        {data.eligibility.preSchoolProgram.rows.map((row, rIdx) => (
                          <tr key={rIdx} className="hover:bg-slate-50/80 transition-colors">
                            <td className="px-5 py-3 font-bold text-slate-900 border-r border-slate-200">
                              {row.className}
                            </td>
                            <td className="px-5 py-3 text-slate-700 font-semibold">
                              {row.age}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              <div className="mt-6">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={openEnquiryModal}
                  className="px-6 py-2.5 rounded-full bg-[#c2410c] text-white text-xs font-bold cursor-pointer transition-colors hover:bg-orange-800 shadow-md"
                >
                  {data.eligibility.ctaText}
                </motion.button>
              </div>
            </FadeIn>

            {/* Right Column: Admission Open Starburst Badge + Cheerful Illustration Frame */}
            <FadeIn direction="right" className="lg:col-span-4 flex flex-col items-center gap-6">
              {/* Starburst Admission Open Banner */}
              <div className="w-full max-w-xs bg-gradient-to-r from-sky-400 via-blue-500 to-sky-500 text-white rounded-2xl p-4 shadow-lg text-center transform hover:scale-105 transition-transform">
                <div className="border-2 border-dashed border-white/60 rounded-xl py-3 px-2">
                  <span className="block text-xl sm:text-2xl font-black italic tracking-wide drop-shadow-md">
                    Admission
                  </span>
                  <span className="block text-2xl sm:text-3xl font-black italic uppercase tracking-wider drop-shadow-md text-amber-200">
                    Open
                  </span>
                </div>
              </div>

              {/* Cheerful Student & Educational Elements Frame */}
              <div className="w-full max-w-xs rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-white p-3 group">
                <img
                  src="/admission_student_illustration.jpg"
                  alt="Happy student in preschool"
                  className="w-full h-auto object-contain rounded-2xl group-hover:scale-103 transition-transform duration-500"
                />
              </div>
            </FadeIn>

          </div>
        </div>
      </Reveal>

      {/* 5. Fees & FAQ + Campus Snapshot */}
      <Reveal className="py-10 sm:py-12 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
            <FadeIn direction="left" className="lg:col-span-6 space-y-4">
              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
                <h4 className="text-base font-bold text-[#c2410c] font-heading mb-1.5">Fees &amp; Enquiry</h4>
                <p className="text-xs text-slate-600 mb-2.5">{data.feesAndFaq.feeNote}</p>
                <button 
                  onClick={openEnquiryModal} 
                  className="text-xs font-bold text-amber-700 underline hover:text-amber-800 cursor-pointer transition-colors"
                >
                  {data.feesAndFaq.ctaText}
                </button>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-2.5 shadow-xs">
                <h4 className="text-base font-bold text-[#c2410c] font-heading mb-2">Frequently Asked Questions</h4>
                {data.feesAndFaq.faqs.map((faq, idx) => {
                  const isOpen = openFaqIndex === idx;
                  return (
                    <div key={idx} className="border-b border-slate-100 pb-2.5 last:border-0">
                      <button
                        onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                        className="w-full flex items-center justify-between text-left py-1 text-xs font-bold text-slate-800 hover:text-[#c2410c] transition-colors cursor-pointer gap-2"
                      >
                        <span>{faq.question}</span>
                        <motion.div
                          animate={{ rotate: isOpen ? 180 : 0 }}
                          transition={transitions.fast}
                          className="shrink-0 text-slate-400"
                        >
                          <ChevronDown className="w-4 h-4" />
                        </motion.div>
                      </button>
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={transitions.smooth}
                            className="overflow-hidden"
                          >
                            <p className="text-[11px] text-slate-500 pt-2 leading-relaxed">
                              {faq.answer}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </FadeIn>

            <FadeIn direction="right" className="lg:col-span-6">
              <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-white h-[360px] relative">
                <ParallaxImage 
                  src={data.feesAndFaq.campusImage} 
                  alt="Campus life" 
                  className="w-full h-full"
                />
                <div className="absolute bottom-3 left-3 right-3 bg-black/60 backdrop-blur-md text-white p-3 rounded-2xl text-center">
                  <span className="font-script text-lg text-amber-300">Every Child Matters, A Brighter Tomorrow</span>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </Reveal>

      {/* Footer */}
      <Footer schoolName={schoolData.name} tagline={schoolData.tagline} footer={schoolData.footer} />
    </motion.div>
  );
};
