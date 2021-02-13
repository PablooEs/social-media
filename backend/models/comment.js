var mongoose = require("mongoose");
var Schema = mongoose.Schema;
const { DateTime } = require("luxon");

var CommentSchema = new Schema({
  post: { type: Schema.Types.ObjectId, ref: "Post", required: true },
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },
  content: { type: String, required: true, maxlength: 350 },
  date_of_comment: { type: Date, default: Date.now, required: true },
});

CommentSchema.virtual("url").get(function () {
  return "/comment/" + this._id;
});

CommentSchema.virtual("date_of_comment_formatted").get(function () {
  return DateTime.fromJSDate(this.date_of_comment).toLocaleString(
    DateTime.DATE_MED
  );
});

//Export model
module.exports = mongoose.model("Comment", CommentSchema);
