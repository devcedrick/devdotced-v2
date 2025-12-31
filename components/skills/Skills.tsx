"use client"
import React from 'react';
import { skillsData } from '../../data/skills';
import SkillCard from './cards/SkillCard';
import { Wrench, Sparkles } from 'lucide-react';
import { Skill } from '../../types/skill';

const MarqueeRow = ({ skills, direction = 'left', speed = 'normal' }: { skills: Skill[], direction?: 'left' | 'right', speed?: 'slow' | 'normal' | 'fast' }) => {
  // Duplicate skills to ensure seamless scrolling
  const duplicatedSkills = [...skills, ...skills, ...skills, ...skills];
  
  return (
    <div className="relative flex overflow-hidden group py-2">
      <div 
        className={`flex gap-4 animate-scroll ${direction === 'right' ? 'animate-scroll-reverse' : ''} hover:[animation-play-state:paused]`}
        style={{ 
          animationDuration: speed === 'slow' ? '60s' : speed === 'fast' ? '30s' : '45s',
          width: 'max-content'
        }}
      >
        {duplicatedSkills.map((skill, index) => (
          <div key={`${skill.name}-${index}`} className="w-[160px]">
            <SkillCard skill={skill} />
          </div>
        ))}
      </div>
      
      {/* Gradient Masks for smooth fade effect */}
      <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
    </div>
  );
};

const Skills: React.FC = () => {
  const frontendSkills = skillsData.find(c => c.title === "Frontend Development")?.skills || [];
  const backendSkills = skillsData.find(c => c.title === "Backend & Database")?.skills || [];
  const toolsSkills = skillsData.find(c => c.title === "Tools & Others")?.skills || [];

  // Combine all skills for single row
  const allSkills = [...frontendSkills, ...backendSkills, ...toolsSkills];

  return (
    <section 
      id="skills" 
      data-section="skills"
      className="bg-background w-full text-primary p-6 lg:p-8 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className='flex flex-col gap-2 mb-8'>
          <div className="flex items-center gap-3">
            <div className="p-1.5 rounded-lg bg-accent/10">
              <Sparkles className="w-5 h-5 text-accent" />
            </div>
            <h1 className='text-2xl font-bold'>TECH STACK</h1>
          </div>
          <p className='text-secondary text-sm max-w-2xl'>
            Technologies I use to build scalable applications.
          </p>
        </div>

        {/* Static Tags Grouped by Category */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {skillsData.map((category) => (
            <div key={category.title} className="flex flex-col gap-3">
              <h3 className="text-sm font-bold text-primary uppercase tracking-wider opacity-80">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <div 
                    key={skill.name} 
                    className="group flex items-center gap-1.5 px-2.5 py-1.5 rounded-md bg-sidebar border border-border hover:border-accent/30 hover:bg-accent/5 transition-all duration-200"
                  >
                    <skill.icon 
                      className="w-3.5 h-3.5 text-secondary group-hover:text-primary transition-colors" 
                      style={{ color: skill.color }}
                    />
                    <span className="text-xs font-medium text-secondary group-hover:text-primary transition-colors">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* Single Marquee Row */}
        <div className="w-full">
          <MarqueeRow skills={allSkills} direction="left" speed="slow" />
        </div>
      </div>
    </section>
  );
}

export default Skills;
