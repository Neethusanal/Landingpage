import React from 'react'
import Card from '../Components/Card'
import featuresData from "../Data/featuresData.json";


const Features = () => {
   
  return (
    <div>
    <h1 className="text-center text-4xl font-bold my-10">Experience the pinnacle of Premium Service</h1>
  
    {/* Grid Layout for Features */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
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
  
  
  )
}

export default Features