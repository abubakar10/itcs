import express from 'express'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import User from '../models/userModel.js'
import dotenv from 'dotenv'

dotenv.config()
const router = express.Router()


// Login route
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body

    // Check user
    const user = await User.findOne({ email })
    if (!user)
      return res.status(400).json({ message: 'Invalid email or password' })

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch)
      return res.status(400).json({ message: 'Invalid email or password' })

    // Generate token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    })

    res.status(200).json({ message: 'Login successful', token, user })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Server error' })
  }
})

export default router