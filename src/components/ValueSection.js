import React from 'react';
import accordionFunction from './index.js'
import './value.css';
import './ParentStyle.css'

const ValueSection = () => {
     
function accordionFunction() {
    const accordionItems = document.querySelectorAll(".value_accordion-item")
  console.log(accordionItems);
 
 accordionItems.forEach((item)=> {
    const accordionHeader = item.querySelector(".value_accordion-header") 
 
    accordionHeader.addEventListener("click",()=>{
    //    console.log("I won't come");
 
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
    return (
        <div>
               <section className="value section" id="value"  >
            <div className="value_container container grid">
                <div className="value_images">
                    <div className="value_orbe"></div>
                    <div className="value_img">
                        <img src="./images/fernando-alvarez-rodriguez-M7GddPqJowg-unsplash.jpg" alt=""/>
                    </div>
                </div>
                <div className="value_content">
                    <div className="value_data">
                        <span className="section_subtitle">Our Value</span>
                        <h2 className="section_title">We give nothing but the best <span>.</span></h2>
                        <p className="value_description">
                            We always lit up our hearts positively to give the best comfort you will ever need.
                        </p>
                    </div>
                    <div className="value_accordion">
                        <div className="value_accordion-item">
                            <header className="value_accordion-header" onClick={accordionFunction}>
                                <i className='bx bxs-wink-smile value_accordion-icon'></i>
                                <h3 className="value_accordion-title">
                                    We give you positive vibes
                                </h3>
                                <div className="value_accordion-arrow">
                                    <i className=" bx bxs-down-arrow"></i>
                                </div>
                            </header>

                            <div className="value_accordion-content">
                                <p className="value_accordion-description">
                                    We give nothing but the best.
                                    We always lit up our hearts positively to give the best comfort you will ever need.

                                </p>
                            </div>
                        </div>
                        <div className="value_accordion-item">
                            <header className="value_accordion-header"  onClick={accordionFunction}>
                                <i className='bx bxs-bank value_accordion-icon'></i>
                                {/* <!-- <i className='' ></i> --> */}
                                <h3 className="value_accordion-title">
                                    Prevent cheating
                                </h3>
                                <div className="value_accordion-arrow">
                                    <i className=" bx bxs-down-arrow"></i>
                                </div>
                            </header>

                            <div className="value_accordion-content">
                                <p className="value_accordion-description">
                                    We give nothing but the best.
                                    We always lit up our hearts positively to give the best comfort you will ever need.

                                </p>
                            </div>
                        </div>
                        <div className="value_accordion-item">
                            <header className="value_accordion-header"  onClick={accordionFunction}>
                                <i className="bx bx-happy value_accordion-icon"></i>
                                <h3 className="value_accordion-title">
                                    Known to have the best hospitality
                                </h3>
                                <div className="value_accordion-arrow">
                                    <i className=" bx bxs-down-arrow"></i>
                                </div>
                            </header>

                            <div className="value_accordion-content">
                                <p className="value_accordion-description">
                                    We give nothing but the best.
                                    We always lit up our hearts positively to give the best comfort you will ever need.

                                </p>
                            </div>
                        </div>
                        <div className="value_accordion-item">
                            <header className="value_accordion-header"  onClick={accordionFunction}>
                                <i className="bx bx-user value_accordion-icon"></i>
                                <h3 className="value_accordion-title">
                                    Good customer care
                                </h3>
                                <div className="value_accordion-arrow">
                                    <i className=" bx bxs-down-arrow"></i>
                                </div>
                            </header>

                            <div className="value_accordion-content">
                                <p className="value_accordion-description">
                                    We give nothing but the best.
                                    We always lit up our hearts positively to give the best comfort you will ever need.

                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
        </div>
    );
}

export default ValueSection;
