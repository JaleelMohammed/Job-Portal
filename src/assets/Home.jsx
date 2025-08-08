// import React from 'react'
import { Link } from 'react-router-dom'
import img from '../assets/img2.jpg'

// export default function Home() {
//   return (

//     <div className="min-h-screen flex items-center justify-center bg-[linear-gradient(to_bottom_right,#3A24,#8D68AA,_#F4D6FF)]">
//       {/* Left content */}
//       <div className="flex flex-col justify-center items-start flex-1 p-8 md:p-16">
//         <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
//           Welcome to the <span className="text-indigo-600">Job Portal</span>
//         </h1>
//         <p className="text-lg md:text-xl text-gray-700 max-w-xl mb-10">
//           Find your next career opportunity or post a job to find the perfect candidate. Join thousands of professionals on our platform.
//         </p>

      //   <div className="flex flex-wrap gap-4">
      //     <Link
      //       to="/jobs"
      //       className="inline-block bg-indigo-600 text-white font-semibold py-3 px-6 rounded-lg border border-indigo-600 shadow hover:bg-white hover:text-indigo-600 transition duration-300"
      //     >
      //      🔍 Browse All Jobs
      //     </Link>
      //     <Link
      //       to="/hire"
      //       className="inline-block bg-white text-indigo-600 font-semibold py-3 px-6 rounded-lg border border-indigo-600 shadow hover:bg-indigo-600 hover:text-white transition duration-300"
      //     >
      //       ✏ Post a Job
      //     </Link>
      //   </div>
      // </div>

     
//       <div className="hidden md:flex flex-1 justify-center items-center p-8 md:p-16">
//         <img
//           src={img}
//           alt="Job Portal Hero"
//           className="w-full max-w-md rounded-xl shadow-2xl object-cover"
//         />
//       </div>
//     </div>
//   );
// }


import React, { useEffect, useState } from 'react';

const JobPortalHero = () => {
  const wordPairs = [
    ['Job','Portal'],
    ['Career', 'Platform'],
    ['Talent', 'Board'],
    ['Hiring', 'Hub'],
    ['Work', 'World'],
  ];

  const [currentPairIndex, setCurrentPairIndex] = useState(0);
  const [letterIndex, setLetterIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState(['', '']);

  useEffect(() => {
    const [word1, word2] = wordPairs[currentPairIndex];

    if (letterIndex <= word1.length || letterIndex <= word2.length) {
      const first = word1.slice(0, letterIndex);
      const second = word2.slice(0, letterIndex);
      setDisplayedText([first, second]);

      const timeout = setTimeout(() => {
        setLetterIndex((prev) => prev + 1);
      }, 65); // speed of each letter

      return () => clearTimeout(timeout);
    } else {
      const delay = setTimeout(() => {
        setLetterIndex(0);
        setCurrentPairIndex((prev) => (prev + 1) % wordPairs.length);
      }, 2000); // delay before switching to next word pair

      return () => clearTimeout(delay);
    }
  }, [letterIndex, currentPairIndex]);

  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-20 bg-gradient-to-br from-[3A294F] via-[#8D88AA] to-[#F4D6FF] transition-all">
      {/* Text Section */}
      <div className="w-full md:w-1/2 text-center md:text-left mb-10 md:mb-0">
        <h1 className="text-4xl md:text-5xl font-extrabold text-black mb-4">
          Welcome to the{' '}
          <span className="text-indigo-600">
            {displayedText[0]}
          </span>{' '}
          <span className="text-indigo-600">
            {displayedText[1]}
          </span>{' '}
          
        </h1>
        <p className="text-gray-600 text-lg md:text-xl mb-8">
          Find your next career opportunity or post a job to find the perfect candidate. Join thousands of professionals on our platform.
        </p>

        <div className="flex flex-wrap gap-4">
          <Link
            to="/jobs"
            className="inline-block bg-indigo-600 text-white font-semibold py-3 px-6 rounded-lg border border-indigo-600 shadow hover:bg-white hover:text-indigo-600 transition duration-300"
          >
           🔍 Browse All Jobs
          </Link>
          <Link
            to="/hire"
            className="inline-block bg-white text-indigo-600 font-semibold py-3 px-6 rounded-lg border border-indigo-600 shadow hover:bg-indigo-600 hover:text-white transition duration-300"
          >
            ✏ Post a Job
          </Link>
        </div>
      </div>


      {/* Image Section */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src={img}
          alt="Job search"
          className="w-90 md:w-106 drop-shadow-lg rounded-xl  shadow-2xl object-cover"
        />
      </div>

      {/* <div className="hidden md:flex flex-1 justify-center items-center p-8 md:p-16">
        <img
        src={img}
        alt="Job Portal Hero"
           className="w-full max-w-md rounded-xl shadow-2xl object-cover"
         />
       </div> */}
      



    </div>
  );
};

export default JobPortalHero;

