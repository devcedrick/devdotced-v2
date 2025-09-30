import React from 'react';
import { LanguageStats } from '../../../hooks/useGithubStats';

interface LanguageProgressBarProps {
  languages: LanguageStats[];
  showLabels?: boolean;
  maxItems?: number;
}

const LanguageProgressBar: React.FC<LanguageProgressBarProps> = ({ 
  languages, 
  showLabels = true,
  maxItems = 5 
}) => {
  if (languages.length === 0) {
    return (
      <div className="text-center text-secondary py-4">
        No language data available
      </div>
    );
  }

  const topLanguages = languages.slice(0, maxItems);

  return (
    <div className="flex flex-col gap-4 w-full space-y-3">
      <div className="flex w-full h-4 bg-border rounded-full overflow-hidden shadow-inner">
        {topLanguages.map((lang, index) => (
          <div
            key={`${lang.name}-${index}`}
            className="h-full transition-all duration-500 hover:brightness-110"
            style={{
              backgroundColor: lang.color,
              width: `${lang.percentage}%`,
            }}
            title={`${lang.name}: ${lang.percentage.toFixed(1)}%`}
          />
        ))}
      </div>
      
      {showLabels && (
        <div className="space-y-2 grid grid-cols-2">
          {topLanguages.map((lang, index) => (
            <div key={`label-${lang.name}-${index}`} className="flex items-center gap-3 text-sm">
              <div className="flex items-center gap-2">
                <div 
                  className="w-2.5 h-2.5 rounded-full shadow-sm" 
                  style={{ backgroundColor: lang.color }}
                />
                <span className="font-medium text-primary text-xs truncate">{lang.name}</span>
              </div>
              <span className="text-secondary text-xs font-mono">{lang.percentage.toFixed(1)}%</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageProgressBar;