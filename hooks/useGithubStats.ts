import { useState, useEffect } from 'react';

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

export interface StreakData {
  current: number;
  longest: number;
  currentStart?: string;
  currentEnd?: string;
  longestStart?: string;
  longestEnd?: string;
}

export interface ContributionBreakdown {
  totalCommits: number;
  totalIssues: number;
  totalPullRequests: number;
  totalPullRequestReviews: number;
  totalRepositories: number;
}

export interface GitHubStats {
  totalContributions: number;
  contributionBreakdown: ContributionBreakdown;
  activeRepositories: number;
  streak: StreakData;
  languages: LanguageStats[];
  dailyContributions: DailyContribution[];
  isLoading: boolean;
  error: string | null;
}

// GitHub language colors mapping
const LANGUAGE_COLORS: { [key: string]: string } = {
  TypeScript: '#3178c6',
  JavaScript: '#f1e05a',
  Python: '#3572A5',
  Java: '#b07219',
  'C++': '#f34b7d',
  C: '#555555',
  'C#': '#239120',
  PHP: '#4F5D95',
  Ruby: '#701516',
  Go: '#00ADD8',
  Rust: '#dea584',
  Swift: '#ffac45',
  Kotlin: '#A97BFF',
  Dart: '#00B4AB',
  HTML: '#e34c26',
  CSS: '#1572B6',
  SCSS: '#c6538c',
  Vue: '#4FC08D',
  React: '#61DAFB',
  Shell: '#89e051',
  PowerShell: '#012456',
  Dockerfile: '#384d54',
  YAML: '#cb171e',
  JSON: '#292929',
  Markdown: '#083fa1',
};

const DEFAULT_COLOR = '#586069';

