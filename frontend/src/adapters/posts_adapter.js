const axios = require("axios");

export function getPosts() {
  axios
    .get("http://localhost:4000/posts")
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log("Error");
    });
}
