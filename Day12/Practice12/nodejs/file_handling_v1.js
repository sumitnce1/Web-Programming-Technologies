var fs = require("fs")

var data = fs.readFileSync("demo.txt")
data = data.toString()
var arr = data.split("|")
console.log(arr)