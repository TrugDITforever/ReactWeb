import React from "react";
// import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
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
// ReactDOM.render(<App></App>, root);
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(<App></App>);
