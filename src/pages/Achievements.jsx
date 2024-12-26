import React from 'react';

const Achievements = () => {
  // Achievements data
  const achievements = [
    { value: "234K+", description: "Satisfied bookings signify trust and satisfaction" },
    { value: "500K", description: "Honoring outstanding community contributions" },
    { value: "40%", description: "Increasing visibility and reservations" },
    { value: "12M", description: "A growing community of happy users" },
  ];

  return (
    <div className="px-6 py-10 sm:px-12 lg:px-20 bg-gray-50">
      {/* Top Section with Heading and Subheading */}
      <div className="mb-8 text-left">
        <h2 className="text-3xl font-bold mb-2">Our Achievements</h2>
        <p className="text-lg text-gray-600">Learn more about how we've grown</p>
      </div>

      {/* Main Layout */}
      <div className="flex flex-wrap lg:flex-nowrap gap-6">
        {/* Left: Achievements Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full lg:w-1/2">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 text-center"
            >
              <h3 className="text-4xl font-bold text-black mb-2">
                {achievement.value}
              </h3>
              <p className="text-gray-600 text-sm">{achievement.description}</p>
            </div>
          ))}
        </div>

        {/* Right: Image and Description */}
        <div className="flex flex-col items-center lg:items-start w-full lg:w-1/2">
  <img
    src="/images/image.png" // Replace with your image path
    alt="Achievements"
    className="rounded-lg shadow-lg mb-4 w-full lg:w-[80%] h-auto"
  />
  <div className="w-full lg:w-[80%]">
    <p className="text-gray-600 text-sm lg:text-xs text-center lg:text-left mb-4">
      Our journey has been fueled by a commitment to excellence and a focus
      on building meaningful connections with our community.
    </p>
    <a
      href="#"
      className="text-black text-sm underline block text-right"
    >
      Learn More
    </a>
  </div>
</div>

      </div>
    </div>
  );
};

export default Achievements;
