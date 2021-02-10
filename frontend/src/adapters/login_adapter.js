const axios = require("axios");

export function getLogin(data, callback) {
  axios
    .post("http://localhost:4000/login", data)
    .then((response) => {
      callback(response.data);
      console.log(response.data);
    })
    .catch((err) => {
      console.log(err);
    });
}
