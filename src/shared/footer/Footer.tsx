// Footer.tsx

import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitch, faDiscord, faTiktok } from '@fortawesome/free-brands-svg-icons';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <a href="/privacy-policy">Privacy Policy</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://twitch.tv" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitch} />
          </a>
          <a href="https://discord.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faDiscord} />
          </a>
          <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTiktok} />
          </a>
        </div>
        <p>&copy; {new Date().getFullYear()} Call of Duty Tournament</p>
      </div>
    </footer>
  );
};

export default Footer;
