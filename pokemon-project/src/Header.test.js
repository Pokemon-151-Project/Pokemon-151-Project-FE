import Header from "./components/Header";

/* eslint-disable testing-library/no-node-access */
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
//test line: blah blah blah (delete this later)

test("Component renders without errors", () => {
  render(<Header />);
});

test("Renders the expected segments of the header", () => {
  render(<Header />);
  const h1 = screen.queryByText(/pokemon display/i);
  const author = screen.queryByText(/author: adam hinton/i);
  const source = screen.queryByText(/author/i);
  const dropbtn = screen.queryByText(/display options/i);

  expect(author).toBeInTheDocument();
  expect(h1).toBeInTheDocument();
  expect(source).toBeInTheDocument();
  expect(dropbtn).toBeVisible();
});

test("dropdown only appears when you click dropdown button", () => {
  render(<Header />);
  //This test renders the dropdown content by clicking on the dropdown button, then make sure the appropriate content shows up.

  const dropbtn = screen.queryByText(/display options/i);
  expect(dropbtn).toBeInTheDocument();

  userEvent.click(dropbtn);

  const dropdownContent = screen.queryByText(/pick a type/i);
  expect(dropdownContent).toBeInTheDocument();
});
