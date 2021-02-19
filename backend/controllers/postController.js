var Post = require("../models/post");
var Comment = require("../models/comment");
var async = require("async");

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

exports.post_detail = function (req, res, next) {
  async.parallel(
    {
      post: function (callback) {
        Post.findById(req.params.id).exec(callback);
      },
      comments: function (callback) {
        Comment.find({ post: req.params.id })
          .populate("user", "username")
          .exec(callback);
      },
    },
    function (err, results) {
      if (err) {
        return next(err);
      }
      if (results.post == null) {
        // No results.
        var err = new Error("Post not found");
        err.status = 404;
        return next(err);
      }
      // Successful, so render.
      res.json({ post: results.post, comments: results.comments });
    }
  );
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

//Delete post and related comments
exports.post_delete = async (req, res) => {
  const postId = req.params.id;

  async.parallel(
    {
      post: function (callback) {
        Post.findByIdAndRemove(req.params.id).exec(callback);
      },
      comments: function (callback) {
        Comment.deleteMany({ post: req.params.id }).exec(callback);
      },
    },
    function (err, results) {
      if (err) {
        return next(err);
      }
      if (results.post == null) {
        // No results.
        var err = new Error("Post not found");
        err.status = 404;
        return next(err);
      }
      // Successful, so render.
      res.json({ post: results.post, comments: results.comments });
    }
  );
};
