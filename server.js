import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import contactHandler from './api/contact.js'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

// Middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Routes - use the same handler as Vercel
app.post('/api/contact', async (req, res) => {
  try {
    await contactHandler(req, res)
  } catch (error) {
    console.error('API handler error:', error)
    if (!res.headersSent) {
      res.status(500).json({ error: 'Internal server error' })
    }
  }
})

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'Backend is running' })
})

// Error handling
app.use((err, req, res) => {
  res.status(500).json({ error: 'Something went wrong!' })
})

app.listen(PORT, () => {
  // Server started successfully
})
