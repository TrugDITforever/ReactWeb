import React from "react";
import "./test9to10.css";
import AppearforLoginAndSignup from "./funtionforsignupAndlogin";
import Listmenu from "./tabmain";
import Navbar from "./Navbar";
import logo from "./imagess/logo.png";
import facebookicon from "./imagess/facebook.png";
import gmialicon from "./imagess/gmail.png";
import telephone from "./imagess/telephone-call.png";
function Test9to10() {
  const { formappear, signupappear, clickappear, clickappear2, closeform } =
    AppearforLoginAndSignup();
  return (
    <div className="Test9to10">
      <Navbar />
      <div className="container">
        <div className="ads"></div>

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
            <div className="login-place" id="login-place">
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
            </div>
            <div className="opening">
              <div className="topic">
                <p>Tuyển tập đề thi vào 10</p>
              </div>
              <p>
                Nhằm giúp các bạn ôn luyện và giành được kết quả cao trong kì
                thi tuyển sinh vào lớp 10, LearnX2 biên soạn tuyển tập Đề thi
                vào lớp 10 theo cấu trúc ra đề Trắc nghiệm - Tự luận mới. Cùng
                với đó là các dạng bài tập hay có trong đề thi vào lớp 10. Hi
                vọng tài liệu này sẽ giúp học sinh ôn luyện, củng cố kiến thức
                và chuẩn bị tốt cho kì thi tuyển sinh vào lớp 10 môn Toán năm
                2023.
              </p>
            </div>
            <div className="listtest">
              <div className="list">
                <h3>Danh sách các đề thi</h3>
              </div>
              <div className="list-test">
                <ul>
                  <li>
                    <a href="#de1">Đề ôn thi môn toán lớp 9 lên 10(đề 1)</a>
                  </li>
                  <li>
                    <a href="#de2">Đề ôn thi môn toán lớp 9 lên 10(đề 2)</a>
                  </li>
                  <li>
                    <a href="#de3">Đề ôn thi môn toán lớp 9 lên 10(đề 3)</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="all" id="de1">
              <div className="start">
                <h1>Đề ôn thi môn toán lớp 9 lên 10(đề 1)</h1>
              </div>
              <div className="check">
                <label for="">
                  <input type="checkbox" />
                  <span id="text">Đã hoàn thành</span>
                </label>
              </div>

              <div className="placefortest">
                <div className="dethi">
                  <h1>Đề Thi</h1>
                </div>
                <div className="exam1">
                  <img
                    src="https://scontent.fdad1-4.fna.fbcdn.net/v/t1.15752-9/345431134_588271246780740_1166235869276536263_n.png?_nc_cat=105&cb=99be929b-59f725be&ccb=1-7&_nc_sid=ae9488&_nc_ohc=0r864LvZ66EAX9LCZed&_nc_ht=scontent.fdad1-4.fna&oh=03_AdQWqEIJnCT8bUpwfWgjsv6de4UNa1m0Rf8YrDrY5s8wjA&oe=64E326A0"
                    alt=""
                  />
                </div>
                <div className="exam1">
                  <img
                    src="https://scontent.fdad1-1.fna.fbcdn.net/v/t1.15752-9/345470033_796661255081638_225980339434875239_n.png?_nc_cat=109&cb=99be929b-59f725be&ccb=1-7&_nc_sid=ae9488&_nc_ohc=GUjbBzTpQTgAX_p7VCE&_nc_ht=scontent.fdad1-1.fna&oh=03_AdS6xKdWKOUmYOOuBeRgZz67QxEUQvub4AqMGne0MF1lRA&oe=64E30FD9"
                    alt=""
                  />
                </div>
                <div className="exam1">
                  <img
                    src="https://scontent.fdad1-3.fna.fbcdn.net/v/t1.15752-9/352325583_5922573347851330_5569854398966579924_n.png?_nc_cat=104&cb=99be929b-59f725be&ccb=1-7&_nc_sid=ae9488&_nc_ohc=OZcfuo1RsowAX8aMHa1&_nc_oc=AQnDuZyegkLz4U3o977KCWGhin04Gxb2ctlkVuBFgMsjvOXZlbeVveOBG7dQVUmgi-UIQpfu_nu2oONMgSH0lrhL&_nc_ht=scontent.fdad1-3.fna&oh=03_AdTH4GsoC_hU6KoTm8nZUlXLOlpPm5V5ijtw95tZ8kfXRw&oe=64E326F4"
                    alt=""
                  />
                  <img
                    src="https://scontent.fdad1-1.fna.fbcdn.net/v/t1.15752-9/352250230_279447461313827_3705790527819441852_n.png?_nc_cat=109&cb=99be929b-59f725be&ccb=1-7&_nc_sid=ae9488&_nc_ohc=J75qNYr1h1cAX_JmvBy&_nc_ht=scontent.fdad1-1.fna&oh=03_AdQV9aza_XdQZ6ANmZyIBXo9eaHgZNq1So4C2biV2sxTnA&oe=64E31075"
                    alt=""
                  />
                </div>

                <div className="exam1">
                  <img
                    src="https://scontent.fdad1-1.fna.fbcdn.net/v/t1.15752-9/352507128_1440571986759945_6035569571937858078_n.png?_nc_cat=109&cb=99be929b-59f725be&ccb=1-7&_nc_sid=ae9488&_nc_ohc=z7Fji7ygk_IAX-2MhYG&_nc_ht=scontent.fdad1-1.fna&oh=03_AdTgPjf8WBaE-ggN5njSO6IsDDcj_0R6Qpm8UYpHgK-AkQ&oe=64E31913"
                    alt=""
                  />
                </div>

                <div className="exam1">
                  <img
                    src="https://scontent.fdad1-4.fna.fbcdn.net/v/t1.15752-9/352400082_781926290058451_7204480299821861988_n.png?_nc_cat=105&ccb=1-7&_nc_sid=ae9488&_nc_ohc=lCu5-qS6RPQAX-eShop&_nc_ht=scontent.fdad1-4.fna&oh=03_AdSahTucC3EGXwbTnlyCzqm7xuC-Ty0tNZq-lbpvqwpomg&oe=64A6BA96"
                    alt=""
                  />
                </div>
                <div className="exam1">
                  <img
                    src="https://scontent.fdad1-4.fna.fbcdn.net/v/t1.15752-9/352400082_781926290058451_7204480299821861988_n.png?_nc_cat=105&cb=99be929b-59f725be&ccb=1-7&_nc_sid=ae9488&_nc_ohc=_Ltz_ernBekAX_fW2Y7&_nc_ht=scontent.fdad1-4.fna&oh=03_AdSc3eTAhCXAHqcfLaiGTF2iPYE3q5_gkiZLRsvxMSEJdQ&oe=64E32756"
                    alt=""
                  />
                </div>
                <div className="exam1">
                  <img
                    src="https://scontent.fdad1-2.fna.fbcdn.net/v/t1.15752-9/352013201_1216521485721244_6068502968271357584_n.png?_nc_cat=106&cb=99be929b-59f725be&ccb=1-7&_nc_sid=ae9488&_nc_ohc=DdTB7rjHWroAX_F-6Z0&_nc_ht=scontent.fdad1-2.fna&oh=03_AdTsY-_XZIIOzU0c5QXOxK3N1jmQ46yKb9uU1MuX1oLUvA&oe=64E31755"
                    alt=""
                  />
                </div>
                <div className="exam1">
                  <img
                    src="https://scontent.fdad2-1.fna.fbcdn.net/v/t1.15752-9/352596622_957560142228250_6531538367520807067_n.png?_nc_cat=101&cb=99be929b-59f725be&ccb=1-7&_nc_sid=ae9488&_nc_ohc=S4jZttlx0UYAX9NNobx&_nc_ht=scontent.fdad2-1.fna&oh=03_AdSheZ1hk16pqXMGoJBabhBQFS59jhd_a1Dop3lNcbRkaA&oe=64E338FB"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="all" id="de2">
              <div className="start">
                <h1>Đề ôn thi môn toán lớp 9 lên 10(đề 2)</h1>
              </div>
              <div className="check">
                <label for="">
                  <input type="checkbox" />
                  <span id="text">Đã hoàn thành</span>
                </label>
              </div>
              <div className="placefortest">
                <div className="dethi">
                  <h1>Đề Thi</h1>
                </div>
                <div className="exam1">
                  <img
                    src="https://scontent.fdad1-4.fna.fbcdn.net/v/t1.15752-9/345431134_588271246780740_1166235869276536263_n.png?_nc_cat=105&cb=99be929b-59f725be&ccb=1-7&_nc_sid=ae9488&_nc_ohc=0r864LvZ66EAX9LCZed&_nc_ht=scontent.fdad1-4.fna&oh=03_AdQWqEIJnCT8bUpwfWgjsv6de4UNa1m0Rf8YrDrY5s8wjA&oe=64E326A0"
                    alt=""
                  />
                </div>
                <div className="exam1">
                  <img
                    src="https://scontent.fdad1-1.fna.fbcdn.net/v/t1.15752-9/345470033_796661255081638_225980339434875239_n.png?_nc_cat=109&cb=99be929b-59f725be&ccb=1-7&_nc_sid=ae9488&_nc_ohc=GUjbBzTpQTgAX_p7VCE&_nc_ht=scontent.fdad1-1.fna&oh=03_AdS6xKdWKOUmYOOuBeRgZz67QxEUQvub4AqMGne0MF1lRA&oe=64E30FD9"
                    alt=""
                  />
                </div>
                <div className="exam1">
                  <img
                    src="https://scontent.fdad1-3.fna.fbcdn.net/v/t1.15752-9/352325583_5922573347851330_5569854398966579924_n.png?_nc_cat=104&cb=99be929b-59f725be&ccb=1-7&_nc_sid=ae9488&_nc_ohc=OZcfuo1RsowAX8aMHa1&_nc_oc=AQnDuZyegkLz4U3o977KCWGhin04Gxb2ctlkVuBFgMsjvOXZlbeVveOBG7dQVUmgi-UIQpfu_nu2oONMgSH0lrhL&_nc_ht=scontent.fdad1-3.fna&oh=03_AdTH4GsoC_hU6KoTm8nZUlXLOlpPm5V5ijtw95tZ8kfXRw&oe=64E326F4"
                    alt=""
                  />
                  <img
                    src="https://scontent.fdad1-1.fna.fbcdn.net/v/t1.15752-9/352250230_279447461313827_3705790527819441852_n.png?_nc_cat=109&cb=99be929b-59f725be&ccb=1-7&_nc_sid=ae9488&_nc_ohc=J75qNYr1h1cAX_JmvBy&_nc_ht=scontent.fdad1-1.fna&oh=03_AdQV9aza_XdQZ6ANmZyIBXo9eaHgZNq1So4C2biV2sxTnA&oe=64E31075"
                    alt=""
                  />
                </div>

                <div className="exam1">
                  <img
                    src="https://scontent.fdad1-1.fna.fbcdn.net/v/t1.15752-9/352507128_1440571986759945_6035569571937858078_n.png?_nc_cat=109&cb=99be929b-59f725be&ccb=1-7&_nc_sid=ae9488&_nc_ohc=z7Fji7ygk_IAX-2MhYG&_nc_ht=scontent.fdad1-1.fna&oh=03_AdTgPjf8WBaE-ggN5njSO6IsDDcj_0R6Qpm8UYpHgK-AkQ&oe=64E31913"
                    alt=""
                  />
                </div>

                <div className="exam1">
                  <img
                    src="https://scontent.fdad1-4.fna.fbcdn.net/v/t1.15752-9/352400082_781926290058451_7204480299821861988_n.png?_nc_cat=105&ccb=1-7&_nc_sid=ae9488&_nc_ohc=lCu5-qS6RPQAX-eShop&_nc_ht=scontent.fdad1-4.fna&oh=03_AdSahTucC3EGXwbTnlyCzqm7xuC-Ty0tNZq-lbpvqwpomg&oe=64A6BA96"
                    alt=""
                  />
                </div>
                <div className="exam1">
                  <img
                    src="https://scontent.fdad1-4.fna.fbcdn.net/v/t1.15752-9/352400082_781926290058451_7204480299821861988_n.png?_nc_cat=105&cb=99be929b-59f725be&ccb=1-7&_nc_sid=ae9488&_nc_ohc=_Ltz_ernBekAX_fW2Y7&_nc_ht=scontent.fdad1-4.fna&oh=03_AdSc3eTAhCXAHqcfLaiGTF2iPYE3q5_gkiZLRsvxMSEJdQ&oe=64E32756"
                    alt=""
                  />
                </div>
                <div className="exam1">
                  <img
                    src="https://scontent.fdad1-2.fna.fbcdn.net/v/t1.15752-9/352013201_1216521485721244_6068502968271357584_n.png?_nc_cat=106&cb=99be929b-59f725be&ccb=1-7&_nc_sid=ae9488&_nc_ohc=DdTB7rjHWroAX_F-6Z0&_nc_ht=scontent.fdad1-2.fna&oh=03_AdTsY-_XZIIOzU0c5QXOxK3N1jmQ46yKb9uU1MuX1oLUvA&oe=64E31755"
                    alt=""
                  />
                </div>
                <div className="exam1">
                  <img
                    src="https://scontent.fdad2-1.fna.fbcdn.net/v/t1.15752-9/352596622_957560142228250_6531538367520807067_n.png?_nc_cat=101&cb=99be929b-59f725be&ccb=1-7&_nc_sid=ae9488&_nc_ohc=S4jZttlx0UYAX9NNobx&_nc_ht=scontent.fdad2-1.fna&oh=03_AdSheZ1hk16pqXMGoJBabhBQFS59jhd_a1Dop3lNcbRkaA&oe=64E338FB"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="all" id="de3">
              <div className="start">
                <h1>Đề ôn thi môn toán lớp 9 lên 10(đề 3)</h1>
              </div>
              <div className="check">
                <label for="">
                  <input type="checkbox" />
                  <span id="text">Đã hoàn thành</span>
                </label>
              </div>
              <div className="placefortest">
                <div className="dethi">
                  <h1>Đề Thi</h1>
                </div>
                <div className="exam1">
                  <img
                    src="https://scontent.fdad1-4.fna.fbcdn.net/v/t1.15752-9/345431134_588271246780740_1166235869276536263_n.png?_nc_cat=105&cb=99be929b-59f725be&ccb=1-7&_nc_sid=ae9488&_nc_ohc=0r864LvZ66EAX9LCZed&_nc_ht=scontent.fdad1-4.fna&oh=03_AdQWqEIJnCT8bUpwfWgjsv6de4UNa1m0Rf8YrDrY5s8wjA&oe=64E326A0"
                    alt=""
                  />
                </div>
                <div className="exam1">
                  <img
                    src="https://scontent.fdad1-1.fna.fbcdn.net/v/t1.15752-9/345470033_796661255081638_225980339434875239_n.png?_nc_cat=109&cb=99be929b-59f725be&ccb=1-7&_nc_sid=ae9488&_nc_ohc=GUjbBzTpQTgAX_p7VCE&_nc_ht=scontent.fdad1-1.fna&oh=03_AdS6xKdWKOUmYOOuBeRgZz67QxEUQvub4AqMGne0MF1lRA&oe=64E30FD9"
                    alt=""
                  />
                </div>
                <div className="exam1">
                  <img
                    src="https://scontent.fdad1-3.fna.fbcdn.net/v/t1.15752-9/352325583_5922573347851330_5569854398966579924_n.png?_nc_cat=104&cb=99be929b-59f725be&ccb=1-7&_nc_sid=ae9488&_nc_ohc=OZcfuo1RsowAX8aMHa1&_nc_oc=AQnDuZyegkLz4U3o977KCWGhin04Gxb2ctlkVuBFgMsjvOXZlbeVveOBG7dQVUmgi-UIQpfu_nu2oONMgSH0lrhL&_nc_ht=scontent.fdad1-3.fna&oh=03_AdTH4GsoC_hU6KoTm8nZUlXLOlpPm5V5ijtw95tZ8kfXRw&oe=64E326F4"
                    alt=""
                  />
                  <img
                    src="https://scontent.fdad1-1.fna.fbcdn.net/v/t1.15752-9/352250230_279447461313827_3705790527819441852_n.png?_nc_cat=109&cb=99be929b-59f725be&ccb=1-7&_nc_sid=ae9488&_nc_ohc=J75qNYr1h1cAX_JmvBy&_nc_ht=scontent.fdad1-1.fna&oh=03_AdQV9aza_XdQZ6ANmZyIBXo9eaHgZNq1So4C2biV2sxTnA&oe=64E31075"
                    alt=""
                  />
                </div>

                <div className="exam1">
                  <img
                    src="https://scontent.fdad1-1.fna.fbcdn.net/v/t1.15752-9/352507128_1440571986759945_6035569571937858078_n.png?_nc_cat=109&cb=99be929b-59f725be&ccb=1-7&_nc_sid=ae9488&_nc_ohc=z7Fji7ygk_IAX-2MhYG&_nc_ht=scontent.fdad1-1.fna&oh=03_AdTgPjf8WBaE-ggN5njSO6IsDDcj_0R6Qpm8UYpHgK-AkQ&oe=64E31913"
                    alt=""
                  />
                </div>

                <div className="exam1">
                  <img
                    src="https://scontent.fdad1-4.fna.fbcdn.net/v/t1.15752-9/352400082_781926290058451_7204480299821861988_n.png?_nc_cat=105&ccb=1-7&_nc_sid=ae9488&_nc_ohc=lCu5-qS6RPQAX-eShop&_nc_ht=scontent.fdad1-4.fna&oh=03_AdSahTucC3EGXwbTnlyCzqm7xuC-Ty0tNZq-lbpvqwpomg&oe=64A6BA96"
                    alt=""
                  />
                </div>
                <div className="exam1">
                  <img
                    src="https://scontent.fdad1-4.fna.fbcdn.net/v/t1.15752-9/352400082_781926290058451_7204480299821861988_n.png?_nc_cat=105&cb=99be929b-59f725be&ccb=1-7&_nc_sid=ae9488&_nc_ohc=_Ltz_ernBekAX_fW2Y7&_nc_ht=scontent.fdad1-4.fna&oh=03_AdSc3eTAhCXAHqcfLaiGTF2iPYE3q5_gkiZLRsvxMSEJdQ&oe=64E32756"
                    alt=""
                  />
                </div>
                <div className="exam1">
                  <img
                    src="https://scontent.fdad1-2.fna.fbcdn.net/v/t1.15752-9/352013201_1216521485721244_6068502968271357584_n.png?_nc_cat=106&cb=99be929b-59f725be&ccb=1-7&_nc_sid=ae9488&_nc_ohc=DdTB7rjHWroAX_F-6Z0&_nc_ht=scontent.fdad1-2.fna&oh=03_AdTsY-_XZIIOzU0c5QXOxK3N1jmQ46yKb9uU1MuX1oLUvA&oe=64E31755"
                    alt=""
                  />
                </div>
                <div className="exam1">
                  <img
                    src="https://scontent.fdad2-1.fna.fbcdn.net/v/t1.15752-9/352596622_957560142228250_6531538367520807067_n.png?_nc_cat=101&cb=99be929b-59f725be&ccb=1-7&_nc_sid=ae9488&_nc_ohc=S4jZttlx0UYAX9NNobx&_nc_ht=scontent.fdad2-1.fna&oh=03_AdSheZ1hk16pqXMGoJBabhBQFS59jhd_a1Dop3lNcbRkaA&oe=64E338FB"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="last">
            <div className="create">
              <p>Tạo nhóm để học cùng nhau nhé!!!</p>
              <button className="btngroup">
                <a>
                  <img src="plus.png" alt="" />
                  Tạo Nhóm
                </a>
              </button>
              <p>Nhóm phổ biến gần đây.</p>
            </div>
            <div className="group-main">
              <div className="group">
                <div className="group-img">
                  <img
                    src="https://xcdn-cf.vuihoc.vn/upload/5c209fe6176b0/2022/04/06/097a_khoi-d-gom-nhung-nganh-nao-1.png"
                    alt=""
                  />
                </div>
                <div className="gr-btn">
                  <button>Tham Gia Ngay</button>
                </div>
              </div>
              <div className="group">
                <div className="group-img">
                  <img
                    src="https://static.ybox.vn/2020/12/1/1607335958957-lam-viec-nhom-hieu-qua.jpg"
                    alt=""
                  />
                </div>
                <div className="gr-btn">
                  <button>Tham Gia Ngay</button>
                </div>
              </div>
            </div>
          </div>

          {formappear && (
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
          <div className="alert">
            <div className="alertword">
              <p>Bạn cần đăng nhập vào trang để xem tài liệu này</p>
              <a>OK</a>
            </div>
          </div>
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
                  <input type="text" id="username2" name="username2" required />
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

          <div className="group-create">
            <i className="fa-solid fa-circle-xmark" id="close3"></i>
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
export default Test9to10;
