import React from 'react';
import { useAuth } from "../Context/AuthContext";
import { Link } from 'react-router-dom';
import { FaPen, FaClipboardList, FaChartPie,FaBook, FaQuestionCircle ,FaPaperPlane, FaFileAlt, FaCalendarAlt, FaHistory} from 'react-icons/fa';

export default function Sidebar({ isSidebarOpen, setIsSidebarOpen }) {
  const { currentUser } = useAuth();
  console.log(currentUser);

  return (
    <>
<div
  className={`lg:w-[15%] lg:h-screen lg:fixed lg:top-[14%] lg:left-0 lg:z-10 lg:flex lg:flex-col lg:gap-4 lg: 
    ${isSidebarOpen ? 'fixed top-[14%] left-0 w-90 h-[calc(100vh)] lg:hidden z-20' : 'hidden lg:flex'} 
    bg-gradient-to-b from-white to-hoverColor text-orange-500`}
>
        <div className="bg-transparent text-orange-500 h-[calc(100%-20%)] rounded p-4">
          <Link
            to="/dashboard"
            className="p-4  rounded font-semibold flex items-center gap-3 transition hover:bg-hoverColor focus:bg-hoverColor text-hoverButtonColor">
            <FaChartPie className="text-xl" />
            <span>Dashboard</span> 
          </Link>
          <Link
            to="/dashboard/template/custom"
            className="p-4  rounded font-semibold flex items-center gap-3 transition hover:bg-hoverColor focus:bg-hoverColor text-hoverButtonColor">
            <FaPen className="text-xl" /> 
            <span>Compose Email</span> 
          </Link>
          <Link
            to="/dashboard/template/sent"
            className="p-4 rounded font-semibold flex items-center gap-3 transition hover:bg-hoverColor focus:bg-hoverColor text-hoverButtonColor">
            <FaPaperPlane className="text-xl" /> 
            <span>Sent</span> 
          </Link>

          <Link
            to="/dashboard/template/drafts"
            className="p-4 rounded font-semibold flex items-center gap-3 transition hover:bg-hoverColor focus:bg-hoverColor text-hoverButtonColor">
            <FaFileAlt className="text-xl" /> 
            <span>My Drafts</span> 
          </Link>

          <Link
            to="/dashboard/template/scheduled"
            className="p-4 rounded font-semibold flex items-center gap-3 transition hover:bg-hoverColor focus:bg-hoverColor text-hoverButtonColor">
            <FaCalendarAlt className="text-xl" /> 
            <span>Scheduled Emails</span> 
          </Link>

          <Link
            to="/dashboard/template/activity"
            className="p-4 rounded font-semibold flex items-center gap-3 transition hover:bg-hoverColor focus:bg-hoverColor text-hoverButtonColor">
            <FaHistory className="text-xl" /> 
            <span>My Activity</span> 
          </Link>

          <hr className="border-t border-primary my-8 mx-4" />
          <Link
            to="/dashboard"
            className="p-4  rounded font-semibold flex items-center gap-3 transition hover:bg-hoverColor focus:bg-hoverColor text-hoverButtonColor">
            <FaClipboardList className="text-xl" /> 
            <span>Change Log</span> 
          </Link>
          <Link
            to="/dashboard"
            className="p-4  rounded font-semibold flex items-center gap-3 transition hover:bg-hoverColor focus:bg-hoverColor text-hoverButtonColor">
            <FaBook className="text-xl" /> 
            <span>Documentation</span> 
          </Link>
          <Link
            to="/dashboard"
            className="p-4  rounded font-semibold flex items-center gap-3 transition hover:bg-hoverColor focus:bg-hoverColor text-hoverButtonColor">
            <FaQuestionCircle className="text-xl" /> 
            <span>Help</span> 
          </Link>
        </div>
      </div>
    </>
  );
}
