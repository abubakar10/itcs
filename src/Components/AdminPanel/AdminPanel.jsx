import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import PostJob from './PostJob/PostJob'
import JobList from './JobList/JobList'
import BlogApproval from './BlogApproval/BlogApproval';
import './AdminPanel.scss'
import Blog from '../Blog/Blog';
import { Routes, Route } from 'react-router-dom'
import AdminBlogDetail from './BlogApproval/AdminBlogDetail'


const AdminPanel = () => {
  const [activeTab, setActiveTab] = useState('post-job')
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem('token')
    navigate('/login')
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
            <span className="nav-icon">📝</span>
            <span>Post a Job</span>
          </button>
          <button
            className={`nav-item ${activeTab === 'job-list' ? 'active' : ''}`}
            onClick={() => setActiveTab('job-list')}
          >
            <span className="nav-icon">📋</span>
            <span>Job List</span>
          </button>
          <button
            className={`nav-item ${activeTab === 'blog-approval' ? 'active' : ''}`}
            onClick={() => setActiveTab('blog-approval')}
          >
            <span className="nav-icon">📰</span>
            <span>Blog Approval</span>
          </button>
        </nav>
        <div className="sidebar-footer">
          <button className="logout-btn" onClick={handleLogout}>
            <span className="nav-icon">🚪</span>
            <span>Logout</span>
          </button>
        </div>
      </div>
      <div className="admin-content">
        {activeTab === 'post-job' && <PostJob />}
        {activeTab === 'job-list' && <JobList />}
        {activeTab === 'blog-approval' && <BlogApproval/>}
     
      </div>
    </div>
  )
}

export default AdminPanel

