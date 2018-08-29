var mongoose = require('mongoose');
var ClmicModel = require("./models/clmicModel.js");

mongoose.connect("mongodb://127.0.0.1:27017/clmic_db", { useNewUrlParser: true });

/*//everything is derived from a Schema
var ClmicSchema = mongoose.Schema({
    id: Number,
    name: String,
    desc: String,
    Num_Incubation: Number
});*/

/*// NOTE: methods must be added to the schema before compiling it with mongoose.model()
ClmicSchema.methods.speak = function () {
    var greeting = this.id
        ? "ID: " + this.id + "Name: " + this.name
        + "desc: " + this.desc
        + "Num_Incubation: " + this.Num_Incubation
        : "No such ID.";
    console.log(greeting);
};*/

//compile our schema into a Model.
// var Clmic = mongoose.model('Clmic', ClmicSchema);



var clmic_01 = new ClmicModel({
    id: 1,
    name: "01_clmic",
    desc: "This is the desc of 01 clmic",
    Num_Incubation: 5,
    SP: ["M", "H","R"]
});

clmic_01.save(function (err, clmic) {
    if (err) return console.error(err);
    clmic.speak();
});



var clmic_02 = new ClmicModel({
    id: 2,
    name: "02_clmic",
    desc: "This is the desc of 02 clmic",
    Num_Incubation: 8,
    SP: ["M", "H"]
});

clmic_02.save(function (err, clmic) {
    if (err) return console.error(err);
    clmic.speak().then(function () {
        process.exit(0);
    })
});





/*

ClmicModel.find(function (err, clmics) {
    if (err) return console.error(err);
    console.log(clmics);
});

*/








