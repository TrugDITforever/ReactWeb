import React from "react";
import Navbar from "./Navbar";
import "./Cssfile/Cartpage.css";
import { AppProvider } from "./Contexxt/Appcontext";
import { Tablecart, Boxrightlayout } from "./Shoppingcart";
function Cartpage() {
  return (
    <>
      <>
        <Navbar></Navbar>
        <div className="container">
          <div className="Cart-container">
            <div className="layout-Cart">
              <div className="under-layoutcart">
                <div className="Left-layout">
                  <h1 className="title-leftlayout">GIỎ HÀNG CỦA BẠN</h1>
                  <div className="row-layout">
                    <Tablecart />
                  </div>
                </div>
                <div className="Right-layout">
                  <Boxrightlayout />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
}
export default Cartpage;
