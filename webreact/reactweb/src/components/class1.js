import React, { useState, useEffect, useContext } from "react";
import "./Cssfile/class1.css";
import Navbar from "./FunctionforMainPage/Navbar";
import {
  Creategrpinterfaces,
  Ads,
  BtnLoginSignup,
  Alertactice,
} from "./FunctionforMainPage/funtionforsignupAndlogin";

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
      setTimeout(() => {
        setchangeClass(primarysubs);
      }, 1000);
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
  });
  return (
    <div className="Allclass">
      <>
        <Navbar></Navbar>
        <div className="container">
          {/* <div role="status">
            <svg
              aria-hidden="true"
              class="inline w-10 h-10 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span class="sr-only">Loading...</span>
          </div> */}
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
                    Chúng tôi đã biên soạn giáo án pp rất ngắn gọn, bám sát
                    khung chương trình và đầy đủ lượng kiến thức cần truyền tải.
                    Nhằm tránh trường hợp có thể gặp trục trặc trong kết nối
                    mạng dẫn đến dạy không hết bài.
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
                  {changeClass.map((subs) => (
                    <div className="primary" id="physicthpt">
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
                      các hội nhóm. Cơ hội hợp tác cùng các bạn mới ra trường.
                      Các dạng đề ôn luyện thường xuyên được cập nhật.
                    </p>
                    <p1>
                      <strong>HỌC - HỌC NỮA - HỌC MÃI</strong>
                    </p1>
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
export default Allclass;
