
"use client" 

import React, { useState, SyntheticEvent } from 'react';
import "../styles.css";
import { useRouter } from "next/navigation"; // Use "next/router" instead of "next/navigation"
import { getBearerToken } from '../auth/auth';
import { fetchDataWithToken } from '../auth/apiUtils';
import { getTokenFromStorage } from '../auth/auth';

const LoginForm: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const router = useRouter();
   

  const handleLogin = async (e: SyntheticEvent) => {
    e.preventDefault();
    try {
      const token = await getBearerToken(username, password);
      console.log(token);

      if (token) {
        router.push("/main");
      } else {
        console.log("Login failed or no token received");
      }

    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form className="login-form">
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="username"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button onClick={handleLogin} type="button">
          Login
        </button>
        <p> Don&apos;t have an account? <a href="/registration">Sign up</a></p>
      </form>
    </div>
  );
};

export default LoginForm;
