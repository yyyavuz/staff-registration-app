var express = require('express');
var router = express.Router();

var mongoose = require("mongoose");
var User = mongoose.model("User");

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('List');
});

router.get("/create", function (req, res, next){
  res.render("create");
})

router.post("/create", function (req, res, next){
  res.send("Data Saved")
})

router.get("/delete/:id", function (req, res, next){
  res.send("Data deleted")
})

module.exports = router;
