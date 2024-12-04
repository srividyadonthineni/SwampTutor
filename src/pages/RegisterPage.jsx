import React, { useState } from 'react';
import axios from 'axios';

const RegisterPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!formData.email.endsWith("@ufl.edu")) {
      setMessage("Please use a @ufl.edu email address.");
      return;
    }

    try {
      const token = localStorage.getItem("token");
        const baseUrl = process.env.NODE_ENV === "production"
        ? "https://your-production-domain.com"
        : "http://localhost:5000";

        const response = await axios.get("${baseUrl}/register", {
        ...formData,
        coursesTaken,
        coursesTutoring,
      });

      if (response.data.success) {
        // Save the token to local storage
        localStorage.setItem("token", response.data.token);

        // Set user state
        setUser({
          name: response.data.name,
          isTutor: response.data.isTutor,
        });

        // Redirect to the dashboard
        navigate("/");
      } else {
        setMessage("Registration failed.");
      }
    } catch (error) {
      setMessage(error.response?.data?.error || 'Registration failed'); // Display error message
    }
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
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
        <button type="submit">Register</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default RegisterPage;
