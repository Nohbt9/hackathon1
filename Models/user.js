const mongoose = require("mongoose");


const {Schema}=mongoose;


const userSchema= new Schema({
    name: String,
    password:String,
    pincode:Number,
});



const User=mongoose.model("user",userSchema);

module.exports=User;