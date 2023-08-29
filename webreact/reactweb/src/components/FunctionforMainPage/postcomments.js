import users from "../imagess/user.png";
import React, { useState, useEffect } from "react";
function Post() {
  const [searchvalue, searchvalueUpdate] = useState("");
  const [comments, commentUpdate] = useState([]);
  const handleCreateComment = () => {
    if (searchvalue.trim() !== "") {
      const newComment = {
        name: "NO Name",
        content: searchvalue,
      };
      commentUpdate([newComment, ...comments]);
      searchvalueUpdate("");
    }
  };
  const handleclick = (e) => {
    searchvalueUpdate(e.target.value);
  };
  const searchvalelenght = searchvalue.length > 0;
  return (
    <div>
      <div className="box-cmt">
        <img src={users} alt="" />
        <input
          type="text"
          value={searchvalue}
          onChange={handleclick}
          placeholder="Viết bình luận tại đây..."
        />
        {searchvalelenght && (
          <button onClick={handleCreateComment}>Đăng</button>
        )}
      </div>
      {comments.map((comment, index) => (
        <div key={index} className="people-cmt">
          <div>
            <img src={users} alt="" />
          </div>
          <div className="name-cmt">
            <p>{comment.name}</p>
            <p>{comment.content}</p>
          </div>
        </div>
      ))}
      <div className="people-cmt">
        <div>
          <img
            src="https://thuthuatnhanh.com/wp-content/uploads/2019/02/anh-dai-dien-dep-cho-zalo.jpeg"
            alt=""
          />
        </div>
        <div className="name-cmt">
          <p>Linh</p>
          <p>Bài giải hay quá</p>
        </div>
      </div>
      <div className="people-cmt">
        <div>
          <img
            src="https://top10dienbien.com/wp-content/uploads/2022/10/avatar-cute-11.jpg"
            alt=""
          />
        </div>
        <div className="name-cmt">
          <p>Lê Nhã</p>
          <p>Các dạng đề khá hay</p>
        </div>
      </div>
      <div className="people-cmt">
        <div>
          <img
            src="https://freenice.net/wp-content/uploads/2021/08/hinh-anh-avatar-dep.jpg"
            alt=""
          />
        </div>
        <div className="name-cmt">
          <p>Anh Quang</p>
          <p>Bài giải hay quá</p>
        </div>
      </div>
      <div className="people-cmt">
        <div>
          <img
            src="https://haycafe.vn/wp-content/uploads/2021/11/Anh-avatar-dep-chat-lam-hinh-dai-dien.jpg"
            alt=""
          />
        </div>
        <div className="name-cmt">
          <p>No Name</p>
          <p>Cảm ơn add nhiều nhé! Tài liệu rất có giá trị.</p>
        </div>
      </div>
      <div className="people-cmt">
        <div>
          <img src={users} alt="" />
        </div>
        <div className="name-cmt">
          <p>Ngọc Bảo</p>
          <p>Trang web khá hay, bổ ích</p>
        </div>
      </div>
    </div>
  );
}
export default Post;
