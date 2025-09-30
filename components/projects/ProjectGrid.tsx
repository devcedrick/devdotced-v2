import React from 'react';
import { ProjectsData } from '../../types/project';
import ProjectCard from './cards/ProjectCard';

interface ProjectGridProps {
  data: ProjectsData;
}

const ProjectGrid: React.FC<ProjectGridProps> = ({ data }) => {
  const { projects } = data;

  return (
    <div className="w-full max-w-7xl mx-auto">
      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            className="flex flex-col"
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectGrid;