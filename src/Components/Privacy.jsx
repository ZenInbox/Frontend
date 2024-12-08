import React from "react";
import { FaUserShield, FaLock, FaEnvelope, FaServer, FaShieldAlt } from "react-icons/fa";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-hoverColor py-12 px-6 md:px-20">
      <div className="max-w-5xl mx-auto">
        <header className="text-center mb-10">
          <h1 className="text-4xl font-extrabold bg-gradient-to-bl from-pink-400 via-orange-400 to-pink-600 bg-clip-text text-transparent mt-12 p-3">Privacy Policy</h1>
          <p className="mt-4 text-lg text-gray-600">
            Your privacy is our top priority. Learn how ZenInbox protects and uses your data.
          </p>
        </header>

        <section className="mb-16">
          <div className="flex items-center mb-4">
            <FaUserShield className="text-orange-500 text-3xl mr-4" />
            <h2 className="text-2xl font-semibold text-orange-800">Information We Collect</h2>
          </div>
          <p className="text-gray-600 leading-relaxed">
            When you use ZenInbox, we may collect personal information such as your email address, usage data, and any content you provide for email drafts or campaigns.
          </p>
        </section>

        <section className="mb-16">
          <div className="flex items-center mb-4">
            <FaLock className="text-pink-500 text-3xl mr-4" />
            <h2 className="text-2xl font-semibold text-orange-800">How We Use Your Information</h2>
          </div>
          <p className="text-gray-600 leading-relaxed">
            We use your data to:
          </p>
          <ul className="list-disc pl-8 text-gray-600">
            <li>Generate AI-powered email drafts</li>
            <li>Track email engagement</li>
            <li>Improve user experience</li>
          </ul>
        </section>

        <section className="mb-16">
          <div className="flex items-center mb-4">
            <FaEnvelope className="text-orange-500 text-3xl mr-4" />
            <h2 className="text-2xl font-semibold text-orange-800">Data Sharing</h2>
          </div>
          <p className="text-gray-600 leading-relaxed">
            Your data is never shared with third parties without your explicit consent. All email communication is encrypted and secure.
          </p>
        </section>

        <section className="mb-16">
          <div className="flex items-center mb-4">
            <FaServer className="text-pink-500 text-3xl mr-4" />
            <h2 className="text-2xl font-semibold text-orange-800">Data Security</h2>
          </div>
          <p className="text-gray-600 leading-relaxed">
            We use advanced encryption technologies to ensure your data is protected. Regular audits and updates are conducted to maintain security.
          </p>
        </section>

        <section className="mb-16">
          <div className="flex items-center mb-4">
            <FaShieldAlt className="text-orange-500 text-3xl mr-4" />
            <h2 className="text-2xl font-semibold text-orange-800">Your Rights</h2>
          </div>
          <p className="text-gray-600 leading-relaxed">
            You have the right to:
          </p>
          <ul className="list-disc pl-8 text-gray-600">
            <li>Access your data</li>
            <li>Request corrections</li>
            <li>Track your data</li>
          </ul>
        </section>

        <footer className="text-center mt-12">
          <h3 className="text-lg text-gray-700 font-medium">
            Have questions? Contact our support team at
            <span className="text-pink-500 font-bold"> codefusers@gmail.com</span>
          </h3>
        </footer>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
