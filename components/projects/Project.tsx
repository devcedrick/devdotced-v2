"use client"
import React from 'react';
import { useProjectsData } from '../../data/projects';
import ProjectGrid from './ProjectGrid';

const Project: React.FC = () => {
  const projectsData = useProjectsData();

  return (
    <section 
      id="projects" 
      data-section="projects"
      className="bg-background min-h-screen w-full text-primary p-6 lg:p-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className='flex flex-col gap-2 mb-8'>
          <h1 className='text-3xl font-bold'>PROJECTS</h1>
          <p className='text-secondary'>
            Featured projects showcasing my development skills and creativity
          </p>
          <div className='flex items-center gap-4 mt-2'>
            <div className='flex items-center gap-2'>
              <span className='stats-values'>{projectsData.totalProjects}</span>
              <span className='text-secondary text-sm'>Total Projects</span>
            </div>
            <div className='flex items-center gap-2'>
              <span className='stats-values'>{projectsData.featuredProjects.length}</span>
              <span className='text-secondary text-sm'>Featured</span>
            </div>
          </div>
        </div>
        
        <ProjectGrid data={projectsData} />
      </div>
    </section>
  );
}

export default Project;