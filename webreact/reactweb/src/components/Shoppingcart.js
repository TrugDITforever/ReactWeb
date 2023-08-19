import React, { useContext, useEffect, useState } from "react";
import { Appcontext } from "./Contexxt/Appcontext";
import { Link } from "react-router-dom";
export function LeftMenu() {
  const { setWordtitle } = useContext(Appcontext);
  const { settexttosearch, texttosearch } = useContext(Appcontext);

  const ClickAllppear = () => {
    // setThappear(true);
    // setThcsappear(true);
    setWordtitle("Tất cả sản phẩm");
    settexttosearch("all");
  };
  const ClickTHppear = () => {
    setWordtitle("Tiểu học");
    settexttosearch("th");
  };
  const ClickTHcsppear = () => {
    settexttosearch("thcs");
    setWordtitle("Trung học cơ sở");
  };
  const ClickSpecial = () => {
    settexttosearch("special");
    setWordtitle("Sản phẩm nổi bật");
  };
  const ClickTHpt = () => {
    settexttosearch("thpt");
    setWordtitle("Trung học phổ thông");
  };
  return (
    <>
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
              <li onClick={ClickAllppear}>
                <a>Tất cả sản phẩm</a>
              </li>
              <li onClick={ClickSpecial}>
                <a>Sản phẩm nổi bật</a>
              </li>
              <li onClick={ClickTHppear}>
                <a>Sách cho tiểu học</a>
              </li>
              <li onClick={ClickTHcsppear}>
                <a>Sách cho THCS</a>
              </li>
              <li onClick={ClickTHpt}>
                <a>Sách cho THPT</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
export function Numberpro() {
  const { cartCount } = useContext(Appcontext);
  return (
    <>
      <div className="numberShop">{cartCount}</div>
    </>
  );
}
// export function PlaceforTHCS() {
//   const { setCartCount } = useContext(Appcontext);
//   const { cartItems, setCartItems } = useContext(Appcontext);
//   const handleAddToCart = (product) => {
//     setCartCount((prevCount) => prevCount + 1);
//     const existingCart = cartItems.find((item) => item.id === product.id);
//     if (existingCart) {
//       const updatecart = cartItems.map((item) =>
//         item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
//       );
//       setCartItems(updatecart);
//     } else {
//       setCartItems([...cartItems, { ...product, quantity: 1 }]);
//     }
//   };
//   const productsforthcss = [
//     {
//       id: 5,
//       name: "Sách Tôi Tự Học",
//       price: 89000,
//       imges:
//         "https://images.toplist.vn/images/800px/toi-tu-hoc-thu-giang-nguyen-duy-can-703153.jpg",
//     },
//     {
//       id: 6,
//       name: "Sách Học Khôn Ngoan Mà không Gian Nan",
//       price: 79000,
//       imges:
//         "https://dongphuchaianh.com/wp-content/uploads/2021/05/nhung-cuon-sach-hay-cho-hoc-sinh-5.jpg",
//     },
//     {
//       id: 7,
//       name: "Sách Tuổi dậy thì của Eddie & Marley",
//       price: 79000,
//       imges:
//         "https://muagitot.com/upload_images/images/2022/03/17/309861fbce907b2a610af1a71a3b5a35.jpg",
//     },
//     {
//       id: 8,
//       name: "Sổ tay kiến thức toán cho THCS",
//       price: 79000,
//       imges:
//         "https://vn-live-01.slatic.net/p/e86b75436022182a48ab98004e17fb6f.jpg",
//     },
//     {
//       id: 9,
//       name: "Bộ chinh phục ngữ pháp Tiếng Anh",
//       price: 169000,
//       imges:
//         "https://vn-live-01.slatic.net/p/432134ac311eecd6e9077509a186e4de.png",
//     },
//   ];
//   const { Thcsappear } = useContext(Appcontext);
//   return (
//     <>
//       {Thcsappear && (
//         <div className="PlaceForThcs">
//           {productsforthcss.map((product) => (
//             <div key={product.id} className="BookBox">
//               <div className="ImgBook">
//                 <div className="ForImg">
//                   <img src={product.imges}></img>
//                 </div>
//                 <div className="BtnBuyAndAdd">
//                   <button>Mua Ngay</button>
//                   <button
//                     className="addcart"
//                     onClick={() => handleAddToCart(product)}
//                   >
//                     Thêm Vào Giỏ
//                   </button>
//                 </div>
//               </div>
//               <div className="Bookdetail">
//                 <div className="PriceAndWord">
//                   <h4>{product.name}</h4>
//                   <span className="price-number">
//                     {product.price.toLocaleString()}đ
//                   </span>
//                   <span className="price-sales">169,000đ</span>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </>
//   );
// }
export function Cartmoveout() {
  const { cartappear, updatecart, cartItems, setCartItems, setCartCount } =
    useContext(Appcontext);
  const Deletecart = (productID, proquantity) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== productID);
    setCartItems(updatedCartItems);
    setCartCount((prevCount) => prevCount - proquantity);
  };
  const handleclickcart = () => {
    updatecart(true);
  };
  const handleclickcartremove = () => {
    updatecart(false);
  };
  const [totalmoney, setmoney] = useState(0);
  const CaculateCart = () => {
    let Summoney = 0;
    cartItems.map((item) => {
      Summoney += item.price * item.quantity;
    });
    setmoney(Summoney.toLocaleString());
  };
  useEffect(() => {
    CaculateCart();
  });
  const cartItemslength = cartItems.length === 0;
  return (
    <div>
      <i class="fa-solid fa-cart-shopping" onClick={handleclickcart}></i>
      <div className={`Cartplace ${cartappear ? "appearcart" : ""}`}>
        <div className="iconcartremove">
          <i
            class="fa-regular fa-circle-xmark fa-xl"
            onClick={handleclickcartremove}
          ></i>
        </div>
        <div className="editcart">
          <div className="Cartword">
            <p>GIỎ HÀNG</p>
            {cartItemslength && <p>Hiện chưa có sản phẩm</p>}
          </div>
          <div className="PlaceforProduct">
            {cartItems.map((cartItem) => (
              <table key={cartItem.id} className="cart-view">
                <tbody>
                  <tr>
                    <td className="imgincart">
                      <a href="">
                        <img src={cartItem.imges}></img>
                      </a>
                    </td>
                    <td>
                      <a className="protitleview">{cartItem.name}</a>
                      <span className="quantity-pro">{cartItem.quantity}</span>
                      <span className="pro-price">
                        {cartItem.price.toLocaleString()}đ
                      </span>
                      <span className="remove-cart">
                        <i
                          className="fa-solid fa-xmark"
                          onClick={() =>
                            Deletecart(cartItem.id, cartItem.quantity)
                          }
                        ></i>
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            ))}
            <span className="line2"></span>
            <table className="totalprice">
              <tbody>
                <tr>
                  <td className="text-left">TỔNG TIỀN</td>
                  <td className="text-right">{totalmoney}đ</td>
                </tr>
                <tr>
                  <td>
                    <Link
                      to="/cartpage"
                      className="watch-cart"
                      onClick={() => updatecart(false)}
                    >
                      XEM GIỎ HÀNG
                    </Link>
                  </td>
                  <td>
                    <a className="pay-cart">THANH TOÁN</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
export function Tablecart() {
  const {
    cartItemsshop,
    setCartItemsShop,
    setCartItems,
    setCartCount,
    cartCount,
  } = useContext(Appcontext);
  const PlusQuantity = (itemsquantity) => {
    const exisstItems = cartItemsshop.find(
      (item) => item.id === itemsquantity.id
    );
    if (exisstItems) {
      const updatecart = cartItemsshop.map((item) =>
        item.id === itemsquantity.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      setCartCount((prevCount) => prevCount + 1);
      setCartItemsShop(updatecart);
      setCartItems(updatecart);
    }
  };
  const MinusQuantity = (itemsquantity) => {
    const exisstItems = cartItemsshop.find(
      (item) => item.id === itemsquantity.id
    );

    if (exisstItems) {
      const updatecart = cartItemsshop.map((item) => {
        if (item.id === itemsquantity.id) {
          const newQuantity = Math.max(1, item.quantity - 1);
          return { ...item, quantity: newQuantity };
        }
        return item;
      });
      setCartCount((prevCount) => prevCount - 1);
      setCartItemsShop(updatecart);
      setCartItems(updatecart);
    }
  };
  const deleteCartItems = (proID) => {
    const filterDelete = cartItemsshop.filter((item) => item.id !== proID.id);
    console.log(cartItemsshop);
    setCartItemsShop(filterDelete);
    setCartItems(filterDelete);
    setCartCount((prevCount) => prevCount - proID.quantity);
  };
  const [productquantity, setproductquantity] = useState(0);
  const calculatorProduct = () => {
    let totalproduct = 0;
    cartItemsshop.map((cartItem) => (totalproduct += cartItem.quantity));
    setproductquantity(totalproduct);
  };
  useEffect(() => {
    calculatorProduct();
  }, [productquantity]);
  return (
    <>
      <p>Bạn đang có {productquantity} sản phẩm trong giỏ hàng</p>
      {cartItemsshop.map((cartItem) => (
        <div key={cartItem.id} className="table-cart">
          <div className="item-place">
            <div className="left-itemplace">
              <a>
                <img src={cartItem.imges}></img>
              </a>
            </div>
            <div className="right-itemplace">
              <div className="item-info">
                <a>
                  <p>{cartItem.name}</p>
                </a>
              </div>
              <div className="item-quantity">
                <div className="Place-to-change">
                  <button type="button" onClick={() => MinusQuantity(cartItem)}>
                    -
                  </button>
                  <input type="text" value={cartItem.quantity} />
                  <button type="button" onClick={() => PlusQuantity(cartItem)}>
                    +
                  </button>
                </div>
              </div>
              <div className="item-price">
                <div className="all-itemprice">
                  <p>{cartItem.price.toLocaleString()}đ</p>
                  <p className="sales-price">(197,000đ)</p>
                </div>
              </div>
              <div className="item-total-price">
                <div className="allitem-total-price">
                  <p>Thành tiền:</p>
                  <p className="total-price">
                    {cartItem.quantity * cartItem.price}đ
                  </p>
                </div>
                <div className="icon-delete">
                  <a onClick={() => deleteCartItems(cartItem)}>
                    <i class="fa-solid fa-trash-can"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
export function Boxrightlayout() {
  const { cartItemsshop } = useContext(Appcontext);
  const [moneytopay, setmoneytopay] = useState(0);
  const calculator = () => {
    let totalmoney = 0;
    cartItemsshop.map(
      (cartItem) => (totalmoney += cartItem.quantity * cartItem.price)
    );
    setmoneytopay(totalmoney);
  };

  useEffect(() => {
    calculator();
  });
  return (
    <>
      <div className="Box-rightlayout">
        <div className="Small-box">
          <div className="Product-info">
            <p>Thông tin đơn hàng</p>
          </div>
          <div className="Pricetotal">
            <p>
              Tổng tiền <span>{moneytopay.toLocaleString()}₫</span>
            </p>
          </div>
          <div className="notes">
            <p>Bạn có thể nhập mã giảm giá ở trang thanh toán</p>
          </div>
          <div className="buttonpay">
            <a className="pay-button">THANH TOÁN</a>
          </div>
        </div>
      </div>
    </>
  );
}
