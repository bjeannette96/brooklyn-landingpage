
// Card.jsx
import "./card.css";

export default function Card({ title, description, className = "" }) {
  return (
    <div className={`card ${className}`}>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}


