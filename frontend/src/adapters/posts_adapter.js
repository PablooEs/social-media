const axios = require("axios");

export function getPosts(callback) {
  axios
    .get("http://localhost:4000/posts")
    .then((response) => {
      callback(response.data);
    })
    .catch((err) => {
      console.log("Error");
    });
}
