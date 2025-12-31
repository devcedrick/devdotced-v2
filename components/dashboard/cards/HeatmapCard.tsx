import React from 'react'
import { ActivityCalendar, ThemeInput } from 'react-activity-calendar';
import { Calendar } from 'lucide-react';
import { DailyContribution } from '@/types/github';

interface HeatmapCardProps {
  dailyContributions: DailyContribution[];
}

// GitHub-style theme for the calendar (adjusted to not blend with background)
const githubTheme: ThemeInput = {
  dark: ['#21272e', '#0e4429', '#006d32', '#26a641', '#39d353'],
};

const HeatmapCard: React.FC<HeatmapCardProps> = ({ dailyContributions }) => {
  // Get current year
  const currentYear = 2025;
  
  // Filter contributions for current year and transform to ActivityCalendar format
  const activityData = dailyContributions
    .filter(c => new Date(c.date).getFullYear() === currentYear)
    .map(c => ({
      date: c.date,
      count: c.contributionCount,
      level: c.contributionCount === 0 ? 0 
           : c.contributionCount <= 3 ? 1 
           : c.contributionCount <= 6 ? 2 
           : c.contributionCount <= 9 ? 3 
           : 4,
    }));

  // Calculate total contributions for the year
  const totalYearContributions = activityData.reduce((sum, day) => sum + day.count, 0);

  return (
    <div className="bg-sidebar rounded-xl border border-border shadow-lg p-6 w-full mt-8">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div>
            <h3 className="text-lg font-semibold text-primary">Contribution Activity</h3>
            <p className="text-xs text-secondary">{totalYearContributions} contributions in {currentYear}</p>
          </div>
        </div>
      </div>

      {activityData.length > 0 ? (
        <div className="space-y-4">
          <div className="w-max overflow-x-auto">
            <ActivityCalendar
              data={activityData}
              theme={githubTheme}
              colorScheme="dark"
              blockSize={15}
              blockMargin={4}
              blockRadius={4}
              fontSize={12}
              showWeekdayLabels
              labels={{
                totalCount: '{{count}} contributions in {{year}}',
              }}
            />
          </div>
          
          {/* Custom Legend */}
          <div className="flex items-center justify-between pt-4 border-t border-border">
            <div className="flex items-center gap-2 text-xs text-secondary">
              <span>Less</span>
              <div className="flex gap-1">
                {githubTheme.dark?.map((color, index) => (
                  <div
                    key={index}
                    className="w-3 h-3 rounded border border-border/50"
                    style={{ backgroundColor: color as string }}
                  />
                ))}
              </div>
              <span>More</span>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center py-12 text-secondary">
          <div className="text-center">
            <Calendar className="w-12 h-12 mx-auto mb-3 text-border" />
            <p className="text-lg font-medium">No contribution data available</p>
            <p className="text-sm">Connect your GitHub account to see your activity</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default HeatmapCard;