import React from 'react'
import Card from './Card'
import {Link} from "react-router-dom"

const CardDock = ({user}) => {
  return (
    <section className = "py-4">
      <div className = "container-xl lg:container m-auto">
        <div className = "grid md:grid-cols-2 gap-3 p-4 rounded-md">
          <Card>
            <h2 className = "text-xl font-bold">For students</h2>
            <p className = "mt-2 mb-4">
              Search for available tutors for any subject
            </p>
            <Link to = {user ? "/dashboard" : "/login"} className = "inline-block rounded-md bg-green-800 text-white px-4 py-2 hover:bg-green-600">
              Search
            </Link>
          </Card>
          <Card>
            <h2 className = "text-xl font-bold">For tutors</h2>
            <p className = "mt-2 mb-4">
              Create a listing for your service
            </p>
            <Link to = {(user&&user.isTutor) ? "/createListing" : "/login"} className = "inline-block rounded-md bg-green-800 text-white px-4 py-2 hover:bg-green-600">
              Create
            </Link>
          </Card>
        </div>

      </div>

    </section>
  )
}

export default CardDock
