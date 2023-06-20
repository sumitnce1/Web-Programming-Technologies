var express = require("express");
var bodyParser = require("body-parser")  // install to npm install body-parser
var app = express();

app.use(express.static("public")) // serve the static files form public folder
app.use(bodyParser.urlencoded({extended: true})) // convert urlecoded to 
app.use(bodyParser.json()) // convert json data to object

var users =[]

app.get("/", (req, res)=>{
    res.send("This is / path")
})
app.post("/add",function(req,res){
    var data=req.body;
    console.log(data);
    var result=Number(data.num1)+Number(data.num2);
    res.send(result.toString())
});
app.post("/reg",function(req,res){
	var data = req.body
	console.log(data)
	users.push(data)
	res.send("Got data")
})

app.post("/data",function(req,res){
	res.send(users)
})

app.listen(8000, ()=>{
	console.log("Server running at 8000")
})