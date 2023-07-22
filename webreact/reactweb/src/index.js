import React from "react";
import ReactDOM from "react-dom";
import Study from "./components/study";
import Test from "./components/testforcouces";
import Allclass from "./components/class1";
import Test9to10 from "./components/test9to10";
import CollegeTest from "./components/college.js";
// import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const root = document.getElementById("root");
const router = createBrowserRouter([
  {
    path: "/",
    element: <Study />,
  },
  {
    path: "allcources",
    element: <Allclass />,
  },
  {
    path: "test",
    element: <Test />,
  },
  {
    path: "test9to10",
    element: <Test9to10 />,
  },
  {
    path: "collegetest",
    element: <CollegeTest />,
  },
]);
ReactDOM.render(<RouterProvider router={router} />, root);
