import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { isLoggedIn, login, logout } = useAuth();

  return (
    <nav className="bg-green-50 text-green-800 px-6 py-4 shadow-md flex items-center justify-between">
      <div className="text-2xl font-bold text-green-800">SwampTutor</div>
      
      <div className="flex gap-6">
        <NavLink to="/">
          <span className="text-green-800 hover:text-green-600 font-medium">Home</span>
        </NavLink>
        <NavLink to="/about">
          <span className="text-green-800 hover:text-green-600 font-medium">About</span>
        </NavLink>
      </div>

      <div className="flex gap-4">
        {!isLoggedIn && (
          <NavLink to="/register">
            <button className="bg-blue-200 text-blue-800 hover:bg-blue-300 font-medium px-4 py-2 rounded-md">
              Register
            </button>
          </NavLink>
        )}
        <NavLink to="/login">
          <button onClick={isLoggedIn && logout} className="bg-green-200 text-green-800 hover:bg-green-300 font-medium px-4 py-2 rounded-md">
            {isLoggedIn ? <p>Sign out</p> : <p>Sign in</p>}
          </button>
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
