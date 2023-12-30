import React, { useState, useEffect, useContext, useReducer } from "react";
import { Appcontext } from "../Contexxt/Appcontext";
import { Link } from "react-router-dom";
import { ClassContext } from "../Contexxt/ClassContext";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../StoreRedux/userSlicer";
export function Creategrpinterfaces() {
  const { setupdateCLick3 } = useContext(Appcontext);
  const clickappear4 = () => {
    setupdateCLick3(true);
  };
  const closeform2 = () => {
    setupdateCLick3(false);
  };
  const [inputcre, updateCre] = useState("");
  const [getlink, setLink] = useState(null);
  const [getnames, setname] = useState([]);

  return (
    <div className="cre">
      <div>
        <div className="create">
          <p>Tạo nhóm để học cùng nhau nhé!!!</p>
          <button className="btngroup" onClick={clickappear4}>
            <a>
              <i className="fa-solid fa-circle-plus"></i>
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
    </div>
  );
}
//submit confirm
function reducer(state, action) {
  if (action.type === "username") {
    return {
      ...state,
      username: action.username,
    };
  } else if (action.type === "password") {
    return {
      ...state,
      password: action.password,
    };
  } else if (action.type === "email") {
    return {
      ...state,
      email: action.email,
    };
  } else if (action.type === "clearForm") {
    return { username: "", password: "", email: "" };
  }
  throw new Error("Unknown action.");
}
//check loginaccount
function reducerlogin(state, action) {
  if (action.type === "email") {
    return {
      ...state,
      email: action.email,
    };
  } else if (action.type === "password") {
    return {
      ...state,
      password: action.password,
    };
  } else if (action.type === "clearForm") {
    return { email: "", password: "" };
  }
  throw new Error("Unknown action.");
}
export function BtnLoginSignup() {
  const userinfo = useSelector((state) => state.userinfo);
  const { formappear, signupappear, setupdateCLick, setupdateCLick2 } =
    useContext(Appcontext);
  const { setalertactive, setwordalert } = useContext(ClassContext);
  const { appear, setappear } = useContext(Appcontext);
  const { user, getuser } = useContext(ClassContext);
  const [statesignup, dispatch] = useReducer(reducer, {
    username: "",
    password: "",
    email: "",
  });
  const [statelogin, dispatchlogin] = useReducer(reducerlogin, {
    email: "",
    password: "",
  });
  useEffect(() => {
    const localappear = localStorage.getItem("appear");
    if (localappear === "false") {
      setappear(false);
    } else setappear(true);
  });
  async function handleSubmitlogin(event) {
    event.preventDefault();
    const response = await axios.post("/v1/checkuser", statelogin);
    if (response.data.message === "success") {
      setappear(false);
      localStorage.setItem("appear", false);
      getuser(response.data.dataUser);
      // useDispatch(updateUser(response.data.dataUser));
      setupdateCLick(false);
      ///alert message
      setalertactive(true);
      setwordalert("Chào mừng bạn đến với LearnX2");
      setTimeout(() => {
        setalertactive(false);
      }, 3000);
    } else {
      setalertactive(true);
      setwordalert("Tên đăng nhập hoặc mật khẩu không đúng.");
      dispatchlogin({ type: "clearForm" });
      setTimeout(() => {
        setalertactive(false);
      }, 3000);
    }
  }
  ///function ssubmit register
  async function signupFormSubmit(e) {
    e.preventDefault();
    const result = await axios.post("/v1/insertUser", statesignup);
    switch (result.data.message) {
      case "success":
        setupdateCLick2(false);
        console.log("error");
        localStorage.setItem("appear", false);
        window.location.reload();
        break;
      case "error":
        setalertactive(true);
        setwordalert("Tên người dùng đã tồn tại");
        setTimeout(() => {
          setalertactive(false);
        }, 3000);
        console.log("error");
        break;
    }
  }
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
            <button
              id="btn"
              onClick={() => {
                setupdateCLick(true);
                setupdateCLick2(false);
              }}
            >
              Đăng nhập
            </button>
            <button
              id="btn2"
              onClick={() => {
                setupdateCLick(false);
                setupdateCLick2(true);
              }}
            >
              Đăng kí
            </button>
          </div>
        </div>
      )}
      {formappear && (
        <div className="Page-login">
          <i
            className="fa-solid fa-circle-xmark"
            onClick={() => {
              setupdateCLick(false);
              setupdateCLick2(false);
            }}
            id="close"
          ></i>
          <div className="containform-login">
            <div className="Picture-Login">
              <img
                src="https://static.vecteezy.com/system/resources/previews/024/346/428/original/3d-cartoon-group-of-little-children-on-transparent-background-generative-ai-png.png"
                alt=""
              />
            </div>
            <div>
              <form className="loginform" onSubmit={handleSubmitlogin}>
                <h4>Hello, Chào mừng quay trở lại</h4>
                <div className="login-form" id="loginform">
                  <label>Tên đăng nhập:</label>
                  <input
                    type="text"
                    id="username"
                    onChange={(e) =>
                      dispatchlogin({
                        type: "email",
                        email: e.target.value,
                      })
                    }
                    required
                  />
                  <label>Mật khẩu:</label>
                  <input
                    type="password"
                    id="password"
                    onChange={(e) =>
                      dispatchlogin({
                        type: "password",
                        password: e.target.value,
                      })
                    }
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
                  Chưa có tài khoản?
                  <span
                    id="movetosignup"
                    onClick={() => {
                      setupdateCLick(false);
                      setupdateCLick2(true);
                    }}
                  >
                    Đăng kí
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
      {signupappear && (
        <div className="Page-signup">
          <i
            className="fa-solid fa-circle-xmark"
            id="close2"
            onClick={() => {
              setupdateCLick(false);
              setupdateCLick2(false);
            }}
          ></i>
          <form onSubmit={signupFormSubmit} className="signupform">
            <h4>ĐĂNG KÍ</h4>
            <div className="login-form" id="signupform">
              <label>Tên người dùng:</label>
              <input
                onChange={(e) =>
                  dispatch({ type: "username", username: e.target.value })
                }
                type="text"
                id="username2"
                required
              />
              <label>Mật khẩu:</label>
              <input
                onChange={(e) =>
                  dispatch({ type: "password", password: e.target.value })
                }
                type="password"
                id="password2"
                required
              />
              <label>Xác nhận pass:</label>
              <input type="password" id="password3" required />
              <label>Email:</label>
              <input
                onChange={(e) =>
                  dispatch({ type: "email", email: e.target.value })
                }
                type="email"
                id="email"
                required
              />
            </div>
            <input id="login-btn2" type="submit" value="Đăng kí" />
          </form>
          <div className="Hasacc">
            <p>
              Đã có tài khoản{" "}
              <span
                id="btnmovetologin"
                onClick={() => {
                  setupdateCLick(true);
                  setupdateCLick2(false);
                }}
              >
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
          <i className="fa-solid fa-right-from-bracket"></i>
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
            <i className="fa-solid fa-xmark"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
