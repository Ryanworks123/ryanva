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
  // Create mock req/res objects for the handler
  await contactHandler(req, res)
})

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'Backend is running' })
})

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).json({ error: 'Something went wrong!' })
})

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
