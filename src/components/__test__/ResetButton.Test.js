import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import "intersection-observer";
import ResetButton from "../ResetButton";

describe("ResetButton Visibility and Functionality ", () => {
  test("ResetButton Visibility", () => {
    render(<ResetButton />);

    const buttonElement = screen.getByText(/شروع دوباره/i);
    expect(buttonElement).toBeInTheDocument();
  });
  test("ResetButton Functionality", () => {
    render(<ResetButton />);

    const buttonElement = screen.getByText(/شروع دوباره/i);
    expect(buttonElement).toBeInTheDocument();
  });
});
