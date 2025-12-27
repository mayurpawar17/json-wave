import express from "express";

import { loadJson } from "../utils/loadJson.js";

const router = express.Router();

const posts = loadJson("/data/posts.json");

// GET all posts
router.get("/", (req, res) => {
  res.json({
    success: true,
    data: posts,
  });
});

// GET post by ID
router.get("/:id", (req, res) => {
  const post = posts.find((p) => p.id === Number(req.params.id));
  if (!post) {
    return res.status(404).json({ success: false, message: "Post not found" });
  }
  res.json({ success: true, data: post });
});

// CREATE post (mock)
router.post("/", (req, res) => {
  res.status(201).json({
    success: true,
    data: { id: 101, ...req.body },
    message: "Post created (mock)",
  });
});

// UPDATE post (mock)
router.put("/:id", (req, res) => {
  res.json({
    success: true,
    data: { id: Number(req.params.id), ...req.body },
    message: "Post updated (mock)",
  });
});

// DELETE post (mock)
router.delete("/:id", (req, res) => {
  res.json({
    success: true,
    message: "Post deleted (mock)",
  });
});

export default router;
