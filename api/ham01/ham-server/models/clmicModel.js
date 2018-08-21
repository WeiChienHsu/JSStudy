var mongoose = require("mongoose");

var ClmicSchema = mongoose.Schema({
    id: Number,
    name: String,
    desc: String,
    Num_Incubation: Number,
    SP: [String]
});

// NOTE: methods must be added to the schema before compiling it with mongoose.model()
ClmicSchema.methods.speak = function () {
    var text_SP = "";
    for (var i = 0; i < SP.length; i++) {
        text_SP += SP[i] + " ";
    }


    var greeting = this.id
        ? "ID: " + this.id + "Name: " + this.name
        + "desc: " + this.desc
        + "Num_Incubation: " + this.Num_Incubation
        + "SP: " + text_SP
        : "No such ID.";
    console.log(greeting);
};


var clmicModel = mongoose.model("ClmicModel", ClmicSchema);


module.exports = clmicModel;
