import React, { useState } from 'react';

function RepositoryExplorer({ data }) {
  const [visibleRepos, setVisibleRepos] = useState(3);

  if (!data || data.length === 0) {
    return <div className="repository-explorer">No repositories found</div>;
  }

  const showMore = () => {
    setVisibleRepos((prevVisible) => Math.min(prevVisible + 3, data.length));
  };

  return (
    <div className="repository-explorer">
      <h2>Repository Explorer</h2>
      {data.slice(0, visibleRepos).map((repo) => (
        <div key={repo.id} className="repo-card">
          <h3>
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
              {repo.name}
            </a>
          </h3>
          <p>{repo.description || 'No description available'}</p>
          <p>Primary Language: {repo.language || 'Not specified'}</p>
          <p>Stars: {repo.stargazers_count}</p>
          <p>Forks: {repo.forks_count}</p>
          <p>Watchers: {repo.watchers_count}</p>
          <p>Open Issues: {repo.open_issues_count}</p>
          <p>Created: {new Date(repo.created_at).toLocaleDateString()}</p>
          <p>Last Updated: {new Date(repo.updated_at).toLocaleDateString()}</p>
          {repo.homepage && (
            <p>
              Homepage:{' '}
              <a href={repo.homepage} target="_blank" rel="noopener noreferrer">
                {repo.homepage}
              </a>
            </p>
          )}
          <h4>Languages:</h4>
          <ul>
            {Object.entries(repo.languages).map(([lang, bytes]) => (
              <li key={lang}>
                {lang}: {bytes} bytes
              </li>
            ))}
          </ul>
        </div>
      ))}
      {visibleRepos < data.length && <button onClick={showMore}>Show more</button>}
    </div>
  );
}

export default RepositoryExplorer;
