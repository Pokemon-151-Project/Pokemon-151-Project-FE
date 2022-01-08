// This component shows different options for the user to display Pokemon based on type, size and height, as well as to reset to default.
// Thanks to w3 for the dropdown source code which I've heavily modified for my purposes here:
// https://www.w3schools.com/howto/howto_css_dropdown.asp

const Dropdown = (props) => {
  const { changeDisplay } = props;

  //Will map over this to return one button for each type.
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
    <section className="dropdown">
      {/* Hovering here shows the dropdown menu with display options */}
      <button className="dropbtn" data-testid="dropbtn">
        Display Options (check this out!)
      </button>

      <div className="dropdown-content">
        <div>
          <div>
            {/* Reset to original display options by refreshing the page*/}
            <button
              className="dropbtn-inner"
              data-testid="reset-btn"
              id="reset-btn"
              onClick={() => {
                window.location.reload();
              }}
            >
              Reset All
            </button>
          </div>
          <h5
            className="dropdown-display-title"
            data-testid="dropdown-display-title"
          >
            Pick a type:
          </h5>
          {/* Returns 15 buttons, one for each Pokemon type*/}
          {typesArray.map((item) => {
            return (
              <button
                className="dropbtn-inner"
                data-testid={`${item.toLowerCase()}-btn`}
                id={`${item.toLowerCase()}-btn`}
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

        {/* Begin buttons for sorting pokemon by weight */}
        <div>
          {/* Button to show only small pokemon (<10kg) */}
          <h5 className="dropdown-display-title">Pick a weight:</h5>
          <button
            className="dropbtn-inner"
            data-testid="dropbtn-inner"
            id="small-btn"
            onClick={() => {
              changeDisplay(null, "small");
            }}
          >
            Small
          </button>

          {/* Button to show only big pokemon (>100kg) */}
          <button
            className="dropbtn-inner"
            data-testid="dropbtn-inner"
            id="big-btn"
            onClick={() => {
              changeDisplay(null, "big");
            }}
          >
            Big
          </button>
        </div>

        {/* Begin buttons for sorting pokemon by height */}
        <div>
          <h5 className="dropdown-display-title">Pick a height:</h5>
          {/* Show only short pokemon */}
          <button
            className="dropbtn-inner"
            data-testid="dropbtn-inner"
            id="short-btn"
            onClick={() => {
              changeDisplay(null, null, "short");
            }}
          >
            Short
          </button>

          {/* Button to show only tall pokemon */}
          <button
            className="dropbtn-inner"
            data-testid="dropbtn-inner"
            id="tall-btn"
            onClick={() => {
              changeDisplay(null, null, "tall");
            }}
          >
            Tall
          </button>
        </div>
      </div>
    </section>
  );
};

export default Dropdown;
