import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import img from './../../assets/login.ico'
import { GoogleAuthProvider } from 'firebase/auth'


const Login = () => {
    const provider = new GoogleAuthProvider();
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';
    const { signIn, setError, error, googleLogin, setUser, name } = useContext(AuthContext);

    const handleLogIn = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                user.displayName = name;
                setUser(user);
                setError("");
                navigate(from, { replace: true });
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage)
            });
        form.reset()
    }
    const handleGoogleLogin = () => {
        googleLogin(provider)
            .then((result) => {
                const user = result.user;
                setUser(user);
                setError("")

            }).catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage)
            });
    }
    return (
        <div className="hero min-h-screen bg-slate-600 rounded-lg mb-5 relative">
            <h1 className="md:text-5xl font-bold text-white absolute md:top-10 top-10 text-2xl">Login now!</h1>
            <p className='absolute md:top-28 top-20 font-bold text-red-500'>{error}</p>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-slate-500">
                    <form onSubmit={handleLogIn} className="card-body w-96 relative">

                        <img className='w-10 h-10 absolute left-44 top-2' src={img} alt="" />
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Email</span>
                            </label>
                            <input type="text" name="email" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" />

                        </div>
                        <div className="form-control mt-6">
                            <button type='submit' className="btn btn-outline btn-info mb-3" value="login"><span className='text-white'>Login</span></button>
                            <button onClick={handleGoogleLogin} className="btn btn-outline btn-info" value="login"><span className='text-white'>Login with Google</span></button>
                        </div>
                        <p className='text-white mt-5'>Dont have an account? Please <Link className='text-gray-900 font-bold' to="/register">Register</Link></p>
                    </form>
                </div>


            </div>
        </div>
    );
};

export default Login;