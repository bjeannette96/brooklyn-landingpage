import "./button.css";

export default function Button({ children, onClick, className = "", imgSrc }) {
  return (
    <button className={`btn ${className}`} onClick={onClick}>
      {children || "Say Hello!"}
      {imgSrc && <img src={imgSrc} alt="" className="button-icon" />}
    </button>
  );
}

