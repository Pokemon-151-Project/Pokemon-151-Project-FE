import Dropdown from "../components/Dropdown";
import renderer from "react-test-renderer";
import React from "react";
import { ChangeDisplayFn } from "../components/Dropdown";

/* eslint-disable testing-library/no-node-access */
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

test("[1] component renders without errors", () => {
	const mockChangeDisplay: ChangeDisplayFn = jest.fn();
	render(<Dropdown changeDisplay={mockChangeDisplay} />);
});

test("[2] All dropdown buttons render", () => {
	const mockChangeDisplay: ChangeDisplayFn = jest.fn();
	render(<Dropdown changeDisplay={mockChangeDisplay} />);
	const buttons = screen.queryAllByTestId("dropbtn-inner");
	expect(buttons).toBeTruthy();
	expect(buttons).toHaveLength(19);
});

test("[3] Matches snapshot from 5.8.22", () => {
	const mockChangeDisplay: ChangeDisplayFn = jest.fn();
	const component = renderer.create(
		<Dropdown changeDisplay={mockChangeDisplay} />
	);

	let tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});
