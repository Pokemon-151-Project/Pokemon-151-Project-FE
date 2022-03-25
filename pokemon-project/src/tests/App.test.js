/* eslint-disable testing-library/no-node-access */
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";

//I've ensured these tests are falsifiable by altering variables and expects

test("Sanity Check", () => {
  const twoPlusTwo = 2 + 2;
  expect(twoPlusTwo).toStrictEqual(4);
  expect(twoPlusTwo).not.toStrictEqual(5);
});

test("renders without errors", () => {
  render(<App />);
});

test("renders child components", () => {
  render(<App />);
  const docHeader = document.querySelector("header");
  expect(docHeader).toBeInTheDocument();

  const h1 = screen.getByText(/pokemon 151 project/i);
  console.debug("h1:", h1);
  expect(h1).toBeInTheDocument();

  const bulba = screen.getByText(/bulbasaur/i);
  expect(bulba).toBeInTheDocument();
});

test("Toggles Dark Mode", () => {
  //Verifies that hitting darkmode toggle will add "dark" class to each pokemon card

  render(<App />);
  let cardOne = document.querySelector(".pokemon-card");
  expect(cardOne).not.toHaveClass("dark");

  const darkBtn = screen.getByTestId("toggle_btn");
  userEvent.click(darkBtn);
  expect(cardOne).toHaveClass("dark");
});
