
import React, { useState } from "react";
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CardDock from './components/CardDock';
import Default from './layouts/Default';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import DashboardPage from './pages/DasdboardPage';

const App = () => {
  const [user, setUser] = useState(null); // Manage logged-in user state
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Default user={user} setUser={setUser}/>}>
        <Route index element={<HomePage user={user} setUser={setUser}/>} />
        <Route path='/login' element={<LoginPage setUser={setUser} />} />
        <Route path='/register' element={<RegisterPage setUser={setUser} />} />
        <Route
          path='/dashboard'
          element={user ? <DashboardPage user={user} setUser={setUser} /> : <HomePage />}
        />
      </Route>
    )
  );

  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
};

export default App;
