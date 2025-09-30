import React from 'react';
import { GitHubStats } from '../../hooks/useGithubStats';
import ContributionCard from './cards/ContributionCard';
import StreakCard from './cards/StreakCard';
import LanguageDistributionCard from './cards/LanguageDistributionCard';
import HeatmapCard from './cards/HeatmapCard';

interface DashboardGridProps {
  stats: GitHubStats;
}

const DashboardGrid: React.FC<DashboardGridProps> = ({ stats }) => {
  const { totalContributions, activeRepositories, streak, languages, dailyContributions } = stats;

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-7xl mx-auto">
        <div className="col-span-1">
          <ContributionCard 
            totalContributions={totalContributions}
            activeRepositories={activeRepositories}
          />
        </div>

        <div className="col-span-1">
          <StreakCard streak={streak} />
        </div>

        <div className="col-span-2">
          <LanguageDistributionCard languages={languages} />
        </div>
      </div>

      <HeatmapCard dailyContributions={dailyContributions} />
    </>
  );
};

export default DashboardGrid;