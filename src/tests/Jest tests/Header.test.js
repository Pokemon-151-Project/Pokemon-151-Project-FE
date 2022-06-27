import Header from "../../components/Header";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import renderer from "react-test-renderer";

test("[1] Component renders without errors", () => {
  render(<Header />);
});

test("[2] Renders the expected segments of the header", () => {
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

test("[3] 'Dark Mode' text changes to 'Light Mode' and vice versa when you click dark mode toggle logo", async () => {
  render(<Header />);
  const darkModeToggleLogo = screen.getByTestId("toggle_btn");

  expect(screen.queryByText(/dark mode/i)).not.toBeVisible();
  expect(screen.queryByText(/light mode/i)).toBeVisible();

  await userEvent.click(darkModeToggleLogo);

  expect(screen.queryByText(/dark mode/i)).toBeVisible();
  expect(screen.queryByText(/light mode/i)).not.toBeVisible();
});

// This has saved a snapshot of Header.js from 5.8.2022. If anything in App changes this test will fail
//Then I will either need to update the screenshot with the new changes, or fix what error made the test fail.
//If the change is intended, run jest -u in terminal to update snapshot.
test("[4] Matches snapshot so nothing changes inadvertently", () => {
  const component = renderer.create(<Header />);

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
