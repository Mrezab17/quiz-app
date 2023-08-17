import { useParams } from "react-router-dom";
import QuestionRow from "../components/QuestionRow";
import AnswerRow from "../components/AnswerRow";
import NavigationRow from "../components/NavigationRow";

const Question = (props) => {
  const { id } = useParams();
  const currentQuestion = props.questions[id - 1];
  const question = currentQuestion.question;
  const options = currentQuestion.options;
  const picName = currentQuestion.picName;
  return (
    <div
      className={`aspect-video w-screen h-screen bg-[url('../assets/ironman.jpg')] bg-cover sm:bg-cover bg-right flex items-center justify-center`}
    >
      <div className="h-1/2 w-7/12 bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-primary flex flex-col px-3 space-y-2.5 pt-2">
        <QuestionRow>{question}</QuestionRow>
        {options.map((option, index) => (
          <AnswerRow key={id * 4 + index}>{option}</AnswerRow>
        ))}
        <NavigationRow currentPage={id} />
      </div>
    </div>
  );
};

export default Question;
