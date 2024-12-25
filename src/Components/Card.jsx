import React from 'react'

const Card = ({ title, description, image, styleVariant,imageStyleVariant,rating }) => {
    const cardStyles = {
        default: "bg-white shadow-md rounded-lg p-6",
        dark: "bg-gray-800 text-white shadow-md rounded-lg p-6",
        outline: "border border-gray-300 rounded-lg p-6",
      };
    
      const imageStyles = {
        default: "absolute top-4 left-4 w-16 h-16 rounded-full object-cover border-2 border-gray-300",
        review: "w-full h-40 object-cover rounded-lg mb-4",
        feature: "w-12 h-12 object-contain mb-4 ",
      };
    
      const appliedCardStyles = cardStyles[styleVariant] || cardStyles.default;
      const appliedImageStyles = imageStyles[imageStyleVariant] || imageStyles.feature;
    
  return (
    <div
      className={`relative ${appliedCardStyles}`}
      style={{
        width: "300px", // Adjust width here
        height: "200px", // Adjust height here
      }}
    >
      {/* Image */}
      <img
        src={image}
        alt={title}
        className={appliedImageStyles}
      />

      {/* Card Content */}
      <div className={imageStyleVariant === 'default' ? 'mt-20 text-center' : 'text-center'}>
        {/* Title */}
        <h3 className="text-lg font-bold ">{title}</h3>

        {/* Description */}
        <p className="text-gray-600 mt-2">{description}</p>

        {/* Optional Rating */}
        {rating && (
          <div className="flex items-center justify-center mt-4">
            {[...Array(5)].map((_, index) => (
              <span
                key={index}
                className={`h-5 w-5 ${
                  index < rating ? "text-yellow-400" : "text-gray-300"
                }`}
              >
                ★
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Card