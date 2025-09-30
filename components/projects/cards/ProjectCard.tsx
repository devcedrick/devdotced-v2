import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Project } from '../../../types/project';
import Image from 'next/image';

interface ProjectCardProps {
  project: Project;
  className?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, className = '' }) => {
  const { title, description, githubUrl, liveUrl, image, technologies } = project;

  return (
    <div className={`bg-sidebar rounded-xl shadow-lg border border-border hover:shadow-xl hover:scale-[1.02] transition-all duration-300 overflow-hidden ${className} h-full`}>
      {/* Project Image */}
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={image}
          alt={`${title} screenshot`}
          fill
          className="object-cover hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      
      {/* Project Content */}
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold text-primary">{title}</h3>
          <div className="flex gap-2">
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-border hover:bg-accent hover:text-white transition-colors duration-200"
              aria-label={`View ${title} on GitHub`}
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-border hover:bg-accent hover:text-white transition-colors duration-200"
              aria-label={`View ${title} live demo`}
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
        
        <p className="text-secondary text-sm mb-4 leading-relaxed">
          {description}
        </p>
        
        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="tags"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;