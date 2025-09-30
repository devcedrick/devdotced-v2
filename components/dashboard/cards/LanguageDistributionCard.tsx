import React from 'react';
import { BarChart3 } from 'lucide-react';
import DashboardCard from '../common/DashboardCard';
import LanguageProgressBar from '../charts/LanguageProgressBar';
import { LanguageStats } from '../../../hooks/useGithubStats';

interface LanguageDistributionCardProps {
  languages: LanguageStats[];
}

const LanguageDistributionCard: React.FC<LanguageDistributionCardProps> = ({ languages }) => {
  
  return (
    <DashboardCard
      title="Language Distribution"
      icon={BarChart3}
      iconColor="text-green-600"
    >
      <div className="w-full h-full">
        <LanguageProgressBar languages={languages} maxItems={8} />
      </div>
    </DashboardCard>
  );
};

export default LanguageDistributionCard;