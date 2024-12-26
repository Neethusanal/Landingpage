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
      <h2 className="text-lg sm:text-xl text-center  text-black font-semibold mb-4">
      Discover the Beauty of our spaces
      </h2>

      {/* Paragraph */}
      <p className="text-center text-sm sm:text-lg mb-2">
      Explore Znorm homes through our gallery,showcasing cozy interiors,stylish designs and
      </p>
      <p className="text-center text-sm sm:text-lg mb-8">
      views.Each space is crafted to make your stay truly special
      </p>

      {/* Centered Image Gallery */}
      <div className="flex justify-center ">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 max-w-screen-md mx-auto justify-items-center">

          {locationsData.map((location) => (
            <div
              key={location.id}
              className="flex flex-col items-center justify-center "
            >
              {/* Image */}
              <img
  src={location.image} // Accessing the image from the JSON data
  alt={location.place}
  className="w-full max-w-lg sm:max-w-xl lg:max-w-2xl h-auto object-cover rounded-lg"
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
