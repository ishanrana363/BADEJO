import React from "react";
import { FiArrowRight } from "react-icons/fi"; // Importing arrow icon
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#060608] text-white ">
      <div className="w-11/12 mx-auto py-4  " >
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-700 pb-6">
          {/* Social Links */}
          <div className="flex space-x-6 text-gray-400 text-sm font-medium">
            <NavLink NavLink to={""} className="hover:text-white text-lg   ">
              Behance
            </NavLink>
            <NavLink NavLink to={""} className="hover:text-white text-lg  ">
              Linkedin
            </NavLink>
            <NavLink NavLink to={""} className="hover:text-white text-lg ">
              Email
            </NavLink>
            <NavLink NavLink to={""} className="hover:text-white text-lg ">
              X
            </NavLink>
            <NavLink NavLink to={""} className="hover:text-white text-lg ">
              Dribbble
            </NavLink>
          </div>

          {/* Contact Form */}
          <div className="flex items-center mt-4 md:mt-0">
            <input
              type="text"
              placeholder="Get in Touch"
              className="bg-gray-800 text-white px-4 py-2 rounded-full focus:outline-none w-64 md:w-80"
            />
            <button className="ml-2 bg-gray-700 hover:bg-gray-600 p-2 rounded-full">
              <FiArrowRight className="text-white" />
            </button>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-4 text-gray-500 text-sm">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-0.5 bg-white"></div>
            <span className="text-lg font-semibold">BADEJO</span>
          </div>

          {/* Copyright */}
          <div className="mt-4 md:mt-0 text-center md:text-right">
            <span>© Peace Badejo 2024</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
