import { Project, ProjectsData } from '../types/project';

// Project data based on your GitHub repositories
const projectsData: Project[] = [
  {
    id: 'tip-calculator',
    title: 'Tip Calculator',
    description: 'A modern tip calculator built with React and TypeScript. Features split bill calculation and customizable tip percentages.',
    githubUrl: 'https://github.com/devcedrick/jimeno-tip-calculator',
    liveUrl: 'https://jimeno-tip-calculator.vercel.app/',
    image: '/screenshots/tip-calculator.png',
    technologies: ['React', 'TypeScript', 'CSS', 'Vercel'],
    featured: true
  },
  {
    id: 'tic-tac-toe',
    title: 'Tic Tac Toe',
    description: 'Interactive tic-tac-toe game with AI opponent and multiplayer mode. Clean UI with smooth animations.',
    githubUrl: 'https://github.com/devcedrick/tic-tac-toe',
    liveUrl: 'https://tictactoe-devdotced.vercel.app/',
    image: '/screenshots/tic-tac-toe.png',
    technologies: ['React', 'JavaScript', 'CSS', 'Game Logic'],
    featured: true
  },
  {
    id: 'netflix-clone',
    title: 'Netflix Clone',
    description: 'Full-featured Netflix clone with movie browsing, search functionality, and responsive design.',
    githubUrl: 'https://github.com/devcedrick/netflix-clone',
    liveUrl: 'https://netflix-clone-devdotced.vercel.app',
    image: '/screenshots/netflix-clone.png',
    technologies: ['React', 'API Integration', 'CSS', 'Responsive Design'],
    featured: true
  },
  {
    id: 'cedrix',
    title: 'Cedrix Portfolio',
    description: 'Personal portfolio website showcasing projects and skills with modern design and smooth animations.',
    githubUrl: 'https://github.com/devcedrick/cedrix',
    liveUrl: 'https://cedrix.vercel.app/',
    image: '/screenshots/cedrix.png',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    featured: true
  }
];

export const useProjectsData = (): ProjectsData => {
  const projects = projectsData;
  const featuredProjects = projects.filter(project => project.featured);
  
  return {
    projects,
    totalProjects: projects.length,
    featuredProjects
  };
};