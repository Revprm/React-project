import React from 'react';
import { useNavigate } from 'react-router-dom';

const WebDesignDeal = () => {
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
        <h1 className="text-5xl font-bold text-teal-800">50% Off on Web Design Services</h1>
        <p className="text-lg text-gray-600 mt-4">
          Get a stunning, professional website designed by our expert team for half the price!
        </p>
      </div>

      <div className="max-w-4xl bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-teal-800 mb-4">What's Included:</h2>
        <ul className="list-disc list-inside text-lg text-gray-700 mb-8">
          <li>Custom website design tailored to your brand</li>
          <li>Responsive design optimized for mobile and desktop</li>
          <li>SEO-friendly structure for better search engine rankings</li>
          <li>Integration with social media and other platforms</li>
          <li>One year of free support and maintenance</li>
        </ul>

        <p className="text-lg text-gray-700 mb-8">
          Whether you're a startup or an established business, we help you create a professional online presence. This offer is valid for a limited time, so take advantage of it while it lasts!
        </p>

        <a href="/contact" className="bg-teal-500 text-white py-3 px-6 rounded hover:bg-teal-600">
          Claim This Deal
        </a>
      </div>
    </div>
  );
};

export default WebDesignDeal;
