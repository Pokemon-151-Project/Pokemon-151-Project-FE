import React from "react";

//This is the dropdown menu contained within Header
import Dropdown from "./Dropdown";

import useDarkMode from "../hooks/useDarkMode";

import { BsMoon, BsSun } from "react-icons/bs";

const Header = (props) => {
  const [isDarkMode, setDarkMode] = useDarkMode();

  //ChangeDisplay() is the function that changes which pokemon are displayed based on the button the user pressses. It's the brain of the application.
  const { changeDisplay, setIsShiny, isShiny } = props;
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
          <a
            href="https://github.com/adamhinton/pokemon-project"
            target="_blank"
            rel="noreferrer"
          >
            Source
          </a>

          <a
            href="https://bulbapedia.bulbagarden.net"
            target="_blank"
            rel="noreferrer"
          >
            Bulbapedia
          </a>

          <a href="https://pokeapi.co" target="_blank" rel="noreferrer">
            PokeAPI
          </a>

          <a
            href="https://bulbapedia.bulbagarden.net/wiki/Shiny_Pok%C3%A9mon"
            target="_blank"
            rel="noreferrer"
          >
            Shinies
          </a>
        </nav>
      </section>
    </header>
  );
};

export default Header;
