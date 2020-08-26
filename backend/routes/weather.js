const express = require("express");
const router = express.Router();
const fetch = require("node-fetch");

router.get("/", function (req, res, next) {
  console.log(req.param);
  fetch(
    `https://api.darksky.net/forecast/${process.env.APIKEY}/42.3601,-71.0589`
  )
    .then((res) => res.json())
    .then((json) => {
      res.json(json.daily);
    });
});

router.get("/:lon/:lat", (req, res, next) => {
  console.log(req.params);
  try {
    fetch(
      `https://api.darksky.net/forecast/${process.env.APIKEY}/${req.params.lon}, ${req.params.lat}`
    )
      .then((res) => res.json())
      .then((json) => {
        console.log(json.daily.icon);
        res.json(json);
      });
  } catch (error) {
    console.error(error);
    res.status(400);
  }
});

module.exports = router;

// fetch('https://api.github.com/users/github')
//     .then(res => res.json())
//     .then(json => console.log(json));
