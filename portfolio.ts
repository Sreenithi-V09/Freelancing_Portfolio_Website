export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  techStack: string[];
  features: string[];
  visualType: 'cybersecurity' | 'chatbot' | 'portfolio';
  status: 'Complete' | 'In Development' | 'Learning Showcase';
  hasLiveDemo: boolean;
  demoUrl?: string;
  githubUrl?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  deliverables: string[];
  icon: string;
  recommendedFor: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ContactFormData {
  fullName: string;
  email: string;
  projectType: string;
  budgetRange: string;
  projectDescription: string;
}
