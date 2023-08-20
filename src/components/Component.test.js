import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Results from "./Results";

test("Shows the Quiz Result with an Animation", async () => {
  render(<Results score={10}></Results>);
  const linkElement = screen.getByText(/متاسفانه شما 10 درصد مارول فن هستید/i);
  expect(linkElement).toBeInTheDocument();
});
