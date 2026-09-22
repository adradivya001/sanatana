import React, { useState } from 'react';
import { useSchool } from '../../context/SchoolContext';
import { Send, CheckCircle, User, Phone, Mail, BookOpen, MessageSquare, X } from 'lucide-react';
import confetti from 'canvas-confetti';

export const AdmissionModal: React.FC = () => {
  const { isEnquiryModalOpen, closeEnquiryModal, schoolData } = useSchool();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    parentName: '',
    phone: '',
    email: '',
    studentName: '',
    grade: 'Grade 1',
    message: ''
  });

  if (!isEnquiryModalOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    try {
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.6 }
      });
    } catch {
      // ignore
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-fade-in">
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl p-6 sm:p-8 border border-slate-100 my-8">
        
        {/* Close Button */}
        <button
          onClick={closeEnquiryModal}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        {submitted ? (
          <div className="text-center py-6">
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2 font-heading">
              Enquiry Submitted!
            </h3>
            <p className="text-xs text-slate-600 mb-6">
              Thank you for contacting {schoolData.name}. Our admissions counselor will contact you shortly at <strong>{formData.phone || formData.email}</strong>.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                closeEnquiryModal();
              }}
              className="px-6 py-2.5 rounded-full bg-[#c2410c] text-white font-bold text-xs"
            >
              Done
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <span className="text-[11px] font-bold text-amber-600 uppercase tracking-wider block">
                Admissions 2026–27
              </span>
              <h3 className="text-2xl font-bold text-[#c2410c] font-heading mt-1">
                Online Admission Enquiry
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Schedule your personal campus tour and receive the school prospectus.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div>
                <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">
                  Parent / Guardian Name *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    name="parentName"
                    placeholder="e.g. Rajesh Kumar"
                    value={formData.parentName}
                    onChange={handleChange}
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:bg-white focus:border-[#c2410c] outline-hidden"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">
                    Mobile Phone *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="tel"
                      required
                      name="phone"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:bg-white focus:border-[#c2410c] outline-hidden"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      required
                      name="email"
                      placeholder="parent@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:bg-white focus:border-[#c2410c] outline-hidden"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">
                    Child Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    name="studentName"
                    placeholder="e.g. Aarav"
                    value={formData.studentName}
                    onChange={handleChange}
                    className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:bg-white focus:border-[#c2410c] outline-hidden"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">
                    Grade Applying For *
                  </label>
                  <select
                    name="grade"
                    value={formData.grade}
                    onChange={handleChange}
                    className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:bg-white focus:border-[#c2410c] outline-hidden"
                  >
                    <option value="Kindergarten (Pre-Primary)">Kindergarten (Pre-Primary)</option>
                    <option value="Primary School (Grades 1–5)">Primary School (Grades 1–5)</option>
                    <option value="Middle School (Grades 6–8)">Middle School (Grades 6–8)</option>
                    <option value="Senior School (Grades 9–12)">Senior School (Grades 9–12)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">
                  Message / Queries
                </label>
                <textarea
                  name="message"
                  rows={2}
                  placeholder="Preferred campus visit timing, transport requirements, etc."
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:bg-white focus:border-[#c2410c] outline-hidden"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-full bg-amber-400 hover:bg-amber-500 text-slate-950 font-bold text-xs tracking-wide shadow-md transition-all flex items-center justify-center gap-2 mt-4"
              >
                <span>Submit Admission Enquiry</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>
        )}

      </div>
    </div>
  );
};
