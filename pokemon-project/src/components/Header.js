import React from "react";
import Dropdown from "./Dropdown";
import useDarkMode from "../hooks/useDarkMode";
//importing darkmode toggle icons
import { BsMoon, BsSun } from "react-icons/bs";

// The header nav has four different links and this function helps generate them more DRYly
const linkMaker = (text, href) => {
  return (
    <a target="_blank" rel="noreferrer" href={href}>
      {text}
    </a>
  );
};

const Header = (props) => {
  const [isDarkMode, setDarkMode] = useDarkMode();

  //ChangeDisplay() changes which pokemon are displayed based on the button the user pressses.
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
                // This shows a different icon based on whether the user has enabled dark mode
                <BsSun color="#ff0" size="24" title="Switch to light mode" />
              ) : (
                <BsMoon size="24" title="Switch to dark mode" />
              )}
            </button>
          </div>

          {/* This is a vertical line to go between the darkMode toggle and the shiny toggle.*/}
          <div class className="vertical-line" />

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
        <Dropdown changeDisplay={changeDisplay} />
      </section>

      {/* section for info about me and relevant links*/}
      <section className="adam-info header-item">
        <h2>Author: Adam Hinton</h2>
        <nav className="header-nav">
          {/* linkMaker is a function defined above that generates these four links. Opens links in new tab */}
          {linkMaker("Source", "https://github.com/adamhinton/pokemon-project")}

          {linkMaker("Bulbapedia", "https://bulbapedia.bulbagarden.net")}

          {linkMaker("PokeAPI", "https://pokeapi.co")}

          {linkMaker(
            "Shinies",
            "https://bulbapedia.bulbagarden.net/wiki/Shiny_Pok%C3%A9mon"
          )}
        </nav>
      </section>
    </header>
  );
};

export default Header;
