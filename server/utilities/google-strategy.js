require("dotenv").config({ path: "../config.env" });

const passport = require("passport");
const { Strategy: GoogleStrategy } = require("passport-google-oauth20");

const pool = require("../database/db");

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK_URL,
}, async (_, __, profile, done) => {
    const account = profile._json;
    try {
        const currentUserQuery = await pool.query("SELECT * FROM users WHERE google_id=$1", [account.sub]);
        let user = {};
        if (currentUserQuery.rows.length === 0) {
            await pool.query("INSERT INTO users (username, image, google_id) VALUES ($1, $2, $3)", [account.name, account.picture, account.sub]);
            const id = await pool.query("SELECT id FROM users WHERE google_id=$1", [account.sub]);
            user = { id, username: account.name, image: account.image };
        } else {
            user = {
                id: currentUserQuery.rows[0].id,
                username: currentUserQuery.rows[0].username,
                image: currentUserQuery.rows[0].image,
            };
        }; 
        done(null, user);
    } catch (error) {
        done(error);
    };
}));

passport.serializeUser((user, done) => done(null, user));

passport.deserializeUser((user, done) => done(null, user));