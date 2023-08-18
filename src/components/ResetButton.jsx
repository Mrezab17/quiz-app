import { useDispatch } from "react-redux";
import { resetAnswers } from "../store/answeredQuestionsSlice";

const ResetButton = () => {
  const dispatch = useDispatch();
  return (
    <div
      className="h-14 w-40 cursor-pointer text-xl  bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-primary flex flex-col items-center justify-center "
      onClick={() => {
        dispatch(resetAnswers());
      }}
    >
      شروع دوباره
    </div>
  );
};

export default ResetButton;
