import React from 'react'
import { Link } from 'react-router-dom'
import img from '../assets/img2.jpg'

export default function Home() {
  return (

    // <div className="bg-blue-200 flex flex-col sm:flex-row justify-center items-center h-screen gap-4">

    //   <div className="text-center sm:text-left px-4">
    //     <h1 className="text-4xl font-extrabold text-gray-800 leading-tight">
    //       Welcome to the Job Portal
    //     </h1>
    //     <p className="text-lg text-gray-600 mt-4">
    //       Find your next career opportunity or post a job to find the perfect candidate.
    //     </p>

    //     <div className="flex flex-col sm:flex-row gap-4 mt-8 items-center sm:items-start">
    //       <Link
    //         to="/jobs"
    //         className="inline-flex items-center justify-center px-6 py-3 text-indigo-600 bg-white hover:bg-indigo-700  hover:text-white  text-base font-medium rounded-md shadow-md transition-colors duration-200 ease-in-out"
    //       >
    //         🔍 Browse All Job Listings
    //       </Link>

    //       <Link
    //         to="/hire"
    //         className="px-6 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:text-white hover:bg-indigo-600 transition-colors duration-200 ease-in-out shadow-lg"
    //       >
    //         ✏ Post a Job
    //       </Link>
    //     </div>
    //   </div>
    // </div>
  
    <div className="min-h-screen flex flex-col md:flex-row bg-gradient-to-br from-blue-100 to-indigo-100">
      {/* Left content */}
      <div className="flex flex-col justify-center items-start flex-1 p-8 md:p-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
          Welcome to the <span className="text-indigo-600">Job Portal</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-xl mb-10">
          Find your next career opportunity or post a job to find the perfect candidate. Join thousands of professionals on our platform.
        </p>

        <div className="flex flex-wrap gap-4">
          <Link
            to="/jobs"
            className="inline-block bg-indigo-600 text-white font-semibold py-3 px-6 rounded-lg shadow hover:bg-indigo-700 transition duration-300"
          >
           🔍 Browse All Jobs
          </Link>
          <Link
            to="/hire"
            className="inline-block bg-white text-indigo-600 font-semibold py-3 px-6 rounded-lg border border-indigo-600 shadow hover:bg-indigo-50 transition duration-300"
          >
            ✏ Post a Job
          </Link>
        </div>
      </div>

     
      <div className="hidden md:flex flex-1 justify-center items-center p-8 md:p-16">
        <img
          src={img}
          alt="Job Portal Hero"
          className="w-full max-w-md rounded-xl shadow-2xl object-cover"
        />
      </div>
    </div>
  );
}


