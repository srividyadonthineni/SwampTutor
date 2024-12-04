
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from "react-router-dom";

const Navbar = ({user, setUser}) => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token"); // Clear the token
    setUser(null); // Clear user state
  };
  const { isLoggedIn, login, logout } = useAuth();
  return (
    <nav className="bg-green-50 text-green-800 px-6 py-4 shadow-md flex items-center justify-between">
      <div className="text-2xl font-bold text-green-800">SwampTutor</div>
      
      <div className="flex gap-6">
        <NavLink to = "/">
          <a className = "text-green-800 hover:text-green-600 font-medium">Home</a>
        </NavLink>
        <NavLink to = "/about">
          <a className="text-green-800 hover:text-green-600 font-medium">About</a>
        </NavLink>
      </div>
      <div className="flex gap-6">
      {user ? (
        <button
        onClick={() => navigate("/settings")}
        className="bg-green-200 text-green-800 hover:bg-green-300 font-medium px-4 py-2 rounded-md"
      >
        Settings
      </button>
      ) : undefined
    }
      {user ? (        
        <NavLink to = "/">
        <button onClick={handleLogout} className="bg-green-200 text-green-800 hover:bg-green-300 font-medium px-4 py-2 rounded-md">
          {<p>Sign out</p>}
        </button>
      </NavLink>
      ) : (
<NavLink to = "/login">
        <button onClick={logout} className="bg-green-200 text-green-800 hover:bg-green-300 font-medium px-4 py-2 rounded-md">
          {<p>Sign in</p>}
        </button>
      </NavLink>
      )
      } 
      </div>
    </nav>
    
  );
};

export default Navbar;
