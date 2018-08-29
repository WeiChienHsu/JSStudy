var ClmicModel = require("../models/clmicModel.js");

var getClmics = function () {
    // ClmicModel.
    return ClmicModel.find({});
};

var getClmic = function (id) {

     ClmicModel.findOne({ id : id }).then(clMic => this.clmic = clMic);


};

module.exports = {
    getClmics: getClmics,
    getClmic: getClmic
};
