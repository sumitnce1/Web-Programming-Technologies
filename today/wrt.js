var fs = require("fs");

fs.readFile("demo.txt", function(err, data) {
  var arr = data.toString().split("");
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += Number(arr[i]);
  }
  console.log(sum);
});