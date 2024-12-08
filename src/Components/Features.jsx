import React from 'react';

export default function Features() {
  return (
    
    <section
      id="features"
      className="overflow-hidden pt-28 md:pt-32 xl:pt-36 bg-hoverColor" data-aos="fade-up" data-aos-duration="1500" data-aos-offset="50"
    >
      <div className="max-w-[1222px] mx-auto px-4 sm:px-8 xl:px-0">
        <div className="text-center">
        <span className="hero-subtitle-gradient relative mb-4 font-medium text-sm inline-flex items-center gap-2 py-2 px-6 rounded-full border border-pink-500">
          <img src="logos/icon-title.svg" alt="icon" class="w-4 h-4" />
            <span className="hero-subtitle-text text-hoverbuttonColor">
              Some of our Main Features
            </span>
          </span>
          <h2 className="bg-gradient-to-bl from-pink-400 via-orange-400 to-pink-600 bg-clip-text text-transparent mb-4.5 text-2xl font-bold tracking-wide sm:text-4xl xl:text-heading-2 pb-10">
            Key Features of Our Tool
          </h2>
          <p className="max-w-[714px] mx-auto mb-5 font-medium text-pink-600/90 mt-2.5">
            Our email-sending tool offers innovative features to simplify, enhance, and secure your email communications, making your workflow more productive and seamless.
          </p>
        </div>
        <div className="relative pt-10">
          <div className="features-row-border bg-gradient-to-l from-hoverColor via-pink-400 to-hoverColor rotate-90 w-1/2 h-[1px] absolute top-1/2 left-1/2 -translate-y-1/2 lg:-translate-x-1/3 lg:left-1/4 hidden lg:block"></div>
          <div className="features-row-border bg-gradient-to-r from-hoverColor via-pink-400 to-hoverColor rotate-90 w-1/2 h-[1px] absolute top-1/2 right-1/2 -translate-y-1/2 lg:right-[8.3%] hidden lg:block"></div>

          <div className="flex flex-wrap justify-center">
            <div className="w-full sm:w-1/2 lg:w-1/3 hover:bg-gradient-to-tl from-orange-300 via-orange-100 cursor-pointer">
              <div className="relative rounded-lg lg:rounded-none group overflow-hidden text-center py-8 sm:py-10 xl:py-15 px-4 lg:px-8 xl:px-13">
                <span className="group-hover:opacity-100 opacity-0 features-bg absolute w-full h-full left-0 top-0 -z-1"></span>
                <span className="icon-border relative max-w-[80px] w-full h-20 rounded-full inline-flex items-center justify-center mb-8 mx-auto">
                  <img src="k1.png" alt="icon" />
                </span>
                <h4 className="font-semibold text-lg text-hoverButtonColor mb-4">
                  AI Generated Mails
                </h4>
                <p className="font-medium text-pink-600">
                    Effortlessly generate professional email drafts with AI, saving time while ensuring accuracy and impact.
                </p>
              </div>
            </div>

            <div className="w-full sm:w-1/2 lg:w-1/3 hover:bg-gradient-to-t from-orange-300 via-orange-100 cursor-pointer">
              <div className="group rounded-lg lg:rounded-none relative overflow-hidden text-center py-8 sm:py-10 xl:py-15 px-4 lg:px-8 xl:px-13">
                <span className="group-hover:opacity-100 opacity-0 features-bg absolute w-full h-full left-0 top-0 -z-1"></span>
                <span className="icon-border relative max-w-[80px] w-full h-20 rounded-full inline-flex items-center justify-center mb-8 mx-auto">
                  <img src="k2.png" alt="icon" />
                </span>
                <h4 className="font-semibold text-lg text-hoverButtonColor mb-4">
                    Real-Time Email Tracking
                </h4>
                <p className="font-medium text-pink-600">
                    Monitor the status of your emails, track opens and clicks, and gain actionable insights for better engagement.
                </p>
              </div>
            </div>

            <div className="w-full sm:w-1/2 lg:w-1/3 hover:bg-gradient-to-tr from-orange-300 via-orange-100 to-hoverColor cursor-pointer">
              <div className="group rounded-lg lg:rounded-none relative overflow-hidden text-center py-8 sm:py-10 xl:py-15 px-4 lg:px-8 xl:px-13">
                <span className="group-hover:opacity-100 opacity-0 features-bg absolute w-full h-full left-0 top-0 -z-1"></span>
                <span className="icon-border relative max-w-[80px] w-full h-20 rounded-full inline-flex items-center justify-center mb-8 mx-auto">
                  <img src="k3.png" alt="icon" />
                </span>
                <h4 className="font-semibold text-lg text-hoverButtonColor mb-4">
                    Streamline Email Creation
                </h4>
                <p className="font-medium text-pink-600">
                    Easily create and manage bulk email campaigns, ensuring consistent communication with your audience.
                </p>
              </div>
            </div>
          </div>
          <div className="features-row-border w-full h-[1px] bg-gradient-to-l from-hoverColor via-pink-400 to-hoverColor"></div>

          <div className="flex flex-wrap justify-center">
            <div className="w-full sm:w-1/2 lg:w-1/3 hover:bg-gradient-to-bl from-orange-300 via-orange-100 cursor-pointer">
              <div className="group rounded-lg lg:rounded-none relative overflow-hidden text-center py-8 sm:py-10 xl:py-15 px-4 lg:px-8 xl:px-13">
                <span className="group-hover:opacity-100 opacity-0 features-bg absolute w-full h-full left-0 top-0 -z-1 rotate-180"></span>
                <span className="icon-border relative max-w-[80px] w-full h-20 rounded-full inline-flex items-center justify-center mb-8 mx-auto">
                  <img src="k4.png" alt="icon" />
                </span>
                <h4 className="font-semibold text-lg text-hoverButtonColor mb-4">
                    Personalised Video Snaps
                </h4>
                <p className="font-medium text-pink-600">
                    Add personalized snapshots and visuals to your emails, creating a more engaging and tailored experience for your recipients.
                </p>
              </div>
            </div>

            <div className="w-full sm:w-1/2 lg:w-1/3 hover:bg-gradient-to-b from-orange-300 via-orange-100 cursor-pointer">
              <div className="group rounded-lg lg:rounded-none relative overflow-hidden text-center py-8 sm:py-10 xl:py-15 px-4 lg:px-8 xl:px-13">
                <span className="group-hover:opacity-100 opacity-0 features-bg absolute w-full h-full left-0 top-0 -z-1 rotate-180"></span>
                <span className="icon-border relative max-w-[80px] w-full h-20 rounded-full inline-flex items-center justify-center mb-8 mx-auto">
                  <img src="k5.png" alt="icon" />
                </span>
                <h4 className="font-semibold text-lg text-hoverButtonColor mb-4">
                  End to End Encrypted
                </h4>
                <p className="font-medium text-pink-600">
                    Secure your emails with advanced encryption, ensuring privacy and building trust with your recipients.
                </p>
              </div>
            </div>

            <div className="w-full sm:w-1/2 lg:w-1/3 hover:bg-gradient-to-br from-orange-300 via-orange-100 cursor-pointer">
              <div className="group rounded-lg lg:rounded-none relative overflow-hidden text-center py-8 sm:py-10 xl:py-15 px-4 lg:px-8 xl:px-13">
                <span className="group-hover:opacity-100 opacity-0 features-bg absolute w-full h-full left-0 top-0 -z-1 rotate-180"></span>
                <span className="icon-border relative max-w-[80px] w-full h-20 rounded-full inline-flex items-center justify-center mb-8 mx-auto">
                  <img src="k6.png" alt="icon" />
                </span>
                <h4 className="font-semibold text-lg text-hoverButtonColor mb-4">
                    Dynamic Content Suggestions
                </h4>
                <p className="font-medium text-pink-600">
                    Receive intelligent content recommendations tailored to your audience, enhancing the effectiveness of your messages.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}
