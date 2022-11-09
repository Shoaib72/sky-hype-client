import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
import jump from './../../../assets/jump.ico'


const Header = () => {
    const { user, logOut, setError, name, setName } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then(() => {
                setError("");
                setName("");
            }).catch((error) => {
                setError(error)
            });
    }
    return (
        <div className="navbar bg-slate-700 mb-5 rounded-lg">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-slate-700 rounded-box w-52">
                        <li><Link className='text-white' to="/home">Home</Link></li>
                        <li><Link className='text-white' to="/about-us">About Us</Link></li>
                        <li><Link className='text-white' to="/blog">Blog</Link></li>
                    </ul>
                </div>
                <img className='h-20 w-20' src={jump} alt="" />
                <Link to="/home" className="normal-case text-4xl text-white">SKYHYPE</Link>

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li> <Link className='text-white' to="/home">Home</Link> </li>
                    <li><Link className='text-white' to="/about-us">About</Link></li>
                    <li><Link className='text-white' to="/blog">Blog</Link></li>
                </ul>
            </div>
            <div className="navbar-end mr-3 text-white">
                <ul className='d-flex relative'>
                    {
                        user?.uid ? <li>
                            <img className='h-20 w-20 mb-2 ml-1 border-2 border-white text-white' src={user.photoURL} alt={name} />
                            <button onClick={handleLogOut} className="btn btn-outline btn-info">LogOut</button>
                        </li> :
                            <li><Link to="/login"><button className="btn btn-outline btn-info">Login</button></Link></li>
                    }

                </ul>
            </div>
        </div>
    );
};

export default Header;