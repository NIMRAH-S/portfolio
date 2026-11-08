export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  type: string;
  location?: string;
  description: string;
  responsibilities: string[];
  skills: string[];
}

export interface LeadershipItem {
  role: string;
  organization: string;
  period?: string;
  focus: string;
}

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'peace-university',
    role: 'Web Developer & AI Engineer',
    organization: 'Peace.University, USA',
    period: 'Jun 2026 — Aug 2026',
    type: 'Volunteer Experience',
    location: 'Remote',
    description: 'Built and integrated AI agents and developed the university website, automating operations and strengthening online form security.',
    responsibilities: [
      'Built n8n AI agents using Docker and Google Workspace to automate workflows and university operations',
      'Developed a lead capture agent consolidating forms, webinars, and manual sources in Google Sheets with deduplication; resolved API rate-limiting and trigger-state issues',
      'Automated email and SMS campaign content, landing pages, webinar scripts, and follow-ups',
      'Developed and deployed the university website with PHP form handling, reCAPTCHA, PHPMailer, and cPanel security hardening'
    ],
    skills: ['n8n', 'Docker', 'Google Workspace', 'PHP', 'reCAPTCHA', 'PHPMailer']
  },
  {
    id: 'tuf-project-coordinator',
    role: 'Agile Project Coordinator (Intern)',
    organization: 'The University of Faisalabad (TUF) — Head Office',
    period: 'Jul 2026 — Aug 2026',
    type: 'Internship',
    location: 'Faisalabad, Pakistan',
    description: 'Self-initiated an internal Executive Dashboard and coordinated work across teams under the CIO’s guidance.',
    responsibilities: [
      'Built an internal Executive Dashboard with Tasks, Notes, and Meetings modules; adopted by coordinators who followed',
      'Ran daily stand-ups and followed up on cross-team tasks',
      'Documented Minutes of Meetings (MOM) under the CIO’s guidance'
    ],
    skills: ['React 19', 'Firebase', 'Zustand', 'shadcn/ui', 'Agile/Scrum']
  },
  {
    id: 'second-cut',
    role: 'Web Developer',
    organization: 'Second Cut',
    period: 'Jun 2026 — Present',
    type: 'Professional Experience',
    description: 'Built and deployed a responsive e-commerce platform with authentication and server-side order creation.',
    responsibilities: [
      'Built a responsive e-commerce site with user authentication and server-side order creation using Vercel serverless functions and Firebase Admin SDK',
      'Deployed the application on Vercel',
      'Implemented SEO indexing, sitemap, canonical URLs, and web security best practices; audited security and tightened Firestore and Storage rules'
    ],
    skills: ['React', 'Vercel Serverless Functions', 'Firebase Admin SDK', 'SEO', 'Firestore']
  },
  {
    id: 'tuf-web-developer-intern',
    role: 'Web Developer Intern',
    organization: 'The University of Faisalabad (TUF)',
    period: 'Jun 2025 — Aug 2025',
    type: 'Internship',
    location: 'Faisalabad, Pakistan',
    description: 'Built full-stack web features, starting with PHP and MySQL and then moving to Laravel.',
    responsibilities: [
      'Developed full-stack features with HTML, CSS, JavaScript, jQuery, Bootstrap, and PHP',
      'Implemented CRUD functionality with MySQL',
      'Transitioned project development to the Laravel framework'
    ],
    skills: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'Bootstrap', 'PHP', 'MySQL', 'Laravel']
  }
];

export const LEADERSHIP_ROLES: LeadershipItem[] = [
  {
    role: 'Ambassador',
    organization: 'Google Women Techmakers',
    period: 'Sep 2026 — Present',
    focus: 'Empowering women in computing through technical workshops, mentorship, and community visibility.'
  },
  {
    role: 'Security Head',
    organization: 'Amnesty International FAST Chapter',
    period: 'Feb 2026 — Aug 2026',
    focus: 'Contributed to security and operations for the chapter.'
  },
  {
    role: 'PR Head',
    organization: 'Amnesty International FAST Chapter',
    period: 'Sep 2025 — Feb 2026',
    focus: 'Led public relations and community awareness for the chapter.'
  },
  {
    role: 'Human Resources Lead',
    organization: 'GDGOC FAST-NUCES CFD',
    period: 'Sep 2025 — Dec 2025',
    focus: 'Led talent coordination and team operations for the campus developer community.'
  },
  {
    role: 'External Relations Co-Head',
    organization: 'Career Connect Society',
    period: '2024',
    focus: 'Supported external relations and career connections for students.'
  },
  {
    role: 'Contestant',
    organization: 'ICPC Asia Topi Online Preliminary',
    period: '2025',
    focus: 'Competed with team Algorithm Alchemists.'
  }
];

export const ACADEMIC_MILESTONES = [
  {
    title: 'National University of Computer and Emerging Sciences (FAST-NUCES)',
    institution: 'B.S. in Computer Science, Chiniot-Faisalabad Campus',
    period: 'Expected 2027',
    highlight: 'Faisalabad, Pakistan · Relevant Coursework: Artificial Intelligence, Computer Networks, Operating Systems, Database Systems, Compiler Construction, Information Security.'
  }
];
