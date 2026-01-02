import { useMemo } from 'react';
import { useGithubContributions } from './useGithubContributions';
import { useGithubLanguages } from './useGithubLanguages';
import { calculateStreaks } from '@/utils/streaks';
import { GitHubStats } from '@/types/github';

export const useGitHubStats = (username: string = 'devcedrick'): GitHubStats => {
  const contributions = useGithubContributions(username);
  const languages = useGithubLanguages(username);

  const streaks = useMemo(() => {
    return contributions.data ? calculateStreaks(contributions.data.daily) : { current: 0, longest: 0 };
  }, [contributions.data]);

  const isLoading = contributions.isLoading || languages.isLoading;
  const error = contributions.error || languages.error;

  return {
    totalContributions: contributions.data?.total ?? 0,
    activeRepositories: languages.data?.activeRepos ?? 0,
    currentStreak: streaks.current,
    longestStreak: streaks.longest,
    languages: languages.data?.languages ?? [],
    dailyContributions: contributions.data?.daily ?? [],
    isLoading,
    error,
  };
};

export default useGitHubStats;

// Re-export types for convenience
export type { GitHubStats, DailyContribution, LanguageStats } from '@/types/github';
