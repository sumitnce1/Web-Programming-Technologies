var fs= require("fs")
var data = fs.readFile("demo.txt", function(err, data){
    console.log(data.toString());
})