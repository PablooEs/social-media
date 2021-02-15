//here we are importing our Axios dependency
import axios from "axios";

//here is where we are defining our custom axios instance.
//if all of your API routes come from the same location, or you are using a web proxy to hit the server, you can provide a base url
//you can also attach axios interceptors to custom axios instances as well
const apiServer = axios.create({
  baseURL: "http://localhost:4000/",
});

//Now set up the routes.  We are going to export a default object with keys that keep our API routes organized.  For example, all of the auth routes live in the Auth object

export default {
  posts: {
    getPosts() {
      return apiServer.get("/posts/");
    },
    createPost(data) {
      return apiServer.post("/posts/create", data);
    },
  },
  comments: {
    getComments(postId) {
      return apiServer.get(`/posts/${postId}`);
    },
    createComment(data) {
      return apiServer.post("/comments/create", data);
    },
  },
  user: {
    createUser(user) {
      return apiServer.post("/user/create", user);
    },
  },
};
