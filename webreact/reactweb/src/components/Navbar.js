import React, { useState, useEffect } from "react";
import "./style.css";
import logo from "./imagess/logo.png";

import { Link } from "react-router-dom";
function Navbars() {
  return (
    <div>
      <header className="head">
        <div className="menu">
          <div className="logo">
            <a href="">
              <img src={logo} alt="logo" />
              LEARN X2
            </a>
          </div>

          <div className="slogan">
            <h1>LEARN BY YOURSELF</h1>
          </div>
        </div>
        <section className="tab-mainmenu">
          <div className="tabmenu">
            <ul id="listmainmenu">
              <li>
                <a href="">
                  <Link to="/">HỎI & ĐÁP</Link>
                </a>
              </li>
              <li>
                <a href="">
                  <Link to="/allcources">Lộ Trình Học</Link>
                </a>
              </li>

              <li>
                <a href=""> Hướng dẫn thêm </a>
              </li>
              <li>
                <a href=""> Liên hệ</a>
              </li>
            </ul>
            <div className="mobbilebtn">
              <i className="fa-solid fa-bars"></i>
            </div>
          </div>
        </section>
      </header>
    </div>
  );
}
export default Navbars;
