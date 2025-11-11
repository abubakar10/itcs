import express from 'express'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import User from '../models/userModel.js'
import dotenv from 'dotenv'

dotenv.config()
const router = express.Router()

// Register route
router.post('/signup', async (req, res) => {
  try {
    const { fullName, username, email, password } = req.body // remove role from destructuring

    
    const existingUser = await User.findOne({ email })
    if (existingUser) {
      return res.status(400).json({ message: 'Email already registered' })
    }

    
    const hashedPassword = await bcrypt.hash(password, 10)

    
    const ADMIN_EMAILS = ['wajeeha.zeeshan@itcs.com.pk', 'wajeeha-zeeshan@outlook.com'] 

    
    const role = ADMIN_EMAILS.includes(email) ? 'Admin' : 'User'

    
    const newUser = new User({
      fullName,
      username,
      email,
      password: hashedPassword,
      role, 
    })

    await newUser.save()
    res.status(201).json({ message: 'User registered successfully' })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Server error' })
  }
})


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
