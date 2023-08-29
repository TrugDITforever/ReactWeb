// App.js
import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Study from "./components/study";
import Test from "./components/testforcouces";
import Allclass from "./components/class1";
import Test9to10 from "./components/test9to10";
import CollegeTest from "./components/college.js";
import BookStrore from "./components/bookstore";
import Cartpage from "./components/Cartpage";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Introduce from "./components/introduce";
import Userinfo from "./components/userinfo";
import { AppProvider } from "./components/Contexxt/Appcontext";
import { ClassProvider } from "./components/Contexxt/ClassContext";
// import "./App.css";
const App = () => {
  return (
    <AppProvider>
      <ClassProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Study />} />
            <Route path="/allcources" element={<Allclass />} />
            <Route path="/test" element={<Test />} />
            <Route path="/test9to10" element={<Test9to10 />} />
            <Route path="/collegetest" element={<CollegeTest />} />
            <Route path="/introduce" element={<Introduce />} />
            <Route path="/userinfo" element={<Userinfo />} />
            <Route path="/bookstore" element={<BookStrore />} />
            <Route path="/cartpage" element={<Cartpage />} />
          </Routes>
        </BrowserRouter>
      </ClassProvider>
    </AppProvider>
  );
};
export default App;
