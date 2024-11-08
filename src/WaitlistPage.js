import React, { useState } from 'react';
import './WaitlistPage.css';

function WaitlistPage() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //API call to LAMBDA
    setMessage('Thank you! You’re now on the waitlist.');
  };

  return (
    <div className="waitlist-container">
      <h1>vivian's auction house</h1>
      <p>Join the list and be the first to know when we launch!</p>
      <form onSubmit={handleSubmit} className="waitlist-form">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={handleEmailChange}
          required
          className="waitlist-input"
        />
        <button type="submit" className="waitlist-button">
          Join Waitlist
        </button>
      </form>
      {message && <p className="waitlist-message">{message}</p>}
    </div>
  );
}

export default WaitlistPage;
