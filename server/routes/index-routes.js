const express = require("express");
const router = express.Router();

const pool = require("../database/db");

const protect = require("./../middleware/protect");

router.get("/account", protect, (req, res) => {
    const user = { ...req.user, loggedIn: true };
    res.status(201).json(user);
});

router.post("new_post", protect, async (req, res) => {
    await pool.query("INSERT INTO posts (body, author_id) VALUES ($1, $2)", [req.body.post, req.user.id]);
    res.status(200).send();
});

module.exports = router;