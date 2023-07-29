const express=require("express");
require("./database");
// require("./database_func/PinInsert.js");
// require("./database_func/siteinsert.js");
const User=require("./Models/user");
const Site=require("./Models/web_url");
const FavNews=require("./Models/favnews");
const path=require("path");
const cors=require("cors");
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname,"dist","assets")));
// name: String,
//     password:String,
//     pincode:Number,
app.get("/",(req,res)=>{
res.sendFile(path.join(__dirname,"dist","index.html"));
});
app.post("/deleteFavNews",async (req,res)=>{
await FavNews.deleteOne({_id:req.body.id});
const result =await FavNews.find({name:req.body.username});
res.send(result); 
});

app.post("/getFavNews",async (req,res)=>{
  try{
    const result=await FavNews.find({name:req.body.username});
    console.log("the length is"+result.length);
    res.send(result);
  }catch(e){

  }
   
});
app.post("/addFavNews",async (req,res)=>{
            const result=         await Site.find({_id:req.body.id});
            try{
              console.log("add result" + result);
              const news= await   FavNews.create({name:req.body.username,webpage:result[0].webpage,num_visits:result[0].num_visits,num_reads:result[0].num_readers});
              res.send({code:1});
            }catch(e){
             console.log(e);
            }
       
       
});
app.post("/createUser",async (req,res)=>{
    if(req.body.username="" || req.body.password=="" || req.body.pincode==""){
      res.send({code:0});
    }
  const result=  await User.find({name:req.body.username});
  if(result.length==0){
    const obj =await User.create({name:req.body.username,password:req.body.password,pincode:req.body.pincode});
    console.log(obj);
    if(obj){
    res.send({code:1,username:req.body.username});
    }else{
        res.send({code:0}); 
    }
  }else{
    res.send({code:0});
  }

});
app.post("/findUser",async (req,res)=>{
    const result=  await User.find({name:req.body.username});
    console.log(result);
    if(result.length==0){
        res.send({code:0});
    }else{
        if(result[0].password==req.body.password){
            res.send({code:1,username:result[0].name});
          }else{
            res.send({code:0});
          }
     
    }
  
  });

  app.post("/getNewsonpin",async (req,res)=>{
    const list = await Site.find({pincode:req.body.pincode});
res.send({code:1,news:list});
  });
app.post("/getNews", async (req,res)=>{
    const result=  await User.find({name:req.body.username});
    if(result.length==0){
       res.send({code:0});
    }
const list = await Site.find({pincode:result[0].pincode});
res.send({code:1,news:list});
});
app.listen(800,()=>{
    console.log("The server started at port 800");
});



