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
        {typesArray.map((item) => {
          return (
            <button
              onClick={() => {
                changeDisplay(item);
              }}
            >
              {item}
            </button>
          );
        })}

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
