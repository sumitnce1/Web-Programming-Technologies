var http = require("http")

var server = http.createServer(function(req,res){
	console.log("Got request")
	res.write("HI from server")
	res.write("Data")
	res.end()
})

server.listen(5000,function(){
	console.log("Server running at 5000")
})
6
