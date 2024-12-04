import React from 'react';
import '../css/PageNotFound.css';

export default function PageNotFound() {
  return (
    <div className="mainBox">
      <h1>404 Page Not Found</h1>
      <p>The page you're looking for does not exist.</p>
      <button onClick={() => window.location.href = '/'}>Go Back to Home</button>
    </div>
  );
}
