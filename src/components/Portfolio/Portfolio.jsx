
// Portfolio.jsx
import "./portfolio.css";
import Text from "../Text/Text";
import Bubble from "../Bubble/Bubble"
import Button from "../Button/Button";

import imageProjet1 from "../../assets/imageProjet1.png";
import imageProjet2 from "../../assets/imageProjet2.png";
import imageProjet3 from "../../assets/imageProjet3.png";
import imageProjet4 from "../../assets/imageProjet4.png";       
import imageProjet5 from "../../assets/imageProjet5.png";
import imageProjet6 from "../../assets/imageProjet6.png";
import arrow from "../../assets/arrow.png";
import whitearrow from "../../assets/whitearrow.png";


export default function Portfolio() {
    return(
        <div className="portfolio-section"> 
            <div className="portfolio-container"> 
                <div className="portfolio-content">
                    <Text 
                        title="Portfolio" className="portfolio-style">
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
                    </Text>
                    <div className="projects-grid">
                        <Bubble 
                            imgSrc={imageProjet1}
                            title="Product Admin Dashboard"
                            className="projectBubble1">
                            <p className="category-tag">UI/UX DESIGN</p>
                            <p>Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id imperdiet lacus.</p>
                            <Button imgSrc={arrow} className="case-study-button">Case Study</Button>
                        </Bubble>
                        <Bubble 
                            imgSrc={imageProjet2}
                            title="Product Admin Dashboard"
                            className="projectBubble2">
                            <p className="category-tag">UI/UX DESIGN</p>
                            <p>Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id imperdiet lacus.</p>
                            <Button imgSrc={arrow} className="case-study-button">Case Study</Button>
                        </Bubble>
                        <Bubble 
                            imgSrc={imageProjet3}
                            title="Product Admin Dashboard"
                            className="projectBubble3">
                            <p className="category-tag">UI/UX DESIGN</p>
                            <p>Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id imperdiet lacus.</p>
                            <Button imgSrc={arrow} className="case-study-button">Case Study</Button>
                        </Bubble>
                        <Bubble 
                            imgSrc={imageProjet4}
                            title="Product Admin Dashboard"
                            className="projectBubble4">
                            <p className="category-tag">UI/UX DESIGN</p>
                            <p>Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id imperdiet lacus.</p>
                            <Button imgSrc={arrow} className="case-study-button">Case Study</Button>
                        </Bubble>
                        <Bubble 
                            imgSrc={imageProjet5}
                            title="Product Admin Dashboard"
                            className="projectBubble5">
                            <p className="category-tag">UI/UX DESIGN</p>
                            <p>Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id imperdiet lacus.</p>
                            <Button imgSrc={arrow} className="case-study-button">Case Study </Button>
                        </Bubble>
                        <Bubble 
                            imgSrc={imageProjet6}
                            title="Product Admin Dashboard"
                            className="projectBubble6">
                            <p className="category-tag">UI/UX DESIGN</p>
                            <p>Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id imperdiet lacus.</p>
                            <Button imgSrc={arrow} className="case-study-button">Case Study</Button>
                        </Bubble>        
                    </div>
                    <div className="portfolio-footer">
                        <Button className="more-projects-button">More Projects</Button>
                    </div>
                </div>
                
            </div>
            <div className="work-together">
                    <Text 
                        title="Do you have Project Idea?Let's discuss your project!" 
                        className="work-together-style">
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
                    </Text>
                    <Button imgSrc={whitearrow} className="work-together-button">Let’s work Together</Button>
                </div>
        </div>
    );
}



