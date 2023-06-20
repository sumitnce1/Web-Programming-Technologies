var express = require("express")
var bodyParser = require("body-parser")
var app = express()

var movie=[]

app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended:true})) // convert urlencoded to object
app.use(bodyParser.json()) // convert json data to object

app.get("/", (req, res) =>{
    // res.send("This is / Path");
    res.sendFile(__dirname + "/public/home.html");
});
// addition.html
app.post("/add",(req,res)=>{
	var data = req.body;
	console.log(data);
	var result = Number(data.num1) + Number(data.num2);
	res.send(result.toString())
});
//substraction.html
app.post("/sub",(req,res)=>{
	var data = req.body;
	console.log(data);
	var result = Number(data.num1) - Number(data.num2);
	res.send(result.toString())
});
//multiplication.html
app.post("/mul",(req,res)=>{
	var data = req.body;
	console.log(data);
	var result = Number(data.num1) * Number(data.num2);
	res.send(result.toString())
});
//division.html
app.post("/div",(req,res)=>{
	var data = req.body;
	console.log(data);
	var result = Number(data.num1) / Number(data.num2);
	res.send(result.toString())
});


app.post("/reg",(req,res)=>{
	var data = req.body
	console.log(data)
	movie.push(data)
	res.send("Got data")
})

app.post("/data",function(req,res){
	res.send(movie)
})
app.post("/movi",(req,res)=>{
	var data = req.body
	console.log(data)
	movie.push(data)
	res.send("Got data")
})

app.post("/data",function(req,res){
	res.send(movie)
})

app.listen(8000, ()=>{
	console.log("Server running at 8000")
})