import React from 'react';
import { ExternalLink, Github, Calendar, Star } from 'lucide-react';
import { Project } from '../../../types/project';
import Image from 'next/image';

interface ProjectCardProps {
  project: Project;
  className?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, className = '' }) => {
  const { title, description, githubUrl, liveUrl, image, technologies, year, featured } = project;

  return (
    <div className={`group bg-sidebar rounded-xl shadow-lg border ${featured ? 'border-yellow-500/30 shadow-yellow-500/5' : 'border-border'} hover:shadow-xl hover:scale-[1.02] transition-all duration-300 overflow-hidden ${className} h-full flex flex-col`}>
      {/* Project Image */}
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={image}
          alt={`${title} screenshot`}
          fill
          priority
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        
        {/* Featured Badge */}
        {featured && (
          <div className="absolute top-3 right-3 bg-yellow-500/90 backdrop-blur-sm text-black text-xs font-bold px-2.5 py-1 rounded-full z-10 flex items-center gap-1 shadow-sm">
            <Star size={10} fill="currentColor" />
            <span>FEATURED</span>
          </div>
        )}
        
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-sidebar/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      {/* Project Content */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <div className="flex flex-col gap-1">
            <h3 className="text-xl font-bold text-primary group-hover:text-accent transition-colors duration-200">{title}</h3>
            <div className="flex items-center gap-1.5 text-xs text-secondary font-medium">
              <Calendar className="w-3.5 h-3.5" />
              <span>{year}</span>
            </div>
          </div>
          
          <div className="flex gap-2">
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-border/50 hover:bg-accent hover:text-white transition-all duration-200 hover:-translate-y-0.5"
              aria-label={`View ${title} on GitHub`}
            >
              <Github className="w-4 h-4" />
            </a>
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-border/50 hover:bg-accent hover:text-white transition-all duration-200 hover:-translate-y-0.5"
                aria-label={`View ${title} live demo`}
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
        
        <p className="text-secondary text-sm mb-6 leading-relaxed line-clamp-3 flex-grow">
          {description}
        </p>
        
        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-border/50">
          {technologies.slice(0, 4).map((tech, index) => (
            <span
              key={index}
              className="text-xs px-2.5 py-1 rounded-md bg-background border border-border text-secondary font-medium"
            >
              {tech}
            </span>
          ))}
          {technologies.length > 4 && (
            <span className="text-xs px-2.5 py-1 rounded-md bg-background border border-border text-secondary font-medium">
              +{technologies.length - 4}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;