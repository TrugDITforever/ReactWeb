import React from "react";
import "./college.css";
import Navbar from "./Navbar";
import Listmenu from "./tabmain";
import {
  Creategrpinterfaces,
  Ads,
  BtnLoginSignup,
} from "./funtionforsignupAndlogin";
import logo from "./imagess/logo.png";
import facebookicon from "./imagess/facebook.png";
import gmialicon from "./imagess/gmail.png";
import telephone from "./imagess/telephone-call.png";
import { AppProvider } from "./Contexxt/Appcontext";
function CollegeTest() {
  return (
    <div className="CollegeTest">
      <AppProvider>
        <Navbar></Navbar>
        <div className="container">
          <Ads></Ads>

          <div className="main">
            <div className="arrow">
              <a href="#login-place">
                <i className="fa-solid fa-arrow-up fa-2xl"></i>
              </a>
            </div>
            <div className="tab-main" id="tab-main">
              <Listmenu></Listmenu>
            </div>
            <div className="infor">
              <div className="outsideloginplace">
                <BtnLoginSignup></BtnLoginSignup>
              </div>

              <div className="all">
                <div className="wordd">
                  <h1>Đề thi THPT quốc gia</h1>
                  <p>có 4289 tài liệu</p>
                </div>
                <div className="placefortest">
                  <div className="box">
                    <div>
                      <p>
                        Đề thi tham khảo kỳ thi THPT Quốc Gia Môn Toán năm 2022
                        của Bộ Giáo Dục và Đào Tạo có hướng dẫn giải chi tiết
                      </p>
                    </div>
                    <div className="title">
                      <i className="fa-regular fa-folder-open"> </i>
                      <span>Toán học, Đề thi THPT quốc gia</span>
                    </div>
                    <div className="eyeandown">
                      <div className="eye">
                        <i className="fa-solid fa-eye"></i>
                        <span>8296</span>
                      </div>
                      <div className="downn">
                        <i className="fa-solid fa-download"></i>{" "}
                        <span>4002</span>
                      </div>
                    </div>
                    <div className="author">
                      <i
                        className="fa-solid fa-user fa-xl"
                        style={{ color: "#b7c6e1" }}
                      ></i>
                      <span>Tác Giả</span>
                    </div>
                    <div className="hidden">
                      <div className="read">
                        <a>Review</a>
                      </div>
                      <div className="btndownn">
                        <a className="down" href="./powerpoint/cources.txt">
                          Download
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="box">
                    <div>
                      <p>
                        Đề thi tham khảo kỳ thi THPT Quốc Gia Môn Ngữ Văn năm
                        2022 của Bộ Giáo Dục và Đào Tạo có hướng dẫn giải chi
                        tiết
                      </p>
                    </div>
                    <div className="title">
                      <i className="fa-regular fa-folder-open"> </i>
                      <span>Ngữ Văn, Đề thi THPT quốc gia</span>
                    </div>
                    <div className="eyeandown">
                      <div className="eye">
                        <i className="fa-solid fa-eye"></i>
                        <span>8296</span>
                      </div>
                      <div className="downn">
                        <i className="fa-solid fa-download"></i>{" "}
                        <span>4002</span>
                      </div>
                    </div>
                    <div className="author">
                      <i
                        className="fa-solid fa-user fa-xl"
                        style={{ color: "#b7c6e1" }}
                      ></i>
                      <span>Tác Giả</span>
                    </div>
                    <div className="hidden">
                      <div className="read">
                        <a>Review</a>
                      </div>
                      <div className="btndownn">
                        <a className="down" href="./powerpoint/cources.txt">
                          Download
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="box">
                    <div>
                      <p>
                        Đề thi tham khảo kỳ thi THPT Quốc Gia Môn Hóa học năm
                        2022 của Bộ Giáo Dục và Đào Tạo có hướng dẫn giải chi
                        tiết
                      </p>
                    </div>
                    <div className="title">
                      <i className="fa-regular fa-folder-open"> </i>
                      <span>Hóa học, Đề thi THPT quốc gia</span>
                    </div>
                    <div className="eyeandown">
                      <div className="eye">
                        <i className="fa-solid fa-eye"></i>
                        <span>8296</span>
                      </div>
                      <div className="downn">
                        <i className="fa-solid fa-download"></i>{" "}
                        <span>4002</span>
                      </div>
                    </div>
                    <div className="author">
                      <i
                        className="fa-solid fa-user fa-xl"
                        style={{ color: "#b7c6e1" }}
                      ></i>
                      <span>Tác Giả</span>
                    </div>
                    <div className="hidden">
                      <div className="read">
                        <a>Review</a>
                      </div>
                      <div className="btndownn">
                        <a className="down" href="./powerpoint/cources.txt" v>
                          Download
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="box">
                    <div>
                      <p>
                        Đề thi tham khảo kỳ thi THPT Quốc Gia Môn Vật Lí năm
                        2022 của Bộ Giáo Dục và Đào Tạo có hướng dẫn giải chi
                        tiết
                      </p>
                    </div>
                    <div className="title">
                      <i className="fa-regular fa-folder-open"> </i>
                      <span>Vật Lí, Đề thi THPT quốc gia</span>
                    </div>
                    <div className="eyeandown">
                      <div className="eye">
                        <i className="fa-solid fa-eye"></i>
                        <span>8296</span>
                      </div>
                      <div className="downn">
                        <i className="fa-solid fa-download"></i>{" "}
                        <span>4002</span>
                      </div>
                    </div>
                    <div className="author">
                      <i
                        className="fa-solid fa-user fa-xl"
                        style={{ color: "#b7c6e1" }}
                      ></i>
                      <span>Tác Giả</span>
                    </div>
                    <div className="hidden">
                      <div className="read">
                        <a>Review</a>
                      </div>
                      <div className="btndownn">
                        <a className="down" href="./powerpoint/cources.txt">
                          Download
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="box">
                    <div>
                      <p>
                        Đề thi tham khảo kỳ thi THPT Quốc Gia Môn Địa Lí năm
                        2022 của Bộ Giáo Dục và Đào Tạo có hướng dẫn giải chi
                        tiết
                      </p>
                    </div>
                    <div className="title">
                      <i className="fa-regular fa-folder-open"> </i>
                      <span>Địa Lí, Đề thi THPT quốc gia</span>
                    </div>
                    <div className="eyeandown">
                      <div className="eye">
                        <i className="fa-solid fa-eye"></i>
                        <span>8296</span>
                      </div>
                      <div className="downn">
                        <i className="fa-solid fa-download"></i>{" "}
                        <span>4002</span>
                      </div>
                    </div>
                    <div className="author">
                      <i
                        className="fa-solid fa-user fa-xl"
                        style={{ color: "#b7c6e1" }}
                      ></i>
                      <span>Tác Giả</span>
                    </div>
                    <div className="hidden">
                      <div className="read">
                        <a>Review</a>
                      </div>
                      <div className="btndownn">
                        <a className="down" href="./powerpoint/cources.txt">
                          Download
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="box">
                    <div>
                      <p>
                        Đề thi tham khảo kỳ thi THPT Quốc Gia Môn GDCD năm 2022
                        của Bộ Giáo Dục và Đào Tạo có hướng dẫn giải chi tiết
                      </p>
                    </div>
                    <div className="title">
                      <i className="fa-regular fa-folder-open"> </i>
                      <span>GDCD, Đề thi THPT quốc gia</span>
                    </div>
                    <div className="eyeandown">
                      <div className="eye">
                        <i className="fa-solid fa-eye"></i>
                        <span>8296</span>
                      </div>
                      <div className="downn">
                        <i className="fa-solid fa-download"></i>{" "}
                        <span>4002</span>
                      </div>
                    </div>
                    <div className="author">
                      <i
                        className="fa-solid fa-user fa-xl"
                        style={{ color: "#b7c6e1" }}
                      ></i>
                      <span>Tác Giả</span>
                    </div>
                    <div className="hidden">
                      <div className="read">
                        <a>Review</a>
                      </div>
                      <div className="btndownn">
                        <a className="down" href="./powerpoint/cources.txt">
                          Download
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="box">
                    <div>
                      <p>
                        Đề thi tham khảo kỳ thi THPT Quốc Gia Môn Tiếng Anh năm
                        2022 của Bộ Giáo Dục và Đào Tạo có hướng dẫn giải chi
                        tiết
                      </p>
                    </div>
                    <div className="title">
                      <i className="fa-regular fa-folder-open"> </i>
                      <span>Tiếng Anh, Đề thi THPT quốc gia</span>
                    </div>
                    <div className="eyeandown">
                      <div className="eye">
                        <i className="fa-solid fa-eye"></i>
                        <span>8296</span>
                      </div>
                      <div className="downn">
                        <i className="fa-solid fa-download"></i>{" "}
                        <span>4002</span>
                      </div>
                    </div>
                    <div className="author">
                      <i
                        className="fa-solid fa-user fa-xl"
                        style={{ color: "#b7c6e1" }}
                      ></i>
                      <span>Tác Giả</span>
                    </div>
                    <div className="hidden">
                      <div className="read">
                        <a>Review</a>
                      </div>
                      <div className="btndownn">
                        <a className="down" href="./powerpoint/cources.txt">
                          Download
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="box">
                    <div>
                      <p>
                        Đề thi tham khảo kỳ thi THPT Quốc Gia Môn Sinh Học năm
                        2022 của Bộ Giáo Dục và Đào Tạo có hướng dẫn giải chi
                        tiết
                      </p>
                    </div>
                    <div className="title">
                      <i className="fa-regular fa-folder-open"> </i>
                      <span>Sinh Học, Đề thi THPT quốc gia</span>
                    </div>
                    <div className="eyeandown">
                      <div className="eye">
                        <i className="fa-solid fa-eye"></i>
                        <span>8296</span>
                      </div>
                      <div className="downn">
                        <i className="fa-solid fa-download"></i>{" "}
                        <span>4002</span>
                      </div>
                    </div>
                    <div className="author">
                      <i
                        className="fa-solid fa-user fa-xl"
                        style={{ color: "#b7c6e1" }}
                      ></i>
                      <span>Tác Giả</span>
                    </div>
                    <div className="hidden">
                      <div className="read">
                        <a>Review</a>
                      </div>
                      <div className="btndownn">
                        <a className="down" href="./powerpoint/cources.txt">
                          Download
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="box">
                    <div>
                      <p>
                        Đề thi tham khảo kỳ thi THPT Quốc Gia Môn Lịch Sử năm
                        2022 của Bộ Giáo Dục và Đào Tạo có hướng dẫn giải chi
                        tiết
                      </p>
                    </div>
                    <div className="title">
                      <i className="fa-regular fa-folder-open"> </i>
                      <span>Lịch Sử, Đề thi THPT quốc gia</span>
                    </div>
                    <div className="eyeandown">
                      <div className="eye">
                        <i className="fa-solid fa-eye"></i>
                        <span>8296</span>
                      </div>
                      <div className="downn">
                        <i className="fa-solid fa-download"></i>{" "}
                        <span>4002</span>
                      </div>
                    </div>
                    <div className="author">
                      <i
                        className="fa-solid fa-user fa-xl"
                        style={{ color: "#b7c6e1" }}
                      ></i>
                      <span>Tác Giả</span>
                    </div>
                    <div className="hidden">
                      <div className="read">
                        <a>Review</a>
                      </div>
                      <div className="btndownn">
                        <a className="down" href="./powerpoint/cources.txt">
                          Download
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="last">
              <Creategrpinterfaces></Creategrpinterfaces>
            </div>

            <div className="review">
              <div className="test">
                <img
                  src="https://toanmath.com/wp-content/uploads/2022/07/de-thi-chinh-thuc-ky-thi-tot-nghiep-thpt-nam-2022-mon-toan.png"
                  alt=""
                />
              </div>
              <div className="test">
                <img
                  src="https://hou.edu.vn/files/anhbaiviet/Images/2019/Thang_06/Dap%20an%20Van%20THPT/Dap%20an%20Van%202019%20p1.png"
                  alt=""
                />
              </div>
              <div className="test">
                <img
                  src="https://media.kenhtuyensinh.vn/images/cms/2019/06/de-thi-mon-hoa-thpt-2019.png"
                  alt=""
                />
              </div>
              <div className="test">
                <img
                  src="https://tailieuhoctap.edu.vn/wp-content/uploads/2022/07/de-thi-ly-2019.jpg"
                  alt=""
                />
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
export default CollegeTest;
