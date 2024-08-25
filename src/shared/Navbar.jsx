import { Link } from "react-router-dom";

const Navbar = () => {
    const links = <>
        <li className="py-2 px-4">Home</li>
        <li className="py-2 px-4">Gallery</li>
        <li className="py-2 px-4">Admission</li>
        <li className="py-2 px-4">Contact</li>
    </>
    return (
        <div className="">
            <div className="navbar fixed z-40 bg-black bg-opacity-30 text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {/* add links */}
                            {links}
                        </ul>
                    </div>
                    <Link to='/'>
                        {/* <img className="w-36" src="/src/assets/logo.png" alt="" /> */}
                        <p>Rangdhanu </p>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">

                        {/* add links */}
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Login</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;