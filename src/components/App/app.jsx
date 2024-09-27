import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import './app.css';
import Header from '../Header/header';
import Main from '../Main/main';
import GitHubPortfolio from '../GitHubPortfolio/githubPortfolio';
import Education from '../Education/education';
import PageTransition from '../PageTransition/pagetransition';
import Footer from '../Footer/footer';
import Contact from '../Contact/contact';

function App() {
  return (
    <Router>
      <div className="App">
        <AnimatePresence mode="wait">
          <Routes>
            <Route
              path="/"
              element={
                <PageTransition>
                  <Header />
                  <Main />
                  <Footer />
                </PageTransition>
              }
            />
            <Route
              path="/github-portfolio"
              element={
                <PageTransition>
                  <GitHubPortfolio />
                  <Footer />
                </PageTransition>
              }
            />
            <Route
              path="/education"
              element={
                <PageTransition>
                  <Education />
                  <Footer />
                </PageTransition>
              }
            />
            <Route
              path="/contact"
              element={
                <PageTransition>
                  <Contact />
                  <Footer />
                </PageTransition>
              }
            />
          </Routes>
        </AnimatePresence>
      </div>
    </Router>
  );
}

export default App;
