import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Modal from '../Modal/modal';
import './navigation.css';

function Navigation({ isGitHubPage }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  const toggleMenu = () => {
    setIsModalOpen((prevState) => !prevState);
  };

  const handleNavClick = (e, target) => {
    e.preventDefault();
    toggleMenu();

    if (target.startsWith('#')) {
      navigate('/');
      setTimeout(() => {
        const element = document.querySelector(target);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      navigate(target);
    }
  };

  return (
    <nav className={`navigation ${isGitHubPage ? 'github-nav' : ''}`}>
      <div
        className={`hamburger ${isModalOpen ? 'open' : ''} ${isGitHubPage ? 'github-nav' : ''}`}
        onClick={toggleMenu}
      >
        <span className="top"></span>
        <span className="middle"></span>
        <span className="bottom"></span>
      </div>
      <Modal isOpen={isModalOpen}>
        <ul className="nav-links">
          <li>
            <Link to="/" onClick={(e) => handleNavClick(e, '/')}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/#about" onClick={(e) => handleNavClick(e, '#about')}>
              About
            </Link>
          </li>
          <li>
            <Link to="/#featured-projects" onClick={(e) => handleNavClick(e, '#featured-projects')}>
              My Work
            </Link>
          </li>
          <li>
            <Link to="/education" onClick={(e) => handleNavClick(e, '/education')}>
              Education
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={(e) => handleNavClick(e, '/contact')}>
              Contact
            </Link>
          </li>
          <li>
            <Link to="/github-portfolio" onClick={(e) => handleNavClick(e, '/github-portfolio')}>
              GitHub Stats
            </Link>
          </li>
        </ul>
      </Modal>
    </nav>
  );
}

export default Navigation;
