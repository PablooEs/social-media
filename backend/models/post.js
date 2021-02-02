var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const { DateTime } = require('luxon');

var PostSchema = new Schema(
  {
    user: {type: Schema.Types.ObjectId, ref: 'User', required: true},
    content: {type: String, required: true, maxlength: 600},
    date_of_post: {type: Date,required: true},
  }
);

PostSchema
.virtual('url')
.get(function () {
  return '/post/' + this._id;
});

PostSchema
.virtual('date_of_post_formatted')
.get(function () {
  return DateTime.fromJSDate(this.date_of_post).toLocaleString(DateTime.DATE_MED);
});

//Export model
module.exports = mongoose.model('Post', PostSchema);