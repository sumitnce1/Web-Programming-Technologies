var readline = require("readline")

var inp= readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

inp.question("Enter number 1: ", function(num1){
    inp.question("Enter number 2: ", function(num2){
        var result = Number(num1)+ Number (num2)
        console.log(result);
        inp.close();
    })
})
    
