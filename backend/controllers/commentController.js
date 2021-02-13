var Comment = require("../models/comment");
const { body, validationResult } = require("express-validator");

exports.index = function (req, res, next) {
  Comment.find()
    .sort({ date_of_comment: -1 })
    .populate("post", "_id")
    .populate("user", "username")
    .exec(function (err, list_comments) {
      if (err) {
        return next(err);
      }
      res.json({ comments: list_comments });
    });
};

// exports.post_comments = async (req, res) => {
//   try {
//     const comment = Comment.findById(req.params.id)
//       .populate("post", "_id")
//       .populate("user", "username");
//     if (!comment) {
//       res.status(200).json({});
//     }
//     res.status(200).json(comment);
//   } catch (err) {
//     res.status(404).json(err);
//   }
// };

//Create comment
exports.post_create_comment = async (req, res) => {
  const comment = new Comment({
    post: req.body.post,
    user: req.body.user,
    content: req.body.content,
  });
  try {
    const savedComment = await comment.save();
    res.json(savedComment);
  } catch (err) {
    res.json({ ERROR: err });
  }
};
