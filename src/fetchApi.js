const endPoints = {
  dad: "https://icanhazdadjoke.com/",
  geek:
    "https://sv443.net/jokeapi/v2/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist&type=single",
  ron: "https://ron-swanson-quotes.herokuapp.com/v2/quotes",
  chuck: "https://api.chucknorris.io/jokes/random",
  cat: "https://api.thecatapi.com/v1/images/search"
};

export default category => {
  switch (category) {
    case "dad":
      return fetch(endPoints[category], {
        headers: { Accept: "application/json" }
      })
        .then(response => {
          return response.json();
        })
        .then(result => {
          return result.joke;
        })
        .catch(err => {
          return err;
        });
    case "geek":
      return fetch(endPoints[category], {
        headers: { Accept: "application/json" }
      })
        .then(response => {
          return response.json();
        })
        .then(result => {
          return result.joke;
        })
        .catch(err => {
          return err;
        });
    case "ron":
      return fetch(endPoints[category], {
        headers: { Accept: "application/json" }
      })
        .then(response => {
          return response.json();
        })
        .then(result => {
          return result;
        })
        .catch(err => {
          return err;
        });
    case "chuck":
      return fetch(endPoints[category], {
        headers: { Accept: "application/json" }
      })
        .then(response => {
          return response.json();
        })
        .then(result => {
          return result.value;
        })
        .catch(err => {
          return err;
        });
    case "cat":
      return fetch(endPoints[category], {
        headers: {
          Accept: "application/json",
          "x-api-key": "03d58bfb-611f-4b58-8780-0842250a5a56"
        }
      })
        .then(response => {
          return response.json();
        })
        .then(result => {
          return result[0].url;
        })
        .catch(err => {
          return err;
        });
    default:
      return new Promise((resolve, reject) => {
        reject("No API endpoint match!");
      });
  }
};
