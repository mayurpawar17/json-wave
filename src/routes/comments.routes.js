import express from "express";
import { loadJson } from "../utils/loadJson.js";
const comments = loadJson("/data/comments.json");

const router = express.Router();

router.get("/", (req, res) => {
  const { postId } = req.query;
  const data = postId
    ? comments.filter(c => c.postId === Number(postId))
    : comments;

  res.json({ success: true, data });
});

export default router;
