import { Link, NavLink } from "react-router-dom"

const Navbar = () => {
    return (
        <div className="bg-black text-white flex justify-between items-center px-8 py-4">
            {/* Logo */}
            <div className="flex items-center space-x-2">
                <div className="w-8 h-0.5 bg-white"></div>
                <span className="text-lg font-semibold">BADEJO</span>
            </div>

            {/* Navigation Links */}
            <div className="flex items-center space-x-6 font-semibold ">
                <p>
                    Brand & Product Designer <br />
                    based in Lagos Nigeria
                </p>
                <NavLink to={""} className="hover:underline hover:text-gray-400 ">
                    Case Studies
                </NavLink>
                <NavLink to={""} className="hover:underline hover:text-gray-400 ">
                    Experience
                </NavLink>
                <NavLink to={""} className="hover:underline hover:text-gray-400">
                    Hire me
                </NavLink>
            </div>

            {/* Switch */}
            <div className="relative w-10 h-5 bg-gray-700 rounded-full flex items-center justify-end p-1">
                <div className="w-4 h-4 bg-white rounded-full"></div>
            </div>
        </div>
    )
}

export default Navbar
