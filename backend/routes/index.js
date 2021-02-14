var express = require("express");
var router = express.Router();

//controller modules
var home_controller = require("../controllers/homeController");
var user_controller = require("../controllers/userController");
var post_controller = require("../controllers/postController");
var comment_controller = require("../controllers/commentController");

/* GET home page. */
router.get("/", home_controller.index);

//GET USERS
router.get("/users", user_controller.index);
//GET request for one User.
router.get("/user/:id", user_controller.user_detail);
//GET POSTS from especific user
router.get("/user/:id/posts", user_controller.user_posts);
//POST CREATE new user
router.post("/user/create", user_controller.user_create);

// //Login Users
router.post("/login", user_controller.user_login);

//GET POSTS
router.get("/posts", post_controller.index);
//GET request for one Post.
router.get("/posts/:id", post_controller.post_detail);
//POST request for creating a new post
router.post("/posts/create", post_controller.post_create_post);
//POST  request for delete a post
router.delete("/posts/:id/delete", post_controller.post_delete);

//GET Comments
router.get("/comments", comment_controller.index);

router.post("/comments/create", comment_controller.post_create_comment);

module.exports = router;
