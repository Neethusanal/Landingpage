import React from 'react'

const Search = () => {
   
  return (
    <div className="bg-white shadow-md rounded-lg p-4 flex flex-col md:flex-row items-center gap-4 max-w-4xl mx-auto">
    {/* Location Dropdown */}
    <select
      className="w-full md:w-1/3 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      <option value="">Select Location</option>
      <option value="New York">New York</option>
      <option value="Los Angeles">Los Angeles</option>
      <option value="Chicago">Chicago</option>
      <option value="San Francisco">San Francisco</option>
      {/* Add more locations here */}
    </select>

    {/* Check-in Date */}
    <input
      type="date"
      className="w-full md:w-1/4 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    />

    {/* Check-out Date */}
    <input
      type="date"
      className="w-full md:w-1/4 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    />

    {/* Search Button */}
    <button className="w-full md:w-auto px-6 py-2 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700 transition duration-300">
      Search
    </button>
  </div>
  )
}

export default Search