import React from 'react';
import { useAuth } from "../Context/AuthContext";
import { Link } from 'react-router-dom';

export default function Sidebar({ isSidebarOpen, setIsSidebarOpen }) {
  const { currentUser } = useAuth();
  console.log(currentUser)

  return (
    <>
      <div
        className={`lg:w-[25%] lg:h-screen lg:fixed lg:top-[14%] lg:left-0 lg:z-10 lg:flex lg:flex-col lg:gap-4 lg:border-r lg:border-gray-200 bg-white text-blue-900 border border-gray-300
          ${isSidebarOpen ? 'fixed top-[14%] left-0 w-90 h-[calc(100vh)] lg:hidden z-20' : 'hidden lg:flex'}`}
      >
        <div className="bg-blue-900 text-white h-[22%] rounded flex flex-col justify-around gap-2 p-4">
          <Link to="/" className="flex items-center gap-3 cursor-pointer hover:bg-blue-700 p-2 rounded font-bold">
            Home
          </Link>
          <div className="items-center gap-3 cursor-pointer hover:bg-blue-700 p-2 rounded">
            <p className="font-bold">
              Welcome <span className="text-sm text-white">{currentUser?.name}</span>
            </p>
          </div>
        </div>

        <div className="bg-white text-blue-900 h-[calc(100%-20%)] rounded p-4">
          <Link
            to="/dashboard/compose"
            className="p-4 bg-blue-50 m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 border-t border-gray-200 transition hover:bg-blue-500 focus:bg-blue-500 text-blue-900"
          >
            Compose Email
          </Link>
          <Link
            to="/dashboard"
            className="p-4 bg-blue-50 m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 border-t border-gray-200 transition hover:bg-blue-500 focus:bg-blue-500 text-blue-900"
          >
            Option2
          </Link>
          <Link
            to="/dashboard"
            className="p-4 bg-blue-50 m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 border-t border-gray-200 transition hover:bg-blue-500 focus:bg-blue-500 text-blue-900"
          >
            Option3
          </Link>
        </div>
      </div>
    </>
  );
}