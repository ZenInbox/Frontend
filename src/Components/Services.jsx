import React from "react";
import { FaUserCheck, FaClipboardCheck, FaGavel, FaHandshake, FaShieldAlt } from "react-icons/fa";

const Services = () => {
  return (
    <div className="min-h-screen bg-hoverColor py-12 px-6 md:px-20">
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <header className="text-center mb-10">
          <h1 className="text-4xl font-extrabold bg-gradient-to-bl from-pink-400 via-orange-400 to-pink-600 bg-clip-text text-transparent mt-12 p-3">
            Terms and Conditions
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Please read these terms and conditions carefully before using ZenInbox. By understanding and agreeing to these, you ensure a safe and enjoyable experience on our platform.
          </p>
        </header>

        {/* Section 1: Acceptance of Terms */}
        <section className="mb-16">
          <div className="flex items-center mb-4">
            <FaUserCheck className="text-orange-500 text-3xl mr-4" />
            <h2 className="text-2xl font-semibold text-orange-800">Acceptance of Terms</h2>
          </div>
          <p className="text-gray-600 leading-relaxed">
            By accessing or using ZenInbox, you automatically agree to abide by these terms and conditions. This agreement is a legally binding contract, and if you do not agree, you must refrain from using the platform and its services. Your continued use is considered acceptance of all policies outlined here.
          </p>
        </section>

        {/* Section 2: User Responsibilities */}
        <section className="mb-16">
          <div className="flex items-center mb-4">
            <FaClipboardCheck className="text-orange-500 text-3xl mr-4" />
            <h2 className="text-2xl font-semibold text-orange-800">User Responsibilities</h2>
          </div>
          <ul className="list-disc pl-8 text-gray-600">
            <li>
              Provide accurate, up-to-date, and complete information when signing up or engaging with any feature of the platform. This helps us maintain a trustworthy and safe environment.
            </li>
            <li>
              Maintain the confidentiality of your account details and login credentials. You are responsible for all activities that occur under your account and must notify us immediately of unauthorized use.
            </li>
            <li>
              Use ZenInbox solely for lawful purposes, avoiding any actions that could harm the platform, its users, or violate legal or regulatory standards.
            </li>
          </ul>
        </section>

        {/* Section 3: Prohibited Activities */}
        <section className="mb-16">
          <div className="flex items-center mb-4">
            <FaGavel className="text-orange-500 text-3xl mr-4" />
            <h2 className="text-2xl font-semibold text-orange-800">Prohibited Activities</h2>
          </div>
          <p className="text-gray-600 leading-relaxed">
            To protect the integrity of ZenInbox, users are strictly prohibited from engaging in activities including, but not limited to:
          </p>
          <ul className="list-disc pl-8 text-gray-600">
            <li>
              Any actions that compromise the security, reliability, or performance of the platform, such as hacking attempts or disrupting service.
            </li>
            <li>
              Unauthorized access, tampering with, or exploitation of our systems or any data belonging to ZenInbox or its users.
            </li>
            <li>
              Sending malicious software, engaging in spamming practices, or conducting phishing campaigns to deceive other users or harm the platform.
            </li>
          </ul>
        </section>

        {/* Section 4: Limitation of Liability */}
        <section className="mb-16">
          <div className="flex items-center mb-4">
            <FaShieldAlt className="text-orange-500 text-3xl mr-4" />
            <h2 className="text-2xl font-semibold text-orange-800">Limitation of Liability</h2>
          </div>
          <p className="text-gray-600 leading-relaxed">
            ZenInbox and its affiliates shall not be liable for any direct, indirect, incidental, or consequential damages arising from your use of the platform. This includes, but is not limited to, data loss, service interruptions, or unauthorized access resulting from user negligence or misuse.
          </p>
        </section>

        {/* Section 5: Termination */}
        <section className="mb-16">
          <div className="flex items-center mb-4">
            <FaHandshake className="text-orange-500 text-3xl mr-4" />
            <h2 className="text-2xl font-semibold text-orange-800">Termination</h2>
          </div>
          <p className="text-gray-600 leading-relaxed">
            We reserve the right to terminate or suspend your access to ZenInbox at our discretion, especially in cases of terms violation or harmful behavior. This ensures the safety and integrity of our platform for all users.
          </p>
        </section>

        {/* Section 6: Amendments */}
        <section className="mb-16">
          <div className="flex items-center mb-4">
            <FaClipboardCheck className="text-orange-500 text-3xl mr-4" />
            <h2 className="text-2xl font-semibold text-orange-800">Amendments</h2>
          </div>
          <p className="text-gray-600 leading-relaxed">
            ZenInbox may update these terms periodically to reflect changes in our services or policies. Users are encouraged to review the terms regularly. Continued use of the platform implies agreement to the updated terms.
          </p>
        </section>

        {/* Section 7: Contact Us */}
        <footer className="text-center mt-12">
          <h3 className="text-lg text-gray-700 font-medium">
            For any queries or assistance, feel free to reach out:
          </h3>
          <p className="text-gray-700 mt-4">
            <span className="font-bold text-orange-500">Email:</span> codefusers@gmail.com
          </p>
          <p className="text-gray-700">
            <span className="font-bold text-orange-500">Phone:</span> +91 6289895479
          </p>
          <p className="text-gray-700">
            <span className="font-bold text-orange-500">Address:</span> 44/1/3, Becharam Chatterjee Road, Behala, Kolkata - 700034
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Services;
