import Dropdown from "../components/Dropdown";
import App from "../App";

/* eslint-disable testing-library/no-node-access */
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

test("[1] component renders without errors", () => {
  render(<Dropdown />);
});

test("[2] All dropdown buttons render", () => {
  render(<Dropdown />);
  const buttons = screen.queryAllByTestId("dropbtn-inner");
  expect(buttons).toBeTruthy();
  expect(buttons).toHaveLength(20);
});
