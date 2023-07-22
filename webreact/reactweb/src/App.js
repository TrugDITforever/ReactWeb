import React, { useState } from "react";
import users from "./components/imagess/user.png";

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [comments, setComments] = useState([]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleCreateComment = () => {
    if (inputValue.trim() !== "") {
      setComments((prevComments) => [
        ...prevComments,
        { id: comments.length + 1, name: "Linh", content: inputValue },
      ]);
      setInputValue("");
    }
  };

  return (
    <div>
      <div className="box-cmt">
        <img src={users} alt="" />
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Viết bình luận tại đây..."
        />
        <button onClick={handleCreateComment}>Đăng</button>
      </div>
      {/* Thêm dấu mở ngoặc {} để bao quanh phần tử JSX trong hàm map */}
      {comments.map((comment) => (
        <div key={comment.id} className="people-cmt">
          <div>
            <img
              src="https://thuthuatnhanh.com/wp-content/uploads/2019/02/anh-dai-dien-dep-cho-zalo.jpeg"
              alt=""
            />
          </div>
          <div className="name-cmt">
            <p>{comment.name}</p>
            <p>{comment.content}</p>
          </div>
        </div>
      ))}
      {/* Các phần tử div ở dưới đây không thay đổi */}
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
        {/* Các phần tử div khác ở dưới đây cũng tương tự */}
      </div>
    </div>
  );
};

export default App;
