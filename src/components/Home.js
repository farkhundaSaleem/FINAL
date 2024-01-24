// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <div>
      <header>
        <h1>Project Sharing Application</h1>
        <nav>
          <Link to="/login">Login</Link>
          <Link to="/signup">Sign Up</Link>
        </nav>
      </header>
      <main>
        <h2>Welcome to the Project Sharing App</h2>
        <Link to="/submit-project">
          <button>Submit a Project</button>
        </Link>
      </main>
    </div>
  );
};

export default Home;
