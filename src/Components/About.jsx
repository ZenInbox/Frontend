import React from 'react';
import BackgroundDots from './Utils/BackgroundDots';

export default function About() {
  return (
    
    <section id="about" className="overflow-hidden pt-28 md:pt-32 xl:pt-36 bg-hoverColor" data-aos="fade-up" data-aos-duration="1500" data-aos-offset="2">
      
      <div className="max-w-[1222px] mx-auto px-4 sm:px-8 xl:px-0">
        
        <div className="text-center">
          <span className="hero-subtitle-gradient relative mb-4 font-medium text-sm inline-flex items-center gap-2 py-2 px-6 rounded-full border border-pink-500">
          <img src="logos/icon-title.svg" alt="icon" class="w-4 h-4" />
            <span className="hero-subtitle-text text-hoverbuttonColor">
              Simplify your email campaigns
            </span>
          </span>
          <h2 className="bg-gradient-to-bl from-pink-400 via-orange-400 to-pink-600 bg-clip-text text-transparent mb-4.5 text-2xl font-bold tracking-wide sm:text-4xl xl:text-heading-2">
            About Us
          </h2>
          <p className="max-w-[714px] mx-auto mb-5 font-medium text-pink-600/90 mt-5">
            Effortlessly create, send, and track your emails with our AI-powered platform.
          </p>
        </div>
       
        <div className="flex flex-wrap justify-center">
          <div className="w-full sm:w-1/2 lg:w-1/3">
            <div className="relative rounded-lg group overflow-hidden text-center py-8 sm:py-10 xl:py-15 px-4 lg:px-8 xl:px-13">
              <span className="group-hover:opacity-100 opacity-0 features-bg absolute w-full h-full left-0 top-0 -z-1"></span>
              <h4 className="text-xl text-hoverButtonColor font-bold tracking-wide mb-4">
                For Businesses
              </h4>
              <ul className="font-medium text-pink-500/70 text-left list-disc">
                <li className="pb-2">Design tailored email campaigns to reach your target audience effectively.</li>
                <li className="pb-2">Gain actionable insights with real-time engagement analytics.</li>
                <li className="pb-2">Enhance your outreach with AI-driven recommendations.</li>
                <li className="pb-2">Streamline your marketing workflow with powerful automation tools.</li>
              </ul>
            </div>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/3">
            <div className="group rounded-lg relative overflow-hidden text-center py-8 sm:py-10 xl:py-15 px-4 lg:px-8 xl:px-13">
              <span className="group-hover:opacity-100 opacity-0 features-bg absolute w-full h-full left-0 top-0 -z-1"></span>
              <h4 className="text-xl text-hoverButtonColor font-bold tracking-wide mb-4 text-center">
                For Individuals
              </h4>
              <ul className="font-medium text-pink-500/70 text-left list-disc">
                  <li className="pb-2">Craft personalized emails that leave a lasting impression.</li>
                  <li className="pb-2">Simplify your communication with user-friendly tools.</li>
                  <li className="pb-2">Leverage AI suggestions to make your messages more impactful.</li>
                  <li className="pb-2">Send snaps to add a personal touch and enhance engagement.</li>
              </ul>
            </div>
          </div>
        </div>


      </div>
      
    </section>

  )
}
