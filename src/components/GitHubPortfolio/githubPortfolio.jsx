import React, { useState, useEffect } from 'react';
import './githubPortfolio.css';
import PersonalDashboard from './PersonalDashboard/personalDashboard';
import ProjectShowcase from './ProjectShowcase/projectShowcase';
import ActivityFeed from './ActivityFeed/activityFeed';
import RepositoryExplorer from './RepositoryExplorer/repositoryExplorer';
import GitHubStatsVisualization from './GithubStatsVisualization/githubStatsVisualization';
import { fetchGitHubData } from '../../utils/githubApi';
import Navigation from '../Navigation/navigation';
import { Link } from 'react-router-dom';

function GitHubPortfolio() {
  const [githubData, setGithubData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchFreshData();
  }, []);

  function fetchFreshData() {
    setLoading(true);
    setError(null);
    fetchGitHubData()
      .then((data) => {
        console.log('Fetched GitHub data:', data);
        setGithubData(data);
        localStorage.setItem('githubData', JSON.stringify(data));
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching GitHub data:', err);
        setError(
          'Failed to fetch GitHub data. Please check your network connection and try again.'
        );
        setLoading(false);
      });
  }

  if (loading) {
    return (
      <div className="preloader">
        <div>Loading...</div>
        <div className="loading-circle"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <h2 className="error-message">API overloaded, please try again in a few minutes.</h2>
        <Link to="/" className="home-button">
          Home
        </Link>
      </div>
    );
  }

  if (!githubData) {
    return <div className="not-found">Nothing found</div>;
  }

  return (
    <div className="github-portfolio">
      <Navigation isGitHubPage={true} />
      <h1>GitHub Portfolio</h1>
      <PersonalDashboard data={githubData.personalDashboard} />
      <ProjectShowcase data={githubData.projectShowcase} />
      <ActivityFeed data={githubData.activityFeed} />
      <RepositoryExplorer data={githubData.repositoryExplorer} />
      <GitHubStatsVisualization data={githubData.statsVisualization} />
    </div>
  );
}

export default GitHubPortfolio;
