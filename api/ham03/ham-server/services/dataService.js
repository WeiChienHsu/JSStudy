var ClmicModel = require("../models/clmicModel.js");

var getClmics = function () {
    // ClmicModel.
    return ClmicModel.find({});
};

var getClmic = function (id) {

     // ClmicModel.findOne({ id : id }).then(clMic => this.clmic = clMic);

    var obj;
    ClmicModel.findOne({ id : id }, function(err, objhere) {
        if (err) throw err;

        // object of the user
        console.log(objhere.id);
        console.log(objhere.name);
        // console.log(obj.desc);
        // console.log(obj.SP);
        obj = objhere;

    });
    return obj;

};


module.exports = {
    getClmics: getClmics,
    getClmic: getClmic
};
