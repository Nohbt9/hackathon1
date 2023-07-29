const mongoose=require("mongoose");


const {Schema}=mongoose;


const favNewsSchema= new Schema({
  name: String,
  webpage: String,
  num_visits:Number,
  num_reads:Number,

});



const FavNews=mongoose.model("favnews",favNewsSchema);

module.exports=FavNews;