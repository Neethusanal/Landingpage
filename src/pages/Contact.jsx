import React from 'react';

const Contact = () => {
  return (
    <div className="relative mt-20 mb-10 px-4 sm:px-6 lg:px-8 min-h-screen">
      {/* Full Image Background */}
      <div className="absolute inset-0">
        <img
          src="/images/form.png" // Replace with your image path
          alt="Background"
          className="w-full h-full object-cover rounded-lg"
        />
        <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div> {/* Optional overlay for better text readability */}
      </div>

      {/* Content Section */}
      <div className="relative flex flex-col lg:flex-row items-center justify-between p-6 lg:p-12">
        {/* Heading and Description */}
        <div className="lg:w-1/2 text-white lg:text-left text-center mb-6 lg:mb-0">
          <h2 className="text-3xl font-bold mb-4">Stay Connected with us for assistance and updates</h2>
          <p className="text-sm">
            We're here to assist you, whether you have questions, need support, or want to share your feedback.
            Simply fill out the form below and our team will get back to you promptly. Let's stay connected and
            make your experience with Znorm Homes even better!
          </p>
        </div>

        {/* Form Section */}
        <div className="lg:w-1/2 bg-white bg-opacity-80 p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold mb-4 text-center">Keep in Touch</h3>
          <p className="text-sm mb-6">Fill out the form, and we will get back to you soon. Let's stay connected!</p>

          {/* Form */}
          <form className="space-y-4">
            {/* First Name and Last Name */}
            <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
              <input
                type="text"
                placeholder="First Name"
                className="w-full p-3 border border-gray-300 rounded-lg"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-full p-3 border  border-gray-300 rounded-lg"
              />
            </div>

            {/* Phone Number */}
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full p-3 border border-gray-300 rounded-lg"
            />

            {/* Email */}
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 border border-gray-300 rounded-lg"
            />

            {/* How Did You Hear About Us */}
            <div className="mb-8">
              <input
                type="text"
                placeholder="How Did You Hear About Us?"
                className="w-full p-3 border border-gray-300 rounded-md h-20"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full p-3 bg-lime-600 text-white font-semibold rounded-lg mt-4 hover:bg-gray-800 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
