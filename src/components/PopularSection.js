import React from "react";
import "./popularsection.css";
import CloseBtn from "../images/close1.png";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

const PopularSection = () => {
  const swiperCode = () => {
    var swiperPopular = new Swiper(".popular_container", {
      spaceBetween: 32,
      grapCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  };

  const toggleShowRoom = () => {
    const modalScreen = document.querySelectorAll(".modal-screen");
    modalScreen.forEach((screen)=> {
      screen.classList.add('active')
    })
    //modalScreen.classList.add("active");
  };
  const closeShowRoom = () => {
    const modalScreen = document.querySelectorAll(".modal-screen");
    modalScreen.forEach((screen)=> {
      screen.classList.remove('active')
    })
    //modalScreen.classList.remove("active");
  };

  
  return (
    // <div>
    //   <section className="popular section" id="explore">
    //     <div className="container">
    //       <span className="section_subtitle">Explore</span>
    //       <h2 className="section_title">Awesome Tourist sites</h2>
    //       <div className="popular_container swiper">
    //         <div className="swiper-wrapper">
    //           <article className="popular_card swiper-slide">
    //           <div className="modal-screen">
    //             <div className="modal">

    //               <div className="popular_data">
                   

    //                 <button className="popular_button">
    //                   Book
    //                 </button>
    //               </div>
    //               <img src={CloseBtn} alt="btn" onClick={closeShowRoom} />
    //             </div>
    //           </div>
    //             <img
    //               src="./images/beach.jpg"
    //               className="popular_img"
    //               alt="House"
    //             />

    //             <div className="popular_data">
    //               <h2 className="popular_price">
    //                 <span>$</span>10 per one person
    //               </h2>
    //               <h3 className="popular_title">The Blue Beach</h3>
    //               <p className="popular_description">
    //                 wI_tRAVeL Agency,
    //                 <br />
    //                 Tokyo
    //                 <br />
    //                 P.O.Box 10
    //               </p>

    //               <button className="popular_button" onClick={toggleShowRoom}>
    //                 Visit
    //               </button>
    //             </div>
    //           </article> 

             
    //           <article className="popular_card swiper-slide">
    //              {/* modal */}
    //           <div className="modal-screen">
    //             <div className="modal">

    //               <div className="popular_data">
    //                 <h3 className="popular_title">The red Beach</h3>
    //                 <p className="popular_description">
    //                  Another one
    //                   <br />
    //                   Tokyo
    //                   <br />
    //                   P.O.Box 10
    //                 </p>

    //                 <button className="popular_button">
    //                   Book
    //                 </button>
    //               </div>
    //               <img src={CloseBtn} alt="btn" onClick={closeShowRoom} />
    //             </div>
    //           </div>
    //                         {/* modal */}
    //             <img
    //               src="./images/america.jpg"
    //               className="popular_img"
    //               alt="House"
    //             />

    //             <div className="popular_data">
    //               <h2 className="popular_price">
    //                 <span>$</span>56,500
    //               </h2>
    //               <h3 className="popular_title">Golden House</h3>
    //               <p className="popular_description">
    //                 wI_tRAVeL Agency,
    //                 <br />
    //                 Brooklyn
    //                 <br />
    //                 P.O.Box 190
    //               </p>
    //             </div>
    //             <button className="popular_button" onClick={toggleShowRoom}>
    //                 Visit
    //               </button>
    //           </article>


    //           <article className="popular_card swiper-slide">
    //             <img
    //               src="./images/IMG-20220422-WA0009.jpg"
    //               className="popular_img"
    //               alt="House"
    //             />

    //             <div className="popular_data">
    //               <h2 className="popular_price">
    //                 <span>$</span>46,080
    //               </h2>
    //               <h3 className="popular_title">The Blue Sky</h3>
    //               <p className="popular_description">
    //                 wI_tRAVeL Agency,
    //                 <br />
    //                 Chicago
    //                 <br />
    //                 P.O.Box 190
    //               </p>

    //             </div>
    //           </article>
    //           <article className="popular_card swiper-slide">
    //             <img
    //               src="./images/IMG-20220422-WA0024.jpg"
    //               className="popular_img"
    //               alt="House"
    //             />

    //             <div className="popular_data">
    //               <h2 className="popular_price">
    //                 <span>$</span>69,000
    //               </h2>
    //               <h3 className="popular_title">The Green Garden</h3>
    //               <p className="popular_description">
    //                 wI_tRAVeL Agency,
    //                 <br />
    //                 East Legon street,Abelenkpe-Accra
    //                 <br />
    //                 P.O.Box 190
    //               </p>
    //             </div>
    //           </article>
    //           <article className="popular_card swiper-slide">
    //             <img
    //               src="./images/pexels-pixabay-531234.jpg"
    //               className="popular_img"
    //               alt="House"
    //             />

    //             <div className="popular_data">
    //               <h2 className="popular_price">
    //                 <span>$</span>6,000
    //               </h2>
    //               <h3 className="popular_title">The Mysterious House</h3>
    //               <p className="popular_description">
    //                 wI_tRAVeL Agency,
    //                 <br />
    //                 Hamburg, Germany
    //                 <br />
    //                 P.O.Box 110
    //               </p>
    //             </div>
    //           </article>
    //         </div>
    //         <div className="swiper-button-next">
    //           <i className="bx bx-chevron-right"></i>
    //         </div>
    //         <div className="swiper-button-prev">
    //           <i className="bx bx-chevron-left"></i>
    //         </div>
    //       </div>
    //     </div>
    //   </section>
    //   <section className="popular section" id="popular">
    //     <div className="container">
    //       <span className="section_subtitle">Travel</span>
    //       <h2 className="section_title">Popular Places</h2>
    //       <div className="popular_container swiper">
    //         <div className="swiper-wrapper">
    //           <article className="popular_card swiper-slide">
    //             <img
    //               src="./images/tokyo (2).jpg"
    //               className="popular_img"
    //               alt="House"
    //             />

    //             <div className="popular_data">
    //               <h2 className="popular_price">
    //                 <span>$</span>66,000
    //               </h2>
    //               <h3 className="popular_title">Red House</h3>
    //               <p className="popular_description">
    //                 wI_tRAVeL Agency,
    //                 <br />
    //                 Tokyo
    //                 <br />
    //                 P.O.Box 10
    //               </p>
    //             </div>
    //           </article>
    //           <article className="popular_card swiper-slide">
    //             <img
    //               src="./images/brooklyn.jpg"
    //               className="popular_img"
    //               alt="House"
    //             />

    //             <div className="popular_data">
    //               <h2 className="popular_price">
    //                 <span>$</span>56,500
    //               </h2>
    //               <h3 className="popular_title">Golden House</h3>
    //               <p className="popular_description">
    //                 wI_tRAVeL Agency,
    //                 <br />
    //                 Brooklyn
    //                 <br />
    //                 P.O.Box 190
    //               </p>
    //             </div>
    //           </article>
    //           <article className="popular_card swiper-slide">
    //             <img
    //               src="./images/chicago.jpg"
    //               className="popular_img"
    //               alt="House"
    //             />

    //             <div className="popular_data">
    //               <h2 className="popular_price">
    //                 <span>$</span>46,080
    //               </h2>
    //               <h3 className="popular_title">Round House</h3>
    //               <p className="popular_description">
    //                 wI_tRAVeL Agency,
    //                 <br />
    //                 Chicago
    //                 <br />
    //                 P.O.Box 190
    //               </p>
    //             </div>
    //           </article>
    //           <article className="popular_card swiper-slide">
    //             <img
    //               src="./images/nick-fewings-jBmNAt2p8-s-unsplash.jpg"
    //               className="popular_img"
    //               alt="House"
    //             />

    //             <div className="popular_data">
    //               <h2 className="popular_price">
    //                 <span>$</span>69,000
    //               </h2>
    //               <h3 className="popular_title">Blue House</h3>
    //               <p className="popular_description">
    //                 wI_tRAVeL Agency,
    //                 <br />
    //                 East Legon street,Abelenkpe-Accra
    //                 <br />
    //                 P.O.Box 190
    //               </p>
    //             </div>
    //           </article>
    //           <article className="popular_card swiper-slide">
    //             <img
    //               src="./images/austin-distel-wawEfYdpkag-unsplash.jpg"
    //               className="popular_img"
    //               alt="House"
    //             />

    //             <div className="popular_data">
    //               <h2 className="popular_price">
    //                 <span>$</span>66,000
    //               </h2>
    //               <h3 className="popular_title"></h3>
    //               <p className="popular_description">
    //                 wI_tRAVeL Agency,
    //                 <br />
    //                 Hamburg, Germany
    //                 <br />
    //                 P.O.Box 110
    //               </p>
    //             </div>
    //           </article>
    //         </div>
    //         <div className="swiper-button-next">
    //           <i className="bx bx-chevron-right"></i>
    //         </div>
    //         <div className="swiper-button-prev">
    //           <i className="bx bx-chevron-left"></i>
    //         </div>
    //       </div>
    //     </div>
    //   </section>
    //   <section className="popular section" id="food">
    //     <div className="container">
    //       <span className="section_subtitle">Enjoy</span>
    //       <h2 className="section_title">Palatable dishes</h2>
    //       <div className="popular_container swiper">
    //         <div className="swiper-wrapper">
    //           <article className="popular_card swiper-slide">
    //             <img
    //               src="./images/claudia-soares-ewOrvEa87j4-unsplash.jpg"
    //               className="popular_img"
    //               alt="House"
    //             />

    //             <div className="popular_data">
    //               <h2 className="popular_price">
    //                 <span>$</span>66
    //               </h2>
    //               <h3 className="popular_title">Strawberry Smoothies</h3>
    //               <p className="popular_description">
    //                 wI_Eat Bars,
    //                 <br />
    //                 Sarabande street,Abelenkpe-Accra
    //                 <br />
    //                 P.O.Box 190
    //               </p>
    //             </div>
    //           </article>
    //           <article className="popular_card swiper-slide">
    //             <img
    //               src="./images/reshu-drolia-FwXcGsWdLws-unsplash.jpg"
    //               className="popular_img"
    //               alt="House"
    //             />

    //             <div className="popular_data">
    //               <h2 className="popular_price">
    //                 <span>$</span>20
    //               </h2>
    //               <h3 className="popular_title">Chocolate Milkshake</h3>
    //               <p className="popular_description">
    //                 wI_Eat Bars,
    //                 <br />
    //                 Pinto street,Abelenkpe-Accra
    //                 <br />
    //                 P.O.Box 190
    //               </p>
    //             </div>
    //           </article>
    //           <article className="popular_card swiper-slide">
    //             <img
    //               src="./images//th.jfif"
    //               className="popular_img"
    //               alt="House"
    //             />

    //             <div className="popular_data">
    //               <h2 className="popular_price">
    //                 <span>$</span>60
    //               </h2>
    //               <h3 className="popular_title">Garden egg stew</h3>
    //               <h3 className="popular_title">Accompainment: Yam & Rice</h3>
    //               <p className="popular_description">
    //                 wI_Eat Bars,
    //                 <br />
    //                 Sarabande street,Abelenkpe-Accra
    //                 <br />
    //                 P.O.Box 190
    //               </p>
    //             </div>
    //           </article>
    //           <article className="popular_card swiper-slide">
    //             <img
    //               src="./images/IMG-20211013-WA0001.jpg"
    //               className="popular_img"
    //               alt="House"
    //             />

    //             <div className="popular_data">
    //               <h2 className="popular_price">
    //                 <span>$</span>69
    //               </h2>
    //               <h3 className="popular_title">Beans and Plantain</h3>
    //               <p className="popular_description">
    //                 wI_tRAVeL Agency,
    //                 <br />
    //                 East Legon street,Abelenkpe-Accra
    //                 <br />
    //                 P.O.Box 190
    //               </p>
    //             </div>
    //           </article>
    //           <article className="popular_card swiper-slide">
    //             <img
    //               src="./images/stephen-lartey-FIGcCVQeGwE-unsplash.jpg"
    //               className="popular_img"
    //               alt="House"
    //             />

    //             <div className="popular_data">
    //               <h2 className="popular_price">
    //                 <span>$</span>7
    //               </h2>
    //               <h3 className="popular_title">Waakye</h3>
    //               <p className="popular_description">
    //                 wI_Eat Bars,
    //                 <br />
    //                 Dimeansa, Abelenkpe-Accra
    //                 <br />
    //                 P.O.Box 110
    //               </p>
    //             </div>
    //           </article>
    //         </div>
    //         <div className="swiper-button-next">
    //           <i className="bx bx-chevron-right"></i>
    //         </div>
    //         <div className="swiper-button-prev">
    //           <i className="bx bx-chevron-left"></i>
    //         </div>
    //       </div>
    //     </div>
    //   </section>
    // </div>
    <>
    <Swiper
        slidesPerView={3}
        spaceBetween={33}
        
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
      </Swiper>
    </>
  );
};

export default PopularSection;
