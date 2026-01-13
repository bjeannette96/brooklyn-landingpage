
//Form.jsx

import "./form.css";
import Bubble from "../Bubble/Bubble";
import Button from "../Button/Button";
import { FaFacebookF, FaDribbble, FaBehance, FaInstagram, FaLinkedinIn, FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import { IoSend } from "react-icons/io5";

export default function Form() {    
    return(
        <div className="form-section">
            <Bubble className="form-bubble"> 
                {/* COLONNE GAUCHE */}
                <div className="contact-info-side">
                    <h2>Let’s discuss your Project</h2>
                    <p className="contact-subtitle">There are many variations of passages of Lorem Ipsu available, but the majority have suffered alte.</p>
                    
                    <div className="contact-details-list">
                        <div className="detail-card">
                            <div className="detail-icon"><FaMapMarkerAlt /></div>
                            <div className="detail-text">
                                <span>Address:</span>
                                <strong>New Mexico 31134</strong>
                            </div>
                        </div>
                        <div className="detail-card">
                            <div className="detail-icon"><FaEnvelope /></div>
                            <div className="detail-text">
                                <span>My Email:</span>
                                <strong>mymail@mail.com</strong>
                            </div>
                        </div>
                        <div className="detail-card">
                            <div className="detail-icon"><FaPhoneAlt /></div>
                            <div className="detail-text">
                                <span>Call Me Now:</span>
                                <strong>00-1234 00000</strong>
                            </div>
                        </div>
                    </div>

                    <div className="social-pills">
                        <a href="#" className="active"><FaFacebookF /></a>
                        <a href="#"><FaDribbble /></a>
                        <a href="#"><FaBehance /></a>
                        <a href="#"><FaInstagram /></a>
                        <a href="#"><FaLinkedinIn /></a>
                    </div>
                </div>

                {/* COLONNE DROITE */}
                <div className="form-side">
                    <p className="form-intro">There are many variations of passages of Lorem Ipsu available, but the majority have suffered alte.</p>
                    <form className="project-form">
                        <div className="input-group">
                            <input type="text" placeholder="Name*" required />
                        </div>
                        <div className="input-group">
                            <input type="email" placeholder="Email*" required />
                        </div>
                        <div className="input-group">
                            <input type="text" placeholder="Location" />
                        </div>
                        <div className="form-row">
                            <input type="text" placeholder="Budget*" />
                            <input type="text" placeholder="Subject*" />
                        </div>
                        <div className="input-group">
                            <textarea placeholder="Message*"></textarea>
                        </div>
                        <Button className="submit-button">
                            Submit <IoSend style={{marginLeft: '8px'}} />
                        </Button>
                    </form>
                </div>
            </Bubble>            
        </div>
    );
}