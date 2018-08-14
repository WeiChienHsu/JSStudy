var express = require('express');
var router = express.Router();
var clmicService = require("../services/clmicService");
var bodyParser = require("body-parser");
var jsonParser = bodyParser.json();


router.get('/cl-mic', function (req, res) {
    clmicService.getClmics()
    .then(
        // clmics => res.json(clmics)
    console.log(clmics.toString())

    );

});

router.get('/cl-mic/:id', function (req, res) {
  var id = req.params.id;
    clmicService.getClmic(+id)
    .then(clmic => res.json(clmic));
});




router.post("/cl-mic", jsonParser, function(req, res) {
    clmicService.addClmic(req.body)
    .then(function (clmic) {
      res.json(clmic);
    }, function (error) {
      res.status(400).send("Clmic name already exists");
    });
});



// we defined a router, then we add features on it
// now we need to export it out, so the outside can use it
module.exports = router;
