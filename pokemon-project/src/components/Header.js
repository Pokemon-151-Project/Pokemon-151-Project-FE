// Contains page title, author's name, helpful links, and dropdown for user display options
import React from "react";
import Dropdown from "./Dropdown";
import useDarkMode from "../hooks/useDarkMode";
//darkmode toggle icons
import { BsMoon, BsSun } from "react-icons/bs";

// Will map over this to produce header nav links. Update this to add/change/remove links
const linksArray = [
  {
    text: "Source",
    href: "https://github.com/adamhinton/pokemon-project",
  },
  {
    text: "Bulbapedia",
    href: "https://bulbapedia.bulbagarden.net",
  },
  {
    text: "PokeAPI",
    href: "https://pokeapi.co",
  },
  {
    text: "Shinies",
    href: "https://bulbapedia.bulbagarden.net/wiki/Shiny_Pok%C3%A9mon",
  },
];

// Generates links more DRYly
const linkMaker = (linksArray) => {
  return linksArray.map((item) => {
    const { href, text } = item;
    return (
      <a target="_blank" rel="noreferrer" href={href} key={text}>
        {text}
      </a>
    );
  });
};

const Header = (props) => {
  const [isDarkMode, setDarkMode] = useDarkMode();

  const { changeDisplay, isShiny, setIsShiny } = props;
  return (
    <header>
      <h1 className="header-item header-h1">Pokemon Display</h1>

      {/* Begin display options dropdown. See Dropdown.js */}
      <section className="darkmode-shiny-dropdown">
        <div className="darkmode-shiny-section">
          <div className="darkmode-section">
            <div className="logo">Dark Mode</div>
            <button
              className="toggle_btn"
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
          </div>

          <div className="vertical-line" />

          {/* This button toggles whether the app shows the Shiny forms of the pokemon */}
          <div className="shiny-button-div">
            <button
              className="shiny-button"
              onClick={() => {
                setIsShiny(!isShiny);
              }}
            >
              {isShiny ? "Show Non-Shiny Forms" : "Show Shiny Forms"}
            </button>
          </div>
        </div>

        {/* The dropdown section lives here */}
        <Dropdown changeDisplay={changeDisplay} />
      </section>

      <section className="adam-info header-item">
        <h2>Author: Adam Hinton</h2>

        {/* This produces header links. Update linksArray (defined above) to add/change/remove links*/}
        <nav className="header-nav">{linkMaker(linksArray)}</nav>
      </section>
    </header>
  );
};

export default Header;
