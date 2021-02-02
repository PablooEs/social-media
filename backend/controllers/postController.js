var Post = require('../models/post');

exports.index = async(req, res, next) => {
  try{
    const posts = await Post.find().populate('user');
    res.json(posts);
  }catch(err){
    res.json({message:err})
  }
};

exports.post_detail = async(req, res, next) => {
  try{
    const post = await Post.findById(req.params.id);
    res.json(post);
  }catch(err){
    res.json({ERROR:err});
  }
};