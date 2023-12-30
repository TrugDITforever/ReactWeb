import React, { useState, useEffect, useContext } from "react";
import Navbar from "./FunctionforMainPage/Navbar";
import Listmenu from "./FunctionforMainPage/tabmain";
import {
  Creategrpinterfaces,
  BtnLoginSignup,
  Alertactice,
} from "./FunctionforMainPage/funtionforsignupAndlogin";
import { PostGroup } from "./FunctionforMainPage/PostGroup";
import { Ads } from "./FunctionforMainPage/Ads";
import { PostStatus } from "./FunctionforMainPage/postStatus";
import "./Cssfile/style.css";
import team from "./imagess/team.png";
import cup from "./imagess/cup.png";
import mathpic from "./uploadfile/mathpic.png";
import logo from "./imagess/loggo.png";
import facebookicon from "./imagess/facebook.png";
import gmialicon from "./imagess/gmail.png";
import telephone from "./imagess/telephone-call.png";
import Post from "./FunctionforMainPage/postcomments";
import { Appcontext } from "./Contexxt/Appcontext";
import axios from "axios";
function Study() {
  const [showArrow, setShowArrow] = useState(false);
  const [searchforsubject, setsearch] = useState("");
  const [userStatus, setuserStatus] = useState([]);
  const { setpoststatus } = useContext(Appcontext);
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
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [showArrow]);
  // getdata from backend
  useEffect(() => {
    async function getdata() {
      const res = await axios.get("/v1/usestatus");
      return res;
    }
    getdata().then((res) => {
      setuserStatus(res.data.datastatus);
    });
  }, []);
  //searching place for statuss
  const findsubjects = userStatus.filter((status) =>
    status.subject.toLowerCase().includes(searchforsubject.toLowerCase())
  );
  // async function
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
              </div>
              <div className="ask">
                <a href="">
                  <img src={team} alt="" />
                  HỎI VÀ ĐÁP
                </a>
              </div>
              <div className="under-ask">
                <div className="ask-box">
                  <form id="search-form" onSubmit={(e) => e.preventDefault()}>
                    <input
                      id="ask-place"
                      type="text"
                      placeholder="Tìm kiếm môn học...... "
                      onChange={(e) => setsearch(e.target.value)}
                    />
                    <a>
                      <i className="fa-solid fa-magnifying-glass"></i>
                    </a>
                  </form>
                </div>
                <div className="btnpost">
                  <button
                    className="post-button"
                    onClick={() => {
                      setpoststatus(true);
                    }}
                  >
                    Đăng bài
                  </button>
                </div>
              </div>

              {findsubjects.map((user, index) => (
                <div key={user.id} className="box1">
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
                          {user.nameuser}
                        </a>
                      </li>
                      <li className="space">
                        <a href=""> {user.subject}</a>
                      </li>
                      <li className="space">
                        <a href=""> 1 giờ trước </a>
                      </li>
                    </ul>
                  </div>
                  <div className="comment1">
                    <p>{user.cmtStatus}</p>
                    <a>
                      <img
                        src={
                          user.image == null
                            ? "https://toanmath.com/wp-content/uploads/2017/03/bai-tap-trac-nghiem-mat-cau-hinh-cau-khoi-cau-nguyen-van-huy.png"
                            : mathpic
                        }
                        alt={`${user.image}`}
                      />
                    </a>
                  </div>
                  <div className="place_tolike">
                    <ul>
                      <li>
                        <i className="fa-solid fa-heart"></i>Thích
                      </li>
                      <li>
                        <i className="fa-regular fa-comment"></i>Trả lời
                      </li>
                      <li>
                        <i className="fa-regular fa-share-from-square"></i>Chia
                        sẻ
                      </li>
                    </ul>
                  </div>
                </div>
              ))}
              <div className="line"></div>
              <div className="reward">
                <div className="iconre1">
                  <img src={cup} alt="" />
                </div>
                <div className="reward-word">
                  <h1>Học sinh tiêu biểu</h1>
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
            <PostStatus />
            <div className="last">
              <Creategrpinterfaces></Creategrpinterfaces>
            </div>
            <PostGroup />
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
