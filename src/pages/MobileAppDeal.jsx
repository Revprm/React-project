import React from 'react';
import { useNavigate } from 'react-router-dom';

const MobileAppDeal = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center bg-gray-50 py-12">
      <button 
        onClick={() => navigate(-1)} 
        className="mb-4 text-teal-500 hover:underline"
      >
        &larr; Back
      </button>
      
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-teal-800">20% Off on Mobile App Development</h1>
        <p className="text-lg text-gray-600 mt-4">
          Develop a powerful, user-friendly mobile app with a 20% discount!
        </p>
      </div>

      <div className="max-w-4xl bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-teal-800 mb-4">What We Offer:</h2>
        <ul className="list-disc list-inside text-lg text-gray-700 mb-8">
          <li>Custom mobile app development for iOS and Android</li>
          <li>User-friendly interface and seamless navigation</li>
          <li>High performance and security</li>
          <li>App store optimization and launch support</li>
          <li>Post-launch maintenance and updates</li>
        </ul>

        <p className="text-lg text-gray-700 mb-8">
          Our mobile app development team will work closely with you to bring your ideas to life. This deal is available for a limited time, so act fast!
        </p>

        <a href="/contact" className="bg-teal-500 text-white py-3 px-6 rounded hover:bg-teal-600">
          Claim This Deal
        </a>
      </div>
    </div>
  );
};

export default MobileAppDeal;
