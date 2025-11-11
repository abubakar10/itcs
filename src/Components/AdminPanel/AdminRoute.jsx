import React from 'react'
import { Navigate } from 'react-router-dom'

const AdminRoute = ({ children }) => {
  const token = localStorage.getItem('token')
  const email = localStorage.getItem('email')
  const adminEmails = ['wajeeha.zeeshan@itcs.com.pk', 'wajeeha-zeeshan@outlook.com'] 


  if (!token || !email || !adminEmails.includes(email)) {
    return <Navigate to="/login" />
  }

  return children
}

export default AdminRoute
