//This is data of the original 151 pokemon. It is the starting point; the application maps over this to display all 151 with images and facts about them. THen the user can press buttons to sort them by type, size and height.
const pokemonData = [
  {
    id: 1,
    num: "001",
    name: "Bulbasaur",
    type: ["Grass", "Poison"],
    height: "0.71 m",
    weight: "6.9 kg",
    weaknesses: ["Fire", "Ice", "Flying", "Psychic"],
    next_evolution: [
      {
        num: "002",
        name: "Ivysaur",
      },
      {
        num: "003",
        name: "Venusaur",
      },
    ],
    dexEntry:
      "A strange seed was planted on its back at birth. The plant sprouts and grows with this Pokemon.",
  },
  {
    id: 2,
    num: "002",
    name: "Ivysaur",
    type: ["Grass", "Poison"],
    height: "0.99 m",
    weight: "13.0 kg",
    weaknesses: ["Fire", "Ice", "Flying", "Psychic"],
    prev_evolution: [
      {
        num: "001",
        name: "Bulbasaur",
      },
    ],
    next_evolution: [
      {
        num: "003",
        name: "Venusaur",
      },
    ],
    dexEntry:
      "When the bulb on its back grows large, it appears to lose the ability to stand on its hind legs.",
  },
  {
    id: 3,
    num: "003",
    name: "Venusaur",
    type: ["Grass", "Poison"],
    height: "2.01 m",
    weight: "100.0 kg",
    prev_evolution: [
      {
        num: "001",
        name: "Bulbasaur",
      },
      {
        num: "002",
        name: "Ivysaur",
      },
    ],
    dexEntry:
      "The plant blooms when it is absorbing solar energy. It stays on the move to seek sunlight.",
  },
  {
    id: 4,
    num: "004",
    name: "Charmander",
    type: ["Fire"],
    height: "0.61 m",
    weight: "8.5 kg",
    weaknesses: ["Water", "Ground", "Rock"],
    next_evolution: [
      {
        num: "005",
        name: "Charmeleon",
      },
      {
        num: "006",
        name: "Charizard",
      },
    ],
    dexEntry:
      "Obviously prefers hot places. When it rains, steam is said to spout from the tip of its tail.",
  },
  {
    id: 5,
    num: "005",
    name: "Charmeleon",
    type: ["Fire"],
    height: "1.09 m",
    weight: "19.0 kg",
    weaknesses: ["Water", "Ground", "Rock"],
    prev_evolution: [
      {
        num: "004",
        name: "Charmander",
      },
    ],
    next_evolution: [
      {
        num: "006",
        name: "Charizard",
      },
    ],
    dexEntry:
      "When it swings its burning tail, it elevates the temperature to unbearably high levels.",
  },
  {
    id: 6,
    num: "006",
    name: "Charizard",
    type: ["Fire", "Flying"],
    height: "1.70 m",
    weight: "90.5 kg",
    prev_evolution: [
      {
        num: "004",
        name: "Charmander",
      },
      {
        num: "005",
        name: "Charmeleon",
      },
    ],
    dexEntry:
      "Spits fire that is hot enough to melt boulders. Known to cause forest fires unintentionally.",
  },
  {
    id: 7,
    num: "007",
    name: "Squirtle",
    type: ["Water"],
    height: "0.51 m",
    weight: "9.0 kg",
    weaknesses: ["Electric", "Grass"],
    next_evolution: [
      {
        num: "008",
        name: "Wartortle",
      },
      {
        num: "009",
        name: "Blastoise",
      },
    ],
    dexEntry:
      "After birth, its back swells and hardens into a shell. Powerfully sprays foam from its mouth.",
  },
  {
    id: 8,
    num: "008",
    name: "Wartortle",
    type: ["Water"],
    height: "0.99 m",
    weight: "22.5 kg",
    weaknesses: ["Electric", "Grass"],
    prev_evolution: [
      {
        num: "007",
        name: "Squirtle",
      },
    ],
    next_evolution: [
      {
        num: "009",
        name: "Blastoise",
      },
    ],
    dexEntry:
      "It cleverly controls its furry ears and tail to maintain its balance while swimming.",
  },
  {
    id: 9,
    num: "009",
    name: "Blastoise",
    type: ["Water"],
    height: "1.60 m",
    weight: "85.5 kg",
    prev_evolution: [
      {
        num: "007",
        name: "Squirtle",
      },
      {
        num: "008",
        name: "Wartortle",
      },
    ],
    dexEntry:
      "The rocket cannons on its shell fire jets of water capable of punching holes through thick steel.",
  },
  {
    id: 10,
    num: "010",
    name: "Caterpie",
    type: ["Bug"],
    height: "0.30 m",
    weight: "2.9 kg",
    weaknesses: ["Fire", "Flying", "Rock"],
    next_evolution: [
      {
        num: "011",
        name: "Metapod",
      },
      {
        num: "012",
        name: "Butterfree",
      },
    ],
    dexEntry:
      "Its short feet are tipped with suction pads that enable it to tirelessly climb slopes and walls.",
  },
  {
    id: 11,
    num: "011",
    name: "Metapod",
    type: ["Bug"],
    height: "0.71 m",
    weight: "9.9 kg",
    weaknesses: ["Fire", "Flying", "Rock"],
    prev_evolution: [
      {
        num: "010",
        name: "Caterpie",
      },
    ],
    next_evolution: [
      {
        num: "012",
        name: "Butterfree",
      },
    ],
    dexEntry:
      "A steel-hard shell protects its tender body. It quietly endures hardships while awaiting evolution.",
  },
  {
    id: 12,
    num: "012",
    name: "Butterfree",
    type: ["Bug", "Flying"],
    height: "1.09 m",
    weight: "32.0 kg",
    prev_evolution: [
      {
        num: "010",
        name: "Caterpie",
      },
      {
        num: "011",
        name: "Metapod",
      },
    ],
    dexEntry:
      "In battle, it flaps its wings at high speed to release highly toxic dust into the air.",
  },
  {
    id: 13,
    num: "013",
    name: "Weedle",
    type: ["Bug", "Poison"],
    height: "0.30 m",
    weight: "3.2 kg",
    weaknesses: ["Fire", "Flying", "Psychic", "Rock"],
    next_evolution: [
      {
        num: "014",
        name: "Kakuna",
      },
      {
        num: "015",
        name: "Beedrill",
      },
    ],
    dexEntry:
      "Its poison stinger is very powerful. Its bright-colored body is intended to warn off its enemies.",
  },
  {
    id: 14,
    num: "014",
    name: "Kakuna",
    type: ["Bug", "Poison"],
    height: "0.61 m",
    weight: "10.0 kg",
    weaknesses: ["Fire", "Flying", "Psychic", "Rock"],
    prev_evolution: [
      {
        num: "013",
        name: "Weedle",
      },
    ],
    next_evolution: [
      {
        num: "015",
        name: "Beedrill",
      },
    ],
    dexEntry:
      "While awaiting evolution, it hides from predators under leaves and in nooks of branches.",
  },
  {
    id: 15,
    num: "015",
    name: "Beedrill",
    type: ["Bug", "Poison"],
    height: "0.99 m",
    weight: "29.5 kg",
    prev_evolution: [
      {
        num: "013",
        name: "Weedle",
      },
      {
        num: "014",
        name: "Kakuna",
      },
    ],
    dexEntry:
      "Flies at high speed and attacks using its large venomous stingers on its forelegs and tail.",
  },
  {
    id: 16,
    num: "016",
    name: "Pidgey",
    type: ["Normal", "Flying"],
    height: "0.30 m",
    weight: "1.8 kg",
    weaknesses: ["Electric", "Rock"],
    next_evolution: [
      {
        num: "017",
        name: "Pidgeotto",
      },
      {
        num: "018",
        name: "Pidgeot",
      },
    ],
    dexEntry:
      "Because it dislikes fighting, it protects itself by kicking up sand.",
  },
  {
    id: 17,
    num: "017",
    name: "Pidgeotto",
    type: ["Normal", "Flying"],
    height: "1.09 m",
    weight: "30.0 kg",
    weaknesses: ["Electric", "Rock"],
    prev_evolution: [
      {
        num: "016",
        name: "Pidgey",
      },
    ],
    next_evolution: [
      {
        num: "018",
        name: "Pidgeot",
      },
    ],
    dexEntry:
      "It has outstanding vision. However high it flies, it is able to distinguish the movements of its prey.",
  },
  {
    id: 18,
    num: "018",
    name: "Pidgeot",
    type: ["Normal", "Flying"],
    height: "1.50 m",
    weight: "39.5 kg",
    prev_evolution: [
      {
        num: "016",
        name: "Pidgey",
      },
      {
        num: "017",
        name: "Pidgeotto",
      },
    ],
    dexEntry:
      "It spreads its gorgeous wings widely to intimidate enemies. It races through the skies at Mach-2 speed.",
  },
  {
    id: 19,
    num: "019",
    name: "Rattata",
    type: ["Normal"],
    height: "0.30 m",
    weight: "3.5 kg",
    weaknesses: ["Fighting"],
    next_evolution: [
      {
        num: "020",
        name: "Raticate",
      },
    ],
    dexEntry:
      "Bites anything when it attacks. Small and very quick, it is a common sight in many places.",
  },
  {
    id: 20,
    num: "020",
    name: "Raticate",
    type: ["Normal"],
    height: "0.71 m",
    weight: "18.5 kg",
    prev_evolution: [
      {
        num: "019",
        name: "Rattata",
      },
    ],
    dexEntry:
      "Its whiskers help it to maintain balance. Its fangs never stop growing, so it gnaws to pare them down.",
  },
  {
    id: 21,
    num: "021",
    name: "Spearow",
    type: ["Normal", "Flying"],
    height: "0.30 m",
    weight: "2.0 kg",
    weaknesses: ["Electric", "Rock"],
    next_evolution: [
      {
        num: "022",
        name: "Fearow",
      },
    ],
    dexEntry:
      "Inept at flying high. However, it can fly around very fast to protect its territory.",
  },
  {
    id: 22,
    num: "022",
    name: "Fearow",
    type: ["Normal", "Flying"],
    height: "1.19 m",
    weight: "38.0 kg",
    prev_evolution: [
      {
        num: "021",
        name: "Spearow",
      },
    ],
    dexEntry:
      "With its huge and magnificent wings, it can keep aloft without ever having to land for rest.",
  },
  {
    id: 23,
    num: "023",
    name: "Ekans",
    type: ["Poison"],
    height: "2.01 m",
    weight: "6.9 kg",
    weaknesses: ["Ground", "Psychic"],
    next_evolution: [
      {
        num: "024",
        name: "Arbok",
      },
    ],
    dexEntry:
      "It always hides in grass. When first born, it has no poison, so its bite is painful, but harmless.",
  },
  {
    id: 24,
    num: "024",
    name: "Arbok",
    type: ["Poison"],
    height: "3.51 m",
    weight: "65.0 kg",
    prev_evolution: [
      {
        num: "023",
        name: "Ekans",
      },
    ],
    dexEntry:
      "It is rumored that the ferocious warning markings on its belly differ from area to area.",
  },
  {
    id: 25,
    num: "025",
    name: "Pikachu",
    type: ["Electric"],
    height: "0.41 m",
    weight: "6.0 kg",
    weaknesses: ["Ground"],
    next_evolution: [
      {
        num: "026",
        name: "Raichu",
      },
    ],
    dexEntry:
      "When several Pikachu gather, their electricity could build and cause lightning storms.",
  },
  {
    id: 26,
    num: "026",
    name: "Raichu",
    type: ["Electric"],
    height: "0.79 m",
    weight: "30.0 kg",
    prev_evolution: [
      {
        num: "025",
        name: "Pikachu",
      },
    ],
    dexEntry:
      "Its long tail serves as a ground to protect itself from its own high voltage power.",
  },
  {
    id: 27,
    num: "027",
    name: "Sandshrew",
    type: ["Ground"],
    height: "0.61 m",
    weight: "12.0 kg",
    weaknesses: ["Water", "Grass", "Ice"],
    next_evolution: [
      {
        num: "028",
        name: "Sandslash",
      },
    ],
    dexEntry:
      "Its body is dry. When it gets cold at night, its hide is said to become coated with a fine dew.",
  },
  {
    id: 28,
    num: "028",
    name: "Sandslash",
    type: ["Ground"],
    height: "0.99 m",
    weight: "29.5 kg",
    prev_evolution: [
      {
        num: "027",
        name: "Sandshrew",
      },
    ],
    dexEntry:
      "Curls up into a spiny ball when threatened. It can roll while curled up to attack or escape.",
  },
  {
    id: 29,
    num: "029",
    name: "Nidoran ♀",
    type: ["Poison"],
    height: "0.41 m",
    weight: "7.0 kg",
    weaknesses: ["Ground", "Psychic"],
    next_evolution: [
      {
        num: "030",
        name: "Nidorina",
      },
      {
        num: "031",
        name: "Nidoqueen",
      },
    ],
    dexEntry:
      "Although small, its venomous barbs render this Pokemon dangerous.",
  },
  {
    id: 30,
    num: "030",
    name: "Nidorina",
    type: ["Poison"],
    height: "0.79 m",
    weight: "20.0 kg",
    weaknesses: ["Ground", "Psychic"],
    prev_evolution: [
      {
        num: "029",
        name: "Nidoran(Female)",
      },
    ],
    next_evolution: [
      {
        num: "031",
        name: "Nidoqueen",
      },
    ],
    dexEntry:
      "When resting deep in its burrow, its thorns always retract. This is proof that it is relaxed.",
  },
  {
    id: 31,
    num: "031",
    name: "Nidoqueen",
    type: ["Poison", "Ground"],
    height: "1.30 m",
    weight: "60.0 kg",
    prev_evolution: [
      {
        num: "029",
        name: "Nidoran(Female)",
      },
      {
        num: "030",
        name: "Nidorina",
      },
    ],
    dexEntry:
      "Its hard scales provide strong protection. It uses its hefty bulk to execute powerful moves.",
  },
  {
    id: 32,
    num: "032",
    name: "Nidoran ♂",
    type: ["Poison"],
    height: "0.51 m",
    weight: "9.0 kg",
    weaknesses: ["Ground", "Psychic"],
    next_evolution: [
      {
        num: "033",
        name: "Nidorino",
      },
      {
        num: "034",
        name: "Nidoking",
      },
    ],
    dexEntry:
      "Nidoran freely moves its ears in any direction. Even the slightest sound does not escape this Pokémon's notice.",
  },
  {
    id: 33,
    num: "033",
    name: "Nidorino",
    type: ["Poison"],
    height: "0.89 m",
    weight: "19.5 kg",
    weaknesses: ["Ground", "Psychic"],
    prev_evolution: [
      {
        num: "032",
        name: "Nidoran(Male)",
      },
    ],
    next_evolution: [
      {
        num: "034",
        name: "Nidoking",
      },
    ],
    dexEntry:
      "It raises its big ears to check its surroundings. If it senses anything, it attacks immediately.",
  },
  {
    id: 34,
    num: "034",
    name: "Nidoking",
    type: ["Poison", "Ground"],
    height: "1.40 m",
    weight: "62.0 kg",
    prev_evolution: [
      {
        num: "032",
        name: "Nidoran(Male)",
      },
      {
        num: "033",
        name: "Nidorino",
      },
    ],
    dexEntry:
      "One swing of its mighty tail can snap a telephone pole as if it were a matchstick.",
  },
  {
    id: 35,
    num: "035",
    name: "Clefairy",
    type: ["Normal"],
    height: "0.61 m",
    weight: "7.5 kg",
    weaknesses: ["Fighting"],
    next_evolution: [
      {
        num: "036",
        name: "Clefable",
      },
    ],
    dexEntry:
      "The moonlight that it stores in the wings on its back apparently gives it the ability to float in midair.",
  },
  {
    id: 36,
    num: "036",
    name: "Clefable",
    type: ["Normal"],
    height: "1.30 m",
    weight: "40.0 kg",
    prev_evolution: [
      {
        num: "035",
        name: "Clefairy",
      },
    ],
    dexEntry:
      "With its acute hearing, it can pick up sounds from far away. It usually hides in quiet places.",
  },
  {
    id: 37,
    num: "037",
    name: "Vulpix",
    type: ["Fire"],
    height: "0.61 m",
    weight: "9.9 kg",
    weaknesses: ["Water", "Ground", "Rock"],
    next_evolution: [
      {
        num: "038",
        name: "Ninetales",
      },
    ],
    dexEntry:
      "At the time of birth, it has just one tail. The tail splits from its tip as it grows older.",
  },
  {
    id: 38,
    num: "038",
    name: "Ninetales",
    type: ["Fire"],
    height: "1.09 m",
    weight: "19.9 kg",
    prev_evolution: [
      {
        num: "037",
        name: "Vulpix",
      },
    ],
    dexEntry:
      "Very smart and very vengeful. Grabbing one of its many tails could result in a 1000-year curse.",
  },
  {
    id: 39,
    num: "039",
    name: "Jigglypuff",
    type: ["Normal"],
    height: "0.51 m",
    weight: "5.5 kg",
    weaknesses: ["Fighting"],
    next_evolution: [
      {
        num: "040",
        name: "Wigglytuff",
      },
    ],
    dexEntry:
      "When its huge eyes light up, it sings a mysteriously soothing melody that lulls its enemies to sleep.",
  },
  {
    id: 40,
    num: "040",
    name: "Wigglytuff",
    type: ["Normal"],
    height: "0.99 m",
    weight: "12.0 kg",
    prev_evolution: [
      {
        num: "039",
        name: "Jigglypuff",
      },
    ],
    dexEntry:
      "Its body is full of elasticity. By inhaling deeply, it can continue to inflate itself without limit.",
  },
  {
    id: 41,
    num: "041",
    name: "Zubat",
    type: ["Poison", "Flying"],
    height: "0.79 m",
    weight: "7.5 kg",
    weaknesses: ["Electric", "Ice", "Psychic", "Rock"],
    next_evolution: [
      {
        num: "042",
        name: "Golbat",
      },
    ],
    dexEntry:
      "Forms colonies in perpetually dark places. Uses ultrasonic waves to identify and approach targets.",
  },
  {
    id: 42,
    num: "042",
    name: "Golbat",
    type: ["Poison", "Flying"],
    height: "1.60 m",
    weight: "55.0 kg",
    prev_evolution: [
      {
        num: "041",
        name: "Zubat",
      },
    ],
    dexEntry:
      "It attacks in a stealthy manner, without warning. Its sharp fangs are used to bite and suck blood.",
  },
  {
    id: 43,
    num: "043",
    name: "Oddish",
    type: ["Grass", "Poison"],
    height: "0.51 m",
    weight: "5.4 kg",
    weaknesses: ["Fire", "Ice", "Flying", "Psychic"],
    next_evolution: [
      {
        num: "044",
        name: "Gloom",
      },
      {
        num: "045",
        name: "Vileplume",
      },
    ],
    dexEntry:
      "It may be mistaken for a clump of weeds. If you try to yank it out of the ground, it shrieks horribly.",
  },
  {
    id: 44,
    num: "044",
    name: "Gloom",
    type: ["Grass", "Poison"],
    height: "0.79 m",
    weight: "8.6 kg",
    weaknesses: ["Fire", "Ice", "Flying", "Psychic"],
    prev_evolution: [
      {
        num: "043",
        name: "Oddish",
      },
    ],
    next_evolution: [
      {
        num: "045",
        name: "Vileplume",
      },
    ],
    dexEntry:
      "Smells incredibly foul! However, around 1 out of 1,000 people enjoy sniffing its nose-bending stink.",
  },
  {
    id: 45,
    num: "045",
    name: "Vileplume",
    type: ["Grass", "Poison"],
    height: "1.19 m",
    weight: "18.6 kg",
    prev_evolution: [
      {
        num: "043",
        name: "Oddish",
      },
      {
        num: "044",
        name: "Gloom",
      },
    ],
    dexEntry:
      "It has the world's largest petals. With every step, the petals shake out heavy clouds of toxic pollen.",
  },
  {
    id: 46,
    num: "046",
    name: "Paras",
    type: ["Bug", "Grass"],
    height: "0.30 m",
    weight: "5.4 kg",
    weaknesses: ["Fire", "Ice", "Poison", "Flying", "Bug", "Rock"],
    next_evolution: [
      {
        num: "047",
        name: "Parasect",
      },
    ],
    dexEntry:
      "Mushrooms named tochukaso grow on its back. They grow along with the host Paras.",
  },
  {
    id: 47,
    num: "047",
    name: "Parasect",
    type: ["Bug", "Grass"],
    height: "0.99 m",
    weight: "29.5 kg",
    prev_evolution: [
      {
        num: "046",
        name: "Paras",
      },
    ],
    dexEntry:
      "A host-parasite pair in which the parasite mushroom has taken over the host bug. Prefers damp places.",
  },
  {
    id: 48,
    num: "048",
    name: "Venonat",
    type: ["Bug", "Poison"],
    height: "0.99 m",
    weight: "30.0 kg",
    weaknesses: ["Fire", "Flying", "Psychic", "Rock"],
    next_evolution: [
      {
        num: "049",
        name: "Venomoth",
      },
    ],
    dexEntry:
      "Lives in the shadows of tall trees where it eats insects. It is attracted by light at night.",
  },
  {
    id: 49,
    num: "049",
    name: "Venomoth",
    type: ["Bug", "Poison"],
    height: "1.50 m",
    weight: "12.5 kg",
    prev_evolution: [
      {
        num: "048",
        name: "Venonat",
      },
    ],
    dexEntry:
      "The dust-like scales covering its wings are color-coded to indicate the kinds of poison it has.",
  },
  {
    id: 50,
    num: "050",
    name: "Diglett",
    type: ["Ground"],
    height: "0.20 m",
    weight: "0.8 kg",
    weaknesses: ["Water", "Grass", "Ice"],
    next_evolution: [
      {
        num: "051",
        name: "Dugtrio",
      },
    ],
    dexEntry:
      "It burrows through the ground at a shallow depth. It leaves raised earth in its wake, making it easy to spot.",
  },
  {
    id: 51,
    num: "051",
    name: "Dugtrio",
    type: ["Ground"],
    height: "0.71 m",
    weight: "33.3 kg",
    prev_evolution: [
      {
        num: "050",
        name: "Diglett",
      },
    ],
    dexEntry:
      "A team of triplets that can burrow over 60 MPH. Due to this, some people think it's an earthquake.",
  },
  {
    id: 52,
    num: "052",
    name: "Meowth",
    type: ["Normal"],
    height: "0.41 m",
    weight: "4.2 kg",
    weaknesses: ["Fighting"],
    next_evolution: [
      {
        num: "053",
        name: "Persian",
      },
    ],
    dexEntry:
      "Adores circular objects. Wanders the streets on a nightly basis to look for dropped loose change.",
  },
  {
    id: 53,
    num: "053",
    name: "Persian",
    type: ["Normal"],
    height: "0.99 m",
    weight: "32.0 kg",
    prev_evolution: [
      {
        num: "052",
        name: "Meowth",
      },
    ],
    dexEntry:
      "Many adore it for its sophisticated air. However, it will lash out and scratch for little reason.",
  },
  {
    id: 54,
    num: "054",
    name: "Psyduck",
    type: ["Water"],
    height: "0.79 m",
    weight: "19.6 kg",
    weaknesses: ["Electric", "Grass"],
    next_evolution: [
      {
        num: "055",
        name: "Golduck",
      },
    ],
    dexEntry:
      "Always tormented by headaches. It uses psychic powers, but it is not known if it intends to do so.",
  },
  {
    id: 55,
    num: "055",
    name: "Golduck",
    type: ["Water"],
    height: "1.70 m",
    weight: "76.6 kg",
    prev_evolution: [
      {
        num: "054",
        name: "Psyduck",
      },
    ],
    dexEntry:
      "Often seen swimming elegantly by lake shores. It is often mistaken for the Japanese monster, Kappa.",
  },
  {
    id: 56,
    num: "056",
    name: "Mankey",
    type: ["Fighting"],
    height: "0.51 m",
    weight: "28.0 kg",
    weaknesses: ["Flying", "Psychic", "Fairy"],
    next_evolution: [
      {
        num: "057",
        name: "Primeape",
      },
    ],
    dexEntry:
      "Extremely quick to anger. It could be docile one moment then thrashing away the next instant.",
  },
  {
    id: 57,
    num: "057",
    name: "Primeape",
    type: ["Fighting"],
    height: "0.99 m",
    weight: "32.0 kg",
    prev_evolution: [
      {
        num: "056",
        name: "Mankey",
      },
    ],
    dexEntry:
      "Always furious and tenacious to boot. It will not abandon chasing its quarry until it is caught.",
  },
  {
    id: 58,
    num: "058",
    name: "Growlithe",
    type: ["Fire"],
    height: "0.71 m",
    weight: "19.0 kg",
    weaknesses: ["Water", "Ground", "Rock"],
    next_evolution: [
      {
        num: "059",
        name: "Arcanine",
      },
    ],
    dexEntry:
      "It has a brave and trustworthy nature and fearlessly stands up to bigger and stronger foes.",
  },
  {
    id: 59,
    num: "059",
    name: "Arcanine",
    type: ["Fire"],
    height: "1.91 m",
    weight: "155.0 kg",
    prev_evolution: [
      {
        num: "058",
        name: "Growlithe",
      },
    ],
    dexEntry:
      "This legendary Chinese Pokemon is considered magnificent. Many people are enchanted by its grand mane.",
  },
  {
    id: 60,
    num: "060",
    name: "Poliwag",
    type: ["Water"],
    height: "0.61 m",
    weight: "12.4 kg",
    weaknesses: ["Electric", "Grass"],
    next_evolution: [
      {
        num: "061",
        name: "Poliwhirl",
      },
      {
        num: "062",
        name: "Poliwrath",
      },
    ],
    dexEntry:
      "Its newly grown legs prevent it from running. It appears to prefer swimming than trying to stand.",
  },
  {
    id: 61,
    num: "061",
    name: "Poliwhirl",
    type: ["Water"],
    height: "0.99 m",
    weight: "20.0 kg",
    weaknesses: ["Electric", "Grass"],
    prev_evolution: [
      {
        num: "060",
        name: "Poliwag",
      },
    ],
    next_evolution: [
      {
        num: "062",
        name: "Poliwrath",
      },
    ],
    dexEntry:
      "Its two legs are well developed. Even though it can live on the ground, it prefers living in water.",
  },
  {
    id: 62,
    num: "062",
    name: "Poliwrath",
    type: ["Water", "Fighting"],
    height: "1.30 m",
    weight: "54.0 kg",
    prev_evolution: [
      {
        num: "060",
        name: "Poliwag",
      },
      {
        num: "061",
        name: "Poliwhirl",
      },
    ],
    dexEntry:
      "Although an energetic, skilled swimmer that uses all of its muscles, it lives on dry land.",
  },
  {
    id: 63,
    num: "063",
    name: "Abra",
    type: ["Psychic"],
    height: "0.89 m",
    weight: "19.5 kg",
    weaknesses: ["Bug", "Ghost", "Dark"],
    next_evolution: [
      {
        num: "064",
        name: "Kadabra",
      },
      {
        num: "065",
        name: "Alakazam",
      },
    ],
    dexEntry:
      "Sleeps 18 hours a day. If it senses danger, it will teleport itself to safety even as it sleeps.",
  },
  {
    id: 64,
    num: "064",
    name: "Kadabra",
    type: ["Psychic"],
    height: "1.30 m",
    weight: "56.5 kg",
    weaknesses: ["Bug", "Ghost", "Dark"],
    prev_evolution: [
      {
        num: "063",
        name: "Abra",
      },
    ],
    next_evolution: [
      {
        num: "065",
        name: "Alakazam",
      },
    ],
    dexEntry:
      "It emits special alpha waves from its body that induce headaches just by being close by.",
  },
  {
    id: 65,
    num: "065",
    name: "Alakazam",
    type: ["Psychic"],
    height: "1.50 m",
    weight: "48.0 kg",
    prev_evolution: [
      {
        num: "063",
        name: "Abra",
      },
      {
        num: "064",
        name: "Kadabra",
      },
    ],
    dexEntry:
      "Its brain can outperform a supercomputer. Its intelligence quotient is said to be 5,000.",
  },
  {
    id: 66,
    num: "066",
    name: "Machop",
    type: ["Fighting"],
    height: "0.79 m",
    weight: "19.5 kg",
    weaknesses: ["Flying", "Psychic", "Fairy"],
    next_evolution: [
      {
        num: "067",
        name: "Machoke",
      },
      {
        num: "068",
        name: "Machamp",
      },
    ],
    dexEntry:
      "Always brimming with power, it passes time by lifting boulders. Doing so makes it even stronger.",
  },
  {
    id: 67,
    num: "067",
    name: "Machoke",
    type: ["Fighting"],
    height: "1.50 m",
    weight: "70.5 kg",
    weaknesses: ["Flying", "Psychic", "Fairy"],
    prev_evolution: [
      {
        num: "066",
        name: "Machop",
      },
    ],
    next_evolution: [
      {
        num: "068",
        name: "Machamp",
      },
    ],
    dexEntry:
      "Its muscular body is so powerful, it must wear a power save belt to be able to regulate its motions.",
  },
  {
    id: 68,
    num: "068",
    name: "Machamp",
    type: ["Fighting"],
    height: "1.60 m",
    weight: "130.0 kg",
    prev_evolution: [
      {
        num: "066",
        name: "Machop",
      },
      {
        num: "067",
        name: "Machoke",
      },
    ],
    dexEntry:
      "Using its heavy muscles, it throws powerful punches that can send the victim clear over the horizon.",
  },
  {
    id: 69,
    num: "069",
    name: "Bellsprout",
    type: ["Grass", "Poison"],
    height: "0.71 m",
    weight: "4.0 kg",
    weaknesses: ["Fire", "Ice", "Flying", "Psychic"],
    next_evolution: [
      {
        num: "070",
        name: "Weepinbell",
      },
      {
        num: "071",
        name: "Victreebel",
      },
    ],
    dexEntry:
      "A carnivorous Pokemon that traps and eats bugs. It uses its root feet to soak up needed moisture.",
  },
  {
    id: 70,
    num: "070",
    name: "Weepinbell",
    type: ["Grass", "Poison"],
    height: "0.99 m",
    weight: "6.4 kg",
    weaknesses: ["Fire", "Ice", "Flying", "Psychic"],
    prev_evolution: [
      {
        num: "069",
        name: "Bellsprout",
      },
    ],
    next_evolution: [
      {
        num: "071",
        name: "Victreebel",
      },
    ],
    dexEntry:
      "When hungry, it swallows anything that moves. Its hapless prey is melted inside by strong acids.",
  },
  {
    id: 71,
    num: "071",
    name: "Victreebel",
    type: ["Grass", "Poison"],
    height: "1.70 m",
    weight: "15.5 kg",
    prev_evolution: [
      {
        num: "069",
        name: "Bellsprout",
      },
      {
        num: "070",
        name: "Weepinbell",
      },
    ],
    dexEntry:
      "Said to live in huge colonies deep in jungles, although no one has ever returned from there.",
  },
  {
    id: 72,
    num: "072",
    name: "Tentacool",
    type: ["Water", "Poison"],
    height: "0.89 m",
    weight: "45.5 kg",
    weaknesses: ["Electric", "Ground", "Psychic"],
    next_evolution: [
      {
        num: "073",
        name: "Tentacruel",
      },
    ],
    dexEntry:
      "Drifts in shallow seas. Anglers who hook them by accident are often punished by its stinging acid.",
  },
  {
    id: 73,
    num: "073",
    name: "Tentacruel",
    type: ["Water", "Poison"],
    height: "1.60 m",
    weight: "55.0 kg",
    prev_evolution: [
      {
        num: "072",
        name: "Tentacool",
      },
    ],
    dexEntry:
      "The tentacles are normally kept short. On hunts, they are extended to ensnare and immobilize prey.",
  },
  {
    id: 74,
    num: "074",
    name: "Geodude",
    type: ["Rock", "Ground"],
    height: "0.41 m",
    weight: "20.0 kg",
    weaknesses: ["Water", "Grass", "Ice", "Fighting", "Ground", "Steel"],
    next_evolution: [
      {
        num: "075",
        name: "Graveler",
      },
      {
        num: "076",
        name: "Golem",
      },
    ],
    dexEntry:
      "Found in fields and mountains. Mistaking them for boulders, people often step or trip on them.",
  },
  {
    id: 75,
    num: "075",
    name: "Graveler",
    type: ["Rock", "Ground"],
    height: "0.99 m",
    weight: "105.0 kg",
    weaknesses: ["Water", "Grass", "Ice", "Fighting", "Ground", "Steel"],
    prev_evolution: [
      {
        num: "074",
        name: "Geodude",
      },
    ],
    next_evolution: [
      {
        num: "076",
        name: "Golem",
      },
    ],
    dexEntry:
      "Rolls down slopes to move. It rolls over any obstacle without slowing or changing its direction.",
  },
  {
    id: 76,
    num: "076",
    name: "Golem",
    type: ["Rock", "Ground"],
    height: "1.40 m",
    weight: "300.0 kg",
    prev_evolution: [
      {
        num: "074",
        name: "Geodude",
      },
      {
        num: "075",
        name: "Graveler",
      },
    ],
    dexEntry:
      "It is enclosed in a hard shell that is as rugged as slabs of rock. It sheds skin once a year to grow larger.",
  },
  {
    id: 77,
    num: "077",
    name: "Ponyta",
    type: ["Fire"],
    height: "0.99 m",
    weight: "30.0 kg",
    weaknesses: ["Water", "Ground", "Rock"],
    next_evolution: [
      {
        num: "078",
        name: "Rapidash",
      },
    ],
    dexEntry:
      "It has a brave and trustworthy nature. It fearlessly stands up to bigger and stronger foes.",
  },
  {
    id: 78,
    num: "078",
    name: "Rapidash",
    type: ["Fire"],
    height: "1.70 m",
    weight: "95.0 kg",
    prev_evolution: [
      {
        num: "077",
        name: "Ponyta",
      },
    ],
    dexEntry:
      "Very competitive, this Pokemon will chase anything that moves fast in the hopes of racing it.",
  },
  {
    id: 79,
    num: "079",
    name: "Slowpoke",
    type: ["Water", "Psychic"],
    height: "1.19 m",
    weight: "36.0 kg",
    weaknesses: ["Electric", "Grass", "Bug", "Ghost", "Dark"],
    next_evolution: [
      {
        num: "080",
        name: "Slowbro",
      },
    ],
    dexEntry:
      "Incredibly slow and dopey. It takes 5 seconds for it to feel pain when under attack.",
  },
  {
    id: 80,
    num: "080",
    name: "Slowbro",
    type: ["Water", "Psychic"],
    height: "1.60 m",
    weight: "78.5 kg",
    prev_evolution: [
      {
        num: "079",
        name: "Slowpoke",
      },
    ],
    dexEntry:
      "An attached Shellder won't let go because of the tasty flavor that oozes out of its tail.",
  },
  {
    id: 81,
    num: "081",
    name: "Magnemite",
    type: ["Electric"],
    height: "0.30 m",
    weight: "6.0 kg",
    weaknesses: ["Fire", "Water", "Ground"],
    next_evolution: [
      {
        num: "082",
        name: "Magneton",
      },
    ],
    dexEntry:
      "The electricity emitted by the units on each side of its body cause it to become a strong magnet.",
  },
  {
    id: 82,
    num: "082",
    name: "Magneton",
    type: ["Electric"],
    height: "0.99 m",
    weight: "60.0 kg",
    prev_evolution: [
      {
        num: "081",
        name: "Magnemite",
      },
    ],
    dexEntry:
      "Generates strange radio signals. It raises the temperature by 3.6F degrees within 3,300 feet.",
  },
  {
    id: 83,
    num: "083",
    name: "Farfetch'd",
    type: ["Normal", "Flying"],
    height: "0.79 m",
    weight: "15.0 kg",
    dexEntry:
      "The sprig of green onions it holds is its weapon. It is used much like a metal sword.",
  },
  {
    id: 84,
    num: "084",
    name: "Doduo",
    type: ["Normal", "Flying"],
    height: "1.40 m",
    weight: "39.2 kg",
    weaknesses: ["Electric", "Rock"],
    next_evolution: [
      {
        num: "085",
        name: "Dodrio",
      },
    ],
    dexEntry:
      "It races through grassy plains with powerful strides, leaving footprints up to four inches deep.",
  },
  {
    id: 85,
    num: "085",
    name: "Dodrio",
    type: ["Normal", "Flying"],
    height: "1.80 m",
    weight: "85.2 kg",
    prev_evolution: [
      {
        num: "084",
        name: "Doduo",
      },
    ],
    dexEntry:
      "Uses its three brains to execute complex plans. While two heads sleep, one head stays awake.",
  },
  {
    id: 86,
    num: "086",
    name: "Seel",
    type: ["Water"],
    height: "1.09 m",
    weight: "90.0 kg",
    weaknesses: ["Electric", "Grass"],
    next_evolution: [
      {
        num: "087",
        name: "Dewgong",
      },
    ],
    dexEntry:
      "The light blue fur that covers it keeps it protected against the cold. It loves iceberg-filled oceans.",
  },
  {
    id: 87,
    num: "087",
    name: "Dewgong",
    type: ["Water", "Ice"],
    height: "1.70 m",
    weight: "120.0 kg",
    prev_evolution: [
      {
        num: "086",
        name: "Seel",
      },
    ],
    dexEntry:
      "Its entire body is a snowy-white. Unharmed by even intense cold, it swims powerfully in icy waters.",
  },
  {
    id: 88,
    num: "088",
    name: "Grimer",
    type: ["Poison"],
    height: "0.89 m",
    weight: "30.0 kg",
    weaknesses: ["Ground", "Psychic"],
    next_evolution: [
      {
        num: "089",
        name: "Muk",
      },
    ],
    dexEntry:
      "Appears in filthy areas. Thrives by sucking up polluted sludge that is pumped out of factories.",
  },
  {
    id: 89,
    num: "089",
    name: "Muk",
    type: ["Poison"],
    height: "1.19 m",
    weight: "30.0 kg",
    prev_evolution: [
      {
        num: "088",
        name: "Grimer",
      },
    ],
    dexEntry:
      "As it moves, a very strong poison leaks from it, making the ground there barren for three years.",
  },
  {
    id: 90,
    num: "090",
    name: "Shellder",
    type: ["Water"],
    height: "0.30 m",
    weight: "4.0 kg",
    weaknesses: ["Electric", "Grass"],
    next_evolution: [
      {
        num: "091",
        name: "Cloyster",
      },
    ],
    dexEntry:
      "It swims backward by opening and closing its two shells. Its large tongue is always kept hanging out.",
  },
  {
    id: 91,
    num: "091",
    name: "Cloyster",
    type: ["Water", "Ice"],
    height: "1.50 m",
    weight: "132.5 kg",
    prev_evolution: [
      {
        num: "090",
        name: "Shellder",
      },
    ],
    dexEntry:
      "Even a missile can't break the spikes it uses to stab opponents. They're even harder than its shell.",
  },
  {
    id: 92,
    num: "092",
    name: "Gastly",
    type: ["Ghost", "Poison"],
    height: "1.30 m",
    weight: "0.1 kg",
    weaknesses: ["Ground", "Psychic", "Ghost", "Dark"],
    next_evolution: [
      {
        num: "093",
        name: "Haunter",
      },
      {
        num: "094",
        name: "Gengar",
      },
    ],
    dexEntry:
      "With its gas-like body, it can sneak into any place it desires. However, it can be blown away by wind.",
  },
  {
    id: 93,
    num: "093",
    name: "Haunter",
    type: ["Ghost", "Poison"],
    height: "1.60 m",
    weight: "0.1 kg",
    weaknesses: ["Ground", "Psychic", "Ghost", "Dark"],
    prev_evolution: [
      {
        num: "092",
        name: "Gastly",
      },
    ],
    next_evolution: [
      {
        num: "094",
        name: "Gengar",
      },
    ],
    dexEntry:
      "It hides in the dark, planning to take the life of the next living thing that wanders close by.",
  },
  {
    id: 94,
    num: "094",
    name: "Gengar",
    type: ["Ghost", "Poison"],
    height: "1.50 m",
    weight: "40.5 kg",
    prev_evolution: [
      {
        num: "092",
        name: "Gastly",
      },
      {
        num: "093",
        name: "Haunter",
      },
    ],
    dexEntry:
      "It is said to emerge from darkness to steal the lives of those who become lost in mountains.",
  },
  {
    id: 95,
    num: "095",
    name: "Onix",
    type: ["Rock", "Ground"],
    height: "8.79 m",
    weight: "210.0 kg",
    dexEntry:
      "It rapidly bores through the ground at 50 mph by squirming and twisting its massive, rugged body.",
  },
  {
    id: 96,
    num: "096",
    name: "Drowzee",
    type: ["Psychic"],
    height: "0.99 m",
    weight: "32.4 kg",
    weaknesses: ["Bug", "Ghost", "Dark"],
    next_evolution: [
      {
        num: "097",
        name: "Hypno",
      },
    ],
    dexEntry:
      "Puts enemies to sleep then eats their dreams. Occasionally gets sick from eating bad dreams.",
  },
  {
    id: 97,
    num: "097",
    name: "Hypno",
    type: ["Psychic"],
    height: "1.60 m",
    weight: "75.6 kg",
    prev_evolution: [
      {
        num: "096",
        name: "Drowzee",
      },
    ],
    dexEntry:
      "It carries a pendulum-like device. There once was an incident in which it took away a child it hypnotized.",
  },
  {
    id: 98,
    num: "098",
    name: "Krabby",
    type: ["Water"],
    height: "0.41 m",
    weight: "6.5 kg",
    weaknesses: ["Electric", "Grass"],
    next_evolution: [
      {
        num: "099",
        name: "Kingler",
      },
    ],
    dexEntry:
      "Its pincers are superb weapons. They sometimes break off during battle, but they grow back fast.",
  },
  {
    id: 99,
    num: "099",
    name: "Kingler",
    type: ["Water"],
    height: "1.30 m",
    weight: "60.0 kg",
    prev_evolution: [
      {
        num: "098",
        name: "Krabby",
      },
    ],
    dexEntry:
      "It can hardly lift its massive, overgrown pincer. The pincer's size makes it difficult to aim properly.",
  },
  {
    id: 100,
    num: "100",
    name: "Voltorb",
    type: ["Electric"],
    height: "0.51 m",
    weight: "10.4 kg",
    weaknesses: ["Ground"],
    next_evolution: [
      {
        num: "101",
        name: "Electrode",
      },
    ],
    dexEntry:
      "It was discovered when Poke balls were introduced. It is said that there is some connection.",
  },
  {
    id: 101,
    num: "101",
    name: "Electrode",
    type: ["Electric"],
    height: "1.19 m",
    weight: "66.6 kg",
    prev_evolution: [
      {
        num: "100",
        name: "Voltorb",
      },
    ],
    dexEntry:
      "It is dangerous. If it has too much electricity and has nothing to do, it amuses itself by exploding.",
  },
  {
    id: 102,
    num: "102",
    name: "Exeggcute",
    type: ["Grass", "Psychic"],
    height: "0.41 m",
    weight: "2.5 kg",
    weaknesses: ["Fire", "Ice", "Poison", "Flying", "Bug", "Ghost", "Dark"],
    next_evolution: [
      {
        num: "103",
        name: "Exeggutor",
      },
    ],
    dexEntry:
      "Often mistaken for eggs. When disturbed, they quickly gather and attack in swarms.",
  },
  {
    id: 103,
    num: "103",
    name: "Exeggutor",
    type: ["Grass", "Psychic"],
    height: "2.01 m",
    weight: "120.0 kg",
    prev_evolution: [
      {
        num: "102",
        name: "Exeggcute",
      },
    ],
    dexEntry:
      "Its cries are very noisy. This is because each of the 3 heads thinks about whatever it likes.",
  },
  {
    id: 104,
    num: "104",
    name: "Cubone",
    type: ["Ground"],
    height: "0.41 m",
    weight: "6.5 kg",
    weaknesses: ["Water", "Grass", "Ice"],
    next_evolution: [
      {
        num: "105",
        name: "Marowak",
      },
    ],
    dexEntry:
      "Wears the skull of its deceased mother. Its cries echo inside the skull and come out as a sad melody.",
  },
  {
    id: 105,
    num: "105",
    name: "Marowak",
    type: ["Ground"],
    height: "0.99 m",
    weight: "45.0 kg",
    prev_evolution: [
      {
        num: "104",
        name: "Cubone",
      },
    ],
    dexEntry:
      "The bone it holds is its key weapon. It throws the bone skillfully like a boomerang to KO targets.",
  },
  {
    id: 106,
    num: "106",
    name: "Hitmonlee",
    type: ["Fighting"],
    height: "1.50 m",
    weight: "49.8 kg",
    dexEntry:
      "If it starts kicking repeatedly, both legs will stretch even longer to strike a fleeing foe.",
  },
  {
    id: 107,
    num: "107",
    name: "Hitmonchan",
    type: ["Fighting"],
    height: "1.40 m",
    weight: "50.2 kg",
    dexEntry:
      "Its punches slice the air. They are launched at such high speed, even a slight graze could cause a burn.",
  },
  {
    id: 108,
    num: "108",
    name: "Lickitung",
    type: ["Normal"],
    height: "1.19 m",
    weight: "65.5 kg",
    dexEntry:
      "Its tongue spans almost 7 feet and moves more freely than its forelegs. Its licks can cause paralysis.",
  },
  {
    id: 109,
    num: "109",
    name: "Koffing",
    type: ["Poison"],
    height: "0.61 m",
    weight: "1.0 kg",
    weaknesses: ["Ground", "Psychic"],
    next_evolution: [
      {
        num: "110",
        name: "Weezing",
      },
    ],
    dexEntry:
      "If one gets close enough to it when it expels poisonous gas, the gas swirling inside it can be seen.",
  },
  {
    id: 110,
    num: "110",
    name: "Weezing",
    type: ["Poison"],
    height: "1.19 m",
    weight: "9.5 kg",
    prev_evolution: [
      {
        num: "109",
        name: "Koffing",
      },
    ],
    dexEntry:
      "Very rarely, a sudden mutation can result in two small Koffing twins becoming conjoined as a Weezing.",
  },
  {
    id: 111,
    num: "111",
    name: "Rhyhorn",
    type: ["Ground", "Rock"],
    height: "0.99 m",
    weight: "115.0 kg",
    weaknesses: ["Water", "Grass", "Ice", "Fighting", "Ground", "Steel"],
    next_evolution: [
      {
        num: "112",
        name: "Rhydon",
      },
    ],
    dexEntry:
      "It doesn't care if there is anything in its way. It just charges and destroys all obstacles.",
  },
  {
    id: 112,
    num: "112",
    name: "Rhydon",
    type: ["Ground", "Rock"],
    height: "1.91 m",
    weight: "120.0 kg",
    prev_evolution: [
      {
        num: "111",
        name: "Rhyhorn",
      },
    ],
    dexEntry:
      "Protected by an armor-like hide, it is capable of living in molten lava of 3,600 degrees Fahrenheit.",
  },
  {
    id: 113,
    num: "113",
    name: "Chansey",
    type: ["Normal"],
    height: "1.09 m",
    weight: "34.6 kg",
    dexEntry:
      "Being few in number and difficult to capture, it is said to bring happiness to the Trainer who catches it.",
  },
  {
    id: 114,
    num: "114",
    name: "Tangela",
    type: ["Grass"],
    height: "0.99 m",
    weight: "35.0 kg",
    dexEntry:
      "The whole body is swathed with wide vines that are similar to seaweed. Its vines shake as it walks.",
  },
  {
    id: 115,
    num: "115",
    name: "Kangaskhan",
    type: ["Normal"],
    height: "2.21 m",
    weight: "80.0 kg",
    dexEntry:
      "To protect its young, it will never give up during battle, no matter how badly wounded it is.",
  },
  {
    id: 116,
    num: "116",
    name: "Horsea",
    type: ["Water"],
    height: "0.41 m",
    weight: "8.0 kg",
    weaknesses: ["Electric", "Grass"],
    next_evolution: [
      {
        num: "117",
        name: "Seadra",
      },
    ],
    dexEntry:
      "It maintains balance using its tail, which is wound up like a coil. It may spray ink from its mouth.",
  },
  {
    id: 117,
    num: "117",
    name: "Seadra",
    type: ["Water"],
    height: "1.19 m",
    weight: "25.0 kg",
    prev_evolution: [
      {
        num: "116",
        name: "Horsea",
      },
    ],
    dexEntry:
      "Capable of swimming backwards by rapidly flapping its wing-like pectoral fins and stout tail.",
  },
  {
    id: 118,
    num: "118",
    name: "Goldeen",
    type: ["Water"],
    height: "0.61 m",
    weight: "15.0 kg",
    weaknesses: ["Electric", "Grass"],
    next_evolution: [
      {
        num: "119",
        name: "Seaking",
      },
    ],
    dexEntry:
      "A strong swimmer, it is capable of swimming nonstop up fast streams at a steady speed of five knots.",
  },
  {
    id: 119,
    num: "119",
    name: "Seaking",
    type: ["Water"],
    height: "1.30 m",
    weight: "39.0 kg",
    prev_evolution: [
      {
        num: "118",
        name: "Goldeen",
      },
    ],
    dexEntry:
      "The horn on its head is sharp like a drill. It bores a hole in a boulder to make its nest.",
  },
  {
    id: 120,
    num: "120",
    name: "Staryu",
    type: ["Water"],
    height: "0.79 m",
    weight: "34.5 kg",
    weaknesses: ["Electric", "Grass"],
    next_evolution: [
      {
        num: "121",
        name: "Starmie",
      },
    ],
    dexEntry:
      "An enigmatic Pokemon that can effortlessly regenerate any appendage it loses in battle.",
  },
  {
    id: 121,
    num: "121",
    name: "Starmie",
    type: ["Water", "Psychic"],
    height: "1.09 m",
    weight: "80.0 kg",
    prev_evolution: [
      {
        num: "120",
        name: "Staryu",
      },
    ],
    dexEntry:
      "The center section is named the core. People think it is communicating when it glows in 7 colors.",
  },
  {
    id: 122,
    num: "122",
    name: "Mr. Mime",
    type: ["Psychic"],
    height: "1.30 m",
    weight: "54.5 kg",
    dexEntry:
      "Always practices its pantomime act. It makes enemies believe something exists that really doesn't.",
  },
  {
    id: 123,
    num: "123",
    name: "Scyther",
    type: ["Bug", "Flying"],
    height: "1.50 m",
    weight: "56.0 kg",
    dexEntry:
      "Its blindingly fast speed adds to the sharpness of its twin forearm scythes which can slice through thick logs in one wicked stroke.",
  },
  {
    id: 124,
    num: "124",
    name: "Jynx",
    type: ["Ice", "Psychic"],
    height: "1.40 m",
    weight: "40.6 kg",
    dexEntry:
      "It has several different cry patterns, each of which seems to have its own meaning.",
  },
  {
    id: 125,
    num: "125",
    name: "Electabuzz",
    type: ["Electric"],
    height: "1.09 m",
    weight: "30.0 kg",
    dexEntry:
      "Electricity runs across the surface of its body. In darkness, its entire body glows a whitish-blue.",
  },
  {
    id: 126,
    num: "126",
    name: "Magmar",
    type: ["Fire"],
    height: "1.30 m",
    weight: "44.5 kg",
    dexEntry:
      "The fiery surface of its body gives off a wavering, rippling glare that is similar to the sun.",
  },
  {
    id: 127,
    num: "127",
    name: "Pinsir",
    type: ["Bug"],
    height: "1.50 m",
    weight: "55.0 kg",
    dexEntry:
      "When the temperature drops at night, it sleeps on treetops or among roots where it is well hidden.",
  },
  {
    id: 128,
    num: "128",
    name: "Tauros",
    type: ["Normal"],
    height: "1.40 m",
    weight: "88.4 kg",
    dexEntry:
      "They fight each other by locking horns. The herd's protector takes pride in its battle-scarred horns.",
  },
  {
    id: 129,
    num: "129",
    name: "Magikarp",
    type: ["Water"],
    height: "0.89 m",
    weight: "10.0 kg",
    weaknesses: ["Electric", "Grass"],
    next_evolution: [
      {
        num: "130",
        name: "Gyarados",
      },
    ],
    dexEntry:
      "A pathetic excuse for a Pokemon that is only capable of flopping and splashing. This behavior prompted scientists to undertake research into it.",
  },
  {
    id: 130,
    num: "130",
    name: "Gyarados",
    type: ["Water", "Flying"],
    height: "6.50 m",
    weight: "235.0 kg",
    prev_evolution: [
      {
        num: "129",
        name: "Magikarp",
      },
    ],
    dexEntry:
      "It appears whenever there is world conflict, burning down any place it travels through.",
  },
  {
    id: 131,
    num: "131",
    name: "Lapras",
    type: ["Water", "Ice"],
    height: "2.49 m",
    weight: "220.0 kg",
    dexEntry:
      "Its high intelligence enables it to understand human speech. It likes to ferry people on its back.",
  },
  {
    id: 132,
    num: "132",
    name: "Ditto",
    type: ["Normal"],
    height: "0.30 m",
    weight: "4.0 kg",
    dexEntry:
      "It can transform into anything. When it sleeps, it changes into a stone to avoid being attacked.",
  },
  {
    id: 133,
    num: "133",
    name: "Eevee",
    type: ["Normal"],
    height: "0.30 m",
    weight: "6.5 kg",
    weaknesses: ["Fighting"],
    next_evolution: [
      {
        num: "134",
        name: "Vaporeon",
      },
      {
        num: "135",
        name: "Jolteon",
      },
      {
        num: "136",
        name: "Flareon",
      },
    ],
    dexEntry:
      "Due to its unstable genetic makeup, this special Pokemon conceals many different possible evolutions.",
  },
  {
    id: 134,
    num: "134",
    name: "Vaporeon",
    type: ["Water"],
    height: "0.99 m",
    weight: "29.0 kg",
    prev_evolution: [
      {
        num: "133",
        name: "Eevee",
      },
    ],
    dexEntry:
      "As it uses the fins on the tip of its tail to swim, it blends with the water perfectly.",
  },
  {
    id: 135,
    num: "135",
    name: "Jolteon",
    type: ["Electric"],
    height: "0.79 m",
    weight: "24.5 kg",
    prev_evolution: [
      {
        num: "133",
        name: "Eevee",
      },
    ],
    dexEntry:
      "It concentrates the weak electric charges emitted by its cells and launches wicked lightning bolts.",
  },
  {
    id: 136,
    num: "136",
    name: "Flareon",
    type: ["Fire"],
    height: "0.89 m",
    weight: "25.0 kg",
    prev_evolution: [
      {
        num: "133",
        name: "Eevee",
      },
    ],
    dexEntry:
      "It fluffs out its fur collar to cool down its body temperature, which can reach 1,650 degrees Fahrenheit.",
  },
  {
    id: 137,
    num: "137",
    name: "Porygon",
    type: ["Normal"],
    height: "0.79 m",
    weight: "36.5 kg",
    dexEntry:
      "A manmade Pokemon that came about as a result of research. It is programmed with only basic motions.",
  },
  {
    id: 138,
    num: "138",
    name: "Omanyte",
    type: ["Rock", "Water"],
    height: "0.41 m",
    weight: "7.5 kg",
    weaknesses: ["Electric", "Grass", "Fighting", "Ground"],
    next_evolution: [
      {
        num: "139",
        name: "Omastar",
      },
    ],
    dexEntry:
      "Revived from an ancient fossil, this Pokemon uses air stored in its shell to sink and rise in water.",
  },
  {
    id: 139,
    num: "139",
    name: "Omastar",
    type: ["Rock", "Water"],
    height: "0.99 m",
    weight: "35.0 kg",
    prev_evolution: [
      {
        num: "138",
        name: "Omanyte",
      },
    ],
    dexEntry:
      "Apparently, it cracked Shellder's shell with its sharp fangs and sucked out the insides.",
  },
  {
    id: 140,
    num: "140",
    name: "Kabuto",
    type: ["Rock", "Water"],
    height: "0.51 m",
    weight: "11.5 kg",
    weaknesses: ["Electric", "Grass", "Fighting", "Ground"],
    next_evolution: [
      {
        num: "141",
        name: "Kabutops",
      },
    ],
    dexEntry:
      "It is thought to have inhabited beaches 300 million years ago. It is protected by a stiff shell.",
  },
  {
    id: 141,
    num: "141",
    name: "Kabutops",
    type: ["Rock", "Water"],
    height: "1.30 m",
    weight: "40.5 kg",
    prev_evolution: [
      {
        num: "140",
        name: "Kabuto",
      },
    ],
    dexEntry:
      "Its sleek shape is perfect for swimming. It slashes prey with its claws and drains the body fluids.",
  },
  {
    id: 142,
    num: "142",
    name: "Aerodactyl",
    type: ["Rock", "Flying"],
    height: "1.80 m",
    weight: "59.0 kg",
    dexEntry:
      "This vicious Pokemon is said to have flown in ancient skies while shrieking high-pitched cries.",
  },
  {
    id: 143,
    num: "143",
    name: "Snorlax",
    type: ["Normal"],
    height: "2.11 m",
    weight: "460.0 kg",
    dexEntry:
      "Very lazy. Just eats and sleeps. As its rotund bulk builds, it becomes steadily more slothful.",
  },
  {
    id: 144,
    num: "144",
    name: "Articuno",
    type: ["Ice", "Flying"],
    height: "1.70 m",
    weight: "55.4 kg",
    dexEntry:
      "A legendary bird Pokemon that is said to appear to doomed people who are lost in icy mountains.",
  },
  {
    id: 145,
    num: "145",
    name: "Zapdos",
    type: ["Electric", "Flying"],
    height: "1.60 m",
    weight: "52.6 kg",
    dexEntry:
      "A legendary Pokémon that is said to live in thunderclouds. It freely controls lightning bolts.",
  },
  {
    id: 146,
    num: "146",
    name: "Moltres",
    type: ["Fire", "Flying"],
    height: "2.01 m",
    weight: "60.0 kg",
    dexEntry:
      "This legendary Pokemon scatters embers with every flap of its wings. It is a thrilling sight to behold.",
  },
  {
    id: 147,
    num: "147",
    name: "Dratini",
    type: ["Dragon"],
    height: "1.80 m",
    weight: "3.3 kg",
    weaknesses: ["Ice", "Dragon", "Fairy"],
    next_evolution: [
      {
        num: "148",
        name: "Dragonair",
      },
      {
        num: "149",
        name: "Dragonite",
      },
    ],
    dexEntry:
      "Long considered a mythical Pokemon until recently when a small colony was found living underwater.",
  },
  {
    id: 148,
    num: "148",
    name: "Dragonair",
    type: ["Dragon"],
    height: "3.99 m",
    weight: "16.5 kg",
    weaknesses: ["Ice", "Dragon", "Fairy"],
    prev_evolution: [
      {
        num: "147",
        name: "Dratini",
      },
    ],
    next_evolution: [
      {
        num: "149",
        name: "Dragonite",
      },
    ],
    dexEntry:
      "They say that if it emits an aura from its whole body, the weather will begin to change instantly.",
  },
  {
    id: 149,
    num: "149",
    name: "Dragonite",
    type: ["Dragon", "Flying"],
    height: "2.21 m",
    weight: "210.0 kg",
    prev_evolution: [
      {
        num: "147",
        name: "Dratini",
      },
      {
        num: "148",
        name: "Dragonair",
      },
    ],
    dexEntry:
      "It is said to make its home somewhere in the sea. It guides crews of shipwrecks to shore.",
  },
  {
    id: 150,
    num: "150",
    name: "Mewtwo",
    type: ["Psychic"],
    height: "2.01 m",
    weight: "122.0 kg",
    dexEntry:
      "It was created by a scientist after years of horrific gene splicing and DNA engineering experiments.",
  },
  {
    id: 151,
    num: "151",
    name: "Mew",
    type: ["Psychic"],
    height: "0.41 m",
    weight: "4.0 kg",
    dexEntry: "Its DNA is said to contain the genetic codes of all Pokemon.",
  },
];

export default pokemonData;
