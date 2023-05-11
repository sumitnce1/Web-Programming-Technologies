const fs = require('fs');

exports.tabl=function(num, filename) {
  var table = "";
  for (var i = 1; i <= 10; i++) {
    table += `${num} x ${i} = ${num * i}\n`;
  }
  fs.writeFileSync(filename, table);
}