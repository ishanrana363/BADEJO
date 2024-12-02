import React from "react";
import { FiArrowUpRight } from "react-icons/fi"; // Import the arrow icon from react-icons

const Collaborate = () => {
    return (
        <div className=" ">
            <div className=" flex flex-col lg:flex-row gap-14 ">
                <div>
                    <h1 className="text-7xl font-bold text-white mb-4">Let’s <br /> Collaborate</h1>
                    <p className="text-gray-400 text-2xl font-bold mb-6">Book a call with me –</p>
                </div>
                <div className="relative w-52 h-52 ">
                    <div className="w-full h-full rounded-full bg-gradient-to-t from-gray-800 to-gray-600 flex items-center justify-center">
                        <FiArrowUpRight className="text-white text-2xl" /> {/* Use the React icon */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Collaborate;
