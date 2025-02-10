import React, { useEffect, useState } from "react";
import "./App.css";
import ScoreBox from "./ScoreBox.tsx";
import questionData from "./questionData.tsx";
import signDataWithImages from "./signDataWithImages.tsx";
import Question from "./Question.tsx";
import AnswerBox from "./AnswerBox.tsx";
import AnswerSelection from "./AnswerSelection.tsx";

type HandleClick = (item: number) => void;

interface QuestionData {
  title: string;
  answer: string;
  explanation: string;
  isImage: boolean;
  number: number;
  imagePath: string;
  selections: Array<string>;
}

function App() {
  const sampleQuestion: QuestionData = {
    title: "Click to load questions",
    isImage: false,
    imagePath: "",
    selections: [
      "load question",
      "load question",
      "load question",
      "load question",
    ],
    answer: "load question",
    explanation: "Please press the button to load questions",
    number: 0,
  };
  const [isQuestionsLoaded, setIsQuestionsLoaded] = useState<boolean>(false);
  const [isUpdateExpected, setisUpdateExpected] = useState<boolean>(false);
  const [total, setTotal] = useState<number>(0);
  const [incorrect, setIncorrect] = useState<number>(0);
  const [correct, setCorrect] = useState<number>(0);
  const [redos, setRedos] = useState<number>(0);
  const [currentQuestion, setCurrentQuestion] =
    useState<QuestionData>(sampleQuestion);
  const [questions, setQuestions] = useState<QuestionData[]>([sampleQuestion]);
  const [isTestComplete, setIsTestComplete] = useState<boolean>(false);

  /**
   * Will put the correct answer in an array along with three random answers.
   * Will shuffle the cards and pull three random non matching to the answer strings.
   * Purpose so that we have randomness on the answer selection. Requires the user to
   * remember details such as the content instead of the letter the answer resides.
   * @param answer string
   * @param randomAnswers Array<string>
   * @returns Array<string>
   */
  const generateRandomSelections = (
    answer: string,
    randomAnswers: Array<string>
  ) => {
    const selections: string[] = [];
    if (randomAnswers && answer) {
      selections.push(answer);
      const randomChoices = [...randomAnswers].sort(() => Math.random() - 0.5);
      while (selections.length < 4) {
        const randomSelection = Math.floor(
          Math.random() * randomChoices.length
        );
        const selection = randomChoices[randomSelection];
        if (selections.includes(selection) === false) {
          selections.push(selection);
        }
      }
    }
    if(selections.length === 0) {
      return ["Something went wrong","Something went wrong","Something went wrong","Something went wrong"]
    }
    return selections.sort(() => Math.random() - 0.5);
  };

  //takes in a object
  const buildOutQuestionsWithoutSigns = (data: any) => {
    const newQuestions: QuestionData[] = [];
    const answers = Object.keys(data).map(x => data[x].answer);
    answers.forEach((key) => {
      if (data[key]) {
        const newData: QuestionData = {
          title: key,
          imagePath: "",
          selections: generateRandomSelections(data[key].answer, answers),
          ...data[key],
        };
        newQuestions.push(newData);
      }
    });
    return newQuestions;
  };
  //takes in an array of objects
  const buildOutQuestionsWithSigns = (data: any) => {
    const newQuestions: QuestionData[] = [];
    const answers = data.map((d: { answer: any; }) => d.answer);
    data.forEach((d: QuestionData) => {
      const newData: QuestionData = {
        ...d,
        selections: generateRandomSelections(d.answer, answers),
      };
      newQuestions.push(newData);
    });
    return newQuestions;
  };

  /**
   * Will load the questions on to state also sets
   * current question and current index
   */
  const loadQuestions = () => {
    const regularQuestionsWithoutImages =
      buildOutQuestionsWithoutSigns(questionData);
    const questionsWithImages = buildOutQuestionsWithSigns(signDataWithImages);
    const combinedQuestions: QuestionData[] = [
      ...regularQuestionsWithoutImages,
      ...questionsWithImages,
    ];
    if (combinedQuestions.length) {
      setQuestions([...combinedQuestions]);
    } else {
      // throw some error what is going on? 
      // log the issue the questionData and signDataWithImages for bug hunting
    }
    setCurrentQuestion(combinedQuestions[0]);
    setRedos(0);
    setIncorrect(0);
    setCorrect(0);
    setTotal(0);
    setIsQuestionsLoaded(true);
    setIsTestComplete(false);
  };

  const newQuestionLoad = (isCorrect: boolean) => {
    const updatedQuestions: QuestionData[] = [];
    questions.forEach((question, index) => {
      if (index > 0) {
        updatedQuestions.push(question);
      }
    });

    if (isCorrect === false) {
      updatedQuestions.push(questions[0]);
    }
    setisUpdateExpected(true);
    return updatedQuestions;
  };

  const compareSelction: HandleClick = (selection: number) => {
    // compare selection to correct answer
    const answer: string = currentQuestion?.answer ?? "";
    const selections = currentQuestion?.selections ?? [];
    const indexWhereAnswerIsInSelections = selections.findIndex(
      (x) => x === answer
    );
    //update if it is correct the correct
    if (selection === indexWhereAnswerIsInSelections) {
      setCorrect(correct + 1);

      setQuestions([...newQuestionLoad(true)]);
    } else if (indexWhereAnswerIsInSelections === -1) {
      throw new Error(
        "Shouldn't have a scenario where there are no answers that match"
      );
    } else {
      setIncorrect(incorrect + 1);
      setQuestions([...newQuestionLoad(false)]);
    }
    setTotal(total + 1);
    // remove the item from the list list of questions
    //else incorrect
    // place back into the queue
    //update totals
    // could show a modal of explanation correct or incorrect later down the road.
  };

  useEffect(() => {
    if(isUpdateExpected) {
      const questionArray = [...questions];
      setQuestions(questionArray);
      // check if there is questions left befroe setting it
      if (questionArray.length) {
        setCurrentQuestion(questionArray[0]);
      } else {
        setIsTestComplete(true);
      }
      // set to default or trigger a way to show the test is over
      setisUpdateExpected(false);
    }
  }, [questions, setQuestions, isUpdateExpected]);

  const startButtonText = isQuestionsLoaded ? "Click to reload questions and start over" : "Click to Load questions and start studying";
  return (
    <div className="App">
      <header className="App-header">
        Indiana State drivers written exam practice
      </header>
      <div className="AppQuestionContainer">
        <button className="LoadQuestionsButton" onClick={() => loadQuestions()}>
          {startButtonText}
        </button>
        <ScoreBox
          total={total}
          incorrect={incorrect}
          correct={correct}
          redos={redos}
        />
        {!isTestComplete ? <div>
          <Question
            title={currentQuestion.title}
            imagePath={currentQuestion.imagePath}
            isImage={currentQuestion.isImage}
          />
          <AnswerBox
            selectionOne={currentQuestion.selections[0]}
            selectionTwo={currentQuestion.selections[1]}
            selectionThree={currentQuestion.selections[2]}
            selectionFour={currentQuestion.selections[3]}
          />
          <AnswerSelection handleClick={compareSelction} />
        </div>: <div>YOU COMPLETED THE TEST</div>}
      </div>
    </div>
  );
}

export default App;
