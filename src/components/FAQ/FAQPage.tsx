// FAQPage.tsx

import React from 'react';
import './FAQPage.css';

const FAQPage: React.FC = () => {
  const faqItems = [
    {
      question: 'What games are featured on The Arena?',
      answer: 'We feature a variety of games, including Call of Duty, Fortnite, League of Legends, and more. Check our schedule for upcoming events.',
    },
    {
      question: 'How can I participate in a gaming event?',
      answer: 'To participate, you can sign up for events through our website. Follow the registration instructions provided for each specific event.',
    },
    {
      question: 'Can I watch live streams of the gaming events?',
      answer: 'Yes, you can watch live streams on our Twitch channel. Links to live streams are usually provided on the event pages.',
    },
    {
      question: 'Is there a registration fee for events?',
      answer: 'Registration fees may vary for different events. Check the details on the event page for specific information about fees and prizes.',
    },
    // Add more FAQ items as needed
  ];

  return (
    <div>
      <main className="main-content">
        <h1 className="page-title">Frequently Asked Questions</h1>

        <section className="faq-section">
          {faqItems.map((item, index) => (
            <div key={index} className="faq-item">
              <h3 className="faq-question">{item.question}</h3>
              <p className="faq-answer">{item.answer}</p>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
};

export default FAQPage;
