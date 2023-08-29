import React, { useState, useEffect, useContext } from "react";
import { Appcontext } from "../Contexxt/Appcontext";
import { Link } from "react-router-dom";
import { ClassContext } from "../Contexxt/ClassContext";

export function Creategrpinterfaces() {
  const { Creategrp, setupdateCLick3 } = useContext(Appcontext);
  const clickappear4 = () => {
    setupdateCLick3(true);
  };
  const closeform2 = () => {
    setupdateCLick3(false);
  };
  const [inputcre, updateCre] = useState("");
  const [getlink, setLink] = useState(null);
  const [getnames, setname] = useState([]);
  const takeLink = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setLink(imageUrl);
    }
  };
  const getvalue = (e) => {
    updateCre(e.target.value);
  };
  const createNew = (event) => {
    event.preventDefault();
    const newname = { name: inputcre };
    if (inputcre.trim() !== "") {
      setname([newname, ...getnames]);
    }
    // setLink("");
    updateCre("");
    closeform2();
  };
  return (
    <div className="cre">
      <div>
        <div className="create">
          <p>Tạo nhóm để học cùng nhau nhé!!!</p>
          <button className="btngroup" onClick={clickappear4}>
            <a>
              <i class="fa-solid fa-circle-plus"></i>
              Tạo Nhóm
            </a>
          </button>
          <p>Nhóm phổ biến gần đây.</p>
        </div>
        <div className="group-main">
          <div className="group">
            <div className="group-img">
              <div
                style={{
                  width: "50%",
                  marginRight: "10px",
                }}
              >
                {" "}
                <a>
                  <img
                    src="https://xcdn-cf.vuihoc.vn/upload/5c209fe6176b0/2022/04/06/097a_khoi-d-gom-nhung-nganh-nao-1.png"
                    alt=""
                  />
                </a>{" "}
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <span>Nhóm khối D</span>
              </div>
            </div>
            <div className="gr-btn">
              <button>Tham Gia Ngay</button>
            </div>
          </div>
          <div className="group">
            <div className="group-img">
              <div
                style={{
                  width: "50%",
                  marginRight: "10px",
                }}
              >
                {" "}
                <a>
                  <img
                    src="https://static.ybox.vn/2020/12/1/1607335958957-lam-viec-nhom-hieu-qua.jpg"
                    alt=""
                  />
                </a>{" "}
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <span>TeamWork</span>
              </div>
            </div>
            <div className="gr-btn">
              <button>Tham Gia Ngay</button>
            </div>
          </div>
          <p>Nhóm mới gần đây:</p>
          {getnames.map((getname, index) => (
            <div key={index} className="group">
              <div className="group-img">
                <div
                  style={{
                    width: "50%",
                    marginRight: "10px",
                  }}
                >
                  {" "}
                  <a title={`Nhóm ${getname.name}`}>
                    <img src={getlink} alt="" />
                  </a>{" "}
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <span>{getname.name}</span>
                </div>
              </div>
              <div className="gr-btn">
                <button>Tham Gia</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {Creategrp && (
        <div className="group-create">
          <i
            className="fa-solid fa-circle-xmark"
            id="close3"
            onClick={closeform2}
          ></i>
          <form onSubmit={createNew}>
            <h4
              style={{
                margin: "0px",
                padding: "4px 0",
                color: "#4285f4",
                fontSize: "24px",
                fontWeight: "700",
                textTransform: "uppercase",
              }}
            >
              TẠO NHÓM
            </h4>
            <div className="login-form" id="loginform">
              <label for="username">Tên Nhóm:</label>
              <input
                type="text"
                // value={inputcre}
                onChange={getvalue}
                id="username"
                name="username"
                required
              />
              <label for="decrip">Ảnh nhóm:</label>
              <input
                onChange={takeLink}
                type="file"
                id="decrip"
                placeholder="Hãy thả link ảnh vào đây"
                required
              />
              <label for="decrip">Thành viên:</label>
              <input
                type="text"
                id="decrip"
                name="decrip"
                required
                placeholder="Nhập email của thành viên"
              />
            </div>
            <input id="login-btn" type="submit" value="Tạo Nhóm" />
          </form>
        </div>
      )}
    </div>
  );
}
export function Ads() {
  const { formappear, signupappear, Creategrp, cartappear } =
    useContext(Appcontext);
  ///ads appear in college.js
  const { adsapper } = useContext(ClassContext);
  return (
    <div>
      <div
        className={`ads ${
          formappear || signupappear || Creategrp || cartappear || adsapper
            ? "active"
            : ""
        }`}
      ></div>
    </div>
  );
}
export function BtnLoginSignup() {
  const { formappear, signupappear, setupdateCLick, setupdateCLick2 } =
    useContext(Appcontext);
  const { setalertactive, setwordalert } = useContext(ClassContext);
  const { appear, setappear, setaccoutname } = useContext(Appcontext);
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  useEffect(() => {
    const localappear = localStorage.getItem("appear");
    if (localappear === "false") {
      setappear(false);
    } else setappear(true);
  });
  const userAccounts = [
    { namelogin: "trung", passlogin: "123" },
    { namelogin: "user2", passlogin: "123" },
    { namelogin: "user3", passlogin: "123" },
    { namelogin: "user4", passlogin: "123" },
    { namelogin: "user5", passlogin: "123" },
    { namelogin: "user6", passlogin: "123" },
    { namelogin: "user7", passlogin: "123" },
    { namelogin: "user8", passlogin: "123" },
    { namelogin: "user9", passlogin: "123" },
    { namelogin: "user10", passlogin: "123" },
  ];
  const handleSubmitlogin = (event) => {
    event.preventDefault();
    const matchedUser = userAccounts.find(
      (user) => user.namelogin === username && user.passlogin === password
    );
    if (matchedUser) {
      setpassword("");
      setusername("");
      setappear(false);
      localStorage.setItem("appear", false);
      setupdateCLick(false);
      ///alert message
      setalertactive(true);
      setwordalert("Chào mừng bạn đến với LearnX2");
      setTimeout(() => {
        setalertactive(false);
      }, 3000);
      setaccoutname(true);
      localStorage.setItem("account", true);
    } else {
      setalertactive(true);
      setwordalert("Tên đăng nhập hoặc mật khẩu không đúng.");
      setTimeout(() => {
        setalertactive(false);
      }, 3000);
    }
  };
  const clickappear = () => {
    setupdateCLick(true);
    setupdateCLick2(false);
  };
  const closeform = () => {
    setupdateCLick(false);
    setupdateCLick2(false);
  };
  const clickappear2 = () => {
    setupdateCLick(false);
    setupdateCLick2(true);
  };
  return (
    <div>
      {appear && (
        <div className="login-place" id="login-place">
          <div className="word">
            <p>
              Hãy tham gia vào để trở thành thành viên của
              <strong style={{ paddingLeft: "5px", fontWeight: "900" }}>
                LEARN X2
              </strong>{" "}
              <br />
              và tham gia hỏi đáp cùng các bạn khác!!!
              <br />
            </p>
          </div>
          <div className="login">
            <button id="btn" onClick={clickappear}>
              Đăng nhập
            </button>
            <button id="btn2" onClick={clickappear2}>
              Đăng kí
            </button>
          </div>
        </div>
      )}

      {formappear && (
        <div className="Page-login">
          <i
            className="fa-solid fa-circle-xmark"
            onClick={closeform}
            id="close"
          ></i>
          <form className="loginform" onSubmit={handleSubmitlogin}>
            <h4
              style={{
                margin: "0px",
                padding: "4px 0",
                color: "#4285f4",
                fontSize: "24px",
                fontWeight: "700",
                textTransform: "uppercase",
              }}
            >
              ĐĂNG NHẬP
            </h4>
            <div className="login-form" id="loginform">
              <label for="username">Tên đăng nhập:</label>
              <input
                type="text"
                id="username"
                name="username"
                value={username}
                onChange={(e) => setusername(e.target.value)}
                required
              />
              <label for="password">Mật khẩu:</label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setpassword(e.target.value)}
                required
              />
            </div>
            <input
              id="login-btn"
              className="loginbtnnn"
              type="submit"
              value="Đăng nhập"
            />
          </form>
          <div className="NOacc">
            <p>
              Chưa có tài khoản?{" "}
              <span id="movetosignup" onClick={clickappear2}>
                Đăng kí
              </span>
            </p>
          </div>
          {/* <div className="other-option">
            <ul>
              <li>
                <a href="">
                  <i className="fa-brands fa-facebook fa-2xl"></i>
                </a>
              </li>
              <li>
                <a href="">
                  <i className="fa-brands fa-google-plus fa-2xl"></i>
                </a>
              </li>
            </ul>
          </div> */}
        </div>
      )}
      {signupappear && (
        <div className="Page-signup">
          <i
            className="fa-solid fa-circle-xmark"
            id="close2"
            onClick={closeform}
          ></i>
          <form className="signupform">
            <h4
              style={{
                margin: "0px",
                padding: "4px 0",
                color: "#4285f4",
                fontSize: "24px",
                fontWeight: "700",
                textTransform: "uppercase",
              }}
            >
              ĐĂNG KÍ
            </h4>
            <div className="login-form" id="signupform">
              <label for="username2">Tên đăng nhập:</label>
              <input type="text" id="username2" name="username2" required />
              <label for="password2">Mật khẩu:</label>
              <input type="password" id="password2" name="password2" required />
              <label for="password3">Xác nhận pass:</label>
              <input type="password" id="password3" name="password3" required />
              <label for="password4">Email:</label>
              <input type="email" id="email" name="email" required />
            </div>
            <input id="login-btn2" type="submit" value="Đăng kí" />
          </form>
          <div className="Hasacc">
            <p>
              Đã có tài khoản{" "}
              <span id="btnmovetologin" onClick={clickappear}>
                Đăng nhập
              </span>
            </p>
          </div>
          {/* <div className="other-option">
            <ul>
              <li>
                <a href="">
                  <i className="fa-brands fa-facebook fa-2xl"></i>
                </a>
              </li>
            </ul>
          </div> */}
        </div>
      )}
    </div>
  );
}
export function BtnLogout() {
  const { setaccoutname, setappear } = useContext(Appcontext);
  const Logoutclick = () => {
    setaccoutname(false);
    setappear(true);
    localStorage.setItem("appear", "true");
    localStorage.setItem("account", false);
  };
  return (
    <div className="Logoutplace">
      <Link to="/">
        {" "}
        <p onClick={Logoutclick}>
          <i class="fa-solid fa-right-from-bracket"></i>
          Log out
        </p>
      </Link>
    </div>
  );
}
export function Alertactice() {
  const { alertactive, setalertactive, wordalert } = useContext(ClassContext);
  return (
    <div>
      <div className={`alert ${alertactive ? "moveout" : ""}`}>
        <div className="alertword">
          <p>{wordalert}</p>
          <a onClick={() => setalertactive(false)}>
            <i class="fa-solid fa-xmark"></i>
          </a>
        </div>
      </div>
    </div>
  );
}