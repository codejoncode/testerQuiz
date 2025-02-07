import React from "react";

interface AnswerBoxProps {
  selectionOne: string,
  selectionTwo: string,
  selectionThree: string,
  selectionFour: string
}

const AnswerBox = (selections: AnswerBoxProps) => {
  return (
    <div className="answerBoxContainer">
      <div className="answerBoxContainerSectionOne">
        <p>A. {selections.selectionOne}</p>
        <p>B. {selections.selectionTwo}</p>
      </div>
      <div className="answerBoxContainerSectionTwo">
        <p>C.{selections.selectionThree} </p>
        <p>D. {selections.selectionFour} </p>
      </div>
    </div>
  );
}

export default AnswerBox;
