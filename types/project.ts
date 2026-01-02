export interface Project {
  id: string;
  title: string;
  description: string;
  year: string;
  githubUrl: string;
  liveUrl: string;
  image: string;
  technologies: string[];
  featured?: boolean;
}

export interface ProjectsData {
  projects: Project[];
  totalProjects: number;
  featuredProjects: Project[];
}