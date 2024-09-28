import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from "../App";
import ErrorPage from "../Page/ErrorPage";
import Login from "../Form/Login";
import SingUp from "../Form/SingUp";
import Home from "../Page/Home";
const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement:<ErrorPage />,
      children:[
        {
          path:"/",
          element:<Home />

        },
  
        {
            path:"/login",
            element:<Login />
        },
        {
          path:"/singup",
          element:<SingUp />
        }
      
      ]
    },
  ]);
  

const Routes = () => {
  return (
    <div>
        <RouterProvider router={router}>

        </RouterProvider>
      
    </div>
  )
}

export default Routes
