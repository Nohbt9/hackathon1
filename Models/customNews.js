const mongoose=require("mongoose");


const {Schema}=mongoose;


const CustomNewsSchema= new Schema({
  pincode:Number,
  news:String

});



const CustomNews=mongoose.model("customnews",CustomNewsSchema);

module.exports=CustomNews;