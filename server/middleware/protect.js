const protect = (req, res, next) => {
    if (req.user) next();
    res.status(403).json({ loggedIn: false });
};

module.exports = protect;