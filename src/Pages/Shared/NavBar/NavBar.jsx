import { Link } from "react-router-dom";
import { FaPlus } from 'react-icons/fa';

const NavBar = () => {

    const user = null;

    const navOptions =
        <>
            <li><Link to="/">home</Link></li>
            <li><Link>about</Link></li>
            <li><Link>Appointment</Link></li>
            {
                user ? <>
                    <li><button className="btn btn-ghost">LogOut</button></li>
                </> : <>
                    <li><Link to="/login">Login</Link></li>
                </>
            }
        </>

    return (
        <>
            <div className="bg-[#07332F]">
                <div className="navbar justify-between z-10 max-w-screen-2xl mx-auto text-white">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                {navOptions}
                            </ul>
                        </div>
                        <div className='flex items-center'>
                            <FaPlus className='text-4xl font-bold' />
                            <a className="btn btn-ghost text-3xl font-bold capitalize"><span className='text-[#F7A582]'>Doc</span> <span>House</span></a>
                        </div>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 capitalize text-xl">
                            {navOptions}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NavBar;