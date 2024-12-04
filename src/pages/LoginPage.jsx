// src/App.js
import React from 'react';
import LoginRegister from '../components/LoginRegister';
import '../css/styles.css'; // Optional: import your CSS for styling

function LoginPage() {
  return (
    <div className="App">
      <h1>Welcome to Firebase Authentication</h1>
      <LoginRegister />
    </div>
  );
}

export default LoginPage;
