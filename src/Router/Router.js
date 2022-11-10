import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from './../Pages/Home/Home'

import Blog from './../Pages/Blog/Blog'
import Login from './../Pages/Login/Login'
import Register from './../Pages/Register/Register'
import MyReviews from "../Pages/MyReviews/MyReviews";
import AddService from './../Pages/AddService/AddService'
import Services from "../Pages/Services/Services";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";
import PrivateRoute from "./PrivateRoute";
import ErrorRoute from './../ErrorRoute/ErrorRoute'


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorRoute></ErrorRoute>,
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
                path: '/services/:id',
                element: <ServiceDetails></ServiceDetails>,
                loader: ({ params }) => fetch(`https://sky-hype-server.vercel.app/services/${params.id}`)
            },

            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/my-reviews',
                element: <PrivateRoute><MyReviews></MyReviews></PrivateRoute>
            },
            {
                path: '/add-service',
                element: <PrivateRoute><AddService></AddService></PrivateRoute>
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