import "./about.css"
import Text from "../Text/Text";
import Bubble from "../Bubble/Bubble";

export default function About() {    
    return(
        <div className="about-section">
            <div className="about-container">
                <Text
                    title="Work Process"
                    className="about-style">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non, laoreet imperdiet orci. Mauris ultrices eget lorem ac vestibulum. Suspendis imperdiet,</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non.</p>
                    </Text>
                    <Bubble/>
                </div>
            </div>
        );
}   