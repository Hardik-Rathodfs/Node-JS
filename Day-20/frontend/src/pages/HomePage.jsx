import React from "react";
import shutterbug from "../assets/images/shutterbug-400.jpg";
import jump from "../assets/images/jump-400.jpg";
import user3 from "../assets/images/user-01.jpg";
import user1 from "../assets/images/user-02.jpg";
import user2 from "../assets/images/user-03.jpg";
import user4 from "../assets/images/user-04.jpg";
import wheel from "../assets/images/wheel-400.jpg";
import cookies from "../assets/images/cookies-150.jpg";
import cookies4 from "../assets/images/cookies-400.jpg";
import beetle from "../assets/images/beetle-150.jpg";
import tulips from "../assets/images/tulips-150.jpg";
import tulips4 from "../assets/images/tulips-400.jpg";
import salad from "../assets/images/salad-150.jpg";
import lamp from "../assets/images/lamp-400.jpg";
import gallery4 from "../assets/images/lamp-400.jpg";
import "../App.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <>
      <section class="s-pageheader s-pageheader--home">
        <Header/>
        <div className="pageheader-content row">
          <div className="col-full">
            <div className="featured">
              <div className="featured__column featured__column--big">
                <div className="entry bg1">
                  <div className="entry__content">
                    <span className="entry__category">
                      <a>Music</a>
                    </span>

                    <h1>
                      <a>
                        What Your Music Preference Says About You and Your
                        Personality.
                      </a>
                    </h1>

                    <div className="entry__info">
                      <a className="entry__profile-pic">
                        <img className="avatar" src={user3} alt="" />
                      </a>

                      <ul className="entry__meta">
                        <li>
                          <a>John Doe</a>
                        </li>
                        <li>December 29, 2017</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="featured__column featured__column--small">
                <div className="entry bg2">
                  <div className="entry__content">
                    <span className="entry__category">
                      <a>Management</a>
                    </span>

                    <h1>
                      <a>The Pomodoro Technique Really Works.</a>
                    </h1>

                    <div className="entry__info">
                      <a className="entry__profile-pic">
                        <img className="avatar" src={user3} />
                      </a>

                      <ul className="entry__meta">
                        <li>
                          <a>John Doe</a>
                        </li>
                        <li>December 27, 2017</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="entry bg3">
                  <div className="entry__content">
                    <span className="entry__category">
                      <a>LifeStyle</a>
                    </span>

                    <h1>
                      <a title="">Throwback To The Good Old Days.</a>
                    </h1>

                    <div className="entry__info">
                      <a className="entry__profile-pic">
                        <img className="avatar" src={user3} alt="" />
                      </a>

                      <ul className="entry__meta">
                        <li>
                          <a>John Doe</a>
                        </li>
                        <li>December 21, 2017</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="s-content">
        <div class="row masonry-wrap">
          <div class="masonry" id="sy3">
            <div class="grid-sizer"></div>

            <article
              class="masonry__brick entry format-standard aos-init aos-animate"
              data-aos="fade-up"
              id="sy4"
            >
              <div class="entry__thumb">
                <a class="entry__thumb-link">
                  <img src={lamp} alt="" />
                </a>
              </div>

              <div class="entry__text">
                <div class="entry__header">
                  <div class="entry__date">
                    <a>December 15, 2017</a>
                  </div>
                  <h1 class="entry__title">
                    <a>Just a Standard Format Post.</a>
                  </h1>
                </div>
                <div class="entry__excerpt">
                  <p>
                    Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua
                    incididunt mollit id et sit proident dolor nulla sed commodo
                    est ad minim elit reprehenderit nisi officia aute incididunt
                    velit sint in aliqua...
                  </p>
                </div>
                <div class="entry__meta">
                  <span class="entry__meta-links">
                    <a>Design</a>
                    <a>Photography</a>
                  </span>
                </div>
              </div>
            </article>

            <article
              class="masonry__brick entry format-quote aos-init aos-animate"
              data-aos="fade-up"
              id="sy5"
            >
              <div class="entry__thumb">
                <blockquote>
                  <p>
                    Good design is making something intelligible and memorable.
                    Great design is making something memorable and meaningful.
                  </p>

                  <cite>Dieter Rams</cite>
                </blockquote>
              </div>
            </article>

            <article
              class="masonry__brick entry format-standard aos-init aos-animate"
              data-aos="fade-up"
              id="sy6"
            >
              <div class="entry__thumb">
                <a class="entry__thumb-link">
                  <img src={tulips4} alt="" />
                </a>
              </div>

              <div class="entry__text">
                <div class="entry__header">
                  <div class="entry__date">
                    <a>December 15, 2017</a>
                  </div>
                  <h1 class="entry__title">
                    <a>10 Interesting Facts About Caffeine.</a>
                  </h1>
                </div>
                <div class="entry__excerpt">
                  <p>
                    Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua
                    incididunt mollit id et sit proident dolor nulla sed commodo
                    est ad minim elit reprehenderit nisi officia aute incididunt
                    velit sint in aliqua...
                  </p>
                </div>
                <div class="entry__meta">
                  <span class="entry__meta-links">
                    <a>Health</a>
                  </span>
                </div>
              </div>
            </article>

            <article
              class="masonry__brick entry format-standard aos-init aos-animate"
              data-aos="fade-up"
              id="sy7"
            >
              <div class="entry__thumb">
                <a class="entry__thumb-link">
                  <img src={cookies4} alt="" />
                </a>
              </div>

              <div class="entry__text">
                <div class="entry__header">
                  <div class="entry__date">
                    <a>December 10, 2017</a>
                  </div>
                  <h1 class="entry__title">
                    <a>No Sugar Oatmeal Cookies.</a>
                  </h1>
                </div>
                <div class="entry__excerpt">
                  <p>
                    Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua
                    incididunt mollit id et sit proident dolor nulla sed commodo
                    est ad minim elit reprehenderit nisi officia aute incididunt
                    velit sint in aliqua...
                  </p>
                </div>
                <div class="entry__meta">
                  <span class="entry__meta-links">
                    <a>Cooking</a>
                    <a>Health</a>
                  </span>
                </div>
              </div>
            </article>

            <article
              class="masonry__brick entry format-standard aos-init aos-animate"
              data-aos="fade-up"
              id="sy8"
            >
              <div class="entry__thumb">
                <a class="entry__thumb-link">
                  <img src={wheel} alt="" />
                </a>
              </div>

              <div class="entry__text">
                <div class="entry__header">
                  <div class="entry__date">
                    <a>December 10, 2017</a>
                  </div>
                  <h1 class="entry__title">
                    <a>Visiting Theme Parks Improves Your Health.</a>
                  </h1>
                </div>
                <div class="entry__excerpt">
                  <p>
                    Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua
                    incididunt mollit id et sit proident dolor nulla sed commodo
                    est ad minim elit reprehenderit nisi officia aute incididunt
                    velit sint in aliqua...
                  </p>
                </div>
                <div class="entry__meta">
                  <span class="entry__meta-links">
                    <a href="#">Health</a>
                    <a href="#">Lifestyle</a>
                  </span>
                </div>
              </div>
            </article>

            <article
              class="masonry__brick entry format-video aos-init aos-animate"
              data-aos="fade-up"
              id="sy9"
            >
              <div class="entry__thumb video-image">
                <a data-lity="">
                  <img src={shutterbug} alt="" />
                </a>
              </div>

              <div class="entry__text">
                <div class="entry__header">
                  <div class="entry__date">
                    <a href="single-video.html">December 10, 2017</a>
                  </div>
                  <h1 class="entry__title">
                    <a href="single-video.html">
                      Key Benefits Of Family Photography.
                    </a>
                  </h1>
                </div>
                <div class="entry__excerpt">
                  <p>
                    Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua
                    incididunt mollit id et sit proident dolor nulla sed commodo
                    est ad minim elit reprehenderit nisi officia aute incididunt
                    velit sint in aliqua...
                  </p>
                </div>
                <div class="entry__meta">
                  <span class="entry__meta-links">
                    <a>Family</a>
                    <a>Photography</a>
                  </span>
                </div>
              </div>
            </article>

            <article
              class="masonry__brick entry format-gallery aos-init aos-animate"
              data-aos="fade-up"
              id="sy10"
            >
              <div class="entry__thumb slider">
                <div
                  class="slider__slides slick-initialized slick-slider slick-dotted"
                  role="toolbar"
                >
                  <div aria-live="polite" class="slick-list draggable">
                    <div class="slick-track" id="sy11" role="listbox">
                      <div
                        class="slider__slide slick-slide slick-current slick-active"
                        data-slick-index="0"
                        aria-hidden="false"
                        tabindex="-1"
                        role="option"
                        aria-describedby="slick-slide00"
                        id="sy23"
                      >
                        <img
                          src={gallery4}
                          alt=""
                        />
                      </div>
                      <div
                        class="slider__slide slick-slide"
                        data-slick-index="1"
                        aria-hidden="true"
                        tabindex="-1"
                        role="option"
                        aria-describedby="slick-slide01"
                        id="sy12"
                      >
                        <img
                          src="images/thumbs/masonry/gallery/gallery-2-400.jpg"
                          srcset="images/thumbs/masonry/gallery/gallery-2-400.jpg 1x, images/thumbs/masonry/gallery/gallery-2-800.jpg 2x"
                          alt=""
                        />
                      </div>
                      <div
                        class="slider__slide slick-slide"
                        data-slick-index="2"
                        aria-hidden="true"
                        tabindex="-1"
                        role="option"
                        aria-describedby="slick-slide02"
                        id="sy13"
                      >
                        <img
                          src="images/thumbs/masonry/gallery/gallery-3-400.jpg"
                          srcset="images/thumbs/masonry/gallery/gallery-3-400.jpg 1x, images/thumbs/masonry/gallery/gallery-3-800.jpg 2x"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>

                  <ul class="slick-dots" role="tablist">
                    <li
                      class="slick-active"
                      aria-hidden="false"
                      role="presentation"
                      aria-selected="true"
                      aria-controls="navigation00"
                      id="slick-slide00"
                    >
                      <button
                        type="button"
                        data-role="none"
                        role="button"
                        tabindex="0"
                      >
                        1
                      </button>
                    </li>
                    <li
                      aria-hidden="true"
                      role="presentation"
                      aria-selected="false"
                      aria-controls="navigation01"
                      id="slick-slide01"
                    >
                      <button
                        type="button"
                        data-role="none"
                        role="button"
                        tabindex="0"
                      >
                        2
                      </button>
                    </li>
                    <li
                      aria-hidden="true"
                      role="presentation"
                      aria-selected="false"
                      aria-controls="navigation02"
                      id="slick-slide02"
                    >
                      <button
                        type="button"
                        data-role="none"
                        role="button"
                        tabindex="0"
                      >
                        3
                      </button>
                    </li>
                  </ul>
                </div>
              </div>

              <div class="entry__text">
                <div class="entry__header">
                  <div class="entry__date">
                    <a href="single-gallery.html">December 10, 2017</a>
                  </div>
                  <h1 class="entry__title">
                    <a href="single-gallery.html">
                      Workspace Design Trends and Ideas.
                    </a>
                  </h1>
                </div>
                <div class="entry__excerpt">
                  <p>
                    Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua
                    incididunt mollit id et sit proident dolor nulla sed commodo
                    est ad minim elit reprehenderit nisi officia aute incididunt
                    velit sint in aliqua...
                  </p>
                </div>
                <div class="entry__meta">
                  <span class="entry__meta-links">
                    <a>Work</a>
                    <a>Management</a>
                  </span>
                </div>
              </div>
            </article>

            <article
              class="masonry__brick entry format-audio aos-init aos-animate"
              data-aos="fade-up"
              id="sy14"
            >
              <div class="entry__thumb">
                <a href="single-audio.html" class="entry__thumb-link">
                  <img
                    src="images/thumbs/masonry/guitarman-400.jpg"
                    srcset="images/thumbs/masonry/guitarman-400.jpg 1x, images/thumbs/masonry/guitarman-800.jpg 2x"
                    alt=""
                  />
                </a>
                <div class="audio-wrap">
                  <span class="mejs__offscreen">Audio Player</span>
                  <div
                    id="mep_0 sy15"
                    class="mejs__container mejs__container-keyboard-inactive mejs__audio"
                    tabindex="0"
                    role="application"
                    aria-label="Audio Player"
                  >
                    <div class="mejs__inner">
                      <div class="mejs__mediaelement">
                        <mediaelementwrapper id="player">
                          <audio
                            id="player_html5"
                            src="https://cdn.colorlib.com/etc/philosophy/media/AirReview-Landmarks-02-ChasingCorporate.mp3"
                            width="100%"
                            height="42"
                            preload="none"
                          ></audio>
                        </mediaelementwrapper>
                      </div>
                      <div class="mejs__layers">
                        <div class="mejs__poster mejs__layer" id="sy22"></div>
                      </div>
                      <div class="mejs__controls">
                        <div class="mejs__button mejs__playpause-button mejs__play">
                          <button
                            type="button"
                            aria-controls="mep_0"
                            title="Play"
                            aria-label="Play"
                            tabindex="0"
                          ></button>
                        </div>
                        <div
                          class="mejs__time mejs__currenttime-container"
                          role="timer"
                          aria-live="off"
                        >
                          <span class="mejs__currenttime">00:00</span>
                        </div>
                        <div class="mejs__time-rail">
                          <span
                            class="mejs__time-total mejs__time-slider"
                            role="slider"
                            tabindex="0"
                            aria-label="Time Slider"
                            aria-valuemin="0"
                            aria-valuemax="NaN"
                            aria-valuenow="0"
                            aria-valuetext="00:00"
                          >
                            <span class="mejs__time-buffering" id="sy21"></span>
                            <span class="mejs__time-loaded"></span>
                            <span class="mejs__time-current"></span>
                            <span class="mejs__time-hovered no-hover"></span>
                            <span class="mejs__time-handle">
                              <span class="mejs__time-handle-content"></span>
                            </span>
                            <span class="mejs__time-float">
                              <span class="mejs__time-float-current">
                                00:00
                              </span>
                              <span class="mejs__time-float-corner"></span>
                            </span>
                          </span>
                        </div>
                        <div class="mejs__time mejs__duration-container">
                          <span class="mejs__duration">00:00</span>
                        </div>
                        <div class="mejs__button mejs__volume-button mejs__mute">
                          <button
                            type="button"
                            aria-controls="mep_0"
                            title="Mute"
                            aria-label="Mute"
                            tabindex="0"
                          ></button>
                        </div>
                        <a
                          class="mejs__horizontal-volume-slider"
                          href="javascript:void(0);"
                          aria-label="Volume Slider"
                          aria-valuemin="0"
                          aria-valuemax="100"
                          role="slider"
                        >
                          <span class="mejs__offscreen">
                            Use Up/Down Arrow keys to increase or decrease
                            volume.
                          </span>
                          <div class="mejs__horizontal-volume-total">
                            <div
                              class="mejs__horizontal-volume-current"
                              id="sy20"
                            ></div>
                            <div
                              class="mejs__horizontal-volume-handle"
                              id="sy19"
                            ></div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="entry__text">
                <div class="entry__header">
                  <div class="entry__date">
                    <a href="single-audio.html">December 10, 2017</a>
                  </div>
                  <h1 class="entry__title">
                    <a href="single-audio.html">
                      What Your Music Preference Says About You and Your
                      Personality.
                    </a>
                  </h1>
                </div>
                <div class="entry__excerpt">
                  <p>
                    Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua
                    incididunt mollit id et sit proident dolor nulla sed commodo
                    est ad minim elit reprehenderit nisi officia aute incididunt
                    velit sint in aliqua...
                  </p>
                </div>
                <div class="entry__meta">
                  <span class="entry__meta-links">
                    <a>Music</a>
                    <a>Lifestyle</a>
                  </span>
                </div>
              </div>
            </article>
            {/* <!-- end article --> */}

            <article
              class="masonry__brick entry format-link aos-init aos-animate"
              data-aos="fade-up"
              id="sy16"
            >
              <div class="entry__thumb">
                <div class="link-wrap">
                  <p>
                    The Only Resource You Will Need To Start a Blog Using
                    WordPress.
                  </p>
                  <cite>
                    <a target="_blank" href="https://colorlib.com/">
                      https://colorlib.com
                    </a>
                  </cite>
                </div>
              </div>
            </article>
            {/* <!-- end article --> */}

            <article
              class="masonry__brick entry format-standard aos-init aos-animate"
              data-aos="fade-up"
              id="sy2"
            >
              <div class="entry__thumb">
                <a class="entry__thumb-link">
                  <img
                    src="images/thumbs/masonry/jump-400.jpg"
                    srcset="images/thumbs/masonry/jump-400.jpg 1x, images/thumbs/masonry/jump-800.jpg 2x"
                    alt=""
                  />
                </a>
              </div>

              <div class="entry__text">
                <div class="entry__header">
                  <div class="entry__date">
                    <a>December 10, 2017</a>
                  </div>
                  <h1 class="entry__title">
                    <a>Create Meaningful Family Moments.</a>
                  </h1>
                </div>
                <div class="entry__excerpt">
                  <p>
                    Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua
                    incididunt mollit id et sit proident dolor nulla sed commodo
                    est ad minim elit reprehenderit nisi officia aute incididunt
                    velit sint in aliqua...
                  </p>
                </div>
                <div class="entry__meta">
                  <span class="entry__meta-links">
                    <a>Family</a>
                    <a>Relationship</a>
                  </span>
                </div>
              </div>
            </article>
            {/* <!-- end article --> */}

            <article
              id="sy1"
              class="masonry__brick entry format-standard aos-init aos-animate"
              data-aos="fade-up"
            >
              <div class="entry__thumb">
                <a class="entry__thumb-link">
                  <img
                    src="images/thumbs/masonry/beetle-400.jpg"
                    srcset="images/thumbs/masonry/beetle-400.jpg 1x, images/thumbs/masonry/beetle-800.jpg 2x"
                    alt=""
                  />
                </a>
              </div>

              <div class="entry__text">
                <div class="entry__header">
                  <div class="entry__date">
                    <a>December 10, 2017</a>
                  </div>
                  <h1 class="entry__title">
                    <a>Throwback To The Good Old Days.</a>
                  </h1>
                </div>
                <div class="entry__excerpt">
                  <p>
                    Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua
                    incididunt mollit id et sit proident dolor nulla sed commodo
                    est ad minim elit reprehenderit nisi officia aute incididunt
                    velit sint in aliqua...
                  </p>
                </div>
                <div class="entry__meta">
                  <span class="entry__meta-links">
                    <a>Lifestyle</a>
                  </span>
                </div>
              </div>
            </article>
            {/* <!-- end article --> */}

            <article
              class="masonry__brick entry format-standard aos-init aos-animate"
              data-aos="fade-up"
              id="sy17"
            >
              <div class="entry__thumb">
                <a class="entry__thumb-link">
                  <img
                    src="images/thumbs/masonry/fuji-400.jpg"
                    srcset="images/thumbs/masonry/fuji-400.jpg 1x, images/thumbs/masonry/fuji-800.jpg 2x"
                    alt=""
                  />
                </a>
              </div>

              <div class="entry__text">
                <div class="entry__header">
                  <div class="entry__date">
                    <a>December 10, 2017</a>
                  </div>
                  <h1 class="entry__title">
                    <a>Just Another Standard Format Post.</a>
                  </h1>
                </div>
                <div class="entry__excerpt">
                  <p>
                    Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua
                    incididunt mollit id et sit proident dolor nulla sed commodo
                    est ad minim elit reprehenderit nisi officia aute incididunt
                    velit sint in aliqua...
                  </p>
                </div>
                <div class="entry__meta">
                  <span class="entry__meta-links">
                    <a>Design</a>
                    <a>Photography</a>
                  </span>
                </div>
              </div>
            </article>
            {/* <!-- end article --> */}

            <article
              class="masonry__brick entry format-standard aos-init aos-animate"
              data-aos="fade-up"
              id="sy18"
            >
              <div class="entry__thumb">
                <a class="entry__thumb-link">
                  <img
                    src="images/thumbs/masonry/sydney-400.jpg"
                    srcset="images/thumbs/masonry/sydney-400.jpg 1x, images/thumbs/masonry/sydney-800.jpg 2x"
                    alt=""
                  />
                </a>
              </div>

              <div class="entry__text">
                <div class="entry__header">
                  <div class="entry__date">
                    <a>December 10, 2017</a>
                  </div>
                  <h1 class="entry__title">
                    <a>Planning Your First Trip to Sydney.</a>
                  </h1>
                </div>
                <div class="entry__excerpt">
                  <p>
                    Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua
                    incididunt mollit id et sit proident dolor nulla sed commodo
                    est ad minim elit reprehenderit nisi officia aute incididunt
                    velit sint in aliqua...
                  </p>
                </div>
                <div class="entry__meta">
                  <span class="entry__meta-links">
                    <a>Travel</a>
                    <a>Vacation</a>
                  </span>
                </div>
              </div>
            </article>
            {/* <!-- end article --> */}
          </div>
          {/* <!-- end masonry --> */}
        </div>

        <div class="row">
          <div class="col-full">
            <nav class="pgn">
              <ul>
                <li>
                  <a class="pgn__prev" href="#0">
                    Prev
                  </a>
                </li>
                <li>
                  <a class="pgn__num" href="#0">
                    1
                  </a>
                </li>
                <li>
                  <span class="pgn__num current">2</span>
                </li>
                <li>
                  <a class="pgn__num" href="#0">
                    3
                  </a>
                </li>
                <li>
                  <a class="pgn__num" href="#0">
                    4
                  </a>
                </li>
                <li>
                  <a class="pgn__num" href="#0">
                    5
                  </a>
                </li>
                <li>
                  <span class="pgn__num dots">…</span>
                </li>
                <li>
                  <a class="pgn__num" href="#0">
                    8
                  </a>
                </li>
                <li>
                  <a class="pgn__next" href="#0">
                    Next
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </section>

      <section className="s-extra">
        <div className="row top">
          <div className="col-eight md-six tab-full popular">
            <h3>Popular Posts</h3>

            <div className="block-1-2 block-m-full popular__posts">
              <article className="col-block popular__post">
                <a className="popular__thumb">
                  <img src={wheel} alt="" />
                </a>
                <h5>
                  <a>Visiting Theme Parks Improves Your Health.</a>
                </h5>
                <section className="popular__meta">
                  <span className="popular__author">
                    <span>By</span> <a> John Doe</a>
                  </span>
                  <span className="popular__date">
                    <span>on</span>
                    <time datetime="2017-12-19">Dec 19, 2017</time>
                  </span>
                </section>
              </article>
              <article className="col-block popular__post">
                <a className="popular__thumb">
                  <img src={shutterbug} alt="" />
                </a>
                <h5>
                  <a>Key Benefits Of Family Photography.</a>
                </h5>
                <section className="popular__meta">
                  <span className="popular__author">
                    <span>By</span> <a> John Doe</a>
                  </span>
                  <span className="popular__date">
                    <span>on</span>{" "}
                    <time datetime="2017-12-18">Dec 18, 2017</time>
                  </span>
                </section>
              </article>
              <article className="col-block popular__post">
                <a className="popular__thumb">
                  <img src={cookies} alt="" />
                </a>
                <h5>
                  <a>Absolutely No Sugar Oatmeal Cookies.</a>
                </h5>
                <section className="popular__meta">
                  <span className="popular__author">
                    <span>By</span> <a> John Doe</a>
                  </span>
                  <span className="popular__date">
                    <span>on</span>{" "}
                    <time datetime="2017-12-16">Dec 16, 2017</time>
                  </span>
                </section>
              </article>
              <article className="col-block popular__post">
                <a className="popular__thumb">
                  <img src={beetle} alt="" />
                </a>
                <h5>
                  <a>Throwback To The Good Old Days.</a>
                </h5>
                <section className="popular__meta">
                  <span className="popular__author">
                    <span>By</span> <a> John Doe</a>
                  </span>
                  <span className="popular__date">
                    <span>on</span>{" "}
                    <time datetime="2017-12-16">Dec 16, 2017</time>
                  </span>
                </section>
              </article>
              <article className="col-block popular__post">
                <a className="popular__thumb">
                  <img src={tulips} alt="" />
                </a>
                <h5>
                  <a>10 Interesting Facts About Caffeine.</a>
                </h5>
                <section className="popular__meta">
                  <span className="popular__author">
                    <span>By</span> <a> John Doe</a>
                  </span>
                  <span className="popular__date">
                    <span>on</span>{" "}
                    <time datetime="2017-12-14">Dec 14, 2017</time>
                  </span>
                </section>
              </article>
              <article className="col-block popular__post">
                <a className="popular__thumb">
                  <img src={salad} alt="" />
                </a>
                <h5>
                  <a>Healthy Mediterranean Salad Recipes</a>
                </h5>
                <section className="popular__meta">
                  <span className="popular__author">
                    <span>By</span> <a> John Doe</a>
                  </span>
                  <span className="popular__date">
                    <span>on</span>{" "}
                    <time datetime="2017-12-12">Dec 12, 2017</time>
                  </span>
                </section>
              </article>
            </div>
          </div>
          <div className="col-four md-six tab-full about">
            <h3>About Philosophy</h3>

            <p>
              Donec sollicitudin molestie malesuada. Nulla quis lorem ut libero
              malesuada feugiat. Pellentesque in ipsum id orci porta dapibus.
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam
              vel, ullamcorper sit amet ligula. Quisque velit nisi, pretium ut
              lacinia in, elementum id enim. Donec sollicitudin molestie
              malesuada.
            </p>

            <ul className="about__social">
              <li>
                <a>
                  <i className="fa fa-facebook" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a>
                  <i className="fa fa-twitter" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a>
                  <i className="fa fa-instagram" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a>
                  <i className="fa fa-pinterest" aria-hidden="true"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row bottom tags-wrap">
          <div className="col-full tags">
            <h3>Tags</h3>

            <div className="tagcloud">
              <a>Salad</a>
              <a>Recipe</a>
              <a>Places</a>
              <a>Tips</a>
              <a>Friends</a>
              <a>Travel</a>
              <a>Exercise</a>
              <a>Reading</a>
              <a>Running</a>
              <a>Self-Help</a>
              <a>Vacation</a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default HomePage;