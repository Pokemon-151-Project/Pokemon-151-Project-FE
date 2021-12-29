import Dropdown from "./components/Dropdown";

/* eslint-disable testing-library/no-node-access */
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

test("component renders without errors", () => {
  render(<Dropdown />);
});

test("All 19 buttons render properly", () => {
  const btns = document.getElementsByClassName("dropbtn-inner");
  expect(btns).toBeInTheDocument();
});
