import React from "react";

interface ScoreBoxProps {
    total: number;
    incorrect: number;
    correct: number;
    redos: number;
}

const ScoreBox = (data: ScoreBoxProps) => {
  const percentage = Math.round(((data.correct / data.total) * 100));
  const percentageClassName = percentage < 85 ? "ScoreBoxDataPercentageFail" : "ScoreBoxDataPercentagePass";
  return (
    <div className="ScoreBoxContainer">
      <table>
        <tr>
          <th>Total</th>
          <th>Incorrect</th>
          <th>Correct</th>
          <th>Grade</th>
        </tr>
        <tr>
          <td className="ScoreBoxData">{data.total}</td>
          <td className="ScoreBoxData">{data.incorrect}</td>
          <td className="ScoreBoxData">{data.correct}</td>
          <td className={`ScoreBoxData ${percentageClassName}`}>{data.total ? percentage: 0}%</td>
        </tr>
      </table>
    </div>
  );
}
export default ScoreBox;
