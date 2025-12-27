import express from "express";
import { loadJson } from "../utils/loadJson.js";
const users = loadJson("/data/users.json");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ success: true, data: users });
});

router.get("/:id", (req, res) => {
  const user = users.find(u => u.id === Number(req.params.id));
  res.json({ success: true, data: user });
});

export default router;
