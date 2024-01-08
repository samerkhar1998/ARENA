// SignInPage.tsx

import React, { useState } from 'react';
import './SignInPage.css';

const SignInPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    // Handle the sign-in logic here
    console.log(`Signing in with email: ${email}, password: ${password}`);
  };

  return (
    <div>
      <main className="main-content">
        <h1 className="page-title">Sign In</h1>
        <div className="sign-in-form">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button onClick={handleSignIn}>Sign In</button>
        </div>
      </main>
    </div>
  );
};

export default SignInPage;
