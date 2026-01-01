export interface DailyContribution {
  date: string;
  contributionCount: number;
}

export interface LanguageStats {
  name: string;
  percentage: number;
  bytes: number;
  color: string;
}

export interface GitHubStats {
  totalContributions: number;
  activeRepositories: number;
  currentStreak: number;
  longestStreak: number;
  languages: LanguageStats[];
  dailyContributions: DailyContribution[];
  isLoading: boolean;
  error: string | null;
}

export interface ContributionsData {
  total: number;
  daily: DailyContribution[];
}

export interface ReposAndLanguagesData {
  activeRepos: number;
  languages: LanguageStats[];
}
