import React from "react";

import Dropdown from "./Dropdown";

import useDarkMode from "../hooks/useDarkMode";
import { BsMoon, BsSun } from "react-icons/bs";

const Header = (props) => {
  const [isDarkMode, setDarkMode] = useDarkMode();
  const { changeDisplay } = props;
  return (
    <header>
      <section className="h1-darkmode">
        <h1 className="header-item">Pokemon Display</h1>
        <div className="logo">Dark Mode</div>
        <button
          className="toggle_btn"
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
      </section>

      {/* Begin display options dropdown. See Dropdown.js */}
      <Dropdown changeDisplay={changeDisplay} />

      {/* section for info about me */}
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
        </nav>
      </section>
    </header>
  );
};

export default Header;
