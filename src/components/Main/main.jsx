import React, { useState, useEffect } from 'react';
import './main.css';
import pricePredictionA from '../../assets/images/pricepredictionA.png';
import pricePredictionB from '../../assets/images/pricepredictionB.png';
import ModalPreview from '../ModalPreview/modalPreview';
import wtwrA from '../../assets/images/wtwrA.jpeg';
import wtwrB from '../../assets/images/wtwrB.jpeg';
import disbotA from '../../assets/images/disbotA.png';
import disbotB from '../../assets/images/disbotB.png';

function Main() {
  const [previewImage, setPreviewImage] = useState(null);

  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === 'Escape') {
        setPreviewImage(null);
      }
    };

    document.addEventListener('keydown', handleEscKey);

    return () => {
      document.removeEventListener('keydown', handleEscKey);
    };
  }, []);

  const openPreview = (imageSrc) => {
    setPreviewImage(imageSrc);
  };

  const closePreview = () => {
    setPreviewImage(null);
  };

  return (
    <>
      <main id="main" className="main">
        <section className="about" id="about">
          <h2>About Me</h2>
          <p>
            As a passionate Fullstack Software Engineer, I bring a unique blend of technical
            expertise and creative problem-solving to every project. With a strong foundation in
            both frontend and backend technologies, I specialize in creating scalable, efficient,
            and user-centric applications.
          </p>
          <p>
            My journey in software development has been driven by a love for coding and an
            insatiable curiosity for new technologies. I thrive on challenges and constantly push
            myself to learn and adapt in this ever-evolving field.
          </p>
          <p>
            With experience in agile environments and a track record of delivering high-quality
            solutions, I'm committed to writing clean, maintainable code that stands the test of
            time. My approach combines analytical thinking with a keen eye for detail, ensuring that
            every line of code contributes to the overall success of the project.
          </p>
          <p>
            Beyond technical skills, I value collaboration and clear communication. I believe that
            the best solutions emerge from diverse perspectives and teamwork. Whether it's mentoring
            junior developers or collaborating with cross-functional teams, I'm always eager to
            share knowledge and learn from others.
          </p>
        </section>
        <section className="skills" data-aos="fade-up">
          <h2>My Skills</h2>
          <ul>
            {[
              'HTML5',
              'CSS3',
              'JavaScript ES7',
              'React 18',
              'Node 21',
              'MongoDB',
              'ExpressJS',
              'Google Cloud',
              'RestAPI',
              'Git',
            ].map((skill, index) => (
              <li key={skill} style={{ '--item-index': index }}>
                {skill}
              </li>
            ))}
          </ul>
        </section>
        <section className="featured-projects" id="featured-projects">
          <h2>Featured Projects</h2>
          <div className="project-grid">
            <div className="project-card">
              <h3>Housing Price Prediction Tool</h3>
              <div className="tech-stack">
                <span className="tech-tag">Python</span>
                <span className="tech-tag">Data Analysis</span>
                <span className="tech-tag">Matplotlib</span>
                <span className="tech-tag">FRED API</span>
              </div>
              <p>
                This Python-based tool predicts housing prices for different states in the USA using
                historical data and simple projections.
              </p>
              <a
                href="https://github.com/JusticeCupples/Housing-Price-Prediction-Tool"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub
              </a>
              <h4>Features:</h4>
              <ul>
                <li>
                  Fetches 20 years of historical housing price data from the Federal Reserve
                  Economic Data (FRED)
                </li>
                <li>
                  Displays housing price trends for the past 4 years and projects 2 years into the
                  future
                </li>
                <li>Creates a graph showing the price trends and saves it as an image</li>
                <li>Provides a simple command-line interface for user input</li>
              </ul>
              <h4>Results:</h4>
              <p>Here are some example outputs from the Housing Price Prediction Tool:</p>
              <div className="image-container">
                <img
                  src={pricePredictionA}
                  alt="Price prediction graph for Pennsylvania housing market"
                  onClick={() => openPreview(pricePredictionA)}
                />
                <img
                  src={pricePredictionB}
                  alt="Price prediction graph for California housing market"
                  onClick={() => openPreview(pricePredictionB)}
                />
              </div>
            </div>
            <div className="project-card">
              <h3>WTWR (What to Wear)</h3>
              <div className="tech-stack">
                <span className="tech-tag">React</span>
                <span className="tech-tag">Express.js</span>
                <span className="tech-tag">MongoDB</span>
                <span className="tech-tag">Node.js</span>
                <span className="tech-tag">Google Cloud</span>
              </div>
              <p>
                WTWR is a full-stack web application that helps users decide what to wear based on
                the weather. It features user authentication, card creation, and a profile section.
              </p>
              {/* <a href="https://jc-wtwr.crabdance.com/" target="_blank" rel="noopener noreferrer">
                View Live Demo
              </a> */}
              <h4>Features:</h4>
              <ul>
                <li>User authentication (sign up, sign in, sign out)</li>
                <li>Create and view clothing item cards</li>
                <li>Profile section for managing user information</li>
                <li>View cards created by other users when logged out</li>
                <li>Secure password hashing</li>
                <li>Hosted on Google Cloud</li>
              </ul>
              <h4>Tech Stack:</h4>
              <p>Frontend: React | Backend: Express.js | Database: MongoDB</p>
              <div className="github-links">
                <a
                  href="https://github.com/JusticeCupples/se_project_express"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Backend Repository
                </a>
                <a
                  href="https://github.com/JusticeCupples/se_project_react"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Frontend Repository
                </a>
              </div>
              <h4>Screenshots:</h4>
              <div className="image-container">
                <img
                  src={wtwrA}
                  alt="WTWR application main interface screenshot"
                  onClick={() => openPreview(wtwrA)}
                />
                <img
                  src={wtwrB}
                  alt="WTWR application clothing item details screenshot"
                  onClick={() => openPreview(wtwrB)}
                />
              </div>
            </div>
            <div className="project-card">
              <h3>Raphael Discord Bot</h3>
              <div className="tech-stack">
                <span className="tech-tag">Node.js</span>
                <span className="tech-tag">Discord.js</span>
                <span className="tech-tag">REST API</span>
                <span className="tech-tag">JavaScript</span>
              </div>
              <p>
                Raphael is a feature-rich Discord bot built with Node.js and Discord.js. It enhances
                server engagement with meme commands, anime news updates, XP rewards, and more.
              </p>
              <a
                href="https://github.com/JusticeCupples/Raphael-discord-bot-public"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub
              </a>
              <h4>Features:</h4>
              <ul>
                <li>Meme commands for entertainment</li>
                <li>Anime news updates from MyAnimeList</li>
                <li>XP reward system for user engagement</li>
                <li>Daily and weekly anime news digests</li>
                <li>Utilizes Discord.js for seamless integration</li>
              </ul>
              <h4>Tech Stack:</h4>
              <p>Node.js | Discord.js | JavaScript</p>
              <h4>Screenshots:</h4>
              <div className="image-container">
                <img
                  src={disbotA}
                  alt="Raphael Discord Bot command interface screenshot"
                  onClick={() => openPreview(disbotA)}
                />
                <img
                  src={disbotB}
                  alt="Raphael Discord Bot anime news update screenshot"
                  onClick={() => openPreview(disbotB)}
                />
              </div>
            </div>
          </div>
        </section>
        <section className="testimonials">
          <h2>Testimonials</h2>
          <div className="testimonial-card">
            <p>
              "Justice was able to quickly and clearly help me identify a problem with my Wordpress
              site's code despite my vague descriptions and lack of knowledge; I would definitely
              work with him again!"
            </p>
            <p className="testimonial-author">
              - Stephanie,{' '}
              <a
                href="https://www.exploremorecleanless.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.exploremorecleanless.com
              </a>
            </p>
          </div>
        </section>
      </main>
      <ModalPreview
        isOpen={previewImage !== null}
        imageSrc={previewImage}
        onClose={closePreview}
        altText="Preview Image"
      />
    </>
  );
}

export default Main;
