import express from 'express'
import nodemailer from 'nodemailer'
import dotenv from 'dotenv'

dotenv.config()
const router = express.Router()

// Create transporter for sending emails
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
})

// Job application route
router.post('/apply', async (req, res) => {
  try {
    const {
      fullName,
      email,
      phone,
      resume,
      coverLetter,
      experience,
      linkedin,
      jobTitle,
      jobDepartment,
      jobLocation,
    } = req.body

    // Validate required fields
    if (!fullName || !email || !phone || !resume) {
      return res.status(400).json({ message: 'Missing required fields' })
    }

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'abubakarr1011@gmail.com',
      subject: `New Job Application: ${jobTitle || 'Position'} - ${fullName}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #4a9eff 0%, #357abd 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
            .content { background: #f9f9f9; padding: 20px; border-radius: 0 0 8px 8px; }
            .section { margin-bottom: 20px; }
            .label { font-weight: bold; color: #4a9eff; }
            .value { margin-top: 5px; padding: 10px; background: white; border-radius: 4px; }
            .job-info { background: #e3f2fd; padding: 15px; border-radius: 8px; margin-bottom: 20px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>New Job Application Received</h2>
            </div>
            <div class="content">
              <div class="job-info">
                <h3>Position Applied For:</h3>
                <p><strong>${jobTitle || 'Not specified'}</strong></p>
                <p>Department: ${jobDepartment || 'Not specified'} | Location: ${jobLocation || 'Not specified'}</p>
              </div>

              <div class="section">
                <div class="label">Applicant Name:</div>
                <div class="value">${fullName}</div>
              </div>

              <div class="section">
                <div class="label">Email Address:</div>
                <div class="value">${email}</div>
              </div>

              <div class="section">
                <div class="label">Phone Number:</div>
                <div class="value">${phone}</div>
              </div>

              ${linkedin ? `
              <div class="section">
                <div class="label">LinkedIn Profile:</div>
                <div class="value"><a href="${linkedin}" target="_blank">${linkedin}</a></div>
              </div>
              ` : ''}

              <div class="section">
                <div class="label">Years of Experience:</div>
                <div class="value">${experience || 'Not specified'}</div>
              </div>

              <div class="section">
                <div class="label">Resume/CV:</div>
                <div class="value">${resume}</div>
              </div>

              ${coverLetter ? `
              <div class="section">
                <div class="label">Cover Letter:</div>
                <div class="value">${coverLetter.replace(/\n/g, '<br>')}</div>
              </div>
              ` : ''}

              <div style="margin-top: 30px; padding-top: 20px; border-top: 2px solid #4a9eff; text-align: center; color: #666; font-size: 12px;">
                <p>This application was submitted through the ITCS Careers Portal.</p>
                <p>Please contact the applicant at ${email} or ${phone} to proceed.</p>
              </div>
            </div>
          </div>
        </body>
        </html>
      `,
    }

    // Send email
    await transporter.sendMail(mailOptions)

    res.status(200).json({
      message: 'Application submitted successfully. We will contact you soon!',
    })
  } catch (error) {
    console.error('Error sending application email:', error)
    res.status(500).json({
      message: 'Failed to submit application. Please try again later.',
    })

  }
})

export default router


