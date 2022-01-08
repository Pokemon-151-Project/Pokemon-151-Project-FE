const Dropdown = (props) => {
  //ChangeDisplay is the function that changes which pokemon cards are displayed via user input.
  const { changeDisplay } = props;

  //This component is the  Dropdown menu for display options.
  //Different buttons the user can click to only display pokemon of a certain category(type, height etc)

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
              data-testid="dropbtn-inner"
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
            {/* Begin options  for mapping over types. There are 15 types so this is much more DRY. */}
            Pick a type:
          </h5>
          {typesArray.map((item) => {
            return (
              <button
                className="dropbtn-inner"
                data-testid="dropbtn-inner"
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
        {/* End mapping over types */}

        {/* Now, buttons to sort by tall, short, heavyweight and lightweight. */}

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
        {/* End sorting pokemon by weight */}

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
        {/* End sorting pokemon by height */}
      </div>

      {/* End of pokemon sorting buttons */}
    </section>
  );
};

export default Dropdown;

// This dropdown has 20 different buttons. I thought about making a buttonMaker function to streamline this, but decided it was hard to read and not DRY enough to be worth it. I've saved the prototype function here in case I decide to use it later.
// const makeButton = (id, key = null, onClick, buttonName) => {
//   return (
//     <button className="dropbtn-inner" data-testid="dropbtn-inner">{buttonName}</button>
//   );
// };
