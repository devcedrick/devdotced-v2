import { useState, useEffect } from 'react';
import { useGithubGraphQL } from './useGithubGraphQL';
import { ContributionsData, DailyContribution } from '@/types/github';

interface DailyContributionResponse {
  user: {
    contributionsCollection: {
      contributionCalendar: {
        weeks: Array<{
          contributionDays: DailyContribution[];
        }>;
      };
    };
  };
}

// Helper interface for the dynamic lifetime fetch
interface LifetimeResponse {
  user: {
    createdAt: string;
    [key: string]: any;
  };
}

interface UseGithubContributionsResult {
  data: ContributionsData | null;
  isLoading: boolean;
  error: string | null;
}

export const useGithubContributions = (username: string): UseGithubContributionsResult => {
  const [data, setData] = useState<ContributionsData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { query, hasToken } = useGithubGraphQL();

  useEffect(() => {
    if (!hasToken) {
      setError('GitHub token required');
      setIsLoading(false);
      return;
    }

    const fetchDailyContributions = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const res = await query<DailyContributionResponse>(`{
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
        }`);

        const cal = res.data.user.contributionsCollection.contributionCalendar;
        
        // MODIFICATION 1: Use functional update (prev => ...)
        // This prevents overwriting the 'total' if fetchTotalContributions finished first.
        setData((prev) => ({
          total: prev?.total || 0, 
          daily: cal.weeks.flatMap((w) => w.contributionDays),
        }));
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch contributions');
      }
    };

    const fetchLifetimeTotal = async () => {
      try {
        const userRes = await query<{ user: { createdAt: string } }>(`
          query {
            user(login: "${username}") {
              createdAt
            }
          }
        `);

        const createdAt = new Date(userRes.data.user.createdAt);
        const startYear = createdAt.getFullYear();
        const currentYear = new Date().getFullYear();

        const yearQueries = [];
        for (let year = startYear; year <= currentYear; year++) {
          const from = `${year}-01-01T00:00:00Z`;
          const to = `${year}-12-31T23:59:59Z`;
          // We use aliases (y2020, y2021) to fetch all years in ONE request
          yearQueries.push(`
            y${year}: contributionsCollection(from: "${from}", to: "${to}") {
              contributionCalendar {
                totalContributions
              }
            }
          `);
        }

        const bigQuery = `
          query {
            user(login: "${username}") {
              ${yearQueries.join('\n')}
            }
          }
        `;

        const allYearsRes = await query<LifetimeResponse>(bigQuery);
        
        let lifetimeTotal = 0;
        const userData = allYearsRes.data.user;

        Object.keys(userData).forEach((key) => {
          if (key.startsWith('y')) {
            lifetimeTotal += userData[key].contributionCalendar.totalContributions;
          }
        });

        setData((prevData) => ({
          daily: prevData?.daily || [],
          total: lifetimeTotal,
        }));

      } catch (error) {
        setError(error instanceof Error ? error.message : 'Failed to fetch total contributions');
      } finally {
        setIsLoading(false);
      }
    };

    // Trigger both fetches
    fetchDailyContributions();
    fetchLifetimeTotal();
    
  }, [username, query, hasToken]);

  return { data, isLoading, error };
};

export default useGithubContributions;