//To take user input use "readline" module
var readline = require("readline") 

var inp = readline.createInterface({
	input : process.stdin,
	output: process.stdout
})

inp.question("Enter name ",function(data){
	console.log("Welcome " + data)
	inp.close()
})


