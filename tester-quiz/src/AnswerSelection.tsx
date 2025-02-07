import React, { useEffect, useState } from "react";

type HandleClick = (item: number) => void; 

interface AnswerSelectionProps {
    handleClick: HandleClick;
}

const AnswerSelection = (props: AnswerSelectionProps) => {
  const [answerSelected, setAnswerSelected] = useState<boolean>(false);
  const {handleClick} = props;
  const updateAnswerSelected = () => {
    setAnswerSelected(true);
  };
  
  const answersToSelect = (
    <div className="AnswerSelectionContainer">
      <button
        className="AnswerSelectionButton"
        onDoubleClick={() => {
          handleClick(0);
          updateAnswerSelected();
          setAnswerSelected(false);
        }}
      >
        A
      </button>
      <button
        className="AnswerSelectionButton"
        onDoubleClick={() => {
          handleClick(1);
          updateAnswerSelected();
          setAnswerSelected(false);
        }}
      >
        B
      </button>
      <button
        className="AnswerSelectionButton"
        onDoubleClick={() => {
          handleClick(2);
          updateAnswerSelected();
          setAnswerSelected(false);
        }}
      >
        C
      </button>
      <button
        className="AnswerSelectionButton"
        onDoubleClick={() => {
          handleClick(3);
          updateAnswerSelected();
          setAnswerSelected(false);
        }}
      >
        D
      </button>
    </div>
  );
  return answerSelected ? <div></div> : answersToSelect;
}

export default AnswerSelection;
