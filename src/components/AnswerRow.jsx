import { useEffect, useState } from "react";

const AnswerRow = (props) => {
  const [disabled, setDisabled] = useState(props.disabled);
  const [isCorrect, setIsCorrect] = useState(props.isCorrect);
  const [isSelected, setIsSelected] = useState(props.isSelected);

  useEffect(() => {
    setIsCorrect(props.isCorrect);
    setIsSelected(props.isSelected);
    setDisabled(props.disabled);
  }, [props]);
  return (
    <div
      data-testid="answer-element"
      className={`flex flex-row  h-10 w-full rounded-sm items-center bg-black text-white  px-2 ${
        disabled
          ? ""
          : "hover:bg-gray-100 hover:text-black transition-all duration-500 cursor-pointer"
      }
      ${isCorrect && disabled ? "bg-green-600" : ""}
      ${!isCorrect && isSelected ? "bg-red-600" : ""}
      `}
      onClick={disabled ? () => {} : props.onAnswer}
    >
      {props.children}
    </div>
  );
};

export default AnswerRow;
