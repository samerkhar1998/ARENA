// Homepage.tsx

import React from 'react';
import './Homepage.css';

const Homepage: React.FC = () => {
  return (
    <div>
      <main className="main-content">
        <section className="hero-section">
          <div className="hero-content">
            <h1>Welcome to The Arena</h1>
            <p>Experience the thrill of gaming like never before.</p>
            <a href="/schedule" className="cta-button">Explore Schedule</a>
          </div>
        </section>

        <section className="features-section">
          <div className="feature">
            <h2>Competitive Gaming</h2>
            <p>Join intense gaming battles and prove your skills.</p>
          </div>

          <div className="feature">
            <h2>Live Streaming</h2>
            <p>Watch live streams of epic matches on Twitch.</p>
          </div>

          <div className="feature">
            <h2>Community Interaction</h2>
            <p>Connect with fellow gamers on Discord and share your experiences.</p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Homepage;
