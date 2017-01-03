// ********************** Dependancies *****************************************
var express = require('express');


var app = express();
// ********************** Middle Ware ******************************************
app.use(express.static('../public'));

// ********************** node server ******************************************
var port = 80;
app.listen(80, function(){
  console.log("Successfully listening on : 80");
})
