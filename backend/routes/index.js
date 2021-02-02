var express = require('express');
var router = express.Router();

//controller modules
var home_controller = require('../controllers/homeController');
var user_controller = require('../controllers/userController');
var post_controller = require('../controllers/postController');


/* GET home page. */
router.get('/', home_controller.index);

//GET USERS
router.get('/users',user_controller.index);
//GET request for one User.
router.get('/user/:id', user_controller.user_detail);


//GET POSTS
router.get('/posts',post_controller.index);



module.exports = router;