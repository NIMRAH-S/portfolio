export interface SkillCategory {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  skills: {
    name: string;
    description: string;
  }[];
}

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'ai-automation',
    number: '01',
    title: 'AI & Automation',
    subtitle: 'AI agents, workflow automation, generative AI, computer vision, and search algorithms.',
    skills: [
      { name: 'AI Agent Development', description: 'Autonomous agents, tool execution, and AI-powered workflow systems' },
      { name: 'n8n Workflow Automation', description: 'Workflow orchestration, integrations, triggers, and automation pipelines' },
      { name: 'Gemini AI API', description: 'Generative AI API integration' },
      { name: 'Veo API', description: 'Generative video API integration' },
      { name: 'LLM API Integration', description: 'Secure API integration and AI content automation' },
      { name: 'Vision Transformers (ViT)', description: 'Deep learning vision architectures and feature analysis' },
      { name: 'BERT / ClinicalBERT', description: 'Language models for clinical and text applications' },
      { name: 'Neural Networks', description: 'Deep learning systems and model architectures' },
      { name: 'Search Algorithms (BFS, A*, Minimax)', description: 'Classical search and adversarial decision algorithms' },
      { name: 'Constraint Satisfaction', description: 'CSP solving with backtracking, forward checking, and AC-3' }
    ]
  },
  {
    id: 'languages',
    number: '02',
    title: 'Languages',
    subtitle: 'Languages for web, application, and AI development.',
    skills: [
      { name: 'Python', description: 'AI, coursework, and algorithm development' },
      { name: 'JavaScript', description: 'Modern ESNext standards and asynchronous applications' },
      { name: 'TypeScript', description: 'Type-safe application development' },
      { name: 'C', description: 'Systems and coursework programming' },
      { name: 'C++', description: 'Systems and coursework programming' },
      { name: 'PHP', description: 'Server-side web development' },
      { name: 'HTML', description: 'Semantic document structure and web standards' },
      { name: 'CSS', description: 'Responsive layouts and styling' }
    ]
  },
  {
    id: 'frameworks-libraries',
    number: '03',
    title: 'Frameworks & Libraries',
    subtitle: 'Frontend and backend frameworks, libraries, and state management.',
    skills: [
      { name: 'React', description: 'Modern hooks, modular state architecture, and component development' },
      { name: 'Node.js', description: 'Event-driven server runtimes and backend tooling' },
      { name: 'Express.js', description: 'RESTful API routing and middleware' },
      { name: 'Laravel', description: 'PHP web application framework' },
      { name: 'tRPC', description: 'Type-safe client-server communication' },
      { name: 'Tailwind CSS', description: 'Design tokens, utility-first spatial systems, and micro-layouts' },
      { name: 'Bootstrap', description: 'Responsive UI framework' },
      { name: 'jQuery', description: 'DOM utilities and browser scripting' },
      { name: 'Three.js', description: 'Interactive 3D graphics' },
      { name: 'Framer Motion', description: 'Physics-based choreography, spring transitions, and gestures' },
      { name: 'Zustand', description: 'Application state management' },
      { name: 'Socket.io', description: 'Realtime communication' }
    ]
  },
  {
    id: 'databases-cloud',
    number: '04',
    title: 'Databases & Cloud',
    subtitle: 'Databases, cloud platforms, and deployment services.',
    skills: [
      { name: 'MongoDB', description: 'Document schemas, aggregation pipelines, and flexible datastores' },
      { name: 'Firebase', description: 'Firestore, Auth, Admin SDK, and security rules' },
      { name: 'MySQL', description: 'Relational data modeling, CRUD, and structured data' },
      { name: 'Docker', description: 'Containerized applications and services' },
      { name: 'Vercel', description: 'Application hosting and serverless deployments' },
      { name: 'cPanel', description: 'Web hosting and deployment' }
    ]
  },
  {
    id: 'tools-workflow',
    number: '05',
    title: 'Tools & Concepts',
    subtitle: 'Developer tools, integrations, security, and collaborative practices.',
    skills: [
      { name: 'Git & GitHub', description: 'Branching strategies, atomic commits, pull requests, and collaborative code reviews' },
      { name: 'Google Workspace', description: 'Google Sheets integrations and productivity workflows' },
      { name: 'REST APIs', description: 'API integration and backend communication' },
      { name: 'Google OAuth', description: 'Authentication and account integrations' },
      { name: 'JWT', description: 'Token-based authentication' },
      { name: 'Serverless Functions', description: 'Backend functions and secure order creation' },
      { name: 'SEO', description: 'Indexing, sitemaps, and canonical URLs' },
      { name: 'Agile/Scrum', description: 'Sprint coordination and team collaboration' }
    ]
  }
];
