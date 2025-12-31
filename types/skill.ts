import { IconType } from '@react-icons/all-files';

export interface Skill {
  name: string;
  icon: any; // Using any to accommodate different icon libraries (Lucide, React Icons, etc.)
  color?: string; // Brand color for the icon
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}
