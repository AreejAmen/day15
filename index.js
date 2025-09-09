const express=require('express');

const app=express();
const cors = require("cors");
const session=require('express-session');
const path=require('path');
require('dotenv').config({path:path.join(__dirname, ".env")});



const mongoose=require('mongoose');
const {connectDB}= require('./config/connectDB');


const authRouter=require("./router/authRouter");
const usersRouter=require("./router/userRouter");
const studentsRouter=require("./router/studentRouter");


app.use(express.json());
app.use(cors({
    origin:"http://127.0.0.1:5500",
    credentials:true
}));
app.use(session({
    secret:process.env.Session_SECRET,
    resave:false,
    saveUninitialized:false,
    cookie:{
        maxAge:1000*60*60,
        httpOnly:true,
        secure:false
    }
}))

app.use("/auth", authRouter);
app.use("/users", usersRouter);
app.use("/students", studentsRouter);

connectDB();

mongoose.connection.once('connected',()=>{
    app.listen(process.env.PORT,()=>{
        console.log("server running on port "+process.env.PORT);
    })
});

mongoose.connection.on('error',()=>{
    console.log("error connecting mongodb");
})