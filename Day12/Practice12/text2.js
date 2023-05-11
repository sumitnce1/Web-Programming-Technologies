var fs= require("fs")

console.log("hii");
fs.readFile("Demo.txt", function(err, data){
    fs.writeFile("demo1.txt", data.toString(), function(err, data){
        console.log("Writing done");
    })
})
console.log("hii3");