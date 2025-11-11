import express from "express";
import BlogStatus from "../models/blog.js";

const router = express.Router();


router.get("/statuses", async (req, res) => {
  try {
    const statuses = await BlogStatus.find({});
    res.json(statuses); 
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch statuses" });
  }
});

router.patch("/:devId/status", async (req, res) => {
  try {
    const devIdNum = Number(req.params.devId); 
    const { status } = req.body;

    if (!["approved", "rejected"].includes(status)) {
      return res.status(400).json({ error: "Invalid status" });
    }

    const updated = await BlogStatus.findOneAndUpdate(
      { devId: devIdNum },
      { status },
      { upsert: true, new: true }
    );

    res.json(updated);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to update status" });
  }
});


router.get("/statuses", async (req, res) => {
  try {
    const statuses = await BlogStatus.find({});
    res.json(statuses); 
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch statuses" });
  }
});


export default router;
