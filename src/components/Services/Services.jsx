

//Services.jsx
import "./services.css"
import Text from "../Text/Text";
import Bubble from "../Bubble/Bubble";
import Button from "../Button/Button";

export default function Services() {    
    return(
            <div className="services-section">
                <div className="services-container">
                    <div className="services-text">
                        <Text
                            title="What I do?"
                            className="services-style">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non, laoreet imperdiet orci. Mauris ultrices eget lorem ac vestibulum. Suspendis imperdiet,</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non.</p>
                        </Text>
                        <Button/>
                    </div>
                    <div className="services-bubbles">
                        <Bubble 
                            title="User Experience (UX)"
                            className="servicesBubble1">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non, laoreet imperdiet orci. Mauris ultrices eget lorem ac vestibulum.</p>
                        </Bubble>
                        <Bubble 
                            title="User Interface (UI)"
                            className="servicesBubble2">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non, laoreet imperdiet orci. Mauris ultrices eget lorem ac vestibulum.</p>
                        </Bubble>
                        <Bubble 
                            title="Web Development" 
                            className="servicesBubble3">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non, laoreet imperdiet orci. Mauris ultrices eget lorem ac vestibulum.</p>
                        </Bubble>
                    </div>
                </div>
            </div>
        );
}


