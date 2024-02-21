import React from "react";
import ReactDOM from "react-dom/client";
// importhing components
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
// createBrouserRouter me list routing condigurations likhnege , RouterProvider use render krne me help karega , Outlet use accodinglu route krwayega
import { createBrowserRouter , RouterProvider , Outlet } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";







 
// isme header ke neeche hm outlet paas karenge, ye AppLayout ke childrens ko routerprovider ki help se render karwayega 
const AppLayout = () => {
    return(
        <div className="app">
            <Header/>
            <Outlet/>
        </div>
    )
};

// to developer routes, we have to create routing configurations
// ab hm chahte hai ki hamara header waise ka waisa hi rhe bs uske neeche ka content chenge ho to iske liye hm applayout me children banayenge
// configuration is a list. It is a information that what will happen on a specific path
const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        children: [
            {
                path: "/",
                element: <Body />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "/restaurants/:resId",
                element: <RestaurantMenu />,
            },
        ],
        errorElement: <Error/>,
    }
]);




const root = ReactDOM.createRoot(document.getElementById("root"));

// RouterProvider ki help se appRouter ko render karwayenege
root.render(< RouterProvider router={appRouter}/>);