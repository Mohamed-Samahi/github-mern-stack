import { Link, useLocation } from "react-router-dom";
import { IoHomeSharp } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { MdOutlineExplore } from "react-icons/md";
import { PiSignInBold } from "react-icons/pi";
import { MdEditDocument } from "react-icons/md";
import Logout from "./Logout";
import { getUsernameFromSearchParams } from "../utils/getUrlParams";
import { useAuth } from "../contexts/AuthContext";

const Sidebar = () => {
    const location = useLocation()
    const username = getUsernameFromSearchParams();
    const { authorizedUser } = useAuth();

    return (
        <aside
            className='sticky top-0 left-0 flex flex-col items-center h-screen py-10 overflow-y-auto text-white border-r border-gray-800 min-w-12 sm:w-16 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 hover:bg-gray-600/10'
        >
            <nav className='flex flex-col h-full gap-3'>
                <Link
                    to='/'
                    name="home-page"
                    aria-label="Go to home page"
                    className='flex justify-center'
                >
                    <img className='h-8' src='/github.svg' alt='Github Logo' />
                </Link>

                <Link
                    to={`/?username=${username}`}
                    name="home-page-username"
                    aria-label="Go to home page with default username"
                    className={`p-1.5 flex justify-center transition-colors duration-200 rounded-lg 
					hover:bg-gray-800 ${location.pathname === "/" ? "bg-gray-800" : null}`}
                >
                    <IoHomeSharp size={20} />
                </Link>

                {authorizedUser && (
                    <Link
                        to='/likes'
                        name="likes-page"
                        aria-label="Go to likes page"
                        className={`p-1.5 flex justify-center transition-colors duration-200 rounded-lg hover:bg-gray-800 ${location.pathname === "/likes" ? "bg-gray-800" : null}`}
                    >
                        <FaHeart size={22} />
                    </Link>
                )}

                {authorizedUser && (
                    <Link
                        to='/explore'
                        name="explore-page"
                        aria-label="Go to explore page"
                        className={`p-1.5  flex justify-center transition-colors duration-200 rounded-lg hover:bg-gray-800 ${location.pathname === "/explore" ? "bg-gray-800" : null}`}
                    >
                        <MdOutlineExplore size={25} />
                    </Link>
                )}

                {!authorizedUser && (
                    <Link
                        to='/login'
                        name="login-page"
                        aria-label="Go to login page"
                        className={`p-1.5 focus:outline-nones transition-colors duration-200 rounded-lg hover:bg-gray-800 ${location.pathname === "/login" ? "bg-gray-800" : null}`}
                    >
                        <PiSignInBold size={25} />
                    </Link>
                )}

                {!authorizedUser && (
                    <Link
                        to='/signup'
                        name="signup"
                        aria-label="Go to signup page"
                        className={`p-1.5 focus:outline-nones transition-colors duration-200 rounded-lg hover:bg-gray-800 ${location.pathname === "/signup" ? "bg-gray-800" : null}`}
                    >
                        <MdEditDocument size={25} />
                    </Link>
                )}
                {authorizedUser && (
                    <div className='flex flex-col gap-2 mt-auto'>
                        <Logout />
                    </div>
                )}
            </nav>
        </aside>
    );
};

export default Sidebar;