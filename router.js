const express = require("express");
const router = express.Router();

router.get("/", function (req, res) {
    res.send("Home Page");
});

router.get("/menu", (req, res) => {
    res.send("Menu Page");
});

router.get("/community", (req, res) => {
    res.send("Community Page");
});

module.exports = router;
