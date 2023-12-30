import React, { useContext, useState } from "react";
import "./Cssfile/college.css";
import Navbar from "./FunctionforMainPage/Navbar";
import Listmenu from "./FunctionforMainPage/tabmain";
import {
  Creategrpinterfaces,
  BtnLoginSignup,
  Alertactice,
} from "./FunctionforMainPage/funtionforsignupAndlogin";
import { Ads } from "./FunctionforMainPage/Ads";
import logo from "./imagess/logo.png";
import facebookicon from "./imagess/facebook.png";
import gmialicon from "./imagess/gmail.png";
import telephone from "./imagess/telephone-call.png";
import { Appcontext } from "./Contexxt/Appcontext";
import { ClassContext } from "./Contexxt/ClassContext";
function CollegeTest() {
  const boxTest = [
    {
      id: 1,
      decrip:
        "Đề thi tham khảo kỳ thi THPT Quốc Gia Môn Toán năm 2022 của Bộ Giáo Dục và Đào Tạo có hướng dẫn giải chi tiết",
      title: "Toán học",
      images:
        "https://toanmath.com/wp-content/uploads/2022/07/de-thi-chinh-thuc-ky-thi-tot-nghiep-thpt-nam-2022-mon-toan.png",
    },
    {
      id: 2,
      decrip:
        "Đề thi tham khảo kỳ thi THPT Quốc Gia Môn Ngữ Văn năm 2022 của Bộ Giáo Dục và Đào Tạo có hướng dẫn giải chi tiết",
      title: "Ngữ Văn",
      images:
        "https://toanmath.com/wp-content/uploads/2022/07/de-thi-chinh-thuc-ky-thi-tot-nghiep-thpt-nam-2022-mon-toan.png",
    },
    {
      id: 3,
      decrip:
        "Đề thi tham khảo kỳ thi THPT Quốc Gia Môn Hóa học năm 2022 của Bộ Giáo Dục và Đào Tạo có hướng dẫn giải chi tiết",
      title: "Hóa học",
      images:
        "https://toanmath.com/wp-content/uploads/2022/07/de-thi-chinh-thuc-ky-thi-tot-nghiep-thpt-nam-2022-mon-toan.png",
    },
    {
      id: 4,
      decrip:
        "Đề thi tham khảo kỳ thi THPT Quốc Gia Môn Vật Lí năm 2022 của Bộ Giáo Dục và Đào Tạo có hướng dẫn giải chi tiết",
      title: "Vật Lí",
      images:
        "https://toanmath.com/wp-content/uploads/2022/07/de-thi-chinh-thuc-ky-thi-tot-nghiep-thpt-nam-2022-mon-toan.png",
    },
    {
      id: 5,
      decrip:
        "Đề thi tham khảo kỳ thi THPT Quốc Gia Môn Địa Lí năm 2022 của Bộ Giáo Dục và Đào Tạo có hướng dẫn giải chi tiết",
      title: "Địa Lí",
      images:
        "https://toanmath.com/wp-content/uploads/2022/07/de-thi-chinh-thuc-ky-thi-tot-nghiep-thpt-nam-2022-mon-toan.png",
    },
    {
      id: 6,
      decrip:
        "Đề thi tham khảo kỳ thi THPT Quốc Gia Môn GDCD năm 2022 của Bộ Giáo Dục và Đào Tạo có hướng dẫn giải chi tiết",
      title: "GDCD",
      images:
        "https://toanmath.com/wp-content/uploads/2022/07/de-thi-chinh-thuc-ky-thi-tot-nghiep-thpt-nam-2022-mon-toan.png",
    },
    {
      id: 7,
      decrip:
        "Đề thi tham khảo kỳ thi THPT Quốc Gia Môn Tiếng Anh năm 2022 của Bộ Giáo Dục và Đào Tạo có hướng dẫn giải chi tiết",
      title: "Tiếng Anh",
      images:
        "https://toanmath.com/wp-content/uploads/2022/07/de-thi-chinh-thuc-ky-thi-tot-nghiep-thpt-nam-2022-mon-toan.png",
    },
    {
      id: 8,
      decrip:
        "Đề thi tham khảo kỳ thi THPT Quốc Gia Môn Sinh Học năm 2022 của Bộ Giáo Dục và Đào Tạo có hướng dẫn giải chi tiết",
      title: "Sinh Học",
      images:
        "https://toanmath.com/wp-content/uploads/2022/07/de-thi-chinh-thuc-ky-thi-tot-nghiep-thpt-nam-2022-mon-toan.png",
    },
    {
      id: 9,
      decrip:
        "Đề thi tham khảo kỳ thi THPT Quốc Gia Môn Lịch Sử năm 2022 của Bộ Giáo Dục và Đào Tạo có hướng dẫn giải chi tiết",
      title: "Lịch Sử",
      images:
        "https://toanmath.com/wp-content/uploads/2022/07/de-thi-chinh-thuc-ky-thi-tot-nghiep-thpt-nam-2022-mon-toan.png",
    },
  ];
  const { appear } = useContext(Appcontext);
  const { setalertactive, setwordalert } = useContext(ClassContext);
  const [appeartest, setappeartest] = useState(false);
  const [images, setImages] = useState("");
  const { adsapper, setadsapper } = useContext(ClassContext);
  const handleCheck = (dataimage) => {
    if (appear === true) {
      setalertactive(true);
      setwordalert("Bạn cần đăng nhập vào để xem");
      setTimeout(() => {
        setalertactive(false);
      }, 2000);
    } else if (appear === false) {
      setadsapper(true);
      setappeartest(true);
      setImages(dataimage);
    }
  };
  const handleDown = (event) => {
    if (appear === true) {
      event.preventDefault();
      setalertactive(true);
      setwordalert("Bạn cần đăng nhập vào để tải");
      setTimeout(() => {
        setalertactive(false);
      }, 2000);
    }
  };

  return (
    <div className="CollegeTest">
      <>
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
                  {boxTest.map((item) => (
                    <div key={item.id} className="box">
                      <div>
                        <p>{item.decrip}</p>
                      </div>
                      <div className="title">
                        <i className="fa-regular fa-folder-open"> </i>
                        <span>{item.title}, Đề thi THPT quốc gia</span>
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
                          <a onClick={() => handleCheck(item.images)}>Review</a>
                        </div>
                        <div className="btndownn">
                          <a
                            className="down"
                            href="lEARNweb/powerpoint/Giáo Án.txt"
                            download
                            onClick={(event) => handleDown(event)}
                          >
                            Download
                          </a>
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

            <div className={`review ${appeartest ? "opacity" : ""}`}>
              <i
                className="fa-solid fa-circle-xmark"
                onClick={() => {
                  setadsapper(false);
                  setappeartest(false);
                }}
                style={{
                  position: "absolute",
                  right: 0,
                  zIndex: 10,
                  cursor: "pointer",
                }}
              ></i>
              <div className={`test ${appeartest ? "appearrr" : ""}`}>
                <img src={images} alt="" />
              </div>
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
export default CollegeTest;
