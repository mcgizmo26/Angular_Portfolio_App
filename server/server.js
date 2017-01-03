// ********************** Dependancies *****************************************
var express = require('express');


var app = express();
// ********************** Middle Ware ******************************************
app.use(express.static('../public'));

// ********************** node server ******************************************
var port = 3000;
app.listen(3000, function(){
  console.log("Successfully listening on : 3000");
})
