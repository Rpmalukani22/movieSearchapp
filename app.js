 var express=require("express");
 var app=express();
 app.set("view engine","ejs");
app.listen(process.env.PORT,process.env.IP,()=>{
   console.log("Server started !!") ;
});