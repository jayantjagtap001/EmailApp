import React from 'react';
import axios from 'axios';

const Login = () => {
  const handleGoogleLogin = async () => {
    try {
      const response = await axios.post('/api/users/google-auth');
      console.log('Logged in:', response.data);
    } catch (error) {
      console.error('Google Auth failed', error);
    }
  };

  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={handleGoogleLogin}>Login with Google</button>
    </div>
  );
};

export default Login;
