export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  technologies: string[];
  image?: string;
  accentColor?: string;
  featured: boolean;
  layout: 'wide' | 'split' | 'compact';
  githubUrl?: string;
  liveUrl?: string;
  highlights: string[];
}

export const PROJECTS: Project[] = [
  {
    id: 'ilmigo-digital-academy',
    number: '01',
    title: 'Ilmigo Digital Academy',
    category: 'Web Development / EdTech',
    shortDescription: 'A digital academy platform built with immersive 3D interactions and a modern frontend architecture.',
    fullDescription: 'Ilmigo Digital Academy is an educational platform combining interactive 3D visualizations, structured learning pathways, and dynamic client-side state management to make learning intuitive and engaging.',
    technologies: ['React', 'Three.js', 'Framer Motion', 'Tailwind CSS'],
    image: `${import.meta.env.BASE_URL}images/project_nextgen_academy_1794128994669.jpg`,
    featured: true,
    layout: 'wide',
    githubUrl: 'https://github.com/NIMRAH-S/Ilmigo-Digital-Academy',
    liveUrl: 'https://ilmigo.vercel.app/',
    highlights: [
      'Interactive 3D neural node visualizations with Three.js',
      'Fluid page transitions and staggered module navigation using Framer Motion',
      'Structured learning pathways with real-time progress persistence'
    ]
  },
  {
    id: 'ats-align',
    number: '02',
    title: 'ATS Align',
    category: 'AI / Career Technology',
    shortDescription: 'AI-powered career suite featuring semantic resume building, tailored cover letter generation, and job pipeline tracking.',
    fullDescription: 'ATS Align is an AI career suite with a resume builder, cover letter generator, job tracker, and admin portal. It uses the Gemini AI API, with AI calls proxied through the backend to keep API keys secure.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Gemini AI'],
    featured: true,
    layout: 'split',
    githubUrl: 'https://github.com/NIMRAH-S/ATS-Align',
    liveUrl: 'https://ats-align.vercel.app/',
    highlights: [
      'LLM-assisted keyword gap analysis via Gemini API',
      'Automated custom cover letter generation aligned to job postings',
      'End-to-end application stage management and interview tracking',
      'Backend-proxied AI calls to keep API keys secure'
    ]
  },
  {
    id: 'luxe-couture',
    number: '03',
    title: 'Luxe Couture Studio',
    category: 'Generative AI / Creative Technology',
    shortDescription: 'A generative AI fashion studio exploring computational haute couture and aesthetic synthesis through Gemini and Veo APIs.',
    fullDescription: 'Luxe Couture Studio is a generative-AI fashion studio for creating editorial banners, refining model poses, and animating fashion photography with Gemini and Veo APIs.',
    technologies: ['Gemini API', 'Veo API', 'TypeScript', 'React', 'Tailwind CSS'],
    image: `${import.meta.env.BASE_URL}images/project_luxe_couture_1794128994749.jpg`,
    featured: true,
    layout: 'wide',
    githubUrl: 'https://github.com/NIMRAH-S/luxe-couture-studio',
    liveUrl: 'https://luxe-couture-studio.vercel.app/',
    highlights: [
      'Generates editorial banners, refines model poses, and animates fashion photography',
      'Uses Gemini and Veo APIs for generative fashion workflows',
      'Resolved API-key exposure and production-readiness issues'
    ]
  },
  {
    id: 'peace-university-ai',
    number: '04',
    title: 'Peace University, USA — AI Automation',
    category: 'AI Engineering / Automation',
    shortDescription: 'Institutional web platform development and autonomous workflow pipelines for intelligent lead capture and content distribution.',
    fullDescription: 'Developed during my volunteer engagement at Peace University,USA. The project encompassed full-stack institutional web development, custom form handling, fortified security measures, and end-to-end automation pipelines constructed with n8n and containerized via Docker.',
    technologies: ['n8n', 'Docker', 'PHP', 'React', 'REST APIs'],
    featured: false,
    layout: 'split',
    githubUrl: 'https://github.com/NIMRAH-S/peace-university-ai-agents',
    highlights: [
      'Containerized n8n workflows orchestrating multi-channel inquiry routing',
      'Hardened institutional form handling and backend verification in PHP',
      'Automated content ingestion and notifications for administrative teams'
    ]
  },
  {
    id: 'medical-scan-forgery',
    number: '05',
    title: 'AI Medical Scan Forgery Detection',
    category: 'Research / Final Year Project',
    shortDescription: 'Final-year research project designing an AI system to detect forged medical scans for insurance claim verification.',
    fullDescription: 'Designing an AI system for insurance claim verification that detects forged medical scans by combining a Vision Transformer with texture analysis techniques, including GLCM, LBP, and Wavelet.',
    technologies: ['Vision Transformer', 'ClinicalBERT', 'GLCM', 'LBP', 'Wavelet', 'Python'],
    image: `${import.meta.env.BASE_URL}images/project_medical_detection_1794128994761.jpg`,
    featured: true,
    layout: 'wide',
    githubUrl: 'https://github.com/NIMRAH-S/ClaimScan',
    highlights: [
      'Self-attention feature extraction with Vision Transformers (ViT)',
      'Cross-modal diagnostic context modeling using ClinicalBERT embeddings',
      'Pixel-level bounding maps identifying in-painted or spliced abnormalities'
    ]
  },
  {
    id: 'executive-dashboard',
    number: '06',
    title: 'Executive Dashboard',
    category: 'Enterprise Software',
    shortDescription: 'Internal executive operations dashboard developed during Project Coordinator & Web Developer internship at TUF.',
    fullDescription: 'Self-initiated and built an internal Executive Dashboard for The University of Faisalabad (TUF), with Tasks, Notes, and Meetings modules using React 19, Firebase, Zustand, and shadcn/ui.',
    technologies: ['React 19', 'Firebase', 'Zustand', 'shadcn/ui'],
    featured: false,
    layout: 'compact',
    githubUrl: 'https://github.com/NIMRAH-S/Executive-Dashboard',
    liveUrl: 'https://executive-dashboard-topaz.vercel.app/',
    highlights: [
      'Real-time sprint progress monitoring and milestone status feeds',
      'Role-tailored viewports for department chairs and project coordinators',
      'Streamlined data import and export pipelines for reporting'
    ]
  },
  {
    id: 'second-cut',
    number: '07',
    title: 'Second Cut',
    category: 'E-Commerce / Web Development',
    shortDescription: 'Responsive e-commerce site with user authentication and server-side order creation.',
    fullDescription: 'A responsive e-commerce site deployed on Vercel, using Vercel serverless functions and Firebase Admin SDK for server-side order creation. Includes SEO indexing, sitemap, canonical URLs, and tightened Firestore and Storage rules.',
    technologies: ['React', 'Vercel Serverless Functions', 'Firebase Admin SDK', 'SEO'],
    featured: false,
    layout: 'compact',
    liveUrl: 'https://second-cut.vercel.app/',
    highlights: [
      'Real-time product inventory sync and querying with Firebase Firestore',
      'Editorial lookbook grid with instant collection filtering',
      'Responsive client-side shopping bag state and checkout validation'
    ]
  },
  {
    id: 'battle-city-ai',
    number: '08',
    title: 'Battle City AI Agents',
    category: 'Artificial Intelligence',
    shortDescription: 'University coursework implementing game-playing AI agents, search algorithms, a logic-based Wumpus World agent, and a CSP Sudoku solver.',
    fullDescription: 'Built game-playing AI agents using BFS, A*, Minimax, and utility-based algorithms, plus a knowledge-based Wumpus World agent using propositional logic and resolution refutation, and a CSP Sudoku solver using backtracking, forward checking, and AC-3.',
    technologies: ['Python', 'Pygame', 'Tkinter', 'BFS', 'A*', 'Minimax', 'CSP'],
    featured: false,
    layout: 'compact',
    githubUrl: 'https://github.com/NIMRAH-S/Battle-city-ai-agents',
    highlights: [
      'Game-playing agents using BFS, A*, Minimax, and utility-based algorithms',
      'Knowledge-based Wumpus World agent using propositional logic and resolution refutation',
      'CSP Sudoku solver using backtracking, forward checking, and AC-3'
    ]
  }
];
