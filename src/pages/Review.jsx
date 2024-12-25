import React from 'react'
import Card from '../Components/Card'
import reviews  from "../Data/reviewData.json";

const Review = ({name,place}) => {
  return (

<div className="px-6 py-10 sm:px-12 lg:px-20">
<h1 className="text-3xl font-bold text-center mb-4">Testimonials</h1>
      <h2 className="text-center text-2xl font-bold mb-10">What Our Customers Say</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"> {/* Increased gap */}
        {reviews.map((review) => (
          <Card
            key={review.id}
            name={review.name}
            place={review.place}
            description={review.description}
            image={review.image}
            rating={review.rating}
            isReview={true}
            styleVariant="review"
            imageStyleVariant="review"
          />
        ))}
      </div>
    </div>
    )}
export default Review