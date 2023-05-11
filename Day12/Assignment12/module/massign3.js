var fs = require("fs");

exports.dumm=function(filePath, str ) {
    fs.writeFileSync(filePath, str);
}

