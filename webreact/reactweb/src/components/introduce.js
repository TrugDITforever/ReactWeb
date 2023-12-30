import React, { useEffect, useState } from "react";
import "./Cssfile/introduc.css";
import logo from "./imagess/logo.png";
import facebookicon from "./imagess/facebook.png";
import gmialicon from "./imagess/gmail.png";
import telephone from "./imagess/telephone-call.png";
import { Link } from "react-router-dom";
function Introduce() {
  const [Move, setMove] = useState(false);
  const [Move2, setMove2] = useState(false);

  useEffect(() => {
    const Scrolldown = () => {
      const scrollDistance = window.scrollY;
      console.log(scrollDistance);
      if (scrollDistance >= 700 && scrollDistance <= 1300) {
        setMove(true);
      } else {
        setMove(false);
      }
    };
    window.addEventListener("scroll", Scrolldown);
    return () => {
      window.removeEventListener("scroll", Scrolldown);
    };
  });
  useEffect(() => {
    const Scrolldown2 = () => {
      const scrollDis = window.scrollY;
      console.log(scrollDis);
      if (scrollDis >= 1500 && scrollDis <= 1900) {
        setMove2(true);
      } else {
        setMove2(false);
      }
    };
    window.addEventListener("scroll", Scrolldown2);
    return () => {
      window.removeEventListener("scroll", Scrolldown2);
    };
  });
  return (
    <div>
      <header className="head">
        <div className="menu">
          <div className="logo">
            <a href="">
              <img src={logo} alt="" />
              LEARN X2
            </a>
          </div>
          <div className="slogan">
            <h1>LEARN BY YOURSELF</h1>
          </div>
        </div>
        <section className="tab-mainmenu">
          <div className="tabmenu">
            <ul id="listmainmenu">
              <li>
                <a href="#home">
                  <i className="fa-solid fa-house-circle-check"></i> Trang chủ{" "}
                </a>
              </li>
              <li>
                <a href="#about">
                  <i className="fa-solid fa-route"></i> Lộ Trình Học{" "}
                </a>
              </li>

              <li>
                <a href="#llast">
                  <i className="fa-solid fa-play"></i> Bắt đầu{" "}
                </a>
              </li>
              <li>
                <a href="#footer">
                  <i className="fa-solid fa-phone"></i> Liên hệ
                </a>
              </li>
            </ul>
            <div className="mobbilebtn">
              <i className="fa-solid fa-bars"></i>
            </div>
          </div>
        </section>
      </header>
      <div className="container">
        <div className="all2">
          <section className="start2" id="home">
            <div className="introduce">
              <div className="leftside">
                <div className="background">
                  <img
                    src="https://bohatala.com/wp-content/uploads/2020/07/Online-education-1.jpg"
                    alt=""
                  />
                </div>
                <div className="wordunder">
                  <h1>LEARN BY YOURSELF</h1>
                </div>
              </div>
              <div className="rightside">
                <div className="welcome2">
                  <h1>
                    CHÀO MỪNG MỌI NGƯỜI ĐẾN VỚI <span>LEARN X2</span>
                  </h1>
                  <p>
                    LearnX2 mang đến cho các bạn học những giáo án hay phục vụ
                    cho việc học, bên cạnh đó còn có các dạng đề dành cho các
                    lứa tuổi từ lớp 1 đến lớp 12
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="about" id="about">
            <div className="aboutt">
              <div className="understart">
                <div className="worrd">
                  <div className="shadow">
                    <p>LỘ TRÌNH HỌC</p>
                  </div>
                </div>
                <div className="primary2">
                  <div className="left-pri">
                    <div className="img1">
                      <img
                        className={Move ? "move1" : ""}
                        src="https://vnn-imgs-f.vgcloud.vn/2021/11/08/22/hoc-online-va-met-moi-zoom-doi-voi-tre-em-1.jpg"
                        alt=""
                      />
                    </div>
                    <div className="img2">
                      <img
                        className={Move ? "move2" : ""}
                        src="https://ktmt.vnmediacdn.com/stores/news_dataimages/nguyenthiluan/032020/10/11/in_article/3411_999999.png"
                        alt=""
                      />
                    </div>
                    <div className="img1">
                      <img
                        className={Move ? "move1" : ""}
                        src="https://saomaiedu.com/wp-content/uploads/2022/11/E-learning.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="right-pri">
                    <div className="openning">
                      <h1>LEARN X2 HỖ TRỢ CHO CÁC BẬC TH-THCS-THPT</h1>
                    </div>
                    <div className="part">
                      <div className="part1">
                        <img src="number-one.png" alt="" />
                      </div>
                      <div className="part2">
                        <div className="part2-move">
                          <div className="wordd">
                            <h1>Bậc Tiểu học</h1>
                            <p>Chương trình hỗ trợ giáo án cơ bản</p>
                          </div>
                          <div className="list-class">
                            <ul>
                              <li>Lớp 1</li>
                              <li>Lớp 2</li>
                              <li>Lớp 3</li>
                              <li>Lớp 4</li>
                              <li>Lớp 5</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="part">
                      <div className="part1">
                        <img src="number-2.png" alt="" />
                      </div>
                      <div className="part2">
                        <div className="part2-move">
                          <div className="wordd">
                            <h1>Bậc THCS</h1>
                            <p>Chương trình hỗ trợ giáo án cơ bản</p>
                          </div>
                          <div className="list-class">
                            <ul>
                              <li>Lớp 6</li>
                              <li>Lớp 7</li>
                              <li>Lớp 8</li>
                              <li>Lớp 9</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="part">
                      <div className="part1">
                        <img src="number-3.png" alt="" />
                      </div>
                      <div className="part2">
                        <div className="part2-move">
                          <div className="wordd">
                            <h1>Bậc THPT</h1>
                            <p>Chương trình hỗ trợ giáo án cơ bản</p>
                          </div>
                          <div className="list-class">
                            <ul>
                              <li>Lớp 10</li>
                              <li>Lớp 11</li>
                              <li>Lớp 12</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="next">
            <div className="mainnext">
              <div className="worrd">
                <div className="shadow">
                  <p>ÔN LUYỆN</p>
                </div>
              </div>
              <div className="undernext">
                <div className="leftnext">
                  <div className="word1">
                    <h1>ÔN LUYỆN THÔNG QUA CÁC DẠNG ĐỀ</h1>
                  </div>
                  <div className="word11">
                    <h1>LỘ TRÌNH</h1>
                  </div>
                  <div className="threeP">
                    <span>3P</span>
                  </div>
                  <div className="word3">
                    <h1 className={`opacity3 ${Move2 ? "appear" : ""}`}>
                      LỚP 12 VÀ ÔN LUYỆN THI THPT
                    </h1>
                  </div>
                  <div className="word2">
                    <h1 className={`opacity2 ${Move2 ? "bom1" : ""}`}>
                      LỚP 9 VÀ ÔN LUYỆN VÀO LỚP 10
                    </h1>
                  </div>
                  <div className="arroww">
                    <div className="arrow1">
                      <img src="number-111.png" alt="" />
                    </div>
                    <div className="arrow1">
                      <img src="number-22.png" alt="" />
                    </div>
                    <div className="arrow1">
                      <img src="number-33.png" alt="" />
                    </div>
                  </div>
                  <div className="linethr">
                    <i className="fa-sharp fa-solid fa-arrow-right fa-xl"></i>
                    <img className="schooll" src="school.png" alt="" />
                  </div>

                  <div className="arroww">
                    <div className="arrow1">
                      <h3>HỌC CHẮC NỀN TẢNG</h3>
                    </div>
                    <div className="arrow1">
                      <h3>LUYỆN THI CHUYÊN SÂU</h3>
                    </div>
                    <div className="arrow1">
                      <h3>LUYỆN ĐỀ CÁC DẠNG</h3>
                    </div>
                  </div>
                </div>
                <div className="rightnext">
                  <div className="mainnextt">
                    <div className="wrapper">
                      <div className="slideritems">
                        <img
                          src="https://cdn.doctailieu.com/images/2020/09/17/de-thi-thu-lop-9-len-10-lan-1-mon-toan-2020-rs650.jpg"
                          alt=""
                        />
                      </div>
                      <div className="slideritems">
                        <img
                          src="https://loga.vn/ImageSource/GoogleDrive/de-thi-thu-lan-1-mon-toan-lop-9-nam-hoc-2018-2019-co-dap-an-6939.png"
                          alt=""
                        />
                      </div>
                      <div className="slideritems">
                        <img
                          src="https://2.bp.blogspot.com/-B33uqf3-92I/XBrsHYsNh8I/AAAAAAAAOq8/O4DTv5pYAHQC2tbQp4w8rlVrXO1s6azQgCLcBGAs/s1600/_20181220_081003.JPG"
                          alt=""
                        />
                      </div>
                      <div className="slideritems">
                        <img
                          src="https://file.hstatic.net/200000232521/article/de-thi-hoc-ki-1-lop-9-mon-toan-quan-thanh-xuan-ha-noi-3-e1577152669573_c3a6e30f1eb54003833861de096609d7.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                  <div className="btnfornext">
                    <div className="nexxt">
                      <i className="fa-solid fa-caret-right"></i>
                    </div>
                    <div className="prev">
                      <i className="fa-solid fa-caret-left"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="lastt" id="llast">
            <div className="lastt2">
              <div className="alllast2">
                <div className="leftlast">
                  <div className="under-leftlast">
                    <div className="worddd">
                      <h1>Hãy cùng bắt đầu hành trình học mới nào!!!</h1>
                    </div>
                    <div className="allunder">
                      <div className="arr">
                        <ul>
                          <li>
                            <i className="fa-solid fa-angle-right"></i>
                          </li>
                          <li>
                            <i className="fa-solid fa-angle-right"></i>
                          </li>
                          <li>
                            <i className="fa-solid fa-angle-right"></i>
                          </li>
                          <li>
                            <i className="fa-solid fa-angle-right"></i>
                          </li>
                        </ul>
                      </div>
                      <div className="btnmove">
                        <a href="/">Bắt đầu</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="rightlast">
                  <div className="laptop">
                    <img
                      src="https://media.istockphoto.com/id/479520746/photo/laptop-with-blank-screen-on-white.jpg?s=170667a&w=0&k=20&c=A0W4jdBTMGKOp4xcknHH1KTdDQhT1pcQux87zx0n7bE="
                      alt=""
                    />
                  </div>
                  <div className="imglearn">
                    <img
                      src="https://scontent.fdad2-1.fna.fbcdn.net/v/t1.15752-9/352871190_2439560052875571_3535585719092284122_n.png?_nc_cat=108&ccb=1-7&_nc_sid=ae9488&_nc_ohc=MLHYomr2cCYAX-z72gF&_nc_ht=scontent.fdad2-1.fna&oh=03_AdRbwqWy7mtvIEZXg1_Tdqeq59PuheGT2mIwrQ0zoqycKA&oe=64AB0D17"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
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
              Copyright &copy; 2023 <span>VKU-Coder.</span>All Rights Reserved.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
export default Introduce;
