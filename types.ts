
export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  date: string;
  image: string;
  link?: string;
  github?: string;
}

export interface Skill {
  name: string;
  category: 'Language' | 'Tool' | 'Framework' | 'Concept';
}

export interface Experience {
  role: string;
  organization: string;
  period: string;
  description: string[];
}
