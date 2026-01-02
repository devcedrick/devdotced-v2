import { useCallback } from 'react';

const GITHUB_GRAPHQL_URL = 'https://api.github.com/graphql';

interface GraphQLResponse<T> {
  data: T;
  errors?: Array<{ message: string }>;
}

export const useGithubGraphQL = () => {
  const token = process.env.NEXT_PUBLIC_GITHUB_TOKEN;

  const query = useCallback(
    async <T>(graphqlQuery: string): Promise<GraphQLResponse<T>> => {
      if (!token) {
        throw new Error('GitHub token required');
      }

      const response = await fetch(GITHUB_GRAPHQL_URL, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query: graphqlQuery }),
      });

      if (!response.ok) {
        throw new Error(`GitHub API error: ${response.status}`);
      }

      return response.json();
    },
    [token]
  );

  return { query, hasToken: !!token };
};

export default useGithubGraphQL;
