import React, { useEffect, useState } from "react";
import "./Cssfile/test9to10.css";
import {
  Creategrpinterfaces,
  BtnLoginSignup,
} from "./FunctionforMainPage/funtionforsignupAndlogin";
import { Ads } from "./FunctionforMainPage/Ads";
import Listmenu from "./FunctionforMainPage/tabmain";
import Navbar from "./FunctionforMainPage/Navbar";
import logo from "./imagess/logo.png";
import facebookicon from "./imagess/facebook.png";
import gmialicon from "./imagess/gmail.png";
import telephone from "./imagess/telephone-call.png";
import { AppProvider } from "./Contexxt/Appcontext";
function Test9to10() {
  const [showArrow, setShowArrow] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scroll = window.scrollY;
      if (scroll >= 100) {
        setShowArrow(true);
      } else {
        setShowArrow(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    // return () => {
    //   window.removeEventListener("scroll", handleScroll);
    // };
  });
  return (
    <div className="Test9to10">
      <>
        <Navbar />
        <div className="container">
          <Ads></Ads>

          <div className="main">
            {showArrow && (
              <div className="arrow">
                <a href="# ">
                  <i className="fa-solid fa-arrow-up fa-2xl"></i>
                </a>
              </div>
            )}
            <div className="tab-main" id="tab-main">
              <Listmenu></Listmenu>
            </div>
            <div className="infor">
              <BtnLoginSignup></BtnLoginSignup>
              <div className="opening">
                <div className="topic">
                  <p>Tuyển tập đề thi vào 10</p>
                </div>
                <p>
                  Nhằm giúp các bạn ôn luyện và giành được kết quả cao trong kì
                  thi tuyển sinh vào lớp 10, LearnX2 biên soạn tuyển tập Đề thi
                  vào lớp 10 theo cấu trúc ra đề Trắc nghiệm - Tự luận mới. Cùng
                  với đó là các dạng bài tập hay có trong đề thi vào lớp 10. Hi
                  vọng tài liệu này sẽ giúp học sinh ôn luyện, củng cố kiến thức
                  và chuẩn bị tốt cho kì thi tuyển sinh vào lớp 10 môn Toán năm
                  2023.
                </p>
              </div>
              <div className="listtest">
                <div className="list">
                  <h3>Danh sách các đề thi</h3>
                </div>
                <div className="list-test">
                  <ul>
                    <li>
                      <a href="#de1">Đề ôn thi môn toán lớp 9 lên 10(đề 1)</a>
                    </li>
                    <li>
                      <a href="#de2">Đề ôn thi môn toán lớp 9 lên 10(đề 2)</a>
                    </li>
                    <li>
                      <a href="#de3">Đề ôn thi môn toán lớp 9 lên 10(đề 3)</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="all" id="de1">
                <div className="start">
                  <h1>Đề ôn thi môn toán lớp 9 lên 10(đề 1)</h1>
                </div>
                <div className="check">
                  <label>
                    <input type="checkbox" />
                    <span id="text">Đã hoàn thành</span>
                  </label>
                </div>

                <div className="placefortest">
                  <div className="dethi"></div>
                  <div className="exam1">
                    <img
                      src="https://phothongcaodang.fpt.edu.vn/wp-content/uploads/de1-1.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="all" id="de2">
                <div className="start">
                  <h1>Đề ôn thi môn toán lớp 9 lên 10(đề 2)</h1>
                </div>
                <div className="check">
                  <label>
                    <input type="checkbox" />
                    <span id="text">Đã hoàn thành</span>
                  </label>
                </div>
                <div className="placefortest">
                  <div className="dethi">{/* <h1>Đề Thi</h1> */}</div>
                  <div className="exam1">
                    <img
                      src="https://phothongcaodang.fpt.edu.vn/wp-content/uploads/de1-2.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="all" id="de3">
                <div className="start">
                  <h1>Đề ôn thi môn toán lớp 9 lên 10(đề 3)</h1>
                </div>
                <div className="check">
                  <label>
                    <input type="checkbox" />
                    <span id="text">Đã hoàn thành</span>
                  </label>
                </div>
                <div className="placefortest">
                  <div className="dethi">
                    <h1>Đề Thi</h1>
                  </div>
                  <div className="exam1">
                    <img
                      src="https://phothongcaodang.fpt.edu.vn/wp-content/uploads/de1-2.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="last">
              <Creategrpinterfaces></Creategrpinterfaces>
            </div>

            <div className="alert">
              <div className="alertword">
                <p>Bạn cần đăng nhập vào trang để xem tài liệu này</p>
                <a>OK</a>
              </div>
            </div>
          </div>
          <footer>
            <div className="footer" id="footer">
              <div className="last-page">
                <div className="place-for-ad" id="contact">
                  <div className="main-word" style={{ color: "white" }}>
                    <a href="#">
                      <img src={logo} alt="logo" />
                      LEARN X2
                    </a>
                    <p>
                      Trang web gồm những khóa học hay cho các bạn từ lớp 1 đến
                      lớp 12. Môi trường trao đổi kiến thức trực tuyến. Đa dạng
                      các hội nhóm. Cơ hội hợp tác cùng các bạn mới ra trường.
                      Các dạng đề ôn luyện thường xuyên được cập nhật.
                    </p>
                    <p>
                      <strong>HỌC - HỌC NỮA - HỌC MÃI</strong>
                    </p>
                  </div>
                </div>
                <div className="privacy">
                  <p>CHÍNH SÁCH</p>
                  <ul>
                    <li>Chính sách bảo mật</li>
                    <li>Chính sách đổi trả</li>

                    <li>Tuyển dụng</li>
                  </ul>
                </div>
                <div className="contact-menu">
                  <p>Liên hệ với chúng tôi</p>
                  <ul>
                    <li>
                      <a href="">
                        <img src={facebookicon} alt="" />
                        https://www.facebook.com/learnx2
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <img src={gmialicon} alt="" />
                        learnx2.vn@gmail.com
                      </a>
                    </li>
                    <li style={{ color: "white" }}>
                      <img src={telephone} alt="" />
                      0911163579
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="copyright">
              <p>
                Copyright &copy; 2023 <span>VKU-Coder.</span>All Rights
                Reserved.
              </p>
            </div>
          </footer>
        </div>
      </>
    </div>
  );
}
export default Test9to10;
