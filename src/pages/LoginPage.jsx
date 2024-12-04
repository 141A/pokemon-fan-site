import React, { useState } from 'react';
import LoginForm from '../components/LoginForm';
import RegistrationForm from '../components/RegisterForm';

const LoginPage = () => {
  const [isRegistering, setIsRegistering] = useState(false);

  const toggleForm = () => {
    setIsRegistering((prev) => !prev);
  };

  return (
    <div className="login-page">
      <h1>{isRegistering ? 'Register' : 'Login'}</h1>
      {isRegistering ? (
        <RegistrationForm />
      ) : (
        <LoginForm />
      )}
      <button onClick={toggleForm}>
        {isRegistering ? 'Already have an account? Login' : "Don't have an account? Register"}
      </button>
    </div>
  );
};

export default LoginPage;
