import "./about.css"
import Text from "../Text/Text";
import Bubble from "../Bubble/Bubble";
import Button from "../Button/Button";
import researchIcon from "../../assets/research.png"
import designIcon from "../../assets/logo_design.png"
import analyzeIcon from "../../assets/logo_analyze.png"
import launchIcon from "../../assets/logo_launch.png"
import greyPhoto from "../../assets/greyPhoto.png"
import download from "../../assets/download.png"



export default function About() {    
    return(
        <div className="about-section">
            <Bubble 
                imgSrc={greyPhoto} 
                title="I am Professional User Experience Designer"
                className="presentation-bubble"> 
                <p>I design and develop services for customers specializing creating stylish, modern websites, web services and online stores. My passion is to design digital user experiences.</p>
                <p>I design and develop services for customers specializing creating stylish, modern websites, web services.</p> 
                <div className="about-buttons">
                    <Button className="project-button">My project</Button>
                    <Button imgSrc={download} className="download-button">Download CV</Button>
                </div>                  
                </Bubble>
            <div className="about-container">
                <div className="about-text">
                    <Text
                        title="Work Process"
                        className="about-style">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non, laoreet imperdiet orci. Mauris ultrices eget lorem ac vestibulum. Suspendis imperdiet,</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non.</p>
                        </Text>
                </div>
                    <div className="bubbles-bloc">
                        <div className="bubbles1-2"> 
                            <Bubble imgSrc={researchIcon} 
                            title="1. Research">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Bubble>
                            <Bubble imgSrc={designIcon} 
                            title="2. Design">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu.</p>
                    </Bubble>
                        </div>
                        <div className="bubbles3-4">
                            <Bubble imgSrc={analyzeIcon} 
                            title="3. Analyze">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu.</p>
                    </Bubble>
                            <Bubble imgSrc={launchIcon} 
                            title="4. Launch">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu.</p>
                    </Bubble>
                        </div> 
                    </div>                   
                </div>
            </div>
        );
}   

