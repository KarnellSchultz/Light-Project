var express = require("express");
var router = express.Router();

let user = {
  name: "NELLZUS",
  cool: true,
};

/* GET users listing. */
router.get("/", function (req, res, next) {
  console.log(user);
  console.log(process.env.APIKEY);
  res.json(user);
});

module.exports = router;
