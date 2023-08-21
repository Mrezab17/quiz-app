const QuestionRow = (props) => {
  return (
    <div className={`flex flex-row h-16  px-2`}>
      <div className="h-full w-10/12 text-white items-center">
        {props.children}
      </div>
      <div
        className={`text-left w-2/12 text-blue-500  `}
      >{`       ${props.number}/10`}</div>
    </div>
  );
};

export default QuestionRow;
