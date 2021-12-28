const Dropdown = (props) => {
  const { changeDisplay } = props;
  // Dropdown menu for display options

  //Will map over this to return one button for each type. Cleaner and dryer than hard-coding 15 different buttons.
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
      {/* Hovering here shows the dropdown menu with display options */}
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

        {/* Now there are four different buttons (sorting by tall, short, heavy and light) that were easier to just hard code. */}

        {/* Begin sorting pokemon by weight */}
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
        {/* End sorting pokemon by weight */}

        {/* Begin sorting pokemon by height */}
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
        {/* End sorting pokemon by height */}
      </div>
    </div>
  );
};

export default Dropdown;
