/* eslint-disable testing-library/no-node-access */
import { render, screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
import App from "../App";

test("renders without errors", () => {
  render(<App />);
});

test("renders child components", () => {
  render(<App />);
  const docHeader = document.querySelector("header");
  expect(docHeader).toBeInTheDocument();

  const h1 = screen.getByText(/pokemon display/i);
  console.debug("h1:", h1);
  expect(h1).toBeInTheDocument();

  const bulba = screen.getByText(/bulbasaur/i);
  expect(bulba).toBeInTheDocument();
});
