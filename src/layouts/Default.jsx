import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import CardDock from '../components/CardDock'

const Default = ({user, setUser}) => {
  return (
    <>
      <Navbar user={user} setUser={setUser}/>
      <Outlet />
    </>
  )
}

export default Default
