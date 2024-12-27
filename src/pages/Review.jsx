import React from 'react';
import Slider from 'react-slick';
import Card from '../Components/Card';
import reviews from '../Data/reviewData.json';

const Review = () => {
  // Slider settings
  const settings = {
    dots: true, // Show navigation dots
    infinite: true, // Loop through slides infinitely
    speed: 500, // Transition speed
    slidesToShow: 3, // Number of slides visible at a time
    slidesToScroll: 1, // Number of slides scrolled at a time
    responsive: [
      {
        breakpoint: 1024, // For medium devices
        settings: {
          slidesToShow: 2, // Show 2 cards
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600, // For small devices
        settings: {
          slidesToShow: 1, // Show 1 card
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="px-6 py-10 sm:px-12 lg:px-20">
      <h1 className="text-3xl font-bold text-center mb-4">Testimonials</h1>
      <h2 className="text-center text-2xl font-bold mb-10">
        What Our Customers Say
      </h2>
      {/* Slider Component */}
      <Slider {...settings}>
        {reviews.map((review) => (
          <div key={review.id}>
            <Card
              name={review.name}
              place={review.place}
              description={review.description}
              image={review.image}
              rating={review.rating}
              isReview={true}
              styleVariant="review"
              imageStyleVariant="review"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Review;