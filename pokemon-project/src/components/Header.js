import React from "react";

import Dropdown from "./Dropdown";

//I'd like to style this better. Maybe put h1 on the left, display options in middle, then my info and links on the right.
const Header = (props) => {
  const { changeDisplay } = props;
  return (
    <header>
      <h1>Pokemon Display</h1>

      {/* Begin display options dropdown. See Dropdown.js */}
      <Dropdown changeDisplay={changeDisplay} />

      {/* section for info about me */}
      <div className="adam-info">
        <h2>Author: Adam Hinton</h2>

        <a
          href="https://github.com/adamhinton/pokemon-project"
          target="_blank"
          rel="noreferrer"
        >
          Source
        </a>
      </div>
    </header>
  );
};

export default Header;
