import React, { useState } from 'react';
import type { ContactPageData } from '../types/school';
import { useSchool } from '../context/SchoolContext';
import { TopBar } from '../components/layout/TopBar';
import { AdmissionTicker } from '../components/layout/AdmissionTicker';
import { Navbar } from '../components/layout/Navbar';
import { PageHero } from '../components/layout/PageHero';
import { Footer } from '../components/layout/Footer';
import { MapPin, Phone, Mail, Clock, CheckCircle } from 'lucide-react';
import confetti from 'canvas-confetti';
import { motion } from 'framer-motion';
import { 
  FadeIn, 
  Reveal, 
  ScaleIn, 
  ParallaxImage,
  transitions 
} from '../components/animations';

interface ContactPageProps {
  data: ContactPageData;
}

export const ContactPage: React.FC<ContactPageProps> = ({ data }) => {
  const { schoolData, openEnquiryModal } = useSchool();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    try {
      confetti({ particleCount: 60, spread: 60, origin: { y: 0.6 } });
    } catch {}
  };

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
        title="Contact Us"
        backgroundImage={data.visitImage}
      />

      {/* 2. Main 3-Column Contact Form, Info, and Campus Visit Card */}
      <Reveal className="py-10 sm:py-12 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
            
            {/* Left: Contact Info (4 cols) */}
            <FadeIn direction="left" className="lg:col-span-4 h-full">
              <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-xs space-y-4.5 h-full">
                <div>
                  <h4 className="text-base font-bold text-slate-900 font-heading mb-2">Our Address</h4>
                  <div className="flex items-start gap-2.5 text-xs text-slate-600">
                    <MapPin className="w-4 h-4 text-[#c2410c] shrink-0 mt-0.5" />
                    <span className="whitespace-pre-line leading-relaxed">{data.contactInfo.address}</span>
                  </div>
                </div>

                <div>
                  <h4 className="text-base font-bold text-slate-900 font-heading mb-2">Phone Numbers</h4>
                  <div className="flex items-center gap-2.5 text-xs text-slate-600">
                    <Phone className="w-4 h-4 text-[#c2410c] shrink-0" />
                    <span>{data.contactInfo.phone}</span>
                  </div>
                </div>

                <div>
                  <h4 className="text-base font-bold text-slate-900 font-heading mb-2">Email Coordinates</h4>
                  <div className="flex items-center gap-2.5 text-xs text-slate-600">
                    <Mail className="w-4 h-4 text-[#c2410c] shrink-0" />
                    <span>{data.contactInfo.email}</span>
                  </div>
                </div>

                <div>
                  <h4 className="text-base font-bold text-slate-900 font-heading mb-2">Office Hours</h4>
                  <div className="flex items-center gap-2.5 text-xs text-slate-600">
                    <Clock className="w-4 h-4 text-[#c2410c] shrink-0" />
                    <span>{data.contactInfo.officeHours}</span>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Center: Send Us a Message Form (5 cols) */}
            <FadeIn direction="up" delay={0.1} className="lg:col-span-5 h-full">
              <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-xs h-full flex flex-col justify-center">
                <h4 className="text-base font-bold text-slate-900 font-heading mb-3">Send Us a Message</h4>
                {submitted ? (
                  <ScaleIn className="py-8 text-center">
                    <CheckCircle className="w-10 h-10 text-emerald-600 mx-auto mb-2" />
                    <h5 className="text-sm font-bold text-slate-900">Message Received</h5>
                    <p className="text-xs text-slate-600 mt-0.5">We will respond within 24 hours.</p>
                  </ScaleIn>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-3">
                    <input
                      type="text"
                      required
                      placeholder="Full Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs outline-hidden focus:bg-white focus:border-[#c2410c] focus:ring-2 focus:ring-[#c2410c]/10 transition-all"
                    />
                    <input
                      type="tel"
                      required
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs outline-hidden focus:bg-white focus:border-[#c2410c] focus:ring-2 focus:ring-[#c2410c]/10 transition-all"
                    />
                    <input
                      type="email"
                      required
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs outline-hidden focus:bg-white focus:border-[#c2410c] focus:ring-2 focus:ring-[#c2410c]/10 transition-all"
                    />
                    <textarea
                      rows={3}
                      required
                      placeholder="Your Message..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs outline-hidden focus:bg-white focus:border-[#c2410c] focus:ring-2 focus:ring-[#c2410c]/10 transition-all"
                    />
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      className="w-full py-2.5 rounded-full bg-[#c2410c] hover:bg-[#9a3412] text-white font-bold text-xs shadow-md cursor-pointer transition-colors"
                    >
                      Send Message
                    </motion.button>
                  </form>
                )}
              </div>
            </FadeIn>

            {/* Right: Visit Our Campus Snapshot (3 cols) */}
            <FadeIn direction="right" delay={0.2} className="lg:col-span-3 h-full">
              <div className="bg-white p-5 rounded-3xl border border-slate-200/80 shadow-xs flex flex-col justify-between h-full">
                <div>
                  <h4 className="text-sm sm:text-base font-bold text-slate-900 font-heading mb-2">Visit Our Campus</h4>
                  <div className="rounded-2xl overflow-hidden h-36 mb-3">
                    <ParallaxImage 
                      src={data.visitImage} 
                      alt="Campus visit" 
                      className="w-full h-full"
                    />
                  </div>
                  <p className="text-xs text-slate-500 mb-3 leading-relaxed">
                    Experience our modern classrooms and lush sports grounds in person.
                  </p>
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={openEnquiryModal}
                  className="w-full py-2.5 rounded-full bg-amber-400 hover:bg-amber-500 text-slate-950 font-bold text-xs shadow-xs cursor-pointer transition-colors"
                >
                  Schedule a Visit
                </motion.button>
              </div>
            </FadeIn>

          </div>
        </div>
      </Reveal>

      {/* 3. Interactive Campus Location Map */}
      <Reveal className="py-10 sm:py-12 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 gap-3">
            <FadeIn direction="left">
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#c2410c] bg-orange-50 border border-orange-200/60 px-3.5 py-1 rounded-full inline-block mb-2">
                Find Our Campus
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#c2410c] font-heading">
                Interactive Campus Location
              </h3>
            </FadeIn>
            <FadeIn direction="right">
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent('Sanatana School of Excellence, 2nd Cross Rd, Maruthi Nagar, Anantapur, Andhra Pradesh 515004')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 text-white text-xs font-bold shadow-xs hover:bg-[#c2410c] transition-colors"
              >
                <span>Open in Google Maps</span>
                <span>↗</span>
              </a>
            </FadeIn>
          </div>

          <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-md relative h-[320px] sm:h-[400px] w-full bg-slate-100">
            <iframe
              title="Sanatana School of Excellence Location Map"
              src="https://maps.google.com/maps?q=Sanatana%20School%20Of%20Excellence,%202nd%20Cross%20Rd,%20Maruthi%20Nagar,%20Anantapur,%20Andhra%20Pradesh%20515004&t=&z=16&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </Reveal>

      {/* Footer */}
      <Footer schoolName={schoolData.name} tagline={schoolData.tagline} footer={schoolData.footer} />
    </motion.div>
  );
};
