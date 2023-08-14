import React, { useState } from "react";
import "./bookstore.css";
import Navbar from "./Navbar";
import { AppProvider } from "./Contexxt/Appcontext";
import { BtnLoginSignup } from "./funtionforsignupAndlogin";
function BookStrore() {
  const [cartCount, setCartCount] = useState(0);
  const handleAddToCart = () => {
    setCartCount((prevCount) => prevCount + 1);
  };
  const products = [
    {
      id: 1,
      name: "Sách bách khoa tri thức cho trẻ em",
      price: 79000,
      imges:
        "https://images.toplist.vn/images/800px/bach-khoa-tri-thuc-cho-tre-em-kham-pha-va-sang-tao-748131.jpg",
    },
    {
      id: 2,
      name: "Sách Siêu Nhí Hỏi",
      price: 79000,
      imges:
        "https://toplist.vn/images/800px/sieu-nhi-hoi-nha-khoa-hoc-tra-loi-100-bi-an-moi-dua-tre-deu-muon-hoi-mot-nha-khoa-hoc-748175.jpg",
    },
    {
      id: 3,
      name: "Sách 10 Vạn câu hỏi vì sao",
      price: 79000,
      imges:
        "https://dongphuchaianh.com/wp-content/uploads/2021/05/nhung-cuon-sach-hay-cho-hoc-sinh-6.jpg",
    },
    {
      id: 4,
      name: "Sách Thỏ bảy màu",
      price: 79000,
      imges: "https://bookbuy.vn/Res/Images/Product/tho-bay-mau_41972_1.PNG",
    },
    {
      id: 5,
      name: "Combo 5 cuốn sách kĩ năng cho trẻ",
      price: 179000,
      imges:
        "https://salt.tikicdn.com/ts/product/54/7d/75/6c21e268aa26dcbb33845bfcbd544cd4.jpg",
    },
  ];
  const productsforthcss = [
    {
      id: 1,
      name: "Sách Tôi Tự Học",
      price: 89000,
      imges:
        "https://images.toplist.vn/images/800px/toi-tu-hoc-thu-giang-nguyen-duy-can-703153.jpg",
    },
    {
      id: 2,
      name: "Sách Học Khôn Ngoan Mà không Gian Nan",
      price: 79000,
      imges:
        "https://dongphuchaianh.com/wp-content/uploads/2021/05/nhung-cuon-sach-hay-cho-hoc-sinh-5.jpg",
    },
    {
      id: 3,
      name: "Sách Tuổi dậy thì của Eddie & Marley",
      price: 79000,
      imges:
        "https://muagitot.com/upload_images/images/2022/03/17/309861fbce907b2a610af1a71a3b5a35.jpg",
    },
    {
      id: 4,
      name: "Sổ tay kiến thức toán cho THCS",
      price: 79000,
      imges:
        "https://vn-live-01.slatic.net/p/e86b75436022182a48ab98004e17fb6f.jpg",
    },
    {
      id: 5,
      name: "Bộ chinh phục ngữ pháp Tiếng Anh",
      price: 169000,
      imges:
        "https://vn-live-01.slatic.net/p/432134ac311eecd6e9077509a186e4de.png",
    },
  ];
  return (
    <div>
      <AppProvider>
        <Navbar></Navbar>
        <div className="container">
          <div className="InterfaceBookStore">
            <div className="LeftMenu">
              <div className="BookMenu">
                <div className="Iconbook">
                  <p>
                    <i class="fa-solid fa-book"></i>
                    <span>Danh Mục</span>
                  </p>
                </div>
                <div className="ListnameMenu">
                  <ul>
                    <li>
                      <a>Tất cả sản phẩm</a>
                    </li>
                    <li>
                      <a>Sản phẩm nổi bật</a>
                    </li>
                    <li>
                      <a>Sách cho tiểu học</a>
                    </li>
                    <li>
                      <a>Sách cho THCS</a>
                    </li>
                    <li>
                      <a>Sách cho THPT</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="RightMenu">
              <div className="BookMenu">
                {/* <BtnLoginSignup></BtnLoginSignup> */}
                <div className="IconShopping">
                  <div className="Searching">
                    <form className="SearchBook">
                      <input
                        type="text"
                        placeholder="Tìm kiếm sản phẩm của bạn ở đây...."
                      ></input>
                      <button type="">
                        <i class="fa-solid fa-magnifying-glass"></i>Tìm kiếm
                      </button>
                    </form>
                  </div>
                  <div className="placeforiconandnumber">
                    <i class="fa-solid fa-cart-shopping"></i>
                    <div className="numberShop">{cartCount}</div>
                  </div>
                </div>
                <div className="PlaceForBook">
                  <div className="Product">
                    <div className="ImgStart"></div>
                    <BtnLoginSignup></BtnLoginSignup>
                    <div className="DivforBook">
                      <p>Tiểu học</p>
                      <div className="PlaceForTh">
                        {products.map((product) => (
                          <div key={product.id} className="BookBox">
                            <div className="ImgBook">
                              <div className="ForImg">
                                <img src={product.imges}></img>
                              </div>
                              <div className="BtnBuyAndAdd">
                                <button>Mua Ngay</button>
                                <button
                                  className="addcart"
                                  onClick={handleAddToCart}
                                >
                                  Thêm Vào Giỏ
                                </button>
                              </div>
                            </div>
                            <div className="Bookdetail">
                              <div className="PriceAndWord">
                                <h4>{product.name}</h4>
                                <p>{product.price.toLocaleString()}đ</p>
                              </div>
                            </div>
                          </div>
                        ))}

                        {/* <div className="BookBox">
                          <div className="ImgBook">
                            <div className="ForImg">
                              <img src="https://toplist.vn/images/800px/sieu-nhi-hoi-nha-khoa-hoc-tra-loi-100-bi-an-moi-dua-tre-deu-muon-hoi-mot-nha-khoa-hoc-748175.jpg"></img>
                            </div>
                            <div className="BtnBuyAndAdd">
                              <button>Mua Ngay</button>
                              <button
                                className="addcart"
                                onClick={handleAddToCart}
                              >
                                Thêm Vào Giỏ
                              </button>
                            </div>
                          </div>
                          <div className="Bookdetail">
                            <div className="PriceAndWord">
                              <h4>Sách Siêu Nhí Hỏi</h4>
                              <p>79.000đ</p>
                            </div>
                          </div>
                        </div>
                        <div className="BookBox">
                          <div className="ImgBook">
                            <div className="ForImg">
                              <img src="https://dongphuchaianh.com/wp-content/uploads/2021/05/nhung-cuon-sach-hay-cho-hoc-sinh-6.jpg"></img>
                            </div>
                            <div className="BtnBuyAndAdd">
                              <button>Mua Ngay</button>
                              <button className="addcart">Thêm Vào Giỏ</button>
                            </div>
                          </div>
                          <div className="Bookdetail">
                            <div className="PriceAndWord">
                              <h4>Sách 10 Vạn câu hỏi vì sao</h4>
                              <p>79.000đ</p>
                            </div>
                          </div>
                        </div>
                        <div className="BookBox">
                          <div className="ImgBook">
                            <div className="ForImg">
                              <img src="https://bookbuy.vn/Res/Images/Product/tho-bay-mau_41972_1.PNG"></img>
                            </div>
                            <div className="BtnBuyAndAdd">
                              <button>Mua Ngay</button>
                              <button className="addcart">Thêm Vào Giỏ</button>
                            </div>
                          </div>
                          <div className="Bookdetail">
                            <div className="PriceAndWord">
                              <h4>Sách Thỏ bảy màu</h4>
                              <p>79.000đ</p>
                            </div>
                          </div>
                        </div>
                        <div className="BookBox">
                          <div className="ImgBook">
                            <div className="ForImg">
                              <img src="https://salt.tikicdn.com/ts/product/54/7d/75/6c21e268aa26dcbb33845bfcbd544cd4.jpg"></img>
                            </div>
                            <div className="BtnBuyAndAdd">
                              <button>Mua Ngay</button>
                              <button className="addcart">Thêm Vào Giỏ</button>
                            </div>
                          </div>
                          <div className="Bookdetail">
                            <div className="PriceAndWord">
                              <h4>Combo 5 cuốn sách kĩ năng cho trẻ</h4>
                              <p>139.000đ</p>
                            </div>
                          </div>
                        </div> */}
                      </div>
                      <p>Trung Hoc Cơ Sở </p>
                      <div className="PlaceForThcs">
                        {productsforthcss.map((product) => (
                          <div key={product.id} className="BookBox">
                            <div className="ImgBook">
                              <div className="ForImg">
                                <img src={product.imges}></img>
                              </div>
                              <div className="BtnBuyAndAdd">
                                <button>Mua Ngay</button>
                                <button
                                  className="addcart"
                                  onClick={handleAddToCart}
                                >
                                  Thêm Vào Giỏ
                                </button>
                              </div>
                            </div>
                            <div className="Bookdetail">
                              <div className="PriceAndWord">
                                <h4>{product.name}</h4>
                                <p>{product.price.toLocaleString()}đ</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AppProvider>
    </div>
  );
}
export default BookStrore;
