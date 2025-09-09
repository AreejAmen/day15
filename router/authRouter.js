const express=require('express');
const authRouter=express.Router();

const {register, login, sendotp, forgotpassword, logout}=require("../controllers/authcontroller");
const checkAuth=require('../middleware/checkAuth');

authRouter.post('/register', register);

authRouter.post('/login', login);

authRouter.post('/send-otp', sendotp);

authRouter.post('/forgot-password', forgotpassword);

authRouter.delete('/logout', checkAuth, logout);

module.exports=authRouter;