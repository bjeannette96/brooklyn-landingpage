
// Process.jsx
import "./process.css"
import Text from "../Text/Text";
import Bubble from "../Bubble/Bubble";

import researchIcon from "../../assets/research.png"
import designIcon from "../../assets/logo_design.png"
import analyzeIcon from "../../assets/logo_analyze.png"
import launchIcon from "../../assets/logo_launch.png"

export default function Process() {    
    return(
        <div className="process-section">
            <div className="process-container">
                <div className="process-text">
                    <Text
                        title="Work Process"
                        className="process-style">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non, laoreet imperdiet orci. Mauris ultrices eget lorem ac vestibulum. Suspendis imperdiet,</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non.</p>
                    </Text>
                </div>
                <div className="bubbles-bloc">
                    <div className="bubbles1-2"> 
                        <Bubble 
                            imgSrc={researchIcon} 
                            title="1. Research">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu.</p>
                        </Bubble>
                        <Bubble 
                            imgSrc={designIcon} 
                            title="2. Design">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu.</p>
                        </Bubble>
                    </div>
                    <div className="bubbles3-4">
                        <Bubble 
                            imgSrc={analyzeIcon} 
                            title="3. Analyze">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu.</p>
                        </Bubble>
                        <Bubble 
                            imgSrc={launchIcon} 
                            title="4. Launch">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu.</p>
                        </Bubble>
                    </div> 
                </div>                   
            </div>
        </div>
    );
}

