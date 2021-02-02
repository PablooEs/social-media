var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var { DateTime } = require('luxon');

var UserSchema = new Schema(
  {
    first_name: {type: String, required: true, maxlength: 100},
    family_name: {type: String, required: true, maxlength: 100},
    username:{type: String, required: true, maxlength:50},
    password:{type: String, required: true, maxlength:200},
    date_of_birth: {type: Date,required: true},
  }
);

UserSchema
.virtual('url')
.get(function () {
  return '/user/' + this._id;
});

UserSchema
.virtual('date_of_birth_formatted')
.get(function () {
  return DateTime.fromJSDate(this.date_of_birth).toLocaleString(DateTime.DATE_MED);
});

//Export model
module.exports = mongoose.model('User', UserSchema);