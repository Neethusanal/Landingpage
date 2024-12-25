import React from 'react';

const Card = ({ title, description, image, styleVariant, imageStyleVariant, rating, isReview, place ,name}) => {
  const cardStyles = {
    default: "bg-white shadow-md rounded-lg p-6",
    dark: "bg-gray-800 text-white shadow-md rounded-lg p-6",
    outline: "border border-gray-300 rounded-lg p-6",
    review: "bg-white shadow-xl rounded-lg p-6 w-[350px]", // Adjust width for review
  };

  const imageStyles = {
    default: "w-16 h-16 rounded-full object-cover border-2 border-gray-300",
    review: "w-20 h-20 object-cover rounded-full border-4 border-gray-300", // Adjusted size for review
    feature: "w-12 h-12 object-contain mb-4",
  };

  const appliedCardStyles = isReview ? cardStyles.review : cardStyles[styleVariant] || cardStyles.default;
  const appliedImageStyles = imageStyles[imageStyleVariant] || imageStyles.feature;

  return (
    <div className={appliedCardStyles}>
      {/* Image and Name/Place Container */}
      <div className="flex items-start">
        {/* Image */}
        <img
          src={image}
          alt={title}
          className={appliedImageStyles}
        />
        {/* Name and Place */}
        <div className="ml-4">
          <h3 className="text-lg font-semibold">{name}</h3>
          <p className="text-gray-600 text-sm">{place}</p>
        </div>
      </div>
      {/* Description */}
      <div className="mt-3">
      <h3 className="text-lg font-semibold text-center">{title}</h3>
        <p className="text-gray-600 text-center">{description}</p>
        {/* Optional Rating */}
        {rating && (
          <div className="flex items-center mt-4">
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
  );
};

export default Card;
