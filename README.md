POKEMON 151 PROJECT

Introduction:
-A scalable, maintainable application that maps over and displays data in digestible cards.
  -Right now, it's Pokemon. One could easily scale this up to more than the original 151 Pokemon, or tweak it to any other data.
-Persistent Dark/Light Mode preference is stored in localStorage and remembered across sessions.
-Options for alternate(shiny) sprites.
-Dynamically updates based on user-clicked display options.
  -In this case it's different pokemon types and sizes. Could easily scale to other options.

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
ReactJS for UI
cssnext is used to write futureproof CSS for CSS vendor prefix under the hood).

Static server with Livereload
The app embed for development a static connect server with livereload plugged. So each time you start the app, you get automatic refresh in the browser whenever you update a file.
