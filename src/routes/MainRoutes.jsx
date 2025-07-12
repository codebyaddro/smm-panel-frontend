import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import AllProducts from "../pages/AllProducts";
import SMMPanel from "../pages/SMMPanel";
import LogIn from "../auth/LogIn";
import SignUp from "../auth/SignUp";
import SingleProduct from "../pages/SingleProduct";
import Orders from "../pages/Orders";
import Diposit from "../pages/Deposit";
import Deposit from "../pages/Deposit";
import Tickets from "../pages/Tickets";
import Services from "../pages/Services";
import Dashboard from "../pages/Dashboard";
import MyAccount from "../pages/MyAccount";




const MainRoutes = createBrowserRouter([{
    path: "/",
    element: <MainLayout />,
    children: [
        {
        path: "/",
        element: <Home/>
         },
         {
            path: "/about",
            element: <About />
         },
         {
            path: "/AllProducts",
            element: <AllProducts/>
         },
         {
            path: "/SMMPanel",
            element: <SMMPanel />
         },
         {
            path: "/login",
            element: <LogIn />
         },
         {
            path: "/signup",
            element: <SignUp/>
         },
         {
            path: "/SingleProduct",
            element: <SingleProduct />
         },
         {
            path: "/Orders",
            element: <Orders/>
         }, 
         {
            path: "/Deposit",
            element: <Deposit/>
         },
         {
            path: "/Tickets",
            element: <Tickets/>
         },
         {
            path: "/services",
            element: <Services/>
         },
         {
            path: "/Dashboard",
            element: <Dashboard/>
         },
         {
            path: "/my-account",
            element: <MyAccount/>
         },
    ]

    }]);
export default MainRoutes;