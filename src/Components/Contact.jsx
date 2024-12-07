import React from 'react';

export default function Contact() {
  return (
    <section
      id="contact"
      className="overflow-hidden pt-28 md:pt-32 xl:pt-36 bg-gradient-to-b from-hoverColor to-hoverColor"
      data-aos="fade-up"
      data-aos-duration="1500"
      data-aos-offset="2"
    >
      <div className="max-w-[1222px] mx-auto px-4 sm:px-8 xl:px-0">
        <div className="text-center">
          <span className="hero-subtitle-gradient relative mb-4 font-medium text-sm inline-flex items-center gap-2 py-2 px-6 rounded-full">
            <img src="/icon-title.svg" alt="icon" />
            <span className="hero-subtitle-text">Simplify your email campaigns</span>
          </span>
          <h2 className="text-black mb-4.5 text-2xl font-bold tracking-wide sm:text-4xl xl:text-heading-2">
            Contact Us
          </h2>
          <p className="max-w-[714px] mx-auto mb-5 font-medium text-gray-400/90 mt-2.5">
            Effortlessly create, send, and track your emails with our AI-powered platform.
          </p>
        </div>
        <div className="mt-10">
          <form
            action="https://getform.io/f/blllwjob"
            method="POST"
            className="bg-gradient-to-b from-hoverColor to-hoverColor shadow-lg rounded-lg p-8 sm:p-12"
          >
            <div className="mb-6">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Your Email"
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Subject"
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="text-center rounded-full p-2 m-1 text-white text-xs md:text-sm font-semibold transition bg-primary hover:bg-hoverButtonColor shadow-md hover:shadow-lg focus:outline-none focus:ring-offset-2 w-20 lg:w-28"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
