import { fireEvent, mount, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import "@testing-library/jest-dom";
import "intersection-observer";
import { expect, jest, test } from "@jest/globals";
import Results from "../Results";
import ResetButton from "../ResetButton";
import NavigationRow from "../NavigationRow";
import QuestionRow from "../QuestionRow";
import AnswerRow from "../AnswerRow";

import { Provider } from "react-redux";
import store from "../../store/store";
import { persistor } from "../../store/store";
import { PersistGate } from "redux-persist/integration/react";

import { BrowserRouter } from "react-router-dom";

describe("Results Monitor ", () => {
  test("Bad Results", () => {
    render(<Results score={4}></Results>);
    const showElement = screen.getByText(
      /متاسفانه شما 40 درصد مارول فن هستید/i
    );
    expect(showElement).toBeInTheDocument();
  });
  test("Goods Results", () => {
    render(<Results score={5}></Results>);
    const showElement = screen.getByText(
      /تبریک میگم شما 50 درصد مارول فن هستید/i
    );
    expect(showElement).toBeInTheDocument();
  });
});

describe("ResetButton Visibility and Functionality ", () => {
  test("ResetButton Visibility", () => {
    render(
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ResetButton />
        </PersistGate>
      </Provider>
    );

    const buttonElement = screen.getByText("شروع دوباره");

    expect(buttonElement).toBeInTheDocument();
  });
  test("ResetButton Functionality", () => {
    render(
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ResetButton />
        </PersistGate>
      </Provider>
    );

    const buttonElement = screen.getByText(/شروع دوباره/i);
    userEvent.hover(buttonElement);

    const expectedAnswers = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0].toString();
    const currentAnswers = store.getState().answeredQuestions.items.toString();
    expect(currentAnswers).toBe(expectedAnswers);
  });
});

describe("Navigation Buttons Visibility and Functionality ", () => {
  test("Next Button Visibility", () => {
    render(<NavigationRow />, { wrapper: BrowserRouter });
    const buttonElement = screen.getByText(/سوال بعدی/i);
    expect(buttonElement).toBeInTheDocument();
  });
  test("Prev Button Visibility", () => {
    render(<NavigationRow />, { wrapper: BrowserRouter });
    const buttonElement = screen.getByText(/سوال قبل/i);
    expect(buttonElement).toBeInTheDocument();
  });
});

describe("QuestionRow ", () => {
  test("Showing Question :", () => {
    const question = "سپر کاپیتان آمریکا از چه ساخته شده است؟";
    render(<QuestionRow>{question}</QuestionRow>);
    const showElement = screen.getByText(question);
    expect(showElement).toBeInTheDocument();
  });
  test("Question Page Number ", () => {
    const number = 3;
    render(<QuestionRow number={3}>{}</QuestionRow>);
    const showElement = screen.getByText(number + "/10");
    expect(showElement).toBeInTheDocument();
  });
});

describe("AnswerRow ", () => {
  test("Unselected Answer is Black", () => {
    const { container } = render(<AnswerRow isSelected={false} />);
    const answerElement = container.getElementsByClassName("bg-black");

    expect(answerElement.length).toBe(1);
  });
  test("Selected Wrong Answer is Red", () => {
    const { container } = render(
      <AnswerRow isSelected={true} isCorrect={false} />
    );
    const answerElement = container.getElementsByClassName("bg-red-600");

    expect(answerElement.length).toBe(1);
  });
  test("Correct Answer is Green", () => {
    const { container } = render(
      <AnswerRow disabled={true} isCorrect={true} />
    );
    const answerElement = container.getElementsByClassName("bg-green-600");

    expect(answerElement.length).toBe(1);
  });
  test("Disabled Answer Cant be Hovered", () => {
    const { container } = render(<AnswerRow disabled={true} />);
    const answerElement = container.getElementsByClassName("hover:bg-gray-100");
    expect(answerElement.length).toBe(0);
  });
  test("Not Disabled Answer Can be Hovered", () => {
    const { container } = render(<AnswerRow disabled={false} />);
    const answerElement = container.getElementsByClassName("hover:bg-gray-100");
    expect(answerElement.length).toBe(1);
  });
  test("Disabled Answer Cant be Hovered", () => {
    const { container } = render(<AnswerRow disabled={true} />);
    const answerElement = container.getElementsByClassName("hover:bg-gray-100");
    expect(answerElement.length).toBe(0);
  });
});
