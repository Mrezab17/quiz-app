import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import "@testing-library/jest-dom";
import "intersection-observer";
import Results from "../Results";
import ResetButton from "../ResetButton";

import { Provider } from "react-redux";
import store from "../../store/store";
import { persistor } from "../../store/store";
import { PersistGate } from "redux-persist/integration/react";

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
    userEvent.click(buttonElement);

    const expectedAnswers = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0].toString();
    const currentAnswers = store.getState().answeredQuestions.items.toString();
    expect(currentAnswers).toBe(expectedAnswers);
  });
});
