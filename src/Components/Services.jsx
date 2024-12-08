import React from "react";
import { FaEnvelope, FaRocket, FaChartLine, FaShieldAlt, FaUsers } from "react-icons/fa";

const Services = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-hoverColor via-orange-50 to-hoverColor py-12 px-6 md:px-20">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-16 mt-12">
          <h1 className="text-5xl font-extrabold bg-gradient-to-bl from-pink-400 via-orange-400 to-pink-600 bg-clip-text text-transparent">
            Our Services
          </h1>
          <p className="mt-4 text-lg text-gray-700">
            Discover how ZenInbox revolutionizes your email experience with innovative solutions.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <div className="flex items-center mb-4">
              <FaEnvelope className="text-orange-500 text-4xl mr-4" />
              <h2 className="text-2xl font-semibold text-orange-800">Custom Email Templates</h2>
            </div>
            <p className="text-gray-600">
              Create tailored email templates for follow-ups, marketing, and professional use with ease.
            </p>
          </div>

          <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <div className="flex items-center mb-4">
              <FaRocket className="text-pink-500 text-4xl mr-4" />
              <h2 className="text-2xl font-semibold text-orange-800">AI-Powered Drafts</h2>
            </div>
            <p className="text-gray-600">
              Leverage AI to generate impactful email drafts that save time and ensure professionalism.
            </p>
          </div>

          <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <div className="flex items-center mb-4">
              <FaChartLine className="text-orange-500 text-4xl mr-4" />
              <h2 className="text-2xl font-semibold text-orange-800">Email Tracking</h2>
            </div>
            <p className="text-gray-600">
              Monitor the status of your emails, track opens and clicks, and gain valuable insights.
            </p>
          </div>

          <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <div className="flex items-center mb-4">
              <FaShieldAlt className="text-pink-500 text-4xl mr-4" />
              <h2 className="text-2xl font-semibold text-orange-800">Secure Communication</h2>
            </div>
            <p className="text-gray-600">
              Enjoy advanced encryption that ensures your emails are private and secure.
            </p>
          </div>

          <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <div className="flex items-center mb-4">
              <FaUsers className="text-orange-500 text-4xl mr-4" />
              <h2 className="text-2xl font-semibold text-orange-800">Bulk Campaigns</h2>
            </div>
            <p className="text-gray-600">
              Effortlessly manage and execute bulk email campaigns for consistent communication.
            </p>
          </div>

          
          <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <div className="flex items-center mb-4">
              <FaEnvelope className="text-orange-500 text-4xl mr-4" />
              <h2 className="text-2xl font-semibold text-orange-800">Dynamic Content Suggestion</h2>
            </div>
            <p className="text-gray-600">
            Receive intelligent content recommendations tailored to your audience, enhancing the effectiveness of your messages.
            </p>
          </div>

        </div>

        

        <footer className="text-center mt-16">
          <h3 className="text-lg text-gray-700 font-medium">
            Ready to transform your email experience? <span className="text-pink-500 font-bold">Join ZenInbox today!</span>
          </h3>
        </footer>
      </div>
    </div>
  );
};

export default Services;
