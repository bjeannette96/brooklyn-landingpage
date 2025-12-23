import "./bubble.css"
import Text from "../Text/Text";

export default function Bubble() {
    return (
        <>               
        <div className="bubble">
            <a href="/home"><img src="/assets/research.png" alt="Research"/></a>
            <Text
                title="1. Research"
                className="bubble-style">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu.</p>  </Text>
        </div>
        </>
    );
}