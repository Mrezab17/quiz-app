import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { useQuery } from "react-query";
import { fetchData } from "../api/fetchData";

import Question from "../pages/Question";

const Navigator = () => {
  const {
    data: questions,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["questions"],
    queryFn: fetchData,
  });

  return (
    !isLoading && (
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/"
            element={<Navigate to="/question/1" replace />}
          />
          <Route
            exact
            path="/question/:id"
            element={<Question questions={questions} />}
          />
          <Route path="/*" element={<Navigate to="/question/1" replace />} />
        </Routes>
      </BrowserRouter>
    )
  );
};

export default Navigator;
