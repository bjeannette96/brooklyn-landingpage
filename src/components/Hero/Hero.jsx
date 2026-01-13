
// Hero.jsx
import "./hero.css";
import heroPhoto from "../../assets/heroPhoto.png";
import Button from "../Button/Button";
("../Button/Button");
import Card from "../Card/Card";
("../Card/Card");
import Text from "../Text/Text";

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
            <Text
                title="Hello, I’m Brooklyn Gilbert"
                className="hero-style">
                  <p>I'm a Freelance UI/UX Designer and Developer based in London, England. 
                    I strive to build immersive and beautiful web applications through 
                    carefully crafted code and user-centric design.</p>
                  </Text>           
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


