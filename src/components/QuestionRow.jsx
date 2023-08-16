const QuestionRow = (props) => {
  return (
    <div className={`flex flex-row  h-20 w-full text-white items-center px-2`}>
      {props.children}
    </div>
  );
};

export default QuestionRow;
