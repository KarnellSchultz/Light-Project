const express = require("express");
const router = express.Router();
const fetch = require("node-fetch");

router.get("/", function (req, res, next) {
  console.log(process.env.APIKEY);
  fetch(
    `https://api.darksky.net/forecast/${process.env.APIKEY}/42.3601,-71.0589`
  )
    .then((res) => res.json())
    .then((json) => {
      console.log(json.daily.summary);
      res.json(json.daily);
    });
});

module.exports = router;

// fetch('https://api.github.com/users/github')
//     .then(res => res.json())
//     .then(json => console.log(json));
