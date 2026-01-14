import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './JobApplications.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faFilePdf,
    faEnvelope,
    faPhone,
    faMapMarkerAlt,
    faBriefcase,
    faCheckCircle,
    faTimesCircle,
    faHourglassHalf,
    faLink
} from '@fortawesome/free-solid-svg-icons'

const JobApplications = () => {
    const [applications, setApplications] = useState([])
    const [loading, setLoading] = useState(true)
    const [filterStatus, setFilterStatus] = useState('All')

    useEffect(() => {
        fetchApplications()
    }, [])

    const fetchApplications = async () => {
        try {
            const res = await axios.get('http://localhost:5000/api/jobs/applications')
            setApplications(res.data)
        } catch (err) {
            console.error('Error fetching applications:', err)
        } finally {
            setLoading(false)
        }
    }

    const handleStatusUpdate = async (id, newStatus) => {
        try {
            await axios.patch(`http://localhost:5000/api/jobs/applications/${id}/status`, { status: newStatus })
            setApplications(prev => prev.map(app =>
                app._id === id ? { ...app, status: newStatus } : app
            ))
        } catch (err) {
            alert('Failed to update status')
        }
    }

    const getStatusColor = (status) => {
        switch (status) {
            case 'Pending': return 'status-pending'
            case 'Reviewed': return 'status-reviewed'
            case 'Interview': return 'status-interview'
            case 'Rejected': return 'status-rejected'
            case 'Hired': return 'status-hired'
            default: return ''
        }
    }

    const filteredApps = filterStatus === 'All'
        ? applications
        : applications.filter(app => app.status === filterStatus)

    return (
        <div className="job-applications">
            <div className="applications-header">
                <div>
                    <h2>Job Applications</h2>
                    <p>Manage and track incoming job applications</p>
                </div>
                <div className="stats">
                    <div className="stat-item total">
                        <span className="count">{applications.length}</span>
                        <span className="label">Total</span>
                    </div>
                    <div className="stat-item pending">
                        <span className="count">{applications.filter(a => a.status === 'Pending').length}</span>
                        <span className="label">Pending</span>
                    </div>
                </div>
            </div>

            <div className="controls">
                <select
                    value={filterStatus}
                    onChange={(e) => setFilterStatus(e.target.value)}
                    className="status-filter"
                >
                    <option value="All">All Statuses</option>
                    <option value="Pending">Pending</option>
                    <option value="Reviewed">Reviewed</option>
                    <option value="Interview">Interview</option>
                    <option value="Rejected">Rejected</option>
                    <option value="Hired">Hired</option>
                </select>
            </div>

            {loading ? (
                <div className="loading">Loading applications...</div>
            ) : filteredApps.length === 0 ? (
                <div className="empty-state">No applications found.</div>
            ) : (
                <div className="applications-list">
                    {filteredApps.map(app => (
                        <div key={app._id} className="application-card">
                            <div className="card-header">
                                <div className="applicant-main">
                                    <h3>{app.fullName}</h3>
                                    <span className="job-role">{app.jobTitle}</span>
                                    {app.jobDepartment && <span className="dept-tag">{app.jobDepartment}</span>}
                                </div>
                                <div className="status-actions">
                                    <select
                                        value={app.status}
                                        onChange={(e) => handleStatusUpdate(app._id, e.target.value)}
                                        className={`status-select ${getStatusColor(app.status)}`}
                                    >
                                        <option value="Pending">Pending</option>
                                        <option value="Reviewed">Reviewed</option>
                                        <option value="Interview">Interview</option>
                                        <option value="Rejected">Rejected</option>
                                        <option value="Hired">Hired</option>
                                    </select>
                                </div>
                            </div>

                            <div className="card-body">
                                <div className="info-grid">
                                    <div className="info-item">
                                        <FontAwesomeIcon icon={faEnvelope} className="icon" />
                                        <a href={`mailto:${app.email}`}>{app.email}</a>
                                    </div>
                                    <div className="info-item">
                                        <FontAwesomeIcon icon={faPhone} className="icon" />
                                        <span>{app.phone}</span>
                                    </div>
                                    <div className="info-item">
                                        <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" />
                                        <span>{app.preferredLocation}</span>
                                    </div>
                                    <div className="info-item">
                                        <FontAwesomeIcon icon={faBriefcase} className="icon" />
                                        <span>{app.experience}</span>
                                    </div>
                                    {app.linkedin && (
                                        <div className="info-item">
                                            <FontAwesomeIcon icon={faLink} className="icon" />
                                            <a href={app.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn Profile</a>
                                        </div>
                                    )}
                                </div>

                                {app.coverLetter && (
                                    <div className="cover-letter">
                                        <h4>Cover Letter</h4>
                                        <p>{app.coverLetter}</p>
                                    </div>
                                )}

                                <div className="card-footer">
                                    <div className="timestamp">
                                        Applied on {new Date(app.createdAt).toLocaleDateString()} at {new Date(app.createdAt).toLocaleTimeString()}
                                    </div>
                                    <a
                                        href={app.resumePath}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="resume-btn"
                                    >
                                        <FontAwesomeIcon icon={faFilePdf} /> View Resume
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default JobApplications
