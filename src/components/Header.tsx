import React from "react";
import styled from "styled-components";
import Dropdown from "./Dropdown";
import useDarkMode from "../hooks/useDarkMode";
import { BsMoon, BsSun } from "react-icons/bs";
import linksArray from "../utils/Headerutils/linksArray";
import { PokemonTypes } from "../data";

const HeaderContainer = styled.header`
	background-color: rgb(46, 37, 37);
	color: rgb(221, 203, 203);
	display: flex;
	justify-content: space-between;
	align-items: flex-end;
	padding-left: 5%;
	padding-right: 5%;

	@media screen and (max-width: 860px) {
		flex-direction: column;
		align-items: center;
	}
`;

const Title = styled.h1`
	margin-top: 0;
	font-size: 2.25rem;
	@media screen and (max-width: 860px) {
		margin-bottom: 2%;
		padding: 0;
	}
`;

const DarkModeShinyDropdown = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 80%;
	@media screen and (max-width: 860px) {
		width: 100%;
	}
`;

const DarkModeShinySection = styled.menu`
	display: flex;
	justify-content: center;
	padding: 3%;
	margin: 0;
	width: 90%;
	@media screen and (max-width: 860px) {
		padding: 1%;
		margin: 0;
	}
`;

const ModeText = styled.div`
	font-size: 1.2rem;
	font-weight: 600;
`;

const ToggleButton = styled.button`
	background-color: var(--button-bg);
	color: var(--button-text);
	cursor: pointer;
	border: none;
	border-radius: 20%;
`;

const ShinyButton = styled.button`
	background: none;
	border: none;
	color: rgba(255, 255, 255, 0.721);
	font-size: 1.2rem;
	font-weight: 600;
	text-decoration: underline;
	margin-left: 20px;
	@media screen and (max-width: 860px) {
		margin-left: 5px;
	}
`;

const VerticalLine = styled.div`
	border-left: 6px solid green;
	margin: 0% 2%;
`;

const AdamInfo = styled.section`
	text-align: center;
	@media screen and (max-width: 860px) {
		padding-top: 0;
	}
`;

const HeaderNav = styled.nav`
	display: flex;
	flex-direction: column;
	@media screen and (max-width: 860px) {
		flex-direction: row;
		justify-content: center;
		margin-bottom: 2%;
	}
`;

const HeaderLink = styled.a`
	color: rgb(221, 203, 203);
	text-decoration: underline;
	margin: 1% 0;
	@media screen and (max-width: 860px) {
		margin: 0 1%;
	}
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
			<Title>Pokemon 151 Project</Title>
			<DarkModeShinyDropdown>
				<DarkModeShinySection>
					<ModeText data-testid="logo">
						{" "}
						{isDarkMode ? "Dark Mode" : "Light Mode"}
					</ModeText>
					<ToggleButton
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
					</ToggleButton>
					<VerticalLine />
					<ShinyButton
						onClick={() => {
							setIsShiny(!isShiny);
						}}
					>
						{isShiny ? "Show Non-Shiny Forms" : "Show Shiny Forms"}
					</ShinyButton>
				</DarkModeShinySection>
				<Dropdown changeDisplay={changeDisplay} />
			</DarkModeShinyDropdown>
			<AdamInfo>
				<h2>Author: Adam Hinton</h2>
				<HeaderNav>
					{linksArray.map((link, index) => (
						<HeaderLink key={index} href={link.href}>
							{link.text}
						</HeaderLink>
					))}
				</HeaderNav>
			</AdamInfo>
		</HeaderContainer>
	);
};

export default Header;
