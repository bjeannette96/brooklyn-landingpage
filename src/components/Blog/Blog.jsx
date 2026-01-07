//Blog.jsx

import "./blog.css";
import Text from "../Text/Text";
import Bubble from "../Bubble/Bubble";
import Button from "../Button/Button";

export default function Blog() {
    return(
        <div className="blog-section">
            <div className="blog-container">
                <div className="blog-content">
                    <Text 
                        title="Blog" className="blog-style">
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
                    </Text>
                    <div className="blog-bubbles">
                        <Bubble 
                            title="Blog Post One"
                            className="blogBubble1">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non, laoreet imperdiet orci.</p>
                            <Button className="read-more-button">Read More</Button>
                        </Bubble>
                        <Bubble 
                            title="Blog Post Two"
                            className="blogBubble2">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non, laoreet imperdiet orci.</p>
                            <Button className="read-more-button">Read More</Button>
                        </Bubble>
                        <Bubble 
                            title="Blog Post Three"
                            className="blogBubble3">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non, laoreet imperdiet orci.</p>
                            <Button className="read-more-button">Read More</Button>
                        </Bubble>
                    </div>
                </div>
            </div>
        </div>
    )
}   