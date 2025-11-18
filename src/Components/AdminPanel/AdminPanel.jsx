import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import PostJob from './PostJob/PostJob'
import JobList from './JobList/JobList'
import BlogApproval from './BlogApproval/BlogApproval';
import './AdminPanel.scss'
import Blog from '../Blog/Blog';
import { Routes, Route } from 'react-router-dom'
import AdminBlogDetail from './BlogApproval/AdminBlogDetail'
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard, faList, faBlog, faArrowRightFromBracket, faUsers } from '@fortawesome/free-solid-svg-icons';



const AdminPanel = () => {
  const [activeTab, setActiveTab] = useState('post-job')
  const [message, setMessage] = useState('')
  const [fullName, setFullName] = useState('')
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('email')
    navigate('/')
  }
  const handleAddAdmin = async (e) => {
    e.preventDefault()
    const token = localStorage.getItem('token')

    try {
      const res = await axios.post(
        'http://localhost:5000/api/admin/add-user',
        {
          fullName,
          username,
          email,
          password,
          role: 'admin',
          isAdmin: true,
        },
        { headers: { Authorization: `Bearer ${token}` } }
      )

      setMessage(res.data.message)
      setFullName('')
      setUsername('')
      setEmail('')
      setPassword('')
    } catch (err) {
      setMessage(err.response?.data?.message || 'Error adding admin')
    }
  }


  return (
    <div className="admin-panel">
      <div className="admin-sidebar">
        <div className="sidebar-header">
          <h2>Admin Panel</h2>

        </div>



        <nav className="sidebar-nav">

          <button
            className={`nav-item ${activeTab === 'post-job' ? 'active' : ''}`}
            onClick={() => setActiveTab('post-job')}
          >
            <span className="nav-icon"><FontAwesomeIcon icon={faAddressCard} /></span>
            <span className="nav-text">Post a Job</span>
          </button>

          <button
            className={`nav-item ${activeTab === 'job-list' ? 'active' : ''}`}
            onClick={() => setActiveTab('job-list')}
          >
            <span className="nav-icon"><FontAwesomeIcon icon={faList} /></span>
            <span className="nav-text">Job List</span>
          </button>

          <button
            className={`nav-item ${activeTab === 'blog-approval' ? 'active' : ''}`}
            onClick={() => setActiveTab('blog-approval')}
          >
            <span className="nav-icon"><FontAwesomeIcon icon={faBlog} /></span>
            <span className="nav-text">Blog Approval</span>
          </button>

          <button
            className={`nav-item ${activeTab === 'add-admin' ? 'active' : ''}`}
            onClick={() => setActiveTab('add-admin')}
          >
            <span className="nav-icon"><FontAwesomeIcon icon={faUsers} /></span>
            <span className="nav-text">Add Admin</span>
          </button>
        </nav>
        <div className="sidebar-footer">
          <button className="logout-btn" onClick={handleLogout}>
            <span className="nav-icon"><FontAwesomeIcon icon={faArrowRightFromBracket} /></span>
            <span className="nav-text">Logout</span>
          </button>
        </div>
      </div>

      <div className="admin-content">
        {activeTab === 'post-job' && <PostJob />}
        {activeTab === 'job-list' && <JobList />}
        {activeTab === 'blog-approval' && <BlogApproval />}
        {activeTab === 'add-admin' && (
          <div className="add-admin-form">
            <h3>Add New Admin</h3>
            {message && (
              <div
                className={`alert ${message.toLowerCase().includes('error') ? 'alert-error' : 'alert-success'
                  }`}
              >
                {message}
              </div>
            )}
            <div className="post-job-card">
              <form onSubmit={handleAddAdmin}>
                <div className="form-row">
                  <div className="form-group">
                    <label>Full Name</label>
                    <input
                      type="text"
                      placeholder="Full Name"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Username</label>
                    <input
                      type="text"
                      placeholder="Username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Email</label>
                    <input
                      type="email"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Password</label>
                    <input
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="form-actions">
                  <button type="submit">Add Admin</button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default AdminPanel
