import { createSlice } from "@reduxjs/toolkit";

const answeredQuestionsSlice = createSlice({
  name: "answeredQuestions",
  initialState: {
    items: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  },
  reducers: {
    setAnswer(state, action) {
      state.items = state.items.map((item, index) => {
        if (index == action.payload.number) {
          return action.payload.answer;
        } else {
          return item;
        }
      });
    },
    resetAnswers(state) {
      state.items = state.items.map((item) => {
        return 0;
      });
    },
  },
});

export const { setAnswer, resetAnswers } = answeredQuestionsSlice.actions;

export default answeredQuestionsSlice.reducer;
