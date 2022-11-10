import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import useTitle from '../../Hooks/useTitle';

const Register = () => {
    const { createUser, error, setError, setName } = useContext(AuthContext);
    useTitle('Register');
    const navigate = useNavigate();
    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                setError("");
                setName(name);
                navigate('/');
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage);

            });
        form.reset();
    }
    return (
        <div className="hero min-h-screen bg-slate-600 rounded-lg mb-5 relative">
            <h1 className="md:text-5xl font-bold text-white absolute md:top-2 top-1 text-3xl">Register now!</h1>

            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-slate-500">
                    <form onSubmit={handleRegister} className="card-body w-96 relative">
                        <p className='text-red-500 font-bold'>{error}</p>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Name</span>
                            </label>
                            <input type="text" placeholder="Your Name" name="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Email</span>
                            </label>
                            <input type="email" placeholder="Your Email" name="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="Your Password" className="input input-bordered" required />

                        </div>
                        <div className="form-control mt-6">
                            <button type='submit' className="btn btn-outline btn-info" value="register"><span className='text-white'>Register</span></button>
                        </div>
                        <p className='text-white mt-5'>Already have an account? Please <Link className='text-gray-900 font-bold' to="/login">Login</Link></p>
                    </form>
                </div>


            </div>
        </div>
    );
};

export default Register;