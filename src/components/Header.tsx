import React from "react";
import styled from "styled-components";
import Dropdown from "./Dropdown";
import useDarkMode from "../hooks/useDarkMode";
import { BsMoon, BsSun } from "react-icons/bs";
import linksArray from "../utils/Headerutils/linksArray";
import linkMaker from "../utils/Headerutils/linkMaker";
import { PokemonTypes } from "../data";

const HeaderContainer = styled.header`
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: #f2f2f2;
`;

const DarkModeSection = styled.div`
	display: flex;
	align-items: center;
`;

const ShinyButtonDiv = styled.div`
	margin-left: 20px;
`;

const ShinyButton = styled.button`
	background-color: #4caf50;
	color: white;
	padding: 14px 20px;
	margin: 8px 0;
	border: none;
	cursor: pointer;
	width: 100%;
`;

const AdamInfo = styled.section`
	text-align: center;
`;

interface Props {
	changeDisplay: (
		type?: PokemonTypes | null,
		size?: string | null,
		height?: string | null,
		reset?: string | null
	) => void;
	setIsShiny: React.Dispatch<React.SetStateAction<boolean>>;
	isShiny: boolean;
	toggleTheme: () => void;
}

const Header: React.FC<Props> = ({
	changeDisplay,
	setIsShiny,
	isShiny,
	toggleTheme,
}) => {
	const [isDarkMode, setDarkMode] = useDarkMode();

	return (
		<HeaderContainer>
			<h1>Pokemon 151 Project</h1>
			<section>
				<menu>
					<DarkModeSection>
						<div data-testid="logo">
							{isDarkMode ? "Dark Mode" : "Light Mode"}
						</div>
						<button
							data-testid="toggle_btn"
							onClick={() => {
								setDarkMode(!isDarkMode);
							}}
						>
							{isDarkMode ? (
								<BsSun color="#ff0" size="24" title="Switch to light mode" />
							) : (
								<BsMoon size="24" title="Switch to dark mode" />
							)}
						</button>
					</DarkModeSection>
					<ShinyButtonDiv>
						<ShinyButton
							onClick={() => {
								setIsShiny(!isShiny);
							}}
						>
							{isShiny ? "Show Non-Shiny Forms" : "Show Shiny Forms"}
						</ShinyButton>
					</ShinyButtonDiv>
				</menu>
				<Dropdown changeDisplay={changeDisplay} />
			</section>
			<AdamInfo>
				<h2>Author: Adam Hinton</h2>
				<nav>{linkMaker(linksArray)}</nav>
			</AdamInfo>
		</HeaderContainer>
	);
};

export default Header;
