import "./button.css";

export default function Button({ children, onClick, className = "" }) {
  return (
    <button className={`btn ${className}`} onClick={onClick}>
      {children || "Say Hello!"}
    </button>
  );
}
