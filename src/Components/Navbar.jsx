import { useAuth } from "../Context/AuthContext";
import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const { loginWithGoogle, logout, isLoggedIn, currentUser } = useAuth();
  const navigate = useNavigate();
  const checkboxRef = useRef(null);

  const handleLogin = async () => {
    await loginWithGoogle();
    navigate("/dashboard");
  };

  const LogMeOut = async () => {
    await logout();
    navigate("/");
  };

  const handleLinkClick = (e, sectionId) => {
    if (checkboxRef.current) {
      checkboxRef.current.checked = false;
    }
    
    // Prevent default link behavior and scroll to the section
    e.preventDefault();
    
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="text-gray-50 fixed top-0 left-0 right-0 w-full z-50 bg-hoverColor/20 backdrop-filter backdrop-blur-lg mx-auto flex flex-col overflow-hidden px-2 py-1 lg:flex-row lg:items-center rounded-full my-4 max-w-7xl">
      <Link to="/" className="flex items-center whitespace-nowrap text-xl bg-transparent" onClick={(e) => handleLinkClick(e, "home")}>
        <p className='bg-gradient-to-r from-primary via-primary to-hoverButtonColor ml-8 bg-clip-text text-transparent font-bold text-lg'>ZenInBox</p>
      </Link>
      <input type="checkbox" className="peer hidden" id="navbar-open" ref={checkboxRef} />
      <label className="absolute top-5 right-5 cursor-pointer lg:hidden" htmlFor="navbar-open">
        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" stroke="grey">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </label>
      <nav aria-label="Header Navigation" className="p-2 peer-checked:pt-8 peer-checked:max-h-60 flex max-h-0 w-full flex-col items-center overflow-hidden transition-all lg:ml-24 lg:max-h-full lg:flex-row bg-transparent">
        <ul className="flex w-full flex-col items-center space-y-2 lg:flex-row lg:justify-center lg:space-y-0 lg:space-x-4 bg-transparent mt-0 lg:mt-0">
          <li className="lg:mr-4 bg-transparent">
            <Link className="rounded-xl px-4 py-2 text-hoverButtonColor transition hover:bg-hoverColor focus:bg-hoverColor focus:ring-1 focus:ring-primary  font-bold text-sm" to="/" onClick={(e) => handleLinkClick(e, "home")}>Home</Link>
          </li>
          <li className="lg:mr-4 bg-transparent">
            <Link className="rounded-xl px-4 py-2 text-hoverButtonColor transition hover:bg-hoverColor focus:bg-hoverColor focus:ring-1 focus:ring-primary  font-bold text-sm" to="/" onClick={(e) => handleLinkClick(e, "about")}>About</Link>
          </li>
          <li className="lg:mr-4 bg-transparent">
            <Link className="rounded-xl px-4 py-2 text-hoverButtonColor transition hover:bg-hoverColor focus:bg-hoverColor focus:ring-1 focus:ring-primary  font-bold text-sm" to="/" onClick={(e) => handleLinkClick(e, "contact")}>Contact</Link>
          </li>
          <li className="lg:mr-4 bg-transparent">
            <Link className="rounded-xl px-4 py-2 text-hoverButtonColor transition hover:bg-hoverColor focus:bg-hoverColor focus:ring-1 focus:ring-primary  font-bold text-sm" to="/" onClick={(e) => handleLinkClick(e, "features")}>Features</Link>
          </li>
        </ul>
        {isLoggedIn === true ? (
          <div className="flex flex-row">
            <Link
              to={"/dashboard"}
              className="text-center rounded-full p-2 m-1 text-primary text-xs md:text-sm font-semibold transition hover:bg-hoverColor shadow-md hover:shadow-lg focus:outline-none focus:ring-offset-2 w-20 lg:w-28"
            >
              Dashboard
            </Link>
            <button onClick={() => { LogMeOut(); }} className="text-center rounded-full p-2 m-1 text-white text-xs md:text-sm font-semibold transition bg-primary hover:bg-hoverButtonColor shadow-md hover:shadow-lg focus:outline-none focus:ring-offset-2 w-20 lg:w-28">
              Logout
            </button>
          </div>
        ) : (
          <>
            <hr className="mt-4 w-full lg:hidden" />
            <button onClick={() => { handleLogin(); }} className="text-center rounded-full p-2 m-1 text-primary text-xs md:text-sm font-semibold transition hover:bg-hoverColor shadow-md hover:shadow-lg focus:outline-none focus:ring-offset-2 w-20 lg:w-28">
              Join Now
            </button>
          </>
        )}
      </nav>
    </header>
  );
}
