POKEMON 151 PROJECT

# `Introduction`

A scalable, maintainable application that maps over and displays data in digestible cards \
Right now it displays Pokemon, but with small adjustments, these reusable components can display anything you want. \
I invested in my codebase with thorough documentation, strong unit testing suites and good git practices with small, clean commits and descriptive, small PRs. 

`HTML/CSS is highly semantic, accessible and responsive for readers of all screen sizes and abilities`

`Right now, this displays Pokemon. One could easily scale this up to more than the original 151 Pokemon, or tweak it to any other data`

`Persistent Dark/Light Mode preference is stored in localStorage and remembered across sessions`

`Options for alternate(shiny) sprites`

`Code is highly modular, with components and utils files for different functions and sections`

Requirements:
For development, you will only need Node.js installed on your environement. And please use the appropriate Editorconfig plugin for your Editor (not mandatory).

Install
$ git clone https://github.com/ORG/pokemon-project.git
$ cd PROJECT
$ npm install


$ git pull
$ npm prune
$ npm install
To run those 3 commands you can just do

$ npm run pull
Note: Unix user can just link the git-hooks/post-merge:

Languages & tools
HTML
CSS
JavaScript
ReactJS for UI with useState

# `Technical Information:`

## `Component Structure`
```
<App>
- <Header>
-   <Dropdown/>
- <Header/>
- <AllPokemon>
-   <SinglePokemon/>  --- as many of these as needed
- <AllPokemon/>
<App/>
```

## `Components`

### `App.js <App/>`
Standard React App page. Houses all other components
#### `State:`
  -Passes state in to other components: \
  -[pokemonData, setPokemonData] : The list of pokemon that the application maps over. Can read or adjust this list\
  -[isShiny, setIsShiny]: Sets whether the app displays shiny Pokemon sprites or normal sprites\
    ---This is a small difference in coloring that a pokemon can have
    
#### `Data`:
-imports data from "./data"\
-This is the list of Pokemon to map over\
-Eventually I want to create an API for this rather than host it locally in the repo\

#### `Functions:`
-changeDisplay: 
- Shows only certain categories of pokemon based on user preferences
- These options are selected by user in Dropdown component
- Options include "Short, Tall, Big, Small, fifteen different types, and a reset to display all Pokemon


### `Header.js <Header/>`

#### `State:`
-isDarkMode, setIsDarkMode
- More info on this in Features

#### `Features`
-h1: Project name\
-h2: Author name\
-Nav:
- takes in linksArray from linksArray.js
- maps over linksArray using linksMaker.js to generates links DRYly

-[isDarkMode, setIsDarkMode]
- User presses Dark Mode button to toggle app dark mode
- Uses dark mode hook based in /hooks/useDarkMode.js  
- Imported pre-made components {BsMoon, BsSun} to use for Dark Mode/Light Mode logos

-[isShiny, setIsShiny]
- user toggles Shiny Mode by clicking shiny button 
- Causes pokemon images to switch to their shiny forms (an image with different colors for the same Pokemon)

-Dropdown:
- User clicks Display Options button to show display options dropdown (<Dropdown/>)
- More info on this in Readme Dropdown section

### `Dropdown.js <Dropdown/>`

#### `State`
-changeDisplay()
- passed in from App.js
- allows user to update display options state (AKA change which pokemon appear on screen)
- User makes these selections by clicking dropdown options

#### `Features`
-This dropdown displays buttons that user selects to filter the Pokemon displayed\
-Only one type is displayed on screen at a time, hitting another button switches to that button's display option
- Reset All:
  -  resets app back to original 151 pokemon
- Pick a type:
  - User selects a type from 15 different types
  - These type buttons are mapped over (linksArray.js) to generate a button for each, because hard-coding 15 nearly-identical buttons wouldn't be very DRY\
- Pick a height/Pick a weight:
  - These do basically the same thing. Sort pokemon by short/tall or heavy/lightweight


### `AllPokemon.js <AllPokemon/>`
Container for all pokemon cards

Maps over array of Pokemon info objects, displaying a `<SinglePokmon/>` for each

Passes in the following to SinglePokemon as props:
- poke (this is the object containing the individual pokemon's information)
- key (for efficient mapping)
- isShiny boolean (whether to show the shiny picture or normal picture)


### `SinglePokemon.js <SinglePokemon/>`

Displays a card for a single Pokemon

There are 151 in the current version of this application, could be any number

Takes pokemon info and isShiny boolean from props


#### `Features`

h2: Pokemon's name and Pokedex id

h3: Pokemon's type

h4: Pokemon's height and weight

figure: Pokemon's image
- dynamically inserts id number in to image link
- displays shiny image if isShiny, regular image if !isShiny
- Alt text is poekmon's name

blockquote: Pokemon data
- Little tidbits about each individual pokemon

## `Utils`


### `Dropdownutils/typesArray.js`

Array of 15 pokemon types

Imported in to Dropdown.js. Dropdown maps over it to produce a display option button for each time

This isn't strictly necessary, just more modular to keep this in another file

### `Headerutils/linkMaker.js`

Maps over an array of link info to produce an `<a>` tag for each

Imported in to Header.js to produce links

Maps over the linksArray from linksArray.js


### `Headerutils/linksArray.js`

An array of objects, each containing a test and href for an `<a>` tag

linkMaker() maps over this in Header.js to produce a tags for nav

I stored this separately to keep things more modular and easy to read


## `Hooks`

### `useDarkMode.js`

Lets user toggle Dark Mode/Light mode by clicking toggle button in Header.js

Adds/removes dark class name from relevant elements

Stores user preference in localStorage for persistent Dark Mode
