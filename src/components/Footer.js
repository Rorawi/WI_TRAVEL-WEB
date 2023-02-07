import React from 'react';
import './footer.css';
import './ParentStyle.css'

const Footer = () => {
    return (
        <div>
           <footer className="footer section">
            <div className="footer_container container grid">
                <div>
                    <a href="#" className="footer_logo">
                        WI_TRAVEL
                        <i className=" bsx bsx-home-alt-2"></i>
                    </a>
                    <p className="footer_description">
                        We are a small company always looking for new<br/>
                        creative ideas to help you with our products in<br/>
                        your everyday work.
                    </p>
                </div>

                <div className="footer_content">
                    <div>
                        <h3 className="footer_title">
                            Activities
                        </h3>

                        <ul className="footer_links">
                            <li>
                                <a href="" className="footer_link">Travel</a>
                            </li>
                            <li>
                                <a href="" className="footer_link">Explore</a>
                            </li>
                            <li>
                                <a href="" className="footer_link">Eat</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="footer_title">
                            Services
                        </h3>

                        <ul className="footer_links">
                            <li>
                                <a href="" className="footer_link">Contact Sales</a>
                            </li>
                            <li>
                                <a href="" className="footer_link">Plans & Pricing</a>
                            </li>
                            <li>
                                <a href="" className="footer_link">Events</a>
                            </li>
                        </ul>
                    </div>


                    <div>
                        <h3 className="footer_title">
                            About Us
                        </h3>

                        <ul className="footer_links">
                            <li>
                                <a href="" className="footer_link">About Us</a>
                            </li>
                            <li>
                                <a href="" className="footer_link">Our Blog</a>
                            </li>
                            <li>
                                <a href="" className="footer_link">Features</a>
                            </li>
                        </ul>
                    </div>


                    <div>
                        <h3 className="footer_title">
                            Follow Us
                        </h3>

                        <ul className="footer_socials">
                            <a href="#" className="footer_social-link" target="_blank">
                                <i className='bx bxl-linkedin-square'></i>                      
                                  </a>
                            <a href="#" className="footer_social-link" target="_blank">
                                <i className='bx bxl-facebook-square' ></i>
                            </a>
                            <a href="#" className="footer_social-link" target="_blank">
                                <i className=" bx bsl-pinterest"></i>
                            </a>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="footer_info container">
                <span className="footer_copy">
                    &copy; wI_tRAVeL 2022.All rights reserved
                </span>

                <div className="footer_privacy">
                    <a href="#">Terms and conditions</a>
                    <a href="#">Our Private Policies</a>
                </div>
            </div>
 
        </footer>
        </div>
    );
}

export default Footer;
