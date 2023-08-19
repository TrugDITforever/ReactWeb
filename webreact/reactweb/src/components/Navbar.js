import React, { useState, useEffect, useContext } from "react";
import "./Cssfile/style.css";
import logo from "./imagess/logo.png";

import { Link } from "react-router-dom";
import { Appcontext } from "./Contexxt/Appcontext";
function Navbars() {
  const { account, setaccoutname } = useContext(Appcontext);
  useEffect(() => {
    // Kiểm tra nếu có giá trị account trong localStorage
    const localStorageAccount = localStorage.getItem("account");
    if (localStorageAccount === "true") {
      setaccoutname(true);
    } else if (localStorageAccount === "false") {
      setaccoutname(false);
    }
  }, []);
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
                <Link to="/">
                  <i
                    class="fa-regular fa-circle-question"
                    style={{ color: "#5C5470" }}
                  ></i>
                  Hỏi & Đáp
                </Link>
              </li>
              <li>
                <Link to="/allcources">
                  <i
                    class="fa-regular fa-file-lines"
                    style={{ color: "#5C5470" }}
                  ></i>
                  Giáo Án
                </Link>
              </li>
              <li>
                <Link to="/bookstore">
                  <i
                    class="fa-solid fa-cart-flatbed"
                    style={{ color: "#5C5470" }}
                  ></i>
                  Cửa Hàng
                </Link>
              </li>
              <li>
                <Link to="/introduce">
                  <i
                    class="fa-solid fa-door-open"
                    style={{ color: "#5C5470" }}
                  ></i>
                  Giới Thiệu
                </Link>
              </li>
              {account && (
                <li>
                  <Link to="/userinfo">
                    <i class="fa-regular fa-circle-user"></i>
                    Tài khoản
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </section>
      </header>
    </div>
  );
}
export default Navbars;
