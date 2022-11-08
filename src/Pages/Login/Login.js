import React from 'react';
import { Link } from 'react-router-dom';
import img from './../../assets/login.ico'

const Login = () => {
    return (
        <div className="hero min-h-screen bg-slate-600 rounded-lg mb-5 relative">
            <h1 className="md:text-5xl font-bold text-white absolute md:top-10 top-10 text-2xl">Login now!</h1>

            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-slate-500">
                    <div className="card-body w-96 relative">
                        <img className='w-10 h-10 absolute left-44 top-2' src={img} alt="" />
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Email</span>
                            </label>
                            <input type="text" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Password</span>
                            </label>
                            <input type="text" placeholder="password" className="input input-bordered" />

                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-outline btn-info"><span className='text-white'>Login</span></button>
                        </div>
                        <p className='text-white mt-5'>Dont have an account? Please <Link className='text-gray-900 font-bold' to="/register">Register</Link></p>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Login;