import React from 'react';

const About = () => {
  return (
    <div className="px-6 py-10 sm:px-12 lg:px-20 bg-gray-50">
      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* Left Image */}
        <div className="relative">
 
  <img
    src="/images/about.png" // Replace with your image path
    alt="About Us"
    className="w-full h-auto rounded-lg shadow-lg object-cover"
    style={{ maxHeight: "500px" }} // Adjusted image height
  />


  <div className="absolute bottom-0 right-0 bg-white shadow-lg rounded-lg p-4 sm:p-6 transform translate-x-[50%] translate-y-0 w-[90%] md:w-[70%] lg:w-full h-[40%]">
    <h3 className="text-lg sm:text-xl font-semibold mb-2">
      Where Comfort Meets Innovation
    </h3>
    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
      We blend the warmth of home with cutting-edge technology. Our platform
      simplifies your search for the perfect stay, prioritizing transparency and
      reliability.
    </p>
  </div>
</div>


<div className="relative p-6 rounded-lg shadow-lg -mt-15">
  <h2 className="text-2xl font-bold mb-4">About Us</h2>
  <p className="text-gray-700 leading-relaxed">
    Founded by a collective of passionate individuals, we began as a
    humble hobby and have evolved into a thriving venture. With a
    commitment to excellence, we aim to create lasting memories and
    foster joy in every stay.
  </p>
  <p className="mt-4 text-gray-700 leading-relaxed">
    Whether exploring a bustling city or seeking a tranquil escape, we
    are your trusted partner in finding accommodations that feel like
    home.
  </p>
</div>

      </div>
    </div>
  );
};

export default About;




