
//Contact.jsx

import "./contact.css";
import Text from "../Text/Text";

import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import { Pagination} from "swiper/modules";  
import "swiper/css/pagination";     

import socials from "../../assets/socials.png";


export default function Contact() {
    return(
        <div className="contact-section">
            <div className="contact-container">
                <div className="contact-content">
                    <Text 
                        title="Happy Clients" className="contact-style">
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
                    </Text>
                    <div>
                        <img src={socials} alt="socials" className="socials-image"/>
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



