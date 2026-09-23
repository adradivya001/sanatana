export interface TopBarInfo {
  location: string;
  phone: string;
  email: string;
  parentPortalUrl?: string;
  careersUrl?: string;
  socialLinks?: {
    facebook?: string;
    instagram?: string;
    youtube?: string;
    linkedin?: string;
  };
}

export interface NavItem {
  id: string; // 'home' | 'about' | 'academics' | 'admissions' | 'beyond-classrooms' | 'facilities' | 'parent-corner' | 'contact'
  label: string;
  href: string;
  isButton?: boolean;
}

export interface FeatureHighlight {
  id: string;
  title: string;
  iconName: string;
  bgColor: string;
  iconColor: string;
}

export interface AboutStrength {
  id: string;
  title: string;
  iconName: string;
  bgColor: string;
  iconColor: string;
}

export interface AcademicStage {
  id: string;
  title: string;
  subtitle: string;
  grades: string;
  keywords: string;
  description: string;
  iconName: string;
  bgColor: string;
  borderColor: string;
  iconBgColor: string;
  iconColor: string;
  linkText: string;
  image?: string;
}

export interface StudentLifeActivity {
  id: string;
  title: string;
  iconName: string;
  bgColor: string;
  iconColor: string;
}

export interface SchoolAchievement {
  id: string;
  value: string;
  label: string;
  iconName: string;
}

/* Page Specific Content Schemas matching all 8 reference pages */

export interface AboutPageData {
  hero: {
    title: string;
    subtitle: string;
    description: string;
    image: string;
  };
  purpose: {
    heading: string;
    description?: string;
    paragraphs?: string[];
    ctaText: string;
    image: string;
  };
  visionMissionValues: {
    badgeTitle?: string;
    paragraphs?: string[];
    admissionNote?: {
      title: string;
      text: string;
    };
    vision: { title: string; description: string; iconName: string };
    mission: { title: string; description: string; iconName: string };
    values: { title: string; description: string; iconName: string };
  };
  principles?: {
    badgeTitle: string;
    list: string[];
  };
  promise?: {
    badgeTitle: string;
    intro: string;
    list: string[];
  };
  advantages?: {
    badgeTitle: string;
    list: string[];
  };
  whySanatana?: {
    badgeTitle: string;
    paragraphs: string[];
  };
  weAlsoAimTo?: {
    badgeTitle: string;
    list: string[];
    quote?: string;
  };
  safetyAndSecurity?: {
    badgeTitle: string;
    list: string[];
  };
  principalMessage: {
    heading: string;
    quote: string;
    name: string;
    role: string;
    image: string;
    ctaText: string;
  };
  timeline: Array<{
    year: string;
    title: string;
    description: string;
  }>;
  campusPreview: {
    title: string;
    image: string;
    ctaText: string;
  };
  communityMetrics: Array<{
    count: string;
    label: string;
    iconName: string;
  }>;
}

export interface AcademicsPageData {
  hero: {
    title: string;
    subtitle: string;
    image: string;
    decorativeTag: string;
  };
  philosophy: {
    heading: string;
    description: string;
    ctaText: string;
    pillars: Array<{
      title: string;
      iconName: string;
    }>;
  };
  stages: AcademicStage[];
  pedagogy: Array<{
    title: string;
    description: string;
    iconName: string;
  }>;
  assessmentAndCoCurricular: {
    assessment: {
      title: string;
      description: string;
      ctaText: string;
    };
    coCurricular: {
      title: string;
      description: string;
      image: string;
    };
  };
}

export interface AdmissionsPageData {
  hero: {
    title: string;
    subtitle: string;
    description: string;
    image: string;
    decorativeTag: string;
  };
  whyChooseUs: Array<{
    title: string;
    iconName: string;
    bgColor: string;
    iconColor: string;
  }>;
  processSteps: Array<{
    step: string;
    title: string;
    description: string;
  }>;
  eligibility: {
    title: string;
    description?: string;
    points?: string[];
    preSchoolProgram?: {
      tableTitle: string;
      rows: Array<{
        className: string;
        age: string;
      }>;
    };
    ctaText: string;
  };
  documents: {
    title: string;
    list: string[];
  };
  feesAndFaq: {
    feeNote: string;
    ctaText: string;
    faqs: Array<{
      question: string;
      answer: string;
    }>;
    campusImage: string;
  };
}

