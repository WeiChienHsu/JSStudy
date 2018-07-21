var express = require('express');
var router = express.Router();
var problemService = require("../services/problemService");
var bodyParser = require("body-parser");
var jsonParser = bodyParser.json();

// process HTTP GET request
// add a callback function, with 2 params: req, res
// this is only the router, we want it only does the routing
// we want the computation done in other place, as "service"
// then is a promise
// get a problem list: problems
// send the problem list to res
router.get('/problems', function (req, res) {
  problemService.getProblems()
    .then(problems => res.json(problems));
});

router.get('/problems/:id', function (req, res) {
  var id = req.params.id;
  problemService.getProblem(+id)
    .then(problem => res.json(problem));
});



/*

router.post("/problems", jsonParser, function(req, res) {
  problemService.addProblem(req.body)
    .then(function (problem) {
      res.json(problem);
    }, function (error) {
      res.status(400).send(error);
    });
});

*/


// we defined a router, then we add features on it
// now we need to export it out, so the outside can use it
module.exports = router;
