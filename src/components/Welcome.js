// src/components/Welcome.js
import React from 'react';
import { Link } from 'react-router-dom';

const Welcome = () => {
  return (
    <div>
      <h2>Welcome to the Project Sharing App</h2>
      <p>
        You can submit your project <Link to="/submit-project">here</Link>.
      </p>
    </div>
  );
};

export default Welcome;
