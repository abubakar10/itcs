import mongoose from 'mongoose';

const jobApplicationSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  preferredLocation: {
    type: String,
    required: true
  },
  experience: {
    type: String,
    required: true
  },
  linkedin: {
    type: String
  },
  coverLetter: {
    type: String
  },
  resumePath: {
    type: String,
    required: true
  },
  resumeOriginalName: {
    type: String
  },
  jobTitle: {
    type: String,
    default: 'Not Specified'
  },
  jobDepartment: {
    type: String
  },
  jobLocation: {
    type: String
  },
  status: {
    type: String,
    enum: ['Pending', 'Reviewed', 'Interview', 'Rejected', 'Hired'],
    default: 'Pending'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const JobApplication = mongoose.model('JobApplication', jobApplicationSchema);
export default JobApplication;
