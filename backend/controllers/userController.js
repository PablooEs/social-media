var User = require("../models/user");
var Post = require("../models/post");
const { body, validationResult } = require("express-validator");

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

//Login user
exports.user_login = async (req, res, next) => {
  try {
    const user = await User.findOne({
      username: req.body.username,
      password: req.body.password,
    });
    if (user) {
      res.status(200).json({ authenticated: true, user: user });
    } else if (!user) {
      res.status(404).json({ authenticated: false, user: {} });
    }
  } catch (err) {
    res.status(500).json(err);
    return false;
  }
};

exports.user_create = [
  body("first_name")
    .trim()
    .isLength({ min: 3 })
    .escape()
    .withMessage("First name must be specified.")
    .isAlphanumeric()
    .withMessage("First name has non-alphanumeric characters."),
  body("family_name")
    .trim()
    .isLength({ min: 3 })
    .escape()
    .withMessage("Family name must be specified.")
    .isAlphanumeric()
    .withMessage("Family name has non-alphanumeric characters."),
  body("date_of_birth", "Invalid date of birth").isISO8601().toDate(),
  body("username")
    .trim()
    .isLength({ min: 3 })
    .escape()
    .withMessage("Username must be specified."),
  body("password")
    .trim()
    .isLength({ min: 6 })
    .withMessage("Password must be specified."),

  (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      res.status(500).json({ Error: "Verificar campos" });
    } else {
      // Data from form is valid.
      const user = new User({
        first_name: req.body.first_name,
        family_name: req.body.family_name,
        date_of_birth: req.body.date_of_birth,
        username: req.body.username,
        password: req.body.password,
      });
      user.save(function (err) {
        if (err) {
          return next(err);
        }
        // Successful - redirect to new author record.
        res.status(200).json(user);
      });
    }
  },
];
