import express from "express";
import { getLikes, getUserProfileAndRepos, likeProfile } from "../controllers/user.controller.js";
import { chechAuthenticated } from "../middleware/checkAuthenticated.js";

const router = express.Router();

router.get("/profile/:username", getUserProfileAndRepos);

router.get("likes/:username", chechAuthenticated, getLikes)

router.post("like/:username", chechAuthenticated, likeProfile)

export default router