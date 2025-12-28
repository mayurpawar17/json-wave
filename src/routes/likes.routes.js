import express from "express";
import { loadJson } from "../utils/loadJson.js";
const likes = loadJson("/data/likes.json");

const router = express.Router();

router.post("/", (req, res) => {
  res.status(201).json({
    success: true,
    message: "Like added (mock)"
  });
});

router.get("/", (req, res) => {
  res.json({ success: true, data: likes });
});

export default router;
