import express, { response } from "express";
import dotenv from "dotenv"
import cors from "cors"
import passport from "passport";
import session from "express-session";
import path from "path"

import "./passport/github.auth.js"

import authRoutes from "./routes/auth.route.js";
import userRoutes from "./routes/user.route.js";
import exploreRoutes from "./routes/explore.route.js";

import connectToMongoDb from "./db/connectMongoDB.js";

dotenv.config();

const app = express();

const port = process.env.PORT || 5000;

const __dirname = path.resolve()

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true  // Enable credentials (cookies, authorization headers, etc)
}));

app.use(session({ secret: 'keyboard cat', resave: false, saveUninitialized: false }));
// Initialize Passport!  Also use passport.session() middleware, to support
// persistent login sessions (recommended).
app.use(passport.initialize());
app.use(passport.session());


app.use("/api/auth", authRoutes);

app.use("/api/user", userRoutes);

app.use("/api/explore", exploreRoutes)

app.use(express.static(path.join(__dirname, "/front-end/dist")))

app.get("*", (request, response) => {
    response.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});

app.listen(port, () => {
    console.log(`app is running on http://localhost:${port}`)
    connectToMongoDb();
})