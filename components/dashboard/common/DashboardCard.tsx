import React from 'react';
import { LucideIcon } from 'lucide-react';

interface DashboardCardProps {
  title: string;
  icon: LucideIcon;
  iconColor: string;
  children: React.ReactNode;
  className?: string;
}

const DashboardCard: React.FC<DashboardCardProps> = ({
  title,
  icon: Icon,
  iconColor,
  children,
  className = ''
}) => {
  return (
    <div className={`bg-sidebar rounded-xl shadow-lg p-6 border border-border hover:shadow-xl hover:scale-101 transition-all duration-30 ${className} h-full`}>
      <div className="flex flex-col">
        <div className={`flex justify-between items-center rounded-full mb-4 shadow-sm p-2`}>
          <h3 className="text-lg font-semibold text-center text-primary">{title}</h3>
          <div className='rounded-xl p-2 bg-border'>
            <Icon className={`w-5 h-5 ${iconColor}`} />
          </div>
          
        </div>
        
        {children}
      </div>
    </div>
  );
};

export default DashboardCard;