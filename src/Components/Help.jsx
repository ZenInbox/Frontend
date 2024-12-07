import React, { useState } from "react";
import { FaQuestionCircle, FaChevronDown, FaChevronUp } from "react-icons/fa"; 

const Help = () => {
  const [openSection, setOpenSection] = useState(null); 

  const toggleSection = (index) => {
    if (openSection === index) {
      setOpenSection(null); 
    } else {
      setOpenSection(index); 
    }
  };

  return (
    <div className="px-4 pt-10 pb-16 sm:px-6 md:px-8 bg-gradient-to-r from-orange-100 via-yellow-100 to-orange-200 h-screen ">
      <h1 className="text-3xl mb-1 text-left font-bold leading-none md:text-4xl lg:text-5xl pb-2 bg-gradient-to-bl from-pink-300 via-orange-300 to-orange-500 bg-clip-text text-transparent">
        {" "}
        Help & FAQs{" "}
      </h1>
      <p className="mb-3 mt-2 text-lg font-normal text-orange-300 lg:text-xl text-left">
        Here are some frequently asked questions and helpful information to get you started.
      </p>
      <hr className="h-px my-8 mt-1 bg-orange-700 border-0" />

      <div className="space-y-4">
        <div className="accordion-item">
          <div
            className="flex items-center justify-between bg-white p-4 rounded-xl shadow-md cursor-pointer hover:bg-pink-50 transition"
            onClick={() => toggleSection(0)}
          >
            <div className="flex items-center space-x-2">
              <FaQuestionCircle className="h-5 w-5 text-orange-600" />
              <h3 className="font-semibold text-lg text-gray-900">
                What is ZenInbox and how does it work?
              </h3>
            </div>
            <FaChevronDown
              className={`h-5 w-5 text-orange-600 transform transition-transform ${
                openSection === 0 ? "rotate-180" : ""
              }`}
            />
          </div>
          {openSection === 0 && (
            <div className="p-4 mt-3 bg-white rounded-b-xl">
              <p className="text-gray-600">
                ZenInbox is an innovative AI-driven platform designed to assist students and teachers with various
                academic tasks. It includes features like smart grading, email management, and personalized
                content generation.
              </p>
            </div>
          )}
        </div>

        <div className="accordion-item">
          <div
            className="flex items-center justify-between bg-white p-4 rounded-xl shadow-md cursor-pointer hover:bg-pink-50 transition"
            onClick={() => toggleSection(1)}
          >
            <div className="flex items-center space-x-2">
              <FaQuestionCircle className="h-5 w-5 text-orange-600" />
              <h3 className="font-semibold text-lg text-gray-900">
                How can I create an account on ZenInbox?
              </h3>
            </div>
            <FaChevronDown
              className={`h-5 w-5 text-orange-600 transform transition-transform ${
                openSection === 1 ? "rotate-180" : ""
              }`}
            />
          </div>
          {openSection === 1 && (
            <div className="p-4 mt-3 bg-white rounded-b-xl">
              <p className="text-gray-600">
                To create an account, simply click on the "Sign Up" button on the homepage, enter your details, and
                follow the instructions to verify your email address. After that, you can log in and start using the
                platform.
              </p>
            </div>
          )}
        </div>

        <div className="accordion-item">
          <div
            className="flex items-center justify-between bg-white p-4 rounded-xl shadow-md cursor-pointer hover:bg-pink-50 transition"
            onClick={() => toggleSection(2)}
          >
            <div className="flex items-center space-x-2">
              <FaQuestionCircle className="h-5 w-5 text-orange-600" />
              <h3 className="font-semibold text-lg text-gray-900">
                Can I track the status of my emails?
              </h3>
            </div>
            <FaChevronDown
              className={`h-5 w-5 text-orange-600 transform transition-transform ${
                openSection === 2 ? "rotate-180" : ""
              }`}
            />
          </div>
          {openSection === 2 && (
            <div className="p-4 mt-3 bg-white rounded-b-xl">
              <p className="text-gray-600">
                Yes! You can track the status of your emails in real-time, such as whether the email has been
                opened by the recipient. Simply use our tracking feature in ZenInbox.
              </p>
            </div>
          )}
        </div>

        <div className="accordion-item">
          <div
            className="flex items-center justify-between bg-white p-4 rounded-xl shadow-md cursor-pointer hover:bg-pink-50 transition"
            onClick={() => toggleSection(3)}
          >
            <div className="flex items-center space-x-2">
              <FaQuestionCircle className="h-5 w-5 text-orange-600" />
              <h3 className="font-semibold text-lg text-gray-900">
                How do I send drafts in ZenInbox?
              </h3>
            </div>
            <FaChevronDown
              className={`h-5 w-5 text-orange-600 transform transition-transform ${
                openSection === 3 ? "rotate-180" : ""
              }`}
            />
          </div>
          {openSection === 3 && (
            <div className="p-4 mt-3 bg-white rounded-b-xl">
              <p className="text-gray-600">
                You can save your email as a draft by selecting "Save as Draft" while composing your message. To send
                the draft later, simply go to your drafts folder, select the draft, and click "Send".
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Help;
