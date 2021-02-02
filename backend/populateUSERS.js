#! /usr/bin/env node

console.log('This script populates some test books, authors, genres and bookinstances to your database. Specified database as argument - e.g.: populatedb mongodb+srv://cooluser:coolpassword@cluster0.a9azn.mongodb.net/local_library?retryWrites=true');

// Get arguments passed on command line
var userArgs = process.argv.slice(2);

var async = require('async')
var User = require('./models/user')


var mongoose = require('mongoose');
var mongoDB = userArgs[0];
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

var users = []

function userCreate(first_name, family_name,user,pass, d_birth, cb) {
  userdetail = {first_name:first_name , family_name: family_name,username:user,password:pass,date_of_birth:d_birth }
  
  var user = new User(userdetail);
       
  user.save(function (err) {
    if (err) {
      cb(err, null)
      return
    }
    console.log('New User: ' + user);
    users.push(user)
    cb(null, user)
  }  );
}


function createUsers(cb) {
    async.series([
        function(callback) {
          userCreate('Patrick', 'Rothfuss','User1','123456', '1973-06-06', callback);
        },
        function(callback) {
          userCreate('Ben', 'Bova','User2','123456', '1932-11-8', callback);
        },
        function(callback) {
          userCreate('Isaac', 'Asimov','User3','123456', '1920-01-02', callback);
        },
        function(callback) {
          userCreate('Bob', 'Billings','User4','123456', '1973-06-06', callback);
        },
        function(callback) {
          userCreate('Jim', 'Jones','User5','123456', '1971-12-16', callback);
        }
        ],
        // optional callback
        cb);
}



async.series([
    createUsers,
],
// Optional callback
function(err, results) {
    if (err) {
        console.log('FINAL ERR: '+err);
    }
    // All done, disconnect from database
    mongoose.connection.close();
});



