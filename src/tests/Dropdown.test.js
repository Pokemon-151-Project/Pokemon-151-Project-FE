import Dropdown from "../components/Dropdown";
import renderer from "react-test-renderer";

/* eslint-disable testing-library/no-node-access */
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

test("[1] component renders without errors", () => {
  render(<Dropdown />);
});

test("[2] All dropdown buttons render", () => {
  render(<Dropdown />);
  const buttons = screen.queryAllByTestId("dropbtn-inner");
  expect(buttons).toBeTruthy();
  expect(buttons).toHaveLength(19);
});

test("[3] Matches snapshot from 5.8.22", () => {
  const component = renderer.create(<Dropdown />);

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
