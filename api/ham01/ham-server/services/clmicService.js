var ClmicModel = require("../models/clmicModel.js");

/*var clmics = [
    {     id: 1,
        name: "CL-mic-Client-001",
        desc: "This is the 1st desc of my CL-mic",
        Num_Incubation: 4
    },
    {     id: 2,
        name: "CL-mic-Client-002",
        desc: "This is the 2nd desc of my CL-mic",
        Num_Incubation: 24
    },
];*/



var getClmics = function () {
    return new Promise((resolve, reject) => {
        // resolve(clmics);
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
                    //newClmic is an javascript object
                    //mangoClmicis an mongodb object
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
