import React from 'react';
import { ProjectsData } from '../../types/project';
import ProjectCard from './cards/ProjectCard';
import { Star, Layers } from 'lucide-react';

interface ProjectGridProps {
  data: ProjectsData;
}

const ProjectGrid: React.FC<ProjectGridProps> = ({ data }) => {
  const { projects } = data;
  
  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <div className="w-full max-w-7xl mx-auto space-y-12">
      {/* Featured Projects Section */}
      {featuredProjects.length > 0 && (
        <div className="space-y-6">
          <div className="flex items-center gap-2 pb-2 border-b border-border/50">
            <Star className="w-5 h-5 text-yellow-500" fill="currentColor" />
            <h2 className="text-xl font-bold text-primary">Featured Projects</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                className="flex flex-col"
              />
            ))}
          </div>
        </div>
      )}

      {/* Other Projects Section */}
      {otherProjects.length > 0 && (
        <div className="space-y-6">
          <div className="flex items-center gap-2 pb-2 border-b border-border/50">
            <Layers className="w-5 h-5 text-accent" />
            <h2 className="text-xl font-bold text-primary">Other Projects</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                className="flex flex-col"
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectGrid;