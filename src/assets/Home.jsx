import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (

    <div className="bg-blue-200 flex flex-col sm:flex-row justify-center items-center h-screen gap-4">

      <div className="text-center sm:text-left px-4">
        <h1 className="text-4xl font-extrabold text-gray-800 leading-tight">
          Welcome to the Job Portal
        </h1>
        <p className="text-lg text-gray-600 mt-4">
          Find your next career opportunity or post a job to find the perfect candidate.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-8 items-center sm:items-start">
          <Link
            to="/jobs"
            className="inline-flex items-center justify-center px-6 py-3 text-indigo-600 bg-white hover:bg-indigo-700  hover:text-white  text-base font-medium rounded-md shadow-md transition-colors duration-200 ease-in-out"
          >
            🔍 Browse All Job Listings
          </Link>

          <Link
            to="/hire"
            className="px-6 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:text-white hover:bg-indigo-600 transition-colors duration-200 ease-in-out shadow-lg"
          >
            ✏ Post a Job
          </Link>
        </div>
      </div>
    </div>

  )
}
