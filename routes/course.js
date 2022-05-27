import express from "express";
import { addCourse } from "../controllers/courses.js";

const router = express.Router();

router.post("/add", addCourse);

export default router;
