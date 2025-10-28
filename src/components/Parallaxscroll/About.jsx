import React from "react";

const GuaranteeSection = () => {
  return (
    <div className="bg-blue-50 py-12">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-black">Our Guarantee to You</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-blue-800">30-Day Launch Promise</h3>
            <p className="mt-2 text-gray-700">
              Your website goes live within 30 days of project start, or you receive $500 off your final invoice.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-blue-800">100% Satisfaction Guarantee</h3>
            <p className="mt-2 text-gray-700">
              We’ll work with you until you’re completely happy with your website, or we’ll refund your investment.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-blue-800">90-Day Support Included</h3>
            <p className="mt-2 text-gray-700">
              Full technical support, training, and minor updates included for 90 days after launch.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-blue-800">Performance Promise</h3>
            <p className="mt-2 text-gray-700">
              Your website will load in under 3 seconds and work perfectly on all devices, guaranteed.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold text-blue-800">
            Stop Waiting & Start Building!
          </h3>
          <p className="mt-4 text-lg text-gray-700">
            Your competitors are gaining ground every day your website isn’t working for your business.
          </p>

          <div className="mt-8 space-y-4">
            <div className="text-xl font-medium text-gray-800">
              <ol className="list-decimal list-inside space-y-2">
                <li>Schedule Your Free Strategy Session (45 minutes, no sales pitch)</li>
                <li>Receive Your Custom Proposal (detailed timeline and fixed pricing)</li>
                <li>Watch Your Business Grow (with a website that actually converts)</li>
              </ol>
            </div>
            <div className="mt-6 space-x-4">
              <button className="px-8 py-3 bg-blue-800 text-white rounded-md hover:bg-blue-600">
                Book Strategy Session
              </button>
              <button className="px-8 py-3 bg-blue-200 text-blue-800 rounded-md hover:bg-blue-100">
                Schedule your free consultation
              </button>
            </div>
          </div>

          <p className="mt-6 text-gray-600">
            Questions? Call us directly: <span className="font-semibold">+44 77344 20336</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default GuaranteeSection;
