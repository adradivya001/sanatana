import React from 'react';
import type { FacilitiesPageData } from '../types/school';
import { useSchool } from '../context/SchoolContext';
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

interface FacilitiesPageProps {
  data: FacilitiesPageData;
}

export const FacilitiesPage: React.FC<FacilitiesPageProps> = ({ data }) => {
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
        title="Facilities"
        backgroundImage={data.hero.image}
      />

      {/* 2. Photo Gallery Grid of Campus Facilities */}
      <Reveal className="py-10 sm:py-12 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerContainer staggerDelay={0.08} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {data.facilityItems.map((item) => (
              <StaggerItem key={item.id}>
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={transitions.smooth}
                  className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-xs hover:shadow-xl transition-shadow duration-300 group flex flex-col cursor-default h-full"
                >
                  <div className="h-44 overflow-hidden">
                    <ParallaxImage
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full"
                    />
                  </div>
                  <div className="p-4 text-center mt-auto">
                    <h4 className="text-sm font-bold text-slate-800 font-heading group-hover:text-[#c2410c] transition-colors">
                      {item.title}
                    </h4>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </Reveal>

      {/* 3. Bottom CTA */}
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
