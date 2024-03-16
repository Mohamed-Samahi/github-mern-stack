import express from "express";
import dotenv from "dotenv"
import cors from "cors"

import userRoutes from "./routes/user.route.js";
import exploreRoutes from "./routes/explore.route.js";

const app = express();

app.use(cors())

dotenv.config();

app.get("/", (request, response) => {
    response.send("server is ready")
})

app.use("/api/user", userRoutes);

app.use("/api/explore", exploreRoutes)

app.listen(5000, () => {
    console.log("app is listening on port 5000")
})