import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { NavLink } from 'react-router-dom';
import axios from "axios";
import { useNavigate } from "react-router-dom";

function LoginPage  ({ setUser })  {
    const [formData, setFormData] = useState({ email: "", password: "" });
    const [message, setMessage] = useState("");
    const navigate = useNavigate();
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
        const baseUrl = process.env.NODE_ENV === "production"
        ? "https://your-production-domain.com"
        : "http://localhost:5000";
      
      const response = await axios.get("${baseUrl}/login", formData);
        setUser({ name: response.data.name, isTutor: response.data.is_tutor });
        localStorage.setItem("token", response.data.token); // Store the token for persistence
        navigate("/dashboard"); // Redirect to user homepage
      } catch (error) {
        setMessage("Login failed: " + (error.response?.data?.error || error.message));
      }
    };
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 space-y-4">
      <div className="w-full max-w-md p-8 space-y-4 bg-white rounded shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-700">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">
              Email
            </label>
            <input
              type="text"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
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
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 mt-1 text-green-800 bg-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-green-300"
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 font-semibold text-green-800 bg-green-200 rounded hover:bg-green-300 focus:outline-none focus:ring-2 focus:ring-green-400"
          >
            Log In
          </button>
          {message && <p className="mt-4 text-red-500">{message}</p>}
        </form>

      </div>
            <NavLink to = "/register" >
            <button
              type="submit"
              className="w-full px-4 py-2 font-semibold text-green-800 bg-green-200 rounded hover:bg-green-300 focus:outline-none focus:ring-2 focus:ring-green-400"
            >
              No Account? 
            </button>
          </NavLink>
    </div>
  );
}

export default LoginPage;
