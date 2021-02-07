const axios = require("axios");

export function getPosts() {
  axios.get("http://localhost:4000/posts").catch((err) => {
    console.log("Error");
  });
}
