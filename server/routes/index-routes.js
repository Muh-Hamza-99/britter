const express = require("express");
const router = express.Router();

const protect = require("./../middleware/protect");

router.get("/account", (req, res) => {
    res.status(201).json(req.user);
});

module.exports = router;