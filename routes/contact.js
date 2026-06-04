import express from 'express'
import nodemailer from 'nodemailer'
import dotenv from 'dotenv'

dotenv.config()

const router = express.Router()

// Email configuration (update with your actual email settings)
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST || 'smtp.gmail.com',
  port: Number(process.env.EMAIL_PORT) || 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
  tls: {
    rejectUnauthorized: false,
  },
})

transporter.verify().then(() => {
  console.log('Email transporter is ready')
}).catch((err) => {
  console.error('Email transporter verify failed:', err)
})

// Contact form endpoint
router.post('/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body

    // Validate input
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        error: 'Please fill in all fields',
      })
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        error: 'Please provide a valid email address',
      })
    }

    // Prepare email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `New Portfolio Inquiry from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <hr>
        <p><small>Received on ${new Date().toLocaleString()}</small></p>
      `,
    }

    // Send email
    await transporter.sendMail(mailOptions)

    // Send confirmation email to user
    const confirmationEmail = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Thank you for contacting Ryan - VA Portfolio',
      html: `
        <h2>Hello ${name},</h2>
        <p>Thank you for reaching out! I've received your message and will get back to you within 2 business hours.</p>
        <p>In the meantime, feel free to explore more about my services on the portfolio website.</p>
        <p>Best regards,<br>Ryan</p>
      `,
    }

    await transporter.sendMail(confirmationEmail)

    res.json({
      success: true,
      message: 'Message sent successfully! Check your email for confirmation.',
    })
  } catch (error) {
    console.error('Contact form error:', error)
    res.status(500).json({
      success: false,
      error: 'Failed to send message. Please try again later.',
    })
  }
})

export default router
