// routes/jobs.js
import express from 'express';
import Job from '../models/job.js';

const router = express.Router();

// Create a new job
router.post('/', async (req, res) => {
  try {
    const { title, department, type, location, experience, description } = req.body;

    if (!title || !department || !location) {
      return res.status(400).json({ message: 'Title, department, and location are required' });
    }

    const newJob = new Job({
      title,
      department,
      type: type || 'Full-time',
      location,
      experience: experience || 'Not specified',
      description: description || '',
    });

    const savedJob = await newJob.save();
    res.status(201).json({ message: 'Job created successfully', job: savedJob });
  } catch (err) {
    console.error('Error creating job:', err);
    res.status(500).json({ message: 'Failed to create job' });
  }
});

// Get all jobs
router.get('/', async (req, res) => {
  try {
    const jobs = await Job.find().sort({ createdAt: -1 });
    res.json(jobs);
  } catch (err) {
    console.error('Error fetching jobs:', err);
    res.status(500).json({ message: 'Failed to fetch jobs' });
  }
});

// Delete a job by ID
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const job = await Job.findById(id);
    if (!job) return res.status(404).json({ message: 'Job not found' });

    await Job.findByIdAndDelete(id);
    res.json({ message: 'Job deleted successfully' });
  } catch (err) {
    console.error('Error deleting job:', err);
    res.status(500).json({ message: 'Failed to delete job' });
  }
});

export default router;
