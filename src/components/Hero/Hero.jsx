import "./hero.css";
import heroPhoto from "../../assets/heroPhoto.png";
import Button from "../Button/Button";
("../Button/Button");
import Card from "../Card/Card";
("../Card/Card");

export default function Hero() {
  const cardData = [
    { title: "15 Y.", description: "Experience" },
    { title: "250+", description: "Projects Completed" },
    { title: "58", description: "Happy Client" },
  ];
  return (
    <div className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Hello, I’m Brooklyn Gilbert</h1>
            <p>
              I'm a Freelance UI/UX Designer and Developer based in London,
              England. I strives to build immersive and beautiful web
              applications through carefully crafted code and user-centric
              design.
            </p>
            <Button />
            <div className="cards-container">
              {cardData.map((card, index) => (
                <Card
                  key={index}
                  title={card.title}
                  description={card.description}
                />
              ))}
            </div>
          </div>
          <img src={heroPhoto} alt="Brooklyn Gilbert" className="hero-image" />
        </div>
      </div>
    </div>
  );
}
