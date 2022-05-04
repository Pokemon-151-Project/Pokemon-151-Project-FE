/* eslint-disable testing-library/no-node-access */
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";
test("Sanity Check", () => {
  const twoPlusTwo = 2 + 2;
  expect(twoPlusTwo).toStrictEqual(4);
  expect(twoPlusTwo).not.toStrictEqual(5);
});

test("[1] renders without errors", () => {
  render(<App />);
});

test("[2] renders child components", () => {
  render(<App />);
  const docHeader = document.querySelector("header");
  expect(docHeader).toBeInTheDocument();

  const h1 = screen.getByText(/pokemon 151 project/i);
  expect(h1).toBeInTheDocument();

  const bulba = screen.getByText(/bulbasaur/i);
  expect(bulba).toBeInTheDocument();
});

test("[3] Toggles Dark Mode", async () => {
  //Verifies that hitting darkmode toggle will add "dark" class to each pokemon card

  render(<App />);
  let cardOne = document.querySelector(".pokemon-card");
  expect(cardOne).not.toHaveClass("dark");

  const darkBtn = screen.getByTestId("toggle_btn");
  await userEvent.click(darkBtn);
  expect(cardOne).toHaveClass("dark");
});
