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

router.get("/feed", protect, async (req, res) => {
    const { cursor } = req.query;
    const posts = await pool.query("SELECT u.username, u.image, p.body FROM users u INNER JOIN posts p ON u.id = p.author_id ORDER p.id DESC LIMIT 5 OFFSET $1", [cursor]);
    res.status(200).json({ cursor: cursor * 1 + 5, posts: posts.rows });
});

router.get("/my_posts", protect, async (req, res) => {
    const { cursor } = req.query;
    const posts = await pool.query("SELECT u.username, u.image, p.body FROM users u INNER JOIN posts p ON u.id = p.author_id WHERE p.author_id = $1 ORDER p.id DESC LIMIT 5 OFFSET $2", [req.user.id, cursor]);
    res.status(200).json({ cursor: cursor * 1 + 5, posts: posts.rows });
});

module.exports = router;