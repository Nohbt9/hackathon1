const Site = require("../Models/web_url");
const sitedata=require("../json/sitedata");

console.log(sitedata.length);
var ctr=0;
//"datestamp","pincode","webpage","num_visits","num_readers"
// for(var i=0;i<sitedata.length;i++){
// Pin.create({pincode:pincode,latitude,longitude,num_pages,num_visits});
// }
// sitedata.map(async ({datestamp,pincode,webpage,num_visits,num_readers})=>{
// ctr++;
//     try{

      
      
//         await Site.create({datestamp:datestamp,pincode: pincode ,webpage:webpage,num_visits: num_visits,num_readers:num_readers});
      
    
//     }catch(e){
//      console.log(e.message);
//     }

// });
async function x(){
   var x= await Site.find({pincode:422209});
   console.log(x);
}
x();
module.exports={};




