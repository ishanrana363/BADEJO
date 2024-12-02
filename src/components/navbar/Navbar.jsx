import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi"; // React Icons for menu and close

const Navbar = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    return (
        <div className="bg-[#060608] text-white px-8 py-4">
            <div className="flex justify-between items-center">
                {/* Logo */}
                <div className="flex items-center space-x-2">
                    <div className="w-8 h-0.5 bg-white"></div>
                    <span className="text-lg font-semibold">BADEJO</span>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-6 font-semibold">
                    <p>
                        Brand & Product Designer <br />
                        based in Lagos Nigeria
                    </p>
                    <NavLink to={""} className="hover:underline hover:text-gray-400">
                        Case Studies
                    </NavLink>
                    <NavLink to={""} className="hover:underline hover:text-gray-400">
                        Experience
                    </NavLink>
                    <NavLink to={""} className="hover:underline hover:text-gray-400">
                        Hire me
                    </NavLink>
                </div>
                {/* Switch */}
                <div className="hidden md:flex relative w-10 h-5 bg-gray-700 rounded-full items-center justify-end p-1">
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                </div>

                {/* Mobile Menu Icon */}
                <div className="md:hidden">
                    <button onClick={toggleDrawer} className="text-2xl">
                        {isDrawerOpen ? <FiX /> : <FiMenu />}
                    </button>
                </div>
            </div>



            {/* Mobile Drawer */}
            {isDrawerOpen && (
                <div className="mt-4 bg-gray-800 text-white p-4 rounded-lg md:hidden">
                    <p className="mb-4">
                        Brand & Product Designer <br />
                        based in Lagos Nigeria
                    </p>
                    {/* Switch */}
                    <div className="hidden md:flex relative w-10 h-5 bg-gray-700 rounded-full items-center justify-end p-1">
                        <div className="w-4 h-4 bg-white rounded-full"></div>
                    </div>
                    <NavLink
                        to={""}
                        className="block mb-2 hover:underline hover:text-gray-400"
                        onClick={toggleDrawer}
                    >
                        Case Studies
                    </NavLink>
                    <NavLink
                        to={""}
                        className="block mb-2 hover:underline hover:text-gray-400"
                        onClick={toggleDrawer}
                    >
                        Experience
                    </NavLink>
                    <NavLink
                        to={""}
                        className="block hover:underline hover:text-gray-400"
                        onClick={toggleDrawer}
                    >
                        Hire me
                    </NavLink>

                </div>
            )}


        </div>
    );
};

export default Navbar;
