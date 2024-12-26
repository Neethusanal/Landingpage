import React, { useState } from 'react'

const Search = () => {
  const today = new Date();
  const checkInDefault = new Date(today);
  const checkOutDefault = new Date(today);
  checkInDefault.setDate(today.getDate() + 1); // Tomorrow
  checkOutDefault.setDate(today.getDate() + 10); // 10 days from today

//   const [location, setLocation] = useState("Bommanahalli, Bengaluru");
//   const [checkInDate, setCheckInDate] = useState("Dec 01");
//   const [checkOutDate, setCheckOutDate] = useState("Dec 10");
  return (
    <div className="bg-white shadow-md rounded-full py-2 px-4 flex items-center gap-2 max-w-4xl mx-auto relative">
    {/* Location */}
    <div className="flex flex-col w-1/3">
      <label className="text-sm text-gray-500">Location</label>
      <div className="flex items-center justify-between">
        <span className="text-gray-700">Bommanahalli, Bengaluru</span>
        <button onClick={() => alert("Select a location")} className="text-gray-400">
          ▼
        </button>
      </div>
    </div>
  
    {/* Check-in */}
    <div className="flex flex-col w-1/4">
      <label className="text-sm text-gray-500">Check-in</label>
      <div className="flex items-center justify-between">
        <span className="text-gray-700">Dec 01</span>
        <button onClick={() => alert("Select a check-in date")} className="text-gray-400">
          ▼
        </button>
      </div>
    </div>
  
    {/* Check-out */}
    <div className="flex flex-col w-1/4">
      <label className="text-sm text-gray-500">Check-out</label>
      <div className="flex items-center justify-between">
        <span className="text-gray-700">Dec 10</span>
        <button onClick={() => alert("Select a check-out date")} className="text-gray-400">
          ▼
        </button>
      </div>
    </div>
  
    {/* Search Button */}
    <button className="bg-black text-white rounded-full p-3 flex items-center justify-center absolute right-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="h-5 w-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-6-6M4 10a6 6 0 1 1 12 0 6 6 0 0 1-12 0z"
        />
      </svg>
    </button>
  </div>
  )
}

export default Search