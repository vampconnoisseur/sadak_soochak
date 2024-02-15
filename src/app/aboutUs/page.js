import React from "react";
import "../../../styles/global.css"
import "../../../styles/aboutUs.css";

import Image from "next/image";

export default function AboutUs() {
    return (
        <main>
            <section id="contact-us">
                <div className="content">
                    <div className="contact-section">
                        <div className="contact-bg">
                            <h2>About Us</h2>
                            <div className="line">
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                            <p className="text"></p>
                        </div>

                        <div className="contact-body">
                            <div className="contact-info">
                                <p>ccfhjblk</p>
                                    
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="contact-us">
                <div className="content">
                    <div className="contact-section">
                        <div className="contact-bg">
                            <h3>Get in Touch with Us</h3>
                            <h2>Contact Us</h2>
                            <div className="line">
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                            <p className="text"></p>
                        </div>

                        <div className="contact-body">
                            <div className="contact-info">
                                <div>
                                    <span><i className="fas fa-mobile-alt"></i></span>
                                    <span>Phone No.</span>
                                    <span className="text">1-2392-23928-2</span>
                                </div>
                                <div>
                                    <span><i className="fas fa-envelope-open"></i></span>
                                    <span>E-mail</span>
                                    <span className="text">mail@company.com</span>
                                </div>
                                <div>
                                    <span><i className="fas fa-map-marker-alt"></i></span>
                                    <span>Address</span>
                                    <span className="text">2939 Patrick Street, Victoria TX, United States</span>
                                </div>
                                <div>
                                    <span><i className="fas fa-clock"></i></span>
                                    <span>Opening Hours</span>
                                    <span className="text">Monday - Friday (9:00 AM to 5:00 PM)</span>
                                </div>
                            </div>

                            <div className="contact-form">
                                <form>
                                    <div>
                                        <input type="text" className="form-control" placeholder="First Name" />
                                        <input type="text" className="form-control" placeholder="Last Name" />
                                    </div>
                                    <div>
                                        <input type="email" className="form-control" placeholder="E-mail" />
                                        <input type="text" className="form-control" placeholder="Phone" />
                                    </div>
                                    <textarea rows="5" placeholder="Message" className="form-control"></textarea>
                                    <input type="submit" className="send-btn" value="Send Message" />
                                </form>

                                <div className="map">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3670.535735257775!2d76.84871217350964!3d23.07747641428055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397ce9ceaaaaaaab%3A0xa224b6b82b421f83!2sVIT%20Bhopal%20University!5e0!3m2!1sen!2sin!4v1707908470736!5m2!1sen!2sin" width="500" height="350" frameborder="0" style={{ border: 0 }} allowfullscreen="" aria-hidden="false" tabIndex="0"></iframe>
                        </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <footer id="advanced-footer">
    <div id="footer-content">
        <p>&copy; 2024 Your Website. All rights reserved.</p>
        <div id="contact-info">
            <p>Contact us: <a href="mailto:info@example.com">info@example.com</a></p>
        </div>
    </div>
</footer>

        </main>
    );
}