export const useGitHubStats = (username: string = 'devcedrick') => {
  const [stats, setStats] = useState<GitHubStats>({
    totalContributions: 0,
    contributionBreakdown: {
      totalCommits: 0,
      totalIssues: 0,
      totalPullRequests: 0,
      totalPullRequestReviews: 0,
      totalRepositories: 0,
    },
    activeRepositories: 0,
    streak: { current: 0, longest: 0 },
    languages: [],
    dailyContributions: [],
    isLoading: true,
    error: null,
  });

  const token = process.env.NEXT_PUBLIC_GITHUB_TOKEN;

  // Helper function to make GitHub API requests
  const githubRequest = async (query: string, isGraphQL = false) => {
    const url = isGraphQL 
      ? 'https://api.github.com/graphql'
      : `https://api.github.com/${query}`;
    
    const headers: HeadersInit = {
      'Authorization': `Bearer ${token}`,
      'Accept': 'application/vnd.github.v3+json',
    };

    if (isGraphQL) {
      headers['Content-Type'] = 'application/json';
    }

    const options: RequestInit = {
      method: isGraphQL ? 'POST' : 'GET',
      headers,
    };

    if (isGraphQL) {
      options.body = JSON.stringify({ query });
    }

    const response = await fetch(url, options);
    
    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status} ${response.statusText}`);
    }

    return response.json();
  };

  // Calculate streak from contributions data
  const calculateStreak = (contributions: Array<{ date: string; contributionCount: number }>) => {
    if (contributions.length === 0) {
      return { current: 0, longest: 0 };
    }

    // Create a map of dates to contribution counts for quick lookups
    const contributionsMap = new Map<string, number>();
    contributions.forEach(c => contributionsMap.set(c.date, c.contributionCount));

    const sortedDates = contributions.map(c => c.date).sort((a, b) => new Date(a).getTime() - new Date(b).getTime());

    let longestStreak = 0;
    let currentStreak = 0;
    let longestStreakStart = '';
    let longestStreakEnd = '';
    
    if (sortedDates.length > 0) {
        let tempStreak = 0;
        let tempStreakStart = '';

        for (let i = 0; i < sortedDates.length; i++) {
            const dateStr = sortedDates[i];
            const date = new Date(dateStr);

            if (contributionsMap.get(dateStr)! > 0) {
                if (tempStreak === 0) {
                    tempStreakStart = dateStr;
                }
                tempStreak++;

                const nextDate = new Date(date);
                nextDate.setDate(nextDate.getDate() + 1);
                const nextDateStr = nextDate.toISOString().split('T')[0];

                // If the next day has no contribution or is the last day, end of a streak
                if (!contributionsMap.has(nextDateStr) || contributionsMap.get(nextDateStr) === 0) {
                    if (tempStreak > longestStreak) {
                        longestStreak = tempStreak;
                        longestStreakStart = tempStreakStart;
                        longestStreakEnd = dateStr;
                    }
                    tempStreak = 0;
                }
            } else {
                if (tempStreak > longestStreak) {
                    longestStreak = tempStreak;
                    longestStreakStart = tempStreakStart;
                    longestStreakEnd = sortedDates[i-1];
                }
                tempStreak = 0;
            }
        }
        // Final check after loop
        if (tempStreak > longestStreak) {
            longestStreak = tempStreak;
            longestStreakStart = tempStreakStart;
            longestStreakEnd = sortedDates[sortedDates.length - 1];
        }
    }

    // Calculate current streak
    const today = new Date();
    let currentStreakStart = '';
    let currentStreakEnd = '';

    for (let i = 0; i <= sortedDates.length; i++) {
        const date = new Date(today);
        date.setDate(today.getDate() - i);
        const dateStr = date.toISOString().split('T')[0];

        if (contributionsMap.has(dateStr) && contributionsMap.get(dateStr)! > 0) {
            currentStreak++;
            if(currentStreak === 1) currentStreakEnd = dateStr;
            currentStreakStart = dateStr;
        } else {
            // If today has no contribution, the streak is 0, unless we are checking yesterday.
            if (i === 0) {
                // check yesterday
                const yesterday = new Date(today);
                yesterday.setDate(today.getDate() - 1);
                const yesterdayStr = yesterday.toISOString().split('T')[0];
                if(!contributionsMap.has(yesterdayStr) || contributionsMap.get(yesterdayStr) === 0) {
                    currentStreak = 0;
                    break;
                }
            } else {
                 break;
            }
        }
    }

    return {
      current: currentStreak,
      longest: longestStreak,
      currentStart: currentStreakStart,
      currentEnd: currentStreakEnd,
      longestStart: longestStreakStart,
      longestEnd: longestStreakEnd,
    };
  };

  // Fetch total contributions using multi-year approach for true all-time total
  const fetchTotalContributions = async () => {
    const query = `
      {
        y2023: user(login: "${username}") {
          contributionsCollection(from: "2023-01-01T00:00:00Z", to: "2023-12-31T23:59:59Z") {
            contributionCalendar {
              totalContributions
            }
          }
        }
        y2024: user(login: "${username}") {
          contributionsCollection(from: "2024-01-01T00:00:00Z", to: "2024-12-31T23:59:59Z") {
            contributionCalendar {
              totalContributions
            }
          }
        }
        y2025: user(login: "${username}") {
          contributionsCollection(from: "2025-01-01T00:00:00Z", to: "2025-12-31T23:59:59Z") {
            contributionCalendar {
              totalContributions
            }
          }
        }
      }
    `;

    const res = await githubRequest(query, true);

    const c2023 = res.data?.y2023?.contributionsCollection?.contributionCalendar?.totalContributions || 0;
    const c2024 = res.data?.y2024?.contributionsCollection?.contributionCalendar?.totalContributions || 0;
    const c2025 = res.data?.y2025?.contributionsCollection?.contributionCalendar?.totalContributions || 0;

    const total = c2023 + c2024 + c2025;

    return {
      2023: c2023,
      2024: c2024,
      2025: c2025,
      total
    };
  };

  // Fetch detailed contribution data for heatmap and streaks (last 365 days)
  const fetchDetailedContributions = async () => {
    const query = `
      query {
        user(login: "${username}") {
          contributionsCollection {
            contributionCalendar {
              weeks {
                contributionDays {
                  date
                  contributionCount
                }
              }
            }
          }
        }
      }
    `;

    return githubRequest(query, true);
  };

  // Fetch repositories and language data
  const fetchRepositoriesAndLanguages = async () => {
    let allRepos: any[] = [];
    let page = 1;
    let hasNextPage = true;

    while (hasNextPage) {
      const reposResponse = await githubRequest(`users/${username}/repos?per_page=100&type=owner&page=${page}`);
      if (reposResponse.length > 0) {
        allRepos = allRepos.concat(reposResponse);
        page++;
      } else {
        hasNextPage = false;
      }
    }
    
    const activeRepos = allRepos.filter((repo: any) => 
      !repo.archived && !repo.disabled && repo.size > 0
    );

    // Fetch language data for each repository
    const languagePromises = activeRepos.map(async (repo: any) => {
      try {
        const languages = await githubRequest(`repos/${username}/${repo.name}/languages`);
        return { name: repo.name, languages };
      } catch (error) {
        console.warn(`Failed to fetch languages for ${repo.name}:`, error);
        return { name: repo.name, languages: {} };
      }
    });

    const repoLanguages = await Promise.all(languagePromises);

    // Aggregate language statistics
    const languageTotals: { [key: string]: number } = {};
    let totalBytes = 0;

    repoLanguages.forEach(({ languages }) => {
      Object.entries(languages).forEach(([lang, bytes]) => {
        languageTotals[lang] = (languageTotals[lang] || 0) + (bytes as number);
        totalBytes += bytes as number;
      });
    });

    // Convert to percentage and sort
    const languageStats: LanguageStats[] = Object.entries(languageTotals)
      .map(([name, bytes]) => ({
        name,
        bytes,
        percentage: totalBytes > 0 ? (bytes / totalBytes) * 100 : 0,
        color: LANGUAGE_COLORS[name] || DEFAULT_COLOR,
      }))
      .sort((a, b) => b.percentage - a.percentage)
      .slice(0, 10); // Top 10 languages

    return {
      activeRepositories: activeRepos.length,
      languages: languageStats,
    };
  };

  useEffect(() => {
    const fetchGitHubStats = async () => {
      if (!token) {
        setStats(prev => ({
          ...prev,
          isLoading: false,
          error: 'GitHub token is not provided',
        }));
        return;
      }

      try {
        setStats(prev => ({ ...prev, isLoading: true, error: null }));

        // Fetch all data in parallel
        const [contributionsData, detailedData, repoData] = await Promise.all([
          fetchTotalContributions(),
          fetchDetailedContributions(),
          fetchRepositoriesAndLanguages(),
        ]);

        console.log('Processing GitHub contribution data...');
        console.log('Multi-year totals:', contributionsData);
        
        // Use the all-time total from multi-year calculation
        const totalContributions = contributionsData.total;
        
        console.log(`2023 contributions: ${contributionsData[2023]}`);
        console.log(`2024 contributions: ${contributionsData[2024]}`);
        console.log(`2025 contributions: ${contributionsData[2025]}`);
        console.log(`Total all-time contributions: ${totalContributions}`);
        
        // Get detailed contribution data for heatmap and streaks (last 365 days)
        const userData = detailedData.data.user;
        const contributionData = userData.contributionsCollection;
        
        // Collect all contribution days for streak calculation and heatmap display
        const allContributions = contributionData.contributionCalendar.weeks.flatMap((week: any) =>
          week.contributionDays
        );
        
        // Set a basic breakdown (GitHub's default doesn't provide the detailed breakdown)
        let contributionBreakdown: ContributionBreakdown = {
          totalCommits: 0, // These would need separate queries to get exact numbers
          totalIssues: 0,
          totalPullRequests: 0,
          totalPullRequestReviews: 0,
          totalRepositories: 0,
        };

        // Remove duplicates and sort by date
        const uniqueContributions = allContributions.filter((contribution: any, index: number, self: any[]) =>
          index === self.findIndex((c: any) => c.date === contribution.date)
        ).sort((a: any, b: any) => new Date(a.date).getTime() - new Date(b.date).getTime());

        const streakData = calculateStreak(uniqueContributions);

        setStats({
          totalContributions,
          contributionBreakdown,
          activeRepositories: repoData.activeRepositories,
          streak: streakData,
          languages: repoData.languages,
          dailyContributions: uniqueContributions,
          isLoading: false,
          error: null,
        });

      } catch (error) {
        console.error('Error fetching GitHub stats:', error);
        setStats(prev => ({
          ...prev,
          isLoading: false,
          error: error instanceof Error ? error.message : 'Failed to fetch GitHub stats',
        }));
      }
    };

    fetchGitHubStats();
  }, [username, token]);

  return stats;
};

export default useGitHubStats;