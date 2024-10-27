import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import CardDock from '../components/CardDock'

const Default = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

export default Default
