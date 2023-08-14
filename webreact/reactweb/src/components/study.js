import React, { useState, useEffect, useContext } from "react";
import Navbar from "./Navbar";
import Listmenu from "./tabmain";
import {
  Creategrpinterfaces,
  Ads,
  BtnLoginSignup,
} from "./funtionforsignupAndlogin";
import "./style.css";
import team from "./imagess/team.png";
import cup from "./imagess/cup.png";
import logo from "./imagess/logo.png";
import facebookicon from "./imagess/facebook.png";
import gmialicon from "./imagess/gmail.png";
import telephone from "./imagess/telephone-call.png";
import Post from "./postcomments";
import { AppProvider } from "./Contexxt/Appcontext";
function Study() {
  const [showArrow, setShowArrow] = useState(false);
  useEffect(() => {
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
    <div className="study">
      <AppProvider>
        <Navbar></Navbar>
        <Ads></Ads>
        <div className="container">
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
            <div className="infor" style={{ backgroundImage: "none" }}>
              <div className="outsideloginplace">
                <BtnLoginSignup></BtnLoginSignup>
                {/* <div className="login-place" id="login-place">
                  <div className="word">
                    <p>
                      Hãy tham gia vào để trở thành thành viên của
                      <strong>LEARN X2</strong> <br />
                      và tham gia hỏi đáp cùng các bạn khác!!!
                      <br />
                    </p>
                  </div>
                  <div className="login">
                    <button id="btn" onClick={clickappear}>
                      Đăng nhập
                    </button>
                    <button id="btn2" onClick={clickappear2}>
                      Đăng kí
                    </button>
                  </div>
                </div> */}
              </div>

              <div className="ask">
                <a href="">
                  {" "}
                  <img src={team} alt="" />
                  HỎI VÀ ĐÁP{" "}
                </a>
              </div>
              <div className="under-ask">
                <div className="ask-box">
                  <form action="">
                    <input
                      id="ask-place"
                      type="text"
                      placeholder="Tìm kiếm câu hỏi...... "
                      required
                    />
                    {/* <!-- <button>
                  <i className="fa-solid fa-magnifying-glass fa-lg"></i>
                </button> --> */}
                    <input type="submit" value="Search" />
                  </form>
                </div>
              </div>

              <div className="box1">
                <div className="pic1">
                  <ul>
                    <li>
                      <a>
                        <img width="40px" src={team} alt="" />
                        Lê Quang Nhã
                      </a>
                    </li>
                    <li className="space">
                      <a href=""> Toán học </a>
                    </li>
                    <li className="space">
                      <a href=""> 1 giờ trước </a>
                    </li>
                  </ul>
                </div>
                <div className="comment1">
                  <p>Giải giúp em bài trên được không ạ!!</p>
                  <a>
                    <img
                      src="https://2.bp.blogspot.com/-N5M0I9_1tks/XkElu5uQXII/AAAAAAAAARs/s6sQJXhXzC8CtdmKO3dNv9wKnMAsodQBwCLcBGAsYHQ/s1600/trac-nghiem-gioi-han-1.png"
                      alt=""
                    />
                  </a>
                </div>
              </div>
              <div className="box2">
                <div className="pic2">
                  <ul>
                    <li>
                      <a>
                        <img width="40px" src={team} alt="" />
                        Tạ Quang Anh
                      </a>
                    </li>
                    <li className="space">
                      <a> Hóa học </a>
                    </li>
                    <li className="space">
                      <a> 15 giờ trước </a>
                    </li>
                  </ul>
                </div>
                <div className="comment2">
                  <p>Có thể giúp em giải bài 2,3,4 được không ạ!!</p>
                  <a>
                    <img
                      src="https://i.vdoc.vn/data/image/2023/03/07/16781982969496425815228314447288.jpg"
                      alt=""
                    />
                  </a>
                </div>
              </div>
              <div className="box1">
                <div className="pic1">
                  <ul>
                    <li>
                      <a>
                        <img width="40px" src={team} alt="" />
                        Nguyễn Việt Hưng
                      </a>
                    </li>
                    <li className="space">
                      <a href=""> Toán học </a>
                    </li>
                    <li className="space">
                      <a href=""> 1 giờ trước </a>
                    </li>
                  </ul>
                </div>
                <div className="comment1">
                  <p>Em đang cần gấp đáp án cho bài dưới này ạ!!</p>
                  <a>
                    <img
                      src="https://api.toploigiai.vn/uploads/anh-bai-viet/giai-toan-11-nang-cao/chuong-4-dai-so-va-giai-tich/giai-toan-11-nang-cao-bai-59-trang-178-dai-so-va-giai-tich.png"
                      alt=""
                    />
                  </a>
                </div>
              </div>
              <div className="box2">
                <div className="pic2">
                  <ul>
                    <li>
                      <a>
                        <img width="40px" src={team} alt="" />
                        Trần Bảo Quân
                      </a>
                    </li>
                    <li className="space">
                      <a href=""> Vật Lí </a>
                    </li>
                    <li className="space">
                      <a href=""> 15 giờ trước </a>
                    </li>
                  </ul>
                </div>
                <div className="comment2">
                  <p>Giải thích bài dưới giúp em với ạ!!</p>
                  <a>
                    <img
                      src="https://assets.isu.pub/document-structure/221220100117-2285af387a32251e38e80d8589d7bfb5/v1/dcef8b126499e96486dbff629acf0020.jpeg"
                      alt=""
                    />
                  </a>
                </div>
              </div>
              <div className="line"></div>
              <div className="reward">
                <div className="iconre1">
                  <img src={cup} alt="" />
                </div>
                <div className="reward-word">
                  <h1>BẢNG VINH DANH</h1>
                </div>
                <div className="iconre2">
                  <img src={cup} alt="" />
                </div>
              </div>
              <div className="board">
                <div className="peo1">
                  <img
                    src="https://image.baogialai.com.vn/w840/dataimages/202207/original/images3171534_1.jpg"
                    alt=""
                  />
                  <h3>Dương Khánh Linh</h3>
                  <h5>Toán: 9.5 Văn: 8.75 Anh: 9.5</h5>
                </div>
                <div className="peo1">
                  <img
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2022/8/14/thu-khoa-1-7362-1660496226790395256435.jpg"
                    alt=""
                  />
                  <h3>Trần Bảo Quân</h3>
                  <h5>Toán: 8.75 Lí: 9.5 Anh: 9</h5>
                </div>
                <div className="peo1">
                  <img
                    src="https://static-images.vnncdn.net/files/publish/2022/8/23/z3664276784589-48b7f9aab1e867d6167f6dc60c6a0f88-1-112.jpg"
                    alt=""
                  />
                  <h3>Nguyễn Bảo Ngọc</h3>
                  <h5>Văn: 9 Sử: 9.5 Địa: 9.5</h5>
                </div>
                <div className="peo1">
                  <img
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2022/8/14/thu-khoa-1-7362-1660496226790395256435.jpg"
                    alt=""
                  />
                  <h3>Trần Chí Khanh</h3>
                  <h5>Toán: 8.75 Lí: 9.5 Anh: 9</h5>
                </div>
                <div className="peo1">
                  <img
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2022/8/14/thu-khoa-1-7362-1660496226790395256435.jpg"
                    alt=""
                  />
                  <h3>Trần Hoàng Quân</h3>
                  <h5>Toán: 8.75 Lí: 9.5 Anh: 9</h5>
                </div>
                <div className="peo1">
                  <img
                    src="https://static-images.vnncdn.net/files/publish/2022/8/23/z3664276784589-48b7f9aab1e867d6167f6dc60c6a0f88-1-112.jpg"
                    alt=""
                  />
                  <h3>Dương Khánh Ly</h3>
                  <h5>Văn: 9 Sử: 9.5 Địa: 9.5</h5>
                </div>
                <div className="peo1">
                  <img
                    src="https://static-images.vnncdn.net/files/publish/2022/8/23/z3664276784589-48b7f9aab1e867d6167f6dc60c6a0f88-1-112.jpg"
                    alt=""
                  />
                  <h3>Nguyễn Quỳnh Nga</h3>
                  <h5>Văn: 9 Sử: 9.5 Địa: 9.5</h5>
                </div>
                <div className="peo1">
                  <img
                    src="https://static-images.vnncdn.net/files/publish/2022/8/23/z3664276784589-48b7f9aab1e867d6167f6dc60c6a0f88-1-112.jpg"
                    alt=""
                  />
                  <h3>Đặng Quang Phúc</h3>
                  <h5>Văn: 9 Sử: 9.5 Địa: 9.5</h5>
                </div>
              </div>
              <div className="customer-cmt">
                <div className="cmt-word">
                  <div className="word-comment">
                    <p>Bình Luận</p>
                  </div>
                </div>
                <div className="place-cmt">
                  <Post />
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
            )} */}

            <div className="alert">
              <div className="alertword">
                <p>Bạn cần đăng nhập vào trang để xem tài liệu này</p>
                <a>OK</a>
              </div>
            </div>
            {/* {signupappear && (
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
export default Study;
