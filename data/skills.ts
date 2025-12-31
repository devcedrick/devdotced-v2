import { 
  Code, 
  Database, 
  Layout, 
  Server, 
  Smartphone, 
  Terminal, 
  Figma, 
  Github, 
  GitBranch,
  Globe,
  Cpu,
  Palette
} from 'lucide-react';
import { SkillCategory } from '../types/skill';

export const skillsData: SkillCategory[] = [
  {
    title: "Frontend Development",
    skills: [
      { name: "HTML5", icon: Layout, color: "#E34F26" },
      { name: "CSS3", icon: Palette, color: "#1572B6" },
      { name: "TypeScript", icon: Code, color: "#3178C6" },
      { name: "Tailwind CSS", icon: Palette, color: "#06B6D4" },
      { name: "React", icon: Code, color: "#61DAFB" },
      { name: "Next.js", icon: Globe, color: "#FFFFFF" },
    ]
  },
  {
    title: "Backend & Database",
    skills: [
      { name: "Supabase", icon: Database, color: "#3ECF8E" },
      { name: "Firebase", icon: Database, color: "#FFCA28" },
      { name: "PostgreSQL", icon: Database, color: "#4169E1" },
    ]
  },
  {
    title: "Tools & Others",
    skills: [
      { name: "Git", icon: GitBranch, color: "#F05032" },
      { name: "GitHub", icon: Github, color: "#FFFFFF" },
      { name: "Figma", icon: Figma, color: "#F24E1E" },
      { name: "VS Code", icon: Terminal, color: "#007ACC" },
      { name: "Vercel", icon: Globe, color: "#FFFFFF" },
    ]
  }
];
