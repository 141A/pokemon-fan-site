/**
 * Author: Anthony Lei
 * 
 * Created Login page using Firebase authentication to check and hold login details
 * Worked on 12/3/24 - 12/4/24
 * 
 * */


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from '../Firebase.js';

const LoginRegister = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate(); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isRegistering) {
        // Register the user
        await createUserWithEmailAndPassword(auth, email, password);
      } else {
        // Log in the user
        await signInWithEmailAndPassword(auth, email, password);
      }
      setError('');
      // Redirect to home page on successful login or registering
      navigate('/'); 
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="login-register">
      <h2>{isRegistering ? 'Register' : 'Login'}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p className="error">{error}</p>}
        <button type="submit">{isRegistering ? 'Register' : 'Login'}</button>
      </form>
      {/* Button to toggle between Register and Login */}
      <button
        className="toggle-auth-btn"
        onClick={() => setIsRegistering(!isRegistering)}
      >
        {isRegistering
          ? 'Already have an account? Login'
          : "Don't have an account? Register"}
      </button>
    </div>
  );
};

export default LoginRegister;
