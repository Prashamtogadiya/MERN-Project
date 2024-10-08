import React from 'react';
import "../Css/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-logo">
          <img
            src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1727049600&semt=ais_hybrid"
            alt="Mentimeter Logo"
          />
          <h1>Mentimeter</h1>
          <p className="footer-tagline">Your go-to platform for interactive presentations</p>
        </div>
      </div>

      <div className="footer-columns">
        <div className="footer-column">
          <h4>Features</h4>
          <ul>
            <li>Overview</li>
            <li>Quiz</li>
            <li>Q&A</li>
            <li>Survey</li>
            <li>Presentations</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Resources</h4>
          <ul>
            <li>Work</li>
            <li>Education</li>
            <li>Stories</li>
            <li>Integrations</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Details</h4>
          <ul>
            <li>Legal</li>
            <li>Policies</li>
            <li>Accessibility</li>
            <li>Help Center</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>About us</h4>
          <ul>
            <li>The Team</li>
            <li>Jobs</li>
            <li>Culture</li>
            <li>Contact Us</li>
            <li>Investors</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="social-icons">
          <a href="https://www.facebook.com/yourpage" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="https://www.youtube.com/c/yourchannel" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-youtube"></i>
          </a>
          <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
        </div>
        <div className="language-selector">
          <i className="fas fa-globe"></i>
          <span>Choose your language</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
