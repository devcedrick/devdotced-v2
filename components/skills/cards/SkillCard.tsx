import React from 'react';
import { Skill } from '../../../types/skill';

interface SkillCardProps {
  skill: Skill;
}

const SkillCard: React.FC<SkillCardProps> = ({ skill }) => {
  const { name, icon: Icon, color } = skill;
  const isLightColor = color === '#FFFFFF';

  return (
    <div className="group relative flex items-center gap-2.5 px-3 py-2 rounded-lg bg-sidebar/50 border border-border hover:border-accent/50 transition-all duration-300 hover:shadow-md hover:shadow-accent/5 hover:-translate-y-0.5 overflow-hidden w-full">
      {/* Hover Gradient Background */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
        style={{ background: `linear-gradient(135deg, ${color} 0%, transparent 100%)` }}
      />
      
      <div 
        className="relative p-1.5 rounded-md bg-background border border-border group-hover:border-transparent transition-all duration-300 group-hover:scale-105"
      >
        <Icon 
          className={`w-4 h-4 text-secondary transition-colors duration-300 ${isLightColor ? 'group-hover:text-black' : 'group-hover:text-white'}`}
          style={{ color: undefined }}
        />
        {/* Icon Color Overlay on Hover */}
        <div 
          className="absolute inset-0 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
          style={{ backgroundColor: color }}
        >
          <Icon className={`w-4 h-4 ${isLightColor ? 'text-black' : 'text-white'}`} />
        </div>
      </div>
      
      <span className="font-medium text-sm text-secondary group-hover:text-primary transition-colors z-10 whitespace-nowrap">
        {name}
      </span>
    </div>
  );
};

export default SkillCard;
