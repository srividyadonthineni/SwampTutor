import React from 'react'
import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import CardDock from './components/CardDock'
import Default from './layouts/Default'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Default />}>
        <Route index element={<HomePage />} />
        <Route path = '/login' element = {<LoginPage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App
