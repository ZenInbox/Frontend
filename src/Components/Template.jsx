import React from 'react';
import { Link } from 'react-router-dom';

export default function Template() {
  return (
    <div className="h-screen bg-cover mt-12 mb-12 bg-center grid grid-cols-1 lg:grid-cols-2 gap-6 items-center justify-center text-center px-4 bg-gradient-to-r from-gray-200 via-white to-secondary">

      {/* Template 1 */}
      <Link to="/dashboard/template/prof" className="col-span-1 lg:col-span-1">
        <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:bg-hoverColor transition duration-300 h-[350px] w-[80%] mx-auto">
          <img
            src="https://via.placeholder.com/300x150"
            alt="Template 2"
            className="w-full h-50 object-cover"
          />
          <div className="p-6">
            <h2 className="text-xl font-semibold text-primary">Template 1</h2>
            <p className="text-gray-500">Professional Email Template</p>
          </div>
        </div>
      </Link>




      {/* Template 2 */}
      <Link to="/dashboard/template/personal" className="col-span-1 lg:col-span-1">
        <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:bg-hoverColor transition duration-300 h-[350px] w-[80%] mx-auto">
          <img
            src="https://via.placeholder.com/300x150"
            alt="Template 2"
            className="w-full h-50 object-cover"
          />
          <div className="p-6">
            <h2 className="text-xl font-semibold text-primary">Template 2</h2>
            <p className="text-gray-500">Personal Email Template</p>
          </div>
        </div>
      </Link>

      {/* Template 3 */}
      <Link to="/dashboard/template/mark" className="col-span-1 lg:col-span-1">
        <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:bg-hoverColor transition duration-300 h-[350px] w-[80%] mx-auto">
          <img
            src="https://via.placeholder.com/300x150"
            alt="Template 3"
            className="w-full h-50 object-cover"
          />
          <div className="p-6">
            <h2 className="text-xl font-semibold text-primary">Template 3</h2>
            <p className="text-gray-500">Marketing Email Template</p>
          </div>
        </div>
      </Link>

      {/* Template 4 */}
      <Link to="/dashboard/template/followup" className="col-span-1 lg:col-span-1">
        <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:bg-hoverColor transition duration-300 h-[350px] w-[80%] mx-auto">
          <img
            src="https://via.placeholder.com/300x150"
            alt="Template 4"
            className="w-full h-50 object-cover"
          />
          <div className="p-6">
            <h2 className="text-xl font-semibold text-primary">Template 4</h2>
            <p className="text-gray-500">Follow Up Email Template</p>
          </div>
        </div>
      </Link>
    </div>
  );
}
