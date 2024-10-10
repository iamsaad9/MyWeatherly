import React, { useState } from 'react';
import Home from './Home'
export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    if (username === 'saad_01' && password === 'saad1234') {
      setIsLoggedIn(true); // Show Home page
      setError(''); // Clear any previous error
    } else {
      setError('Invalid username or password'); // Show error message
    }
  };

  // If logged in, display the Home page
  if (isLoggedIn) {
    return <Home/>
  }

  // Login form design
  return (
    <div style={{ background: 'var(--elementBg)', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ background: 'var(--themeColor)', padding: '30px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
        <h2 style={{ color: 'white', marginBottom: '20px', textAlign: 'center' }}>Login</h2>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{
            width: '100%',
            padding: '10px',
            marginBottom: '10px',
            borderRadius: '5px',
            border: '1px solid white',
            background: 'transparent',
            color: 'white',
          }}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            width: '100%',
            padding: '10px',
            marginBottom: '20px',
            borderRadius: '5px',
            border: '1px solid white',
            background: 'transparent',
            color: 'white',
          }}
        />

        <button
          onClick={handleLogin}
          style={{
            width: '100%',
            padding: '10px',
            background: 'white',
            color: 'var(--themeColor)',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontWeight: 'bold',
          }}
        >
          Login
        </button>

        {error && <p style={{ color: 'red', marginTop: '10px', textAlign: 'center' }}>{error}</p>}
      </div>
    </div>
  );
}
