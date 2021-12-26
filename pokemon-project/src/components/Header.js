import React from "react";

const Header = (props) => {
  const { setSmall } = props;
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

      {/* dropdown menu for display options */}
      <div className="dropdown">
        <button className="dropbtn">Display Options (check this out!</button>

        <div className="dropdown-content">
          {/* The empty link here was causing problems so I commented this out for now */}
          {/* <a href='#'>Tiny Pokemon</a>
                    <a href='#'>Big Pokemon</a>
                    <a href='#'>Sort by type</a> */}
          <button onClick={setSmall}>Smol Beans</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
