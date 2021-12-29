import Header from "./components/Header";

/* eslint-disable testing-library/no-node-access */
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
// import userEvent from "@testing-library/user-event";

test("Renders without errors", () => {
  render(<Header />);
});

test("Renders the expect segments of the header", () => {
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
