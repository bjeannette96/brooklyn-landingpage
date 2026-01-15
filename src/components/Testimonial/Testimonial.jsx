
//Testimonial.jsx

import "./testimonial.css";
import Text from "../Text/Text";

import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import { Pagination} from "swiper/modules";  
import "swiper/css/pagination";     

//import socials from "../../assets/socials.png";
import google from "../../assets/google.svg";
import linkedin from "../../assets/linkedin.svg";
import medium from "../../assets/medium.svg";
import dribbble from "../../assets/dribbble.svg";
import spotify from "../../assets/spotify.svg";
import amazon from "../../assets/amazon.svg";   


export default function Testimonial() {
    return(
        <div className="contact-section">
            <div className="contact-container">
                <div className="contact-content">
                    <Text 
                        title="Happy Clients" className="contact-style">
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
                    </Text>
                    <div className="socials-image">
                        {/* <img src={socials} alt="socials" className="socials-image"/> */}                        
                        <img src={google} className="Google"  />
                        <img src={dribbble} className="Dribbble"  />
                        <img src={linkedin} className="LinkedIn"  />
                        <img src={amazon} className="Amazon" />
                        <img src={medium} className="Medium" />
                        <img src={spotify} className="Spotify" />
                    </div>
                    <div className="testimonial-section">
                        <Text 
                        title="Testimonial" className="contact-style">
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
                        </Text>
                    <div className="contact-carousel">
                        <Swiper
                            modules={[Pagination]}
                            slidesPerView={1}
                            pagination={{ clickable: true }}
                            breakpoints={{
                                320: {
                                    slidesPerView: 1,
                                    spaceBetween: 10
                                },
                                768: {
                                    slidesPerView: 1,
                                    spaceBetween: 15
                                },
                                1024: {
                                    slidesPerView: 1,
                                    spaceBetween: 24
                                }
                            }}
                            >
                            <SwiperSlide>
                                <div className="testimonial-content">
                                    <p className="testimonial-text">“Nulla efficitur nisl sit amet velit malesuada dapibus. Duis mollis felis turpis, nec semper odio convallis at. Curabitur imperdiet semper arcu, a finibus arcu suscipit in. Donec quis placerat nibh. Maecenas est purus, eleifend ac cursus sed, tincidunt ut sapien. Morbi ornare elit at libero suscipit porta.”</p>
                                    <p className="client-name">Esther Howard</p>
                                    <p className="client-position">Managing Director, ABC company</p> 
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="testimonial-content">
                                    <p className="testimonial-text">“Nulla efficitur nisl sit amet velit malesuada dapibus. Duis mollis felis turpis, nec semper odio convallis at. Curabitur imperdiet semper arcu, a finibus arcu suscipit in. Donec quis placerat nibh. Maecenas est purus, eleifend ac cursus sed, tincidunt ut sapien. Morbi ornare elit at libero suscipit porta.”</p>
                                    <p className="client-name">Sarah Howard</p>
                                    <p className="client-position">Managing Director, ABC company</p> 
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="testimonial-content">
                                    <p className="testimonial-text">“Nulla efficitur nisl sit amet velit malesuada dapibus. Duis mollis felis turpis, nec semper odio convallis at. Curabitur imperdiet semper arcu, a finibus arcu suscipit in. Donec quis placerat nibh. Maecenas est purus, eleifend ac cursus sed, tincidunt ut sapien. Morbi ornare elit at libero suscipit porta.”</p>
                                    <p className="client-name">Colete Howard</p>
                                    <p className="client-position">Managing Director, ABC company</p> 
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="testimonial-content">
                                    <p className="testimonial-text">“Nulla efficitur nisl sit amet velit malesuada dapibus. Duis mollis felis turpis, nec semper odio convallis at. Curabitur imperdiet semper arcu, a finibus arcu suscipit in. Donec quis placerat nibh. Maecenas est purus, eleifend ac cursus sed, tincidunt ut sapien. Morbi ornare elit at libero suscipit porta.”</p>
                                    <p className="client-name">Falone Howard</p>
                                    <p className="client-position">Managing Director, ABC company</p> 
                                </div>
                            </SwiperSlide>                            
                        </Swiper>
                    </div>                    
                    </div>
                </div>
            </div>
        </div>
    );
}   


