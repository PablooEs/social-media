var User = require("../models/user");
var Post = require("../models/post");

exports.index = async (req, res, next) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.json({ message: err });
  }
};

exports.user_detail = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    res.json(user);
  } catch (err) {
    res.json({ ERROR: err });
  }
};

exports.user_posts = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    const userPosts = await Post.find({ user: { _id: user._id } });
    res.json({ user: user.username, posts: userPosts });
  } catch (err) {
    res.json({ ERROR: err });
  }
};

// //Login user
// exports.user_login = async (req, res, next) => {
//   try {
//     const user = await User.findOne({
//       username: req.body.params.username,
//       password: req.body.params.password,
//     });
//     if (user) {
//       res.redirect(`/user/${user._id}`);
//     }
//     res.json({ message: "The user wasnt able to authenticate!" });
//   } catch (err) {
//     console.log(err);
//     return false;
//   }
// };

// exports.user_logged = async (req, res, netx) => {
//   try {
//     const userData = await User.findById(req.params.id);
//     res.json({ authenticated: true, user: userData });
//   } catch (err) {
//     console.log(err);
//     return false;
//   }
// };
