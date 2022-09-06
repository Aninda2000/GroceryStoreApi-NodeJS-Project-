const express= require('express');
const app= express();
const port=8000;
//connect to database
const db=require('./config/mongoose');

//use the body
app.use(express.urlencoded({extended:true}));

app.use('/', require('./routes'));//redirect any routes to routes folder

app.listen(port, function (err) {
  if (err) {
    console.log("error in starting server");
    return;
  }
  console.log("listening to the port ", port);
});