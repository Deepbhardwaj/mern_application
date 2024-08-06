import axios from 'axios';
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { API_URL } from '../utils/constants';

const Signup = ({ setIsLoggedIn }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const history = useHistory();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(`${API_URL}/signup`, { username, password });
      localStorage.setItem('token', data.token);
      setIsLoggedIn(true);
      history.push('/');
    } catch (error) {
      setErrorMsg(error.response ? error.response.data.message : 'Error creating the account');
    }
  };

  return (
    <form onSubmit={handleSignup} className="auth-form">
      <h2>Signup</h2>
      {errorMsg && <p>{errorMsg}</p>}
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
        required
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        required
      />
      <button type="submit">Signup</button>
      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </form>
  );
};

export default Signup;
