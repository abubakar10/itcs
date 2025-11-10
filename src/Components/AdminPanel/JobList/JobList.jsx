import React, { useState, useEffect } from 'react'
import './JobList.scss'

const JobList = () => {
  const [jobs, setJobs] = useState([])
  const [selectedDepartment, setSelectedDepartment] = useState('All')
  const [loading, setLoading] = useState(false)

  const departments = ['All', 'Engineering', 'Design', 'Security', 'Product', 'Sales', 'Marketing', 'HR']

  useEffect(() => {
    loadJobs()
  }, [])

  const loadJobs = () => {
    setLoading(true)
    try {
      const storedJobs = JSON.parse(localStorage.getItem('jobs') || '[]')
      setJobs(storedJobs)
    } catch (err) {
      console.error('Error loading jobs:', err)
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = (jobId) => {
    if (window.confirm('Are you sure you want to delete this job?')) {
      const updatedJobs = jobs.filter(job => job.id !== jobId)
      localStorage.setItem('jobs', JSON.stringify(updatedJobs))
      setJobs(updatedJobs)
    }
  }

  const filteredJobs = selectedDepartment === 'All' 
    ? jobs 
    : jobs.filter(job => job.department === selectedDepartment)

  return (
    <div className="job-list">
      <div className="job-list-header">
        <div>
          <h1>Job List</h1>
          <p>Manage all posted job positions</p>
        </div>
        <div className="job-count">
          <span>{jobs.length} {jobs.length === 1 ? 'Job' : 'Jobs'}</span>
        </div>
      </div>

      <div className="department-filter">
        {departments.map((dept) => (
          <button
            key={dept}
            className={`filter-btn ${selectedDepartment === dept ? 'active' : ''}`}
            onClick={() => setSelectedDepartment(dept)}
          >
            {dept}
          </button>
        ))}
      </div>

      {loading ? (
        <div className="loading-state">
          <p>Loading jobs...</p>
        </div>
      ) : filteredJobs.length === 0 ? (
        <div className="empty-state">
          <div className="empty-icon">📋</div>
          <h3>No jobs found</h3>
          <p>
            {selectedDepartment === 'All' 
              ? 'Get started by posting your first job!' 
              : `No jobs found in ${selectedDepartment} department.`}
          </p>
        </div>
      ) : (
        <div className="jobs-grid">
          {filteredJobs.map((job) => (
            <div key={job.id} className="job-card">
              <div className="job-card-header">
                <div className="job-meta">
                  <span className="department-tag">{job.department}</span>
                  <span className="type-tag">{job.type}</span>
                </div>
                <button
                  className="delete-btn"
                  onClick={() => handleDelete(job.id)}
                  title="Delete job"
                >
                  🗑️
                </button>
              </div>
              <h3>{job.title}</h3>
              <div className="job-details">
                <div className="detail">
                  <span className="icon">📍</span>
                  <span>{job.location}</span>
                </div>
                <div className="detail">
                  <span className="icon">⏱️</span>
                  <span>{job.experience}</span>
                </div>
              </div>
              <p className="job-description">{job.description}</p>
              <div className="job-footer">
                <span className="job-date">
                  Posted: {new Date(job.createdAt).toLocaleDateString()}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default JobList

