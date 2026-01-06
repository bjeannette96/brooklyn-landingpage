import "./bubble.css"
import Text from "../Text/Text";

export default function Bubble({title, children, imgSrc, className=""}) {
    return (             
        <div className={`bubble ${className}`}>
            <div className="icon-container">
                <img src={imgSrc} alt={title} />
            </div>
            <Text title={title} className="bubble-style">
                {children}
            </Text>
        </div>
    );
}

