const User=require('../model/User')
exports.getAllUsers=async(req,res)=>{
    const users=await User.find();
    res.json(users);
};
exports.getOneUser=async(req,res)=>{
    const user=await User.findById(req.params.id);
    res.jason(show);
};
exports.deleteUser=async(req,res)=>{
    const user=await User.findByIdAndDelete(req.params.id);
    res.send("user deleted");

};
exports.updateUse=async(req,res)=>{
    const user=await User.findByIdAndUpdate(req.params.id,req.body);
    res.send("user updated");
};
exports.saveUser=async(req,res)=>{
    const data=req.body;
  const user=await new user(data);
  const savedata=await user.save();
  res.json(savedata);
};


