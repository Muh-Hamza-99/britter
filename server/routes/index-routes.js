const express = require("express");
const router = express.Router();

router.get("/account", (req, res) => {
    res.status(201).json(req.user);
});

module.exports = router;