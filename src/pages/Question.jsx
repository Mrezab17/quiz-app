import { useParams } from "react-router-dom";

import QuestionRow from "../components/QuestionRow";
import AnswerRow from "../components/AnswerRow";
import NavigationRow from "../components/NavigationRow";
import ResetButton from "../components/ResetButton";

import { useDispatch, useSelector } from "react-redux";
import { setAnswer } from "../store/answeredQuestionsSlice";
import { useEffect, useState } from "react";

const Question = (props) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const currentAnswer = useSelector(
    (state) => state.answeredQuestions.items[id - 1]
  );

  const currentQuestion = props.questions[id - 1];
  const currentCorrect = currentQuestion.correct;
  const currentBg = currentQuestion.picName;
  const question = currentQuestion.question;
  const options = currentQuestion.options;
  const [imageStyle, setImageStyle] = useState(
    "bg-[url('../assets/" + currentBg + "')]"
  );

  useEffect(() => {
    setImageStyle("bg-[url('../assets/" + currentBg + "')]");
  }, [currentBg]);

  return (
    <div
      className={`aspect-video w-screen h-screen bg-[url('../assets/ironman.jpg')] bg-cover sm:bg-cover bg-right flex flex-col space-y-5 items-center justify-center`}
    >
      <div className="h-2/3 sm:h-1/2 w-9/12 sm:w-7/12 bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-primary flex flex-col px-3 space-y-3 pt-2">
        <QuestionRow>{question}</QuestionRow>
        {options.map((option, index) => (
          <AnswerRow
            onAnswer={() => {
              dispatch(setAnswer({ number: id - 1, answer: index + 1 }));
            }}
            key={id * 4 + index}
            disabled={parseInt(currentAnswer) !== 0}
            isSelected={parseInt(currentAnswer) === index + 1}
            isCorrect={parseInt(currentCorrect) === index + 1}
          >
            {option}
          </AnswerRow>
        ))}
        <NavigationRow currentPage={id} />
      </div>
      <ResetButton />
    </div>
  );
};

export default Question;
