import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./popularsection.css";
import "./ParentStyle.css";
import "swiper/css";
import "swiper/css/navigation";
import CloseBtn from "../images/close1.png";

import { Navigation } from "swiper";

const PopularSection = () => {
  const toggleShowRoom = () => {
    const modalScreen = document.querySelectorAll(".modal-screen");
    modalScreen.forEach((screen) => {
      screen.classList.add("active");
    });
    //modalScreen.classList.add("active");
  };
  const closeShowRoom = () => {
    const modalScreen = document.querySelectorAll(".modal-screen");
    modalScreen.forEach((screen) => {
      screen.classList.remove("active");
    });
    //modalScreen.classList.remove("active");
  };

  const responsiveOptions = {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  };

  return (
    <>
      <section class="popular section" id="explore">
        <div class="container">
          <span class="section_subtitle">Explore</span>
          <h2 class="section_title">Awesome Tourist sites</h2>

          <Swiper
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
              clickable: true,
            }}
            modules={[Navigation]}
            spaceBetween={32}
            grabCursor={true}
            centeredSlides={true}
            breakpoints={responsiveOptions}
            slidesPerView={3}
            loop={true}
            className="mySwiper popular_container"
          >
            <SwiperSlide>
              {/* modal */}
              <div className="modal-screen">
                <div className="modal">
                  <div className="popular_data">
                    <h3 className="popular_title">The Blue Beach</h3>
                    <p className="popular_description">
                      Another one
                      <br />
                      Tokyo
                      <br />
                      P.O.Box 10
                    </p>

                    <button className="popular_button">Book</button>
                  </div>
                  <img src={CloseBtn} alt="btn" onClick={closeShowRoom} />
                </div>
              </div>
              {/* modal */}
              <article class="popular_card swiper-slide">
                <img src="./images/beach.jpg" class="popular_img" alt="House" />

                <div class="popular_data">
                  <h2 class="popular_price">
                    <span>$</span>10 per one person
                  </h2>
                  <h3 class="popular_title">The Blue Beach</h3>
                  <p class="popular_description">
                    wI_tRAVeL Agency,
                    <br />
                    Tokyo
                    <br />
                    P.O.Box 10
                  </p>
                </div>
                <button className="popular_button" onClick={toggleShowRoom}>
                  Visit
                </button>
              </article>
            </SwiperSlide>
            <SwiperSlide>
              {/* modal */}
              <div className="modal-screen">
                <div className="modal">
                  <div className="popular_data">
                    <h3 className="popular_title">Golden House</h3>
                    <p className="popular_description">
                      Another one
                      <br />
                      Tokyo
                      <br />
                      P.O.Box 10
                    </p>

                    <button className="popular_button">Book</button>
                  </div>
                  <img src={CloseBtn} alt="btn" onClick={closeShowRoom} />
                </div>
              </div>
              {/* modal */}
              <article class="popular_card swiper-slide">
                <img
                  src="./images/america.jpg"
                  class="popular_img"
                  alt="House"
                />

                <div class="popular_data">
                  <h2 class="popular_price">
                    <span>$</span>56,500
                  </h2>
                  <h3 class="popular_title">Golden House</h3>
                  <p class="popular_description">
                    wI_tRAVeL Agency,
                    <br />
                    Brooklyn
                    <br />
                    P.O.Box 190
                  </p>
                </div>
                <button className="popular_button" onClick={toggleShowRoom}>
                  Visit
                </button>
              </article>
            </SwiperSlide>
            <SwiperSlide>
              {/* modal */}
              <div className="modal-screen">
                <div className="modal">
                  <div className="popular_data">
                    <h3 className="popular_title">The Blue Sky</h3>
                    <p className="popular_description">
                      Another one
                      <br />
                      Tokyo
                      <br />
                      P.O.Box 10
                    </p>

                    <button className="popular_button">Book</button>
                  </div>
                  <img src={CloseBtn} alt="btn" onClick={closeShowRoom} />
                </div>
              </div>
              {/* modal */}
              <article class="popular_card swiper-slide">
                <img
                  src="./images/IMG-20220422-WA0009.jpg"
                  class="popular_img"
                  alt="House"
                />

                <div class="popular_data">
                  <h2 class="popular_price">
                    <span>$</span>46,080
                  </h2>
                  <h3 class="popular_title">The Blue Sky</h3>
                  <p class="popular_description">
                    wI_tRAVeL Agency,
                    <br />
                    Chicago
                    <br />
                    P.O.Box 190
                  </p>
                </div>
                <button className="popular_button" onClick={toggleShowRoom}>
                  Visit
                </button>
              </article>
            </SwiperSlide>
            <SwiperSlide>
              {/* modal */}
              <div className="modal-screen">
                <div className="modal">
                  <div className="popular_data">
                    <h3 className="popular_title">The Green Garden</h3>
                    <p className="popular_description">
                      Another one
                      <br />
                      Tokyo
                      <br />
                      P.O.Box 10
                    </p>

                    <button className="popular_button">Book</button>
                  </div>
                  <img src={CloseBtn} alt="btn" onClick={closeShowRoom} />
                </div>
              </div>
              {/* modal */}
              <article class="popular_card swiper-slide">
                <img
                  src="./images/IMG-20220422-WA0024.jpg"
                  class="popular_img"
                  alt="House"
                />

                <div class="popular_data">
                  <h2 class="popular_price">
                    <span>$</span>69,000
                  </h2>
                  <h3 class="popular_title">The Green Garden</h3>
                  <p class="popular_description">
                    wI_tRAVeL Agency,
                    <br />
                    East Legon street,Abelenkpe-Accra
                    <br />
                    P.O.Box 190
                  </p>
                </div>
                <button className="popular_button" onClick={toggleShowRoom}>
                  Visit
                </button>
              </article>
            </SwiperSlide>
            <SwiperSlide>
              {/* modal */}
              <div className="modal-screen">
                <div className="modal">
                  <div className="popular_data">
                    <h3 className="popular_title">The Mysterious House</h3>
                    <p className="popular_description">
                      Another one
                      <br />
                      Tokyo
                      <br />
                      P.O.Box 10
                    </p>

                    <button className="popular_button">Book</button>
                  </div>
                  <img src={CloseBtn} alt="btn" onClick={closeShowRoom} />
                </div>
              </div>
              {/* modal */}
              <article class="popular_card swiper-slide">
                <img
                  src="./images/pexels-pixabay-531234.jpg"
                  class="popular_img"
                  alt="House"
                />

                <div class="popular_data">
                  <h2 class="popular_price">
                    <span>$</span>6,000
                  </h2>
                  <h3 class="popular_title">The Mysterious House</h3>
                  <p class="popular_description">
                    wI_tRAVeL Agency,
                    <br />
                    Hamburg, Germany
                    <br />
                    P.O.Box 110
                  </p>
                </div>
                <button className="popular_button" onClick={toggleShowRoom}>
                  Visit
                </button>
              </article>
            </SwiperSlide>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <div class="swiper-button-next">
              <i class="bx bx-chevron-right"></i>
            </div>
            <div class="swiper-button-prev">
              <i class="bx bx-chevron-left"></i>
            </div>
          </Swiper>
        </div>
      </section>

      <section class="popular section" id="explore">
        <div class="container">
          <span class="section_subtitle">Travel</span>
          <h2 class="section_title">Popular Places</h2>

          <Swiper
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
              clickable: true,
            }}
            modules={[Navigation]}
            spaceBetween={32}
            grabCursor={true}
            centeredSlides={true}
            breakpoints={responsiveOptions}
            slidesPerView={3}
            loop={true}
            className="mySwiper popular_container"
          >
            <SwiperSlide>
              {/* modal */}
              <div className="modal-screen">
                <div className="modal">
                  <div className="popular_data">
                    <h3 className="popular_title">The Blue Beach</h3>
                    <p className="popular_description">
                      Another one
                      <br />
                      Tokyo
                      <br />
                      P.O.Box 10
                    </p>

                    <button className="popular_button">Book</button>
                  </div>
                  <img src={CloseBtn} alt="btn" onClick={closeShowRoom} />
                </div>
              </div>
              {/* modal */}
              <article class="popular_card swiper-slide">
                <img
                  src="./images/tokyo (2).jpg"
                  class="popular_img"
                  alt="House"
                />
                <div class="popular_data">
                  <h2 class="popular_price">
                    <span>$</span>66,000
                  </h2>
                  <h3 class="popular_title">Red House</h3>
                  <p class="popular_description">
                    wI_tRAVeL Agency,
                    <br />
                    Tokyo
                    <br />
                    P.O.Box 10
                  </p>
                </div>
                <button className="popular_button" onClick={toggleShowRoom}>
                  Visit
                </button>
              </article>
            </SwiperSlide>
            <SwiperSlide>
              {/* modal */}
              <div className="modal-screen">
                <div className="modal">
                  <div className="popular_data">
                    <h3 className="popular_title">Golden House</h3>
                    <p className="popular_description">
                      Another one
                      <br />
                      Tokyo
                      <br />
                      P.O.Box 10
                    </p>

                    <button className="popular_button">Book</button>
                  </div>
                  <img src={CloseBtn} alt="btn" onClick={closeShowRoom} />
                </div>
              </div>
              {/* modal */}
              <article class="popular_card swiper-slide">
              <img src="./images/brooklyn.jpg" class="popular_img"
                                alt="House"/>

                <div class="popular_data">
                  <h2 class="popular_price">
                    <span>$</span>56,500
                  </h2>
                  <h3 class="popular_title">Golden House</h3>
                  <p class="popular_description">
                    wI_tRAVeL Agency,
                    <br />
                    Brooklyn
                    <br />
                    P.O.Box 190
                  </p>
                </div>
                <button className="popular_button" onClick={toggleShowRoom}>
                  Visit
                </button>
              </article>
            </SwiperSlide>
            <SwiperSlide>
              {/* modal */}
              <div className="modal-screen">
                <div className="modal">
                  <div className="popular_data">
                    <h3 className="popular_title">The Blue Sky</h3>
                    <p className="popular_description">
                      Another one
                      <br />
                      Tokyo
                      <br />
                      P.O.Box 10
                    </p>

                    <button className="popular_button">Book</button>
                  </div>
                  <img src={CloseBtn} alt="btn" onClick={closeShowRoom} />
                </div>
              </div>
              {/* modal */}
              <article class="popular_card swiper-slide">
              <img src="./images/chicago.jpg" class="popular_img"
                                alt="House"/>

                <div class="popular_data">
                  <h2 class="popular_price">
                    <span>$</span>46,080
                  </h2>
                  <h3 class="popular_title">Round House</h3>
                  <p class="popular_description">
                    wI_tRAVeL Agency,
                    <br />
                    Chicago
                    <br />
                    P.O.Box 190
                  </p>
                </div>
                <button className="popular_button" onClick={toggleShowRoom}>
                  Visit
                </button>
              </article>
            </SwiperSlide>
            <SwiperSlide>
              {/* modal */}
              <div className="modal-screen">
                <div className="modal">
                  <div className="popular_data">
                    <h3 className="popular_title">The Green Garden</h3>
                    <p className="popular_description">
                      Another one
                      <br />
                      Tokyo
                      <br />
                      P.O.Box 10
                    </p>

                    <button className="popular_button">Book</button>
                  </div>
                  <img src={CloseBtn} alt="btn" onClick={closeShowRoom} />
                </div>
              </div>
              {/* modal */}
              <article class="popular_card swiper-slide">
              <img src="./images/nick-fewings-jBmNAt2p8-s-unsplash.jpg" class="popular_img" alt="House"/>


                <div class="popular_data">
                  <h2 class="popular_price">
                    <span>$</span>69,000
                  </h2>
                  <h3 class="popular_title">Blue House</h3>
                  <p class="popular_description">
                    wI_tRAVeL Agency,
                    <br />
                    East Legon street,Abelenkpe-Accra
                    <br />
                    P.O.Box 190
                  </p>
                </div>
                <button className="popular_button" onClick={toggleShowRoom}>
                  Visit
                </button>
              </article>
            </SwiperSlide>
            <SwiperSlide>
              {/* modal */}
              <div className="modal-screen">
                <div className="modal">
                  <div className="popular_data">
                    <h3 className="popular_title">The Mysterious House</h3>
                    <p className="popular_description">
                      Another one
                      <br />
                      Tokyo
                      <br />
                      P.O.Box 10
                    </p>

                    <button className="popular_button">Book</button>
                  </div>
                  <img src={CloseBtn} alt="btn" onClick={closeShowRoom} />
                </div>
              </div>
              {/* modal */}
              <article class="popular_card swiper-slide">
              <img src="./images/austin-distel-wawEfYdpkag-unsplash.jpg" class="popular_img" alt="House"/>

                <div class="popular_data">
                  <h2 class="popular_price">
                    <span>$</span>66,000
                  </h2>
                  <h3 class="popular_title">Noble House</h3>
                  <p class="popular_description">
                    wI_tRAVeL Agency,
                    <br />
                    Hamburg, Germany
                    <br />
                    P.O.Box 110
                  </p>
                </div>
                <button className="popular_button" onClick={toggleShowRoom}>
                  Visit
                </button>
              </article>
            </SwiperSlide>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <div class="swiper-button-next">
              <i class="bx bx-chevron-right"></i>
            </div>
            <div class="swiper-button-prev">
              <i class="bx bx-chevron-left"></i>
            </div>
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default PopularSection;
