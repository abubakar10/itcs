import React, { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import './ApplyJob.scss'

const ApplyJob = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    resume: '',
    coverLetter: '',
    experience: '',
    linkedin: ''
  })
  const [jobDetails, setJobDetails] = useState(null)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    // Get job details from location state or localStorage
    const job = location.state?.job
    if (job) {
      setJobDetails(job)
    } else {
      // If no job in state, try to get from URL params or redirect back
      navigate('/careers')
    }
  }, [location, navigate])

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    if (error) setError('')
    if (success) setSuccess('')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setSuccess('')

    // Validation
    if (!formData.fullName || !formData.email || !formData.phone || !formData.resume) {
      setError('Please fill in all required fields.')
      return
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      setError('Please enter a valid email address.')
      return
    }

    setLoading(true)

    try {
      const response = await fetch('http://localhost:5000/api/jobs/apply', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          jobTitle: jobDetails?.title || 'Unknown Position',
          jobDepartment: jobDetails?.department || '',
          jobLocation: jobDetails?.location || '',
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || 'Failed to submit application.')
      }

      setSuccess('Application submitted successfully! We will contact you soon.')
      
      // Reset form
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        resume: '',
        coverLetter: '',
        experience: '',
        linkedin: ''
      })

      // Redirect after 3 seconds
      setTimeout(() => {
        navigate('/careers')
      }, 3000)
    } catch (err) {
      setError(err.message || 'Failed to submit application. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  if (!jobDetails) {
    return (
      <div className="apply-job">
        <div className="apply-job-container">
          <p>Loading job details...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="apply-job">
      <div className="apply-job-bg-overlay" />
      <div className="apply-job-container">
        <div className="apply-job-card">
          <div className="card-header">
            <button className="back-btn" onClick={() => navigate('/careers')}>
              ← Back to Careers
            </button>
            <h1>Apply for Position</h1>
            <div className="job-info-card">
              <h2>{jobDetails.title}</h2>
              <div className="job-meta">
                <span className="department-tag">{jobDetails.department}</span>
                <span className="type-tag">{jobDetails.type}</span>
              </div>
              <div className="job-details">
                <span>📍 {jobDetails.location}</span>
                <span>⏱️ {jobDetails.experience}</span>
              </div>
            </div>
          </div>

          {error && <div className="alert alert-error">{error}</div>}
          {success && <div className="alert alert-success">{success}</div>}

          <form className="apply-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="fullName">Full Name *</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  placeholder="John Doe"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="john.doe@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="phone">Phone Number *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="+92 300 1234567"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="linkedin">LinkedIn Profile (Optional)</label>
                <input
                  type="url"
                  id="linkedin"
                  name="linkedin"
                  placeholder="https://linkedin.com/in/yourprofile"
                  value={formData.linkedin}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="experience">Years of Experience *</label>
              <input
                type="text"
                id="experience"
                name="experience"
                placeholder="e.g., 3+ years"
                value={formData.experience}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="resume">Resume/CV (Paste link or describe) *</label>
              <textarea
                id="resume"
                name="resume"
                placeholder="Paste your resume link (Google Drive, Dropbox, etc.) or provide a brief summary of your qualifications..."
                value={formData.resume}
                onChange={handleChange}
                rows="4"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="coverLetter">Cover Letter (Optional)</label>
              <textarea
                id="coverLetter"
                name="coverLetter"
                placeholder="Tell us why you're interested in this position and what makes you a great fit..."
                value={formData.coverLetter}
                onChange={handleChange}
                rows="6"
              />
            </div>

            <div className="form-actions">
              <button type="button" className="cancel-btn" onClick={() => navigate('/careers')}>
                Cancel
              </button>
              <button type="submit" className="submit-btn" disabled={loading}>
                {loading ? 'Submitting...' : 'Submit Application'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ApplyJob

