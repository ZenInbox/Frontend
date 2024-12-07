import React from 'react'

export default function Team() {
  return (
    <section id="team" className="overflow-hidden pt-28 md:pt-32 xl:pt-36 bg-gradient-to-b from-hoverColor to-hoverColor" data-aos="fade-up" data-aos-duration="1500" data-aos-offset="2">
      <div className="max-w-[1222px] mx-auto px-4 sm:px-8 xl:px-0">
        <div className="text-center">
          <span className="hero-subtitle-gradient relative mb-4 font-medium text-sm inline-flex items-center gap-2 py-2 px-6 rounded-full">
            <img src="/icon-title.svg" alt="icon" />
            <span className="hero-subtitle-text">
              Simplify your email campaigns
            </span>
          </span>
          <h2 className="text-black mb-4.5 text-2xl font-bold tracking-wide sm:text-4xl xl:text-heading-2">
            About Us
          </h2>
          <p className="max-w-[714px] mx-auto mb-5 font-medium text-gray-400/90 mt-2.5">
            Effortlessly create, send, and track your emails with our AI-powered platform.
          </p>
        </div>
        <div className="flex flex-wrap justify-center">
          <div className="w-full sm:w-1/2 lg:w-1/3">
            <div className="relative rounded-lg group overflow-hidden text-center py-8 sm:py-10 xl:py-15 px-4 lg:px-8 xl:px-13">
              <span className="group-hover:opacity-100 opacity-0 team-bg absolute w-full h-full left-0 top-0 -z-1"></span>
              <h4 className="text-xl font-bold tracking-wide mb-4">
                For Businesses
              </h4>
              <ul className="font-medium text-gray-300/80 text-left">
                <li>Create targeted email campaigns with ease.</li>
                <li>Track engagement with real-time analytics.</li>
              </ul>
              <ul className="font-medium text-gray-300/80 text-left">
                <li>Personalize your emails to suit every recipient.</li>
                <li>Optimize results with AI-driven suggestions.</li>
              </ul>
            </div>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/3">
            <div className="group rounded-lg relative overflow-hidden text-center py-8 sm:py-10 xl:py-15 px-4 lg:px-8 xl:px-13">
              <span className="group-hover:opacity-100 opacity-0 team-bg absolute w-full h-full left-0 top-0 -z-1"></span>
              <h4 className="text-xl font-bold tracking-wide mb-4 text-center">
                For Individuals
              </h4>
              <ul className="font-medium text-gray-300/80 text-left">
                <li>Personalize your emails to suit every recipient.</li>
                <li>Optimize results with AI-driven suggestions.</li>
              </ul>
              <ul className="font-medium text-gray-300/80 text-left">
                <li>Personalize your emails to suit every recipient.</li>
                <li>Optimize results with AI-driven suggestions.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
