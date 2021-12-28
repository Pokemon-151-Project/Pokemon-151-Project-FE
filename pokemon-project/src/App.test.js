import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

test("renders title", () => {
  render(<App />);
  const linkElement = screen.getByText(/Pokemon Display/i);

  const header = document.querySelector("header");

  expect(linkElement).toBeInTheDocument();
});
