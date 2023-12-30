import React, { useContext, useEffect } from "react";
import logo from "../imagess/loggo.png";
import { Link } from "react-router-dom";
import { Appcontext } from "../Contexxt/Appcontext";
function Navbars() {
  const { account, setaccoutname } = useContext(Appcontext);
  useEffect(() => {
    const localStorageAccount = localStorage.getItem("appear");
    if (localStorageAccount === "true") {
      setaccoutname(false);
    } else if (localStorageAccount === "false") {
      setaccoutname(true);
    }
  });
  return (
    <div>
      <header className="head">
        <div className="menu">
          <div className="logo">
            <a href="">
              <img src={logo} alt="logo" />
              LearN X2
            </a>
          </div>
          <div className="slogan">
            <h1>Learn by yourseft</h1>
          </div>
        </div>
        <section className="tab-mainmenu">
          <div className="tabmenu">
            <ul id="listmainmenu">
              <li>
                <Link to="/">
                  <i
                    className="fa-regular fa-circle-question"
                    style={{ color: "#5C5470" }}
                  ></i>
                  Hỏi & Đáp
                </Link>
              </li>
              <li>
                <Link to="/introduce">
                  <i
                    className="fa-solid fa-door-open"
                    style={{ color: "#5C5470" }}
                  ></i>
                  Giới Thiệu
                </Link>
              </li>
              <li>
                <Link to="/bookstore">
                  <i
                    className="fa-solid fa-cart-flatbed"
                    style={{ color: "#5C5470" }}
                  ></i>
                  Cửa Hàng
                </Link>
              </li>
              {account && (
                <li>
                  <Link to="/userinfo">
                    <i className="fa-regular fa-circle-user"></i>
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
