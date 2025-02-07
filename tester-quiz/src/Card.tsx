import React from "react";
interface CardProps {
    title: string; 
    isImage: boolean;
    imagePath: string;
}

const Card = (card: CardProps) => {
  return (
    <div className="cardContainer">
      <div>
        {!card.isImage ? (
          <p>{card.title}</p>
        ) : (
          <div>
            <p>{card.title}</p> <img alt="" src={card.imagePath} />
          </div>
        )}
      </div>
    </div>
  );
}

export default Card;