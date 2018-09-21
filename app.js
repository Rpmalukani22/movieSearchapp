 var express=require("express");
 var app=express();
 var moviedata;
 var request=require("request");
 app.set("view engine","ejs");
 app.get('/',(req,res)=>{
     res.render('search');
    });
 app.get('/search',(req,res)=>{
     //console.log(req.query.movieName);
    request("http://www.omdbapi.com/?s="+req.query.movieName+"&apikey=thewdb",(error,response,body)=>{
      var data;
      if(!error && response.statusCode===200)
      {data=JSON.parse(body);
       // res.send(data);
        moviedata=data;
    res.redirect('/results');
      }
      else
      console.log("Something went wrong!!");
    });
    app.get('/results',(req,res)=>{
       res.render('results',{movieData:moviedata.Search});
    });
   
 });
// app.listen(process.env.PORT,process.env.IP,()=>{
//   console.log("Server started !!") ;
// });
app.listen(process.env.PORT || 3000, function(){
  console.log('listening on',app.address().port);
});