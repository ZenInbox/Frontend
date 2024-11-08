import React from 'react';
import { Link } from 'react-router-dom';

export default function Template() {
  return (
    <div className="h-screen bg-cover bg-center grid grid-cols-1 lg:grid-cols-2 gap-6 items-center justify-center text-center px-4 bg-gradient-to-r from-gray-200 via-white to-gray-50">
      {/* Template 1 */}
      <Link to="/dashboard/template/prof" className="col-span-1 lg:col-span-1">
        <div className="bg-white shadow-lg rounded-xl p-6 hover:bg-blue-100 transition duration-300">
          <h2 className="text-xl font-semibold text-blue-600">Template 1</h2>
          <p className="text-gray-500">Professional Email Template</p>
        </div>
      </Link>

      {/* Template 2 */}
      <Link to="/dashboard/template/prof" className="col-span-1 lg:col-span-1">
        <div className="bg-white shadow-lg rounded-xl p-6 hover:bg-blue-100 transition duration-300">
          <h2 className="text-xl font-semibold text-blue-600">Template 2</h2>
          <p className="text-gray-500">Personal Email Template</p>
        </div>
      </Link>

       {/* Template 3 */}
       <Link to="/dashboard/template/compose" className="col-span-1 lg:col-span-1">
        <div className="bg-white shadow-lg rounded-xl p-6 hover:bg-blue-100 transition duration-300">
          <h2 className="text-xl font-semibold text-blue-600">Template 1</h2>
          <p className="text-gray-500">Professional Email Template</p>
        </div>
      </Link>

      {/* Template 4 */}
      <Link to="/dashboard/template/compose" className="col-span-1 lg:col-span-1">
        <div className="bg-white shadow-lg rounded-xl p-6 hover:bg-blue-100 transition duration-300">
          <h2 className="text-xl font-semibold text-blue-600">Template 2</h2>
          <p className="text-gray-500">Personal Email Template</p>
        </div>
      </Link>

    </div>
  );
}
