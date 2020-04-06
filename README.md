
# Smilecast
[Demo](https://smilecast.netlify.com/)

Created during the COVID-19 outbreak to cheer people and put a smile on their face. The app sources data from 5 publicly available APIs.

## API sources
1. [icanhazdadjoke.com](https://icanhazdadjoke.com/)
2. [JokeAPI](https://sv443.net/jokeapi)
3. [Ron Swanson quotes](https://github.com/jamesseanwright/ron-swanson-quotes)
4. [Chucknorris.io](https://api.chucknorris.io/)
5. [The Cat API](https://thecatapi.com/)

## Tech Stack
1. ReactJS
2. [Material UI](https://material-ui.com/)
3. [Netlify](https://www.netlify.com/)

## Installation
Use `npm` or `yarn` to install dependancies.

## Usage
`src/data/data.json` has json used for top navigation. <br />
```
{
  "dad": "I like dad jokes",
  "geek": "I'm a geek",
  "ron": "Ron Swanson is my hero",
  "chuck": "Chuck Norris",
  "cat": "Just show me cats!"
}
```
`src/fetchApi.js` has API endpoints with corresponding fetch calls.<br />
```
const endPoints = {
  dad: "https://icanhazdadjoke.com/",
  geek:
    "https://sv443.net/jokeapi/v2/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist&type=single",
  ron: "https://ron-swanson-quotes.herokuapp.com/v2/quotes",
  chuck: "https://api.icndb.com/jokes/random?exclude=[explicit]",
  cat: "https://api.thecatapi.com/v1/images/search"
};
```
Use `npm` or `yarn` to start local dev environement.

## Theming
App is built using [Material UI](https://material-ui.com/) components. Theme configuration for app is done using a `<ThemeProvider>` that accepts a theme property. You can customize the theme by editing src/theme.js.