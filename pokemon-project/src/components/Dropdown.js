const Dropdown = (props) => {
  const { changeDisplay } = props;
  // Dropdown menu for display options

  const typesArray = [
    "Normal",
    "Fire",
    "Water",
    "Electric",
    "Grass",
    "Ice",
    "Fighting",
    "Poison",
    "Ground",
    "Flying",
    "Psychic",
    "Bug",
    "Rock",
    "Ghost",
    "Dragon",
  ];
  return (
    <div className="dropdown">
      <button className="dropbtn">Display Options (check this out!</button>

      <div className="dropdown-content">
        {/* Begin mapping over types. There are 15 pokemon types so I didn't want to code a button for every one of them. */}
        <div>
          <h5 className="dropdown-display-title">Pick a type:</h5>
          {typesArray.map((item) => {
            return (
              <button
                className="dropbtn-inner"
                key={item}
                onClick={() => {
                  changeDisplay(item);
                }}
              >
                {item}
              </button>
            );
          })}
        </div>
        {/* End mapping over types */}

        {/* Show only small pokemon (<10kg) */}
        <div>
          <h5 className="dropdown-display-title">Pick a weight:</h5>
          <button
            className="dropbtn-inner"
            onClick={() => {
              changeDisplay(null, "small");
            }}
          >
            Small
          </button>

          {/* Show only big pokemon (>100kg) */}
          <button
            className="dropbtn-inner"
            onClick={() => {
              changeDisplay(null, "big");
            }}
          >
            Big
          </button>
        </div>
        <div>
          <h5 className="dropdown-display-title">Pick a height:</h5>

          {/* Show only short pokemon */}
          <button
            className="dropbtn-inner"
            onClick={() => {
              changeDisplay(null, null, "short");
            }}
          >
            Short
          </button>

          {/* Show only tall pokemon */}
          <button
            className="dropbtn-inner"
            onClick={() => {
              changeDisplay(null, null, "tall");
            }}
          >
            Tall
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
