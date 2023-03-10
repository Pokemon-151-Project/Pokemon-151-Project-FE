// TODO: Update this, don't want any type
const pokemonSchema = (table: any) => {
  table.increments("id").primary().unique();
  table.string("dexID").notNullable();
  table.string("name").notNullable();
  table.string("num").notNullable();
  table.string("primaryType").notNullable();
  table.string("secondaryType").notNullable();
  table.string("height").notNullable();
  table.string("weight").notNullable();
  table.text("dexEntry").notNullable();
  table.timestamps(true, true);
};

module.exports = pokemonSchema;

// [{
//   "dexID": 1,
//   "num": "001",
//   "name": "Bulbasaur",
//   "height": "0.71 m",
//   "weight": "6.9 kg",
//   "dexEntry": "A strange seed was planted on its back at birth. The plant sprouts and grows with this Pokemon.",
//   "primaryType": "Grass",
//   "secondaryType": "Poison"
// }, {
//   "dexID": 2,
//   "num": "002",
//   "name": "Ivysaur",
//   "height": "0.99 m",
//   "weight": "13.0 kg",
//   "dexEntry": "When the bulb on its back grows large, it appears to lose the ability to stand on its hind legs.",
//   "primaryType": "Grass",
//   "secondaryType": "Poison"
// }, {
//   "dexID": 3,
//   "num": "003",
//   "name": "Venusaur",
//   "height": "2.01 m",
//   "weight": "100.0 kg",
//   "dexEntry": "The plant blooms when it is absorbing solar energy. It stays on the move to seek sunlight.",
//   "primaryType": "Grass",
//   "secondaryType": "Poison"
// }, {
//   "dexID": 4,
//   "num": "004",
//   "name": "Charmander",
//   "height": "0.61 m",
//   "weight": "8.5 kg",
//   "dexEntry": "Obviously prefers hot places. When it rains, steam is said to spout from the tip of its tail.",
//   "primaryType": "Fire",
//   "secondaryType": undefined
// }, {
//   "dexID": 5,
//   "num": "005",
//   "name": "Charmeleon",
//   "height": "1.09 m",
//   "weight": "19.0 kg",
//   "dexEntry": "When it swings its burning tail, it elevates the temperature to unbearably high levels.",
//   "primaryType": "Fire",
//   "secondaryType": undefined
// }, {
//   "dexID": 6,
//   "num": "006",
//   "name": "Charizard",
//   "height": "1.70 m",
//   "weight": "90.5 kg",
//   "dexEntry": "Spits fire that is hot enough to melt boulders. Known to cause forest fires unintentionally.",
//   "primaryType": "Fire",
//   "secondaryType": "Flying"
// }, {
//   "dexID": 7,
//   "num": "007",
//   "name": "Squirtle",
//   "height": "0.51 m",
//   "weight": "9.0 kg",
//   "dexEntry": "After birth, its back swells and hardens into a shell. Powerfully sprays foam from its mouth.",
//   "primaryType": "Water",
//   "secondaryType": undefined
// }, {
//   "dexID": 8,
//   "num": "008",
//   "name": "Wartortle",
//   "height": "0.99 m",
//   "weight": "22.5 kg",
//   "dexEntry": "It cleverly controls its furry ears and tail to maintain its balance while swimming.",
//   "primaryType": "Water",
//   "secondaryType": undefined
// }, {
//   "dexID": 9,
//   "num": "009",
//   "name": "Blastoise",
//   "height": "1.60 m",
//   "weight": "85.5 kg",
//   "dexEntry": "The rocket cannons on its shell fire jets of water capable of punching holes through thick steel.",
//   "primaryType": "Water",
//   "secondaryType": undefined
// }, {
//   "dexID": 10,
//   "num": "010",
//   "name": "Caterpie",
//   "height": "0.30 m",
//   "weight": "2.9 kg",
//   "dexEntry": "Its short feet are tipped with suction pads that enable it to tirelessly climb slopes and walls.",
//   "primaryType": "Bug",
//   "secondaryType": undefined
// }, {
//   "dexID": 11,
//   "num": "011",
//   "name": "Metapod",
//   "height": "0.71 m",
//   "weight": "9.9 kg",
//   "dexEntry": "A steel-hard shell protects its tender body. It quietly endures hardships while awaiting evolution.",
//   "primaryType": "Bug",
//   "secondaryType": undefined
// }, {
//   "dexID": 12,
//   "num": "012",
//   "name": "Butterfree",
//   "height": "1.09 m",
//   "weight": "32.0 kg",
//   "dexEntry": "In battle, it flaps its wings at high speed to release highly toxic dust into the air.",
//   "primaryType": "Bug",
//   "secondaryType": "Flying"
// }, {
//   "dexID": 13,
//   "num": "013",
//   "name": "Weedle",
//   "height": "0.30 m",
//   "weight": "3.2 kg",
//   "dexEntry": "Its poison stinger is very powerful. Its bright-colored body is intended to warn off its enemies.",
//   "primaryType": "Bug",
//   "secondaryType": "Poison"
// }, {
//   "dexID": 14,
//   "num": "014",
//   "name": "Kakuna",
//   "height": "0.61 m",
//   "weight": "10.0 kg",
//   "dexEntry": "While awaiting evolution, it hides from predators under leaves and in nooks of branches.",
//   "primaryType": "Bug",
//   "secondaryType": "Poison"
// }, {
//   "dexID": 15,
//   "num": "015",
//   "name": "Beedrill",
//   "height": "0.99 m",
//   "weight": "29.5 kg",
//   "dexEntry": "Flies at high speed and attacks using its large venomous stingers on its forelegs and tail.",
//   "primaryType": "Bug",
//   "secondaryType": "Poison"
// }, {
//   "dexID": 16,
//   "num": "016",
//   "name": "Pidgey",
//   "height": "0.30 m",
//   "weight": "1.8 kg",
//   "dexEntry": "Because it dislikes fighting, it protects itself by kicking up sand.",
//   "primaryType": "Normal",
//   "secondaryType": "Flying"
// }, {
//   "dexID": 17,
//   "num": "017",
//   "name": "Pidgeotto",
//   "height": "1.09 m",
//   "weight": "30.0 kg",
//   "dexEntry": "It has outstanding vision. However high it flies, it is able to distinguish the movements of its prey.",
//   "primaryType": "Normal",
//   "secondaryType": "Flying"
// }, {
//   "dexID": 18,
//   "num": "018",
//   "name": "Pidgeot",
//   "height": "1.50 m",
//   "weight": "39.5 kg",
//   "dexEntry": "It spreads its gorgeous wings widely to intimidate enemies. It races through the skies at Mach-2 speed.",
//   "primaryType": "Normal",
//   "secondaryType": "Flying"
// }, {
//   "dexID": 19,
//   "num": "019",
//   "name": "Rattata",
//   "height": "0.30 m",
//   "weight": "3.5 kg",
//   "dexEntry": "Bites anything when it attacks. Small and very quick, it is a common sight in many places.",
//   "primaryType": "Normal",
//   "secondaryType": undefined
// }, {
//   "dexID": 20,
//   "num": "020",
//   "name": "Raticate",
//   "height": "0.71 m",
//   "weight": "18.5 kg",
//   "dexEntry": "Its whiskers help it to maintain balance. Its fangs never stop growing, so it gnaws to pare them down.",
//   "primaryType": "Normal",
//   "secondaryType": undefined
// }, {
//   "dexID": 21,
//   "num": "021",
//   "name": "Spearow",
//   "height": "0.30 m",
//   "weight": "2.0 kg",
//   "dexEntry": "Inept at flying high. However, it can fly around very fast to protect its territory.",
//   "primaryType": "Normal",
//   "secondaryType": "Flying"
// }, {
//   "dexID": 22,
//   "num": "022",
//   "name": "Fearow",
//   "height": "1.19 m",
//   "weight": "38.0 kg",
//   "dexEntry": "With its huge and magnificent wings, it can keep aloft without ever having to land for rest.",
//   "primaryType": "Normal",
//   "secondaryType": "Flying"
// }, {
//   "dexID": 23,
//   "num": "023",
//   "name": "Ekans",
//   "height": "2.01 m",
//   "weight": "6.9 kg",
//   "dexEntry": "It always hides in grass. When first born, it has no poison, so its bite is painful, but harmless.",
//   "primaryType": "Poison",
//   "secondaryType": undefined
// }, {
//   "dexID": 24,
//   "num": "024",
//   "name": "Arbok",
//   "height": "3.51 m",
//   "weight": "65.0 kg",
//   "dexEntry": "It is rumored that the ferocious warning markings on its belly differ from area to area.",
//   "primaryType": "Poison",
//   "secondaryType": undefined
// }, {
//   "dexID": 25,
//   "num": "025",
//   "name": "Pikachu",
//   "height": "0.41 m",
//   "weight": "6.0 kg",
//   "dexEntry": "When several Pikachu gather, their electricity could build and cause lightning storms.",
//   "primaryType": "Electric",
//   "secondaryType": undefined
// }, {
//   "dexID": 26,
//   "num": "026",
//   "name": "Raichu",
//   "height": "0.79 m",
//   "weight": "30.0 kg",
//   "dexEntry": "Its long tail serves as a ground to protect itself from its own high voltage power.",
//   "primaryType": "Electric",
//   "secondaryType": undefined
// }, {
//   "dexID": 27,
//   "num": "027",
//   "name": "Sandshrew",
//   "height": "0.61 m",
//   "weight": "12.0 kg",
//   "dexEntry": "Its body is dry. When it gets cold at night, its hide is said to become coated with a fine dew.",
//   "primaryType": "Ground",
//   "secondaryType": undefined
// }, {
//   "dexID": 28,
//   "num": "028",
//   "name": "Sandslash",
//   "height": "0.99 m",
//   "weight": "29.5 kg",
//   "dexEntry": "Curls up into a spiny ball when threatened. It can roll while curled up to attack or escape.",
//   "primaryType": "Ground",
//   "secondaryType": undefined
// }, {
//   "dexID": 29,
//   "num": "029",
//   "name": "Nidoran ♀",
//   "height": "0.41 m",
//   "weight": "7.0 kg",
//   "dexEntry": "Although small, its venomous barbs render this Pokemon dangerous.",
//   "primaryType": "Poison",
//   "secondaryType": undefined
// }, {
//   "dexID": 30,
//   "num": "030",
//   "name": "Nidorina",
//   "height": "0.79 m",
//   "weight": "20.0 kg",
//   "dexEntry": "When resting deep in its burrow, its thorns always retract. This is proof that it is relaxed.",
//   "primaryType": "Poison",
//   "secondaryType": undefined
// }, {
//   "dexID": 31,
//   "num": "031",
//   "name": "Nidoqueen",
//   "height": "1.30 m",
//   "weight": "60.0 kg",
//   "dexEntry": "Its hard scales provide strong protection. It uses its hefty bulk to execute powerful moves.",
//   "primaryType": "Poison",
//   "secondaryType": "Ground"
// }, {
//   "dexID": 32,
//   "num": "032",
//   "name": "Nidoran ♂",
//   "height": "0.51 m",
//   "weight": "9.0 kg",
//   "dexEntry": "Nidoran freely moves its ears in any direction. Even the slightest sound does not escape this Pokémon's notice.",
//   "primaryType": "Poison",
//   "secondaryType": undefined
// }, {
//   "dexID": 33,
//   "num": "033",
//   "name": "Nidorino",
//   "height": "0.89 m",
//   "weight": "19.5 kg",
//   "dexEntry": "It raises its big ears to check its surroundings. If it senses anything, it attacks immediately.",
//   "primaryType": "Poison",
//   "secondaryType": undefined
// }, {
//   "dexID": 34,
//   "num": "034",
//   "name": "Nidoking",
//   "height": "1.40 m",
//   "weight": "62.0 kg",
//   "dexEntry": "One swing of its mighty tail can snap a telephone pole as if it were a matchstick.",
//   "primaryType": "Poison",
//   "secondaryType": "Ground"
// }, {
//   "dexID": 35,
//   "num": "035",
//   "name": "Clefairy",
//   "height": "0.61 m",
//   "weight": "7.5 kg",
//   "dexEntry": "The moonlight that it stores in the wings on its back apparently gives it the ability to float in midair.",
//   "primaryType": "Normal",
//   "secondaryType": undefined
// }, {
//   "dexID": 36,
//   "num": "036",
//   "name": "Clefable",
//   "height": "1.30 m",
//   "weight": "40.0 kg",
//   "dexEntry": "With its acute hearing, it can pick up sounds from far away. It usually hides in quiet places.",
//   "primaryType": "Normal",
//   "secondaryType": undefined
// }, {
//   "dexID": 37,
//   "num": "037",
//   "name": "Vulpix",
//   "height": "0.61 m",
//   "weight": "9.9 kg",
//   "dexEntry": "At the time of birth, it has just one tail. The tail splits from its tip as it grows older.",
//   "primaryType": "Fire",
//   "secondaryType": undefined
// }, {
//   "dexID": 38,
//   "num": "038",
//   "name": "Ninetales",
//   "height": "1.09 m",
//   "weight": "19.9 kg",
//   "dexEntry": "Very smart and very vengeful. Grabbing one of its many tails could result in a 1000-year curse.",
//   "primaryType": "Fire",
//   "secondaryType": undefined
// }, {
//   "dexID": 39,
//   "num": "039",
//   "name": "Jigglypuff",
//   "height": "0.51 m",
//   "weight": "5.5 kg",
//   "dexEntry": "When its huge eyes light up, it sings a mysteriously soothing melody that lulls its enemies to sleep.",
//   "primaryType": "Normal",
//   "secondaryType": undefined
// }, {
//   "dexID": 40,
//   "num": "040",
//   "name": "Wigglytuff",
//   "height": "0.99 m",
//   "weight": "12.0 kg",
//   "dexEntry": "Its body is full of elasticity. By inhaling deeply, it can continue to inflate itself without limit.",
//   "primaryType": "Normal",
//   "secondaryType": undefined
// }, {
//   "dexID": 41,
//   "num": "041",
//   "name": "Zubat",
//   "height": "0.79 m",
//   "weight": "7.5 kg",
//   "dexEntry": "Forms colonies in perpetually dark places. Uses ultrasonic waves to identify and approach targets.",
//   "primaryType": "Poison",
//   "secondaryType": "Flying"
// }, {
//   "dexID": 42,
//   "num": "042",
//   "name": "Golbat",
//   "height": "1.60 m",
//   "weight": "55.0 kg",
//   "dexEntry": "It attacks in a stealthy manner, without warning. Its sharp fangs are used to bite and suck blood.",
//   "primaryType": "Poison",
//   "secondaryType": "Flying"
// }, {
//   "dexID": 43,
//   "num": "043",
//   "name": "Oddish",
//   "height": "0.51 m",
//   "weight": "5.4 kg",
//   "dexEntry": "It may be mistaken for a clump of weeds. If you try to yank it out of the ground, it shrieks horribly.",
//   "primaryType": "Grass",
//   "secondaryType": "Poison"
// }, {
//   "dexID": 44,
//   "num": "044",
//   "name": "Gloom",
//   "height": "0.79 m",
//   "weight": "8.6 kg",
//   "dexEntry": "Smells incredibly foul! However, around 1 out of 1,000 people enjoy sniffing its nose-bending stink.",
//   "primaryType": "Grass",
//   "secondaryType": "Poison"
// }, {
//   "dexID": 45,
//   "num": "045",
//   "name": "Vileplume",
//   "height": "1.19 m",
//   "weight": "18.6 kg",
//   "dexEntry": "It has the world's largest petals. With every step, the petals shake out heavy clouds of toxic pollen.",
//   "primaryType": "Grass",
//   "secondaryType": "Poison"
// }, {
//   "dexID": 46,
//   "num": "046",
//   "name": "Paras",
//   "height": "0.30 m",
//   "weight": "5.4 kg",
//   "dexEntry": "Mushrooms named tochukaso grow on its back. They grow along with the host Paras.",
//   "primaryType": "Bug",
//   "secondaryType": "Grass"
// }, {
//   "dexID": 47,
//   "num": "047",
//   "name": "Parasect",
//   "height": "0.99 m",
//   "weight": "29.5 kg",
//   "dexEntry": "A host-parasite pair in which the parasite mushroom has taken over the host bug. Prefers damp places.",
//   "primaryType": "Bug",
//   "secondaryType": "Grass"
// }, {
//   "dexID": 48,
//   "num": "048",
//   "name": "Venonat",
//   "height": "0.99 m",
//   "weight": "30.0 kg",
//   "dexEntry": "Lives in the shadows of tall trees where it eats insects. It is attracted by light at night.",
//   "primaryType": "Bug",
//   "secondaryType": "Poison"
// }, {
//   "dexID": 49,
//   "num": "049",
//   "name": "Venomoth",
//   "height": "1.50 m",
//   "weight": "12.5 kg",
//   "dexEntry": "The dust-like scales covering its wings are color-coded to indicate the kinds of poison it has.",
//   "primaryType": "Bug",
//   "secondaryType": "Poison"
// }, {
//   "dexID": 50,
//   "num": "050",
//   "name": "Diglett",
//   "height": "0.20 m",
//   "weight": "0.8 kg",
//   "dexEntry": "It burrows through the ground at a shallow depth. It leaves raised earth in its wake, making it easy to spot.",
//   "primaryType": "Ground",
//   "secondaryType": undefined
// }, {
//   "dexID": 51,
//   "num": "051",
//   "name": "Dugtrio",
//   "height": "0.71 m",
//   "weight": "33.3 kg",
//   "dexEntry": "A team of triplets that can burrow over 60 MPH. Due to this, some people think it's an earthquake.",
//   "primaryType": "Ground",
//   "secondaryType": undefined
// }, {
//   "dexID": 52,
//   "num": "052",
//   "name": "Meowth",
//   "height": "0.41 m",
//   "weight": "4.2 kg",
//   "dexEntry": "Adores circular objects. Wanders the streets on a nightly basis to look for dropped loose change.",
//   "primaryType": "Normal",
//   "secondaryType": undefined
// }, {
//   "dexID": 53,
//   "num": "053",
//   "name": "Persian",
//   "height": "0.99 m",
//   "weight": "32.0 kg",
//   "dexEntry": "Many adore it for its sophisticated air. However, it will lash out and scratch for little reason.",
//   "primaryType": "Normal",
//   "secondaryType": undefined
// }, {
//   "dexID": 54,
//   "num": "054",
//   "name": "Psyduck",
//   "height": "0.79 m",
//   "weight": "19.6 kg",
//   "dexEntry": "Always tormented by headaches. It uses psychic powers, but it is not known if it intends to do so.",
//   "primaryType": "Water",
//   "secondaryType": undefined
// }, {
//   "dexID": 55,
//   "num": "055",
//   "name": "Golduck",
//   "height": "1.70 m",
//   "weight": "76.6 kg",
//   "dexEntry": "Often seen swimming elegantly by lake shores. It is often mistaken for the Japanese monster, Kappa.",
//   "primaryType": "Water",
//   "secondaryType": undefined
// }, {
//   "dexID": 56,
//   "num": "056",
//   "name": "Mankey",
//   "height": "0.51 m",
//   "weight": "28.0 kg",
//   "dexEntry": "Extremely quick to anger. It could be docile one moment then thrashing away the next instant.",
//   "primaryType": "Fighting",
//   "secondaryType": undefined
// }, {
//   "dexID": 57,
//   "num": "057",
//   "name": "Primeape",
//   "height": "0.99 m",
//   "weight": "32.0 kg",
//   "dexEntry": "Always furious and tenacious to boot. It will not abandon chasing its quarry until it is caught.",
//   "primaryType": "Fighting",
//   "secondaryType": undefined
// }, {
//   "dexID": 58,
//   "num": "058",
//   "name": "Growlithe",
//   "height": "0.71 m",
//   "weight": "19.0 kg",
//   "dexEntry": "It has a brave and trustworthy nature and fearlessly stands up to bigger and stronger foes.",
//   "primaryType": "Fire",
//   "secondaryType": undefined
// }, {
//   "dexID": 59,
//   "num": "059",
//   "name": "Arcanine",
//   "height": "1.91 m",
//   "weight": "155.0 kg",
//   "dexEntry": "This legendary Chinese Pokemon is considered magnificent. Many people are enchanted by its grand mane.",
//   "primaryType": "Fire",
//   "secondaryType": undefined
// }, {
//   "dexID": 60,
//   "num": "060",
//   "name": "Poliwag",
//   "height": "0.61 m",
//   "weight": "12.4 kg",
//   "dexEntry": "Its newly grown legs prevent it from running. It appears to prefer swimming than trying to stand.",
//   "primaryType": "Water",
//   "secondaryType": undefined
// }, {
//   "dexID": 61,
//   "num": "061",
//   "name": "Poliwhirl",
//   "height": "0.99 m",
//   "weight": "20.0 kg",
//   "dexEntry": "Its two legs are well developed. Even though it can live on the ground, it prefers living in water.",
//   "primaryType": "Water",
//   "secondaryType": undefined
// }, {
//   "dexID": 62,
//   "num": "062",
//   "name": "Poliwrath",
//   "height": "1.30 m",
//   "weight": "54.0 kg",
//   "dexEntry": "Although an energetic, skilled swimmer that uses all of its muscles, it lives on dry land.",
//   "primaryType": "Water",
//   "secondaryType": "Fighting"
// }, {
//   "dexID": 63,
//   "num": "063",
//   "name": "Abra",
//   "height": "0.89 m",
//   "weight": "19.5 kg",
//   "dexEntry": "Sleeps 18 hours a day. If it senses danger, it will teleport itself to safety even as it sleeps.",
//   "primaryType": "Psychic",
//   "secondaryType": undefined
// }, {
//   "dexID": 64,
//   "num": "064",
//   "name": "Kadabra",
//   "height": "1.30 m",
//   "weight": "56.5 kg",
//   "dexEntry": "It emits special alpha waves from its body that induce headaches just by being close by.",
//   "primaryType": "Psychic",
//   "secondaryType": undefined
// }, {
//   "dexID": 65,
//   "num": "065",
//   "name": "Alakazam",
//   "height": "1.50 m",
//   "weight": "48.0 kg",
//   "dexEntry": "Its brain can outperform a supercomputer. Its intelligence quotient is said to be 5,000.",
//   "primaryType": "Psychic",
//   "secondaryType": undefined
// }, {
//   "dexID": 66,
//   "num": "066",
//   "name": "Machop",
//   "height": "0.79 m",
//   "weight": "19.5 kg",
//   "dexEntry": "Always brimming with power, it passes time by lifting boulders. Doing so makes it even stronger.",
//   "primaryType": "Fighting",
//   "secondaryType": undefined
// }, {
//   "dexID": 67,
//   "num": "067",
//   "name": "Machoke",
//   "height": "1.50 m",
//   "weight": "70.5 kg",
//   "dexEntry": "Its muscular body is so powerful, it must wear a power save belt to be able to regulate its motions.",
//   "primaryType": "Fighting",
//   "secondaryType": undefined
// }, {
//   "dexID": 68,
//   "num": "068",
//   "name": "Machamp",
//   "height": "1.60 m",
//   "weight": "130.0 kg",
//   "dexEntry": "Using its heavy muscles, it throws powerful punches that can send the victim clear over the horizon.",
//   "primaryType": "Fighting",
//   "secondaryType": undefined
// }, {
//   "dexID": 69,
//   "num": "069",
//   "name": "Bellsprout",
//   "height": "0.71 m",
//   "weight": "4.0 kg",
//   "dexEntry": "A carnivorous Pokemon that traps and eats bugs. It uses its root feet to soak up needed moisture.",
//   "primaryType": "Grass",
//   "secondaryType": "Poison"
// }, {
//   "dexID": 70,
//   "num": "070",
//   "name": "Weepinbell",
//   "height": "0.99 m",
//   "weight": "6.4 kg",
//   "dexEntry": "When hungry, it swallows anything that moves. Its hapless prey is melted inside by strong acids.",
//   "primaryType": "Grass",
//   "secondaryType": "Poison"
// }, {
//   "dexID": 71,
//   "num": "071",
//   "name": "Victreebel",
//   "height": "1.70 m",
//   "weight": "15.5 kg",
//   "dexEntry": "Said to live in huge colonies deep in jungles, although no one has ever returned from there.",
//   "primaryType": "Grass",
//   "secondaryType": "Poison"
// }, {
//   "dexID": 72,
//   "num": "072",
//   "name": "Tentacool",
//   "height": "0.89 m",
//   "weight": "45.5 kg",
//   "dexEntry": "Drifts in shallow seas. Anglers who hook them by accident are often punished by its stinging acid.",
//   "primaryType": "Water",
//   "secondaryType": "Poison"
// }, {
//   "dexID": 73,
//   "num": "073",
//   "name": "Tentacruel",
//   "height": "1.60 m",
//   "weight": "55.0 kg",
//   "dexEntry": "The tentacles are normally kept short. On hunts, they are extended to ensnare and immobilize prey.",
//   "primaryType": "Water",
//   "secondaryType": "Poison"
// }, {
//   "dexID": 74,
//   "num": "074",
//   "name": "Geodude",
//   "height": "0.41 m",
//   "weight": "20.0 kg",
//   "dexEntry": "Found in fields and mountains. Mistaking them for boulders, people often step or trip on them.",
//   "primaryType": "Rock",
//   "secondaryType": "Ground"
// }, {
//   "dexID": 75,
//   "num": "075",
//   "name": "Graveler",
//   "height": "0.99 m",
//   "weight": "105.0 kg",
//   "dexEntry": "Rolls down slopes to move. It rolls over any obstacle without slowing or changing its direction.",
//   "primaryType": "Rock",
//   "secondaryType": "Ground"
// }, {
//   "dexID": 76,
//   "num": "076",
//   "name": "Golem",
//   "height": "1.40 m",
//   "weight": "300.0 kg",
//   "dexEntry": "It is enclosed in a hard shell that is as rugged as slabs of rock. It sheds skin once a year to grow larger.",
//   "primaryType": "Rock",
//   "secondaryType": "Ground"
// }, {
//   "dexID": 77,
//   "num": "077",
//   "name": "Ponyta",
//   "height": "0.99 m",
//   "weight": "30.0 kg",
//   "dexEntry": "It has a brave and trustworthy nature. It fearlessly stands up to bigger and stronger foes.",
//   "primaryType": "Fire",
//   "secondaryType": undefined
// }, {
//   "dexID": 78,
//   "num": "078",
//   "name": "Rapidash",
//   "height": "1.70 m",
//   "weight": "95.0 kg",
//   "dexEntry": "Very competitive, this Pokemon will chase anything that moves fast in the hopes of racing it.",
//   "primaryType": "Fire",
//   "secondaryType": undefined
// }, {
//   "dexID": 79,
//   "num": "079",
//   "name": "Slowpoke",
//   "height": "1.19 m",
//   "weight": "36.0 kg",
//   "dexEntry": "Incredibly slow and dopey. It takes 5 seconds for it to feel pain when under attack.",
//   "primaryType": "Water",
//   "secondaryType": "Psychic"
// }, {
//   "dexID": 80,
//   "num": "080",
//   "name": "Slowbro",
//   "height": "1.60 m",
//   "weight": "78.5 kg",
//   "dexEntry": "An attached Shellder won't let go because of the tasty flavor that oozes out of its tail.",
//   "primaryType": "Water",
//   "secondaryType": "Psychic"
// }, {
//   "dexID": 81,
//   "num": "081",
//   "name": "Magnemite",
//   "height": "0.30 m",
//   "weight": "6.0 kg",
//   "dexEntry": "The electricity emitted by the units on each side of its body cause it to become a strong magnet.",
//   "primaryType": "Electric",
//   "secondaryType": undefined
// }, {
//   "dexID": 82,
//   "num": "082",
//   "name": "Magneton",
//   "height": "0.99 m",
//   "weight": "60.0 kg",
//   "dexEntry": "Generates strange radio signals. It raises the temperature by 3.6F degrees within 3,300 feet.",
//   "primaryType": "Electric",
//   "secondaryType": undefined
// }, {
//   "dexID": 83,
//   "num": "083",
//   "name": "Farfetch'd",
//   "height": "0.79 m",
//   "weight": "15.0 kg",
//   "dexEntry": "The sprig of green onions it holds is its weapon. It is used much like a metal sword.",
//   "primaryType": "Normal",
//   "secondaryType": "Flying"
// }, {
//   "dexID": 84,
//   "num": "084",
//   "name": "Doduo",
//   "height": "1.40 m",
//   "weight": "39.2 kg",
//   "dexEntry": "It races through grassy plains with powerful strides, leaving footprints up to four inches deep.",
//   "primaryType": "Normal",
//   "secondaryType": "Flying"
// }, {
//   "dexID": 85,
//   "num": "085",
//   "name": "Dodrio",
//   "height": "1.80 m",
//   "weight": "85.2 kg",
//   "dexEntry": "Uses its three brains to execute complex plans. While two heads sleep, one head stays awake.",
//   "primaryType": "Normal",
//   "secondaryType": "Flying"
// }, {
//   "dexID": 86,
//   "num": "086",
//   "name": "Seel",
//   "height": "1.09 m",
//   "weight": "90.0 kg",
//   "dexEntry": "The light blue fur that covers it keeps it protected against the cold. It loves iceberg-filled oceans.",
//   "primaryType": "Water",
//   "secondaryType": undefined
// }, {
//   "dexID": 87,
//   "num": "087",
//   "name": "Dewgong",
//   "height": "1.70 m",
//   "weight": "120.0 kg",
//   "dexEntry": "Its entire body is a snowy-white. Unharmed by even intense cold, it swims powerfully in icy waters.",
//   "primaryType": "Water",
//   "secondaryType": "Ice"
// }, {
//   "dexID": 88,
//   "num": "088",
//   "name": "Grimer",
//   "height": "0.89 m",
//   "weight": "30.0 kg",
//   "dexEntry": "Appears in filthy areas. Thrives by sucking up polluted sludge that is pumped out of factories.",
//   "primaryType": "Poison",
//   "secondaryType": undefined
// }, {
//   "dexID": 89,
//   "num": "089",
//   "name": "Muk",
//   "height": "1.19 m",
//   "weight": "30.0 kg",
//   "dexEntry": "As it moves, a very strong poison leaks from it, making the ground there barren for three years.",
//   "primaryType": "Poison",
//   "secondaryType": undefined
// }, {
//   "dexID": 90,
//   "num": "090",
//   "name": "Shellder",
//   "height": "0.30 m",
//   "weight": "4.0 kg",
//   "dexEntry": "It swims backward by opening and closing its two shells. Its large tongue is always kept hanging out.",
//   "primaryType": "Water",
//   "secondaryType": undefined
// }, {
//   "dexID": 91,
//   "num": "091",
//   "name": "Cloyster",
//   "height": "1.50 m",
//   "weight": "132.5 kg",
//   "dexEntry": "Even a missile can't break the spikes it uses to stab opponents. They're even harder than its shell.",
//   "primaryType": "Water",
//   "secondaryType": "Ice"
// }, {
//   "dexID": 92,
//   "num": "092",
//   "name": "Gastly",
//   "height": "1.30 m",
//   "weight": "0.1 kg",
//   "dexEntry": "With its gas-like body, it can sneak into any place it desires. However, it can be blown away by wind.",
//   "primaryType": "Ghost",
//   "secondaryType": "Poison"
// }, {
//   "dexID": 93,
//   "num": "093",
//   "name": "Haunter",
//   "height": "1.60 m",
//   "weight": "0.1 kg",
//   "dexEntry": "It hides in the dark, planning to take the life of the next living thing that wanders close by.",
//   "primaryType": "Ghost",
//   "secondaryType": "Poison"
// }, {
//   "dexID": 94,
//   "num": "094",
//   "name": "Gengar",
//   "height": "1.50 m",
//   "weight": "40.5 kg",
//   "dexEntry": "It is said to emerge from darkness to steal the lives of those who become lost in mountains.",
//   "primaryType": "Ghost",
//   "secondaryType": "Poison"
// }, {
//   "dexID": 95,
//   "num": "095",
//   "name": "Onix",
//   "height": "8.79 m",
//   "weight": "210.0 kg",
//   "dexEntry": "It rapidly bores through the ground at 50 mph by squirming and twisting its massive, rugged body.",
//   "primaryType": "Rock",
//   "secondaryType": "Ground"
// }, {
//   "dexID": 96,
//   "num": "096",
//   "name": "Drowzee",
//   "height": "0.99 m",
//   "weight": "32.4 kg",
//   "dexEntry": "Puts enemies to sleep then eats their dreams. Occasionally gets sick from eating bad dreams.",
//   "primaryType": "Psychic",
//   "secondaryType": undefined
// }, {
//   "dexID": 97,
//   "num": "097",
//   "name": "Hypno",
//   "height": "1.60 m",
//   "weight": "75.6 kg",
//   "dexEntry": "It carries a pendulum-like device. There once was an incident in which it took away a child it hypnotized.",
//   "primaryType": "Psychic",
//   "secondaryType": undefined
// }, {
//   "dexID": 98,
//   "num": "098",
//   "name": "Krabby",
//   "height": "0.41 m",
//   "weight": "6.5 kg",
//   "dexEntry": "Its pincers are superb weapons. They sometimes break off during battle, but they grow back fast.",
//   "primaryType": "Water",
//   "secondaryType": undefined
// }, {
//   "dexID": 99,
//   "num": "099",
//   "name": "Kingler",
//   "height": "1.30 m",
//   "weight": "60.0 kg",
//   "dexEntry": "It can hardly lift its massive, overgrown pincer. The pincer's size makes it difficult to aim properly.",
//   "primaryType": "Water",
//   "secondaryType": undefined
// }, {
//   "dexID": 100,
//   "num": "100",
//   "name": "Voltorb",
//   "height": "0.51 m",
//   "weight": "10.4 kg",
//   "dexEntry": "It was discovered when Poke balls were introduced. It is said that there is some connection.",
//   "primaryType": "Electric",
//   "secondaryType": undefined
// }, {
//   "dexID": 101,
//   "num": "101",
//   "name": "Electrode",
//   "height": "1.19 m",
//   "weight": "66.6 kg",
//   "dexEntry": "It is dangerous. If it has too much electricity and has nothing to do, it amuses itself by exploding.",
//   "primaryType": "Electric",
//   "secondaryType": undefined
// }, {
//   "dexID": 102,
//   "num": "102",
//   "name": "Exeggcute",
//   "height": "0.41 m",
//   "weight": "2.5 kg",
//   "dexEntry": "Often mistaken for eggs. When disturbed, they quickly gather and attack in swarms.",
//   "primaryType": "Grass",
//   "secondaryType": "Psychic"
// }, {
//   "dexID": 103,
//   "num": "103",
//   "name": "Exeggutor",
//   "height": "2.01 m",
//   "weight": "120.0 kg",
//   "dexEntry": "Its cries are very noisy. This is because each of the 3 heads thinks about whatever it likes.",
//   "primaryType": "Grass",
//   "secondaryType": "Psychic"
// }, {
//   "dexID": 104,
//   "num": "104",
//   "name": "Cubone",
//   "height": "0.41 m",
//   "weight": "6.5 kg",
//   "dexEntry": "Wears the skull of its deceased mother. Its cries echo inside the skull and come out as a sad melody.",
//   "primaryType": "Ground",
//   "secondaryType": undefined
// }, {
//   "dexID": 105,
//   "num": "105",
//   "name": "Marowak",
//   "height": "0.99 m",
//   "weight": "45.0 kg",
//   "dexEntry": "The bone it holds is its key weapon. It throws the bone skillfully like a boomerang to KO targets.",
//   "primaryType": "Ground",
//   "secondaryType": undefined
// }, {
//   "dexID": 106,
//   "num": "106",
//   "name": "Hitmonlee",
//   "height": "1.50 m",
//   "weight": "49.8 kg",
//   "dexEntry": "If it starts kicking repeatedly, both legs will stretch even longer to strike a fleeing foe.",
//   "primaryType": "Fighting",
//   "secondaryType": undefined
// }, {
//   "dexID": 107,
//   "num": "107",
//   "name": "Hitmonchan",
//   "height": "1.40 m",
//   "weight": "50.2 kg",
//   "dexEntry": "Its punches slice the air. They are launched at such high speed, even a slight graze could cause a burn.",
//   "primaryType": "Fighting",
//   "secondaryType": undefined
// }, {
//   "dexID": 108,
//   "num": "108",
//   "name": "Lickitung",
//   "height": "1.19 m",
//   "weight": "65.5 kg",
//   "dexEntry": "Its tongue spans almost 7 feet and moves more freely than its forelegs. Its licks can cause paralysis.",
//   "primaryType": "Normal",
//   "secondaryType": undefined
// }, {
//   "dexID": 109,
//   "num": "109",
//   "name": "Koffing",
//   "height": "0.61 m",
//   "weight": "1.0 kg",
//   "dexEntry": "If one gets close enough to it when it expels poisonous gas, the gas swirling inside it can be seen.",
//   "primaryType": "Poison",
//   "secondaryType": undefined
// }, {
//   "dexID": 110,
//   "num": "110",
//   "name": "Weezing",
//   "height": "1.19 m",
//   "weight": "9.5 kg",
//   "dexEntry": "Very rarely, a sudden mutation can result in two small Koffing twins becoming conjoined as a Weezing.",
//   "primaryType": "Poison",
//   "secondaryType": undefined
// }, {
//   "dexID": 111,
//   "num": "111",
//   "name": "Rhyhorn",
//   "height": "0.99 m",
//   "weight": "115.0 kg",
//   "dexEntry": "It doesn't care if there is anything in its way. It just charges and destroys all obstacles.",
//   "primaryType": "Ground",
//   "secondaryType": "Rock"
// }, {
//   "dexID": 112,
//   "num": "112",
//   "name": "Rhydon",
//   "height": "1.91 m",
//   "weight": "120.0 kg",
//   "dexEntry": "Protected by an armor-like hide, it is capable of living in molten lava of 3,600 degrees Fahrenheit.",
//   "primaryType": "Ground",
//   "secondaryType": "Rock"
// }, {
//   "dexID": 113,
//   "num": "113",
//   "name": "Chansey",
//   "height": "1.09 m",
//   "weight": "34.6 kg",
//   "dexEntry": "Being few in number and difficult to capture, it is said to bring happiness to the Trainer who catches it.",
//   "primaryType": "Normal",
//   "secondaryType": undefined
// }, {
//   "dexID": 114,
//   "num": "114",
//   "name": "Tangela",
//   "height": "0.99 m",
//   "weight": "35.0 kg",
//   "dexEntry": "The whole body is swathed with wide vines that are similar to seaweed. Its vines shake as it walks.",
//   "primaryType": "Grass",
//   "secondaryType": undefined
// }, {
//   "dexID": 115,
//   "num": "115",
//   "name": "Kangaskhan",
//   "height": "2.21 m",
//   "weight": "80.0 kg",
//   "dexEntry": "To protect its young, it will never give up during battle, no matter how badly wounded it is.",
//   "primaryType": "Normal",
//   "secondaryType": undefined
// }, {
//   "dexID": 116,
//   "num": "116",
//   "name": "Horsea",
//   "height": "0.41 m",
//   "weight": "8.0 kg",
//   "dexEntry": "It maintains balance using its tail, which is wound up like a coil. It may spray ink from its mouth.",
//   "primaryType": "Water",
//   "secondaryType": undefined
// }, {
//   "dexID": 117,
//   "num": "117",
//   "name": "Seadra",
//   "height": "1.19 m",
//   "weight": "25.0 kg",
//   "dexEntry": "Capable of swimming backwards by rapidly flapping its wing-like pectoral fins and stout tail.",
//   "primaryType": "Water",
//   "secondaryType": undefined
// }, {
//   "dexID": 118,
//   "num": "118",
//   "name": "Goldeen",
//   "height": "0.61 m",
//   "weight": "15.0 kg",
//   "dexEntry": "A strong swimmer, it is capable of swimming nonstop up fast streams at a steady speed of five knots.",
//   "primaryType": "Water",
//   "secondaryType": undefined
// }, {
//   "dexID": 119,
//   "num": "119",
//   "name": "Seaking",
//   "height": "1.30 m",
//   "weight": "39.0 kg",
//   "dexEntry": "The horn on its head is sharp like a drill. It bores a hole in a boulder to make its nest.",
//   "primaryType": "Water",
//   "secondaryType": undefined
// }, {
//   "dexID": 120,
//   "num": "120",
//   "name": "Staryu",
//   "height": "0.79 m",
//   "weight": "34.5 kg",
//   "dexEntry": "An enigmatic Pokemon that can effortlessly regenerate any appendage it loses in battle.",
//   "primaryType": "Water",
//   "secondaryType": undefined
// }, {
//   "dexID": 121,
//   "num": "121",
//   "name": "Starmie",
//   "height": "1.09 m",
//   "weight": "80.0 kg",
//   "dexEntry": "The center section is named the core. People think it is communicating when it glows in 7 colors.",
//   "primaryType": "Water",
//   "secondaryType": "Psychic"
// }, {
//   "dexID": 122,
//   "num": "122",
//   "name": "Mr. Mime",
//   "height": "1.30 m",
//   "weight": "54.5 kg",
//   "dexEntry": "Always practices its pantomime act. It makes enemies believe something exists that really doesn't.",
//   "primaryType": "Psychic",
//   "secondaryType": undefined
// }, {
//   "dexID": 123,
//   "num": "123",
//   "name": "Scyther",
//   "height": "1.50 m",
//   "weight": "56.0 kg",
//   "dexEntry": "Its blindingly fast speed adds to the sharpness of its twin forearm scythes which can slice through thick logs in one wicked stroke.",
//   "primaryType": "Bug",
//   "secondaryType": "Flying"
// }, {
//   "dexID": 124,
//   "num": "124",
//   "name": "Jynx",
//   "height": "1.40 m",
//   "weight": "40.6 kg",
//   "dexEntry": "It has several different cry patterns, each of which seems to have its own meaning.",
//   "primaryType": "Ice",
//   "secondaryType": "Psychic"
// }, {
//   "dexID": 125,
//   "num": "125",
//   "name": "Electabuzz",
//   "height": "1.09 m",
//   "weight": "30.0 kg",
//   "dexEntry": "Electricity runs across the surface of its body. In darkness, its entire body glows a whitish-blue.",
//   "primaryType": "Electric",
//   "secondaryType": undefined
// }, {
//   "dexID": 126,
//   "num": "126",
//   "name": "Magmar",
//   "height": "1.30 m",
//   "weight": "44.5 kg",
//   "dexEntry": "The fiery surface of its body gives off a wavering, rippling glare that is similar to the sun.",
//   "primaryType": "Fire",
//   "secondaryType": undefined
// }, {
//   "dexID": 127,
//   "num": "127",
//   "name": "Pinsir",
//   "height": "1.50 m",
//   "weight": "55.0 kg",
//   "dexEntry": "When the temperature drops at night, it sleeps on treetops or among roots where it is well hidden.",
//   "primaryType": "Bug",
//   "secondaryType": undefined
// }, {
//   "dexID": 128,
//   "num": "128",
//   "name": "Tauros",
//   "height": "1.40 m",
//   "weight": "88.4 kg",
//   "dexEntry": "They fight each other by locking horns. The herd's protector takes pride in its battle-scarred horns.",
//   "primaryType": "Normal",
//   "secondaryType": undefined
// }, {
//   "dexID": 129,
//   "num": "129",
//   "name": "Magikarp",
//   "height": "0.89 m",
//   "weight": "10.0 kg",
//   "dexEntry": "A pathetic excuse for a Pokemon that is only capable of flopping and splashing. This behavior prompted scientists to undertake research into it.",
//   "primaryType": "Water",
//   "secondaryType": undefined
// }, {
//   "dexID": 130,
//   "num": "130",
//   "name": "Gyarados",
//   "height": "6.50 m",
//   "weight": "235.0 kg",
//   "dexEntry": "It appears whenever there is world conflict, burning down any place it travels through.",
//   "primaryType": "Water",
//   "secondaryType": "Flying"
// }, {
//   "dexID": 131,
//   "num": "131",
//   "name": "Lapras",
//   "height": "2.49 m",
//   "weight": "220.0 kg",
//   "dexEntry": "Its high intelligence enables it to understand human speech. It likes to ferry people on its back.",
//   "primaryType": "Water",
//   "secondaryType": "Ice"
// }, {
//   "dexID": 132,
//   "num": "132",
//   "name": "Ditto",
//   "height": "0.30 m",
//   "weight": "4.0 kg",
//   "dexEntry": "It can transform into anything. When it sleeps, it changes into a stone to avoid being attacked.",
//   "primaryType": "Normal",
//   "secondaryType": undefined
// }, {
//   "dexID": 133,
//   "num": "133",
//   "name": "Eevee",
//   "height": "0.30 m",
//   "weight": "6.5 kg",
//   "dexEntry": "Due to its unstable genetic makeup, this special Pokemon conceals many different possible evolutions.",
//   "primaryType": "Normal",
//   "secondaryType": undefined
// }, {
//   "dexID": 134,
//   "num": "134",
//   "name": "Vaporeon",
//   "height": "0.99 m",
//   "weight": "29.0 kg",
//   "dexEntry": "As it uses the fins on the tip of its tail to swim, it blends with the water perfectly.",
//   "primaryType": "Water",
//   "secondaryType": undefined
// }, {
//   "dexID": 135,
//   "num": "135",
//   "name": "Jolteon",
//   "height": "0.79 m",
//   "weight": "24.5 kg",
//   "dexEntry": "It concentrates the weak electric charges emitted by its cells and launches wicked lightning bolts.",
//   "primaryType": "Electric",
//   "secondaryType": undefined
// }, {
//   "dexID": 136,
//   "num": "136",
//   "name": "Flareon",
//   "height": "0.89 m",
//   "weight": "25.0 kg",
//   "dexEntry": "It fluffs out its fur collar to cool down its body temperature, which can reach 1,650 degrees Fahrenheit.",
//   "primaryType": "Fire",
//   "secondaryType": undefined
// }, {
//   "dexID": 137,
//   "num": "137",
//   "name": "Porygon",
//   "height": "0.79 m",
//   "weight": "36.5 kg",
//   "dexEntry": "A manmade Pokemon that came about as a result of research. It is programmed with only basic motions.",
//   "primaryType": "Normal",
//   "secondaryType": undefined
// }, {
//   "dexID": 138,
//   "num": "138",
//   "name": "Omanyte",
//   "height": "0.41 m",
//   "weight": "7.5 kg",
//   "dexEntry": "Revived from an ancient fossil, this Pokemon uses air stored in its shell to sink and rise in water.",
//   "primaryType": "Rock",
//   "secondaryType": "Water"
// }, {
//   "dexID": 139,
//   "num": "139",
//   "name": "Omastar",
//   "height": "0.99 m",
//   "weight": "35.0 kg",
//   "dexEntry": "Apparently, it cracked Shellder's shell with its sharp fangs and sucked out the insides.",
//   "primaryType": "Rock",
//   "secondaryType": "Water"
// }, {
//   "dexID": 140,
//   "num": "140",
//   "name": "Kabuto",
//   "height": "0.51 m",
//   "weight": "11.5 kg",
//   "dexEntry": "It is thought to have inhabited beaches 300 million years ago. It is protected by a stiff shell.",
//   "primaryType": "Rock",
//   "secondaryType": "Water"
// }, {
//   "dexID": 141,
//   "num": "141",
//   "name": "Kabutops",
//   "height": "1.30 m",
//   "weight": "40.5 kg",
//   "dexEntry": "Its sleek shape is perfect for swimming. It slashes prey with its claws and drains the body fluids.",
//   "primaryType": "Rock",
//   "secondaryType": "Water"
// }, {
//   "dexID": 142,
//   "num": "142",
//   "name": "Aerodactyl",
//   "height": "1.80 m",
//   "weight": "59.0 kg",
//   "dexEntry": "This vicious Pokemon is said to have flown in ancient skies while shrieking high-pitched cries.",
//   "primaryType": "Rock",
//   "secondaryType": "Flying"
// }, {
//   "dexID": 143,
//   "num": "143",
//   "name": "Snorlax",
//   "height": "2.11 m",
//   "weight": "460.0 kg",
//   "dexEntry": "Very lazy. Just eats and sleeps. As its rotund bulk builds, it becomes steadily more slothful.",
//   "primaryType": "Normal",
//   "secondaryType": undefined
// }, {
//   "dexID": 144,
//   "num": "144",
//   "name": "Articuno",
//   "height": "1.70 m",
//   "weight": "55.4 kg",
//   "dexEntry": "A legendary bird Pokemon that is said to appear to doomed people who are lost in icy mountains.",
//   "primaryType": "Ice",
//   "secondaryType": "Flying"
// }, {
//   "dexID": 145,
//   "num": "145",
//   "name": "Zapdos",
//   "height": "1.60 m",
//   "weight": "52.6 kg",
//   "dexEntry": "A legendary Pokémon that is said to live in thunderclouds. It freely controls lightning bolts.",
//   "primaryType": "Electric",
//   "secondaryType": "Flying"
// }, {
//   "dexID": 146,
//   "num": "146",
//   "name": "Moltres",
//   "height": "2.01 m",
//   "weight": "60.0 kg",
//   "dexEntry": "This legendary Pokemon scatters embers with every flap of its wings. It is a thrilling sight to behold.",
//   "primaryType": "Fire",
//   "secondaryType": "Flying"
// }, {
//   "dexID": 147,
//   "num": "147",
//   "name": "Dratini",
//   "height": "1.80 m",
//   "weight": "3.3 kg",
//   "dexEntry": "Long considered a mythical Pokemon until recently when a small colony was found living underwater.",
//   "primaryType": "Dragon",
//   "secondaryType": undefined
// }, {
//   "dexID": 148,
//   "num": "148",
//   "name": "Dragonair",
//   "height": "3.99 m",
//   "weight": "16.5 kg",
//   "dexEntry": "They say that if it emits an aura from its whole body, the weather will begin to change instantly.",
//   "primaryType": "Dragon",
//   "secondaryType": undefined
// }, {
//   "dexID": 149,
//   "num": "149",
//   "name": "Dragonite",
//   "height": "2.21 m",
//   "weight": "210.0 kg",
//   "dexEntry": "It is said to make its home somewhere in the sea. It guides crews of shipwrecks to shore.",
//   "primaryType": "Dragon",
//   "secondaryType": "Flying"
// }, {
//   "dexID": 150,
//   "num": "150",
//   "name": "Mewtwo",
//   "height": "2.01 m",
//   "weight": "122.0 kg",
//   "dexEntry": "It was created by a scientist after years of horrific gene splicing and DNA engineering experiments.",
//   "primaryType": "Psychic",
//   "secondaryType": undefined
// }, {
//   "dexID": 151,
//   "num": "151",
//   "name": "Mew",
//   "height": "0.41 m",
//   "weight": "4.0 kg",
//   "dexEntry": "Its DNA is said to contain the genetic codes of all Pokemon.",
//   "primaryType": "Psychic",
//   "secondaryType": undefined
// }]
