import React, { useState } from 'react';
import './QuickView.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faGooglePlus } from '@fortawesome/free-brands-svg-icons';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import CLOSE from '../assets/images/icon-close2.png';
// import CartSidebar from './CartSidebar';

const QuickView = ({ product, isOpen, onClose }) => {
  const [quantity, setQuantity] = useState(1);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const handleIncrement = () => {
    setQuantity(prev => prev + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  const handleAddToCart = () => {
    const newItem = {
      ...product,
      quantity: quantity
    };
    setCartItems(prevItems => [...prevItems, newItem]);
    setIsCartOpen(true);
  };

  if (!isOpen) return null;

  return (
    <>
      <div className="wrap-modal1 js-modal1 p-t-60 p-b-20 show-modal1">
        <div className="overlay-modal1 js-hide-modal1" onClick={onClose}></div>

        <div className="container">
          <div className="bg0 p-t-60 p-b-30 p-lr-15-lg how-pos3-parent">
            <button className="how-pos3 hov3 trans-04 js-hide-modal1" onClick={onClose}>
              <img src={CLOSE} alt="CLOSE" />
            </button>
            <div className="row">
              <div className="col-md-6 col-lg-7 p-b-30">
                <div className="p-l-25 p-r-30 p-lr-0-lg">
                  <div className="wrap-slick3 flex-sb flex-w">
                    <div className="wrap-slick3-dots">
                      <ul className="slick3-dots" role="tablist">
                        <li className="slick-active" role="presentation">
                          <img src={product.image} alt="Product" />
                          <div className="slick3-dot-overlay"></div>
                        </li>
                      </ul>
                    </div>

                    <div className="wrap-slick3-arrows flex-sb-m flex-w">
                      <button className="arrow-slick3 prev-slick3 slick-arrow">
                        <i className="fa fa-angle-left" aria-hidden="true"></i>
                      </button>
                      <button className="arrow-slick3 next-slick3 slick-arrow">
                        <i className="fa fa-angle-right" aria-hidden="true"></i>
                      </button>
                    </div>

                    <div className="slick3 gallery-lb">
                      <div className="item-slick3" data-thumb={product.image}>
                        <div className="wrap-pic-w pos-relative">
                          <img src={product.image} alt="IMG-PRODUCT" />
                          <a className="flex-c-m size-108 how-pos1 bor0 fs-16 cl10 bg0 hov-btn3 trans-04" href={product.image}>
                            <i className="fa fa-expand"></i>
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
                    {product.name}
                  </h4>

                  <span className="mtext-106 cl2">
                    ${product.price}
                  </span>

                  <p className="stext-102 cl3 p-t-23">
                    {product.description}
                  </p>
                  
                  <div className="p-t-33">
                    <div className="flex-w flex-r-m p-b-10">
                      <div className="size-203 flex-c-m respon6">
                        Size
                      </div>

                      <div className="size-204 respon6-next">
                        <div className="rs1-select2 bor8 bg0">
                          <select className="js-select2" name="time">
                            <option>Choose an option</option>
                            <option>Size S</option>
                            <option>Size M</option>
                            <option>Size L</option>
                            <option>Size XL</option>
                          </select>
                          <div className="dropDownSelect2"></div>
                        </div>
                      </div>
                    </div>

                    <div className="flex-w flex-r-m p-b-10">
                      <div className="size-203 flex-c-m respon6">
                        Color
                      </div>

                      <div className="size-204 respon6-next">
                        <div className="rs1-select2 bor8 bg0">
                          <select className="js-select2" name="time">
                            <option>Choose an option</option>
                            <option>Red</option>
                            <option>Blue</option>
                            <option>White</option>
                            <option>Grey</option>
                          </select>
                          <div className="dropDownSelect2"></div>
                        </div>
                      </div>
                    </div>

                    <div className="flex-w flex-r-m p-b-10">
                      <div className="size-204 flex-w flex-m respon6-next">
                        <div className="wrap-num-product flex-w m-r-20 m-tb-10">
                          <div className="btn-num-product-down cl8 hov-btn3 trans-04 flex-c-m" onClick={handleDecrement}>
                            <FontAwesomeIcon icon={faMinus} />
                          </div>

                          <input 
                            className="mtext-104 cl3 txt-center num-product" 
                            type="number" 
                            name="num-product" 
                            value={quantity}
                            readOnly
                          />

                          <div className="btn-num-product-up cl8 hov-btn3 trans-04 flex-c-m" onClick={handleIncrement}>
                            <FontAwesomeIcon icon={faPlus} />
                          </div>
                        </div>

                        <button className="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04 js-addcart-detail" onClick={handleAddToCart}>
                          Add to cart
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="flex-w flex-m p-l-100 p-t-40 respon7">
                    <div className="flex-m bor9 p-r-10 m-r-11">
                      <i className="zmdi zmdi-favorite"></i>
                    </div>

                    <a href="#" className="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 m-r-8 tooltip100" data-tooltip="Facebook">
                      <FontAwesomeIcon icon={faFacebook} />
                    </a>

                    <a href="#" className="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 m-r-8 tooltip100" data-tooltip="Twitter">
                      <FontAwesomeIcon icon={faTwitter} />
                    </a>

                    <a href="#" className="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 m-r-8 tooltip100" data-tooltip="Google Plus">
                      <FontAwesomeIcon icon={faGooglePlus} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <CartSidebar 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        cartItems={cartItems} 
      /> */}
    </>
  );
};

export default QuickView; 