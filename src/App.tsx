import React from 'react';
import { SchoolProvider, useSchool } from './context/SchoolContext';
import { SchoolHomeLayout } from './layouts/school/SchoolHomeLayout';
import { AboutPage } from './pages/AboutPage';
import { AcademicsPage } from './pages/AcademicsPage';
import { AdmissionsPage } from './pages/AdmissionsPage';
import { BeyondClassroomsPage } from './pages/BeyondClassroomsPage';
import { FacilitiesPage } from './pages/FacilitiesPage';
import { ParentCornerPage } from './pages/ParentCornerPage';
import { ContactPage } from './pages/ContactPage';
import { AdmissionModal } from './components/common/AdmissionModal';

const SchoolPlatformApp: React.FC = () => {
  const { schoolData, activePage } = useSchool();

  // Route to the active page clicked in navbar
  const renderActivePage = () => {
    switch (activePage) {
      case 'about':
        return <AboutPage data={schoolData.aboutPage} />;
      case 'academics':
        return <AcademicsPage data={schoolData.academicsPage} />;
      case 'admissions':
        return <AdmissionsPage data={schoolData.admissionsPage} />;
      case 'beyond-classrooms':
        return <BeyondClassroomsPage data={schoolData.beyondClassroomsPage} />;
      case 'facilities':
        return <FacilitiesPage data={schoolData.facilitiesPage} />;
      case 'parent-corner':
        return <ParentCornerPage data={schoolData.parentCornerPage} />;
      case 'contact':
        return <ContactPage data={schoolData.contactPage} />;
      case 'home':
      default:
        return <SchoolHomeLayout schoolData={schoolData} />;
    }
  };

  return (
    <>
      {/* Active Page View */}
      {renderActivePage()}

      {/* Global Admission Enquiry Modal */}
      <AdmissionModal />
    </>
  );
};

export default function App() {
  return (
    <SchoolProvider>
      <SchoolPlatformApp />
    </SchoolProvider>
  );
}
