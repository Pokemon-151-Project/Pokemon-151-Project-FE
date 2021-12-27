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
        {typesArray.map((item) => {
          return (
            <button
              key={item}
              onClick={() => {
                changeDisplay(item);
              }}
            >
              {item}
            </button>
          );
        })}
        {/* End mapping over types */}

        {/* Show only small pokemon (<10kg) */}
        <button
          onClick={() => {
            changeDisplay(null, "small");
          }}
        >
          Small
        </button>

        {/* Show only big pokemon (>100kg) */}
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
