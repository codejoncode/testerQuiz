import React from "react";

interface ScoreBoxProps {
    total: number;
    incorrect: number;
    correct: number;
    redos: number;
}

const ScoreBox = (data: ScoreBoxProps) => {
  return (
    <div className="ScoreBoxContainer">
      <table>
        <tr>
          <th>Total</th>
          <th>Incorrect</th>
          <th>Correct</th>
          <th></th>
          <th>Redo's</th>
        </tr>
        <tr>
          <td>{data.total}</td>
          <td>{data.incorrect}</td>
          <td>{data.correct}</td>
          <td>{data.redos}</td>
        </tr>
      </table>
    </div>
  );
}
export default ScoreBox;
