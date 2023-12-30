import React, { useState, useEffect, useContext } from "react";
import "./Cssfile/class1.css";
import Navbar from "./FunctionforMainPage/Navbar";
import {
  Creategrpinterfaces,
  BtnLoginSignup,
  Alertactice,
} from "./FunctionforMainPage/funtionforsignupAndlogin";
import { Ads } from "./FunctionforMainPage/Ads";

import Listmenu from "./FunctionforMainPage/tabmain";
import logo from "./imagess/logo.png";
import facebookicon from "./imagess/facebook.png";
import gmialicon from "./imagess/gmail.png";
import telephone from "./imagess/telephone-call.png";
import powerponticon from "./imagess/powerpoint.png";
import { ClassContext } from "./Contexxt/ClassContext";
import { Appcontext } from "./Contexxt/Appcontext";
function Allclass() {
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
  const { appear } = useContext(Appcontext);
  const { setalertactive, setwordalert } = useContext(ClassContext);
  const handleDown = (event) => {
    event.preventDefault();
    if (appear === true) {
      setalertactive(true);
      setwordalert("Bạn cần đăng nhập vào để tải");
      setTimeout(() => {
        setalertactive(false);
      }, 2000);
    }
  };
  const highschoolsubs = [
    "Ngữ văn",
    "Toán",
    "Vật Lí",
    "Hóa học",
    "Sinh học",
    "Lịch Sử",
    "Địa Lí",
    "Kinh tế & Pháp luật",
    "Tin học",
    "Công nghệ",
    "Giáo dục quốc phòng",
    "Hoạt động trải nghiệm",
  ];
  const secondsubs = [
    "Ngữ văn",
    "Toán",
    "Khoa học tự nhiên",
    "Hóa học",
    "Lịch Sử",
    "Địa Lí",
    "Âm nhạc",
    "Tin học",
    "Công nghệ",
    "Giáo dục công dân",
    "Hoạt động trải nghiệm",
  ];
  const primarysubs = [
    "Tiếng Việt",
    "Toán",
    "Tự nhiên & Xã hội",
    "Đạo Đức",
    " Hoạt động trải nghiệm",
    "Âm nhạc",
  ];
  const Load = ["Loading"];
  const { wordclass, changeClass, setchangeClass } = useContext(ClassContext);
  const changforhischool = () => {
    if (
      wordclass === 1 ||
      wordclass === 2 ||
      wordclass === 3 ||
      wordclass === 4 ||
      wordclass === 5
    ) {
      setchangeClass(primarysubs);
    } else if (
      wordclass === 6 ||
      wordclass === 7 ||
      wordclass === 8 ||
      wordclass === 9
    ) {
      setchangeClass(secondsubs);
    } else if (wordclass === 10 || wordclass === 11 || wordclass === 12) {
      setchangeClass(highschoolsubs);
    }
  };
  useEffect(() => {
    changforhischool();
  }, [wordclass]);
  return (
    <div className="Allclass">
      <Navbar></Navbar>
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
            <div className="outsideloginplace">
              <BtnLoginSignup></BtnLoginSignup>
            </div>
            <div className="wordsources">
              <h1 className="text-3xl font-bold underline">Hello world!</h1>
              <a>TÀI LIỆU</a>
            </div>
            <div className="open">
              <h1>Giáo án PowerPoint tất cả các môn từ lớp 1 đến lớp 12</h1>
            </div>
            <div className="body">
              <div className="insidebody">
                <div className="allinside"></div>
              </div>
              <div className="Powerpoint" id="power1">
                <h1>Giáo án PowerPoint</h1>
              </div>
              <div className="underPowerpoint">
                <p>
                  Chúng tôi đã biên soạn giáo án pp rất ngắn gọn, bám sát khung
                  chương trình và đầy đủ lượng kiến thức cần truyền tải. Nhằm
                  tránh trường hợp có thể gặp trục trặc trong kết nối mạng dẫn
                  đến dạy không hết bài.
                </p>
                <p>
                  Bộ giáo án PowerPoint gồm tất cả các môn học từ tiểu học đến
                  trung học cơ sở như: Toán, Tiếng Việt, Âm nhạc, Mỹ thuật …
                </p>
              </div>
              {/* <div className="Powerpoint" id="power2">
                  <h1>Bộ giáo án PowerPoint gồm những gì?</h1>
                </div>
                <div className="underPowerpoint">
                  <p>
                    Bộ giáo án PowerPoint gồm tất cả các môn học từ tiểu học đến
                    trung học cơ sở như: Toán, Tiếng Việt, Âm nhạc, Mỹ thuật …
                  </p>
                </div> */}
              <div className="body2">
                <div className="Class-title">
                  <h1>
                    Lớp {wordclass} | Giáo án, Đề thi lớp {wordclass} (các môn
                    học)
                  </h1>
                </div>
                {changeClass.map((subs, index) => (
                  <div key={index} className="primary" id="physicthpt">
                    <div className="word1">
                      <p>Môn {subs}</p>
                    </div>
                    <div className="word3">
                      <p>Tải tài liệu miễn phí ở đây</p>
                    </div>
                    <div className="div-under">
                      <div className="placetodown">
                        <div className="iconimg">
                          <img src={powerponticon} alt="" />
                        </div>
                        <div className="nexttoicon">
                          <div className="wo">
                            <p>Giáo án PowerPoint Môn {subs}</p>
                          </div>
                          <div className="wo">
                            <i
                              className="fa-solid fa-cloud-arrow-down"
                              style={{ color: "#d60a0a" }}
                            ></i>
                            1 Tập Tin
                          </div>
                        </div>
                        <div className="download">
                          <button className="btndown">
                            <a
                              className="down"
                              href="/lEARNweb/powerpoint/Giáo Án.txt"
                              download
                              onClick={handleDown}
                            >
                              Tải xuống
                            </a>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="last">
            <Creategrpinterfaces></Creategrpinterfaces>
          </div>
          <Alertactice></Alertactice>
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
                    các hội nhóm. Cơ hội hợp tác cùng các bạn mới ra trường. Các
                    dạng đề ôn luyện thường xuyên được cập nhật.
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
              Copyright &copy; 2023 <span>VKU-Coder.</span>All Rights Reserved.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
export default Allclass;
