
// Bubble.jsx
import "./bubble.css"
import Text from "../Text/Text";

export default function Bubble({title, children, imgSrc, className=""}) {
    return (             
        <div className={`bubble ${className}`}>
            {imgSrc && (
                <div className="icon-container">
                    <img src={imgSrc} alt={title || ""} />
                </div>
            )}
            {title ? (
                <Text title={title} className="bubble-style">
                    {children}
                </Text>
            ) : (
                <div className="bubble-content">
                    {children}
                </div>
            )}
        </div>
    );
}

