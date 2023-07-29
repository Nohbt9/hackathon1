const mongoose=require("mongoose");


const {Schema}=mongoose;


const pinSchema= new Schema({
   pincode:Number,
   latitude:Number,
   longitude:Number,
   num_pages:Number,
   num_visits:Number

});



const Pin=mongoose.model("pin",pinSchema);

module.exports=Pin;