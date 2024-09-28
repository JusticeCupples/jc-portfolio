import React, { useState, useEffect } from 'react';
import './education.css';
import fullstackCert from '../../assets/images/fullstackCert.png';
import reactCert from '../../assets/images/reactCert.png';
import frontendCert from '../../assets/images/frontendCert.png';
import aspfrontCert from '../../assets/images/aspfrontCert.png';
import ModalPreview from '../ModalPreview/modalPreview';
import Navigation from '../Navigation/navigation';

function Education() {
  const [previewImage, setPreviewImage] = useState(null);

  const openPreview = (imageSrc) => {
    setPreviewImage(imageSrc);
  };

  const closePreview = () => {
    setPreviewImage(null);
  };

  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === 'Escape') {
        closePreview();
      }
    };

    document.addEventListener('keydown', handleEscKey);

    return () => {
      document.removeEventListener('keydown', handleEscKey);
    };
  }, []);

  return (
    <div className="education-container">
      <Navigation isGitHubPage={true} />
      <section className="education-section">
        <h2>Education</h2>
        <div className="education-item">
          <h3>TripleTen Full Stack Software Engineering Course</h3>
          <p>
            I completed an intensive full-stack software engineering program, gaining expertise in
            both frontend and backend technologies. The course covered a wide range of topics
            including:
          </p>
          <ul>
            <li>HTML5, CSS3, and JavaScript</li>
            <li>React and Redux</li>
            <li>Node.js and Express.js</li>
            <li>MongoDB and database design</li>
            <li>RESTful API development</li>
            <li>Git version control and collaborative development</li>
          </ul>
          <p>
            Throughout the course, I completed numerous projects, both individually and in team
            settings, applying the learned concepts to real-world scenarios.
          </p>
        </div>
      </section>

      <section className="certifications-section">
        <h2>Certifications</h2>
        <div className="certification-grid">
          <div className="certification-item">
            <img
              src={fullstackCert}
              alt="Full Stack Developer Certification"
              onClick={() => openPreview(fullstackCert)}
            />
            <p>Full Stack Developer Certification</p>
          </div>
          <div className="certification-item">
            <img
              src={reactCert}
              alt="React Developer Certification"
              onClick={() => openPreview(reactCert)}
            />
            <p>React Developer Certification</p>
          </div>
          <div className="certification-item">
            <img
              src={frontendCert}
              alt="Frontend Developer Certification"
              onClick={() => openPreview(frontendCert)}
            />
            <p>Frontend Developer Certification</p>
          </div>
          <div className="certification-item">
            <img
              src={aspfrontCert}
              alt="Advanced Frontend Developer Certification"
              onClick={() => openPreview(aspfrontCert)}
            />
            <p>Advanced Frontend Developer Certification</p>
          </div>
        </div>
      </section>
      <ModalPreview
        isOpen={previewImage !== null}
        imageSrc={previewImage}
        onClose={closePreview}
        altText="Certificate Preview"
      />
    </div>
  );
}

export default Education;
