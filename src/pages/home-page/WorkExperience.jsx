import React from "react";

const WorkExperience = () => {
    return (
        <div className="py-10">
            <div className="space-y-6">
                {/* Section Heading */}
                <span className="flex flex-wrap gap-3 items-center">
                    <p className="text-white font-bold text-3xl">02</p>
                    <h2 className="text-3xl sm:text-4xl text-[#ABABB5] font-bold">
                        Work Experience
                    </h2>
                </span>

                {/* Date Range */}
                <p className="text-md sm:text-lg text-gray-400">SEP, 2023 - CURRENT</p>

                {/* Job Title and Company */}
                <h3 className="text-2xl sm:text-4xl lg:text-5xl text-[#ABABB5] font-semibold">
                    Product Designer, <span className="text-[#ABABB5]">Oendo Studio</span>
                </h3>

                {/* Job Description */}
                <div className="group flex flex-col sm:flex-row justify-between items-start space-y-4 sm:space-y-0">
                    {/* Left content */}
                    <div>
                        <p className="text-[#ABABB5] font-semibold pb-6 sm:max-w-2xl">
                            Reshaped the platform's user experience, making blockchain
                            technology more accessible. My visionary approach and financial
                            acumen converged seamlessly, creating intuitive interfaces for
                            newcomers and advanced features for seasoned traders. By
                            introducing intuitive interfaces and advanced features, I
                            successfully contributed to making Coinbase more user-friendly,
                            resulting in a 20% rise in overall customer satisfaction.
                        </p>
                    </div>

                    {/* Right content */}
                    <div className="ml-0 sm:ml-4 hidden group-hover:flex">
                        <button className="bg-black text-white rounded-[50px] px-6 py-3 sm:py-4 hover:bg-white hover:text-black transition duration-300 ease-in-out">
                            Visit Link
                        </button>
                    </div>
                </div>
                <div className="h-[1px] bg-white mt-14"></div>

                {/* Section 2 */}
                <p className="text-md sm:text-lg text-gray-400">JAN, 2022 - SEP, 2023</p>

                {/* Job Title and Company */}
                <h3 className="text-2xl sm:text-4xl lg:text-5xl text-[#ABABB5] font-semibold">
                    UX Designer, Genesis
                </h3>

                {/* Job Description */}
                <div className="group flex flex-col sm:flex-row justify-between items-start space-y-4 sm:space-y-0">
                    {/* Left content */}
                    <div>
                        <p className="text-[#ABABB5] font-semibold pb-6 sm:max-w-2xl">
                            Reshaped the platform's user experience, making blockchain
                            technology more accessible. My visionary approach and financial
                            acumen converged seamlessly, creating intuitive interfaces for
                            newcomers and advanced features for seasoned traders. By
                            introducing intuitive interfaces and advanced features, I
                            successfully contributed to making Coinbase more user-friendly,
                            resulting in a 20% rise in overall customer satisfaction.
                        </p>
                    </div>

                    {/* Right content */}
                    <div className="ml-0 sm:ml-4 hidden group-hover:flex">
                        <button className="bg-black text-white rounded-[50px] px-6 py-3 sm:py-4 hover:bg-white hover:text-black transition duration-300 ease-in-out">
                            Visit Link
                        </button>
                    </div>
                </div>
                <div className="h-[1px] bg-white mt-14"></div>

                {/* Section 3 */}
                <p className="text-md sm:text-lg text-gray-400">FEB, 2020 - JAN, 2022</p>

                {/* Job Title and Company */}
                <h3 className="text-2xl sm:text-4xl lg:text-5xl text-[#ABABB5] font-semibold">
                Lead Designer, Pitchblack
                </h3>

                {/* Job Description */}
                <div className="group flex flex-col sm:flex-row justify-between items-start space-y-4 sm:space-y-0">
                    {/* Left content */}
                    <div>
                        <p className="text-[#ABABB5] font-semibold pb-6 sm:max-w-2xl">
                            Reshaped the platform's user experience, making blockchain
                            technology more accessible. My visionary approach and financial
                            acumen converged seamlessly, creating intuitive interfaces for
                            newcomers and advanced features for seasoned traders. By
                            introducing intuitive interfaces and advanced features, I
                            successfully contributed to making Coinbase more user-friendly,
                            resulting in a 20% rise in overall customer satisfaction.
                        </p>
                    </div>

                    {/* Right content */}
                    <div className="ml-0 sm:ml-4 hidden group-hover:flex">
                        <button className="bg-black text-white rounded-[50px] px-6 py-3 sm:py-4 hover:bg-white hover:text-black transition duration-300 ease-in-out">
                            Visit Link
                        </button>
                    </div>
                </div>
                <div className="h-[1px] bg-white mt-14"></div>
            </div>
        </div>
    );
};

export default WorkExperience;
