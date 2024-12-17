import React from "react";
import { Link } from "react-router-dom"; 
const Footer = () => {
  return (
    <>
      <footer className="px-4 divide-y bg-gradient-to-t from-hoverColor to-white text-gray-100 h-[100px] relative">
        <div className="py-6 text-sm text-center text-primary absolute bottom-0 left-1/2 -translate-x-1/2">
          <p>© All rights Reserved. Made by team ZenInBox</p>
          <div className="flex justify-center gap-4 mt-2">
            <Link to="/privacy" className="hover:underline">
              Privacy Policy
            </Link>
            <Link to="/terms&services" className="hover:underline">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
