import React from 'react';
import Card from '../Components/Card';
import featuresData from '../Data/featuresData.json';

const Features = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      {/* Responsive Title */}
      <h1 className="text-center text-2xl sm:text-4xl font-bold my-10">
        Experience the Pinnacle of Premium Service
      </h1>

      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {featuresData.map((feature, index) => (
          <Card
            key={index}
            title={feature.title}
            description={feature.description}
            image={feature.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Features;
