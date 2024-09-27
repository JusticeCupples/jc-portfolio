import React from 'react';
import './header.css';
import heroImage from '../../assets/images/hero.png';
import Navigation from '../Navigation/navigation';

function Header() {
  return (
    <header className="header">
      <Navigation />
      <div className="header-content">
        <h1>Justice Cupples</h1>
        <h2>Fullstack Software Engineer</h2>
        <p>
          Passionate about creating innovative solutions and building scalable applications. With
          expertise in both frontend and backend technologies, I strive to deliver high-quality
          software that makes a difference.
        </p>
      </div>
      <img src={heroImage} alt="Hero" className="hero-image" />
    </header>
  );
}

export default Header;
