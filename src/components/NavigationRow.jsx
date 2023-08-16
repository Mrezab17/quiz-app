const AnswerRow = (props) => {
  return (
    <div
      className={`flex flex-row  h-8 w-full rounded-sm text-black items-center justify-center mt-3 `}
    >
      <div className="flex items-center justify-center bg-blue-300 w-1/4 h-full hover:bg-blue-700 hover:text-white transition-all duration-500 cursor-pointer mr-2">
        سوال قبل
      </div>
      <div className="flex items-center justify-center bg-blue-300 w-1/4 h-full hover:bg-blue-700 hover:text-white transition-all duration-500 cursor-pointer">
        سوال بعدی
      </div>
    </div>
  );
};

export default AnswerRow;
