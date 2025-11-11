import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import alignitLogo from '../../assets/logos/itcsLogo.png'
import './Login.scss'

const Login = () => {
  const navigate = useNavigate()
  const [form, setForm] = useState({ email: '', password: '' })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      document.querySelector('input[name="email"]')?.focus()
    }, 500)
    return () => clearTimeout(timer)
  }, [])

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    if (error) setError('')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.email || !form.password) {
      setError('Please fill in all fields.')
      return
    }
    setLoading(true)
    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      const data = await response.json()
      if (!response.ok) throw new Error(data.message || 'Login failed.')

      localStorage.setItem('token', data.token)
      //alert('✅ ' + data.message)
      navigate('/admin')
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="login-page">
      <div className="login-bg-overlay" />
      <div className="login-container">
        <div className="login-card">
          <div className="card-header">
            <img src={alignitLogo} alt="ITCS Logo" className="login-logo" />
            <p className="card-subtitle">Log in to access your dashboard</p>
          </div>

          {error && <div className="error-message">{error}</div>}

          <form className="login-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Email address"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={form.password}
                onChange={handleChange}
                required
              />
              <div className="forgot-password">
                <a href="/forgot-password">Forgot password?</a>
              </div>
            </div>

            <button type="submit" className="submit-btn" disabled={loading}>
              {loading ? (
                <span className="loading-spinner">Logging in...</span>
              ) : (
                'Login'
              )}
            </button>

            <div className="form-footer">
              <p>
                Don’t have an account?{' '}
                <button
                  type="button"
                  className="link-btn"
                  onClick={() => navigate('/signup')}
                >
                  Sign Up
                </button>
              </p>
              <button
                 type="button"
                 className="back-home-btn"
                 onClick={()=>navigate('/')}
              >
                Back to Home
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
