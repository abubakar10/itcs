import express from 'express';
import Contact from '../models/Contact.js';
import nodemailer from 'nodemailer';
import { protect, admin } from "../middleware/authMiddleware.js";

const router = express.Router();

// Helper to send email
const sendEmailNotification = async (contactData) => {
    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER, // Sending to self for now
            subject: `New Contact Form: ${contactData.subject}`,
            text: `
        You received a new message from the website!

        Name: ${contactData.name}
        Email: ${contactData.email}
        Phone: ${contactData.phone || 'N/A'}
        
        Message:
        ${contactData.message}
      `
        };

        await transporter.sendMail(mailOptions);
        console.log('Email notification sent successfully.');
    } catch (error) {
        console.error('Failed to send email notification:', error);
        // We don't throw here strictly to allow the form save to succeed even if email fails
    }
};

// POST: Save a new contact message
router.post('/', async (req, res) => {
    try {
        const { name, email, phone, subject, message } = req.body;

        // Basic Validation
        if (!name || !email || !subject || !message) {
            return res.status(400).json({ error: 'All fields are required except phone.' });
        }

        const newContact = new Contact({
            name,
            email,
            phone,
            subject,
            message
        });

        const savedContact = await newContact.save();

        // Send email notification (non-blocking)
        sendEmailNotification(savedContact);

        res.status(201).json({ message: 'Message sent successfully!', data: savedContact });
    } catch (error) {
        console.error('Error saving contact message:', error);
        res.status(500).json({ error: 'Failed to send message.' });
    }
});

// GET: Retrieve all messages (for admin use - Protected)
router.get('/', protect, admin, async (req, res) => {
    try {
        const messages = await Contact.find().sort({ createdAt: -1 });
        res.status(200).json(messages);
    } catch (error) {
        console.error('Error fetching messages:', error);
        res.status(500).json({ error: 'Failed to fetch messages.' });
    }
});

export default router;
