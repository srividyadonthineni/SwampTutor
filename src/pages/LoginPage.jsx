import React, { useState } from 'react';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState("");
  const { isLoggedIn, login, logout } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/login", { email, password });
      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response ? error.response.data.error : "An error occurred");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-4 bg-white rounded shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-700">Login</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 mt-1 text-green-800 bg-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-green-300"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-600">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 mt-1 text-green-800 bg-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-green-300"
            />
          </div>
          <button
            onClick={login}
            type="submit"
            className="w-full px-4 py-2 font-semibold text-green-800 bg-green-200 rounded hover:bg-green-300 focus:outline-none focus:ring-2 focus:ring-green-400"
          >
            Log In
          </button>
          {message && <p className="mt-4 text-red-500">{message}</p>}
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
