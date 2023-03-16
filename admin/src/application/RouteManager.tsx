import React from "react";
import "./styles/globals.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeLayout from "./layouts/HomeLayout";

function RouteManager() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout />,
      children: [
        { path: "/", element: <div>Home</div> },
        { path: "dashboard", element: <div>Dashboard</div> },
      ],
    },
    {
      path: "login",
      element: <div>Login</div>,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default RouteManager;
