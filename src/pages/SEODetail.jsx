import React from 'react';
import { useNavigate } from 'react-router-dom';

const SEODetail = () => {
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
        <h1 className="text-5xl font-bold text-teal-800">Free SEO Audit</h1>
        <p className="text-lg text-gray-600 mt-4">
          Maximize your website's visibility with a detailed, free SEO audit!
        </p>
      </div>

      <div className="max-w-4xl bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-teal-800 mb-4">What You'll Get:</h2>
        <ul className="list-disc list-inside text-lg text-gray-700 mb-8">
          <li>Comprehensive analysis of your website's SEO performance</li>
          <li>Identification of critical SEO issues</li>
          <li>Recommendations for on-page optimization</li>
          <li>Competitor analysis and keyword opportunities</li>
          <li>Actionable insights to improve ranking and traffic</li>
        </ul>

        <p className="text-lg text-gray-700 mb-8">
          Our SEO audit will help you understand where your website stands in terms of search engine performance and what steps you can take to improve it. It's free for a limited time!
        </p>

        <a href="/contact" className="bg-teal-500 text-white py-3 px-6 rounded hover:bg-teal-600">
          Get Your Free Audit
        </a>
      </div>
    </div>
  );
};

export default SEODetail;
