import { Project, ProjectsData } from '../types/project';

// Project data based on your GitHub repositories
const projectsData: Project[] = [
  {
    id: 'whispr-ph',
    title: 'Whispr',
    description: 'A privacy-focused social media app that uses geolocation to enable anonymous, real-time chat with strangers nearby.',
    year: ' Dec 2025',
    githubUrl: 'https://github.com/devcedrick/jimeno-whispr-web',
    liveUrl: 'https://whispr-ph.vercel.app/',
    image: '/screenshots/whispr.png',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Shadcn', 'Supabase'],
    featured: true
  },
  {
    id: 'tip-calculator',
    title: 'Tip Calculator',
    description: 'A modern tip calculator built with React and TypeScript. Features split bill calculation and customizable tip percentages.',
    year: 'Sep 2025',
    githubUrl: 'https://github.com/devcedrick/jimeno-tip-calculator',
    liveUrl: 'https://jimeno-tip-calculator.vercel.app/',
    image: '/screenshots/tip-calculator.png',
    technologies: ['React', 'TypeScript', 'CSS', 'Vercel'],
    featured: false
  },
  {
    id: 'tic-tac-toe',
    title: 'Tic Tac Toe',
    description: 'Interactive tic-tac-toe game with AI opponent and multiplayer mode with clean UI.',
    year: 'Sep 2025',
    githubUrl: 'https://github.com/devcedrick/tic-tac-toe',
    liveUrl: 'https://tictactoe-devdotced.vercel.app/',
    image: '/screenshots/tic-tac-toe.png',
    technologies: ['Next.js', 'Typescript', 'CSS', 'Game Logic'],
    featured: false
  },
  {
    id: 'netflix-clone',
    title: 'Netflix Clone',
    description: 'Full-featured Netflix clone with movie browsing, search functionality, and responsive design.',
    year: 'Aug 2025',
    githubUrl: 'https://github.com/devcedrick/netflix-clone',
    liveUrl: 'https://netflix-clone-devdotced.vercel.app',
    image: '/screenshots/netflix-clone.png',
    technologies: ['React', 'JavaScript', 'API Integration', 'CSS', 'Firebase Auth'],
    featured: false
  },
  {
    id: 'amazon-clone',
    title: 'Amazon Clone',
    description: 'A simple Amazon e-commerce clone I built to practice Vanilla Javascript and DOM manipulation.',
    year: 'Aug 2025',
    githubUrl: 'https://github.com/devcedrick/amazon-clone',
    liveUrl: 'https://devdotced-amazon-clone.vercel.app/',
    image: '/screenshots/amazon-clone.png',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Jasmine'],
    featured: false
  },
  {
    id: 'cedrix',
    title: 'Cedrix AI Chatbot (Unfinished)',
    description: 'A personal AI chatbot application that leverages Gemini API to provide intelligent responses and assistance.',
    year: 'Not yet finished',
    githubUrl: 'https://github.com/devcedrick/cedrix',
    liveUrl: '',
    image: '/screenshots/cedrix.png',
    technologies: ['React', 'Javascript', 'Tailwind CSS', 'Gemini API'],
    featured: false
  },
  
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