/* eslint-disable testing-library/no-node-access */
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

test("renders title", () => {
  render(<App />);
  const linkElement = screen.getByText(/Pokemon Display/i);
  expect(linkElement).toBeInTheDocument();

  const docHeader = document.querySelector("header");
  expect(docHeader).toBeInTheDocument();

  const h1 = screen.getByText(/pokemon display/i);
  console.debug("h1:", h1);
  expect(h1).toBeInTheDocument();
});
