import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import "@testing-library/jest-dom";
import "intersection-observer";
import Results from "../Results";

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
