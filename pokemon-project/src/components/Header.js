import React from "react";

import Dropdown from "./Dropdown";

const Header = (props) => {
  const { changeDisplay } = props;
  return (
    <header>
      <h1>Pokemon Display</h1>

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

      {/* Begin display options dropdown. See Dropdown.js */}
      <Dropdown changeDisplay={changeDisplay} />
    </header>
  );
};

export default Header;
