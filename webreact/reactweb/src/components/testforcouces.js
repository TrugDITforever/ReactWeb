import React, { useState, useEffect } from "react";
import Navbar from "./FunctionforMainPage/Navbar";
import "./Cssfile/testforcourse.css";
import Listmenu from "./FunctionforMainPage/tabmain";
import {
  Creategrpinterfaces,
  Ads,
  BtnLoginSignup,
} from "./FunctionforMainPage/funtionforsignupAndlogin";
import logo from "./imagess/logo.png";
import homeicon from "./imagess/homeicon.png";
import facebookicon from "./imagess/facebook.png";
import gmialicon from "./imagess/gmail.png";
import telephone from "./imagess/telephone-call.png";
import { AppProvider } from "./Contexxt/Appcontext";
function Test() {
  const [showArrow, setShowArrow] = useState(false);
  useEffect(() => {
    const arrow = document.querySelector(".arrow");
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
  ///slideshow
  const colors = [
    "https://thuthuatnhanh.com/wp-content/uploads/2022/06/Hinh-anh-hoc-tap-chill.jpg",
    "https://i.pinimg.com/originals/a7/f7/0b/a7f70b0e09b4e48ded3a11786d583385.png",
    "https://images.unsplash.com/photo-1585832770485-e68a5dbfad52?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3R1ZHklMjBkZXNrfGVufDB8fDB8fHww&w=1000&q=80",
  ];
  const delay = 2500;
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === colors.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);
  return (
    <div className="home">
      <>
        <div className="App">
          <Navbar />
          <div className="container">
            <Ads></Ads>
            {showArrow && (
              <div className="arrow">
                <a href="#login-place">
                  <i className="fa-solid fa-arrow-up fa-2xl"></i>
                </a>
              </div>
            )}
            <div className="main">
              <div className="tab-main" id="tab-main">
                <Listmenu></Listmenu>
              </div>
              <div className="infor">
                <div className="outsideloginplace">
                  <BtnLoginSignup></BtnLoginSignup>
                </div>

                <div className="suround">
                  <div className="imagewelcome">
                    <div
                      className="slideshowsliders"
                      style={{
                        transform: `translate3d(${-index * 100}%, 0, 0)`,
                      }}
                    >
                      {colors.map((backgroundColor, index) => (
                        <div
                          className="slide"
                          key={index}
                          style={{ backgroundImage: `url(${backgroundColor})` }}
                        ></div>
                      ))}
                    </div>
                  </div>
                  <div className="menucource">
                    <ul>
                      <li>
                        <a href="#math">TOÁN</a>
                      </li>
                      <li>
                        <a href="#vietnamese">TIẾNG VIỆT</a>
                      </li>
                      <li>
                        <a href="">NGỮ VĂN</a>
                      </li>
                      <li>
                        <a href="">TIẾNG ANH</a>
                      </li>
                      <li>
                        <a href="">VẬT LÍ</a>
                      </li>
                      <li>
                        <a href="">HÓA HỌC</a>
                      </li>
                      <li>
                        <a href="">SINH HỌC</a>
                      </li>
                      <li>
                        <a href="">LỊCH SỬ</a>
                      </li>
                      <li>
                        <a href="">ĐỊA LÍ</a>
                      </li>
                      <li>
                        <a href="">GIÁO DỤC CÔNG DÂN</a>
                      </li>
                    </ul>
                  </div>
                  <div className="mathplace" id="math">
                    <div className="matthwo">
                      <h1>Môn Toán</h1>
                    </div>
                    <div className="courceplace">
                      <div className="courcewwo">
                        <h1>Bậc Tiểu Học</h1>
                      </div>
                      <div className="cources">
                        <div className="class">
                          <div
                            className="classwwo"
                            style={{
                              backgroundImage:
                                "url(https://eduvoice.in/wp-content/uploads/2019/05/Feature-Image.jpg)",
                            }}
                          ></div>
                          <p>Đề ôn luyện được chọn lọc và tham khảo</p>
                          <div className="nameclass">
                            <p>Lớp 1</p>
                          </div>
                          <div className="placetoodown">
                            <div className="arr2">
                              <ul>
                                <li>
                                  <i className="fa-solid fa-chevron-right"></i>
                                </li>
                                <li>
                                  <i className="fa-solid fa-chevron-right"></i>
                                </li>
                                <li>
                                  <i className="fa-solid fa-chevron-right"></i>
                                </li>
                                <li>
                                  <i className="fa-solid fa-chevron-right"></i>
                                </li>
                              </ul>
                            </div>
                            <div className="btndowwn">
                              <div className="btndoown">
                                <a
                                  className="down"
                                  href="./powerpoint/cources.txt"
                                >
                                  <span>Tải Xuống!</span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="class">
                          <div
                            className="classwwo"
                            style={{
                              backgroundImage:
                                "url(https://images.theconversation.com/files/387459/original/file-20210303-21-wlfmk4.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip)",
                            }}
                          ></div>
                          <p>Đề ôn luyện được chọn lọc và tham khảo</p>
                          <div className="nameclass">
                            <p>Lớp 2</p>
                          </div>
                          <div className="placetoodown">
                            <div className="arr2">
                              <ul>
                                <li>
                                  <i className="fa-solid fa-chevron-right"></i>
                                </li>
                                <li>
                                  <i className="fa-solid fa-chevron-right"></i>
                                </li>
                                <li>
                                  <i className="fa-solid fa-chevron-right"></i>
                                </li>
                                <li>
                                  <i className="fa-solid fa-chevron-right"></i>
                                </li>
                              </ul>
                            </div>
                            <div className="btndowwn">
                              <div className="btndoown">
                                <a
                                  className="down"
                                  href="./powerpoint/cources.txt"
                                >
                                  <span>Tải Xuống!</span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="class">
                          <div
                            className="classwwo"
                            style={{
                              backgroundImage:
                                "url(https://blog.pearsoninternationalschools.com/wp-content/uploads/2020/08/AL1333841_Original_1800x900-1132x670.jpg",
                            }}
                          ></div>
                          <p>Đề ôn luyện được chọn lọc và tham khảo</p>
                          <div className="nameclass">
                            <p>Lớp 3</p>
                          </div>
                          <div className="placetoodown">
                            <div className="arr2">
                              <ul>
                                <li>
                                  <i className="fa-solid fa-chevron-right"></i>
                                </li>
                                <li>
                                  <i className="fa-solid fa-chevron-right"></i>
                                </li>
                                <li>
                                  <i className="fa-solid fa-chevron-right"></i>
                                </li>
                                <li>
                                  <i className="fa-solid fa-chevron-right"></i>
                                </li>
                              </ul>
                            </div>
                            <div className="btndowwn">
                              <div className="btndoown">
                                <a
                                  className="down"
                                  href="./powerpoint/cources.txt"
                                >
                                  <span>Tải Xuống!</span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="class">
                          <div
                            className="classwwo"
                            style={{
                              backgroundImage:
                                "url(https://www.indystar.com/gcdn/presto/2020/08/14/PIND/54e29b13-e170-417b-8e95-c1d39cded87c-GettyImages-1219395590.jpg)",
                            }}
                          ></div>
                          <p>Đề ôn luyện được chọn lọc và tham khảo</p>
                          <div className="nameclass">
                            <p>Lớp 4</p>
                          </div>
                          <div className="placetoodown">
                            <div className="arr2">
                              <ul>
                                <li>
                                  <i className="fa-solid fa-chevron-right"></i>
                                </li>
                                <li>
                                  <i className="fa-solid fa-chevron-right"></i>
                                </li>
                                <li>
                                  <i className="fa-solid fa-chevron-right"></i>
                                </li>
                                <li>
                                  <i className="fa-solid fa-chevron-right"></i>
                                </li>
                              </ul>
                            </div>
                            <div className="btndowwn">
                              <div className="btndoown">
                                <a
                                  className="down"
                                  href="./powerpoint/cources.txt"
                                >
                                  <span>Tải Xuống!</span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="class">
                          <div
                            className="classwwo"
                            style={{
                              backgroundImage:
                                "url(https://www.indystar.com/gcdn/presto/2020/08/14/PIND/54e29b13-e170-417b-8e95-c1d39cded87c-GettyImages-1219395590.jpg)",
                              // Thêm các thuộc tính CSS khác nếu cần
                            }}
                          ></div>
                          <p>Đề ôn luyện được chọn lọc và tham khảo</p>
                          <div className="nameclass">
                            <p>Lớp 5</p>
                          </div>
                          <div className="placetoodown">
                            <div className="arr2">
                              <ul>
                                <li>
                                  <i className="fa-solid fa-chevron-right"></i>
                                </li>
                                <li>
                                  <i className="fa-solid fa-chevron-right"></i>
                                </li>
                                <li>
                                  <i className="fa-solid fa-chevron-right"></i>
                                </li>
                                <li>
                                  <i className="fa-solid fa-chevron-right"></i>
                                </li>
                              </ul>
                            </div>
                            <div className="btndowwn">
                              <div className="btndoown">
                                <a
                                  className="down"
                                  href="./powerpoint/cources.txt"
                                >
                                  <span>Tải Xuống!</span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="courceplace">
                      <div className="courcewwo">
                        <h1>Bậc Trung Học Cơ Sở</h1>
                      </div>
                      <div className="cources">
                        <div className="class">
                          <div
                            className="classwwo"
                            style={{
                              backgroundImage:
                                "url(https://www.indystar.com/gcdn/presto/2020/08/14/PIND/54e29b13-e170-417b-8e95-c1d39cded87c-GettyImages-1219395590.jpg)",
                              // Thêm các thuộc tính CSS khác nếu cần
                            }}
                          ></div>
                          <p>Đề ôn luyện được chọn lọc và tham khảo</p>
                          <div className="nameclass">
                            <p>Lớp 6</p>
                          </div>
                          <div className="placetoodown">
                            <div className="arr2">
                              <ul>
                                <li>
                                  <i className="fa-solid fa-chevron-right"></i>
                                </li>
                                <li>
                                  <i className="fa-solid fa-chevron-right"></i>
                                </li>
                                <li>
                                  <i className="fa-solid fa-chevron-right"></i>
                                </li>
                                <li>
                                  <i className="fa-solid fa-chevron-right"></i>
                                </li>
                              </ul>
                            </div>
                            <div className="btndowwn">
                              <div className="btndoown">
                                <a
                                  className="down"
                                  href="./powerpoint/cources.txt"
                                >
                                  <span>Tải Xuống!</span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="class">
                          <div
                            className="classwwo"
                            style={{
                              backgroundImage:
                                "url(https://www.indystar.com/gcdn/presto/2020/08/14/PIND/54e29b13-e170-417b-8e95-c1d39cded87c-GettyImages-1219395590.jpg)",
                              // Thêm các thuộc tính CSS khác nếu cần
                            }}
                          ></div>
                          <p>Đề ôn luyện được chọn lọc và tham khảo</p>
                          <div className="nameclass">
                            <p>Lớp 7</p>
                          </div>
                          <div className="placetoodown">
                            <div className="arr2">
                              <ul>
                                <li>
                                  <i className="fa-solid fa-chevron-right"></i>
                                </li>
                                <li>
                                  <i className="fa-solid fa-chevron-right"></i>
                                </li>
                                <li>
                                  <i className="fa-solid fa-chevron-right"></i>
                                </li>
                                <li>
                                  <i className="fa-solid fa-chevron-right"></i>
                                </li>
                              </ul>
                            </div>
                            <div className="btndowwn">
                              <div className="btndoown">
                                <a
                                  className="down"
                                  href="./powerpoint/cources.txt"
                                >
                                  <span>Tải Xuống!</span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="class">
                          <div
                            className="classwwo"
                            style={{
                              backgroundImage:
                                "url(https://www.indystar.com/gcdn/presto/2020/08/14/PIND/54e29b13-e170-417b-8e95-c1d39cded87c-GettyImages-1219395590.jpg)",
                              // Thêm các thuộc tính CSS khác nếu cần
                            }}
                          ></div>
                          <p>Đề ôn luyện được chọn lọc và tham khảo</p>
                          <div className="nameclass">
                            <p>Lớp 8</p>
                          </div>
                          <div className="placetoodown">
                            <div className="arr2">
                              <ul>
                                <li>
                                  <i className="fa-solid fa-chevron-right"></i>
                                </li>
                                <li>
                                  <i className="fa-solid fa-chevron-right"></i>
                                </li>
                                <li>
                                  <i className="fa-solid fa-chevron-right"></i>
                                </li>
                                <li>
                                  <i className="fa-solid fa-chevron-right"></i>
                                </li>
                              </ul>
                            </div>
                            <div className="btndowwn">
                              <div className="btndoown">
                                <a
                                  className="down"
                                  href="./powerpoint/cources.txt"
                                >
                                  <span>Tải Xuống!</span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="class">
                          <div
                            className="classwwo"
                            style={{
                              backgroundImage:
                                "url(https://www.indystar.com/gcdn/presto/2020/08/14/PIND/54e29b13-e170-417b-8e95-c1d39cded87c-GettyImages-1219395590.jpg)",
                              // Thêm các thuộc tính CSS khác nếu cần
                            }}
                          ></div>
                          <p>Đề ôn luyện được chọn lọc và tham khảo</p>
                          <div className="nameclass">
                            <p>Lớp 9</p>
                          </div>
                          <div className="placetoodown">
                            <div className="arr2">
                              <ul>
                                <li>
                                  <i className="fa-solid fa-chevron-right"></i>
                                </li>
                                <li>
                                  <i className="fa-solid fa-chevron-right"></i>
                                </li>
                                <li>
                                  <i className="fa-solid fa-chevron-right"></i>
                                </li>
                                <li>
                                  <i className="fa-solid fa-chevron-right"></i>
                                </li>
                              </ul>
                            </div>
                            <div className="btndowwn">
                              <div className="btndoown">
                                <a
                                  className="down"
                                  href="./powerpoint/cources.txt"
                                >
                                  <span>Tải Xuống!</span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="courceplace">
                      <div className="courcewwo">
                        <h1>Bậc Trung Học Phổ Thông</h1>
                      </div>
                      <div className="cources">
                        <div className="class">
                          <div
                            className="classwwo"
                            style={{
                              backgroundImage:
                                "url(https://www.indystar.com/gcdn/presto/2020/08/14/PIND/54e29b13-e170-417b-8e95-c1d39cded87c-GettyImages-1219395590.jpg)",
                              // Thêm các thuộc tính CSS khác nếu cần
                            }}
                          ></div>
                          <p>Đề ôn luyện được chọn lọc và tham khảo</p>
                          <div className="nameclass">
                            <p>Lớp 10</p>
                          </div>
                          <div className="placetoodown">
                            <div className="arr2">
                              <ul>
                                <li>
                                  <i className="fa-solid fa-chevron-right"></i>
                                </li>
                                <li>
                                  <i className="fa-solid fa-chevron-right"></i>
                                </li>
                                <li>
                                  <i className="fa-solid fa-chevron-right"></i>
                                </li>
                                <li>
                                  <i className="fa-solid fa-chevron-right"></i>
                                </li>
                              </ul>
                            </div>
                            <div className="btndowwn">
                              <div className="btndoown">
                                <a
                                  className="down"
                                  href="./powerpoint/cources.txt"
                                >
                                  <span>Tải Xuống!</span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="class">
                          <div
                            className="classwwo"
                            style={{
                              backgroundImage:
                                "url(https://www.indystar.com/gcdn/presto/2020/08/14/PIND/54e29b13-e170-417b-8e95-c1d39cded87c-GettyImages-1219395590.jpg)",
                              // Thêm các thuộc tính CSS khác nếu cần
                            }}
                          ></div>
                          <p>Đề ôn luyện được chọn lọc và tham khảo</p>
                          <div className="nameclass">
                            <p>Lớp 11</p>
                          </div>
                          <div className="placetoodown">
                            <div className="arr2">
                              <ul>
                                <li>
                                  <i className="fa-solid fa-chevron-right"></i>
                                </li>
                                <li>
                                  <i className="fa-solid fa-chevron-right"></i>
                                </li>
                                <li>
                                  <i className="fa-solid fa-chevron-right"></i>
                                </li>
                                <li>
                                  <i className="fa-solid fa-chevron-right"></i>
                                </li>
                              </ul>
                            </div>
                            <div className="btndowwn">
                              <div className="btndoown">
                                <a
                                  className="down"
                                  href="./powerpoint/cources.txt"
                                >
                                  <span>Tải Xuống!</span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="class">
                          <div
                            className="classwwo"
                            style={{
                              backgroundImage:
                                "url(https://www.indystar.com/gcdn/presto/2020/08/14/PIND/54e29b13-e170-417b-8e95-c1d39cded87c-GettyImages-1219395590.jpg)",
                              // Thêm các thuộc tính CSS khác nếu cần
                            }}
                          ></div>
                          <p>Đề ôn luyện được chọn lọc và tham khảo</p>
                          <div className="nameclass">
                            <p>Lớp 12</p>
                          </div>
                          <div className="placetoodown">
                            <div className="arr2">
                              <ul>
                                <li>
                                  <i className="fa-solid fa-chevron-right"></i>
                                </li>
                                <li>
                                  <i className="fa-solid fa-chevron-right"></i>
                                </li>
                                <li>
                                  <i className="fa-solid fa-chevron-right"></i>
                                </li>
                                <li>
                                  <i className="fa-solid fa-chevron-right"></i>
                                </li>
                              </ul>
                            </div>
                            <div className="btndowwn">
                              <div className="btndoown">
                                <a
                                  className="down"
                                  href="./powerpoint/cources.txt"
                                >
                                  <span>Tải Xuống!</span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mathplace" id="vietnamese">
                    <div className="matthwo">
                      <h1 style={{ backgroundColor: "cornflowerblue" }}>
                        Môn Tiếng Việt
                      </h1>
                    </div>
                    <div className="courceplace">
                      <div className="courcewwo">
                        <h1>Bậc Tiểu Học</h1>
                      </div>
                      <div className="cources">
                        <div className="class">
                          <div
                            className="classwwo"
                            style={{
                              backgroundImage:
                                "url(https://eduvoice.in/wp-content/uploads/2019/05/Feature-Image.jpg)",
                              // Thêm các thuộc tính CSS khác nếu cần
                            }}
                          ></div>
                          <p>Đề Tiếng Việt được chọn lọc và tham khảo</p>
                          <div className="nameclass">
                            <p>Lớp 1</p>
                          </div>
                          <div className="placetoodown">
                            <div className="arr2">
                              <ul>
                                <li>
                                  <i className="fa-solid fa-chevron-right"></i>
                                </li>
                                <li>
                                  <i className="fa-solid fa-chevron-right"></i>
                                </li>
                                <li>
                                  <i className="fa-solid fa-chevron-right"></i>
                                </li>
                                <li>
                                  <i className="fa-solid fa-chevron-right"></i>
                                </li>
                              </ul>
                            </div>
                            <div className="btndowwn">
                              <div className="btndoown">
                                <a
                                  className="down"
                                  href="./powerpoint/cources.txt"
                                >
                                  <span>Tải Xuống!</span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="class">
                          <div
                            className="classwwo"
                            style={{
                              backgroundImage:
                                "url(https://images.theconversation.com/files/387459/original/file-20210303-21-wlfmk4.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip)",
                              // Thêm các thuộc tính CSS khác nếu cần
                            }}
                          ></div>
                          <p>Đề Tiếng Việt được chọn lọc và tham khảo</p>
                          <div className="nameclass">
                            <p>Lớp 2</p>
                          </div>
                          <div className="placetoodown">
                            <div className="arr2">
                              <ul>
                                <li>
                                  <i className="fa-solid fa-chevron-right"></i>
                                </li>
                                <li>
                                  <i className="fa-solid fa-chevron-right"></i>
                                </li>
                                <li>
                                  <i className="fa-solid fa-chevron-right"></i>
                                </li>
                                <li>
                                  <i className="fa-solid fa-chevron-right"></i>
                                </li>
                              </ul>
                            </div>
                            <div className="btndowwn">
                              <div className="btndoown">
                                <a
                                  className="down"
                                  href="./powerpoint/cources.txt"
                                >
                                  <span>Tải Xuống!</span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="class">
                          <div
                            className="classwwo"
                            style={{
                              backgroundImage:
                                "url(https://images.theconversation.com/files/387459/original/file-20210303-21-wlfmk4.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip)",
                              // Thêm các thuộc tính CSS khác nếu cần
                            }}
                          ></div>
                          <p>Đề Tiếng Việt được chọn lọc và tham khảo</p>
                          <div className="nameclass">
                            <p>Lớp 3</p>
                          </div>
                          <div className="placetoodown">
                            <div className="arr2">
                              <ul>
                                <li>
                                  <i className="fa-solid fa-chevron-right"></i>
                                </li>
                                <li>
                                  <i className="fa-solid fa-chevron-right"></i>
                                </li>
                                <li>
                                  <i className="fa-solid fa-chevron-right"></i>
                                </li>
                                <li>
                                  <i className="fa-solid fa-chevron-right"></i>
                                </li>
                              </ul>
                            </div>
                            <div className="btndowwn">
                              <div className="btndoown">
                                <a
                                  className="down"
                                  href="./powerpoint/cources.txt"
                                >
                                  <span>Tải Xuống!</span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="class">
                          <div
                            className="classwwo"
                            style={{
                              backgroundImage:
                                "url(https://images.theconversation.com/files/387459/original/file-20210303-21-wlfmk4.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip)",
                              // Thêm các thuộc tính CSS khác nếu cần
                            }}
                          ></div>
                          <p>Đề Tiếng Việt được chọn lọc và tham khảo</p>
                          <div className="nameclass">
                            <p>Lớp 4</p>
                          </div>
                          <div className="placetoodown">
                            <div className="arr2">
                              <ul>
                                <li>
                                  <i className="fa-solid fa-chevron-right"></i>
                                </li>
                                <li>
                                  <i className="fa-solid fa-chevron-right"></i>
                                </li>
                                <li>
                                  <i className="fa-solid fa-chevron-right"></i>
                                </li>
                                <li>
                                  <i className="fa-solid fa-chevron-right"></i>
                                </li>
                              </ul>
                            </div>
                            <div className="btndowwn">
                              <div className="btndoown">
                                <a
                                  className="down"
                                  href="./powerpoint/cources.txt"
                                >
                                  <span>Tải Xuống!</span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="class">
                          <div
                            className="classwwo"
                            style={{
                              backgroundImage:
                                "url(https://images.theconversation.com/files/387459/original/file-20210303-21-wlfmk4.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip)",
                              // Thêm các thuộc tính CSS khác nếu cần
                            }}
                          ></div>
                          <p>Đề Tiếng Việt được chọn lọc và tham khảo</p>
                          <div className="nameclass">
                            <p>Lớp 5</p>
                          </div>
                          <div className="placetoodown">
                            <div className="arr2">
                              <ul>
                                <li>
                                  <i className="fa-solid fa-chevron-right"></i>
                                </li>
                                <li>
                                  <i className="fa-solid fa-chevron-right"></i>
                                </li>
                                <li>
                                  <i className="fa-solid fa-chevron-right"></i>
                                </li>
                                <li>
                                  <i className="fa-solid fa-chevron-right"></i>
                                </li>
                              </ul>
                            </div>
                            <div className="btndowwn">
                              <div className="btndoown">
                                <a
                                  className="down"
                                  href="./powerpoint/cources.txt"
                                >
                                  <span>Tải Xuống!</span>
                                </a>
                              </div>
                            </div>
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
                      <input
                        type="text"
                        id="username"
                        name="username"
                        required
                      />
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
              )} */}

              <div className="alert">
                <div className="alertword">
                  <p>Bạn cần đăng nhập vào trang để xem tài liệu này</p>
                  <a>OK</a>
                </div>
              </div>
              {/* {Creategrp && (
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
                      <input
                        type="text"
                        id="username"
                        name="username"
                        required
                      />
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
                        Trang web gồm những khóa học hay cho các bạn từ lớp 1
                        đến lớp 12. Môi trường trao đổi kiến thức trực tuyến. Đa
                        dạng các hội nhóm. Cơ hội hợp tác cùng các bạn mới ra
                        trường. Các dạng đề ôn luyện thường xuyên được cập nhật.
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
                  Reserved.(Do Quang Trung- Ta Quang Anh)
                </p>
              </div>
            </footer>
          </div>
        </div>
      </>
    </div>
  );
}
export default Test;
