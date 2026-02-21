
import { Project, Skill, Experience } from './types';
import {
  Github,
  Linkedin,
  Mail
} from 'lucide-react';
import React from 'react';

export const SOCIAL_LINKS = [
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/atharva-singh1/', icon: <Linkedin size={20} /> },
  { name: 'GitHub', url: 'https://github.com/atharva169', icon: <Github size={20} /> },
  { name: 'Email', url: 'mailto:atharvasinghh72@gmail.com', icon: <Mail size={20} /> },
];

export const PROJECTS: Project[] = [
  {
    id: 'krishmitra',
    title: 'KrishMitra',
    description: 'Smart Agriculture Advisory System built for SIH. Uses Random Forest ML model for real-time agricultural predictions based on soil and weather inputs.',
    tags: ['Python', 'Flask', 'Machine Learning', 'Random Forest'],
    date: 'Sep 2025',
    image: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&q=80&w=800',
    github: 'https://github.com/atharva169/Krishimitra'
  },
  {
    id: 'bank-system',
    title: 'Bank Management System',
    description: 'A robust banking application implementing core OOP principles, featuring secure transactions and PIN-based authentication.',
    tags: ['Python', 'OOP', 'Data Structures'],
    date: 'Aug 2025',
    image: 'https://images.unsplash.com/photo-1601597111158-2fceff292cdc?auto=format&fit=crop&q=80&w=800',
    github: 'https://github.com/atharva169/ATM-SIMULATOR'
  },
  {
    id: 'campus-cravings',
    title: 'Campus Cravings',
    description: 'A responsive restaurant web platform with modern UI/UX design, optimized for seamless user interaction across devices.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
    date: 'Nov 2024',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800',
    github: 'https://github.com/atharva169/Campus_Cravings'
  }
];

export const SKILLS: Skill[] = [
  { name: 'Python', category: 'Language' },
  { name: 'Java', category: 'Language' },
  { name: 'C', category: 'Language' },
  { name: 'SQL', category: 'Language' },
  { name: 'Pandas', category: 'Framework' },
  { name: 'NumPy', category: 'Framework' },
  { name: 'Matplotlib', category: 'Framework' },
  { name: 'Scikit-learn', category: 'Framework' },
  { name: 'GitHub', category: 'Tool' },
  { name: 'VS Code', category: 'Tool' },
  { name: 'Machine Learning', category: 'Concept' },
  { name: 'Agentic AI', category: 'Concept' },
];

export const LEADERSHIP: Experience[] = [
  {
    role: 'Core Member',
    organization: 'GDG KIET (Google Developers Group)',
    period: 'Present',
    description: [
      'Organizing technical events and workshops for community members.',
      'Active participation in building a vibrant developer ecosystem on campus.'
    ]
  },
  {
    role: 'Volunteer',
    organization: 'Smart India Hackathon (SIH)',
    period: '2025',
    description: [
      'Managed event logistics for a 6-day national level hackathon.',
      'Coordinated between teams and mentors to ensure smooth execution.'
    ]
  }
];
