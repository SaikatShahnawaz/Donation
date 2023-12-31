import { NavLink } from "react-router-dom";
import './Navbar.css';

const NavBar = () => {
    const links = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/donation">Donation</NavLink></li>
        <li><NavLink to="/statistics">Statistics</NavLink></li>
    </>

    return (
        <div>
            <nav className="mx-8 p-2">
                <div >
                    <div className="navbar bg-base-100">
                        <div className="navbar-start">
                            <div className="dropdown">
                                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                                </div>
                                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52">
                                    {links}
                                </ul>
                            </div>
                            <div>
                                <img src="https://i.postimg.cc/zGZQQP2W/Logo.png" alt="" srcset="" />
                            </div>

                        </div>
                        <div className="navbar-center hidden lg:ml-64 lg:flex ">
                            <ul className="menu menu-horizontal  lg:px-40 lg:gap-8">
                                {links}
                            </ul>
                        </div>
                    </div>

                </div>
            </nav>

        </div>
    );
};

export default NavBar;