const axios = require("axios");

export async function fetchPostsAdapter() {
  axios.get("http://localhost:4000/posts").catch((err) => {
    console.log("Error");
  });
}
