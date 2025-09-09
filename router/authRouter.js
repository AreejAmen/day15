const express=require('express');
const authRouter=express.Router();

const {login, logout, register, forgotpassword, sendotp}=require("../controllers/authcontroller");
const checkAuth=require('../middleware/checkAuth');

authRouter.post('/login', login);
authRouter.post('/register', register);
authRouter.post('/forgot-password', forgotpassword);
authRouter.post('/send-otp', sendotp);
authRouter.delete('/logout', checkAuth, logout);

module.exports=authRouter;