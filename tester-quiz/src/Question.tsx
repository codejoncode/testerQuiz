import React from "react";
import SignImage from "./SignImage.tsx";
import YIELD from './SignPictures/YIELD.jpg';

interface QuestionProps {
    title: string; 
    isImage: boolean;
    imagePath: string;
}

const Question = (card: QuestionProps) => {
  const ADDEDLANE = "/src/SignPictures/ADDEDLANE.jpg";
  const picture = "src/SignPictures/ADDEDLANE.jpg";
  return (
    <div className="cardContainer">
      <img alt="telephone" src="\src\SignPictures\TELEPHONE.jpg" />
      <img alt="restare" src={picture} />
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