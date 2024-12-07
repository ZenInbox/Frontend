import React from "react";

const ChangelogPage = () => {
  return (
    <>
      <div className="px-4 pt-10 pb-16 sm:px-6 md:px-8">
        <h1 className="text-3xl mb-1 text-left font-bold leading-none md:text-4xl lg:text-5xl pb-2 bg-gradient-to-bl from-pink-400 via-orange-400 to-pink-600 bg-clip-text text-transparent">
          {" "}
          Changelog{" "}
        </h1>
        <p className="mb-3 mt-2 text-lg font-normal text-pink-300 lg:text-xl text-left">
          Stay updated with what we're working on!
        </p>
        <hr className="h-px my-8 mt-1 bg-orange-700 border-0" />

        <section className="text-gray-600">
          <div className="container mx-auto py-12">
            <div className="flex flex-col items-start rounded-xl sm:items-center">
              <ol className="relative w-full border-l border-gray-200 dark:border-gray-700">
                <li className="mb-10 ml-6">
                  <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-pink-300 ring-8 ring-pink-200 dark:bg-pink-700 dark:ring-orange-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      className="h-3 w-3 fill-current text-pink-600 dark:text-pink-300"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </span>
                  <h3 className="mb-1 flex items-center text-lg font-semibold  text-orange-700">
                    ZenInbox v1.8.0
                    <span className="font-semibold mr-2 ml-5 jff mb-1 rounded bg-orange-100 px-2.5 py-0.5 text-sm text-orange-800 dark:bg-orange-200 dark:text-violet-800">
                      Latest
                    </span>
                  </h3>
                  <time className="mb-2 block text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                    Released on 8 December, 2024
                  </time>
                  <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                    Fixed major bugs and integrated a reliable AI evaluation model into the platform. Our AI
                    system automatically generates email templates and sends them, while tracking whether emails are
                    opened.
                  </p>
                </li>
              </ol>

              <ol className="relative w-full border-l border-gray-200 dark:border-gray-700">
                <li className="mb-10 ml-6">
                  <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-pink-300 ring-8 ring-pink-200 dark:bg-pink-700 dark:ring-orange-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      className="h-3 w-3 fill-current text-pink-600 dark:text-pink-300"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </span>
                  <h3 className="mb-1 flex items-center text-lg font-semibold  text-orange-700">
                  ZenInbox  v1.7.0
                  </h3>
                  <time className="mb-2 block text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                    Released on 30 November, 2024
                  </time>
                  <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                    Minor fixes and bug resolutions. Improved performance of email drafts and templates, ensuring
                    better user experience while composing emails.
                  </p>
                </li>
              </ol>

              <ol className="relative w-full border-l border-gray-200 dark:border-gray-700">
                <li className="mb-10 ml-6">
                  <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-pink-300 ring-8 ring-pink-200 dark:bg-pink-700 dark:ring-orange-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      className="h-3 w-3 fill-current text-pink-600 dark:text-pink-300"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </span>
                  <h3 className="mb-1 flex items-center text-lg font-semibold text-orange-700 ">
                    ZenInbox  v1.6.0
                  </h3>
                  <time className="mb-2 block text-sm font-normal leading-none text-gray-400 ">
                    Released on 15 November, 2024
                  </time>
                  <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                    Packed with advanced features. Our AI system now integrates image processing for analyzing and
                    processing visual data, improving assessments and assignments.
                  </p>
                </li>
              </ol>
              
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ChangelogPage;
