import "./Cssfile/userinfo.css";
import Navbar from "./FunctionforMainPage/Navbar";
import { AppProvider, Appcontext } from "./Contexxt/Appcontext";
import { useContext, useEffect, useState } from "react";
import { BtnLogout } from "./FunctionforMainPage/funtionforsignupAndlogin";
function Userinfo() {
  const [username, setusername] = useState("Trung Do");
  const [phonenumber, setphonenumber] = useState("0911163990");
  const [email, setemail] = useState("dotrung1512@gmail.com");
  const [address, setaddress] = useState("Vinh Linh, Viet Nam");
  const valueName = (e) => {
    setusername(e.target.value);
  };
  const valuephonenumber = (e) => {
    setphonenumber(e.target.value);
  };
  const valueEmail = (e) => {
    setemail(e.target.value);
  };
  const valueaddress = (e) => {
    setaddress(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
  };

  const [isvisible1, setvisible1] = useState(true);
  const [isvisible2, setvisible2] = useState(false);
  const Isvisible1 = () => {
    setvisible1(true);
    setvisible2(false);
  };
  const Isvisible2 = () => {
    setvisible1(false);
    setvisible2(true);
  };
  const [newpass, setpass] = useState("");
  const [oldepassword, setepassword] = useState("");
  const [newpassConfirm, setpassConfirm] = useState("");
  const [wwordConfirm, setwwordConfirm] = useState("");
  const [wwordConfirm2, setwwordConfirm2] = useState("");

  useEffect(() => {
    if (newpass.length + 1 >= 5) {
      setwwordConfirm("Bình thường");
    } else setwwordConfirm("");
  });
  useEffect(() => {
    if (newpassConfirm != newpass) {
      setwwordConfirm2("Mật khẩu xác nhận khác");
    } else setwwordConfirm2("");
  });
  const CancelAll = () => {
    setpass("");
    setpassConfirm("");
    setepassword("");
  };
  return (
    <div className="StartUserInfo">
      <>
        <Navbar></Navbar>
        <div className="infoInterfaces">
          <div className="allINfor">
            <div className="Menuinfo">
              <div className="MainStuff">
                <div className="Tabmenu">
                  <i className="fa-solid fa-gear"></i>
                </div>
                <div className="WordInfo">
                  <h1>Trung tâm tài khoản</h1>
                  <div className="wordtoclick">
                    <p onClick={Isvisible1}>
                      <i className="fa-regular fa-user"></i>Thông tin tài khoản
                    </p>
                  </div>
                  <div className="wordtoclick">
                    <p onClick={Isvisible2}>
                      <i className="fa-solid fa-shield-halved"></i>Mật khẩu
                    </p>
                  </div>
                </div>
                <BtnLogout />
              </div>
            </div>
            <div className="inforOfuser">
              <div className="element1">
                {
                  <div className={`BoxforInfo ${isvisible1 ? "moveout1" : ""}`}>
                    <div className="UpperBox">
                      <div className="ImgandName">
                        <a>
                          <img src="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg" />
                          {username}
                        </a>
                        <p>{address}</p>
                      </div>
                    </div>
                    <div className="BoxUnder">
                      <form className="formchange" onSubmit={onSubmit}>
                        <div className="elemetninform">
                          <label>Tên</label>
                          <input
                            type="text"
                            name="username"
                            value={username}
                            onChange={valueName}
                          />
                        </div>
                        <div className="elemetninform">
                          <label>Số điện thoại</label>
                          <input
                            type="text"
                            name="username"
                            value={phonenumber}
                            onChange={valuephonenumber}
                          />
                        </div>
                        <div className="elemetninform">
                          <label>Email</label>
                          <input
                            type="text"
                            name="username"
                            value={email}
                            onChange={valueEmail}
                          />
                        </div>
                        <div className="elemetninform">
                          <label>Địa chỉ</label>
                          <input
                            type="text"
                            name="username"
                            value={address}
                            onChange={valueaddress}
                          />
                        </div>
                        <div className="btnupdate1">
                          {" "}
                          <button type="submit">Cập nhật</button>
                        </div>
                        <div className="btnupdate2">
                          {" "}
                          <button type="submit">Hủy</button>
                        </div>
                      </form>
                    </div>
                  </div>
                }

                <div className={`BoxforInfo ${isvisible2 ? "moveout2" : ""}`}>
                  <div className="UpperBox">
                    <div className="ImgandName">
                      <a>
                        <img src="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg" />
                        {username}
                      </a>
                      <p>{""}</p>
                    </div>
                  </div>
                  <div className="BoxUnder">
                    <h3>Thay đổi mật khẩu</h3>
                    <div className="formchange2">
                      <div className="elemetninform">
                        <label>
                          Mật khẩu cũ<span>*</span>
                        </label>
                        <input
                          type="text"
                          name="username"
                          placeholder="Nhập mật khẩu cũ"
                          value={oldepassword}
                          onChange={(e) => {
                            setepassword(e.target.value);
                          }}
                        />
                      </div>
                      <div className="elemetninform">
                        <label>
                          Mật khẩu mới
                          <span>*{wwordConfirm}</span>
                        </label>
                        <input
                          type="password"
                          name="username"
                          value={newpass}
                          placeholder="Nhập mật khẩu mới"
                          onChange={(e) => {
                            setpass(e.target.value);
                          }}
                        />
                      </div>
                      <div className="elemetninform">
                        <label>
                          Xác nhận mật khẩu mới<span>*</span>
                        </label>
                        {wwordConfirm2}
                        <input
                          type="password"
                          name="username"
                          value={newpassConfirm}
                          placeholder="Xác nhận mật khẩu mới"
                          onChange={(e) => {
                            setpassConfirm(e.target.value);
                          }}
                        />
                      </div>

                      <div className="btnupdate1">
                        {" "}
                        <button type="submit">Cập nhật</button>
                      </div>
                      <div className="btnupdate2">
                        {" "}
                        <button type="" onClick={CancelAll}>
                          Hủy
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}
export default Userinfo;
