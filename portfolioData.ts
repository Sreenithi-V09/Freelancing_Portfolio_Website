import { Project, ServiceItem, FaqItem } from '../types/portfolio';

export const BRAND_INFO = {
  name: 'Sreenithi V.',
  monogram: 'SV',
  title: 'Freelance Web Developer',
  tagline: 'Modern Websites. Thoughtful Design. Real Solutions.',
  eyebrow: 'FREELANCE WEB DEVELOPER',
  heroHeading: 'Your Ideas Deserve a Beautiful Website.',
  heroBio: "I'm Sreenithi, a freelance web developer creating modern, responsive websites for small businesses, startups, and individuals. I turn ideas into clear, user-friendly web experiences.",
  availability: 'Open to freelance projects',
  email: 'sreenithivenkatesan09@gmail.com',
  githubUrl: 'https://github.com/Sreenithi-V09',
  linkedinUrl: 'https://www.linkedin.com/in/sreenithi-v-7a24692a4/',
  aboutIntro: "I'm Sreenithi V., an aspiring freelance web developer with an academic background in Computer Science and Business Systems. I enjoy building websites that combine thoughtful design, usability, and practical functionality. I'm continuously improving my skills through hands-on projects and learning how to turn real requirements into useful web experiences.",
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'business-websites',
    title: 'Business Websites',
    icon: 'Briefcase',
    recommendedFor: 'Small businesses & local services',
    description: 'Professional websites that help small businesses explain their services, establish an online presence, and make it easier for customers to get in touch.',
    deliverables: [
      'Home page with clear brand identity',
      'About and services sections',
      'Contact information & inquiry form layout',
      'Responsive layout across mobile & desktop',
      'Basic on-page SEO & meta tags',
    ],
  },
  {
    id: 'portfolio-websites',
    title: 'Personal Portfolio Websites',
    icon: 'User',
    recommendedFor: 'Students, job seekers & professionals',
    description: 'Clean, personalized websites that help students, job seekers, freelancers, and professionals present their work, skills, and experience.',
    deliverables: [
      'Personal introduction & bio highlights',
      'Structured skills & project showcase',
      'Resume or profile links integration',
      'Direct contact & inquiry options',
      'Responsive, mobile-friendly design',
    ],
  },
  {
    id: 'landing-pages',
    title: 'Landing Pages',
    icon: 'Layout',
    recommendedFor: 'Startups, product launches & events',
    description: 'Focused, attractive landing pages that communicate a product, service, or offer clearly and guide visitors toward a specific action.',
    deliverables: [
      'High-impact hero & value proposition',
      'Structured features or benefits layout',
      'Clear, accessible call-to-action triggers',
      'Fluid responsive layout for all screens',
      'Basic metadata & performance optimization',
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'cyber-attack-prediction',
    title: 'Cyber Attack Prediction Application',
    category: 'Cybersecurity / Web Application',
    description: 'A project focused on presenting cyber attack prediction information through a web-based interface.',
    techStack: ['HTML', 'CSS', 'JavaScript', 'MySQL'],
    features: [
      'User authentication interface with credential validation',
      'Dashboard view for displaying prediction metrics and threat vectors',
      'Security-related data presentation with protocol summaries',
      'Prediction results and threat status severity indicators',
    ],
    visualType: 'cybersecurity',
    status: 'Learning Showcase',
    hasLiveDemo: true,
    githubUrl: 'https://github.com/Sreenithi-V09/cyber-attack-prediction',
  },
  {
    id: 'medical-chatbot',
    title: 'Medical Chatbot Interface',
    category: 'AI / Chatbot Interface',
    description: 'A medical information chatbot project designed to demonstrate conversational interaction and a user-friendly interface.',
    techStack: ['Python', 'AI Integration', 'HTML', 'CSS', 'JavaScript'],
    features: [
      'Responsive conversational chat interface layout',
      'Clear user message and AI response bubble display',
      'Conversation layout with rapid prompt suggestions',
      'AI integration for structured informational responses',
    ],
    visualType: 'chatbot',
    status: 'Learning Showcase',
    hasLiveDemo: true,
    githubUrl: 'https://github.com/Sreenithi-V09/medical-chatbot',
  },
  {
    id: 'personal-portfolio',
    title: 'Personal Portfolio Website',
    category: 'Frontend Development',
    description: 'A personal website that introduces the developer, showcases selected work, explains services, and provides contact options.',
    techStack: ['HTML5', 'CSS3', 'JavaScript'],
    features: [
      'Responsive navigation bar with active section tracking',
      'Curated project gallery with interactive feature modals',
      'Transparent services breakdown and deliverables list',
      'Accessible contact inquiry form with validation',
      'Mobile-friendly layout tested across viewport sizes',
    ],
    visualType: 'portfolio',
    status: 'Complete',
    hasLiveDemo: true,
    githubUrl: 'https://github.com/Sreenithi-V09/portfolio',
  },
];

