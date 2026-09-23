import React from 'react';
import type { SchoolData } from '../../types/school';
import { TopBar } from '../../components/layout/TopBar';
import { AdmissionTicker } from '../../components/layout/AdmissionTicker';
import { Navbar } from '../../components/layout/Navbar';
import { CinematicHeroSlider } from '../../components/hero/CinematicHeroSlider';
import { SchoolHighlights } from '../../components/highlights/SchoolHighlights';
import { AboutSchool } from '../../components/about/AboutSchool';
import { WhySanatana } from '../../components/about/WhySanatana';
import { WhatSetsUsApart } from '../../components/about/WhatSetsUsApart';
import { AcademicJourney } from '../../components/academics/AcademicJourney';
import { BeyondAcademics } from '../../components/student-life/BeyondAcademics';
import { AchievementStats } from '../../components/achievements/AchievementStats';
import { AdmissionCTA } from '../../components/cta/AdmissionCTA';
import { Footer } from '../../components/layout/Footer';

interface SchoolHomeLayoutProps {
  schoolData: SchoolData;
}

export const SchoolHomeLayout: React.FC<SchoolHomeLayoutProps> = ({ schoolData }) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Slim Top Information Bar */}
      <TopBar data={schoolData.topBar} />

      {/* 2. Scrolling Admissions 2026-2027 Ticker Announcement Bar */}
      <AdmissionTicker />

      {/* 3. Main Navigation Bar */}
      <Navbar
        schoolName={schoolData.name}
        tagline={schoolData.tagline}
        navItems={schoolData.navigation}
      />

      {/* 4. Full-Screen Cinematic Image-Only Hero Slider with 5 Unique 3D/Slice/Grid/Split Transitions */}
      <CinematicHeroSlider />

      {/* 5. Horizontal School Feature Highlights */}
      <SchoolHighlights highlights={schoolData.highlights} />

      {/* 6. Philosophy / Vedic Culture with Modern Methodologies Section */}
      <AboutSchool about={schoolData.about} />

      {/* 6.5. Signature "WHY SANĀTANA?" Section */}
      {schoolData.whySanatana && <WhySanatana data={schoolData.whySanatana} />}

      {/* 6.7. What Sets Us Apart Showcase */}
      <WhatSetsUsApart data={schoolData.whatSetsUsApart} />

      {/* 7. Academic Journey with 4 Distinct Pastel Stage Cards */}
      <AcademicJourney data={schoolData.academicJourney} />

      {/* 8. Beyond Academics (Co-curricular activities) */}
      <BeyondAcademics data={schoolData.beyondAcademics} />

      {/* 9. School Achievements & Stats */}
      <AchievementStats data={schoolData.achievements} />

      {/* 10. Final Admissions CTA with decorative script */}
      <AdmissionCTA data={schoolData.admissionCTA} />

      {/* 11. Clean Four-Column Footer */}
      <Footer
        schoolName={schoolData.name}
        tagline={schoolData.tagline}
        footer={schoolData.footer}
      />
    </div>
  );
};
