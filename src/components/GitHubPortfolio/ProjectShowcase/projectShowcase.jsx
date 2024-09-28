import React, { useState } from 'react';

function ProjectShowcase({ data }) {
  const [visibleProjects, setVisibleProjects] = useState(3);

  if (!data) {
    return <div className="project-showcase">Loading projects...</div>;
  }

  if (data.length === 0) {
    return <div className="project-showcase">No projects available</div>;
  }

  const showMore = () => {
    const newVisibleCount = Math.min(visibleProjects + 3, data.length);
    setVisibleProjects(newVisibleCount);
    setTimeout(() => {
      const newItems = document.querySelectorAll(
        '.project-card:nth-last-child(-n+3), .activity-card:nth-last-child(-n+3), .repo-card:nth-last-child(-n+3)'
      );
      newItems.forEach((item) => {
        item.style.animation = 'none';
        setTimeout(() => {
          item.style.animation = 'slideIn 0.5s ease forwards';
        }, 10);
      });
    }, 0);
  };

  return (
    <div className="project-showcase">
      <h2>Project Showcase</h2>
      {data.slice(0, visibleProjects).map((project) => (
        <div key={project.id} className="project-card">
          <h3>
            <a href={project.html_url} target="_blank" rel="noopener noreferrer">
              {project.name}
            </a>
          </h3>
          <p>{project.description || 'No description available'}</p>
          <p>Language: {project.language || 'Not specified'}</p>
          <p>Stars: {project.stargazers_count}</p>
          <p>Forks: {project.forks_count}</p>
          <p>Watchers: {project.watchers_count}</p>
          <p>Open Issues: {project.open_issues_count}</p>
          <p>Created: {new Date(project.created_at).toLocaleDateString()}</p>
          <p>Last Updated: {new Date(project.updated_at).toLocaleDateString()}</p>
          {project.homepage && (
            <p>
              Homepage:{' '}
              <a href={project.homepage} target="_blank" rel="noopener noreferrer">
                {project.homepage}
              </a>
            </p>
          )}
        </div>
      ))}
      {visibleProjects < data.length && <button onClick={showMore}>Show more</button>}
    </div>
  );
}

export default ProjectShowcase;
