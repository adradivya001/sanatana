import React from 'react';
import type { AcademicsPageData } from '../types/school';
import { useSchool } from '../context/SchoolContext';
import { DynamicIcon } from '../components/common/DynamicIcon';
import { TopBar } from '../components/layout/TopBar';
import { AdmissionTicker } from '../components/layout/AdmissionTicker';
import { Navbar } from '../components/layout/Navbar';
import { PageHero } from '../components/layout/PageHero';
import { Footer } from '../components/layout/Footer';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { 
  FadeIn, 
  Reveal, 
  StaggerContainer, 
  StaggerItem, 
  ParallaxImage,
  transitions 
} from '../components/animations';

interface AcademicsPageProps {
  data: AcademicsPageData;
}

export const AcademicsPage: React.FC<AcademicsPageProps> = ({ data }) => {
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
        title="Academics"
        backgroundImage={data.hero.image}
      />

      {/* 2. Our Academic Philosophy & 5 Horizontal Pillars */}
      <Reveal className="py-10 sm:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <FadeIn direction="up">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#c2410c] font-heading mb-2.5">
                {data.philosophy.heading}
              </h2>
            </FadeIn>
            <FadeIn direction="up" delay={0.1}>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                {data.philosophy.description}
              </p>
            </FadeIn>
            <FadeIn direction="up" delay={0.2}>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={openEnquiryModal}
                className="px-5 py-2 rounded-full bg-[#c2410c] text-white text-xs font-bold shadow-md cursor-pointer transition-colors hover:bg-orange-800"
              >
                {data.philosophy.ctaText}
              </motion.button>
            </FadeIn>
          </div>

          <StaggerContainer staggerDelay={0.08} className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5">
            {data.philosophy.pillars.map((p, idx) => (
              <StaggerItem key={idx}>
                <motion.div
                  whileHover={{ y: -4, scale: 1.02 }}
                  transition={transitions.fast}
                  className="flex flex-col items-center text-center p-3.5 rounded-2xl bg-slate-50 border border-slate-100 shadow-xs h-full"
                >
                  <motion.div 
                    whileHover={{ scale: 1.08 }}
                    transition={transitions.fast}
                    className="w-10 h-10 rounded-full bg-orange-100 text-[#c2410c] flex items-center justify-center mb-2"
                  >
                    <DynamicIcon name={p.iconName} className="w-4.5 h-4.5" />
                  </motion.div>
                  <span className="text-xs font-bold text-slate-800">{p.title}</span>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </Reveal>

      {/* 3. Academic Programmes with Real Classroom Image Cards */}
      <Reveal className="py-10 sm:py-12 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#c2410c] font-heading text-center mb-8">
              Our Academic Programmes
            </h3>
          </FadeIn>
          
          <StaggerContainer staggerDelay={0.1} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {data.stages.map((stage) => (
              <StaggerItem key={stage.id}>
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={transitions.smooth}
                  className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-xs hover:shadow-xl transition-shadow duration-300 flex flex-col h-full group"
                >
                  <div className="h-40 overflow-hidden bg-slate-100">
                    <ParallaxImage 
                      src={stage.image || 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=600&q=80'} 
                      alt={stage.title} 
                      className="w-full h-full"
                    />
                  </div>
                  <div className="p-4 flex-1 flex flex-col">
                    <h4 className="text-sm font-bold text-slate-900 font-heading">{stage.title}</h4>
                    <p className="text-[11px] text-amber-700 font-bold mb-1.5">{stage.subtitle}</p>
                    <p className="text-xs text-slate-600 leading-relaxed mb-3">{stage.description}</p>
                    <button 
                      onClick={openEnquiryModal} 
                      className="mt-auto inline-flex items-center gap-1.5 text-xs font-bold text-[#c2410c] hover:text-orange-800 cursor-pointer group/btn"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-1" />
                    </button>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </Reveal>

      {/* 4. Teaching & Learning Approach (4 Icon Cards) */}
      <Reveal className="py-10 sm:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#c2410c] font-heading text-center mb-8">
              Teaching & Learning Approach
            </h3>
          </FadeIn>
          
          <StaggerContainer staggerDelay={0.1} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {data.pedagogy.map((item, idx) => (
              <StaggerItem key={idx}>
                <motion.div
                  whileHover={{ y: -6, scale: 1.02 }}
                  transition={transitions.smooth}
                  className="p-5 rounded-2xl bg-amber-50/40 border border-amber-100 flex flex-col items-center text-center shadow-xs h-full"
                >
                  <motion.div 
                    whileHover={{ scale: 1.08 }}
                    transition={transitions.fast}
                    className="w-10 h-10 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center mb-2.5"
                  >
                    <DynamicIcon name={item.iconName} className="w-5 h-5" />
                  </motion.div>
                  <h4 className="text-sm font-bold text-slate-900 mb-1.5">{item.title}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">{item.description}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </Reveal>

      {/* 5. Assessment & Co-Curricular Split */}
      <Reveal className="py-10 sm:py-12 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            <FadeIn direction="left" className="lg:col-span-6 h-full">
              <div className="bg-white p-6 sm:p-7 rounded-3xl border border-slate-200 shadow-xs h-full flex flex-col justify-between">
                <div>
                  <h4 className="text-xl sm:text-2xl font-bold text-[#c2410c] font-heading mb-2.5">
                    {data.assessmentAndCoCurricular.assessment.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {data.assessmentAndCoCurricular.assessment.description}
                  </p>
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={openEnquiryModal}
                  className="self-start px-5 py-2 rounded-full bg-[#c2410c] text-white text-xs font-bold cursor-pointer transition-colors hover:bg-orange-800"
                >
                  {data.assessmentAndCoCurricular.assessment.ctaText}
                </motion.button>
              </div>
            </FadeIn>

            <FadeIn direction="right" className="lg:col-span-6 h-full">
              <div className="bg-white p-6 sm:p-7 rounded-3xl border border-slate-200 shadow-xs h-full flex flex-col justify-between">
                <div>
                  <h4 className="text-xl sm:text-2xl font-bold text-[#c2410c] font-heading mb-2.5">
                    {data.assessmentAndCoCurricular.coCurricular.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-3">
                    {data.assessmentAndCoCurricular.coCurricular.description}
                  </p>
                </div>
                <div className="h-40 rounded-2xl overflow-hidden">
                  <ParallaxImage 
                    src={data.assessmentAndCoCurricular.coCurricular.image} 
                    alt="Co-curricular" 
                    className="w-full h-full"
                  />
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
