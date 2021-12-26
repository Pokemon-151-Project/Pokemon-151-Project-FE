const setDisplay = (type = null) => {
  const newData = pokemon.filter((item) => {
    // const weightInt = item.weight.split(" ")[0];
    // return weightInt < 5;
    return item.type[0] === type || item.type[1] === type;
  });
  setPokemon(newData);
};

export default setDisplay;
