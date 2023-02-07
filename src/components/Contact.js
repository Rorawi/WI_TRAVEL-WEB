import React from 'react';
import './contact.css';
import './ParentStyle.css'


const Contact = () => {
    return (
        <div>
            <section className="contact section" id="contact">
            <div className="contact_container container grid">

                <div className="contact_images">
                    <div className="contact_orbe"></div>
                    <div className="contact_img">
                        <img src="./images/nathan-fertig-FBXuXp57eM0-unsplash.jpg" alt=""/>
                    </div>
                    
                </div>
                {/* <!--contact_images ends here--> */}

                <div className="contact_content">
                    <div className="contact_data">
                        <span className="section_subtitle">Contact Us</span>
                        <h2 className="section_title">We'd love to hear from you</h2>
                        <p className="contact_description">
                            What best and affordable trip do you want to embark on?
                            Hit us up for outstanding rooms to suit your comfort🥳.
                        </p>
                    </div>


                    <div className="contact_card">
                        <div className="contact_card-box">
                            <div className="contact_card-info">
                                <i className="bx bxs-phone-call"></i>
                                <div>
                                    <h3 className="contact_card-title">
                                        Call
                                    </h3>
                                    <p className="contact_card-description">
                                        0246230349
                                    </p>
                                </div>
                            </div>
                            <button className="button contact_card-button">
                                Call Now
                            </button>

                        </div>
                        {/* <!--contact_card-box ends here--> */}
                        <div className="contact_card-box">
                            <div className="contact_card-info">
                                <i className="bx bxs-phone-call"></i>
                                <div>
                                    <h3 className="contact_card-title">
                                        Message
                                    </h3>
                                    <p className="contact_card-description">
                                        0246230349
                                    </p>
                                </div>
                            </div>
                            <button className="button contact_card-button">
                                Message Now
                            </button>

                        </div>
                        {/* <!--contact_card-box ends here--> */}

                    </div>
                    {/* <!--contact_card ends here--> */}


                </div>

            </div>
            {/* <!--contact_container container grid ends here--> */}
        </section>

        <section className="subscribe section">
            <div className="subscribe_container container">
                <h1 className="subscribe_title">
                    Subscribe to our news channel
                </h1>
                <p className="subscribe_description">
                    Let's get you updated with our new and stunning new designs with an affordable price🥳
                </p>
                <a href="#" className="button subscribe_button">Subscribe Now</a>
            </div>
        </section>
        </div>
    );
}

export default Contact;
