import React from "react";

const Deals = () => {
  return (
    <div className="flex flex-col items-center bg-gray-50 py-12">
      {/* Main Heading */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-teal-800">Exclusive Deals</h1>
        <p className="text-lg text-gray-600 mt-4">
          Check out our amazing deals and promotions. These offers are available
          for a limited time, so don't miss out!
        </p>
      </div>

      {/* Deals List */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl px-4">
        {/* Deal 1 */}
        <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-110">
          <h3 className="text-2xl font-semibold text-teal-800 mb-4">
            50% Off on Web Design
          </h3>
          <p className="text-gray-700 mb-6">
            Get a professional, modern website designed by our expert team at
            half the price. Perfect for startups and businesses looking for a
            quick upgrade.
          </p>
          <a
            href="/deals/web-design"
            className="bg-teal-500 text-white py-2 px-4 rounded hover:bg-teal-600"
          >
            Get This Deal
          </a>
        </div>

        {/* Deal 2 */}
        <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-110">
          <h3 className="text-2xl font-semibold text-teal-800 mb-4">
            Free SEO Audit
          </h3>
          <p className="text-gray-700 mb-6">
            Boost your website's search engine performance. For a limited time,
            get a comprehensive SEO audit at no cost. Don't miss this
            opportunity!
          </p>
          <a
            href="/deals/seo-audit"
            className="bg-teal-500 text-white py-2 px-4 rounded hover:bg-teal-600"
          >
            Get This Deal
          </a>
        </div>

        {/* Deal 3 */}
        <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-110">
          <h3 className="text-2xl font-semibold text-teal-800 mb-4">
            20% Off on Mobile App Development
          </h3>
          <p className="text-gray-700 mb-6">
            Create a powerful and user-friendly mobile app with a 20% discount
            on our development services. Elevate your business with cutting-edge
            apps!
          </p>
          <a
            href="/deals/mobile-apps"
            className="bg-teal-500 text-white py-2 px-4 rounded hover:bg-teal-600"
          >
            Get This Deal
          </a>
        </div>
      </div>

      {/* Limited Time Offer */}
      <div className="bg-teal-100 p-6 mt-12 rounded-lg shadow-md w-full max-w-6xl text-center">
        <h2 className="text-3xl font-bold text-teal-800 mb-4">
          Limited Time Offer: Additional 10% Off All Deals
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          For a limited time, enjoy an extra 10% off on top of all our deals!
          Use code <span className="font-semibold">SAVE10</span> at checkout.
        </p>
        <a
          href="/contact"
          className="bg-teal-500 text-white py-2 px-6 rounded hover:bg-teal-600"
        >
          Contact Us to Claim Your Discount
        </a>
      </div>
    </div>
  );
};

export default Deals;
