import React from 'react'

const Card = ({ title, description, image, styleVariant }) => {
    const cardStyles = {
        default: "bg-white shadow-md rounded-lg p-6",
        dark: "bg-gray-800 text-white shadow-md rounded-lg p-6",
        outline: "border border-gray-300 rounded-lg p-6",
      };
    
      const appliedStyles = cardStyles[styleVariant] || cardStyles.default;
    
  return (
    <div className={`relative overflow-hidden ${appliedStyles}`}>
      {/* Icon at the top-left */}
      <img
        src={image}
        alt={title}
        className="absolute top-2 left-2 w-12 h-12 object-cover  border-white"
      />

      {/* Card Content */}
      <h3 className="mt-12 text-lg font-bold">{title}</h3>
      <p className="text-gray-600 mt-4">{description}</p>
    </div>
  )
}

export default Card