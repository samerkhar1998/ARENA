// Header.tsx

import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="app-header">
      <div className="header-container">
        <Link to="/" className="logo">
          ARENA
        </Link>
        <nav className="navbar">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/schedule" className="nav-link">
            Schedule
          </Link>
          <Link to="/teams" className="nav-link">
            Teams
          </Link>
          <Link to="/faq" className="nav-link">
            FAQ
          </Link>
          <Link to="/about" className="nav-link">
            About
          </Link>
          <Link to="/signin" className="nav-link">
            Sign In
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
