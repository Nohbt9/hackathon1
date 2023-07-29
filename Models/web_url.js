const mongoose=require("mongoose");
//"datestamp","pincode","webpage","num_visits","num_readers"

const {Schema}=mongoose;


const siteSchema= new Schema({
   datestamp: Date ,
   pincode:Number,
   webpage:String,
   num_visits:Number,
   num_readers:Number,

});



const Site=mongoose.model("sites",siteSchema);

module.exports=Site;