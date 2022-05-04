POKEMON 151 PROJECT

# `Introduction`

## A scalable, maintainable application that maps over and displays data in digestible cards

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

## `File Overviews`

### `App.js`
Standard React App page. Houses all other components
#### `State:`
  -Passes state in to other components: \
  -[pokemonData, setPpkemonData] : The list of pokemon that the application maps over. Can read or adjust this list\
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
