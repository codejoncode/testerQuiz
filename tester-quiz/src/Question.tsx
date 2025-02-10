import React from "react";
import SignImage from "./SignImage.tsx";


interface QuestionProps {
    title: string; 
    isImage: boolean;
    imagePath: string;
}

const Question = (card: QuestionProps) => {
  console.log(card.imagePath)
  return (
    <div className="cardContainer">
      <div>
        {!card.isImage ? (
          <p>{card.title}</p>
        ) : (
          <div>
            <p>{card.title}</p> 
            <SignImage src={card.imagePath} alt={`${card.title} sign image`} />
          </div>
        )}
      </div>
    </div>
  );
}

export default Question;