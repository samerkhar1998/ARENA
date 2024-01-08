// AboutPage.tsx

import React from 'react';
import './AboutPage.css';

const About: React.FC = () => {
  return (
    <div>
      <main className="main-content">
        <h1 className="page-title">About The Arena</h1>

        <section className="about-section">
          <p>
            Welcome to The Arena, your ultimate destination for competitive gaming excitement!
          </p>

          <p>
            At The Arena, we believe in creating a platform that brings gamers together, providing a space
            for intense battles, live streaming, and community interaction.
          </p>

          <p>
            Our mission is to foster a thriving gaming community where players can showcase their skills,
            fans can enjoy thrilling matches, and everyone can connect with like-minded individuals who share
            a passion for gaming.
          </p>

          <p>
            Whether you're a seasoned gamer or a casual enthusiast, The Arena is the place to be. Join us
            on this gaming journey and let's create unforgettable moments together!
          </p>
        </section>
      </main>
    </div>
  );
};

export default About;
