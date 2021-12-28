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

  const dropdown = document.getElementsByClassName("dropdown");
  userEvent.click(dropdown);
});
