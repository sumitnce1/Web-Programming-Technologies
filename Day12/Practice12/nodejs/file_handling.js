//for file handling use "fs" inbuilt module
var fs = require("fs")

/*
    readFileSync(filename) -> returs Buffer data so use .toString() function to convert to string
    writeFileSync(filename,data) // data must be in string format
    appendFileSync(filename, data) // data must be in string format
*/

var data = fs.readFileSync("demo.txt")
console.log(data.toString())

var str = "This is some data"
fs.writeFileSync("demo1.txt", str)
//If file does not exist writeFileSync and appendFileSync will create it
//If exist writeFileSync overwrites the data of the file
//and appendFileSync append data at the end of file

var str = "\nThis is new data"
fs.appendFileSync("demo1.txt", str)