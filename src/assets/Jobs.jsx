import React, { useEffect, useState } from 'react'

export default function Jobs() {

  const [jobs, setJobs] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    const Fetchjobs = async () => {
      const response = await fetch("http://localhost:8082/findall")
      const result = await response.json();
      setJobs(result);
      console.log(result);

    }
    Fetchjobs();
  }, [])

  const SearchedJob = jobs.filter(jobs =>
    jobs.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    jobs.desci?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    jobs.tech?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (

    <div className=" bg-blue-100 py-10 min-h-screen px-4">

      <h2 className="text-3xl font-extrabold text-gray-800 mb-6 text-center">
        Current Job Openings
      </h2>

      {/* 🔍 Search Bar */}
      <div className="  max-w-xl mx-auto mb-10">
        <input
          type="text"
          placeholder="Search job title..."
          className="bg-white w-full px-5 py-3 rounded-2xl shadow-md border border-gray-300 focus:ring-2 focus:ring-blue-50 outline-none"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>



      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {SearchedJob.map((job) => (
          <div
            key={job.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col justify-between p-6"
          >
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{job.title}</h3>

              <p className="text-gray-600 mb-3">
                <span className="font-semibold text-gray-800">Experience:</span> {job.experience}
              </p>

              <p className="text-gray-600 mb-3">
                <span className="font-semibold text-gray-800">Location:</span> {job.tech}
              </p>

              <p className="text-gray-500 mb-6 line-clamp-3">{job.desci}</p>
            </div>

            <a
              href="#"
              className="inline-block text-center bg-indigo-500 hover:bg-indigo-600 text-white font-medium py-2 px-4 rounded transition-colors duration-300 w-full"
            >
              Apply Now
            </a>
          </div>

        ))}
      </div>
    </div>


  )
}
