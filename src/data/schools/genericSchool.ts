import type { SchoolData } from '../../types/school';

export const genericSchoolData: SchoolData = {
  id: 'master-school-template',
  name: 'SANATANA',
  tagline: 'Rooted in Values, Growing for Tomorrow',
  logoIcon: 'TreePine',
  logoImage: '/sanatana.png',
  
  topBar: {
    location: 'Ramnagar, Anantapur — 515001, Andhra Pradesh',
    phone: '+91 88888 99999',
    email: 'admissions@sanatana.edu.in',
    parentPortalUrl: '#portal',
    careersUrl: '#careers',
    socialLinks: {
      facebook: 'https://facebook.com',
      instagram: 'https://instagram.com',
      youtube: 'https://youtube.com',
      linkedin: 'https://linkedin.com'
    }
  },

  navigation: [
    { id: 'home', label: 'Home', href: '#home' },
    { id: 'about', label: 'About', href: '#about' },
    { id: 'academics', label: 'Academics', href: '#academics' },
    { id: 'admissions', label: 'Admissions', href: '#admissions' },
    { id: 'beyond-classrooms', label: 'Beyond Classrooms', href: '#beyond-classrooms' },
    { id: 'facilities', label: 'Facilities', href: '#facilities' },
    { id: 'parent-corner', label: 'Parent Corner', href: '#parent-corner' },
    { id: 'contact', label: 'Contact', href: '#contact' },
    { id: 'enquire-now', label: 'Enquire Now', href: '#admissions', isButton: true }
  ],

  // 1. Home Page Data
  hero: {
    eyebrow: 'ROOTED IN VALUES. READY FOR TOMORROW.',
    headlineStart: 'Nurturing\nConfident Minds\nfor a',
    headlineAccent: 'Brighter World',
    description: 'At our school, we believe every child is unique. We nurture curiosity, character and creativity to help them grow into compassionate, confident and responsible global citizens.',
    primaryCtaText: 'Admissions Open',
    secondaryCtaText: 'Take a Campus Tour',
    image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1200&q=85',
    decorativeTopText: 'Small\nLearners\nBig\nPossibilities',
    decorativeBottomPill: {
      title: 'A Brighter Me',
      subtitle: 'A Kinder World'
    }
  },

  highlights: [
    { id: 'h1', title: 'Academic\nExcellence', iconName: 'BookOpen', bgColor: 'bg-amber-100/70', iconColor: 'text-amber-800' },
    { id: 'h2', title: 'Values &\nCharacter', iconName: 'Heart', bgColor: 'bg-emerald-100/70', iconColor: 'text-emerald-800' },
    { id: 'h3', title: 'Holistic\nDevelopment', iconName: 'Users', bgColor: 'bg-rose-100/70', iconColor: 'text-rose-800' },
    { id: 'h4', title: 'Creative\nThinking', iconName: 'Lightbulb', bgColor: 'bg-orange-100/70', iconColor: 'text-orange-800' },
    { id: 'h5', title: 'Safe & Supportive\nEnvironment', iconName: 'ShieldCheck', bgColor: 'bg-orange-100/70', iconColor: 'text-orange-800' },
    { id: 'h6', title: 'Global\nPerspective', iconName: 'Globe', bgColor: 'bg-sky-100/70', iconColor: 'text-sky-800' }
  ],

  about: {
    eyebrow: 'ABOUT OUR SCHOOL',
    heading: 'More Than a School,\nA Place to Belong',
    description: 'We are dedicated to providing quality education in a caring and inclusive environment. We blend academics, values and real-world learning to help every child discover their strengths and chase their dreams with confidence.',
    ctaText: 'Know More About Us',
    image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1200&q=85',
    videoBadgeText: 'Explore Our Campus',
    handwrittenTag: 'A Home\nAway From Home',
    strengths: [
      { id: 's1', title: 'Child-Centric Approach', iconName: 'Users', bgColor: 'bg-sky-100', iconColor: 'text-sky-700' },
      { id: 's2', title: 'Experienced Faculty', iconName: 'UserCheck', bgColor: 'bg-pink-100', iconColor: 'text-pink-700' },
      { id: 's3', title: 'Modern Infrastructure', iconName: 'Building2', bgColor: 'bg-cyan-100', iconColor: 'text-cyan-700' },
      { id: 's4', title: 'Focus on Values & Life Skills', iconName: 'Sprout', bgColor: 'bg-emerald-100', iconColor: 'text-emerald-700' },
      { id: 's5', title: 'Personalised Learning', iconName: 'Sparkles', bgColor: 'bg-purple-100', iconColor: 'text-purple-700' },
      { id: 's6', title: 'Strong Parent Partnership', iconName: 'HeartHandshake', bgColor: 'bg-amber-100', iconColor: 'text-amber-700' }
    ]
  },

  whySanatana: {
    eyebrow: "MORE THAN EDUCATION",
    heading: "WHY SANĀTANA?",
    mainStatement: "Where Strong Roots Meet a Modern Education",
    supportingText: "At Sanātana, education is more than academic learning. We nurture curious minds, strong character and confident individuals by bringing together timeless Indian values with meaningful, modern learning experiences.",
    reasons: [
      {
        number: "01",
        title: "VALUES AT THE CORE",
        description: "We nurture respect, integrity, discipline, compassion and responsibility as an essential part of growing up.",
        iconName: "Lotus"
      },
      {
        number: "02",
        title: "EVERY CHILD MATTERS",
        description: "Every child is recognised as unique, with their own interests, abilities, curiosity and way of learning.",
        iconName: "UserCheck"
      },
      {
        number: "03",
        title: "WISDOM MEETS MODERN LEARNING",
        description: "Vedic heritage and Indian knowledge are thoughtfully connected with contemporary teaching methods.",
        iconName: "BookOpen"
      },
      {
        number: "04",
        title: "LEARNING BEYOND BOOKS",
        description: "Yoga, arts, culture, nature, exploration and real-world experiences make learning meaningful beyond the classroom.",
        iconName: "Leaf"
      },
      {
        number: "05",
        title: "PREPARED FOR TOMORROW",
        description: "We help children become confident, curious, independent and responsible lifelong learners.",
        iconName: "Sun"
      }
    ],
    bottomStatement: {
      main: "ROOTED IN VALUES. READY FOR THE FUTURE.",
      sub: "A childhood shaped by knowledge, character, curiosity and culture."
    }
  },

  academicJourney: {
    eyebrow: 'OUR ACADEMIC JOURNEY',
    heading: 'Every Stage. A Stronger Tomorrow.',
    viewAllText: 'View All Programmes',
    stages: [
      {
        id: 'kindergarten',
        title: 'Kindergarten',
        subtitle: '(Pre-Primary)',
        grades: 'Nursery to UKG',
        keywords: 'Play • Explore • Grow',
        description: 'A joyful start with a safe, nurturing and stimulating environment.',
        iconName: 'Smile',
        bgColor: 'bg-amber-50/60',
        borderColor: 'border-amber-100',
        iconBgColor: 'bg-amber-100',
        iconColor: 'text-amber-800',
        linkText: 'Learn More'
      },
      {
        id: 'primary',
        title: 'Primary School',
        subtitle: '(Grades 1–5)',
        grades: 'Grades 1–5',
        keywords: 'Learn • Discover • Imagine',
        description: 'Building strong fundamentals through engaging and interactive learning.',
        iconName: 'BookOpen',
        bgColor: 'bg-sky-50/60',
        borderColor: 'border-sky-100',
        iconBgColor: 'bg-sky-100',
        iconColor: 'text-sky-800',
        linkText: 'Learn More'
      },
      {
        id: 'middle',
        title: 'Middle School',
        subtitle: '(Grades 6–8)',
        grades: 'Grades 6–8',
        keywords: 'Think • Create • Achieve',
        description: 'Encouraging critical thinking, creativity and leadership skills.',
        iconName: 'Atom',
        bgColor: 'bg-emerald-50/60',
        borderColor: 'border-emerald-100',
        iconBgColor: 'bg-emerald-100',
        iconColor: 'text-emerald-800',
        linkText: 'Learn More'
      },
      {
        id: 'senior',
        title: 'Senior School',
        subtitle: '(Grades 9–12)',
        grades: 'Grades 9–12',
        keywords: 'Prepare • Perform • Lead',
        description: 'Equipping students with the knowledge, skills and values for a successful future.',
        iconName: 'GraduationCap',
        bgColor: 'bg-pink-50/60',
        borderColor: 'border-pink-100',
        iconBgColor: 'bg-pink-100',
        iconColor: 'text-pink-800',
        linkText: 'Learn More'
      }
    ]
  },

  beyondAcademics: {
    eyebrow: 'BEYOND ACADEMICS',
    heading: 'Discover. Explore. Excel.',
    description: 'We provide a wide range of co-curricular activities to help students discover their passions and develop life skills.',
    ctaText: 'Explore Student Life',
    activities: [
      { id: 'sports', title: 'Sports &\nPhysical Fitness', iconName: 'Activity', bgColor: 'bg-sky-100', iconColor: 'text-sky-800' },
      { id: 'arts', title: 'Arts &\nCreativity', iconName: 'Palette', bgColor: 'bg-amber-100', iconColor: 'text-amber-800' },
      { id: 'music', title: 'Music &\nPerforming Arts', iconName: 'Music', bgColor: 'bg-orange-100', iconColor: 'text-orange-800' },
      { id: 'clubs', title: 'Clubs &\nLeadership', iconName: 'Users', bgColor: 'bg-emerald-100', iconColor: 'text-emerald-800' },
      { id: 'community', title: 'Community\nOutreach', iconName: 'HeartHandshake', bgColor: 'bg-rose-100', iconColor: 'text-rose-800' },
      { id: 'events', title: 'Events &\nCompetitions', iconName: 'Trophy', bgColor: 'bg-amber-100', iconColor: 'text-amber-800' }
    ]
  },

  achievements: {
    eyebrow: 'OUR ACHIEVEMENTS',
    heading: 'Growing Together, Achieving More',
    description: 'Our students continue to make us proud in academics, sports, arts and beyond.',
    stats: [
      { id: 'stat1', value: '100+', label: 'Awards Won', iconName: 'Trophy' },
      { id: 'stat2', value: '95%', label: 'Parent Satisfaction', iconName: 'Users' },
      { id: 'stat3', value: '1500+', label: 'Happy Students', iconName: 'GraduationCap' },
      { id: 'stat4', value: '15+', label: 'Years of Excellence', iconName: 'Sparkles' }
    ]
  },

  admissionCTA: {
    heading: 'Give Your Child the Right Start',
    description: 'Admissions are now open for the academic year 2026 – 27.',
    primaryBtnText: 'Apply Now',
    secondaryBtnText: 'Schedule a Visit',
    decorativeLeftText: 'Their Dreams\nStart Here',
    decorativeRightText: 'Learn\nGrow\nBelong'
  },

  // 2. About Page Data
  aboutPage: {
    hero: {
      title: 'Our Story\nA Brighter Tomorrow',
      subtitle: 'Built on values. Inspired by people. Driven by a belief in every child’s potential.',
      description: 'Built on values. Inspired by people. Driven by a belief in every child’s potential.',
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=85'
    },
    purpose: {
      heading: 'Our Purpose',
      description: 'To nurture confident, compassionate and discerning individuals who make a positive difference in the world.',
      ctaText: 'Learn More',
      image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80'
    },
    visionMissionValues: {
      vision: {
        title: 'Our Vision',
        description: 'A more inclusive, brighter tomorrow through education.',
        iconName: 'Eye'
      },
      mission: {
        title: 'Our Mission',
        description: 'To provide holistic education that empowers every learner.',
        iconName: 'Compass'
      },
      values: {
        title: 'Our Values',
        description: 'Integrity, Respect, Curiosity, Excellence, Kindness.',
        iconName: 'Heart'
      }
    },
    principalMessage: {
      heading: 'Message from the Principal',
      quote: 'Education is not just about what we learn, but who we become. Our goal is to create a school where every child feels valued, challenged and supported.',
      name: 'Mrs. Geetha Reddy',
      role: 'Principal, Head of School',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
      ctaText: 'Read More'
    },
    timeline: [
      { year: '2010', title: 'Humble Beginnings', description: 'Founded with 80 students and 6 teachers.' },
      { year: '2015', title: 'Growing Stronger', description: 'CBSE affiliation & state-of-the-art labs.' },
      { year: '2018', title: 'Expanding Horizons', description: 'Sports complex and auditorium.' },
      { year: '2022', title: 'A New Campus', description: 'Modern STEM maker lab inaugurated.' },
      { year: 'Today', title: 'Continuing the Journey', description: '1500+ happy learners and growing.' }
    ],
    campusPreview: {
      title: 'Our Campus',
      image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1000&q=85',
      ctaText: 'Virtual Tour'
    },
    communityMetrics: [
      { count: '1500+', label: 'Students', iconName: 'GraduationCap' },
      { count: '80+', label: 'Teachers', iconName: 'Users' },
      { count: '2400+', label: 'Parents', iconName: 'Heart' },
      { count: '3000+', label: 'Alumni', iconName: 'Award' }
    ]
  },

  // 3. Academics Page Data
  academicsPage: {
    hero: {
      title: 'Academic Excellence\nfor a Brighter Future',
      subtitle: 'A well-rounded curriculum designed to spark curiosity, build skills and prepare students for life.',
      image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1200&q=85',
      decorativeTag: 'Learn\nExplore\nCreate'
    },
    philosophy: {
      heading: 'Our Academic Philosophy',
      description: 'Knowledge integrated with values, hands-on experiments, continuous inquiry, and differentiated pacing.',
      ctaText: 'Our Curriculum',
      pillars: [
        { title: 'Child-Centric Learning', iconName: 'Users' },
        { title: 'Conceptual Understanding', iconName: 'Lightbulb' },
        { title: 'Experiential Learning', iconName: 'Atom' },
        { title: 'Critical Thinking', iconName: 'Brain' },
        { title: 'Real-World Connections', iconName: 'Globe' }
      ]
    },
    stages: [
      {
        id: 'acad-kg',
        title: 'Kindergarten',
        subtitle: '(Pre-Primary)',
        grades: 'Nursery to UKG',
        keywords: 'Play • Explore • Grow',
        description: 'A joyful beginning with a safe, nurturing and stimulating environment.',
        iconName: 'Smile',
        bgColor: 'bg-white',
        borderColor: 'border-slate-200',
        iconBgColor: 'bg-amber-100',
        iconColor: 'text-amber-800',
        linkText: 'Learn More',
        image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=600&q=80'
      },
      {
        id: 'acad-primary',
        title: 'Primary School',
        subtitle: '(Grades 1–5)',
        grades: 'Grades 1–5',
        keywords: 'Learn • Discover • Imagine',
        description: 'Building strong fundamentals through engaging and interactive learning.',
        iconName: 'BookOpen',
        bgColor: 'bg-white',
        borderColor: 'border-slate-200',
        iconBgColor: 'bg-sky-100',
        iconColor: 'text-sky-800',
        linkText: 'Learn More',
        image: 'https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=600&q=80'
      },
      {
        id: 'acad-middle',
        title: 'Middle School',
        subtitle: '(Grades 6–8)',
        grades: 'Grades 6–8',
        keywords: 'Think • Create • Achieve',
        description: 'Encouraging critical thinking, creativity and leadership skills.',
        iconName: 'Atom',
        bgColor: 'bg-white',
        borderColor: 'border-slate-200',
        iconBgColor: 'bg-emerald-100',
        iconColor: 'text-emerald-800',
        linkText: 'Learn More',
        image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=600&q=80'
      },
      {
        id: 'acad-senior',
        title: 'Senior School',
        subtitle: '(Grades 9–12)',
        grades: 'Grades 9–12',
        keywords: 'Prepare • Perform • Lead',
        description: 'Equipping students with the knowledge, skills and values for a successful future.',
        iconName: 'GraduationCap',
        bgColor: 'bg-white',
        borderColor: 'border-slate-200',
        iconBgColor: 'bg-pink-100',
        iconColor: 'text-pink-800',
        linkText: 'Learn More',
        image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&q=80'
      }
    ],
    pedagogy: [
      { title: 'Interactive Classrooms', description: 'Smart 4K panels and hands-on modules.', iconName: 'Monitor' },
      { title: 'Project-Based Learning', description: 'Applied science and maths experiments.', iconName: 'FlaskConical' },
      { title: 'Technology Integration', description: 'Coding, AI foundations and digital fluency.', iconName: 'Cpu' },
      { title: 'Personalised Support', description: 'Differentiated pacing and remedial care.', iconName: 'UserCheck' }
    ],
    assessmentAndCoCurricular: {
      assessment: {
        title: 'Assessment & Growth',
        description: 'Comprehensive, continuous diagnostic evaluation focusing on concept internalization rather than rote memorization.',
        ctaText: 'Know More'
      },
      coCurricular: {
        title: 'Co-Curricular Integration',
        description: 'Sports, classical dance, music, debate, robotics, and social clubs woven smoothly into the daily schedule.',
        image: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?auto=format&fit=crop&w=600&q=80'
      }
    }
  },

  // 4. Admissions Page Data
  admissionsPage: {
    hero: {
      title: 'Begin a Brighter\nJourney With Us',
      subtitle: 'Admissions are now open for the upcoming academic year. Take the first step towards a bright future.',
      description: 'Admissions are now open for the upcoming academic year.',
      image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1200&q=85',
      decorativeTag: 'New\nBeginnings\nBrighter\nTomorrow'
    },
    whyChooseUs: [
      { title: 'Holistic Education', iconName: 'BookOpen', bgColor: 'bg-amber-100', iconColor: 'text-amber-800' },
      { title: 'Caring Environment', iconName: 'Heart', bgColor: 'bg-emerald-100', iconColor: 'text-emerald-800' },
      { title: 'Experienced Faculty', iconName: 'Users', bgColor: 'bg-sky-100', iconColor: 'text-sky-800' },
      { title: 'Modern Facilities', iconName: 'Building2', bgColor: 'bg-pink-100', iconColor: 'text-pink-800' },
      { title: 'Strong Parent Partnership', iconName: 'HeartHandshake', bgColor: 'bg-purple-100', iconColor: 'text-purple-800' }
    ],
    processSteps: [
      { step: '1', title: 'Enquiry', description: 'Get in touch with us' },
      { step: '2', title: 'Campus Visit', description: 'Experience our school' },
      { step: '3', title: 'Application', description: 'Submit the application form' },
      { step: '4', title: 'Interaction', description: 'Meet with our academic team' },
      { step: '5', title: 'Confirmation', description: 'Receive admission decision' }
    ],
    eligibility: {
      title: 'Eligibility Criteria',
      description: 'Age criteria and grade-wise eligibility as per state and board policy. Please check the specific age requirements for Kindergarten and Grade 1.',
      ctaText: 'Know More'
    },
    documents: {
      title: 'Required Documents',
      list: [
        'Completed application form',
        'Child’s birth certificate',
        'Recent passport size photographs (child and parents)',
        'Previous school report card (if applicable)',
        'Identity proof of parent/guardian (Aadhaar/Passport)'
      ]
    },
    feesAndFaq: {
      feeNote: 'For fee details and additional information, please contact our admissions office.',
      ctaText: 'Contact Admissions Desk →',
      faqs: [
        { question: 'What is the age criteria for admission?', answer: 'For Kindergarten, 3+ years as on June 1st; for Grade 1, 6+ years.' },
        { question: 'Is there an entrance test?', answer: 'We conduct a friendly, age-appropriate informal interaction rather than a stressful test.' },
        { question: 'Can we schedule a campus visit?', answer: 'Yes! Walk-in campus tours are available Monday to Saturday (9 AM - 4 PM).' },
        { question: 'Do you offer transport facilities?', answer: 'Yes, GPS-tracked buses cover all major local routes in Anantapur.' }
      ],
      campusImage: 'https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=800&q=80'
    }
  },

  // 5. Beyond Classrooms Page Data
  beyondClassroomsPage: {
    hero: {
      title: 'Discover. Explore. Become.',
      subtitle: 'A world of opportunities beyond academics.',
      image: 'https://images.unsplash.com/photo-1526676037777-05a232554f77?auto=format&fit=crop&w=1200&q=85',
      decorativeTag: 'More\nThan A\nClassroom'
    },
    categories: [
      { id: 'bc1', title: 'Sports & Fitness', image: 'https://images.unsplash.com/photo-1526676037777-05a232554f77?auto=format&fit=crop&w=600&q=80', tag: 'Physical Agility' },
      { id: 'bc2', title: 'Arts & Creativity', image: 'https://images.unsplash.com/photo-1460723237483-7a6dc9d0b212?auto=format&fit=crop&w=600&q=80', tag: 'Visual Expression' },
      { id: 'bc3', title: 'Music & Performing Arts', image: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?auto=format&fit=crop&w=600&q=80', tag: 'Stage & Melody' },
      { id: 'bc4', title: 'Clubs & Societies', image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=600&q=80', tag: 'Robotics & STEM' },
      { id: 'bc5', title: 'Leadership & Life Skills', image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=600&q=80', tag: 'Debate & MUN' },
      { id: 'bc6', title: 'Competitions', image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80', tag: 'Inter-School' },
      { id: 'bc7', title: 'Field Trips & Experiences', image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=600&q=80', tag: 'Outdoor Discovery' },
      { id: 'bc8', title: 'Community Service', image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=600&q=80', tag: 'Eco Green Club' }
    ],
    cta: {
      heading: 'Explore a Bigger World',
      primaryBtn: 'Enquire Now',
      secondaryBtn: 'See Our Gallery'
    }
  },

  // 6. Facilities Page Data
  facilitiesPage: {
    hero: {
      title: 'A Space to Learn,\nGrow and Thrive',
      subtitle: 'Modern facilities designed for modern learners.',
      image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1200&q=85',
      decorativeTag: 'Inspiring\nSpaces\nBrighter\nMinds'
    },
    facilityItems: [
      { id: 'fac1', title: 'Smart Classrooms', image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=600&q=80' },
      { id: 'fac2', title: 'Science Laboratories', image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=600&q=80' },
      { id: 'fac3', title: 'Library & Resource Centre', image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=600&q=80' },
      { id: 'fac4', title: 'Sports Facilities & Turf', image: 'https://images.unsplash.com/photo-1526676037777-05a232554f77?auto=format&fit=crop&w=600&q=80' },
      { id: 'fac5', title: 'Arts & Creative Spaces', image: 'https://images.unsplash.com/photo-1460723237483-7a6dc9d0b212?auto=format&fit=crop&w=600&q=80' },
      { id: 'fac6', title: 'Cafeteria & Dining', image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80' },
      { id: 'fac7', title: 'Transport Services', image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=600&q=80' },
      { id: 'fac8', title: 'Auditorium & Green Halls', image: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?auto=format&fit=crop&w=600&q=80' },
      { id: 'fac9', title: 'Infirmary & First Aid', image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=600&q=80' }
    ],
    cta: {
      heading: 'Experience Our Campus',
      primaryBtn: 'Schedule a Visit',
      secondaryBtn: 'Virtual Tour'
    }
  },

  // 7. Parent Corner Page Data
  parentCornerPage: {
    hero: {
      title: 'Partners in\nEvery Step',
      subtitle: 'A strong parent-school partnership creates brighter futures.',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=85'
    },
    portalCards: [
      { id: 'pc1', title: 'Parent Portal', description: 'Access academic information and fee status.', iconName: 'Monitor', bgColor: 'bg-emerald-100', iconColor: 'text-emerald-800' },
      { id: 'pc2', title: 'Academic Updates', description: 'Stay informed about progress and exams.', iconName: 'BookOpen', bgColor: 'bg-amber-100', iconColor: 'text-amber-800' },
      { id: 'pc3', title: 'Attendance', description: 'Track your child’s daily attendance.', iconName: 'UserCheck', bgColor: 'bg-sky-100', iconColor: 'text-sky-800' },
      { id: 'pc4', title: 'Events & Calendar', description: 'Never miss important school circulars.', iconName: 'Calendar', bgColor: 'bg-pink-100', iconColor: 'text-pink-800' },
      { id: 'pc5', title: 'Circulars', description: 'Latest school announcements and notices.', iconName: 'FileText', bgColor: 'bg-purple-100', iconColor: 'text-purple-800' },
      { id: 'pc6', title: 'Transport Information', description: 'Routes and bus timings.', iconName: 'Bus', bgColor: 'bg-orange-100', iconColor: 'text-orange-800' },
      { id: 'pc7', title: 'FAQs', description: 'Find quick answers for parents.', iconName: 'HelpCircle', bgColor: 'bg-cyan-100', iconColor: 'text-cyan-800' },
      { id: 'pc8', title: 'Connect With Us', description: 'We are here to help.', iconName: 'MessageSquare', bgColor: 'bg-amber-100', iconColor: 'text-amber-800' }
    ],
    cta: {
      heading: 'Stay Connected',
      primaryBtn: 'Login to Parent Portal',
      secondaryBtn: 'Contact Us'
    }
  },

  // 8. Contact Page Data
  contactPage: {
    hero: {
      title: 'Get in Touch',
      subtitle: 'We’d love to hear from you. Reach out to us for any queries or visit our campus.',
      decorativeTag: 'Let’s Build\nA Brighter\nTomorrow\nTogether'
    },
    contactInfo: {
      address: 'Near Ramnagar, Anantapur – 515001\nAndhra Pradesh, India',
      phone: '+91 88888 99999',
      email: 'info@sanatana.edu.in',
      officeHours: 'Mon – Sat: 8:30 AM – 4:00 PM'
    },
    mapImage: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=600&q=80',
    visitImage: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=600&q=80',
    socialMessage: 'Follow our journey and stay updated.'
  },

  footer: {
    shortDescription: 'Dedicated to value-driven, progressive holistic education in Anantapur.',
    quickLinks: [
      { label: 'Home', href: '#home' },
      { label: 'About', href: '#about' },
      { label: 'Academics', href: '#academics' },
      { label: 'Admissions', href: '#admissions' }
    ],
    facilitiesLinks: [
      { label: 'Facilities', href: '#facilities' },
      { label: 'News & Events', href: '#news' },
      { label: 'Parent Corner', href: '#parent-corner' },
      { label: 'Contact', href: '#contact' }
    ],
    contact: {
      address: 'Ramnagar, Anantapur – 515001\nAndhra Pradesh, India',
      phone: '+91 88888 99999',
      email: 'info@sanatana.edu.in'
    },
    socialMessage: "Let's build a brighter tomorrow together.",
    copyrightText: '© 2026 Sanatana International School. All Rights Reserved.'
  }
};
