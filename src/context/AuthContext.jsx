import { createContext, useContext, useState } from "react";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = async (username, password) => {
    try {
      console.log("Attempting login with:", username, password);
      const response = await axios.post("http://localhost:5000/login", { username, password });
      console.log("Received response:", response);

      if (response.data.token) {
        console.log("Token received:", response.data.token);
        localStorage.setItem("authToken", response.data.token);
        setIsLoggedIn(true);
        return "Login successful!";
      } else {
        throw new Error("No token received");
      }
    } catch (error) {
      console.error("Login failed:", error);
      setIsLoggedIn(false);
      throw new Error("Invalid credentials");
    }
  };

  const logout = () => {
    localStorage.removeItem("authToken");
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
