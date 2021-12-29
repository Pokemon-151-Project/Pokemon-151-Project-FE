MVP:
[X] AllPokemon: DIsplays 151 instances of SinglePokemon

-[] Display options:
[X}Clickable options to display different pokemon based on type, weaknesses, size, whatever.
[X]Make a single component that covers all of this, and props (set by state in App.js) determines which pokemon to display

Dex Entries:
[X] Find an API with dex entries
[X]-Edit data.js (use a mapping function to copy the dex entries in)
[]-Only show first few words of dex entry. Show full entry on hover.
-Maybe this actually doesn't work well

Header:
-Basic info
[X]link to my github
[X] separate component for Dropdown content, nested in Header
[X] - sub-fields for type, size, height

Footer: Same as Header
-Maybe not same as header. Link to source code.

Routing: Use React Router to navigate between display options.
-Based in Header dropdown
-Actually, seems like routing isn't even necessary

Styling: -[X]Make cards look nice. Background colors and fonts. -[X]Responsive design, shrinks with screen.
[X]-Little card areas for each pokemon -Stretch: Make it look like a pokemon card?
-Eh probably not
-[] Add in an emoji or something based on the Pokemon's type
-[] breakpoints for different screen sizes
-Change header layout
-Not sure how much there is to do with the body
-The cards seem to look fine on mobile. Maybe make them larger so each card takes up full screen?
[]Style buttons in dropdown

Testing: Test for basic functionality
[X]All header elements show up
[x] test line: delete this later
[]All cards show up on screen
[]All buttons appear in header
[]Buttons do what they're supposed to
[] Portions of card (type, name, dex etc) render
[]DarkMode does what it's supposed to (if I implement DarkMode)

Stretch:
[]Dark Mode
-slider button
-Styling should be simple hopefully: Change bg-c of cards and body, make font sizes lighter. I don't think anything else?
-Will the background color look good with the pokemon images? If not maybe the cards will still be a lighter color
-None so far

Getting Started with Create React App
This project was bootstrapped with Create React App.

Available Scripts
In the project directory, you can run:

npm start
Runs the app in the development mode.
Open http://localhost:3000 to view it in your browser.

The page will reload when you make changes.
You may also see any lint errors in the console.

npm test
Launches the test runner in the interactive watch mode.
See the section about running tests for more information.

npm run build
Builds the app for production to the build folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

See the section about deployment for more information.

npm run eject
Note: this is a one-way operation. Once you eject, you can't go back!

If you aren't satisfied with the build tool and configuration choices, you can eject at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except eject will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use eject. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

Learn More
You can learn more in the Create React App documentation.

To learn React, check out the React documentation.

Code Splitting
This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

Analyzing the Bundle Size
This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

Making a Progressive Web App
This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

Advanced Configuration
This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

Deployment
This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

npm run build fails to minify
This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
