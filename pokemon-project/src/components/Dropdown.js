const Dropdown = (props) => {
  {
    /* dropdown menu for display options */
  }
  return (
    <div className="dropdown">
      <button className="dropbtn">Display Options (check this out!</button>

      <div className="dropdown-content">
        {/* The empty link here was causing problems so I commented this out for now */}
        {/* <a href='#'>Tiny Pokemon</a>
                    <a href='#'>Big Pokemon</a>
                    <a href='#'>Sort by type</a> */}

        <button
          onClick={() => {
            changeDisplay("Fire");
          }}
        >
          Fire
        </button>

        <button
          onClick={() => {
            changeDisplay(null, "small");
          }}
        >
          Small
        </button>

        <button
          onClick={() => {
            changeDisplay(null, "big");
          }}
        >
          Big
        </button>
      </div>
    </div>
  );
};
