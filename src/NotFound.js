// NotFound.js
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>404 - Not Found</h2>
      <p>The page you are looking for does not exist.</p>
      <Link to="/SignIn">
        <button style={{ padding: '10px', marginTop: '10px', cursor: 'pointer' }}>
          Go to Sign In
        </button>
      </Link>
    </div>
  );
};

export default NotFound;
