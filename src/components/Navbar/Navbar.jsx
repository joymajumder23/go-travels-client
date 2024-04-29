import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import toast, { Toaster } from 'react-hot-toast';

const Navbar = () => {
    const { user, logout } = useContext(AuthContext);
    const handleLogout = () => {
        logout();
        toast.success('Logout');
    }
    const links = <>
        <li><NavLink to="/" style={({ isActive, isPending, isTransitioning }) => {
            return {
                fontWeight: isActive ? "bold" : "normal",
                backgroundColor: isActive ? "white" : "",
                border: isActive ? "2px solid black" : "",
                color: isPending ? "red" : "black",
                viewTransitionName: isTransitioning ? "slide" : "",
            };
        }}>Home</NavLink></li>
        <li><NavLink to="/allSpot" style={({ isActive, isPending, isTransitioning }) => {
            return {
                fontWeight: isActive ? "bold" : "normal",
                backgroundColor: isActive ? "white" : "",
                border: isActive ? "2px solid black" : "",
                color: isPending ? "red" : "black",
                viewTransitionName: isTransitioning ? "slide" : "",
            };
        }}>All Tourists Spot</NavLink></li>
        <li><NavLink to="/addSpot" style={({ isActive, isPending, isTransitioning }) => {
            return {
                fontWeight: isActive ? "bold" : "normal",
                backgroundColor: isActive ? "white" : "",
                border: isActive ? "2px solid black" : "",
                color: isPending ? "red" : "black",
                viewTransitionName: isTransitioning ? "slide" : "",
            };
        }}>Add Tourists Spot</NavLink></li>
        <li><NavLink to="/myList" style={({ isActive, isPending, isTransitioning }) => {
            return {
                fontWeight: isActive ? "bold" : "normal",
                backgroundColor: isActive ? "white" : "",
                border: isActive ? "2px solid black" : "",
                color: isPending ? "red" : "black",
                viewTransitionName: isTransitioning ? "slide" : "",
            };
        }}>My List</NavLink></li>
    </>;
    return (
        <div className="max-w-6xl mx-auto">
            <div className="navbar bg-base-100 z-10 sticky">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {links}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Travels Go</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ? <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full tooltip tooltip-open tooltip-left" data-tip={user.displayName}>
                                    {
                                        user ? <img alt="" src={user.photoURL} /> : <img alt="" src="" />
                                    }
                                </div>
                            </div>
                            <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                                <li>
                                    <a className="justify-between">
                                        <Link to="/profile">Profile</Link>
                                        <span className="badge">New</span>
                                    </a>
                                </li>
                                <li><a>Logout</a></li>
                            </ul>
                        </div> : ""
                    }
                    <div>
                        {
                            user ? <a onClick={handleLogout} className="btn rounded-none bg-white">Logout</a> : <Link to="/login"><a className="btn rounded-none bg-white">Login</a></Link>
                        }
                    </div>
                </div>
            </div>
            <Toaster></Toaster>
        </div>
    );
};

export default Navbar;