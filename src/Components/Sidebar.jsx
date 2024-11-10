import React from 'react';
import { useAuth } from "../Context/AuthContext";
import { Link } from 'react-router-dom';
import { FaPen, FaClipboardList, FaChartPie,FaHistory,FaBook, FaQuestionCircle } from 'react-icons/fa';

export default function Sidebar({ isSidebarOpen, setIsSidebarOpen }) {
  const { currentUser } = useAuth();
  console.log(currentUser);

  return (
    <>
<div
  className={`lg:w-[15%] lg:h-screen lg:fixed lg:top-[14%] lg:left-0 lg:z-10 lg:flex lg:flex-col lg:gap-4 lg: 
    ${isSidebarOpen ? 'fixed top-[14%] left-0 w-90 h-[calc(100vh)] lg:hidden z-20' : 'hidden lg:flex'} 
    bg-transparent text-blue-900`}
>
        <div className="bg-transparent text-blue-900 h-[calc(100%-20%)] rounded p-4">
          <Link
            to="/dashboard"
            className="p-4  rounded font-semibold flex items-center gap-3 transition hover:bg-hoverColor focus:bg-hoverColor text-hoverButtonColor">
            <FaChartPie className="text-xl" /> {/* Icon for Compose Email */}
            <span>Dashboard</span> {/* Text for Compose Email */}
          </Link>
          <Link
            to="/dashboard/template"
            className="p-4  rounded font-semibold flex items-center gap-3 transition hover:bg-hoverColor focus:bg-hoverColor text-hoverButtonColor">
            <FaPen className="text-xl" /> {/* Icon for Compose Email */}
            <span>Compose Email</span> {/* Text for Compose Email */}
          </Link>
          <hr className="border-t border-primary my-8 mx-4" />
          <Link
            to="/dashboard"
            className="p-4  rounded font-semibold flex items-center gap-3 transition hover:bg-hoverColor focus:bg-hoverColor text-hoverButtonColor">
            <FaClipboardList className="text-xl" /> {/* Icon for Compose Email */}
            <span>Change Log</span> {/* Text for Compose Email */}
          </Link>
          <Link
            to="/dashboard"
            className="p-4  rounded font-semibold flex items-center gap-3 transition hover:bg-hoverColor focus:bg-hoverColor text-hoverButtonColor">
            <FaBook className="text-xl" /> {/* Icon for Compose Email */}
            <span>Documentation</span> {/* Text for Compose Email */}
          </Link>
          <Link
            to="/dashboard"
            className="p-4  rounded font-semibold flex items-center gap-3 transition hover:bg-hoverColor focus:bg-hoverColor text-hoverButtonColor">
            <FaQuestionCircle className="text-xl" /> {/* Icon for Compose Email */}
            <span>Help</span> {/* Text for Compose Email */}
          </Link>
        </div>
      </div>
    </>
  );
}
