import express from "express";
import { signUp } from "./member";

const router = express.Router();

// member
router.post("/member", signUp);

export default router;
