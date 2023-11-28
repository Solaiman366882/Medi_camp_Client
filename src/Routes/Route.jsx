import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Contact from "../Pages/Contact/Contact";
import CampDetails from "../Pages/CampDetails/CampDetails";
import AddCamp from "../Pages/AddCamp/AddCamp";
import AvailableCamp from "../Pages/AvailableCamp/AvailableCamp";
import Dashboard from "../Pages/Dashboard/Dashboard";
import PrivateRoute from "./PrivateRoute";



export const router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
            },
            {
                path:'login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/contact',
                element:<Contact></Contact>
            },
            {
                path:'/add-a-camp',
                element:<AddCamp></AddCamp>
            },
            {
                path:'/camp-details/:campId',
                element:<PrivateRoute><CampDetails></CampDetails></PrivateRoute>
            },
            {
                path:'/availableCamps',
                element:<AvailableCamp></AvailableCamp>
            },
            {
                path:'/dashboard',
                element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>
            }
        ]
    }
])