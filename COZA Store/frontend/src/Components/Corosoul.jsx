import React from 'react'
import slider1 from '../assets/images/slide-01.jpg'
import slider2 from '../assets/images/slide-02.jpg'
import slider3 from '../assets/images/slide-03.jpg'
const Corosoul = () => {
  return (
    <div>
   {/* Slider */}
   <div
      id="carouselExampleControls"
   className="carousel slide"
  data-bs-ride="carousel"
>
  <div className="carousel-inner">
    
    <div className="carousel-item active">
      
    <div
                      className="item-slick1"
                      style={{  backgroundImage: `url(${slider1})`, 
                      backgroundSize: "cover", 
                      backgroundPosition: "center", 
                       backgroundRepeat: "no-repeat"}}
                    >
                      <div className="container h-full">
                        <div className="flex-col-l-m h-full p-t-100 p-b-30 respon5">
                          <div
                            className="layer-slick1 animated "
                            data-appear="fadeInDown"
                            data-delay={0}
                          >
                            <span className="ltext-101 cl2 respon2">
                              Women Collection 2018
                            </span>
                          </div>
                          <div
                            className="layer-slick1 animated "
                            data-appear="fadeInUp"
                            data-delay={800}
                          >
                            <h2 className="ltext-201 cl2 p-t-19 p-b-43 respon1">
                              NEW SEASON
                            </h2>
                          </div>
                          <div
                            className="layer-slick1 animated "
                            data-appear="zoomIn"
                            data-delay={1600}
                          >
                            <a
                              href="product.html"
                              className="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04"
                            >
                              Shop Now
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
      
    </div>
    <div className="carousel-item">
    <div
                      className="item-slick1"
                      style={{  backgroundImage: `url(${slider2})`, 
                      backgroundSize: "cover", 
                      backgroundPosition: "center", 
                       backgroundRepeat: "no-repeat"}}
                    >
                      <div className="container h-full">
                        <div className="flex-col-l-m h-full p-t-100 p-b-30 respon5">
                          <div
                            className="layer-slick1 animated "
                            data-appear="rollIn"
                            data-delay={0}
                          >
                            <span className="ltext-101 cl2 respon2">
                              {" "}
                              Men New-Season{" "}
                            </span>
                          </div>
                          <div
                            className="layer-slick1 animated "
                            data-appear="lightSpeedIn"
                            data-delay={800}
                          >
                            <h2 className="ltext-201 cl2 p-t-19 p-b-43 respon1">
                              Jackets &amp; Coats
                            </h2>
                          </div>
                          <div
                            className="layer-slick1 animated "
                            data-appear="slideInUp"
                            data-delay={1600}
                          >
                            <a
                              href="product.html"
                              className="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04"
                            >
                              Shop Now
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
 
    </div>
    <div className="carousel-item">
    <div
                      className="item-slick1"
                      style={{  backgroundImage: `url(${slider3})`}}
                    >
                      <div className="container h-full">
                        <div className="flex-col-l-m h-full p-t-100 p-b-30 respon5">
                          <div
                            className="layer-slick1 animated "
                            data-appear="rotateInDownLeft"
                            data-delay={0}
                          >
                            <span className="ltext-101 cl2 respon2">
                              Men Collection 2018
                            </span>
                          </div>
                          <div
                            className="layer-slick1 animated "
                            data-appear="rotateInUpRight"
                            data-delay={800}
                          >
                            <h2 className="ltext-201 cl2 p-t-19 p-b-43 respon1">
                              New arrival
                            </h2>
                          </div>
                          <div
                            className="layer-slick1 animated "
                            data-appear="rotateIn"
                            data-delay={1600}
                          >
                            <a
                              href="product.html"
                              className="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04"
                            >
                              Shop Now
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
    
    </div>
  </div>
  <button
    className="carousel-control-prev"
    type="button"
    data-bs-target="#carouselExampleControls"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next"
    type="button"
    data-bs-target="#carouselExampleControls"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}

export default Corosoul