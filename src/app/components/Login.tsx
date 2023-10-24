"use client" 

import React, { useState } from 'react';
import "../styles.css";
import {useRouter} from "next/navigation";

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter()

  const handleLogin = () => {
    console.log('Email:', email);
    console.log('Password:', password);
    router.push('/main')

  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form className="login-form">
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
      </form>
    </div>
  );
};

export default LoginForm;
