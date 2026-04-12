import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import cors from 'cors'

const app = express()
app.use(cors())
app.use(express.json())

const API_KEY = process.env.GEMINI_API_KEY

app.post('/api/analyze', async (req, res) => {
  try {
    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`
      },
      body: JSON.stringify({
        model: 'llama-3.3-70b-versatile',
        messages: [{ role: 'user', content: req.body.prompt }],
        temperature: 0.3
      })
    })
    const data = await response.json()
    res.json(data)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

app.listen(3001, () => console.log('Server running on port 3001'))