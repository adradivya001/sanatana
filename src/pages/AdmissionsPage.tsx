import React, { useState } from 'react';
import type { AdmissionsPageData } from '../types/school';
import { useSchool } from '../context/SchoolContext';
import { DynamicIcon } from '../components/common/DynamicIcon';
import { TopBar } from '../components/layout/TopBar';
import { AdmissionTicker } from '../components/layout/AdmissionTicker';
import { Navbar } from '../components/layout/Navbar';
import { PageHero } from '../components/layout/PageHero';
import { Footer } from '../components/layout/Footer';
import { 
  CheckCircle2, 
  ChevronDown, 
  Sparkles, 
  GraduationCap, 
  FileCheck2, 
  CalendarCheck2, 
  PhoneCall, 
  HelpCircle,
  Clock,
  MapPin,
  FileText
} from 'lucide-react';
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

  // Fallback / Normalized Data extraction to ensure both schemas (sanatana & generic) work flawlessly
  const heroImage = data?.hero?.image || '/banner_admissions.jpg';
  const heroTitle = data?.hero?.title || 'Begin Your Child’s Journey at Sanatana';
  const heroSubtitle = data?.hero?.subtitle || 'Admissions are now open for the upcoming academic year 2026-27.';
  
  const whyChooseUsItems = data?.whyChooseUs || [
    { title: 'Concept-Based Curriculum', iconName: 'BookOpen', bgColor: 'bg-amber-100', iconColor: 'text-amber-800' },
    { title: 'Qualified & Trained Staff', iconName: 'Users', bgColor: 'bg-sky-100', iconColor: 'text-sky-800' },
    { title: 'Stimulating Learning Environment', iconName: 'Sparkles', bgColor: 'bg-emerald-100', iconColor: 'text-emerald-800' },
    { title: 'Integrated Preschool & Childcare', iconName: 'Heart', bgColor: 'bg-orange-100', iconColor: 'text-orange-800' }
  ];

  // Map steps whether from processSteps or admissionSteps
  const rawSteps = (data as any)?.processSteps || (data as any)?.admissionSteps || [];
  const processSteps = rawSteps.map((s: any, idx: number) => ({
    step: s.step || s.stepNumber || `0${idx + 1}`,
    title: s.title || '',
    description: s.description || ''
  }));

  // Eligibility data mapping
  const eligibility = data?.eligibility || ({} as any);
  const eligibilityTitle = eligibility?.title || eligibility?.badgeTitle || 'ADMISSION ELIGIBILITY CRITERIA';
  const eligibilityPoints = eligibility?.points || [];
  
  const preSchoolRows = eligibility?.preSchoolProgram?.rows || 
    (eligibility?.preSchoolTable ? eligibility.preSchoolTable.map((r: any) => ({
      className: r.program || r.className,
      age: r.age
    })) : [
      { className: 'Play Group', age: '2 to 3 years' },
      { className: 'Nursery', age: '3 to 4 years' },
      { className: 'L.K.G', age: '4 to 5 years' },
      { className: 'U.K.G', age: '5 to 6 years' }
    ]);

  const primarySchoolNote = eligibility?.primarySchoolNote || 
    'For class 1st the child must have completed 6 years of age. For class 2nd onwards the admission is based on the performance in the entrance test & also previous year performance.';

  // Documents data mapping
  const documentsTitle = data?.documents?.title || eligibility?.requiredDocumentsTitle || 'DOCUMENTS TO BE SUBMITTED AT THE TIME OF ADMISSION:';
  const documentsList = data?.documents?.list || eligibility?.requiredDocuments || [
    'Photocopy of Date of Birth Certificate.',
    'Original Transfer Certificate of previous school.',
    'Four passport size photographs.',
    'Photocopy of Aadhar Card.',
    'Photocopy of Caste Certificate (if applicable).'
  ];

  const ctaText = eligibility?.ctaText || 'Enquire for Admission';

  // Fees & FAQs
  const feesAndFaq = data?.feesAndFaq || ({} as any);
  const feeNote = feesAndFaq?.feeNote || 'For comprehensive fee structure, transport charges, and sibling benefits, kindly contact our admissions desk.';
  const feeCtaText = feesAndFaq?.ctaText || 'Contact Admissions Desk →';
  const faqs = feesAndFaq?.faqs || (data as any)?.faq || [
    {
      question: 'What is the age criteria for Kindergarten?',
      answer: 'Play Group: 2 to 3 years, Nursery: 3 to 4 years, LKG: 4 to 5 years, UKG: 5 to 6 years, and Class 1 requires 6 years completed.'
    },
    {
      question: 'What is the student-teacher ratio at Sanatana?',
      answer: 'We maintain an optimal ratio to ensure individualized care, attentive facilitation, and meaningful communication for every child.'
    },
    {
      question: 'Does the school offer transportation facilities?',
      answer: 'Yes, we provide convenient pickup and drop-off timings with designated safe transport across prime routes in Anantapur.'
    },
    {
      question: 'How are traditional values integrated with modern academics?',
      answer: 'Our daily routine blends moral stories, cultural celebrations, and respectful conduct with modern STEM, digital literacy, and experiential projects.'
    }
  ];
  const campusImage = feesAndFaq?.campusImage || '/banner_admissions.jpg';

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
        backgroundImage={heroImage}
      />

      {/* 2. Innovative Why Choose Us Feature Cards */}
      <Reveal className="py-12 sm:py-16 bg-gradient-to-b from-white via-slate-50/50 to-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <FadeIn direction="up">
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#F36B21] bg-orange-50 border border-orange-200/60 px-3.5 py-1 rounded-full inline-block mb-2.5">
              The Sanatana Advantage
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#D94F16] font-heading mb-8">
              Why Choose Us
            </h2>
          </FadeIn>
          
          <StaggerContainer staggerDelay={0.08} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {whyChooseUsItems.map((item, idx) => (
              <StaggerItem key={idx}>
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={transitions.smooth}
                  className="group relative p-6 rounded-3xl bg-white border border-slate-200/80 shadow-xs hover:shadow-xl hover:border-orange-200/80 transition-all duration-300 flex flex-col items-center text-center h-full overflow-hidden"
                >
                  {/* Subtle top decorative corner accent glow on hover */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-orange-100/50 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  
                  {/* Floating Soft Badge Icon with Pulse Effect on Hover */}
                  <motion.div 
                    whileHover={{ rotate: [0, -6, 6, 0], scale: 1.1 }}
                    transition={transitions.fast}
                    className={`w-14 h-14 rounded-2xl ${item.bgColor || 'bg-orange-100'} flex items-center justify-center mb-3.5 shadow-sm group-hover:shadow-md transition-all duration-300 relative`}
                  >
                    <DynamicIcon name={item.iconName} className={`w-6 h-6 ${item.iconColor || 'text-orange-800'}`} />
                    <span className="absolute -bottom-1 -right-1 w-5 h-5 bg-white rounded-full flex items-center justify-center text-[10px] font-black text-slate-400 border border-slate-100 shadow-2xs">
                      {idx + 1}
                    </span>
                  </motion.div>

                  <h3 className="text-sm font-bold text-slate-800 leading-snug group-hover:text-[#D94F16] transition-colors">
                    {item.title}
                  </h3>

                  {/* Bottom animated accent pill */}
                  <div className="w-6 h-1 bg-slate-200 group-hover:w-12 group-hover:bg-[#D94F16] rounded-full mt-3.5 transition-all duration-300" />
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </Reveal>

      {/* 3. Innovative Connected Admission Process Roadmap */}
      <Reveal className="py-14 sm:py-18 bg-[#9a3412] text-white relative overflow-hidden">
        {/* Ambient atmospheric backdrop */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-700/30 via-[#9a3412] to-[#260e05] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <FadeIn direction="up">
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-amber-300 bg-amber-400/15 border border-amber-300/30 px-3.5 py-1 rounded-full inline-block mb-2.5">
              Step-by-Step Guidance
            </span>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white font-heading mb-3">
              Admission Process
            </h3>
            <p className="text-xs sm:text-sm text-orange-100/80 max-w-xl mx-auto mb-10">
              A smooth, transparent, and parent-friendly pathway to welcome your child into Sanatana School of Excellence.
            </p>
          </FadeIn>
          
          <div className="relative">
            {/* Desktop Connecting Flow Line */}
            {processSteps.length > 1 && (
              <div className="hidden lg:block absolute top-[44px] left-[8%] right-[8%] h-0.5 bg-gradient-to-r from-amber-400/20 via-amber-400/80 to-amber-400/20 z-0" />
            )}

            <StaggerContainer staggerDelay={0.1} className={`grid grid-cols-1 sm:grid-cols-2 ${processSteps.length === 4 ? 'lg:grid-cols-4' : 'lg:grid-cols-5'} gap-4 sm:gap-5 relative z-10`}>
              {processSteps.map((step, idx) => (
                <StaggerItem key={idx}>
                  <motion.div
                    whileHover={{ y: -8, scale: 1.02 }}
                    transition={transitions.smooth}
                    className="bg-white/10 backdrop-blur-md hover:bg-white/15 rounded-3xl p-5 border border-white/15 hover:border-amber-400/50 shadow-lg flex flex-col items-center text-center h-full group transition-all duration-300 relative"
                  >
                    {/* Glowing Circular Milestone Badge */}
                    <div className="relative mb-4">
                      <motion.div 
                        whileHover={{ scale: 1.15 }}
                        transition={transitions.fast}
                        className="w-12 h-12 rounded-full bg-gradient-to-tr from-amber-400 to-amber-200 text-slate-950 font-black text-sm flex items-center justify-center font-heading shadow-md ring-4 ring-[#9a3412] group-hover:ring-amber-300/40 transition-all duration-300"
                      >
                        {step.step}
                      </motion.div>
                    </div>

                    <h4 className="text-sm font-bold text-white mb-2 font-heading group-hover:text-amber-300 transition-colors">
                      {step.title}
                    </h4>
                    <p className="text-xs text-orange-50/80 leading-relaxed">
                      {step.description}
                    </p>

                    {/* Active Milestone Progress Indicator */}
                    <div className="mt-auto pt-4 flex items-center gap-1 opacity-60 group-hover:opacity-100 transition-opacity">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                      <span className="text-[10px] font-semibold text-amber-300/90">Stage {idx + 1} of {processSteps.length}</span>
                    </div>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </Reveal>

      {/* 4. Admission Eligibility Criteria & Pre-School Programs */}
      <Reveal className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left Column: Numbered Eligibility List + Clean Program Table + Documents */}
            <FadeIn direction="left" className="lg:col-span-8">
              {/* Title with underline */}
              <div className="mb-6">
                <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#F36B21] bg-orange-50 border border-orange-200/60 px-3.5 py-1 rounded-full inline-block mb-2">
                  Criteria &amp; Guidelines
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading">
                  {eligibilityTitle}
                </h3>
              </div>

              {/* Numbered Requirements (if provided) */}
              {eligibilityPoints && eligibilityPoints.length > 0 && (
                <ol className="space-y-2.5 text-xs sm:text-sm text-slate-800 font-medium mb-6">
                  {eligibilityPoints.map((pt: string, idx: number) => (
                    <li key={idx} className="leading-relaxed flex items-start gap-2">
                      <span className="font-bold text-[#F36B21]">{idx + 1}.</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ol>
              )}

              {/* Pre-School Program Age Table */}
              <div className="mt-6 mb-8">
                <h4 className="text-base sm:text-lg font-bold text-slate-900 mb-3 font-heading flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-[#F36B21]" />
                  <span>PRE-SCHOOL &amp; KINDERGARTEN PROGRAM</span>
                </h4>
                <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-xs">
                  <table className="min-w-full divide-y divide-slate-200 text-left text-xs sm:text-sm">
                    <thead className="bg-[#e9f2eb] text-slate-800 font-extrabold tracking-wider">
                      <tr>
                        <th scope="col" className="px-6 py-3.5 border-r border-slate-200">
                          CLASS / PROGRAM
                        </th>
                        <th scope="col" className="px-6 py-3.5">
                          AGE CRITERIA
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 bg-white">
                      {preSchoolRows.map((row: any, rIdx: number) => (
                        <tr key={rIdx} className="hover:bg-orange-50/30 transition-colors">
                          <td className="px-6 py-3.5 font-bold text-slate-900 border-r border-slate-200">
                            {row.className}
                          </td>
                          <td className="px-6 py-3.5 text-slate-700 font-semibold">
                            {row.age}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Primary School Note */}
              {primarySchoolNote && (
                <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200/80 mb-8">
                  <h5 className="text-xs font-bold uppercase tracking-wider text-amber-900 mb-1">
                    Primary School &amp; Higher Classes
                  </h5>
                  <p className="text-xs text-slate-700 leading-relaxed font-medium">
                    {primarySchoolNote}
                  </p>
                </div>
              )}

              {/* Required Documents Section */}
              <div className="mb-8 p-6 rounded-3xl bg-slate-50 border border-slate-200/80">
                <h4 className="text-sm sm:text-base font-bold text-slate-900 mb-4 font-heading flex items-center gap-2">
                  <FileCheck2 className="w-5 h-5 text-[#F36B21]" />
                  <span>{documentsTitle}</span>
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {documentsList.map((doc: string, dIdx: number) => (
                    <li key={dIdx} className="flex items-start gap-2.5 text-xs text-slate-700 bg-white p-3 rounded-xl border border-slate-200/60 shadow-2xs">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="font-medium leading-snug">{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Button */}
              <div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={openEnquiryModal}
                  className="px-7 py-3 rounded-full bg-gradient-to-r from-[#F36B21] to-[#D94F16] hover:from-[#D94F16] hover:to-[#c2410c] text-white text-xs sm:text-sm font-bold cursor-pointer transition-all shadow-md hover:shadow-orange-600/25"
                >
                  {ctaText}
                </motion.button>
              </div>
            </FadeIn>

            {/* Right Column: Admission Open Starburst Badge + Cheerful Illustration Frame */}
            <FadeIn direction="right" className="lg:col-span-4 flex flex-col items-center gap-6">
              {/* Starburst Admission Open Banner */}
              <div className="w-full max-w-sm bg-gradient-to-br from-sky-400 via-blue-500 to-indigo-600 text-white rounded-3xl p-5 shadow-xl text-center transform hover:scale-102 transition-transform">
                <div className="border-2 border-dashed border-white/60 rounded-2xl py-4 px-3">
                  <span className="block text-xl sm:text-2xl font-black italic tracking-wide drop-shadow-md">
                    ADMISSIONS OPEN
                  </span>
                  <span className="block text-sm sm:text-base font-extrabold uppercase tracking-widest drop-shadow-md text-amber-200 mt-0.5">
                    Academic Year 2026 – 2027
                  </span>
                  <span className="inline-block mt-3 text-[11px] font-bold bg-white/20 backdrop-blur-xs px-3 py-1 rounded-full text-white">
                    Limited Seats for Early Years
                  </span>
                </div>
              </div>

              {/* Cheerful Student & Educational Elements Frame */}
              <div className="w-full max-w-sm rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-white p-3 group">
                <img
                  src="/admission_student_illustration.jpg"
                  alt="Happy student at Sanatana School"
                  className="w-full h-auto object-contain rounded-2xl group-hover:scale-103 transition-transform duration-500"
                />
              </div>

              {/* Quick Contact Card */}
              <div className="w-full max-w-sm p-5 rounded-3xl bg-amber-50/70 border border-amber-200/80 shadow-xs text-left">
                <h5 className="text-xs font-bold uppercase tracking-wider text-amber-900 mb-2 flex items-center gap-1.5">
                  <PhoneCall className="w-4 h-4 text-amber-700" />
                  <span>Admissions Helpline</span>
                </h5>
                <p className="text-sm font-bold text-slate-900 mb-1">
                  {schoolData.topBar?.phone || '+91 95150 73726'}
                </p>
                <p className="text-xs text-slate-600">
                  {schoolData.topBar?.location || 'Maruthi Nagar, Anantapur'}
                </p>
              </div>
            </FadeIn>

          </div>
        </div>
      </Reveal>

      {/* 5. Fees & FAQ + Campus Snapshot */}
      <Reveal className="py-12 sm:py-16 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
            <FadeIn direction="left" className="lg:col-span-6 space-y-4">
              <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs">
                <h4 className="text-base font-bold text-[#D94F16] font-heading mb-1.5 flex items-center gap-2">
                  <FileText className="w-4 h-4" />
                  <span>Fees &amp; Enquiry</span>
                </h4>
                <p className="text-xs text-slate-600 mb-3 leading-relaxed">{feeNote}</p>
                <button 
                  onClick={openEnquiryModal} 
                  className="text-xs font-bold text-[#F36B21] underline hover:text-[#D94F16] cursor-pointer transition-colors inline-flex items-center gap-1"
                >
                  <span>{feeCtaText}</span>
                </button>
              </div>

              <div className="bg-white p-6 rounded-3xl border border-slate-200 space-y-3 shadow-xs">
                <h4 className="text-base font-bold text-[#D94F16] font-heading mb-3 flex items-center gap-2">
                  <HelpCircle className="w-4 h-4" />
                  <span>Frequently Asked Questions</span>
                </h4>
                {faqs.map((faq: any, idx: number) => {
                  const isOpen = openFaqIndex === idx;
                  return (
                    <div key={idx} className="border-b border-slate-100 pb-3 last:border-0 last:pb-0">
                      <button
                        onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                        className="w-full flex items-center justify-between text-left py-1 text-xs sm:text-sm font-bold text-slate-800 hover:text-[#D94F16] transition-colors cursor-pointer gap-2"
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
                            <p className="text-xs text-slate-600 pt-2 leading-relaxed">
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
              <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-white h-[380px] sm:h-[420px] relative">
                <ParallaxImage 
                  src={campusImage} 
                  alt="Campus life" 
                  className="w-full h-full"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-md text-white p-4 rounded-2xl text-center">
                  <span className="font-script text-xl text-amber-300">Rooted in Values, Ready for Tomorrow</span>
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
