import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="hero min-h-screen bg-slate-600 rounded-lg mb-5 relative">
            <h1 className="md:text-5xl font-bold text-white absolute md:top-6 top-6 text-3xl">Register now!</h1>

            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-slate-500">
                    <form className="card-body w-96 relative">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Name</span>
                            </label>
                            <input type="text" placeholder="name" name="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Email</span>
                            </label>
                            <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />

                        </div>
                        <div className="form-control mt-6">
                            <button type='submit' className="btn btn-outline btn-info"><span className='text-white'>Register</span></button>
                        </div>
                        <p className='text-white mt-5'>Already have an account? Please <Link className='text-gray-900 font-bold' to="/login">Login</Link></p>
                    </form>
                </div>


            </div>
        </div>
    );
};

export default Register;