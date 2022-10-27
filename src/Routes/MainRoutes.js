import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Blog from "../pages/Blog/Blog";
import Course from "../pages/Course/Course";
import Details from "../pages/Details/Details";
import Error from "../pages/Error/Error";
import Faq from "../pages/FAQ/Faq";
import Home from "../pages/Home/Home";
import LogIn from "../pages/LogIn/LogIn";
import Register from "../pages/Register/Register";
import Premium from "../Premium/Premium";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/faq",
        element: <Faq></Faq>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/course",
        element: <Course></Course>,
        loader: () => fetch("https://ghuri-learning-server.vercel.app/course"),
      },
      {
        path: "/details/:id",
        element: (
          <PrivateRoute>
            <Details></Details>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://ghuri-learning-server.vercel.app/details/${params.id}`
          ),
      },
      {
        path: "/premium/:id",
        element: (
          <PrivateRoute>
            <Premium></Premium>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://ghuri-learning-server.vercel.app/premium/${params.id}`
          ),
      },
      {
        path: "/login",
        element: <LogIn> </LogIn>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "*",
    element: <Error></Error>,
  },
]);

export default router;
