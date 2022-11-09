import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from './../Pages/Home/Home'
import AboutUs from './../Pages/AboutUs/AboutUs'
import Blog from './../Pages/Blog/Blog'
import Login from './../Pages/Login/Login'
import Register from './../Pages/Register/Register'


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },

            {
                path: '/about-us',
                element: <AboutUs></AboutUs>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }
])
export default router;