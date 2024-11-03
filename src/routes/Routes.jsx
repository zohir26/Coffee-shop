import App from "../App";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Coffee from "../pages/Coffee";
import Dashboard from "../pages/Dashboard";
import CoffeeCards from "../components/CoffeeCards";
import {
    createBrowserRouter
    
  } from "react-router-dom";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
        { path: '/' ,
          element: <Home></Home>,
          loader:() => fetch('../categories.json'),
          children:[
            {
              path:'/Category/:Category',
              element:<CoffeeCards></CoffeeCards>,
              loader: () => fetch('../coffees.json')
            },
          ],
        },
        { path: '/Coffee' ,
          element: <Coffee></Coffee>
        },
        { path: '/Dashboard' ,
          element: <Dashboard></Dashboard>
        },
    
        ],
    },
  ]);

export default router;