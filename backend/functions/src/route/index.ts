import express from "express";
import { signUp } from "./member";

const router = express.Router();

// member
router.post("/signup", signUp);

export default router;
