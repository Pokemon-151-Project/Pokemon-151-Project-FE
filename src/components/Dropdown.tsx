import React from "react";
import styled from "styled-components";
import { PokemonTypes } from "../data";
import typesArray from "../utils/Dropdownutils/typesArray";

export type ChangeDisplayFn = (
	type?: PokemonTypes | null,
	weight?: string | null,
	height?: string | null,
	reset?: string
) => void;

type Props = {
	changeDisplay: ChangeDisplayFn;
};

const DropdownMenu = styled.menu`
	display: none;
	position: absolute;
	background-color: #f1f1f1;
	min-width: 160px;
	box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
	z-index: 1;
	padding: 0;
	margin: 0;
`;

const DropdownSection = styled.section`
	position: relative;
	display: inline-block;

	&:hover ${DropdownMenu} {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		background-color: #90dcd8;
	}
`;

const DropdownButton = styled.button`
	width: 270px;
	font-family: "Arima Madurai", cursive;
	background-color: #5ccbc5;
	color: black;
	font-size: 1rem;
	border: none;
	padding: 0.65rem;
	border-radius: 30px;
	margin-top: 15%;
	margin-bottom: 4%;

	@media screen and (max-width: 860px) {
		margin-top: 4%;
	}
`;

const DropdownInnerButton = styled.button`
	margin: 1%;
	border: none;
	background-color: rgb(153, 181, 197);
	color: rgb(35, 40, 15);
	padding: 0.25rem;
	flex: 1 1 calc(20% - 2%);
`;

const DropdownTitle = styled.h5`
	color: black;
	margin: 1%;
	flex-basis: 100%;
`;

const Dropdown: React.FC<Props> = ({ changeDisplay }) => {
	return (
		<DropdownSection>
			<DropdownButton data-testid="dropbtn">Display Options</DropdownButton>
			<DropdownMenu className="dropdown-content">
				<div>
					<DropdownInnerButton
						data-testid="reset-btn"
						id="reset-btn"
						onClick={() => {
							changeDisplay(null, null, null, "reset");
						}}
					>
						Reset All
					</DropdownInnerButton>
					<DropdownTitle data-testid="dropdown-display-title">
						Pick a type:
					</DropdownTitle>
					{typesArray.map((item) => {
						return (
							<DropdownInnerButton
								data-testid="dropbtn-inner"
								id={`${item.toLowerCase()}-btn`}
								key={item}
								onClick={() => {
									changeDisplay(item);
								}}
							>
								{item}
							</DropdownInnerButton>
						);
					})}
				</div>
				<div>
					<DropdownTitle>Pick a weight:</DropdownTitle>
					<DropdownInnerButton
						data-testid="dropbtn-inner"
						id="small-btn"
						onClick={() => {
							changeDisplay(null, "small");
						}}
					>
						Small
					</DropdownInnerButton>
					<DropdownInnerButton
						data-testid="dropbtn-inner"
						id="big-btn"
						onClick={() => {
							changeDisplay(null, "big");
						}}
					>
						Big
					</DropdownInnerButton>
				</div>
				<div>
					<DropdownTitle>Pick a height:</DropdownTitle>
					<DropdownInnerButton
						data-testid="dropbtn-inner"
						id="short-btn"
						onClick={() => {
							changeDisplay(null, null, "short");
						}}
					>
						Short
					</DropdownInnerButton>
					<DropdownInnerButton
						data-testid="dropbtn-inner"
						id="tall-btn"
						onClick={() => {
							changeDisplay(null, null, "tall");
						}}
					>
						Tall
					</DropdownInnerButton>
				</div>
			</DropdownMenu>
		</DropdownSection>
	);
};

export default Dropdown;
