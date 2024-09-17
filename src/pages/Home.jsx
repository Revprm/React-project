import React from 'react';

const Home = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-blue-100">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-6 text-gray-800">Welcome to My Landing Page</h1>
        <p className="text-lg mb-8">This is the perfect place to showcase your product or service.</p>
        <a href="/about" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
          Learn More
        </a>
      </div>
    </div>
  );
};

export default Home;
