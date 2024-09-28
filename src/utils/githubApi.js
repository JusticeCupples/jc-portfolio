import axios from 'axios';

import { GITHUB_API_BASE_URL, GITHUB_USERNAME } from '../config/constants';

const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

console.log('GitHub Username:', GITHUB_USERNAME);
console.log('GitHub Token:', GITHUB_TOKEN ? 'Token is set' : 'Token is not set');

// This function fetches GitHub data for the user, including user info, repositories, and events.
// It also calculates language statistics and filters out forked repositories.
export const fetchGitHubData = async () => {
  try {
    console.log('Fetching GitHub data...');
    const [user, repos, events] = await Promise.all([
      axios.get(`${GITHUB_API_BASE_URL}/users/${GITHUB_USERNAME}`),
      axios.get(
        `${GITHUB_API_BASE_URL}/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated&direction=desc`
      ),
      axios.get(`${GITHUB_API_BASE_URL}/users/${GITHUB_USERNAME}/events/public?per_page=100`),
    ]);

    const languages = await Promise.all(repos.data.map((repo) => axios.get(repo.languages_url)));

    const ownRepos = repos.data.filter((repo) => !repo.fork);

    return {
      personalDashboard: {
        ...user.data,
        repositories: ownRepos,
      },
      projectShowcase: ownRepos,
      activityFeed: events.data,
      repositoryExplorer: repos.data.map((repo, index) => ({
        ...repo,
        languages: languages[index].data,
      })),
      statsVisualization: {
        totalRepos: ownRepos.length,
        totalStars: ownRepos.reduce((acc, repo) => acc + repo.stargazers_count, 0),
        totalForks: ownRepos.reduce((acc, repo) => acc + repo.forks_count, 0),
        totalWatchers: ownRepos.reduce((acc, repo) => acc + repo.watchers_count, 0),
        languages: languages.reduce((acc, lang) => {
          Object.entries(lang.data).forEach(([key, value]) => {
            acc[key] = (acc[key] || 0) + value;
          });
          return acc;
        }, {}),
      },
    };
  } catch (error) {
    console.error('Error fetching GitHub data:', error);
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.error('Error response:', error.response.data);
      console.error('Error status:', error.response.status);
      console.error('Error headers:', error.response.headers);
    } else if (error.request) {
      // The request was made but no response was received
      console.error('Error request:', error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.error('Error message:', error.message);
    }
    throw new Error('Failed to fetch GitHub data. Please try again later.');
  }
};
