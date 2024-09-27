import React, { useState } from 'react';

function ActivityFeed({ data }) {
  const [visibleActivities, setVisibleActivities] = useState(3);

  if (!data || data.length === 0) {
    return <div className="activity-feed">No recent activity</div>;
  }

  const showMore = () => {
    setVisibleActivities((prevVisible) => Math.min(prevVisible + 3, data.length));
  };

  const getActivityDescription = (activity) => {
    switch (activity.type) {
      case 'PushEvent':
        return `Pushed ${activity.payload.commits.length} commit(s) to ${activity.repo.name}`;
      case 'PullRequestEvent':
        return `${activity.payload.action} a pull request in ${activity.repo.name}`;
      case 'IssuesEvent':
        return `${activity.payload.action} an issue in ${activity.repo.name}`;
      case 'CreateEvent':
        return `Created ${activity.payload.ref_type} ${activity.payload.ref || ''} in ${
          activity.repo.name
        }`;
      default:
        return `${activity.type} in ${activity.repo.name}`;
    }
  };

  return (
    <div className="activity-feed">
      <h2>Activity Feed</h2>
      {data.slice(0, visibleActivities).map((activity) => (
        <div key={activity.id} className="activity-card">
          <p>{getActivityDescription(activity)}</p>
          <p>Date: {new Date(activity.created_at).toLocaleString()}</p>
        </div>
      ))}
      {visibleActivities < data.length && <button onClick={showMore}>Show more</button>}
    </div>
  );
}

export default ActivityFeed;
