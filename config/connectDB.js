const mongoose=require('mongoose');
const env = require('dotenv')
const path = require('path');
env.config(({ path: path.join(__dirname,'../.env') }))
require("dotenv").config({ path: path.join(__dirname,'../.env') });
const connectDb=async()=>{
    try{
       await mongoose.connect(process.env.DATABASE_URL);
       console.log("conect database")
    }
    catch(err){
       console.error("erroorr",error)
    }
}
module.exports={connectDb}
