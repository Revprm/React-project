import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const About = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleContactClick = () => {
    navigate("/contact"); // Navigate to the contact page
  };

  return (
    <div className="p-10 bg-gray-100 h-screen">
      <h1 className="text-4xl font-bold mb-4">About Us</h1>
      
      <p className="text-lg mb-6">
        We are a company dedicated to providing the best solutions for your
        business needs. Our team is committed to excellence and innovation, ensuring
        that we meet the evolving demands of the market.
      </p>

      {/* Mission and Vision Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
        <p className="text-lg">
          To empower businesses with cutting-edge solutions that drive growth and success.
        </p>
      </div>
      
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Our Vision</h2>
        <p className="text-lg">
          To be a global leader in business solutions by continuously innovating and 
          adapting to the ever-changing landscape.
        </p>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-8">
        <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
        <p className="mb-6">
          Interested in working with us? Contact us today and let's build something great together!
        </p>
        <button
          onClick={handleContactClick} // Attach the click handler
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
        >
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default About;