var mongoose = require("mongoose");
var ClmicModel = require("./models/clmicModel.js");

/*var ClmicSchema = mongoose.Schema({
    id: Number,
    name: String,
    desc: String,
    Num_Incubation: Number
});*/

var db = mongoose.connect("mongodb://localhost:27017/clmic_db", { useNewUrlParser: true });

// var ClmicModel = mongoose.model('Clmic', ClmicSchema);


ClmicModel.find(function (err, clmics) {
    if (err) return console.error(err);
    console.log(clmics);
    // db.disconnect();
    // process.exit(0);

}).then(function () {
    process.exit(0);
});

// var Person = mongoose.model('Person', yourSchema);
