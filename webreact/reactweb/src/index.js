import React from "react";
import ReactDOM from "react-dom";

// import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
const root = document.getElementById("root");
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Study />,
//   },
//   {
//     path: "/allcources",
//     element: <Allclass />,
//   },
//   {
//     path: "/test",
//     element: <Test />,
//   },
//   {
//     path: "/test9to10",
//     element: <Test9to10 />,
//   },
//   {
//     path: "/collegetest",
//     element: <CollegeTest />,
//   },
//   {
//     path: "/introduce",
//     element: <Introduce />,
//   },
//   {
//     path: "/userinfo",
//     element: <Userinfo />,
//   },
//   { path: "/bookstore", element: <BookStrore /> },
//   { path: "/cartpage", element: <Cartpage /> },
// ]);
ReactDOM.render(<App></App>, root);
// <RouterProvider router={router}>{router}</RouterProvider>,
// root
