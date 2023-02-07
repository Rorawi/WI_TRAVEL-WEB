import React from 'react';
import Contact from './Contact';
import PopularSection from "./PopularSection";
import ValueSection from "./ValueSection";
import './homesection.css';
import './ParentStyle.css'


const HomeSection = () => {
    return (
        <div>
          <section className="home section" id="home">
            <div className="home_container container grid">
                <div className="home_data">
                    <h1 className="home_title">
                        WI_TRAVEL
                    </h1>
                    <p className="home_description">
                        Explore the world's best tourist sites with<br/> great tourists to educate
                        you on your researches; and more over have fun!
                        As one of our exclusive members,you'll recieve amazing discounts
                        up t0 50% off rental rates and more.
                    </p>
                    <form action="" className="home_search">
                        {/* <!--map icon here--> */}
                        <input type="search" className="home_search-input" placeholder="Search by location..."/>
                        <button className="button">Search</button>
                    </form>
                    <div className="home_value">
                        <div>
                            <h1 className="home_value-number">
                                15k <span>+</span>
                            </h1>
                            <span className="home_value-description">
                                Premium<br />Product
                            </span>
                        </div>
                        <div>
                            <h1 className="home_value-number">
                                4k <span>+</span>
                            </h1>
                            <span className="home_value-description">
                                Happy<br />Customers
                            </span>
                        </div>
                        <div>
                            <h1 className="home_value-number">
                                25k <span>+</span>
                            </h1>
                            <span className="home_value-description">
                                Awards<br />winning
                            </span>
                        </div>
                    </div>
                </div>
                <div className="home_images">
                    <div className="home_orbe">
                        <div className="home_img">
                            <img src="./images/damir-kopezhanov-luseu9GtYzM-unsplash.jpg" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="logos section">
            <div className="logos_container container grid">
                <div className="logos_img">
                    <img src="./images//nike-logo.png" alt="logo"/>
                </div>
                <div className="logos_img">
                    <img src="./images//nike-logo.png" alt="logo"/>
                </div>
                <div className="logos_img">
                    <img src="./images//nike-logo.png" alt="logo"/>
                </div>
                <div className="logos_img">
                    <img src="./images//nike-logo.png" alt="logo"/>
                </div>
            </div>
        </section>
        <PopularSection/>
        <ValueSection />
        <Contact />
        </div>
    );
}

export default HomeSection;
