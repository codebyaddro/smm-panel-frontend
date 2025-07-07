import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import AllProducts from "../pages/AllProducts";




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
         }
    ]

    }]);
export default MainRoutes;