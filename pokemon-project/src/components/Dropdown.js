const Dropdown = (props) => {
  const { changeDisplay } = props;
  {
    /* dropdown menu for display options */
  }
  return (
    <div className="dropdown">
      <button className="dropbtn">Display Options (check this out!</button>

      <div className="dropdown-content">
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

export default Dropdown;
