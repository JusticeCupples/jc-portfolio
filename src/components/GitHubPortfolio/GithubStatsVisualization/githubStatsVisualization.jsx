import React from 'react';

function GitHubStatsVisualization({ data }) {
  if (!data || !data.languages) return null;

  const totalBytes = Object.values(data.languages).reduce((acc, val) => acc + val, 0);

  return (
    <div className="github-stats-visualization">
      <h2>GitHub Stats</h2>
      <p>Total Repositories: {data.totalRepos}</p>
      <p>Total Stars: {data.totalStars}</p>
      <p>Total Forks: {data.totalForks}</p>
      <p>Total Watchers: {data.totalWatchers}</p>
      <h3>Language Distribution:</h3>
      <ul>
        {Object.entries(data.languages)
          .sort((a, b) => b[1] - a[1])
          .map(([lang, bytes]) => (
            <li key={lang}>
              {lang}: {((bytes / totalBytes) * 100).toFixed(2)}% ({bytes} bytes)
            </li>
          ))}
      </ul>
    </div>
  );
}

export default GitHubStatsVisualization;
