
// About.jsx
import "./about.css"
import Bubble from "../Bubble/Bubble";
import Button from "../Button/Button";

import greyPhoto from "../../assets/greyPhoto.png"
import download from "../../assets/download.png"

import { FaFacebookF, FaDribbble, FaInstagram, FaLinkedinIn, FaBehance } from 'react-icons/fa';


export default function About() {    
    return(
        <div className="about-section">
            <Bubble className="presentation-bubble"> 
                <div className="about-image-wrapper">
                    <img src={greyPhoto} alt="Profile" className="profile-photo" />
                    <div className="social-mini-bubble">
                        <a href="#"><FaFacebookF /></a>
                        <a href="#"><FaDribbble /></a>
                        <a href="#"><FaInstagram /></a>
                        <a href="#"><FaLinkedinIn /></a>
                        <a href="#"><FaBehance /></a>
                    </div>
                </div>
                <div className="about-text-content">
                    <h1>I am Professional User Experience Designer</h1>
                    <p>I design and develop services for customers specializing creating stylish, modern websites, web services and online stores. My passion is to design digital user experiences.</p>
                    <p>I design and develop services for customers specializing creating stylish, modern websites, web services.</p> 
                    <div className="about-buttons">
                        <Button className="project-button">My project</Button>
                        <Button imgSrc={download} className="download-button">Download CV</Button>
                    </div>
                </div>                 
            </Bubble>            
            </div>
        );
}   



