import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./popularsection.css";
import './ParentStyle.css'
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
      slidesPerView: 1
    },
    768: {
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 3
    }
  };
  

  return (
    <>
      <section class="popular section" id="explore">
        <div class="container">
          <span class="section_subtitle">Explore</span>
          <h2 class="section_title">Awesome Tourist sites</h2>

          <Swiper
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev', 
              clickable: true
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
              <article class="popular_card swiper-slide">
                {/* modal */}
                <div className="modal-screen">
                  <div className="modal">
                    <div className="popular_data">
                      <h3 className="popular_title">The red Beach</h3>
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
              </article>
            </SwiperSlide>
            <SwiperSlide>
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
              </article>
            </SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            <SwiperSlide>Slide 5</SwiperSlide>
            <SwiperSlide>Slide 6</SwiperSlide>
            <SwiperSlide>Slide 7</SwiperSlide>
            <SwiperSlide>Slide 8</SwiperSlide>
            <SwiperSlide>Slide 9</SwiperSlide>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
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
