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
import DashBoardLayout from "../Layouts/DashBoardLayout";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";



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
                path:'/camp-details/:campId',
                element:<PrivateRoute><CampDetails></CampDetails></PrivateRoute>
            },
            {
                path:'/availableCamps',
                element:<AvailableCamp></AvailableCamp>
            },
            {
                path:'/dashboard',
                element:<PrivateRoute><DashBoardLayout></DashBoardLayout></PrivateRoute>,
                children:[
                    {
                        path:'/dashboard',
                        element:<Dashboard></Dashboard>
                    },
                    {
                        path:'/dashboard/add-a-camp',
                        element:<AddCamp></AddCamp>
                    },
                    {
                        path:'/dashboard/allUsers',
                        element:<AllUsers></AllUsers>
                    }
                ]
            }
        ]
    }
])