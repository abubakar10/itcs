import express from 'express'
import jwt from 'jsonwebtoken'
import User from '../models/userModel.js'
import bcrypt from 'bcryptjs'
import { protect, admin } from "../middleware/authMiddleware.js";

const router = express.Router()


router.post('/add-user', protect, admin, async (req, res) => {
  try {
    const { fullName, username, email, password } = req.body

    const existingUser = await User.findOne({ email })

    if (existingUser) {
      // Promote existing user to admin
      existingUser.role = 'admin'
      existingUser.isAdmin = true
      await existingUser.save()
      return res.status(200).json({ message: 'User promoted to Admin successfully', user: existingUser })
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const newUser = new User({
      fullName,
      username,
      email,
      password: hashedPassword,
      role: 'admin',
      isAdmin: true,
    })

    await newUser.save()
    res.status(201).json({ message: 'Admin added successfully', user: newUser })
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: 'Server error' })
  }
})

export default router