export interface BeyondClassroomsPageData {
  hero: {
    title: string;
    subtitle: string;
    image: string;
    decorativeTag: string;
  };
  categories: Array<{
    id: string;
    title: string;
    image: string;
    tag: string;
  }>;
  cta: {
    heading: string;
    primaryBtn: string;
    secondaryBtn: string;
  };
}

export interface FacilitiesPageData {
  hero: {
    title: string;
    subtitle: string;
    image: string;
    decorativeTag: string;
  };
  facilityItems: Array<{
    id: string;
    title: string;
    image: string;
  }>;
  cta: {
    heading: string;
    primaryBtn: string;
    secondaryBtn: string;
  };
}

export interface ParentCornerPageData {
  hero: {
    title: string;
    subtitle: string;
    image: string;
  };
  portalCards: Array<{
    id: string;
    title: string;
    description: string;
    iconName: string;
    bgColor: string;
    iconColor: string;
  }>;
  cta: {
    heading: string;
    primaryBtn: string;
    secondaryBtn: string;
  };
}

export interface ContactPageData {
  hero: {
    title: string;
    subtitle: string;
    decorativeTag: string;
  };
  contactInfo: {
    address: string;
    phone: string;
    email: string;
    officeHours: string;
  };
  mapImage: string;
  visitImage: string;
  socialMessage: string;
}

export interface WhySanatanaReason {
  number: string;
  title: string;
  description: string;
  iconName: string;
}

export interface WhySanatanaSectionData {
  eyebrow: string;
  heading: string;
  mainStatement: string;
  supportingText: string;
  reasons: WhySanatanaReason[];
  bottomStatement: {
    main: string;
    sub: string;
  };
}

export interface SchoolData {
  id: string;
  name: string;
  tagline: string;
  logoIcon?: string;
  logoImage?: string;
  
  topBar: TopBarInfo;
  navigation: NavItem[];
  
  // 1. Home Page Data
  hero: {
    eyebrow: string;
    headlineStart: string;
    headlineAccent: string;
    description: string;
    primaryCtaText: string;
    secondaryCtaText: string;
    image: string;
    decorativeTopText: string;
    decorativeBottomPill: {
      title: string;
      subtitle: string;
    };
  };

  highlights: FeatureHighlight[];

  about: {
    eyebrow: string;
    heading: string;
    description: string;
    ctaText: string;
    image: string;
    videoBadgeText: string;
    handwrittenTag: string;
    strengths: AboutStrength[];
    welcomeIntro?: {
      badgeTitle: string;
      paragraphs: string[];
    };
    refreshingChange?: {
      badgeTitle: string;
      description: string;
    };
  };

  whatSetsUsApart?: {
    badgeTitle: string;
    image: string;
    leftPoints: string[];
    rightPoints: string[];
  };

  whySanatana?: WhySanatanaSectionData;

  academicJourney: {
    eyebrow: string;
    heading: string;
    viewAllText: string;
    stages: AcademicStage[];
  };

  beyondAcademics: {
    eyebrow: string;
    heading: string;
    description: string;
    ctaText: string;
    activities: StudentLifeActivity[];
  };

  achievements: {
    eyebrow: string;
    heading: string;
    description: string;
    stats: SchoolAchievement[];
  };

  admissionCTA: {
    heading: string;
    description: string;
    primaryBtnText: string;
    secondaryBtnText: string;
    decorativeLeftText: string;
    decorativeRightText: string;
  };

  // 2 - 8 Pages Data
  aboutPage: AboutPageData;
  academicsPage: AcademicsPageData;
  admissionsPage: AdmissionsPageData;
  beyondClassroomsPage: BeyondClassroomsPageData;
  facilitiesPage: FacilitiesPageData;
  parentCornerPage: ParentCornerPageData;
  contactPage: ContactPageData;

  footer: {
    shortDescription: string;
    quickLinks: { label: string; href: string }[];
    facilitiesLinks: { label: string; href: string }[];
    contact: {
      address: string;
      phone: string;
      email: string;
    };
    socialMessage: string;
    copyrightText: string;
  };
}
