import React, { useState, useEffect } from 'react';

function PersonalDashboard({ data }) {
  const [currentRepoIndex, setCurrentRepoIndex] = useState(0);

  useEffect(() => {
    console.log('PersonalDashboard data:', data);
  }, [data]);

  if (!data) {
    return <div className="personal-dashboard">Loading personal data...</div>;
  }

  const { avatar_url, name, bio, public_repos, repositories } = data;

  return (
    <div className="personal-dashboard">
      <h2>Personal Dashboard</h2>
      <div className="github-profile">
        {avatar_url && <img src={avatar_url} alt={name || 'GitHub Avatar'} />}
      </div>
      <h3>{name || 'GitHub User'}</h3>
      {bio && <p>{bio}</p>}
      <p>Public Repos: {public_repos || 0}</p>

      {repositories && repositories.length > 0 ? (
        <div className="repo-carousel">
          <h4>Repository Carousel</h4>
          <div className="repo-card">
            <h5>{repositories[currentRepoIndex].name}</h5>
            <p>{repositories[currentRepoIndex].description || 'No description available'}</p>
            <p>Language: {repositories[currentRepoIndex].language || 'Not specified'}</p>
            <p>Stars: {repositories[currentRepoIndex].stargazers_count}</p>
            <p>Forks: {repositories[currentRepoIndex].forks_count}</p>
          </div>
          <div className="carousel-controls">
            <button
              onClick={() => {
                setCurrentRepoIndex(
                  (prevIndex) => (prevIndex - 1 + repositories.length) % repositories.length
                );
                document.querySelector('.repo-card').style.animation = 'none';
                setTimeout(() => {
                  document.querySelector('.repo-card').style.animation =
                    'slideIn 0.5s ease forwards';
                }, 10);
              }}
            >
              Previous
            </button>
            <button
              onClick={() => {
                setCurrentRepoIndex((prevIndex) => (prevIndex + 1) % repositories.length);
                document.querySelector('.repo-card').style.animation = 'none';
                setTimeout(() => {
                  document.querySelector('.repo-card').style.animation =
                    'slideIn 0.5s ease forwards';
                }, 10);
              }}
            >
              Next
            </button>
          </div>
        </div>
      ) : (
        <p>No repositories found</p>
      )}
    </div>
  );
}

export default PersonalDashboard;
