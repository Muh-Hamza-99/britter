const express = require("express");
const router = express.Router();

const protect = require("./../middleware/protect");

router.get("/account", protect, (req, res) => {
    const user = { ...req.user, loggedIn: true };
    res.status(201).json(user);
});

module.exports = router;