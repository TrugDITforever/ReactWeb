import React, { useState, useEffect } from "react";
import "./class1.css";
import Navbar from "./Navbar";
import {
  Creategrpinterfaces,
  Ads,
  BtnLoginSignup,
} from "./funtionforsignupAndlogin";

import { AppProvider } from "./Contexxt/Appcontext";
import Listmenu from "./tabmain";
import logo from "./imagess/logo.png";
import facebookicon from "./imagess/facebook.png";
import gmialicon from "./imagess/gmail.png";
import telephone from "./imagess/telephone-call.png";
import powerponticon from "./imagess/powerpoint.png";
function Allclass() {
  const [showArrow, setShowArrow] = useState(false);
  useEffect(() => {
    // const arrow = document.querySelector(".arrow");
    const infor = document.querySelector(".infor");
    const handleScroll = () => {
      const scroll = infor.scrollTop;
      console.log(scroll);
      if (scroll >= 100) {
        setShowArrow(true);
      } else {
        setShowArrow(false);
      }
    };
    infor.addEventListener("scroll", handleScroll);
    return () => {
      infor.removeEventListener("scroll", handleScroll);
    };
  });
  return (
    <div className="Allclass">
      <AppProvider>
        <Navbar></Navbar>
        <div className="container">
          <Ads></Ads>
          <div className="main">
            {showArrow && (
              <div className="arrow">
                <a href="#login-place">
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
                <a>TÀI LIỆU</a>
              </div>
              <div className="open">
                <h1>Giáo án PowerPoint tất cả các môn từ lớp 1 đến lớp 12</h1>
              </div>
              <div className="body">
                <div className="insidebody">
                  <div className="allinside">
                    <div className="menu-class">
                      <span>MỤC LỤC</span>
                    </div>
                    <div className="source1">
                      <a href="#power1">
                        <span>1 Giáo án PowerPoint</span>
                      </a>
                    </div>
                    <div className="source1">
                      <a href="#power2">
                        <span>2 Bộ giáo án PowerPoint gồm những gì?</span>
                      </a>
                    </div>

                    <div className="cources" style={{ display: "block" }}>
                      <div className="courseinfor">
                        <div className="inforpart">
                          <a href="#th">
                            <span>2.1 Bậc tiểu học</span>
                          </a>
                        </div>
                        <div className="underINforcourse">
                          <a href="#l1">
                            <span>2.1.1 lớp 1 </span>
                          </a>
                        </div>
                      </div>

                      <div className="courseinfor">
                        <div className="inforpart">
                          <a href="#l1">
                            <span>
                              2.2 Giáo án PowerPoint lớp 1 tất cả các môn - Miễn
                              phí
                            </span>
                          </a>
                        </div>
                        <div className="underINforcourse">
                          <a href="#l2">
                            <span>2.2.1 lớp 2 </span>
                          </a>
                        </div>
                      </div>

                      <div className="courseinfor">
                        <div className="inforpart">
                          <a href="#l2">
                            <span>2.3 Giáo án PowerPoint lớp 2</span>
                          </a>
                        </div>
                        <div className="underINforcourse">
                          <a href="#l3">
                            <span>2.3.1 lớp 3 </span>
                          </a>
                        </div>
                      </div>

                      <div className="courseinfor">
                        <div className="inforpart">
                          <a href="#l3">
                            <span>2.4 Giáo án PowerPoint lớp 3</span>
                          </a>
                        </div>
                        <div className="underINforcourse">
                          <a href="#l4">
                            <span>2.4.1 lớp 4 </span>
                          </a>
                        </div>
                      </div>

                      <div className="courseinfor">
                        <div className="inforpart">
                          <a href="#l4">
                            <span>2.5 Giáo án PowerPoint lớp 4</span>
                          </a>
                        </div>
                        <div className="underINforcourse">
                          <a href="#l5">
                            <span>2.5.1 lớp 5 </span>
                          </a>
                        </div>
                      </div>

                      <div className="courseinfor">
                        <div className="inforpart">
                          <a href="#l5">
                            <span>2.6 Giáo án PowerPoint lớp 5</span>
                          </a>
                        </div>

                        <div className="courseinfor">
                          <div className="inforpart">
                            <a href="#thcs">
                              <span>2.7 Bậc THCS</span>
                            </a>
                          </div>
                          <div className="underINforcourse">
                            <a href="#musicthcs">
                              <span>2.7.1 Môn Âm Nhạc </span>
                            </a>
                          </div>
                        </div>

                        <div className="courseinfor">
                          <div className="inforpart">
                            <a href="#musicthcs">
                              <span>2.8 Giáo án PowerPoint môn Âm Nhạc</span>
                            </a>
                          </div>
                          <div className="underINforcourse">
                            <a href="#cnthcs">
                              <span>2.8.1 Môn Công Nghệ </span>
                            </a>
                          </div>
                        </div>

                        <div className="courseinfor">
                          <div className="inforpart">
                            <a href="#cnthcs">
                              <span>2.9 Giáo án PowerPoint môn Công Nghệ</span>
                            </a>
                          </div>
                          <div className="underINforcourse">
                            <a href="#geothcs">
                              <span>2.9.1 Môn Địa Lý </span>
                            </a>
                          </div>
                        </div>

                        <div className="courseinfor">
                          <div className="inforpart">
                            <a href="#geothcs">
                              <span>2.10 Giáo án PowerPoint môn Địa Lý</span>
                            </a>
                          </div>
                          <div className="underINforcourse">
                            <a href="#cdthcs">
                              <span>2.10.1 Môn GDCD </span>
                            </a>
                          </div>
                        </div>

                        <div className="courseinfor">
                          <div className="inforpart">
                            <a href="#cdthcs">
                              <span>2.11 Giáo án PowerPoint môn GDCD</span>
                            </a>
                          </div>
                          <div className="underINforcourse">
                            <a href="#hhthcs">
                              <span>2.11.1 Môn Hóa Học </span>
                            </a>
                          </div>
                        </div>

                        <div className="courseinfor">
                          <div className="inforpart">
                            <a href="#hhthcs">
                              <span>2.12 Giáo án PowerPoint môn Hóa Học</span>
                            </a>
                          </div>
                          <div className="underINforcourse">
                            <a href="#histhcs">
                              <span>2.12.1 Môn Lịch Sử </span>
                            </a>
                          </div>
                        </div>

                        <div className="courseinfor">
                          <div className="inforpart">
                            <a href="#histhcs">
                              <span>2.13 Giáo án PowerPoint môn Lịch Sử</span>
                            </a>
                          </div>
                          <div className="underINforcourse">
                            <a href="#artthcs">
                              <span>2.13.1 Môn Mĩ Thuật </span>
                            </a>
                          </div>
                        </div>

                        <div className="courseinfor">
                          <div className="inforpart">
                            <a href="#artthcs">
                              <span>2.14 Giáo án PowerPoint môn Mĩ Thuật</span>
                            </a>
                          </div>
                          <div className="underINforcourse">
                            <a href="#litthcs">
                              <span>2.14.1 Môn Ngữ Văn </span>
                            </a>
                          </div>
                        </div>
                        <div className="courseinfor">
                          <div className="inforpart">
                            <a href="#litthcs">
                              <span>2.15 Giáo án PowerPoint môn Ngữ Văn</span>
                            </a>
                          </div>
                          <div className="underINforcourse">
                            <a href="#sinhthcs">
                              <span>2.15.1 Môn Sinh Học </span>
                            </a>
                          </div>
                        </div>

                        <div className="courseinfor">
                          <div className="inforpart">
                            <a href="#sinhthcs">
                              <span>2.16 Giáo án PowerPoint môn Sinh Học</span>
                            </a>
                          </div>
                          <div className="underINforcourse">
                            <a href="#engthcs">
                              <span>2.16.1 Môn Tiếng Anh </span>
                            </a>
                          </div>
                        </div>

                        <div className="courseinfor">
                          <div className="inforpart">
                            <a href="#engthcs">
                              <span>2.17 Giáo án PowerPoint môn Tiếng Anh</span>
                            </a>
                          </div>
                          <div className="underINforcourse">
                            <a href="#itthcs">
                              <span>2.17.1 Môn Tin Học </span>
                            </a>
                          </div>
                        </div>
                        <div className="courseinfor">
                          <div className="inforpart">
                            <a href="#itthcs">
                              <span>2.18 Giáo án PowerPoint môn Tin Học</span>
                            </a>
                          </div>
                          <div className="underINforcourse">
                            <a href="#maththcs">
                              <span>2.18.1 Môn Toán Học </span>
                            </a>
                          </div>
                        </div>
                        <div className="courseinfor">
                          <div className="inforpart">
                            <a href="#maththcs">
                              <span>2.19 Giáo án PowerPoint môn Toán Học</span>
                            </a>
                          </div>
                          <div className="underINforcourse">
                            <a href="#physicthcs">
                              <span>2.19.1 Môn Vật Lí </span>
                            </a>
                          </div>
                        </div>

                        <div className="courseinfor">
                          <div className="inforpart">
                            <a href="#physicthcs">
                              <span>2.20 Giáo án PowerPoint môn Vật Lí</span>
                            </a>
                          </div>
                        </div>
                        <div className="courseinfor">
                          <div className="inforpart">
                            <a href="#thpt">
                              <span>2.21 Bậc THPT</span>
                            </a>
                          </div>
                          <div className="underINforcourse">
                            <a href="#geothpt">
                              <span>2.21.1 Môn Địa Lý </span>
                            </a>
                          </div>
                        </div>

                        <div className="courseinfor">
                          <div className="inforpart">
                            <a href="#geothpt">
                              <span>2.22 Giáo án PowerPoint môn Địa Lý</span>
                            </a>
                          </div>
                          <div className="underINforcourse">
                            <a href="#cdthpt">
                              <span>2.22.1 Môn GDCD </span>
                            </a>
                          </div>
                        </div>

                        <div className="courseinfor">
                          <div className="inforpart">
                            <a href="#cdthpt">
                              <span>2.23 Giáo án PowerPoint môn GDCD</span>
                            </a>
                          </div>
                          <div className="underINforcourse">
                            <a href="#hhthpt">
                              <span>2.23.1 Môn Hóa Học </span>
                            </a>
                          </div>
                        </div>

                        <div className="courseinfor">
                          <div className="inforpart">
                            <a href="#hhthpt">
                              <span>2.24 Giáo án PowerPoint môn Hóa Học</span>
                            </a>
                          </div>
                          <div className="underINforcourse">
                            <a href="#histhpt">
                              <span>2.24.1 Môn Lịch Sử </span>
                            </a>
                          </div>
                        </div>

                        <div className="courseinfor">
                          <div className="inforpart">
                            <a href="#histhpt">
                              <span>2.25 Giáo án PowerPoint môn Lịch Sử</span>
                            </a>
                          </div>
                          <div className="underINforcourse">
                            <a href="#sinhthpt">
                              <span>2.25.1 Môn Sinh Học </span>
                            </a>
                          </div>
                        </div>

                        <div className="courseinfor">
                          <div className="inforpart">
                            <a href="#sinhthpt">
                              <span>2.26 Giáo án PowerPoint môn Sinh Học</span>
                            </a>
                          </div>
                          <div className="underINforcourse">
                            <a href="#engthpt">
                              <span>2.26.1 Môn Tiếng Anh </span>
                            </a>
                          </div>
                        </div>

                        <div className="courseinfor">
                          <div className="inforpart">
                            <a href="#engthpt">
                              <span>2.27 Giáo án PowerPoint môn Tiếng Anh</span>
                            </a>
                          </div>
                          <div className="underINforcourse">
                            <a href="#itthpt">
                              <span>2.27.1 Môn Tin Học </span>
                            </a>
                          </div>
                        </div>

                        <div className="courseinfor">
                          <div className="inforpart">
                            <a href="#itthpt">
                              <span>2.28 Giáo án PowerPoint môn Tin Học</span>
                            </a>
                          </div>
                          <div className="underINforcourse">
                            <a href="#physicthpt">
                              <span>2.28.1 Môn Vật Lí </span>
                            </a>
                          </div>
                        </div>

                        <div className="courseinfor">
                          <div className="inforpart">
                            <a href="#physicthpt">
                              <span>2.29 Giáo án PowerPoint môn Vật Lí</span>
                            </a>
                          </div>
                          <div className="underINforcourse">
                            <a href="#litthpt">
                              <span>2.29.1 Môn Ngữ Văn </span>
                            </a>
                          </div>
                        </div>

                        <div className="courseinfor">
                          <div className="inforpart">
                            <a href="#litthpt">
                              <span>2.30 Giáo án PowerPoint môn Ngữ Văn</span>
                            </a>
                          </div>
                          <div className="underINforcourse">
                            <a href="#maththpt">
                              <span>2.30.1 Môn Toán </span>
                            </a>
                          </div>
                        </div>

                        <div className="courseinfor">
                          <div className="inforpart">
                            <a href="#maththpt">
                              <span>2.31 Môn Toán</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
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
                </div>
                <div className="Powerpoint" id="power2">
                  <h1>Bộ giáo án PowerPoint gồm những gì?</h1>
                </div>
                <div className="underPowerpoint">
                  <p>
                    Bộ giáo án PowerPoint gồm tất cả các môn học từ tiểu học đến
                    trung học cơ sở như: Toán, Tiếng Việt, Âm nhạc, Mỹ thuật …
                  </p>
                </div>
                <div className="body2">
                  <div className="wordprimary" id="th">
                    <span>Bậc Tiểu Học </span>
                  </div>
                  <div className="primary" id="l1">
                    <div className="word1">
                      <p>Lớp 1</p>
                    </div>
                    <div className="word2">
                      <p>Tải tài liệu miễn phí ở đây</p>
                    </div>
                    <div className="div-under">
                      <div className="placetodown">
                        <div className="iconimg">
                          <img src={powerponticon} alt="" />
                        </div>
                        <div className="nexttoicon">
                          <div className="wo">
                            <p>Giáo án PowerPoint lớp 1 tất cả các môn</p>
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
                            >
                              Tải xuống
                            </a>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="primary" id="l2">
                    <div className="word1">
                      <p>Lớp 2</p>
                    </div>
                    <div className="word2">
                      <p>Tải tài liệu miễn phí ở đây</p>
                    </div>
                    <div className="div-under">
                      <div className="placetodown">
                        <div className="iconimg">
                          <img src={powerponticon} alt="" />
                        </div>
                        <div className="nexttoicon">
                          <div className="wo">
                            <p>Giáo án PowerPoint lớp 2</p>
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
                            >
                              Tải xuống
                            </a>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="primary" id="l3">
                    <div className="word1">
                      <p>Lớp 3</p>
                    </div>
                    <div className="word2">
                      <p>Tải tài liệu miễn phí ở đây</p>
                    </div>
                    <div className="div-under">
                      <div className="placetodown">
                        <div className="iconimg">
                          <img src={powerponticon} alt="" />
                        </div>
                        <div className="nexttoicon">
                          <div className="wo">
                            <p>Giáo án PowerPoint lớp 3</p>
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
                            >
                              Tải xuống
                            </a>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="primary" id="l4">
                    <div className="word1">
                      <p>Lớp 4</p>
                    </div>
                    <div className="word2">
                      <p>Tải tài liệu miễn phí ở đây</p>
                    </div>
                    <div className="div-under">
                      <div className="placetodown">
                        <div className="iconimg">
                          <img src={powerponticon} alt="" />
                        </div>
                        <div className="nexttoicon">
                          <div className="wo">
                            <p>Giáo án PowerPoint lớp 4</p>
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
                            >
                              Tải xuống
                            </a>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="primary" id="l5">
                    <div className="word1">
                      <p>Lớp 5</p>
                    </div>
                    <div className="word2">
                      <p>Tải tài liệu miễn phí ở đây</p>
                    </div>
                    <div className="div-under">
                      <div className="placetodown">
                        <div className="iconimg">
                          <img src={powerponticon} alt="" />
                        </div>
                        <div className="nexttoicon">
                          <div className="wo">
                            <p>Giáo án PowerPoint lớp 5</p>
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
                            >
                              Tải xuống
                            </a>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="wordprimary" id="thcs">
                    <span>Bậc THCS </span>
                  </div>

                  <div className="primary" id="musicthcs">
                    <div className="word1">
                      <p>Môn Âm Nhạc</p>
                    </div>
                    <div className="word2">
                      <p>Tải tài liệu miễn phí ở đây</p>
                    </div>
                    <div className="div-under">
                      <div className="placetodown">
                        <div className="iconimg">
                          <img src={powerponticon} alt="" />
                        </div>
                        <div className="nexttoicon">
                          <div className="wo">
                            <p>Giáo án PowerPoint Môn Âm Nhạc</p>
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
                            >
                              Tải xuống
                            </a>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="primary" id="cnthcs">
                    <div className="word1">
                      <p>Môn Công Nghệ</p>
                    </div>
                    <div className="word2">
                      <p>Tải tài liệu miễn phí ở đây</p>
                    </div>
                    <div className="div-under">
                      <div className="placetodown">
                        <div className="iconimg">
                          <img src={powerponticon} alt="" />
                        </div>
                        <div className="nexttoicon">
                          <div className="wo">
                            <p>Giáo án PowerPoint Môn Công Nghệ</p>
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
                            >
                              Tải xuống
                            </a>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="primary" id="geothcs">
                    <div className="word1">
                      <p>Môn Địa Lý</p>
                    </div>
                    <div className="word2">
                      <p>Tải tài liệu miễn phí ở đây</p>
                    </div>
                    <div className="div-under">
                      <div className="placetodown">
                        <div className="iconimg">
                          <img src={powerponticon} alt="" />
                        </div>
                        <div className="nexttoicon">
                          <div className="wo">
                            <p>Giáo án PowerPoint Môn Địa Lý</p>
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
                            >
                              Tải xuống
                            </a>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="primary" id="cdthcs">
                    <div className="word1">
                      <p>Môn GDCD</p>
                    </div>
                    <div className="word2">
                      <p>Tải tài liệu miễn phí ở đây</p>
                    </div>
                    <div className="div-under">
                      <div className="placetodown">
                        <div className="iconimg">
                          <img src={powerponticon} alt="" />
                        </div>
                        <div className="nexttoicon">
                          <div className="wo">
                            <p>Giáo án PowerPoint Môn GDCD</p>
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
                            >
                              Tải xuống
                            </a>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="primary" id="hhthcs">
                    <div className="word1">
                      <p>Môn Hóa Học</p>
                    </div>
                    <div className="word2">
                      <p>Tải tài liệu miễn phí ở đây</p>
                    </div>
                    <div className="div-under">
                      <div className="placetodown">
                        <div className="iconimg">
                          <img src={powerponticon} alt="" />
                        </div>
                        <div className="nexttoicon">
                          <div className="wo">
                            <p>Giáo án PowerPoint Môn Hóa Học</p>
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
                            >
                              Tải xuống
                            </a>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="primary" id="histhcs">
                    <div className="word1">
                      <p>Môn Lịch Sử</p>
                    </div>
                    <div className="word2">
                      <p>Tải tài liệu miễn phí ở đây</p>
                    </div>
                    <div className="div-under">
                      <div className="placetodown">
                        <div className="iconimg">
                          <img src={powerponticon} alt="" />
                        </div>
                        <div className="nexttoicon">
                          <div className="wo">
                            <p>Giáo án PowerPoint Môn Lịch Sử</p>
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
                            >
                              Tải xuống
                            </a>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="primary" id="artthcs">
                    <div className="word1">
                      <p>Môn Mĩ Thuật</p>
                    </div>
                    <div className="word2">
                      <p>Tải tài liệu miễn phí ở đây</p>
                    </div>
                    <div className="div-under">
                      <div className="placetodown">
                        <div className="iconimg">
                          <img src={powerponticon} alt="" />
                        </div>
                        <div className="nexttoicon">
                          <div className="wo">
                            <p>Giáo án PowerPoint Môn Mĩ Thuật</p>
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
                            >
                              Tải xuống
                            </a>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="primary" id="litthcs">
                    <div className="word1">
                      <p>Môn Ngữ Văn</p>
                    </div>
                    <div className="word2">
                      <p>Tải tài liệu miễn phí ở đây</p>
                    </div>
                    <div className="div-under">
                      <div className="placetodown">
                        <div className="iconimg">
                          <img src={powerponticon} alt="" />
                        </div>
                        <div className="nexttoicon">
                          <div className="wo">
                            <p>Giáo án PowerPoint Môn Ngữ Văn</p>
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
                            >
                              Tải xuống
                            </a>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="primary" id="sinhthcs">
                    <div className="word1">
                      <p>Môn Sinh Học</p>
                    </div>
                    <div className="word2">
                      <p>Tải tài liệu miễn phí ở đây</p>
                    </div>
                    <div className="div-under">
                      <div className="placetodown">
                        <div className="iconimg">
                          <img src={powerponticon} alt="" />
                        </div>
                        <div className="nexttoicon">
                          <div className="wo">
                            <p>Giáo án PowerPoint Môn Sinh Học</p>
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
                            >
                              Tải xuống
                            </a>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="primary" id="engthcs">
                    <div className="word1">
                      <p>Môn Tiếng Anh</p>
                    </div>
                    <div className="word2">
                      <p>Tải tài liệu miễn phí ở đây</p>
                    </div>
                    <div className="div-under">
                      <div className="placetodown">
                        <div className="iconimg">
                          <img src={powerponticon} alt="" />
                        </div>
                        <div className="nexttoicon">
                          <div className="wo">
                            <p>Giáo án PowerPoint Môn Tiếng Anh</p>
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
                            >
                              Tải xuống
                            </a>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="primary" id="itthcs">
                    <div className="word1">
                      <p>Môn Tin Học</p>
                    </div>
                    <div className="word2">
                      <p>Tải tài liệu miễn phí ở đây</p>
                    </div>
                    <div className="div-under">
                      <div className="placetodown">
                        <div className="iconimg">
                          <img src={powerponticon} alt="" />
                        </div>
                        <div className="nexttoicon">
                          <div className="wo">
                            <p>Giáo án PowerPoint Môn Tin Học</p>
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
                            >
                              Tải xuống
                            </a>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="primary" id="maththcs">
                    <div className="word1">
                      <p>Môn Toán Học</p>
                    </div>
                    <div className="word2">
                      <p>Tải tài liệu miễn phí ở đây</p>
                    </div>
                    <div className="div-under">
                      <div className="placetodown">
                        <div className="iconimg">
                          <img src={powerponticon} alt="" />
                        </div>
                        <div className="nexttoicon">
                          <div className="wo">
                            <p>Giáo án PowerPoint Môn Toán Học</p>
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
                            >
                              Tải xuống
                            </a>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="primary" id="physicthcs">
                    <div className="word1">
                      <p>Môn Vật Lí</p>
                    </div>
                    <div className="word2">
                      <p>Tải tài liệu miễn phí ở đây</p>
                    </div>
                    <div className="div-under">
                      <div className="placetodown">
                        <div className="iconimg">
                          <img src={powerponticon} alt="" />
                        </div>
                        <div className="nexttoicon">
                          <div className="wo">
                            <p>Giáo án PowerPoint Môn Vật Lí</p>
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
                            >
                              Tải xuống
                            </a>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="wordprimary" id="thpt">
                    <span>Bậc THPT </span>
                  </div>

                  <div className="primary" id="cnthpt">
                    <div className="word1">
                      <p>Môn Công Nghệ</p>
                    </div>
                    <div className="word2">
                      <p>Tải tài liệu miễn phí ở đây</p>
                    </div>
                    <div className="div-under">
                      <div className="placetodown">
                        <div className="iconimg">
                          <img src={powerponticon} alt="" />
                        </div>
                        <div className="nexttoicon">
                          <div className="wo">
                            <p>Giáo án PowerPoint Môn Công Nghệ</p>
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
                            >
                              Tải xuống
                            </a>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="primary" id="geothpt">
                    <div className="word1">
                      <p>Môn Địa Lý</p>
                    </div>
                    <div className="word2">
                      <p>Tải tài liệu miễn phí ở đây</p>
                    </div>
                    <div className="div-under">
                      <div className="placetodown">
                        <div className="iconimg">
                          <img src={powerponticon} alt="" />
                        </div>
                        <div className="nexttoicon">
                          <div className="wo">
                            <p>Giáo án PowerPoint Môn Địa Lý</p>
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
                            >
                              Tải xuống
                            </a>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="primary" id="cdthpt">
                    <div className="word1">
                      <p>Môn GDCD</p>
                    </div>
                    <div className="word2">
                      <p>Tải tài liệu miễn phí ở đây</p>
                    </div>
                    <div className="div-under">
                      <div className="placetodown">
                        <div className="iconimg">
                          <img src={powerponticon} alt="" />
                        </div>
                        <div className="nexttoicon">
                          <div className="wo">
                            <p>Giáo án PowerPoint Môn GDCD</p>
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
                            >
                              Tải xuống
                            </a>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="primary" id="hhthpt">
                    <div className="word1">
                      <p>Môn Hóa Học</p>
                    </div>
                    <div className="word2">
                      <p>Tải tài liệu miễn phí ở đây</p>
                    </div>
                    <div className="div-under">
                      <div className="placetodown">
                        <div className="iconimg">
                          <img src={powerponticon} alt="" />
                        </div>
                        <div className="nexttoicon">
                          <div className="wo">
                            <p>Giáo án PowerPoint Môn Hóa Học</p>
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
                            >
                              Tải xuống
                            </a>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="primary" id="histhpt">
                    <div className="word1">
                      <p>Môn Lịch Sử</p>
                    </div>
                    <div className="word2">
                      <p>Tải tài liệu miễn phí ở đây</p>
                    </div>
                    <div className="div-under">
                      <div className="placetodown">
                        <div className="iconimg">
                          <img src={powerponticon} alt="" />
                        </div>
                        <div className="nexttoicon">
                          <div className="wo">
                            <p>Giáo án PowerPoint Môn Lịch Sử</p>
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
                            >
                              Tải xuống
                            </a>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="primary" id="litthpt">
                    <div className="word1">
                      <p>Môn Ngữ Văn</p>
                    </div>
                    <div className="word2">
                      <p>Tải tài liệu miễn phí ở đây</p>
                    </div>
                    <div className="div-under">
                      <div className="placetodown">
                        <div className="iconimg">
                          <img src={powerponticon} alt="" />
                        </div>
                        <div className="nexttoicon">
                          <div className="wo">
                            <p>Giáo án PowerPoint Môn Ngữ Văn</p>
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
                            >
                              Tải xuống
                            </a>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="primary" id="sinhthpt">
                    <div className="word1">
                      <p>Môn Sinh Học</p>
                    </div>
                    <div className="word2">
                      <p>Tải tài liệu miễn phí ở đây</p>
                    </div>
                    <div className="div-under">
                      <div className="placetodown">
                        <div className="iconimg">
                          <img src={powerponticon} alt="" />
                        </div>
                        <div className="nexttoicon">
                          <div className="wo">
                            <p>Giáo án PowerPoint Môn Sinh Học</p>
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
                            >
                              Tải xuống
                            </a>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="primary" id="engthpt">
                    <div className="word1">
                      <p>Môn Tiếng Anh</p>
                    </div>
                    <div className="word2">
                      <p>Tải tài liệu miễn phí ở đây</p>
                    </div>
                    <div className="div-under">
                      <div className="placetodown">
                        <div className="iconimg">
                          <img src={powerponticon} alt="" />
                        </div>
                        <div className="nexttoicon">
                          <div className="wo">
                            <p>Giáo án PowerPoint Môn Tiếng Anh</p>
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
                            >
                              Tải xuống
                            </a>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="primary" id="itthpt">
                    <div className="word1">
                      <p>Môn Tin Học</p>
                    </div>
                    <div className="word2">
                      <p>Tải tài liệu miễn phí ở đây</p>
                    </div>
                    <div className="div-under">
                      <div className="placetodown">
                        <div className="iconimg">
                          <img src={powerponticon} alt="" />
                        </div>
                        <div className="nexttoicon">
                          <div className="wo">
                            <p>Giáo án PowerPoint Môn Tin Học</p>
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
                            >
                              Tải xuống
                            </a>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="primary" id="maththpt">
                    <div className="word1">
                      <p>Môn Toán Học</p>
                    </div>
                    <div className="word2">
                      <p>Tải tài liệu miễn phí ở đây</p>
                    </div>
                    <div className="div-under">
                      <div className="placetodown">
                        <div className="iconimg">
                          <img src={powerponticon} alt="" />
                        </div>
                        <div className="nexttoicon">
                          <div className="wo">
                            <p>Giáo án PowerPoint Môn Toán Học</p>
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
                            >
                              Tải xuống
                            </a>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="primary" id="physicthpt">
                    <div className="word1">
                      <p>Môn Vật Lí</p>
                    </div>
                    <div className="word2">
                      <p>Tải tài liệu miễn phí ở đây</p>
                    </div>
                    <div className="div-under">
                      <div className="placetodown">
                        <div className="iconimg">
                          <img src={powerponticon} alt="" />
                        </div>
                        <div className="nexttoicon">
                          <div className="wo">
                            <p>Giáo án PowerPoint Môn Vật Lí</p>
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
                            >
                              Tải xuống
                            </a>
                          </button>
                        </div>
                      </div>
                    </div>
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
            {/* {formappear && (
              <div className="Page-login">
                <i
                  className="fa-solid fa-circle-xmark"
                  onClick={closeform}
                  id="close"
                ></i>
                <form id="loginform">
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
                    <input type="text" id="username" name="username" required />
                    <label for="password">Mật khẩu:</label>
                    <input
                      type="password"
                      id="password"
                      name="password"
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
                    Chưa có tài khoản? <span id="movetosignup">Đăng kí</span>
                  </p>
                </div>
                <div className="other-option">
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
                </div>
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
                    <input
                      type="text"
                      id="username2"
                      name="username2"
                      required
                    />
                    <label for="password2">Mật khẩu:</label>
                    <input
                      type="password"
                      id="password2"
                      name="password2"
                      required
                    />
                    <label for="password3">Xác nhận pass:</label>
                    <input
                      type="password"
                      id="password3"
                      name="password3"
                      required
                    />
                    <label for="password4">Email:</label>
                    <input type="email" id="email" name="email" required />
                  </div>
                  <input id="login-btn2" type="submit" value="Đăng kí" />
                </form>
                <div className="Hasacc">
                  <p>
                    Đã có tài khoản <span id="btnmovetologin">Đăng nhập</span>
                  </p>
                </div>
                <div className="other-option">
                  <ul>
                    <li>
                      <a href="">
                        <i className="fa-brands fa-facebook fa-2xl"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            )}
            {Creategrp && (
              <div className="group-create">
                <i
                  className="fa-solid fa-circle-xmark"
                  id="close3"
                  onClick={closeform}
                ></i>
                <form>
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
                    <input type="text" id="username" name="username" required />
                    <label for="decrip">Mô tả:</label>
                    <input type="text" id="decrip" name="decrip" required />
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
            )} */}
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
      </AppProvider>
    </div>
  );
}
export default Allclass;
