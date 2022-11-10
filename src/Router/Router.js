import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from './../Pages/Home/Home'
import AboutUs from './../Pages/AboutUs/AboutUs'
import Blog from './../Pages/Blog/Blog'
import Login from './../Pages/Login/Login'
import Register from './../Pages/Register/Register'
import MyReviews from "../Pages/MyReviews/MyReviews";
import AddService from './../Pages/AddService/AddService'
import Services from "../Pages/Services/Services";


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
                path: '/services',
                element: <Services></Services>
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
                path: '/my-reviews',
                element: <MyReviews></MyReviews>
            },
            {
                path: '/add-service',
                element: <AddService></AddService>
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