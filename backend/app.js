const express = require('express');
const indexRouter = require('./routes/index');
const config = require('dotenv').config();

//MongoDB
var PASS = config.parsed.PASS;
var mongoose = require('mongoose');
var mongoDB = `mongodb+srv://pablo:${PASS}@cluster0.dfek5.mongodb.net/social-media?retryWrites=true&w=majority`;
mongoose.connect(mongoDB, { useNewUrlParser: true , useUnifiedTopology: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const app = express();

app.use(express.json());

app.use('/',indexRouter);

app.listen(4000);