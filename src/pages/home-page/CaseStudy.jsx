import React from "react";
import caseImg1 from "../../assets/img/caseImg-2.avif";
import caseImg2 from "../../assets/img/caseImg-1.avif";
import { FiArrowRight } from "react-icons/fi";

const CaseStudy = () => {
    return (
        <div className="w-11/12 mx-auto">
            {/* Heading */}
            <h1 className="text-2xl md:text-3xl text-white font-semibold mb-6">
                Case Studies
            </h1>

            {/* Image Section */}
            <div className="flex flex-col md:flex-row items-center gap-6">
                {/* Left Image */}
                <div className="flex-1">
                    <img
                        src={caseImg2}
                        alt="Case Study 1"
                        className="w-full h-[300px] md:h-[500px] object-cover rounded-[30px] md:rounded-[100px] shadow-md"
                    />
                </div>
                {/* Right Image */}
                <div className="flex-1">
                    <img
                        src={caseImg1}
                        alt="Case Study 2"
                        className="w-full h-[300px] md:h-[500px] object-cover rounded-[30px] md:rounded-[100px] shadow-md"
                    />
                </div>
            </div>

            {/* Card Section */}
            <div className="flex flex-col md:flex-row justify-between items-center py-10 gap-6">
                {/* Left Card */}
                <div className="text-center md:text-left text-white">
                    <h2 className="text-md md:text-lg font-semibold">Huzl DeFi</h2>
                    <p className="text-sm text-gray-400">Mobile App</p>
                </div>

                {/* Middle Card */}
                <div className="flex flex-col lg:flex-row items-center gap-4">
                    {/* Arrow Button */}
                    <div className="border-2 border-gray-600 rounded-3xl px-6 py-4 text-white hover:text-black hover:bg-white transition duration-300 ease-in-out">
                        <FiArrowRight className="text-lg md:text-xl" />
                    </div>
                    {/* Card Content */}
                    <div className="text-center md:text-left text-white">
                        <h2 className="text-md md:text-lg font-semibold">Badejo Template</h2>
                        <p className="text-sm text-gray-400">Portfolio Template</p>
                    </div>
                </div>

                {/* Right Arrow Button */}
                <div className="border-2 border-gray-600 rounded-3xl px-6 py-4 text-white hover:text-black hover:bg-white transition duration-300 ease-in-out">
                    <FiArrowRight className="text-lg md:text-xl" />
                </div>
            </div>
        </div>
    );
};

export default CaseStudy;
