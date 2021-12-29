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
  expect(h1).toBeInTheDocument();
});
