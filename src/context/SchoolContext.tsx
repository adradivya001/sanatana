import React, { createContext, useContext, useState } from 'react';
import type { SchoolData } from '../types/school';
import { sanatanaSchoolData } from '../data/schools';

interface SchoolContextType {
  schoolData: SchoolData;
  activePage: string; // 'home' | 'about' | 'academics' | 'admissions' | 'beyond-classrooms' | 'facilities' | 'parent-corner' | 'contact'
  setActivePage: (page: string) => void;
  isEnquiryModalOpen: boolean;
  openEnquiryModal: () => void;
  closeEnquiryModal: () => void;
}

const SchoolContext = createContext<SchoolContextType | undefined>(undefined);

export const SchoolProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [schoolData] = useState<SchoolData>(sanatanaSchoolData);
  const [activePage, setActivePage] = useState<string>('home');
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);

  const openEnquiryModal = () => setIsEnquiryModalOpen(true);
  const closeEnquiryModal = () => setIsEnquiryModalOpen(false);

  const navigateToPage = (page: string) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <SchoolContext.Provider
      value={{
        schoolData,
        activePage,
        setActivePage: navigateToPage,
        isEnquiryModalOpen,
        openEnquiryModal,
        closeEnquiryModal
      }}
    >
      {children}
    </SchoolContext.Provider>
  );
};

export const useSchool = (): SchoolContextType => {
  const context = useContext(SchoolContext);
  if (!context) {
    throw new Error('useSchool must be used within a SchoolProvider');
  }
  return context;
};
