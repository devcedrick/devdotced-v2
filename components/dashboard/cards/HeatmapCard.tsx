import React from 'react'
import HeatMap from '@uiw/react-heat-map';
import { Calendar } from 'lucide-react';
import { DailyContribution } from '../../../hooks/useGithubStats';

interface HeatmapCardProps {
  dailyContributions: DailyContribution[];
}

// Define the heatmap data interface for better type safety
interface HeatmapValue {
  date: string;
  count: number;
}

const HeatmapCard: React.FC<HeatmapCardProps> = ({ dailyContributions }) => {
  // Get current year - showing full 2025 year
  const currentYear = 2025;
  
  // Filter contributions for 2025 only
  const currentYearContributions = dailyContributions.filter(contribution => {
    const contributionDate = new Date(contribution.date);
    return contributionDate.getFullYear() === currentYear;
  });
  
  // Transform the daily contributions data into the format expected by @uiw/react-heat-map
  const heatmapData: HeatmapValue[] = currentYearContributions.map(contribution => ({
    date: contribution.date,
    count: contribution.contributionCount,
  }));

  // Get the start and end dates for the heatmap (Full 2025 year)
  const startDate = new Date(currentYear, 0, 1); // January 1, 2025
  const endDate = new Date(currentYear, 11, 31); // December 31, 2025

  // GitHub-style contribution colors (adjusted for dark theme)
  const panelColors = {
    0: '#161b22',    // No contributions
    1: '#0e4429',    // 1-3 contributions
    2: '#006d32',    // 4-6 contributions  
    3: '#26a641',    // 7-9 contributions
    4: '#39d353',    // 10+ contributions
  };
  
  // Calculate total contributions for the year
  const totalYearContributions = currentYearContributions.reduce((sum, day) => sum + day.contributionCount, 0);

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

      {heatmapData.length > 0 ? (
        <div className="space-y-4">
          <div className="w-full overflow-x-auto">
            <div className="min-w-[1000px] w-full">
              <HeatMap
                value={heatmapData}
                width="100%"
                style={{
                  color: '#7d8590',
                  fontSize: '11px',
                  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif',
                  width: '100%',
                }}
                startDate={startDate}
                endDate={endDate}
                panelColors={{
                  0: '#161b22',
                  1: '#0e4429', 
                  2: '#006d32',
                  3: '#26a641',
                  4: '#39d353'
                }}
                legendCellSize={0}
                rectSize={15}
                space={3}
                rectProps={{
                  rx: 4,
                  ry: 4,
                }}
                weekLabels={['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']}
                monthLabels={[
                  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
                ]}
                rectRender={(props: React.SVGProps<SVGRectElement>, data: { count?: number; date: string }) => {
                  const count = data.count || 0;
                  const contributionText = count === 0 
                    ? 'No contributions' 
                    : `${count} contribution${count !== 1 ? 's' : ''}`;
                  
                  const formatDate = new Date(data.date).toLocaleDateString('en-US', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  });
                  
                  return (
                    <rect
                      {...props}
                      style={{
                        ...props.style,
                        cursor: 'pointer',
                      }}
                    >
                      <title>{`${formatDate}: ${contributionText}`}</title>
                    </rect>
                  );
                }}
              />
            </div>
          </div>
          
          {/* Custom Legend */}
          <div className="flex items-center justify-between pt-4 border-t border-border">
            <div className="flex items-center gap-2 text-xs text-secondary">
              <span>Less</span>
              <div className="flex gap-1">
                {Object.values(panelColors).map((color, index) => (
                  <div
                    key={index}
                    className="w-3 h-3 rounded border border-border/50"
                    style={{ backgroundColor: color }}
                    title={`Level ${index}`}
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