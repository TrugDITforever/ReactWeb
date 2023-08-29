import { createContext, useState } from "react";

export const Appcontext = createContext();
export const AppProvider = ({ children }) => {
  const [Creategrp, setupdateCLick3] = useState(false);
  const [formappear, setupdateCLick] = useState(false);
  const [signupappear, setupdateCLick2] = useState(false);
  const [appear, setappear] = useState(true);
  const [account, setaccoutname] = useState(false);
  const [cartappear, updatecart] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [cartItemsshop, setCartItemsShop] = useState([]);
  const [texttosearch, settexttosearch] = useState("all");
  const [products, setProducts] = useState([
    {
      id: 1,
      decrip: "th",
      name: "Sách Người Trong Muôn Nghề: Ngành Sáng Tạo Và Nghệ Thuật Có Gì? - Hướng Nghiệp Toàn Diện Ngành Sáng Tạo Nghệ Thuật (Tái bản 219k)",
      price: 89000,
      imges:
        "https://product.hstatic.net/200000123069/product/sang-tao-nghe-thuat_070597e891bb419e8c3fbe2e574e42e6_master.png",
    },
    {
      id: 2,
      decrip: "th",
      name: "Sách Siêu Nhí Hỏi",
      price: 79000,
      imges:
        "https://toplist.vn/images/800px/sieu-nhi-hoi-nha-khoa-hoc-tra-loi-100-bi-an-moi-dua-tre-deu-muon-hoi-mot-nha-khoa-hoc-748175.jpg",
    },
    {
      id: 3,
      decrip: "th",
      name: "Sách 10 Vạn câu hỏi vì sao",
      price: 79000,
      imges:
        "https://dongphuchaianh.com/wp-content/uploads/2021/05/nhung-cuon-sach-hay-cho-hoc-sinh-6.jpg",
    },
    {
      id: 4,
      decrip: "th",
      name: "Sách Thỏ bảy màu",
      price: 79000,
      imges: "https://bookbuy.vn/Res/Images/Product/tho-bay-mau_41972_1.PNG",
    },
    {
      id: 5,
      decrip: "th",
      name: "Combo 5 cuốn sách kĩ năng cho trẻ",
      price: 179000,
      imges:
        "https://salt.tikicdn.com/ts/product/54/7d/75/6c21e268aa26dcbb33845bfcbd544cd4.jpg",
    },
    {
      id: 6,
      name: "Sách Tôi Tự Học",
      decrip: "thcs",

      price: 89000,
      imges:
        "https://images.toplist.vn/images/800px/toi-tu-hoc-thu-giang-nguyen-duy-can-703153.jpg",
    },
    {
      id: 7,
      decrip: "thcs",

      name: "Sách Học Khôn Ngoan Mà không Gian Nan",
      price: 79000,
      imges:
        "https://dongphuchaianh.com/wp-content/uploads/2021/05/nhung-cuon-sach-hay-cho-hoc-sinh-5.jpg",
    },
    {
      id: 8,
      decrip: "thcs",

      name: "Sách Tuổi dậy thì của Eddie & Marley",
      price: 79000,
      imges:
        "https://muagitot.com/upload_images/images/2022/03/17/309861fbce907b2a610af1a71a3b5a35.jpg",
    },
    {
      id: 9,
      decrip: "thcs",

      name: "Sổ tay kiến thức toán cho THCS",
      price: 79000,
      imges:
        "https://vn-live-01.slatic.net/p/e86b75436022182a48ab98004e17fb6f.jpg",
    },
    {
      id: 10,
      decrip: "thcs",

      name: "Bộ chinh phục ngữ pháp Tiếng Anh",
      price: 169000,
      imges:
        "https://vn-live-01.slatic.net/p/432134ac311eecd6e9077509a186e4de.png",
    },
    {
      id: 11,
      decrip: "thcs",
      name: "Combo Sách lớp 8,9 - Giải cứu Mất gốc Từ vựng, Ngữ pháp Tiếng Anh THCS dành cho lớp 8,9",
      price: 240000,
      imges:
        "https://bizweb.dktcdn.net/100/445/730/products/1647509752730-3-jpeg-3a52c7e6-5bff-4515-9340-631044b7dc45.jpg?v=1647510425077",
    },
    {
      id: 12,
      decrip: "thcs",
      name: "Sống Hết Mình Cho Ngày Hôm Nay",
      price: 89000,
      imges:
        "https://vnibooks.com/wp-content/uploads/2022/05/Song-het-minh-cho-ngay-hom-nay-768x768.jpg.webp",
    },
    {
      id: 13,
      decrip: "thcs",
      name: "Phương Pháp Học Tập Thông Minh",
      price: 79000,
      imges:
        "https://phongreviews.com/wp-content/uploads/2022/06/nhung-cuon-sach-hay-cho-hoc-sinh-cap-2-3.jpg",
    },
    {
      id: 14,
      decrip: "special",
      name: "Trọn bộ 7 cuốn Harry Potter",
      price: 140000,
      imges:
        "https://monkeymedia.vcdn.com.vn/upload/web/img/tre-10-tuoi-nen-doc-sach-gi.jpg",
    },
    {
      id: 15,
      decrip: "special",
      name: "Tiểu thuyết Không gia đình",
      price: 140000,
      imges:
        "https://monkeymedia.vcdn.com.vn/upload/web/img/tre-10-tuoi-nen-doc-sach-gi-2.jpg",
    },
    {
      id: 16,
      decrip: "special",
      name: "Cánh buồm đỏ thắm",
      price: 140000,
      imges:
        "https://monkeymedia.vcdn.com.vn/upload/web/img/tre-10-tuoi-nen-doc-sach-gi-3.jpg",
    },
    {
      id: 17,
      decrip: "thpt",
      name: " Bộ sách Bí Quyết Chinh Phục Điểm Cao Kì Thi THPT Quốc Gia",
      price: 140000,
      imges:
        "https://www.reader.com.vn/uploads/images/bo-sach-bi-quyet-chinh-phuc-diem-cao-ky-thi-thpt-quoc-gia.jpg",
    },
    {
      id: 18,
      decrip: "thpt",
      name: "Bộ sách Đột phá 8+ kỳ thi THPT Quốc gia",
      price: 140000,
      imges:
        "https://www.reader.com.vn/uploads/images/bo-sach-dot-pha-8+ky-thi-thpt-quoc-gia.jpg",
    },
    {
      id: 19,
      decrip: "thpt",
      name: "Bộ sách 3 STEP - Tiết lộ bí quyết 3 bước đạt điểm 8+",
      price: 140000,
      imges:
        "https://www.reader.com.vn/uploads/images/bo-sach-3-step-tiet-lo-bi-quyet-3-buoc-dat-diem-cao-8+-2022.jpeg",
    },
    {
      id: 20,
      decrip: "thpt",
      name: "Bộ sách Infographic Chinh phục Kỳ thi THPT Quốc gia",
      price: 140000,
      imges:
        "https://www.reader.com.vn/uploads/images/bo-sach-infographic-chinh-phuc-ky-thi-thpt-quoc-gia(1).jpg",
    },
  ]);
  const [Wordtitle, setWordtitle] = useState("Tất cả sản phẩm");

  return (
    <Appcontext.Provider
      value={{
        Creategrp,
        formappear,
        signupappear,
        cartappear,
        cartCount,
        cartItems,
        cartItemsshop,
        products,
        Wordtitle,
        texttosearch,
        settexttosearch,
        setWordtitle,
        setCartItemsShop,
        setCartItems,
        setCartCount,
        setupdateCLick3,
        setupdateCLick,
        setupdateCLick2,
        updatecart,
        appear,
        setappear,
        account,
        setaccoutname,
      }}
    >
      {children}
    </Appcontext.Provider>
  );
};
