export interface Project {
  id: string;
  title: string;
  role: string;
  problem: string;
  outcome: string;
  stack: string[];
  githubUrl?: string;
  liveUrl?: string;
  isPrivate?: boolean;
  featured?: boolean;
}

export interface StackGroup {
  layer: string;
  items: string[];
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  type: 'internship' | 'freelance' | 'part-time' | 'full-time';
  description: string;
  stack: string[];
  isPrivate?: boolean;
}

export interface Achievement {
  id: string;
  title: string;
  issuer: string;
  date: string;
  category: 'competition' | 'certification' | 'recognition' | 'project';
  description?: string;
  url?: string;
}
