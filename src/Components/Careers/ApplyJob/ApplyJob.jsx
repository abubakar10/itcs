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
    preferredLocation: '',
    resume: null,           // Now stores File object
    resumeFileName: '',     // For display
    coverLetter: '',
    experience: '',
    linkedin: ''
  })
  const [jobDetails, setJobDetails] = useState(null)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const job = location.state?.job
    if (job) {
      setJobDetails(job)
    } else {
      navigate('/careers')
    }
  }, [location, navigate])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
    if (error) setError('')
    if (success) setSuccess('')
  }

  const handleResumeChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      if (file.type !== 'application/pdf') {
        setError('Please upload a PDF file only.')
        e.target.value = null
        setFormData({ ...formData, resume: null, resumeFileName: '' })
        return
      }
      if (file.size > 10 * 1024 * 1024) { // 10MB limit
        setError('File size must be under 10MB.')
        e.target.value = null
        return
      }
      setFormData({ 
        ...formData, 
        resume: file, 
        resumeFileName: file.name 
      })
      setError('')
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setSuccess('')

    if (!formData.fullName || !formData.email || !formData.phone || !formData.resume) {
      setError('Please fill in all required fields and upload your resume (PDF only).')
      return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      setError('Please enter a valid email address.')
      return
    }

    setLoading(true)

    const submitData = new FormData()
    submitData.append('fullName', formData.fullName)
    submitData.append('email', formData.email)
    submitData.append('phone', formData.phone)
    submitData.append('preferredLocation', formData.preferredLocation)
    submitData.append('resume', formData.resume)
    submitData.append('coverLetter', formData.coverLetter)
    submitData.append('experience', formData.experience)
    submitData.append('linkedin', formData.linkedin)
    submitData.append('jobTitle', jobDetails?.title || 'Unknown Position')
    submitData.append('jobDepartment', jobDetails?.department || '')
    submitData.append('jobLocation', jobDetails?.location || '')

    try {
      const response = await fetch('http://localhost:5000/api/jobs/apply', {
        method: 'POST',
        body: submitData, // FormData automatically sets correct headers
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || 'Failed to submit application.')
      }

      setSuccess('Application submitted successfully! We will contact you soon.')
      
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        preferredLocation: '',
        resume: null,
        resumeFileName: '',
        coverLetter: '',
        experience: '',
        linkedin: ''
      })
      // Reset file input
      document.getElementById('resume').value = ''

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
              Back to Careers
            </button>
            <h1>Apply for Position</h1>
            <div className="job-info-card">
              <h2>{jobDetails.title}</h2>
              <div className="job-meta">
                <span className="department-tag">{jobDetails.department}</span>
                <span className="type-tag">{jobDetails.type}</span>
              </div>
              <div className="job-details">
                <span>Location: {jobDetails.location}</span>
                <span>Experience: {jobDetails.experience}</span>
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
                <label htmlFor="preferredLocation">Preferred Location *</label>
                <input
                  type="text"
                  id="preferredLocation"
                  name="preferredLocation"
                  placeholder="e.g., Karachi, Lahore, Remote"
                  value={formData.preferredLocation}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-row">
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
            </div>

            {/* RESUME UPLOAD - PDF ONLY */}
            <div className="form-group">
              <label htmlFor="resume">Resume/CV (PDF Only) *</label>
              <div className="file-upload-wrapper">
                <input
                  type="file"
                  id="resume"
                  accept=".pdf"
                  onChange={handleResumeChange}
                  required
                />
                <div className="file-upload-area">
                  <p className="upload-text">
                    {formData.resumeFileName ? (
                      <><strong>Selected:</strong> {formData.resumeFileName}</>
                    ) : (
                      <>Click to upload or drag & drop your PDF resume</>
                    )}
                  </p>
                  <p className="upload-hint">PDF only • Max 10MB</p>
                </div>
              </div>
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