import React, { useState, useEffect } from "react";
export function AppearforLoginAndSignup() {
  const [formappear, setupdateCLick] = useState(false);
  const [signupappear, setupdateCLick2] = useState(false);
  const [Creategrp, setupdateCLick3] = useState(false);
  const clickappear = () => {
    setupdateCLick(true);
    setupdateCLick2(false);
  };
  const clickappear2 = () => {
    setupdateCLick(false);
    setupdateCLick2(true);
  };
  const clickappear3 = () => {
    setupdateCLick(false);
    setupdateCLick2(false);
    setupdateCLick3(true);
  };
  const closeform = () => {
    setupdateCLick(false);
    setupdateCLick2(false);
    setupdateCLick3(false);
  };
  return {
    formappear,
    signupappear,
    Creategrp,
    clickappear,
    clickappear2,
    clickappear3,
    closeform,
  };
}

export function Creategrpinterfaces() {
  const { clickappear3, closeform, Creategrp, setupdateCLick3 } =
    AppearforLoginAndSignup();
  const [inputcre, updateCre] = useState("");
  const [getlink, setLink] = useState("");
  const [getnames, setname] = useState([]);
  const takeLink = (e) => {
    setLink(e.target.value);
  };
  const getvalue = (e) => {
    updateCre(e.target.value);
  };
  const createNew = (event) => {
    event.preventDefault();
    if (inputcre.trim() !== "") {
      setname((Newname) => [
        ...Newname,
        { id: getnames.length + 1, name: inputcre },
      ]);
    }
    setLink("");
    updateCre("");
    closeform();
  };
  return (
    <div className="cre">
      <div>
        <div className="create">
          <p>Tạo nhóm để học cùng nhau nhé!!!</p>
          <button className="btngroup" onClick={clickappear3}>
            <a>
              <img src="plus.png" alt="" />
              Tạo Nhóm
            </a>
          </button>
          <p>Nhóm phổ biến gần đây.</p>
        </div>
        <div className="group-main">
          <div className="group">
            <div className="group-img">
              <img
                src="https://xcdn-cf.vuihoc.vn/upload/5c209fe6176b0/2022/04/06/097a_khoi-d-gom-nhung-nganh-nao-1.png"
                alt=""
              />
            </div>
            <div className="gr-btn">
              <button>Tham Gia Ngay</button>
            </div>
          </div>
          <div className="group">
            <div className="group-img">
              <img
                src="https://static.ybox.vn/2020/12/1/1607335958957-lam-viec-nhom-hieu-qua.jpg"
                alt=""
              />
            </div>
            <div className="gr-btn">
              <button>Tham Gia Ngay</button>
            </div>
          </div>
          <p>Nhóm mới gần đây:</p>
          {getnames.map((getname) => (
            <div key={getname.id} className="group">
              <div className="group-img">
                <p style={{ margin: "0px" }}>{getname.name}</p>
                <img src={getlink} alt="" />
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
            onClick={closeform}
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
                value={inputcre}
                onChange={getvalue}
                id="username"
                name="username"
                required
              />
              <label for="decrip">Ảnh nhóm:</label>
              <input
                value={getlink}
                onChange={takeLink}
                type="text"
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
