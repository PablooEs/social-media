var Post = require("../models/post");

exports.index = function (req, res, next) {
  Post.find()
    .sort({ date_of_post: -1 })
    .populate("user", "username")
    .exec(function (err, list_posts) {
      if (err) {
        return next(err);
      }
      res.json({ posts: list_posts });
    });
};

exports.post_detail = async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.id);
    res.json(post);
  } catch (err) {
    res.json({ ERROR: err });
  }
};

//Create post
exports.post_create_post = async (req, res) => {
  const post = new Post({
    user: req.body.user,
    content: req.body.content,
  });
  try {
    const savedPost = await post.save();
    res.json(savedPost);
  } catch (err) {
    res.json({ ERROR: err });
  }
};

//Delete post
exports.post_delete = async (req, res) => {
  try {
    const removedPost = await Post.findByIdAndRemove({ _id: req.params.id });
    res.json({ Removed_post: removedPost });
  } catch (err) {
    res.json({ ERROR: err });
  }
};
