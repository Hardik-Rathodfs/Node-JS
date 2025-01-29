import React from "react";
import '../assets/style.css'
import '../assets/util.css'
import '../assets/slick.css'
import '../assets/animate.css'
// import '../assets/main.js'   
// import '../assets/parallax100.js'
import '../assets/slick-custom.js'
// import '../assets/jquery-3.2.1.min.js'
import Header from "../Components/Header.jsx";
import Banner from "../Components/Banner.jsx";
import Product from "../Components/Product.jsx";
import Footer from "../Components/Footer.jsx";
import Corosoul from "../Components/Corosoul.jsx";

export const Home = () => {
  return (
    <>
      <title>Home</title>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      {/*===============================================================================================*/}
      <link rel="icon" type="image/png" href="assets/images/favicon.png" />
      {/*===============================================================================================*/}

      <link
        rel="stylesheet"
        type="text/css"
        href="fonts/linearicons-v1.0.0/icon-font.min.css"
      />
      {/*===============================================================================================*/}
      <link rel="stylesheet" type="text/css" href="animate.css" />
      {/*===============================================================================================*/}
      <link
        rel="stylesheet"
        type="text/css"
        href="vendor/css-hamburgers/hamburgers.min.css"
      />
      {/*===============================================================================================*/}
      <link
        rel="stylesheet"
        type="text/css"
        href="vendor/animsition/css/animsition.min.css"
      />
      {/*===============================================================================================*/}
      <link
        rel="stylesheet"
        type="text/css"
        href="vendor/select2/select2.min.css"
      />
      {/*===============================================================================================*/}
      <link
        rel="stylesheet"
        type="text/css"
        href="vendor/daterangepicker/daterangepicker.css"
      />
      {/*===============================================================================================*/}
      <link rel="stylesheet" type="text/css" href="vendor/slick/slick.css" />
      {/*===============================================================================================*/}
      <link
        rel="stylesheet"
        type="text/css"
        href="vendor/MagnificPopup/magnific-popup.css"
      />
      {/*===============================================================================================*/}
      <link
        rel="stylesheet"
        type="text/css"
        href="vendor/perfect-scrollbar/perfect-scrollbar.css"
      />
      {/*===============================================================================================*/}
      <link rel="stylesheet" type="text/css" href="assets/util.css" />
      <link rel="stylesheet" type="text/css" href="assets/style.css" />
      <link rel="stylesheet" href="assets/slick.css" />
      {/*===============================================================================================*/}
      <script
        src="https://cdnjs.cloudflare.com/ajax/libs/animsition/4.0.2/js/animsition.min.js"
        integrity="sha512-pYd2QwnzV9JgtoARJf1Ui1q5+p1WHpeAz/M0sUJNprhDviO4zRo12GLlk4/sKBRUCtMHEmjgqo5zcrn8pkdhmQ=="
        crossorigin="anonymous"
        referrerpolicy="no-referrer"
      ></script>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/material-design-iconic-font/2.2.0/css/material-design-iconic-font.min.css"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        integrity="sha512-c42qTSw/wPZ3/5LBzD+Bw5f7bSF2oxou6wEb+I/lqeaKV5FDIfMvvRp772y4jcJLKuGUOpbJMdg/BTl50fJYAw=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      />
      <link
        rel="stylesheet"
        href="	https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"
        integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/material-design-iconic-font/2.2.0/css/material-design-iconic-font.min.css"
        integrity="sha512-rRQtF4V2wtAvXsou4iUAs2kXHi3Lj9NE7xJR77DE7GHsxgY9RTWy93dzMXgDIG8ToiRTD45VsDNdTiUagOFeZA=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        integrity="sha512-c42qTSw/wPZ3/5LBzD+Bw5f7bSF2oxou6wEb+I/lqeaKV5FDIfMvvRp772y4jcJLKuGUOpbJMdg/BTl50fJYAw=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/material-design-iconic-font/2.2.0/css/material-design-iconic-font.min.css"
        integrity="sha512-rRQtF4V2wtAvXsou4iUAs2kXHi3Lj9NE7xJR77DE7GHsxgY9RTWy93dzMXgDIG8ToiRTD45VsDNdTiUagOFeZA=="
        crossorigin="anonymous"
        referrerpolicy="no-referrer"
      />
      {/* Header */}
  <Header/>
  <Corosoul/>

      {/* Banner */}
     <Banner/>

      {/* Product */}
    <Product/>

      {/* Footer */}
    <Footer/>
      {/* Back to top */}
      <div className="btn-back-to-top" id="myBtn">
        <span className="symbol-btn-back-to-top">
          <i className="zmdi zmdi-chevron-up" />
        </span>
      </div>
      {/* Modal1 */}
      <div className="wrap-modal1 js-modal1 p-t-60 p-b-20">
        <div className="overlay-modal1 js-hide-modal1" />
        <div className="container">
          <div className="bg0 p-t-60 p-b-30 p-lr-15-lg how-pos3-parent">
            <button className="how-pos3 hov3 trans-04 js-hide-modal1">
              <img src="images/icon-close.png" alt="CLOSE" />
            </button>
            <div className="row">
              <div className="col-md-6 col-lg-7 p-b-30">
                <div className="p-l-25 p-r-30 p-lr-0-lg">
                  <div className="wrap-slick3 flex-sb flex-w">
                    <div className="wrap-slick3-dots" />
                    <div className="wrap-slick3-arrows flex-sb-m flex-w" />
                    <div className="slick3 gallery-lb">
                      <div
                        className="item-slick3"
                        data-thumb="images/product-detail-01.jpg"
                      >
                        <div className="wrap-pic-w pos-relative">
                          <img
                            src="images/product-detail-01.jpg"
                            alt="IMG-PRODUCT"
                          />
                          <a
                            className="flex-c-m size-108 how-pos1 bor0 fs-16 cl10 bg0 hov-btn3 trans-04"
                            href="images/product-detail-01.jpg"
                          >
                            <i className="fa fa-expand" />
                          </a>
                        </div>
                      </div>
                      <div
                        className="item-slick3"
                        data-thumb="images/product-detail-02.jpg"
                      >
                        <div className="wrap-pic-w pos-relative">
                          <img
                            src="images/product-detail-02.jpg"
                            alt="IMG-PRODUCT"
                          />
                          <a
                            className="flex-c-m size-108 how-pos1 bor0 fs-16 cl10 bg0 hov-btn3 trans-04"
                            href="images/product-detail-02.jpg"
                          >
                            <i className="fa fa-expand" />
                          </a>
                        </div>
                      </div>
                      <div
                        className="item-slick3"
                        data-thumb="images/product-detail-03.jpg"
                      >
                        <div className="wrap-pic-w pos-relative">
                          <img
                            src="images/product-detail-03.jpg"
                            alt="IMG-PRODUCT"
                          />
                          <a
                            className="flex-c-m size-108 how-pos1 bor0 fs-16 cl10 bg0 hov-btn3 trans-04"
                            href="images/product-detail-03.jpg"
                          >
                            <i className="fa fa-expand" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-5 p-b-30">
                <div className="p-r-50 p-t-5 p-lr-0-lg">
                  <h4 className="mtext-105 cl2 js-name-detail p-b-14">
                    Lightweight Jacket
                  </h4>
                  <span className="mtext-106 cl2"> $58.79 </span>
                  <p className="stext-102 cl3 p-t-23">
                    Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus
                    ligula. Mauris consequat ornare feugiat.
                  </p>
                  {/*  */}
                  <div className="p-t-33">
                    <div className="flex-w flex-r-m p-b-10">
                      <div className="size-203 flex-c-m respon6">Size</div>
                      <div className="size-204 respon6-next">
                        <div className="rs1-select2 bor8 bg0">
                          <select className="js-select2" name="time">
                            <option>Choose an option</option>
                            <option>Size S</option>
                            <option>Size M</option>
                            <option>Size L</option>
                            <option>Size XL</option>
                          </select>
                          <div className="dropDownSelect2" />
                        </div>
                      </div>
                    </div>
                    <div className="flex-w flex-r-m p-b-10">
                      <div className="size-203 flex-c-m respon6">Color</div>
                      <div className="size-204 respon6-next">
                        <div className="rs1-select2 bor8 bg0">
                          <select className="js-select2" name="time">
                            <option>Choose an option</option>
                            <option>Red</option>
                            <option>Blue</option>
                            <option>White</option>
                            <option>Grey</option>
                          </select>
                          <div className="dropDownSelect2" />
                        </div>
                      </div>
                    </div>
                    <div className="flex-w flex-r-m p-b-10">
                      <div className="size-204 flex-w flex-m respon6-next">
                        <div className="wrap-num-product flex-w m-r-20 m-tb-10">
                          <div className="btn-num-product-down cl8 hov-btn3 trans-04 flex-c-m">
                            <i className="fs-16 zmdi zmdi-minus" />
                          </div>
                          <input
                            className="mtext-104 cl3 txt-center num-product"
                            type="number"
                            name="num-product"
                            defaultValue={1}
                          />
                          <div className="btn-num-product-up cl8 hov-btn3 trans-04 flex-c-m">
                            <i className="fs-16 zmdi zmdi-plus" />
                          </div>
                        </div>
                        <button className="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04 js-addcart-detail">
                          Add to cart
                        </button>
                      </div>
                    </div>
                  </div>
                  {/*  */}
                  <div className="flex-w flex-m p-l-100 p-t-40 respon7">
                    <div className="flex-m bor9 p-r-10 m-r-11">
                      <a
                        href="#"
                        className="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 js-addwish-detail tooltip100"
                        data-tooltip="Add to Wishlist"
                      >
                        <i className="zmdi zmdi-favorite" />
                      </a>
                    </div>
                    <a
                      href="#"
                      className="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 m-r-8 tooltip100"
                      data-tooltip="Facebook"
                    >
                      <i className="fa fa-facebook" />
                    </a>
                    <a
                      href="#"
                      className="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 m-r-8 tooltip100"
                      data-tooltip="Twitter"
                    >
                      <i className="fa fa-twitter" />
                    </a>
                    <a
                      href="#"
                      className="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 m-r-8 tooltip100"
                      data-tooltip="Google Plus"
                    >
                      <i className="fa fa-google-plus" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*===============================================================================================*/}
      {/*===============================================================================================*/}
      {/*===============================================================================================*/}
      {/*===============================================================================================*/}
      {/*===============================================================================================*/}
      {/*===============================================================================================*/}
      {/*===============================================================================================*/}
      {/*===============================================================================================*/}
      {/*===============================================================================================*/}
      {/*===============================================================================================*/}
      {/*===============================================================================================*/}
      {/* Global site tag (gtag.js) - Google Analytics */}
    </>
  );
};
