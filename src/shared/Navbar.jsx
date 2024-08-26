import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../firebase/FirebaseProvider";

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () =>{
        logOut()
        .then(result=>{
            console.log('Logout');
        })
    }

    return (
        <div>
            <div className="navbar bg-black bg-opacity-50 fixed z-30 text-white px-4">
                <div className="navbar-start ">
                    <div className="dropdown ">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden ">
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
                            className="menu menu-sm dropdown-content bg-black bg-opacity-85  rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li><a>Home</a></li>
                            <li><a>About</a></li>
                            <li>
                                <a>Academic</a>
                                <ul className="p-2">
                                    <li><a>Teachers</a></li>
                                    <li><a>Departments</a></li>
                                    <li><a>Academic Rules</a></li>
                                    <li><a>Academic Calender</a></li>
                                </ul>
                            </li>
                            <li>
                                <a>Admission</a>
                                <ul className="p-2">
                                    <li><a>Apply Online</a></li>
                                    <li><a>Tuition Fees</a></li>
                                    <li><a>Contact</a></li>
                                </ul>
                            </li>
                            <li><a>Photo Gallery</a></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-2xl font-bold">Rangdhanu</a>
                </div>
                <div className="navbar-center hidden lg:flex ">
                    <ul className="menu menu-horizontal px-1 gap-3">
                        <li><a>Home</a></li>
                        <li><a>About</a></li>
                        <li>
                            <details>
                                <summary className="mx-5">Academic</summary>
                                <ul className="p-1 w-full bg-black bg-opacity-85">
                                    <li ><a className="p-2">Teachers</a></li>
                                    <li ><a className="p-2">Departments</a></li>
                                    <li ><a className="p-2">Academic rules</a></li>
                                    <li ><a className="p-2">Academic Calender</a></li>

                                </ul>

                            </details>
                        </li>
                        <li>
                            <details>
                                <summary className="mx-5">Admission</summary>
                                <ul className="p-1 w-full bg-black bg-opacity-85">
                                    <li ><a className="p-2">Apply Online</a></li>
                                    <li ><a className="p-2">Tuition Fees</a></li>
                                    <li ><a className="p-2">Contact</a></li>

                                </ul>

                            </details>
                        </li>
                        <li><a>Photo Gallery</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ?

                           
                            <div className="dropdown dropdown-end">
                                <div tabIndex={0} role="button" className=" m-1"><img className="lg:h-[50px] lg:w-[50px] h-[40px] w-[40px] rounded-full" src={user?.photoURL} alt="user image" /></div>
                                <ul tabIndex={0} className="dropdown-content menu bg-black bg-opacity-50 rounded-box z-[1] w-52 p-2 shadow">
                                    <li><a>{user?.displayName}</a></li>
                                    <li><a onClick={handleLogOut}>logOut</a></li>
                                </ul>
                            </div>
                            :
                            <Link to='login'><a className=" bg-[#508C9B] px-4 py-2 rounded-full text-white border-none">Login</a></Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;