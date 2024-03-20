import express from "express";
import { explorePopularRepos } from "../controllers/explore.controller.js";
import { chechAuthenticated } from "../middleware/checkAuthenticated.js";

const router = express.Router();

router.get("/repos/:language", chechAuthenticated, explorePopularRepos)

export default router;