import React from 'react'
import iconpay from '../assets/images/icon-pay-01.png'
import iconpay2 from '../assets/images/icon-pay-02.png'
import iconpay3 from '../assets/images/icon-pay-03.png'
import iconpay4 from '../assets/images/icon-pay-04.png'
import iconpay5 from '../assets/images/icon-pay-05.png'

const Footer = () => {
  return (
    <div>
          <footer className="bg3 p-t-75 p-b-32">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-lg-3 p-b-50">
              <h4 className="stext-301 cl0 p-b-30">Categories</h4>
              <ul>
                <li className="p-b-10">
                  <a href="#" className="stext-107 cl7 hov-cl1 trans-04">
                    {" "}
                    Women{" "}
                  </a>
                </li>
                <li className="p-b-10">
                  <a href="#" className="stext-107 cl7 hov-cl1 trans-04">
                    {" "}
                    Men{" "}
                  </a>
                </li>
                <li className="p-b-10">
                  <a href="#" className="stext-107 cl7 hov-cl1 trans-04">
                    {" "}
                    Shoes{" "}
                  </a>
                </li>
                <li className="p-b-10">
                  <a href="#" className="stext-107 cl7 hov-cl1 trans-04">
                    {" "}
                    Watches{" "}
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-sm-6 col-lg-3 p-b-50">
              <h4 className="stext-301 cl0 p-b-30">Help</h4>
              <ul>
                <li className="p-b-10">
                  <a href="#" className="stext-107 cl7 hov-cl1 trans-04">
                    Track Order
                  </a>
                </li>
                <li className="p-b-10">
                  <a href="#" className="stext-107 cl7 hov-cl1 trans-04">
                    {" "}
                    Returns{" "}
                  </a>
                </li>
                <li className="p-b-10">
                  <a href="#" className="stext-107 cl7 hov-cl1 trans-04">
                    Shipping
                  </a>
                </li>
                <li className="p-b-10">
                  <a href="#" className="stext-107 cl7 hov-cl1 trans-04">
                    {" "}
                    FAQs{" "}
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-sm-6 col-lg-3 p-b-50">
              <h4 className="stext-301 cl0 p-b-30">GET IN TOUCH</h4>
              <p className="stext-107 cl7 size-201">
                Any questions? Let us know in store at 8th floor, 379 Hudson St,
                New York, NY 10018 or call us on (+1) 96 716 6879
              </p>
              <div className="p-t-27">
                <a href="#" className="fs-18 cl7 hov-cl1 trans-04 m-r-16">
                  <i className="fa-brands fa-facebook" />
                </a>
                <a href="#" className="fs-18 cl7 hov-cl1 trans-04 m-r-16">
                  <i className="fa-brands fa-instagram" />
                </a>
                <a href="#" className="fs-18 cl7 hov-cl1 trans-04 m-r-16">
                  <i className="fa-brands fa-pinterest-p" />
                </a>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3 p-b-50">
              <h4 className="stext-301 cl0 p-b-30">Newsletter</h4>
              <form>
                <div className="wrap-input1 w-full p-b-4">
                  <input
                    className="input1 bg-none plh1 stext-107 cl7"
                    type="text"
                    name="email"
                    placeholder="email@example.com"
                  />
                  <div className="focus-input1 trans-04" />
                </div>
                <div className="p-t-18">
                  <button className="flex-c-m stext-101 cl0 size-103 bg1 bor1 hov-btn2 p-lr-15 trans-04">
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="p-t-40">
            <div className="flex-c-m flex-w p-b-18">
              <a href="#" className="m-all-1">
                <img src={iconpay} alt="ICON-PAY" />
              </a>
              <a href="#" className="m-all-1">
                <img src={iconpay2} alt="ICON-PAY" />
              </a>
              <a href="#" className="m-all-1">
                <img src={iconpay3} alt="ICON-PAY" />
              </a>
              <a href="#" className="m-all-1">
                <img src={iconpay4} alt="ICON-PAY" />
              </a>
              <a href="#" className="m-all-1">
                <img src={iconpay5} alt="ICON-PAY" />
              </a>
            </div>
     
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer