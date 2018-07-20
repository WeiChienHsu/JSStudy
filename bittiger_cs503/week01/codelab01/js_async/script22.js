var fs = require("fs");


// var data = fs.readFile("my_file.txt");
var data = fs.readFileSync("my_file.txt");

console.log(data.toString());
/*fs.readFile("my_file.txt", function onFileData(err, data) {
    console.log("");
    console.log(data.toString());
});*/

console.log("reading file  ......")