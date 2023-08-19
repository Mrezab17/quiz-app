import { Slide } from "react-awesome-reveal";
const Results = (props) => {
  return (
    <Slide className="h-14 w-10/12 sm:w-7/12 cursor-pointer text-center text-white text-base sm:text-xl   bg-blue-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-blue-800 flex flex-col items-center justify-center ">
      <div>
        {`${props.score > 4 ? "تبریک میگم" : "متاسفانه"} شما ${
          props.score * 10
        } درصد مارول فن هستید`}
      </div>
    </Slide>
  );
};

export default Results;