export const SKILLS_DATA = {
  frontend: [
    { name: 'HTML5', desc: 'Semantic tags, accessible structure, SEO fundamentals' },
    { name: 'CSS3', desc: 'Flexbox, CSS Grid, media queries, modern responsive styling' },
    { name: 'JavaScript', desc: 'DOM manipulation, ES6+ features, asynchronous fetch, interactive UI' },
  ],
  additional: [
    { name: 'Java', desc: 'Object-oriented programming, data structures & algorithmic thinking' },
    { name: 'C & C++', desc: 'Foundational programming concepts, memory concepts & problem solving' },
    { name: 'MySQL', desc: 'Relational database queries, schema structuring & CRUD operations' },
    { name: 'Python', desc: 'Scripting, backend logic, and AI/ML model integration basics' },
    { name: 'Flask', desc: 'Lightweight web routing & simple RESTful API endpoints' },
    { name: 'Git & GitHub', desc: 'Version control, repository management & GitHub Pages publishing' },
  ],
};

export const PROCESS_STEPS = [
  {
    number: '01',
    title: 'Discover',
    description: "Understand the client's business, audience, goals, content, and requirements.",
    focus: 'Requirement gathering & expectations',
  },
  {
    number: '02',
    title: 'Plan',
    description: 'Organize the pages, structure, content, and visual direction.',
    focus: 'Sitemap, wireframe & layout flow',
  },
  {
    number: '03',
    title: 'Design and Develop',
    description: 'Build the website with responsive layouts, consistent styling, and functional interactions.',
    focus: 'Clean HTML, modern CSS & JavaScript',
  },
  {
    number: '04',
    title: 'Test and Refine',
    description: 'Check mobile layouts, navigation, form validation, readability, accessibility, and browser behavior.',
    focus: 'Cross-browser testing & device checks',
  },
  {
    number: '05',
    title: 'Launch',
    description: 'Help deploy the finished website and explain how to maintain or update it.',
    focus: 'Deployment to hosting & project handover',
  },
];

export const WHY_WORK_WITH_ME = [
  {
    title: 'Client-Focused',
    description: 'Understand requirements before choosing a solution. I take the time to learn what your business or project actually needs rather than applying a cookie-cutter approach.',
    icon: 'Target',
  },
  {
    title: 'Responsive by Design',
    description: 'Build layouts tailored for smartphones, tablets, laptops, and desktop displays so your visitors enjoy a consistent, reliable experience on any screen.',
    icon: 'Smartphone',
  },
  {
    title: 'Clear Communication',
    description: 'Keep project discussions, progress updates, and expectations understandable and transparent from day one through delivery.',
    icon: 'MessageSquare',
  },
  {
    title: 'Continuous Improvement',
    description: 'Learn from feedback and refine the final result. As an enthusiastic developer, I put genuine care and attention to detail into every project.',
    icon: 'Sparkles',
  },
];

export const FAQS: FaqItem[] = [
  {
    question: 'What types of websites can you build?',
    answer: 'I focus on business websites, personal portfolios, and landing pages using HTML, CSS, and JavaScript. These are tailored to clearly communicate your offer and give you a strong web presence.',
  },
  {
    question: 'Will my website work on mobile devices?',
    answer: 'The goal is to make each website responsive and usable across common screen sizes, with testing before delivery so that phones, tablets, and laptops all render smoothly.',
  },
  {
    question: 'Can you redesign my existing website?',
    answer: 'I can discuss the current website, your requirements, and whether the requested changes fit my skills and project scope to ensure we achieve your intended goals.',
  },
  {
    question: 'How much does a website cost?',
    answer: 'Pricing depends on the number of pages, design requirements, functionality, and delivery scope. I will discuss requirements and agree on a quote before starting.',
  },
  {
    question: 'How long does a project take?',
    answer: 'The timeline depends on complexity, content availability, and requested features. A specific timeline will be agreed upon after discussing the project.',
  },
  {
    question: 'Can you add forms or backend features?',
    answer: 'Basic frontend forms can be created with validation. Delivering messages, storing information, authentication, or other server-side functions may require a backend or an external service.',
  },
];
