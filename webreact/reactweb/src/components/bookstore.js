import React, { useState, useContext, useEffect } from "react";
import "./Cssfile/bookstore.css";
import Navbar from "./FunctionforMainPage/Navbar";
import { Appcontext } from "./Contexxt/Appcontext";
import {
  BtnLoginSignup,
  Alertactice,
} from "./FunctionforMainPage/funtionforsignupAndlogin";
import { Ads } from "./FunctionforMainPage/funtionforsignupAndlogin";
import { Link } from "react-router-dom";

import {
  Cartmoveout,
  PlaceforTH,
  Numberpro,
  PlaceforTHCS,
  LeftMenu,
} from "./FunctionforMainPage/Shoppingcart";
function BookStrore() {
  const [searchvalue, setsearchVlue] = useState("");
  const { products, setProducts } = useContext(Appcontext);
  const { setCartCount } = useContext(Appcontext);
  const { cartItems, setCartItems, setCartItemsShop, Wordtitle } =
    useContext(Appcontext);
  const handleAddToCart = (product) => {
    setCartCount((prevCount) => prevCount + 1);
    const existingCart = cartItems.find((item) => item.id === product.id);
    if (existingCart) {
      const updatecart = cartItems.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCartItems(updatecart);
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  ///function search and filter products
  const returnItems = products.filter((product) =>
    product.name.toLowerCase().includes(searchvalue.toLowerCase())
  );
  const { texttosearch } = useContext(Appcontext);
  const returnbyfilter =
    texttosearch === "all"
      ? returnItems
      : returnItems.filter((product) => product.decrip === texttosearch);
  useEffect(() => {
    console.log(returnbyfilter);
    // BelongtoSearch();
    setCartItemsShop(cartItems);
  });
  ///slideshow function
  const colors = [
    "https://innhanhsieuviet.com/wp-content/uploads/2021/04/in-poster-quang-cao.jpg",
    "https://cdn.pixabay.com/photo/2016/02/16/21/07/books-1204029_1280.jpg",
    "https://images.unsplash.com/photo-1585832770485-e68a5dbfad52?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3R1ZHklMjBkZXNrfGVufDB8fDB8fHww&w=1000&q=80",
  ];
  const delay = 2500;
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === colors.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);
  return (
    <div>
      <>
        <Navbar></Navbar>
        <div className="container">
          <Ads></Ads>
          <div className="InterfaceBookStore">
            <LeftMenu></LeftMenu>
            <div className="RightMenu">
              <div className="BookMenu">
                <div className="IconShopping">
                  <div className="Searching">
                    <form className="SearchBook">
                      <input
                        value={searchvalue}
                        onChange={(e) => setsearchVlue(e.target.value)}
                        type="text"
                        placeholder="Tìm kiếm sản phẩm của bạn ở đây...."
                      ></input>
                      <button type="submit">
                        <i class="fa-solid fa-magnifying-glass"></i>Tìm kiếm
                      </button>
                    </form>
                  </div>
                  <div className="placeforiconandnumber">
                    <Cartmoveout></Cartmoveout>
                    <Numberpro></Numberpro>
                  </div>
                </div>
                <div className="PlaceForBook">
                  <div className="Product">
                    <div className="ImgStart">
                      <div className="imagewelcome">
                        <div
                          className="slideshowsliders"
                          style={{
                            transform: `translate3d(${-index * 100}%, 0, 0)`,
                          }}
                        >
                          {colors.map((backgroundColor, index) => (
                            <div
                              className="slide"
                              key={index}
                              style={{
                                backgroundImage: `url(${backgroundColor})`,
                              }}
                            ></div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <BtnLoginSignup></BtnLoginSignup>
                    <div className="DivforBook">
                      <p className="Wordtitle">{Wordtitle}</p>
                      <>
                        <div className="PlaceForTh">
                          {returnbyfilter.map((product) => (
                            <div key={product.id} className="BookBox">
                              <div className="ImgBook">
                                <div className="ForImg">
                                  <img src={product.imges}></img>
                                </div>
                                <div className="BtnBuyAndAdd">
                                  <button>Mua Ngay</button>
                                  <button
                                    className="addcart"
                                    onClick={() => handleAddToCart(product)}
                                  >
                                    Thêm Vào Giỏ
                                  </button>
                                </div>
                              </div>
                              <div className="Bookdetail">
                                <div className="PriceAndWord">
                                  <h4>
                                    <a title={product.name}> {product.name}</a>
                                  </h4>
                                  <span className="price-number">
                                    {product.price.toLocaleString()}đ
                                  </span>
                                  <span className="price-sales">169,000đ</span>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </>
                      {/* <>
                        <PlaceforTHCS></PlaceforTHCS>
                      </> */}
                    </div>
                    <Alertactice></Alertactice>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}
export default BookStrore;
