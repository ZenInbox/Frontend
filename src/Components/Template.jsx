import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Template() {

  const navigate = useNavigate();

  const goCustom = () => {
    navigate("/dashboard/template/custom");
  }

  return (
    <>
    <div className="h-screen bg-cover mt-12 mb-12 bg-center grid grid-cols-1 lg:grid-cols-2 gap-6 items-center justify-center text-center p-4 bg-hoverColor rounded-md">
      {/* Template 1 */}
      <Link to="/dashboard/template/prof" className="col-span-1 lg:col-span-1">
        <div className="bg-white shadow-lg hover:shadow-2xl hover:scale-105 rounded-xl overflow-hidden transition duration-300 h-[350px] w-[80%] mx-auto flex flex-col">
          <div className="relative w-full h-[60%]">
            <img
              src="https://via.placeholder.com/300x150"
              alt="Template 2"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-30"></div>
          </div>
          <div className="p-6 flex flex-col justify-between flex-grow">
            <h2 className="text-xl md:text-2xl font-semibold text-primary">
              Professional Email Template
            </h2>
            <p className="text-gray-500 text-sm md:text-sm">
              Write a professional email template to your boss or colleagues to make your communication clear and efficient.
            </p>
          </div>
        </div>
      </Link>

      {/* Template 2 */}
      <Link to="/dashboard/template/personal" className="col-span-1 lg:col-span-1">
        <div className="bg-white shadow-lg hover:shadow-2xl hover:scale-105 rounded-xl overflow-hidden  transition duration-300 h-[350px] w-[80%] mx-auto flex flex-col">
          <div className="relative w-full h-[60%]">
            <img
              src="https://via.placeholder.com/300x150"
              alt="Template 2"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-30"></div>
          </div>
          <div className="p-6 flex flex-col justify-between flex-grow">
            <h2 className="text-xl md:text-2xl font-semibold text-primary">
              Personal Email Template
            </h2>
            <p className="text-gray-500 text-sm md:text-sm">
              Write a professional email template to your boss or colleagues to make your communication clear and efficient.
            </p>
          </div>
        </div>
      </Link>

      {/* Template 3 */}
      <Link to="/dashboard/template/mark" className="col-span-1 lg:col-span-1">
        <div className="bg-white shadow-lg hover:shadow-2xl hover:scale-105 rounded-xl overflow-hidden  transition duration-300 h-[350px] w-[80%] mx-auto flex flex-col">
          <div className="relative w-full h-[60%]">
            <img
              src="https://via.placeholder.com/300x150"
              alt="Template 2"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-30"></div>
          </div>
          <div className="p-6 flex flex-col justify-between flex-grow">
            <h2 className="text-xl md:text-2xl font-semibold text-primary">
              Marketing Email Template
            </h2>
            <p className="text-gray-500 text-sm md:text-sm">
              Write a professional email template to your boss or colleagues to make your communication clear and efficient.
            </p>
          </div>
        </div>
      </Link>

      {/* Template 4 */}
      <Link to="/dashboard/template/followup" className="col-span-1 lg:col-span-1">
        <div className="bg-white shadow-xl hover:shadow-2xl hover:scale-105 rounded-xl overflow-hidden  transition duration-300 h-[350px] w-[80%] mx-auto flex flex-col">
          <div className="relative w-full h-[60%]">
            <img
              src="https://via.placeholder.com/300x150"
              alt="Template 2"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-30"></div>
          </div>
          <div className="p-6 flex flex-col justify-between flex-grow">
            <h2 className="text-xl md:text-2xl font-semibold text-primary">
              Follow-Up Email Template
            </h2>
            <p className="text-gray-500 text-sm md:text-sm">
              Write a professional email template to your boss or colleagues to make your communication clear and efficient.
            </p>
          </div>
        </div>
      </Link>
    </div>
    <div className="bg-cover p-4 mt-12 mb-12 bg-center flex items-center bg-hoverColor">
      <button className=" w-[90%] mx-auto py-4 mt-4 bg-orange-600 text-white font-semibold rounded-xl shadow hover:bg-orange-700 focus:outline-none" onClick={goCustom}>Create your custom email </button>
    </div>
    </>
  );
}
