import React, { useEffect, useState } from 'react'

export default function Jobs() {

  const [jobs, setJobs] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [applied, setApplied] = useState(new Set());


  useEffect(() => {
    const Fetchjobs = async () => {
      const response = await fetch("http://localhost:8080/findall")
      const result = await response.json();
      setJobs(result);
      console.log(result);

    }
    Fetchjobs();
  }, [])
  const handleApply = (id) => {
    setApplied((prev) => ({ ...prev, [id]: true }));
  };

  const SearchedJob = jobs.filter(jobs =>
    jobs.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    jobs.desci?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    jobs.tech?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (

    <div className=" bg-gradient-to-br from-[3A294F] via-[#8D88AA] to-[#F4D6FF] transition-all py-10 min-h-screen px-4">

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
{/* {SearchedJob.length>0? (

):( 

    <div className="text-center py-10">
    <p className="text-lg">
      No jobs found matching Your Search
    </p>
    
    

    </div>
)*/}

  
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
                <span className="font-semibold text-gray-800">Required Technologies:</span> {job.tech}
              </p>

              <p className="text-gray-500 mb-6 line-clamp-3">{job.desci}</p>
            </div>

            <button
              onClick={() => handleApply(job.id)}
              className={`w-full py-2 rounded-3xl text-white font-semibold transition duration-200 ${applied[job.id]
                  ? "bg-gray-700 cursor-not-allowed "
                  : "bg-indigo-600 hover:bg-indigo-700 "
                }`}
              disabled={applied[job.id]}
            >
              {applied[job.id] ? "Applied" : "Apply Now"}
            </button>

          </div>
        

        ))}
      </div>
    </div>


  )
}
