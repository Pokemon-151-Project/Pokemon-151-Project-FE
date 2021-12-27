import React from "react";

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
    </header>
  );
};

export default Header;
