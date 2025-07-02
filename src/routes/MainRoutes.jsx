import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import About from "../pages/About";




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
         }
    ]

    }]);
export default MainRoutes;