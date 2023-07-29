const Pin = require("../Models/pin");
const pindata=require("../json/pindata");

console.log(pindata.length);
var ctr=0;

// for(var i=0;i<pindata.length;i++){
// Pin.create({pincode:pincode,latitude,longitude,num_pages,num_visits});
// }
// pindata.map(async ({pincode,latitude,longitude,num_pages,num_visits})=>{
// ctr++;
//     try{

//        const res= await Pin.find({pincode:pincode});
//        if(res.length==0){
//         await Pin.create({pincode: pincode ,latitude:latitude,longitude:longitude,num_pages:num_pages,num_visits: num_visits});
//        }else{
//       coole.log("already exists");
//        }
    
//     }catch(e){
//      console.log(e.message);
//     }

// });
// async function x(){
//    var x= await Pin.find({pincode:422209});
//    console.log(x);
// }
// x();
module.exports={};




