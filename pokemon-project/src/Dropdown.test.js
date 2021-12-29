import Dropdown from "./components/Dropdown";

/* eslint-disable testing-library/no-node-access */
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

test("component renders without errors", () => {
  render(<Dropdown />);
});

test("All 19 buttons render properly", () => {
  const btns = document.getElementsByClassName("dropbtn-inner");
  expect(btns).toBeInTheDocument();
});
