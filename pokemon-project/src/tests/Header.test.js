import Header from "../components/Header";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

test("Component renders without errors", () => {
  render(<Header />);
});

test("Renders the expected segments of the header", () => {
  render(<Header />);
  const h1 = screen.queryByText(/pokemon 151 project/i);
  const author = screen.queryByText(/author: adam hinton/i);
  const source = screen.queryByText(/author/i);
  const dropbtn = screen.queryByText(/display options/i);

  expect(author).toBeInTheDocument();
  expect(h1).toBeInTheDocument();
  expect(source).toBeInTheDocument();
  expect(dropbtn).toBeVisible();
});

//I tried to test that the dropdown only appears when you click on the Display Options button, but the testing said the dropdown was always visible no matter what. I tried document.queryselector, screen.getByTestID, and others. Not sure what I was doing wrong.

test("'Dark Mode' text changes to 'Light Mode' and vice versa when you click dark mode toggle logo", () => {});
