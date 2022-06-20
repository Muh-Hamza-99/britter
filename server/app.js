require("dotenv").config({ path: "./config.env" });

const express = require("express");
const app = express();

const passport = require("passport");
const session = require("express-session");

const CORS = require("cors");

require("./utilities/google-strategy.js");

const authRouter = require("./routes/auth-routes");

app.use(CORS({ credentials: true, origin: process.env.CLIENT_URL }));

app.use(session({
    secret: process.env.COOKIE_SECRET, 
    cookie: { 
        secure: process.env.NODE_ENV === "production" ? "true" : "auto",
        sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
    },
    resave: false,
    saveUninitialized: false,
}));

app.use(passport.initialize());
app.use(passport.session());

app.use("/auth", authRouter);

const PORT = process.env.PORT || 8000;

app.listen(PORT, console.log(`Server is up and running on port ${PORT}...`));