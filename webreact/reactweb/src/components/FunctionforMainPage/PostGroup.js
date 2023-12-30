import React, { useState, useEffect, useContext, useReducer } from "react";
import { Appcontext } from "../Contexxt/Appcontext";
export function PostGroup() {
  const { Creategrp } = useContext(Appcontext);
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
    updateCre("");
    closeform2();
  };
  return (
    <>
      {Creategrp && (
        <div className="group-create">
          <i
            className="fa-solid fa-circle-xmark"
            id="close3"
            onClick={closeform2}
          ></i>
          <form onSubmit={createNew}>
            <h4>TẠO NHÓM</h4>
            <div className="login-form" id="loginform">
              <label>Tên Nhóm:</label>
              <input
                type="text"
                onChange={getvalue}
                id="username"
                name="username"
                required
              />
              <label>Ảnh nhóm:</label>
              <input
                onChange={takeLink}
                type="file"
                placeholder="Hãy thả link ảnh vào đây"
                required
              />
              <label>Thành viên:</label>
              <input
                type="text"
                required
                placeholder="Nhập email của thành viên"
              />
            </div>
            <input id="login-btn" type="submit" value="Tạo Nhóm" />
          </form>
        </div>
      )}
    </>
  );
}
