import React from 'react';
import { Flame, Trophy } from 'lucide-react';
import DashboardCard from '../common/DashboardCard';

interface StreakCardProps {
  currentStreak: number;
  longestStreak: number;
}

const StreakCard: React.FC<StreakCardProps> = ({ currentStreak, longestStreak }) => {
  return (
    <DashboardCard
      title="Coding Streak"
      icon={Flame}
      iconColor="text-orange-600"
    >
      <div className="flex flex-col gap-4 w-full">
        <div className="flex items-center justify-between bg-background rounded-lg border border-border p-4">
          <div className="flex items-center justify-center gap-2">
            <Flame className="h-5 w-5 text-orange-500" />
            <span className="text-sm text-secondary">Current Streak</span>
          </div>
          <div className="stats-values text-right">
            {currentStreak} days
          </div>
        </div>
        
        <div className="flex items-center justify-between bg-background rounded-lg p-4 border border-border">
          <div className="flex items-center justify-center gap-2">
            <Trophy className="h-5 w-5 text-purple-500 mr-2" />
            <span className="text-sm text-secondary">Best Streak</span>
          </div>
          <div className="stats-values">
            {longestStreak} days
          </div>
        </div>
      </div>
    </DashboardCard>
  );
};

export default StreakCard;