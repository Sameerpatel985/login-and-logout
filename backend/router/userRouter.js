const User=require('../model/User');
const express=require('express');
const router = express.Router();
const {getAllUsers,getOneUser,saveUser,deleteUser,updateUser,}=require('../controller/UserController');

userRouter.get('/api',getAllUsers);
userRouter.get('/api',getOneUser);
userRouter.get('/api',deleteUser);
userRouter.get('/api',updateUser);
userRouter.get('/api',saveUser);


module.exports=userRouter;