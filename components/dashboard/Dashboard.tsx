"use client"
import React from 'react';
import { useGitHubStats } from '../../hooks/useGithubStats';
import LoadingState from './common/LoadingState';
import ErrorState from './common/ErrorState';
import DashboardGrid from './DashboardGrid';

const Dashboard: React.FC = () => {
  const stats = useGitHubStats('devcedrick');
  const { isLoading, error } = stats;

  return (
    <section 
      id="dashboard" 
      data-section="dashboard"
      className="bg-background h-max w-full text-primary p-6 lg:p-8"
    >
      <div className="max-w-7xl mx-auto">
        {isLoading && <LoadingState />}
        
        {error && <ErrorState error={error} />}
        
        {!isLoading && !error && (
          <>
            <div className='flex flex-col gap-2 mb-8'>
             <h1 className='text-3xl font-bold'>DASHBOARD</h1>
             <p className='text-secondary'>My development activity overview</p>
            </div>
            <DashboardGrid stats={stats} />
          </>
        )}
      </div>
    </section>
  );
}

export default Dashboard;
