import express from "express";
import { addUser } from "../controllers/user.js";

const router = express.Router();

router.post("/validate", addUser);

export default router;
