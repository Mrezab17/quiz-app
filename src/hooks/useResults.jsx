import { useEffect, useState } from "react";

const useResults = ({ questions, answers }) => {
  const [isFinished, setIsFinished] = useState(false);
  const [score, setScore] = useState();

  const updateFinished = () => {
    let state = true;
    answers.forEach((element) => {
      if (element === 0) {
        state = false;
      }
    });
    return state;
  };

  const updateScore = () => {
    let score = 0;
    questions.map((question, index) => {
      if (parseInt(question.correct) == answers[index]) {
        score += 1;
      }
    });
    return score;
  };
  useEffect(() => {
    setIsFinished(updateFinished());
    setScore(updateScore());
  }, [questions, answers]);

  return { isFinished: isFinished, score: score };
};

export default useResults;
