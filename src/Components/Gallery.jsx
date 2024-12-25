import React from 'react';
import locationsData from '../Data/locations.json';

const Gallery = () => {
  return (
    <div className="p-6">
      {/* Heading */}
      <h1 className="text-2xl sm:text-3xl font-bold text-center mb-4">
        Gallery
      </h1>

      {/* Subheading */}
      <h2 className="text-lg sm:text-xl text-center text-gray-700 mb-4">
        Discover Stunning Locations
      </h2>

      {/* Paragraph */}
      <p className="text-center text-base sm:text-lg mb-2">
        Explore the beauty and uniqueness of every space.
      </p>
      <p className="text-center text-base sm:text-lg mb-8">
        Find your special place among these remarkable destinations.
      </p>

      {/* Centered Image Gallery */}
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {locationsData.map((location) => (
            <div
              key={location.id}
              className="flex flex-col items-center"
            >
              {/* Image */}
              <img
                src={location.image} // Accessing the image from the JSON data
                alt={location.place}
                className="w-full max-w-xs sm:max-w-sm lg:max-w-md h-60 sm:h-72 lg:h-80 object-cover rounded-lg"
              />
              {/* Place Name */}
              <div className="text-center mt-4 font-semibold text-sm sm:text-base">
                {location.place}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
