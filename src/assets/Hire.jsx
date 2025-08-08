import React from 'react'

export default function Hire() {


  const handleData = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formValue = Object.fromEntries(formData.entries());
    console.log("Data being SENT (formValue):", formValue);

    try {
      const response = await fetch("http://localhost:8080/employees", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formValue),
      });


      if (!response.ok) {

        const errorMessage = await response.text();
        throw new Error(`HTTP error! Status: ${response.status}, Message: ${errorMessage || 'Unknown server error'}`);
      }


      const receivedMessage = await response.text();
      console.log("Message RECEIVED from backend:", receivedMessage);
      alert(`DataBase Result :  ${  receivedMessage}`);
      e.target.reset();

    } catch (error) {
      console.error("Error in sending data:", error);
      alert('Failed to send data: ' + error.message);
    }
  }


  return (

    <div className="min-h-screen flex items-center justify-center  bg-gradient-to-br from-[3A294F] via-[#8D88AA] to-[#F4D6FF] transition-all p-4">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-screen-sm">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Hire Employees</h2>

        <form onSubmit={handleData} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Employee ID</label>
            <input
              type="text"
              placeholder="Enter ID"
              name="id"
              className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
           />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Job Title</label>
            <input
              type="text"
              placeholder="Enter title"
              name="title"
              className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
           />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Experience (Years)</label>
            <input
              type="text"
              placeholder="Enter experience"
              name="experience"
              className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Required Technologies</label>
            <input
              type="text"
              placeholder="Enter tech stack"
              name='tech'
              className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
           />
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700">Job Description</label>
            <textarea
              placeholder="Enter description"
              name='desci'
              className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
              rows="4"
            ></textarea>
          </div>

          <div className="md:col-span-2 flex justify-center">
            <button
              type="submit"
              className=" w-60 bg-gradient-to-r from-indigo-600 to-blue-700 text-white font-semibold px-6 py-2 rounded-3xl shadow-md hover:from-indigo-600 hover:to-purple-600 transition duration-200"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>


  )
}
