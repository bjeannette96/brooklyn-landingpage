
//Blog.jsx

import "./blog.css";
import Text from "../Text/Text";
import Bubble from "../Bubble/Bubble";
import Button from "../Button/Button";

import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import { Pagination} from "swiper/modules";  
import "swiper/css/pagination";      

import blog1 from "../../assets/blog1.png";
import blog2 from "../../assets/blog2.png";
import blog3 from "../../assets/blog3.png";
import blog4 from "../../assets/blog4.png";

export default function Blog() {
    return(
        <div className="blog-section">
            <div className="blog-container">
                <div className="blog-content">
                    <Text 
                        title="Blog" className="blog-style">
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
                    </Text>
                    <div className="blog-carousel">
                        <Swiper
                            modules={[Pagination]}
                            spaceBetween={24}
                            slidesPerView={4}
                            slidesOffsetBefore={5}     
                            slidesOffsetAfter={26}
                            pagination={{ clickable: true }}
                            breakpoints={{
                                320: {
                                    slidesPerView: 1,
                                    spaceBetween: 10
                                },
                                768: {
                                    slidesPerView: 2,
                                    spaceBetween: 15
                                },
                                1024: {
                                    slidesPerView: 4,
                                    spaceBetween: 24
                                }
                            }}
                            >
                            <SwiperSlide>
                                    <Bubble 
                                    imgSrc={blog1}
                                    className="blog-bubble">
                                    <p className="blog-date">22 Oct, 2020 / 246 Comments</p>
                                    <p>Lorem ipsum dolor sit consea. Nulla purus arcu</p>
                                </Bubble>
                            </SwiperSlide>
                            <SwiperSlide>
                                    <Bubble 
                                    imgSrc={blog2}
                                    className="blog-bubble">
                                    <p className="blog-date">22 Oct, 2020 / 246 Comments</p>
                                    <p>Lorem ipsum dolor sit consea. Nulla purus arcu</p>
                                </Bubble>
                            </SwiperSlide>
                            <SwiperSlide>
                                    <Bubble 
                                    imgSrc={blog3}
                                    className="blog-bubble">
                                    <p className="blog-date">22 Oct, 2020 / 246 Comments</p>
                                    <p>Lorem ipsum dolor sit consea. Nulla purus arcu</p>
                                </Bubble>
                            </SwiperSlide>
                            <SwiperSlide>
                                    <Bubble 
                                    imgSrc={blog4}
                                    className="blog-bubble">
                                    <p className="blog-date">22 Oct, 2020 / 246 Comments</p>
                                    <p>Lorem ipsum dolor sit consea. Nulla purus arcu</p>
                                </Bubble>
                            </SwiperSlide>
                            <SwiperSlide>
                                    <Bubble 
                                    imgSrc={blog1}
                                    className="blog-bubble">
                                    <p className="blog-date">22 Oct, 2020 / 246 Comments</p>
                                    <p>Lorem ipsum dolor sit consea. Nulla purus arcu</p>
                                </Bubble>
                            </SwiperSlide>
                            <SwiperSlide>
                                    <Bubble 
                                    imgSrc={blog2}
                                    className="blog-bubble">
                                    <p className="blog-date">22 Oct, 2020 / 246 Comments</p>
                                    <p>Lorem ipsum dolor sit consea. Nulla purus arcu</p>
                                </Bubble>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    );
}   



