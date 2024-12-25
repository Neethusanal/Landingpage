import React from 'react'

const About = () => {
  return (
    <div className="px-6 py-10 sm:px-12 lg:px-20">
  {/* Main Content */}
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
    {/* Left Image */}
    <div className="relative">
      <img
        src="/images/about.png" // Replace with your image path
        alt="About Us"
        className="w-full h-auto rounded-lg shadow-lg"
      />

      {/* Floating Vision Card */}
      <div className="absolute bottom-[-20px] right-0 bg-white shadow-lg rounded-lg p-4 sm:p-6 w-[80%]">
        <h3 className="text-lg sm:text-xl font-bold mb-2">Our Vision</h3>
        <p className="text-sm sm:text-base text-gray-600">
          To create innovative solutions and deliver unmatched services to our customers.
        </p>
      </div>
    </div>

    {/* Right Content */}
    <div className="flex flex-col justify-start mt-10">
      {/* About Us Heading */}
      <h3 className="text-2xl sm:text-3xl font-bold mb-4">
        About Us
      </h3>
      {/* About Us Description */}
      <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
        Welcome to our organization! We are dedicated to providing the highest quality service and ensuring the satisfaction of our valued customers. Our team is driven by passion, innovation, and the desire to excel in everything we do. Join us on our journey to make a positive impact!
      </p>
    </div>
  </div>
</div>

  
  )
}

export default About