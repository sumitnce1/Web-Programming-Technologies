var express = require("express");
var app = express();

app.get("/", function (req, res) {
  res.send("This is / Path");
});

app.get("/data", function(req, res){
    res.send("This is /data")         
})
app.get("/xyz", function(req, res){
    res.send("This is /xyz")
    
})

app.listen(8000, function () {
  console.log("Server is running at 8000");
});
