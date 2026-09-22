import React from 'react';
import type { BeyondClassroomsPageData } from '../types/school';
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

interface BeyondClassroomsPageProps {
  data: BeyondClassroomsPageData;
}

export const BeyondClassroomsPage: React.FC<BeyondClassroomsPageProps> = ({ data }) => {
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
        title="Beyond Classrooms"
        backgroundImage={data.hero.image}
      />

      {/* 2. Interactive Photo Gallery with Category Filters */}
      <Reveal className="py-12 sm:py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <FadeIn direction="up">
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#c2410c] bg-orange-50 border border-orange-200/60 px-3.5 py-1 rounded-full inline-block mb-2.5">
                Campus Life &amp; Moments
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#c2410c] font-heading mb-3">
                Student Activities &amp; Celebrations Gallery
              </h2>
              <p className="text-xs sm:text-sm text-slate-600">
                A visual glimpse of authentic daily learning, Montessori practical life, celebrations, sports, and cultural festivals at Sanatana.
              </p>
            </FadeIn>
          </div>

          <StaggerContainer staggerDelay={0.05} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {data.categories.map((item) => (
              <StaggerItem key={item.id}>
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={transitions.smooth}
                  className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-xs hover:shadow-2xl transition-all duration-300 group flex flex-col cursor-pointer h-full"
                >
                  <div className="h-48 overflow-hidden relative bg-slate-100">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    <div className="absolute top-3 right-3 bg-black/60 text-amber-300 text-[10px] font-extrabold px-2.5 py-1 rounded-full backdrop-blur-xs z-10 shadow-xs">
                      {item.tag}
                    </div>
                  </div>
                  <div className="p-4 flex-1 flex flex-col justify-between">
                    <h4 className="text-xs sm:text-sm font-bold text-slate-800 font-heading group-hover:text-[#c2410c] transition-colors leading-snug">
                      {item.title}
                    </h4>
                    <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between text-[11px] text-orange-800 font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                      <span>View Moment</span>
                      <span>↗</span>
                    </div>
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
