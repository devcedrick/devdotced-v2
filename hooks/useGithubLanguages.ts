import { useState, useEffect } from 'react';
import { useGithubGraphQL } from './useGithubGraphQL';
import { ReposAndLanguagesData, LanguageStats } from '@/types/github';
import { LANGUAGE_COLORS, DEFAULT_LANGUAGE_COLOR } from '@/constants/languageColors';

interface UseGithubLanguagesResult {
  data: ReposAndLanguagesData | null;
  isLoading: boolean;
  error: string | null;
}

export const useGithubLanguages = (username: string): UseGithubLanguagesResult => {
  const [data, setData] = useState<ReposAndLanguagesData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { query, hasToken } = useGithubGraphQL();

  useEffect(() => {
    if (!hasToken) {
      setError('GitHub token required');
      setIsLoading(false);
      return;
    }

    const fetchReposAndLanguages = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const res = await query(`{
          user(login: "${username}") {
            repositories(first: 100, ownerAffiliations: OWNER, orderBy: {field: UPDATED_AT, direction: DESC}) {
              nodes {
                name
                isArchived
                isFork
                languages(first: 10, orderBy: {field: SIZE, direction: DESC}) {
                  edges {
                    size
                    node {
                      name
                      color
                    }
                  }
                }
              }
            }
          }
        }`);

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const repos = (res as any).data.user.repositories.nodes;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const active = repos.filter((r: any) => !r.isArchived && !r.isFork);

        const totals: Record<string, number> = {};
        let totalBytes = 0;

        active.forEach((repo: any) => {
          repo.languages.edges.forEach((edge: any) => {
            const lang = edge.node.name;
            const size = edge.size;
            totals[lang] = (totals[lang] || 0) + size;
            totalBytes += size;
          });
        });

        const languages: LanguageStats[] = Object.entries(totals)
          .map(([name, bytes]) => ({
            name,
            bytes,
            percentage: totalBytes > 0 ? (bytes / totalBytes) * 100 : 0,
            color: LANGUAGE_COLORS[name] || DEFAULT_LANGUAGE_COLOR,
          }))
          .sort((a, b) => b.percentage - a.percentage)
          .slice(0, 10);

        setData({ activeRepos: active.length, languages });
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch languages');
      } finally {
        setIsLoading(false);
      }
    };

    fetchReposAndLanguages();
  }, [username, query, hasToken]);

  return { data, isLoading, error };
};

export default useGithubLanguages;
