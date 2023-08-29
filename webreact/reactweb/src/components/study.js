import React, { useState, useEffect, useContext } from "react";
import Navbar from "./FunctionforMainPage/Navbar";
import Listmenu from "./FunctionforMainPage/tabmain";
import {
  Creategrpinterfaces,
  Ads,
  BtnLoginSignup,
  Alertactice,
} from "./FunctionforMainPage/funtionforsignupAndlogin";
import "./Cssfile/style.css";
import team from "./imagess/team.png";
import cup from "./imagess/cup.png";
import logo from "./imagess/logo.png";
import facebookicon from "./imagess/facebook.png";
import gmialicon from "./imagess/gmail.png";
import telephone from "./imagess/telephone-call.png";
import Post from "./FunctionforMainPage/postcomments";
function Study() {
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
  const [searchforsubject, setsearch] = useState("");
  const userStatus = [
    {
      id: 1,
      name: "Lê Quang Nhã",
      subjects: "Toán học",
      time: 1,
      notes: "Giải giúp em bài trên được không ạ",
      image:
        "https://2.bp.blogspot.com/-N5M0I9_1tks/XkElu5uQXII/AAAAAAAAARs/s6sQJXhXzC8CtdmKO3dNv9wKnMAsodQBwCLcBGAsYHQ/s1600/trac-nghiem-gioi-han-1.png",
    },
    {
      id: 2,
      name: "Tạ Quang Anh",
      subjects: "Hóa học",
      time: 15,
      notes: "Giải giúp em bài trên được không ạ",
      image:
        "https://i.vdoc.vn/data/image/2023/03/07/16781982969496425815228314447288.jpg",
    },
    {
      id: 3,
      name: "Nguyễn Việt Hưng",
      subjects: "Toán học",
      time: 11,
      notes: "Giải giúp em bài trên được không ạ",
      image:
        "https://api.toploigiai.vn/uploads/anh-bai-viet/giai-toan-11-nang-cao/chuong-4-dai-so-va-giai-tich/giai-toan-11-nang-cao-bai-59-trang-178-dai-so-va-giai-tich.png",
    },
    {
      id: 4,
      name: "Trần Bảo Quân",
      subjects: "Vật lí",
      time: 3,
      notes: "Giải giúp em bài trên được không ạ",
      image:
        "https://assets.isu.pub/document-structure/221220100117-2285af387a32251e38e80d8589d7bfb5/v1/dcef8b126499e96486dbff629acf0020.jpeg",
    },
    {
      id: 5,
      name: "Nguyễn Bảo Ngọc",
      subjects: "Tiếng anh",
      time: 3,
      notes: "Giải giúp em bài trên được không ạ",
      image:
        "https://giaovienvietnam.com/wp-content/uploads/2021/02/Screen-Shot-2021-02-21-at-23.35.46.png",
    },
    {
      id: 6,
      name: "Khánh Linh",
      subjects: "Tiếng anh",
      time: 3,
      notes: "Giải giúp em bài trên được không ạ",
      image: "https://hocmai.vn/kho-tai-lieu/documents/1590396216/page-2.png",
    },
  ];
  const findsubjects = userStatus.filter((status) =>
    status.subjects.toLowerCase().includes(searchforsubject.toLowerCase())
  );
  return (
    <div className="study">
      <>
        <Navbar></Navbar>
        <Ads></Ads>
        <div className="container">
          <div className="main">
            {showArrow && (
              <div className="arrow">
                <a href="#">
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
                  <form action="" onSubmit={(e) => e.preventDefault()}>
                    <input
                      id="ask-place"
                      type="text"
                      onChange={(e) => setsearch(e.target.value)}
                      placeholder="Tìm kiếm môn cần hỏi...... "
                      required
                    />

                    <input type="submit" value="Search" />
                  </form>
                </div>
              </div>

              {findsubjects.map((user, index) => (
                <div
                  key={user.id}
                  // style={{ marginLeft: index % 2 === 0 ? "10rem" : "" }}
                  className="box1"
                >
                  <div
                    className="pic1"
                    style={{
                      backgroundColor: index % 2 === 0 ? "#1E90FF" : "pink",
                    }}
                  >
                    <ul>
                      <li>
                        <a>
                          <img width="40px" src={team} alt="" />
                          {user.name}
                        </a>
                      </li>
                      <li className="space">
                        <a href=""> {user.subjects}</a>
                      </li>
                      <li className="space">
                        <a href=""> {user.time} giờ trước </a>
                      </li>
                    </ul>
                  </div>
                  <div className="comment1">
                    <p>{user.notes}</p>
                    <a>
                      <img src={user.image} alt="" />
                    </a>
                  </div>
                </div>
              ))}
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
            <Alertactice></Alertactice>
          </div>
          <footer>
            <div className="footer" id="footer">
              <div className="last-page">
                <div className="place-for-ad" id="contact">
                  <div className="main-word" style={{ color: "white" }}>
                    <a>
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
export default Study;
