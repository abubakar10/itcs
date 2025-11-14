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
    console.log("PATCH request received:", req.params.devId, req.body);

    const devIdNum = Number(req.params.devId);
    const { status, customAuthor } = req.body;

    
    const updateFields = {};
    if (status) {
      if (!["approved", "rejected"].includes(status)) {
        return res.status(400).json({ error: "Invalid status" });
      }
      updateFields.status = status;
    }
    if (customAuthor) {
      updateFields.customAuthor = customAuthor;
    }

    if (Object.keys(updateFields).length === 0) {
      return res.status(400).json({ error: "No valid fields to update" });
    }

    const updated = await BlogStatus.findOneAndUpdate(
      { devId: devIdNum },
      { $set: updateFields },
      { upsert: true, new: true }
    );

    res.json(updated);
  } catch (err) {
    console.error("Update error:", err);
    res.status(500).json({ error: "Failed to update record" });
  }
});

router.get("/approved-ids", async (req, res) => {
  try {
    const approvedBlogs = await BlogStatus.find({ status: "approved" }).select("devId customAuthor");
    res.json(approvedBlogs);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch approved IDs" });
  }
});

export default router;
