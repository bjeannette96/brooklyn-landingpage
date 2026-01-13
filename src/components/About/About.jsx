
// About.jsx
import "./about.css"
import Bubble from "../Bubble/Bubble";
import Button from "../Button/Button";

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
        </div>
        );
}   



