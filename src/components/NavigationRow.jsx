import { useNavigate } from "react-router-dom";

const AnswerRow = (props) => {
  const currentPage = props.currentPage;
  const navigate = useNavigate();
  const prevHandler = () => {
    if (currentPage != 1) {
      navigate(`/question/${parseInt(currentPage) - 1}`);
    }
  };
  const nextHandler = () => {
    if (currentPage != 10) {
      navigate(`/question/${parseInt(currentPage) + 1}`);
    }
  };
  return (
    <div
      className={`flex flex-row  h-8 w-full rounded-sm text-black items-center justify-center `}
    >
      <div
        onClick={prevHandler}
        className="flex items-center justify-center bg-blue-300 w-1/4 h-full hover:bg-blue-700 hover:text-white transition-all duration-500 cursor-pointer mr-2"
      >
        سوال قبل
      </div>
      <div
        onClick={nextHandler}
        className="flex items-center justify-center bg-blue-300 w-1/4 h-full hover:bg-blue-700 hover:text-white transition-all duration-500 cursor-pointer"
      >
        سوال بعدی
      </div>
    </div>
  );
};

export default AnswerRow;
