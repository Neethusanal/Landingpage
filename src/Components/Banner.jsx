import React from 'react';
import Search from './Search';

const Banner = () => {
  return (
    <section
      className="relative bg-cover bg-center h-[500px] sm:h-[600px] flex flex-col justify-center items-center text-center"
      style={{
        backgroundImage: "url('/images/banner.png')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Content */}
      <div className="relative z-10 px-6 sm:px-10 text-white max-w-2xl">
        {/* Line 1 */}
        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mb-2">
          Discover the secrets to funding deals,
        </h2>

        {/* Line 2 */}
        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mb-2">
          Choosing amenities and bookings
        </h2>

        {/* Line 3 */}
        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mb-6">
          Your perfect stay.
        </h2>

        {/* Search Bar */}
        <div className="mt-4 w-full max-w-3xl">
          <Search />
        </div>
      </div>
    </section>
  );
};

export default Banner;
