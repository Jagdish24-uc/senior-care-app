// LandingPage.js

import React, { useState } from 'react';
import MedicationReminder from './components/MedicationReminder';
import FallDetector from './components/FallDetector';
import NewsFeed from './components/NewsFeed';
import SignupForm from './components/SignupForm';
import LoginForm from './components/LoginForm';
import { auth } from './firebase';
import './LandingPage.css';
const LandingPage = () => {
  const [showSignup, setShowSignup] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [user, setUser] = useState(null);

  auth.onAuthStateChanged((authUser) => {
    if (authUser) {
      setUser(authUser);
    } else {
      setUser(null);
    }
  });

  const handleSignupClick = () => {
    setShowSignup(true);
    setShowLogin(false);
  };

  const handleLoginClick = () => {
    setShowLogin(true);
    setShowSignup(false);
  };

  const handleLogout = () => {
    auth.signOut();
  };

  return (
    <div className="landing-page">
      <header>
        <h1>Senior Care Companion</h1>
        <p>Your personalized Senior care management system</p>
        {user ? (
          <button onClick={handleLogout}>Logout</button>
        ) : (
          <div className="auth-options">
            <button onClick={handleSignupClick}>Signup</button>
            <button onClick={handleLoginClick}>Login</button>
          </div>
        )}
      </header>

      <main>
        {showSignup && <SignupForm />}
        {showLogin && <LoginForm />}
        {!showSignup && !showLogin && (
          <>
            <MedicationReminder />
            <FallDetector />
            <NewsFeed />
          </>
        )}
      </main>

      <footer>
        <p>&copy; 2023 Health Care Companion</p>
      </footer>
    </div>
  );
};

export default LandingPage;
