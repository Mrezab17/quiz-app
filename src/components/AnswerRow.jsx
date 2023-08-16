const AnswerRow = (props) => {
  return (
    <div
      className={`flex flex-row bg-black h-10 w-full rounded-sm text-white items-center px-2 hover:bg-gray-100 hover:text-black transition-all duration-500 cursor-pointer`}
    >
      {props.children}
    </div>
  );
};

export default AnswerRow;
