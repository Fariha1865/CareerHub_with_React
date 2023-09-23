import { Link, NavLink } from "react-router-dom";
import './Nav.css'

const Navbar = () => {

    const Links =
        <>
            <li><NavLink to="/Statistics">Statistics</NavLink></li>
            <li><NavLink to="/Applied">Applied Jobs</NavLink></li>
            <li><NavLink to="/Blog">Blog</NavLink></li>
        </>

    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {Links}
                        </ul>
                    </div>
                    <button className="btn btn-ghost normal-case text-2xl lg:ml-20 font-bold"><Link to="/">CareerHub</Link></button>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 font-bold">
                        {Links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <button className="btn lg:mr-20 bg-gradient-to-r from-blue-400 to-purple-600 text-white">Start Applying</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;