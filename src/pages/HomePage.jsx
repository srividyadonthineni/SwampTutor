import React from 'react'
import Hero from '../components/Hero'
import CardDock from '../components/CardDock'
const HomePage = ({user, setUser}) => {
  return (
    <div>
        <Hero />
        <CardDock user={user} />
    </div>
  )
}

export default HomePage
