import React from 'react'
import BannerIcon from './BannerIcon'

const Banner = () => {
    
    return (
        <div className='w-11/12 mx-auto ' >
            <div className=" text-white pt-24 pb-12 flex flex-col justify-center items-start ">
                {/* Introductory Text */}
                <p className="text-[#C8C8CF]  font-semibold mb-2 text-lg ">Hello! I'm Peace.</p>

                {/* Main Title */}
                <h1 className="text-4xl md:text-7xl font-bold leading-snug text-[#ABABB5] ">
                    A Brand and Product Designer <br />
                    currently leading the team at <br />
                    <span className="text-gray-400">Oendo Studio</span>
                </h1>

                {/* Visit Link Button */}
                <div className="mt-8">
                    <a
                        href="#"
                        className="inline-block bg-transparent border border-white text-white px-6 py-2 rounded-full hover:bg-white hover:text-black transition"
                    >
                        Visit Link
                    </a>
                </div>
                <div>
                    <BannerIcon></BannerIcon>
                </div>

            </div>
        </div>
    )
}

export default Banner
