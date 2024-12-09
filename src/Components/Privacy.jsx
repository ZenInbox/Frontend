import React from "react";
import { FaUserShield, FaLock, FaEnvelope, FaServer, FaShieldAlt } from "react-icons/fa";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-hoverColor py-12 px-6 md:px-20">
      <div className="max-w-5xl mx-auto">
        <header className="text-center mb-10">
          <h1 className="text-4xl font-extrabold bg-gradient-to-bl from-pink-400 via-orange-400 to-pink-600 bg-clip-text text-transparent mt-12 p-3">
            Privacy Policy
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Your privacy is our top priority. Learn how ZenInbox protects and uses your data.
          </p>
        </header>

        {/* Section 1: Information We Collect */}
        <section className="mb-16">
          <div className="flex items-center mb-4">
            <FaUserShield className="text-orange-500 text-3xl mr-4" />
            <h2 className="text-2xl font-semibold text-orange-800">Information We Collect</h2>
          </div>
          <p className="text-gray-600 leading-relaxed">
            We collect the following types of information:
          </p>
          <ul className="list-disc pl-8 text-gray-600">
            <li>
              <strong>Personal Information:</strong> Includes your name, email address, and any other details you provide during sign-up or interaction with our services.
            </li>
            <li>
              <strong>Usage Data:</strong> Such as browser type, device information, IP address, and timestamps of your interactions with our app.
            </li>
            <li>
              <strong>Content Data:</strong> Includes any information or materials you upload, such as email drafts and campaign details.
            </li>
          </ul>
        </section>

        {/* Section 2: How We Use Your Information */}
        <section className="mb-16">
          <div className="flex items-center mb-4">
            <FaLock className="text-pink-500 text-3xl mr-4" />
            <h2 className="text-2xl font-semibold text-orange-800">How We Use Your Information</h2>
          </div>
          <p className="text-gray-600 leading-relaxed">
            The data collected is used to:
          </p>
          <ul className="list-disc pl-8 text-gray-600">
            <li>Provide, improve, and personalize our services, including generating AI-powered email drafts.</li>
            <li>Monitor and analyze user behavior to enhance functionality and user experience.</li>
            <li>Maintain communication with you, including updates, promotional offers, and important service announcements.</li>
            <li>Ensure compliance with legal obligations and resolve disputes.</li>
          </ul>
        </section>

        {/* Section 3: Data Sharing */}
        <section className="mb-16">
          <div className="flex items-center mb-4">
            <FaEnvelope className="text-orange-500 text-3xl mr-4" />
            <h2 className="text-2xl font-semibold text-orange-800">Data Sharing</h2>
          </div>
          <p className="text-gray-600 leading-relaxed">
            We do not sell, trade, or rent your personal data. However, we may share your data with trusted partners under the following circumstances:
          </p>
          <ul className="list-disc pl-8 text-gray-600">
            <li>
              <strong>With Your Consent:</strong> We will always obtain your explicit permission before sharing your data.
            </li>
            <li>
              <strong>Legal Compliance:</strong> When required by law, to enforce our policies, or to protect our or others' rights, safety, or property.
            </li>
            <li>
              <strong>Service Providers:</strong> Data may be shared with third-party service providers for functionality enhancements, such as cloud hosting or analytics, under strict confidentiality agreements.
            </li>
          </ul>
        </section>

        {/* Section 4: Data Security */}
        <section className="mb-16">
          <div className="flex items-center mb-4">
            <FaServer className="text-pink-500 text-3xl mr-4" />
            <h2 className="text-2xl font-semibold text-orange-800">Data Security</h2>
          </div>
          <p className="text-gray-600 leading-relaxed">
            We employ robust security measures to safeguard your data, including:
          </p>
          <ul className="list-disc pl-8 text-gray-600">
            <li>Advanced encryption protocols to protect data in transit and at rest.</li>
            <li>Regular system updates and vulnerability assessments.</li>
            <li>Restricted access to data based on the principle of least privilege.</li>
          </ul>
        </section>

        {/* Section 5: Your Rights */}
        <section className="mb-16">
          <div className="flex items-center mb-4">
            <FaShieldAlt className="text-orange-500 text-3xl mr-4" />
            <h2 className="text-2xl font-semibold text-orange-800">Your Rights</h2>
          </div>
          <p className="text-gray-600 leading-relaxed">
            As a user, you have the following rights:
          </p>
          <ul className="list-disc pl-8 text-gray-600">
            <li>Access your data: You can request access to the personal data we hold about you.</li>
            <li>Correct your data: You may ask us to correct inaccuracies in your personal information.</li>
            <li>Delete your data: You have the right to request the deletion of your data under specific circumstances.</li>
            <li>Withdraw consent: You can withdraw your consent to data processing at any time by contacting us.</li>
          </ul>
        </section>

        {/* Section 6: Contact Us */}
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
