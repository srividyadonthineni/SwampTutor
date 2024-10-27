import React from 'react'

const Hero = () => {
  return (
    <section className="bg-green-100 text-green-800 px-6 py-10 shadow-md flex flex-col items-center">
      <div className="text-center">
        <h1 className = "text-green-800 hover:text-green-600 text-2xl font-bold">
            Welcome to SwampTutor
        </h1>
      </div>
      <p className="text-green-800 hover:text-green-600 font-medium">
        A UF based tutor discovery site.
      </p>
    </section>
  )
}

export default Hero
