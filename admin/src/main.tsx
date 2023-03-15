import React from "react";
import ReactDOM from "react-dom/client";
import "@/styles/globals.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "@/layouts/layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
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

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
