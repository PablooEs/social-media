const express = require("express");
var cors = require("cors");
const indexRouter = require("./routes/index");
const config = require("dotenv").config();
var passport = require("passport"),
  LocalStrategy = require("passport-local").Strategy;
var User = require("./models/user");
const session = require("express-session");
var flash = require("connect-flash");

//MongoDB
var PASS = config.parsed.PASS;
var mongoose = require("mongoose");
var mongoDB = `mongodb+srv://pablo:${PASS}@cluster0.dfek5.mongodb.net/social-media?retryWrites=true&w=majority`;
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

const app = express();

app.use(express.json());

app.use(cors());

app.use(flash());

app.use("/", indexRouter);

app.use(session({ secret: "cats", resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.urlencoded({ extended: false }));

passport.use(
  new LocalStrategy(function (username, password, done) {
    User.findOne({ username: username }, function (err, user) {
      if (err) {
        return done(err);
      }
      if (!user) {
        return done(null, false, { message: "Incorrect username." });
      }
      if (user.password !== password) {
        return done(null, false, { message: "Incorrect password." });
      }
      return done(null, user);
    });
  })
);

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  User.findById(id, function (err, user) {
    done(err, user);
  });
});

app.post("/login", passport.authenticate("local"), function (req, res) {
  res.redirect("/user/" + req.user._id);
});

app.listen(4000);
