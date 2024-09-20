import React from "react";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-between h-screen bg-blue-50">
      {/* Main Section */}
      <div className="flex-grow flex items-center justify-center flex-col px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-gray-900">
            Innovating the Future
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-700">
            Delivering cutting-edge solutions to help your business thrive in
            the digital age.
          </p>

          {/* Call to Action Buttons */}
          <div className="mb-8">
            <a
              href="/deals"
              className="bg-blue-500 text-white py-3 px-6 rounded-md mr-4 hover:bg-blue-600"
            >
              Our Deals
            </a>
            <a
              href="/contact"
              className="bg-gray-500 text-white py-3 px-6 rounded-md hover:bg-gray-600"
            >
              Contact Us
            </a>
          </div>
        </div>

        {/* Deals Section */}
        <div className="w-full max-w-4xl bg-white p-8 rounded-lg shadow-lg text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-6">
            Exclusive Deals
          </h2>
          <div className="flex flex-col md:flex-row justify-center space-y-6 md:space-y-0 md:space-x-8">
            {/* Deal 1 */}
            <div className="bg-blue-100 p-6 rounded-lg shadow-md w-full md:w-64">
              <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
                50% Off on Web Design
              </h3>
              <p className="text-gray-700 mb-4">
                Get a stunning website designed by our expert team at half the
                price!
              </p>
              <a
                href="/deals/web-design"
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
              >
                Learn More
              </a>
            </div>

            {/* Deal 2 */}
            <div className="bg-blue-100 p-6 rounded-lg shadow-md w-full md:w-64">
              <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
                Free SEO Audit
              </h3>
              <p className="text-gray-700 mb-4">
                Get a detailed SEO audit of your website at no cost, for a limited
                time!
              </p>
              <a
                href="/deals/seo-audit"
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
              >
                Learn More
              </a>
            </div>

            {/* Deal 3 */}
            <div className="bg-blue-100 p-6 rounded-lg shadow-md w-full md:w-64">
              <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
                20% Off on Mobile Apps
              </h3>
              <p className="text-gray-700 mb-4">
                Develop a feature-rich mobile app with a 20% discount on our
                services.
              </p>
              <a
                href="/deals/mobile-apps"
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
