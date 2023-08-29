import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import homeicon from "../imagess/homeicon.png";
import { Appcontext } from "../Contexxt/Appcontext";
import { ClassContext } from "../Contexxt/ClassContext";
function Listmenu() {
  const listclass = [
    {
      class: 1,
    },
    {
      class: 2,
    },
    {
      class: 3,
    },
    {
      class: 4,
    },
    {
      class: 5,
    },
    {
      class: 6,
    },
    {
      class: 7,
    },
    {
      class: 8,
    },
    {
      class: 9,
    },
    {
      class: 10,
    },
    {
      class: 11,
    },
    {
      class: 12,
    },
  ];
  const { idexseleac, setwwordClass, setindex } = useContext(ClassContext);
  return (
    <div>
      {" "}
      <div className="menu1">
        <div className="listword">
          <a className="home">
            <i
              class="fa-solid fa-graduation-cap"
              style={{ color: "#3E606F", fontSize: "2rem" }}
            ></i>
            MỤC LỤC
          </a>
          <h5>GIÁO ÁN HỌC CƠ BẢN</h5>
        </div>
        <div className="liststudy">
          <ul>
            {listclass.map((listclass, index) => (
              <li key={index}>
                <Link
                  to="/allcources"
                  className={`${
                    idexseleac === index
                      ? `classname-selected`
                      : `classname-selected-${listclass.class}`
                  }`}
                  onClick={() => {
                    setwwordClass(listclass.class);
                    setindex(index);
                    // console.log("sdfasdf");
                  }}
                >
                  Lớp {listclass.class}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="menu2">
        <div className="listword2">
          <h1 className="btnon">
            <i
              class="fa-solid fa-book-open-reader"
              style={{
                fontSize: "2rem",
                paddingRight: "5px",
                color: "#1D3E53",
              }}
            ></i>
            ÔN THI
          </h1>
          <h4>Lộ trình ôn thi các khóa</h4>
        </div>
        <div className="liststudy2">
          <ul>
            <li>
              <a href="">
                <Link to="/test9to10">Đề thi lớp 9 lên 10</Link>
              </a>
            </li>
            <li>
              <a href="">
                <Link to="/collegetest">Đề thi THPT quốc gia</Link>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="menu3">
        <div className="listword3">
          <h1 className="btnluyen">
            <i
              class="fa-regular fa-address-book"
              style={{ fontSize: "2rem" }}
            ></i>
            LUYỆN ĐỀ
          </h1>
          <h4>Các dạng đề hay qua các năm</h4>
        </div>
        <div className="liststudy3">
          <ul>
            <li>
              <Link to="/test">TOÁN</Link>
            </li>
            <li>
              {" "}
              <Link to="/test">VĂN</Link>
            </li>
            <li>
              {" "}
              <Link to="/test">TIẾNG VIỆT</Link>
            </li>
            <li>
              {" "}
              <Link to="/test">ANH</Link>
            </li>
            <li>
              {" "}
              <Link to="/test">VẬT LÍ</Link>
            </li>
            <li>
              {" "}
              <Link to="/test">HÓA HỌC</Link>
            </li>
            <li>
              {" "}
              <Link to="/test">SINH HỌC</Link>
            </li>
            <li>
              {" "}
              <Link to="/test">LỊCH SỬ</Link>
            </li>
            <li>
              {" "}
              <Link to="/test">ĐỊA LÍ</Link>
            </li>
            <li>
              {" "}
              <Link to="/test">GIÁO DỤC CÔNG DÂN</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Listmenu;
