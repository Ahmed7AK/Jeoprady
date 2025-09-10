import express from "express";
import { getClue } from "../controllers/cluesControllers.js";

// Sets up the router for all the different API routes
const router = express.Router();


router.get("/", getClue);

export default router;