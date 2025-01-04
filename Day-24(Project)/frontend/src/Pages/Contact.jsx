import React, { useEffect } from 'react'
import img2 from "../image1/img_2.jpg"

import img3 from "../image1/img_3.jpg"
import img4 from "../image1/img_4.jpg"
import img5 from "../image1/img_5.jpg"
import Aside from './Aside'

const Contact = () => {
  useEffect(() => {
    // Initialize Owl Carousel
    if (typeof window !== 'undefined') {
      // Check if jQuery and OwlCarousel are available
      if (window.jQuery && jQuery.fn.owlCarousel) {
        jQuery('.probootstrap-owl').owlCarousel({
          loop: true,
          margin: 20,
          nav: false,
          dots: true,
          responsive: {
            0: {
              items: 1
            },
            600: {
              items: 2
            },
            1000: {
              items: 3
            }
          }
        });
      }
    }
  }, []); // Empty dependency array means this runs once when component mounts

  return (
    <div>
        <>

    <Aside/>

  <main role="main" className="probootstrap-main js-probootstrap-main">
    <div className="probootstrap-bar">
      <a href="#" className="probootstrap-toggle js-probootstrap-toggle">
        <span className="oi oi-menu" />
      </a>
      <div className="probootstrap-main-site-logo">
        <a href="index.html">Aside</a>
      </div>
    </div>
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-xl-8 col-lg-12">
          <p className="mb-5">
            <img
              src={img2}
              alt="Free Bootstrap 4 Template by uicookies.com"
              className="img-fluid"
            />
          </p>
          <div className="row">
            <div className="col-xl-8 col-lg-12 mx-auto">
              <h1 className="mb-5">Far Far Away, Behind The Word Mountains</h1>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast of the Semantics,
                a large language ocean.
              </p>
              <p>
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia. It is a paradisematic country, in
                which roasted parts of sentences fly into your mouth.
              </p>
              <p>
                Even the all-powerful Pointing has no control about the blind
                texts it is an almost unorthographic life One day however a
                small line of blind text by the name of Lorem Ipsum decided to
                leave for the far World of Grammar.
              </p>
              <p>
                The Big Oxmox advised her not to do so, because there were
                thousands of bad Commas, wild Question Marks and devious
                Semikoli, but the Little Blind Text didn’t listen. She packed
                her seven versalia, put her initial into the belt and made
                herself on the way.
              </p>
              <p>
                When she reached the first hills of the Italic Mountains, she
                had a last view back on the skyline of her hometown
                Bookmarksgrove, the headline of Alphabet Village and the subline
                of her own road, the Line Lane. Pityful a rethoric question ran
                over her cheek, then she continued her way.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* END row */}
      <section className="probootstrap-section">
        <div className="container-fluid">
          <div className="row mb-5 justify-content-center">
            <div className="col-md-8">
              <div className="row">
                <div className="col-md-8 mx-auto">
                  <h2 className="h1 mb-5 mt-0">Related Projects</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="row mb-5">
            <div className="col-md-12">
              <div className="owl-carousel probootstrap-owl">
                <div className="item">
                  <img
                    src={img2}
                    className="img-fluid"
                    alt="Free Template by uicookies.com"
                  />
                  <div className="p-4 border border-top-0">
                    <h4>Craig Smith</h4>
                    <p>
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts.
                    </p>
                  </div>
                </div>
                <div className="item">
                  <img
                    src={img3}
                    className="img-fluid"
                    alt="Free Template by uicookies.com"
                  />
                  <div className="p-4 border border-top-0">
                    <h4>Peter Wood</h4>
                    <p>
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts.
                    </p>
                  </div>
                </div>
                <div className="item">
                  <img
                    src={img4}
                    className="img-fluid"
                    alt="Free Template by uicookies.com"
                  />
                  <div className="p-4 border border-top-0">
                    <h4>James Carl</h4>
                    <p>
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts.
                    </p>
                  </div>
                </div>
                <div className="item">
                  <img
                    src={img5}
                    className="img-fluid"
                    alt="Free Template by uicookies.com"
                  />
                  <div className="p-4 border border-top-0">
                    <h4>Craig Smith</h4>
                    <p>
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END section */}
    </div>
    <div className="container-fluid d-md-none">
      <div className="row">
        <div className="col-md-12">
          <ul className="list-unstyled d-flex probootstrap-aside-social">
            <li>
              <a href="#" className="p-2">
                <span className="icon-twitter" />
              </a>
            </li>
            <li>
              <a href="#" className="p-2">
                <span className="icon-instagram" />
              </a>
            </li>
            <li>
              <a href="#" className="p-2">
                <span className="icon-dribbble" />
              </a>
            </li>
          </ul>
          <p>
            © 2017{" "}
            <a href="https://uicookies.com/" target="_blank">
              uiCookies:Aside
            </a>
            . <br /> All Rights Reserved. Designed by{" "}
            <a href="https://uicookies.com/" target="_blank">
              uicookies.com
            </a>
          </p>
        </div>
      </div>
    </div>
  </main>
</>

    </div>
  )
}

export default Contact