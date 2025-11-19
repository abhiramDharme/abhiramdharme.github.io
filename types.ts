export interface Internship {
  company: string;
  team: string;
  period: string;
  role: string;
  points: string[];
}

export interface Project {
  title: string;
  period: string;
  mentor?: string;
  techStack: string[];
  points: string[];
  type: 'System' | 'Web' | 'ML' | 'Kernel';
}

export interface Achievement {
  title: string;
  rank?: string;
  description: string;
}

export interface SkillCategory {
  category: string;
  items: string[];
}
