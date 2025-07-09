import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import AllProducts from "../pages/AllProducts";
import SMMPanel from "../pages/SMMPanel";
import LogIn from "../auth/LogIn";
import SignUp from "../auth/SignUp";
import SingleProduct from "../pages/SingleProduct";




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
         }
    ]

    }]);
export default MainRoutes;