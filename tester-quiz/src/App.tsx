import React, { useEffect, useState } from "react";
import "./App.css";
import ScoreBox from "./ScoreBox.tsx";
import questionData from "./questionData.tsx";
import signDataWithImages from "./signDataWithImages.tsx";
import Card from "./Card.tsx";
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
  // const [correctAnswer, setCorrectAnswer] = useState<number>(0);
  const [currentQuestion, setCurrentQuestion] =
    useState<QuestionData>(sampleQuestion);
  const [questions, setQuestions] = useState<QuestionData[]>([sampleQuestion]);
  // const [index, setIndex] = useState<number>(0);

  // should be the keys from cardData and produce an array of strings;
  // const cardKeys = Object.keys(cardData);
  // const randomChoices = [...cardKeys].sort(() => Math.random() - 0.5);
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
    // console.log(randomAnswers);
    // console.log(typeof randomAnswers);
    const selections: string[] = [];
    if (randomAnswers && answer) {
      // console.log('randomAnswers and answer good');
      selections.push(answer);
      const randomChoices = [...randomAnswers].sort(() => Math.random() - 0.5);
      while (selections.length < 4) {
        // console.log(`Logging the looper selections length at ${selections.length}`);
        const randomSelection = Math.floor(
          Math.random() * randomChoices.length
        );
        const selection = randomChoices[randomSelection];
        if (selections.includes(selection) === false) {
          // console.log("adding selection");
          selections.push(selection);
        }
      }
    }
    // console.log("selections");
    // console.log(selections);
    // const findAnswerIndex = () => {
    //   return selections.findIndex((x, i) => {
    //     return x === answer ? i : -1;
    //   });
    // };

    // setCorrectAnswer(findAnswerIndex()); // move this inside of the function.
    if(selections.length === 0) {
      return ["Something went wrong","Something went wrong","Something went wrong","Something went wrong"]
    }
    return selections.sort(() => Math.random() - 0.5);
  };

  //takes in a object
  const buildOutQuestionsWithoutSigns = (data: any) => {
    const newQuestions: QuestionData[] = [];
    const keys = Object.keys(data);
    // console.log("data so the generate random selections can be used");
    // console.log(data);
    keys.forEach((key) => {
      if (data[key]) {
        const newData: QuestionData = {
          title: key,
          imagePath: "",
          selections: generateRandomSelections(data[key].answer, keys),
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
    const keys = data.forEach((d) => d.answer);
    // console.log("data so the generate random selections can be used");
    // console.log(data);
    data.forEach((d) => {
      const newData: QuestionData = {
        selections: generateRandomSelections(d.answer, keys),
        ...d,
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
    }
    setCurrentQuestion(combinedQuestions[0]);
    setRedos(0);
    setIncorrect(0);
    setCorrect(0);
    setTotal(0);
    setIsQuestionsLoaded(true);
    // setIndex(0);
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
    // useEffect(() => {
    //   const interval = setInterval(() => {
    //     setSeconds(seconds => seconds + 1);
    //   }, 1000);
  
    //   return () => clearInterval(interval);
    // }, []);
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
  // console.log(`currentQuestion = ${currentQuestion}`);

  useEffect(() => {
    if(isUpdateExpected) {
      const questionArray = [...questions];
      setQuestions(questionArray);
      setCurrentQuestion(questionArray[0]);
      setisUpdateExpected(false);
    }
  }, [questions, setQuestions, isUpdateExpected]);
  
  return (
    <div className="App">
      <header className="App-header">
        Indiana State drivers written exam practice
      </header>
      <div>
        <button className="loadQuestionsButton" onClick={() => loadQuestions()}>
          Load questions and start studying
        </button>
        <ScoreBox
          total={total}
          incorrect={incorrect}
          correct={correct}
          redos={redos}
        />
        <Card
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
      </div>
    </div>
  );
}

export default App;
