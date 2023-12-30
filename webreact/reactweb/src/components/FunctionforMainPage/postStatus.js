import { useContext, useState, useReducer } from "react";
import { Appcontext } from "../Contexxt/Appcontext";
import { ClassContext } from "../Contexxt/ClassContext";
import axios from "axios";
function reducer(state, action) {
  if (action.type === "idUser") {
    return { ...state, iduser: action.iduser };
  } else if (action.type === "nameuser") {
    return { ...state, name: action.name };
  } else if (action.type === "subject") {
    return { ...state, subject: action.subject };
  } else if (action.type === "decrip") {
    return { ...state, decrip: action.decrip };
  } else if (action.type === "file") {
    return { ...state, picture: action.picture };
  } else if (action.type === "clearform") {
    return { subject: "", decrip: "", file: "" };
  }
}
export function PostStatus() {
  const { poststatus, setpoststatus } = useContext(Appcontext);
  const [link, setlink] = useState(null);
  const { user } = useContext(ClassContext);
  const { appear } = useContext(Appcontext);
  const [state, dispatch] = useReducer(reducer, {
    iduser: "",
    name: "",
    subject: "",
    decrip: "",
    picture: "",
  });
  const takelink = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setlink(imageUrl);
      dispatch({ type: "file", picture: file.name });
    }
  };
  async function submitPost(event) {
    event.preventDefault();
    if (appear === false && user) {
      dispatch({ type: "nameuser", name: user[0].nameuser });
      dispatch({ type: "idUser", iduser: user[0].id });
      const response = await axios.post("/v1/postStatus", state);
      console.log(response.data);
    } else {
      console.log("bạn cần đăng nhập vào để đăng bài");
    }
  }
  return (
    <>
      {poststatus && (
        <div className="Post-create">
          <i
            className="fa-solid fa-circle-xmark"
            id="close4"
            onClick={() => setpoststatus(false)}
          ></i>
          <form onSubmit={submitPost}>
            <h4>Tạo bài viết</h4>
            <div className="status-form">
              <label>Môn học:</label>
              <input
                type="text"
                name="subject-status"
                required
                onChange={(e) => {
                  dispatch({ type: "subject", subject: e.target.value });
                }}
              />
              <label>Mô tả:</label>
              <input
                type="text"
                required
                placeholder="Thêm mô tả tại đây..."
                onChange={(e) => {
                  dispatch({ type: "decrip", decrip: e.target.value });
                }}
              />
              <label className="add-img">
                Thêm ảnh:
                <i
                  className="fa-solid fa-images"
                  style={{ color: "#04ff00" }}
                ></i>
              </label>
              <input
                onChange={takelink}
                type="file"
                name="file-status"
                className="input-hidden"
                required
              />
              <div
                className={`place-img-select ${link !== null ? "active" : ""}`}
              >
                <a className="del-img-status">
                  <i
                    className="fa-regular fa-circle-xmark"
                    onClick={() => {
                      setlink(null);
                      dispatch({ type: "file", picture: "" });
                    }}
                  ></i>
                </a>
                <img className="img-status" src={link} />
              </div>
            </div>
            <input id="post-btn" type="submit" value="Đăng" />
          </form>
        </div>
      )}
    </>
  );
}
