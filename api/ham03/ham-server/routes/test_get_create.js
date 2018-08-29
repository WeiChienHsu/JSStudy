var express = require('express');
var router = express.Router();
var clmicService = require("../services/clmicService");
var bodyParser = require("body-parser");
var jsonParser = bodyParser.json();
var createExcel = require("../py/run_python.js");

var mongoose = require("mongoose");
var ClmicModel = require("../models/clmicModel.js");
var dataService = require("../services/dataService");





router.get('/cl-mic/:id', function (req, res) {
/*    ClmicModel.find(function (err, clmics) {
        if (err) return console.error(err);
        // clmic = clmicService.getClmic(+id);
        var clmic = dataService.getClmic(+id);

        console.log(clmic);
    });*/
    // '01_clmic'

    // console.log(typeof +req.params.id);


    ClmicModel.findOne({ id : +req.params.id }, function(err, obj) {
        if (err) throw err;

        // object of the user
        // console.log(typeof obj.id);
        createExcel(obj.id);

        // iD = obj.id;
        // console.log(obj.name);
        // console.log(obj.desc);
        // console.log(obj.SP);
    });

    // console.log(clmic);

    // var clmic = dataService.getClmic(+req.params.id);
    // console.log(clmic);

    // var clmic = ClmicModel.findOne({ id: id });

    // ClmicModel.findOne({ id : id }).then(clMic => this.clmic = clMic);

    // dataService.getClmic(+id);

    // console.log(clmic.get);
    // console.log(typeof clmic);

    // var data = [1,2,3,4,5,6,7,8,9];
    // createExcel(data);

    // console.log(req);
    // var id = req.params.id;
    clmicService.getClmic(+req.params.id)
        .then(clmic => res.json(clmic));

});


module.exports = router;
