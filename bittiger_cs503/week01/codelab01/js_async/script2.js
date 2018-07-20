var fs = require("fs");

fs.readFile("my_file.txt", function onFileData(err, data) {
    console.log("");
    console.log(data.toString());
});

console.log("reading file......")