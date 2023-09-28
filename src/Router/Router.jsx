import {  createBrowserRouter } from "react-router-dom";
import Home from "../components/home/Home";
import Route from "../route/Route";
import LogIn from "../components/Login/LogIn";

const Router = createBrowserRouter([
    {
       
        path:"/",
        element:<Route></Route>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'login',
                element:<LogIn></LogIn>
            }
        ]
    }
])
export default Router;