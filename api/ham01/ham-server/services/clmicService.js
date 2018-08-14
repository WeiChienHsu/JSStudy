var ClmicModel = require("../models/clmicModel.js");



var getClmics = function () {
    return new Promise((resolve, reject) => {
        ClmicModel.find({}, function(err, clmics) {
            if(err) {
                reject(err);
            } else {
                resolve(clmics);
            }
        });
    });
};

var getClmic = function (id) {
    return new Promise((resolve, reject) => {
        ClmicModel.findOne({ id : id }, function(err, clmic) {
            if (err) {
                reject(err);
            } else {
                resolve(clmic);
            }
        });
    });
};

var addClmic = function (newClmic) {
    return new Promise((resolve, reject) => {
        ClmicModel.findOne({ name : newClmic.name }, function(err, clmic) {
            if (clmic) {
                reject("Clmic already exists");
            } else {
                ClmicModel.countDocuments({}, function(err, num) {
                    newClmic.id = num + 1;
                    var mangoClmic = new ClmicModel(newClmic);
                    mangoClmic.save();
                    resolve(newClmic);
                });
            }
        });
    });
};

module.exports = {
    getClmics: getClmics,
    getClmic: getClmic,
    addClmic: addClmic
};
