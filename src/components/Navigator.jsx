import { useQuery } from "react-query";
import { fetchData } from "../api/fetchData";

const Navigator = () => {
  const { data: questions, error } = useQuery({
    queryKey: ["questions"],
    queryFn: fetchData,
  });

  return (
    <div className="aspect-video w-screen h-screen bg-spiderman sm:bg-cover bg-center "></div>
  );
};

export default Navigator;
