import { useNavigate, useParams, Link } from "react-router-dom";
import QuestionRow from "../components/QuestionRow";
import AnswerRow from "../components/AnswerRow";
import NavigationRow from "../components/NavigationRow";

const Question = (props) => {
  const { id } = useParams();
  const currentQuestion = props.questions[id - 1];
  const question = currentQuestion.question;

  const answers = currentQuestion.options;
  console.log(currentQuestion.imageUrl);
  //const navigate = useNavigate();

  return (
    <div
      className={`aspect-video w-screen h-screen bg-black sm:bg-cover bg-center flex items-center justify-center`}
    >
      <div className="h-1/2 w-3/4 bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-primary flex flex-col px-3 space-y-2.5 pt-2">
        <QuestionRow>{question}</QuestionRow>
        {answers.map((answer, index) => (
          <AnswerRow key={id * 4 + index}>{answer}</AnswerRow>
        ))}
        <NavigationRow />
      </div>
    </div>
  );
};

export default Question;
