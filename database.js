require("dotenv").config();
const mongoose=require("mongoose");
console.log("hello");
mongoose.connect(`mongodb+srv://adminx:${process.env.PASS}@cluster0.fvvdife.mongodb.net/news`).then(()=>{

    console.log("connected");
});

module.exports={}






