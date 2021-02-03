var User = require('../models/user');
var Post = require('../models/post');
const { post } = require('../routes');

exports.index = async(req, res, next) => {
  try{
    const users = await User.find();
    res.json(users);
  }catch(err){
    res.json({message:err})
  }
};

exports.user_detail = async(req, res, next) => {
  try{
    const user = await User.findById(req.params.id);
    res.json(user);
  }catch(err){
    res.json({ERROR:err});
  }
};

exports.user_posts = async(req, res, next) => {
  try{
    const user = await  User.findById(req.params.id);
    const userPosts = await Post.find({user: {_id: user._id}});
    res.json({user: user.username, posts:userPosts});
  }catch(err){
    res.json({ERROR:err});
  }
};