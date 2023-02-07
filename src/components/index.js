   import React from 'react';
   import Swiper from 'swiper';
   
   function scrollHeader() {
    const header = document.getElementById('header')
    if(this.scrollY >= 50) header.classList.add('scroll-header')
    else header.classList.remove('scroll-header')
 }

 
 
 
function accordionFunction() {
   const accordionItems = document.querySelectorAll(".value_accordion-item")
 console.log(accordionItems);

accordionItems.forEach((item)=> {
   const accordionHeader = item.querySelector(".value_accordion-header") 

   accordionHeader.addEventListener("click",()=>{
      console.log("I won't come");

      const openItem = document.querySelector(".accordion-open")
      if(openItem && openItem!== item) {
         toogleItem(openItem)
      }
      toogleItem(item)
   })
})
}

const toogleItem=(item)=> {
   const accordionContent = item.querySelector(".value_accordion-content")

   if(item.classList.contains("accordion-open")){
      accordionContent.removeAttribute("style")
      item.classList.remove("accordion-open")
   }
   else{
      accordionContent.style.height = accordionContent.scrollHeight + "px";
      item.classList.add("accordion-open")
   }

}

const sections = document.querySelector('section[id]')

function scrollActive() {
   const scrollY = window.pageYOffset

   sections.forEach(current => {
      const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute('id')

      if(scrollY > sectionTop && scrollY<= sectionTop + sectionHeight){
         document.querySelector(".nav_menu a[href*=" + sectionId + ']'.classList.add('active-link'))
      }
      else{
         document.querySelector(".nav_menu a[href*=" + sectionId + ']'.classList.remove('active-link'))

      }
   })
}

// function scrollUp() {
//    const scrollUp = document.getElementById('#scroll-up')
//    console.log(scrollUp);
//    if(this.scrollY >= 350){
//       scrollUp.classList.add('show-scroll')
//    }
// }

//window.addEventListener('scroll',scrollUp)

window.addEventListener('scroll',scrollHeader)


const constItem = localStorage.getItem('dark-theme')
console.log(constItem);

/*LANDING PAGE JAVASCRIPT */

const btns = document.querySelectorAll(".nav-btn")
const slide = document.querySelectorAll(".video-slider")
const content = document.querySelectorAll(".content")


var sliderNav = function(manual) {

    btns.forEach((btn) => {
    btn.classList.remove("active")
    
});

content.forEach((content) => {
    content.classList.remove("active")
    
});

slide.forEach((slide) => {
    slide.classList.remove("active")
    
});
    slide[manual].classList.add("active") 
    btns[manual].classList.add("active")  
    content[manual].classList.add("active")
}

btns.forEach((btn,i) => {
    btn.addEventListener('click',() =>{
        sliderNav(i);
    });
    
});

// const navbar = document.querySelector('.nav-fixed');
// window.onscroll = () => {
//    if (window.scrollY > 300) {
//        navbar.classList.add('nav-active');
//    } else {
//        navbar.classList.remove('nav-active');
//    }
// };


 var swiperPopular = new Swiper(".popular_container", {
   spaceBetween:32,
   grapCursor: true,
   centeredSlides: true,
   slidesPerView: 'auto',
   loop: true,
   navigation: {
     nextEl: ".swiper-button-next",
     prevEl: ".swiper-button-prev",
   },
 });


const toggleDark=()=> {
   const divChangeTheme = document.querySelector(".div_change-theme")
   console.log(divChangeTheme);
      document.body.classList.toggle("dark-theme")
}
