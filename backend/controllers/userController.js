var User = require('../models/user');

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