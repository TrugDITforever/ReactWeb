import React from "react";
import { Link } from "react-router-dom";
import "./Cssfile/style.css";
import homeicon from "./imagess/homeicon.png";
function Listmenu() {
  return (
    <div>
      {" "}
      <div className="menu1">
        <div className="listword">
          <a className="home">
            {/* <img src={homeicon} alt="" /> */}
            <i
              class="fa-solid fa-graduation-cap"
              style={{ color: "#3E606F", fontSize: "2rem" }}
            ></i>
            MỤC LỤC
          </a>
          <h5>GIÁO ÁN HỌC CƠ BẢN</h5>
          {/* <!-- <h5>Các khóa học dành cho các lớp</h5> --> */}
        </div>
        <div className="liststudy">
          <ul>
            <li>
              <a href="">
                <Link to="/allcources">Lớp 1</Link>
              </a>
            </li>
            <li>
              <a href="class1.html">
                {" "}
                <Link to="/allcources">Lớp 2</Link>
              </a>
            </li>
            <li>
              <a href="">
                {" "}
                <Link to="/allcources">Lớp 3</Link>
              </a>
            </li>
            <li>
              <a href=" ">
                {" "}
                <Link to="/allcources">Lớp 4</Link>
              </a>
            </li>
            <li>
              <a href=" ">
                {" "}
                <Link to="/allcources">Lớp 5</Link>
              </a>
            </li>
            <li>
              <a href=" ">
                {" "}
                <Link to="/allcources">Lớp 6</Link>
              </a>
            </li>
            <li>
              <a href=" ">
                {" "}
                <Link to="/allcources">Lớp 7</Link>
              </a>
            </li>
            <li>
              <a href=" ">
                {" "}
                <Link to="/allcources">Lớp 8</Link>
              </a>
            </li>
            <li>
              <a href=" ">
                {" "}
                <Link to="/allcources">Lớp 9</Link>
              </a>
            </li>
            <li>
              <a href=" ">
                {" "}
                <Link to="/allcources">Lớp 10</Link>
              </a>
            </li>
            <li>
              <a href=" ">
                {" "}
                <Link to="/allcources">Lớp 11</Link>
              </a>
            </li>
            <li>
              <a href=" ">
                {" "}
                <Link to="/allcources">Lớp 12</Link>
              </a>
            </li>
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
