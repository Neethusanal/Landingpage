import React from 'react'
import locationsData from '../Data/locations.json'

const Gallery = () => {

    return (

        <div className="p-6">
            {/* Heading */}
            <h1 className="text-3xl font-bold text-center mb-4">Gallery</h1>

            {/* Subheading */}
            <h2 className="text-xl text-center text-gray-700 mb-8">Discover the Beauty of our spaces</h2>

            {/* Paragraph */}
            <p className="text-center text-lg ">
                Explore Znorm homes through our gallery,showcasing cozy interiors,stylish designs and stunning
            </p>
            <p className="text-center text-lg mb-8">
                views.Each space is crafted to make your stay truly special
            </p>

            {/* Image Gallery */}
            <div className="px-8 sm:px-16 lg:px-32 flex justify-center">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {locationsData.map((location) => (
      <div key={location.id} className="flex flex-col items-center justify-center">
        {/* Image */}
        <img
          src={location.image} // Accessing the image from the JSON data
          alt={location.place}
          className="w-full max-w-sm h-80 sm:h-96 lg:h-[400px] object-contain rounded-lg"
        />
        {/* Optional: Place Name */}
        <div className="text-center mt-4 font-semibold">{location.place}</div>
      </div>
    ))}
  </div>
</div>

        </div>
    )
}

export default Gallery