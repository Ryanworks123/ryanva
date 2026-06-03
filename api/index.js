import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import contactRoutes from '../routes/contact.js'

dotenv.config()

const app = express()

// Middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Routes
app.use('/api', contactRoutes)

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'Backend is running' })
})

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).json({ error: 'Something went wrong!' })
})

export default app
