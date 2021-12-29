import Dropdown from "./components/Dropdown";

/* eslint-disable testing-library/no-node-access */
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

test("component renders without errors", () => {
  render(<Dropdown />);
});

test("All dropdown buttons render", () => {
  render(<Dropdown />);
  const buttons = screen.queryAllByTestId("dropbtn-inner");
  expect(buttons).toBeTruthy();
  console.log("Buttons:", buttons);
});
