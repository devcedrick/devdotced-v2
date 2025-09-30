import React from 'react';
import { Calendar, GitBranch } from 'lucide-react';
import DashboardCard from '../common/DashboardCard';

interface ContributionCardProps {
  totalContributions: number;
  activeRepositories: number;
}

const ContributionCard: React.FC<ContributionCardProps> = ({
  totalContributions,
  activeRepositories
}) => {
  return (
    <DashboardCard
      title="Contributions"
      icon={Calendar}
      iconColor="text-blue-600"
    >
      <div className="flex flex-col gap-4 w-full">
        <div className="bg-background rounded-lg p-4 border border-border">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Calendar className="h-4 w-4 text-blue-500" />
              <span className="text-sm text-secondary">Total Contributions</span>
            </div>
            <span className="stats-values">
              {totalContributions.toLocaleString()}
            </span>
          </div>
        </div>
        
        <div className="bg-background rounded-lg p-4 border border-border">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <GitBranch className="h-4 w-4 text-green-500" />
              <span className="text-sm text-secondary">Active Repos</span>
            </div>
            <span className="stats-values">
              {activeRepositories}
            </span>
          </div>
        </div>
      </div>
    </DashboardCard>
  );
};

export default ContributionCard;