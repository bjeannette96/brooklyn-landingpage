
// Text.jsx
import "./text.css";

export default function Text({ title, children, className = "" }) {
  return (
    <div className={`text-block ${className}`}>
      <h1>{title}</h1>
      <div className="text-body">
        {children}
      </div>
    </div>
  );
}


