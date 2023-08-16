import axios from "axios";
const baseUrl = "/questions.json";

export const fetchData = async () => {
  const response = await axios
    .get(baseUrl)
    .then((res) => {
      return res;
    })
    .catch((err) => console.log(err));

  return response;
};
