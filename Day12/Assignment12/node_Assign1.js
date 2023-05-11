// 1.Write a code to print fibonacci number till 100
var res = require("./module/massign1");
var fs = require("fs");

var output = res.fibo();
fs.writeFile("Assign1.txt", output,function(err, output){
    console.log("done");
});
