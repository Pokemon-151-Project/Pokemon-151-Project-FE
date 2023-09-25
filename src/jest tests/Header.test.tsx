import Header from "../components/Header";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import renderer from "react-test-renderer";
import React from "react";

const mockChangeDisplay = jest.fn();
const mockSetIsShiny = jest.fn();
const mockToggleTheme = jest.fn(); // Add this line

test("[1] Component renders without errors", () => {
	render(
		<Header
			changeDisplay={mockChangeDisplay}
			isShiny={false}
			setIsShiny={mockSetIsShiny}
			toggleTheme={mockToggleTheme}
			isDarkMode={true}
		/>
	);
});

test("[2] Renders the expected segments of the header", () => {
	render(
		<Header
			changeDisplay={mockChangeDisplay}
			isShiny={false}
			setIsShiny={mockSetIsShiny}
			toggleTheme={mockToggleTheme}
			isDarkMode={true}
		/>
	);
	const h1 = screen.queryByText(/pokemon 151 project/i);
	const author = screen.queryByText(/author: adam hinton/i);
	const source = screen.queryByText(/author/i);
	const dropbtn = screen.queryByText(/display options/i);

	expect(author).toBeInTheDocument();
	expect(h1).toBeInTheDocument();
	expect(source).toBeInTheDocument();
	expect(dropbtn).toBeVisible();
});

test("[3] 'Dark Mode' text changes to 'Light Mode' and vice versa when you click dark mode toggle logo", async () => {
	render(
		<Header
			changeDisplay={mockChangeDisplay}
			isShiny={false}
			setIsShiny={mockSetIsShiny}
			toggleTheme={mockToggleTheme}
			isDarkMode={true}
		/>
	);
	const darkModeToggleLogo = screen.getByTestId("toggle_btn");

	expect(screen.queryByText(/dark mode/i)).not.toBeVisible();
	expect(screen.queryByText(/light mode/i)).toBeVisible();

	await userEvent.click(darkModeToggleLogo);

	expect(screen.queryByText(/dark mode/i)).toBeVisible();
	expect(screen.queryByText(/light mode/i)).not.toBeVisible();
});

test("[4] Matches snapshot so nothing changes inadvertently", () => {
	const component = renderer.create(
		<Header
			changeDisplay={mockChangeDisplay}
			isShiny={false}
			setIsShiny={mockSetIsShiny}
			toggleTheme={mockToggleTheme}
			isDarkMode={true}
		/>
	);

	let tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});
