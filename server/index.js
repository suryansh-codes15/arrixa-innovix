import express from 'express'
import cors from 'cors'

const app = express()
const PORT = process.env.PORT || 3001

// Middleware
app.use(cors({ origin: ['http://localhost:5173', 'http://127.0.0.1:5173'] }))
app.use(express.json())

// Health check
app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString() })
})

// Contact form endpoint
app.post('/api/contact', (req, res) => {
    const { name, email, subject, message } = req.body

    // Validate
    if (!name || !email || !message) {
        return res.status(400).json({ error: 'Name, email, and message are required.' })
    }

    // Log the submission (ready for future email integration)
    console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')
    console.log('📩 New Contact Form Submission')
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')
    console.log(`  Name:    ${name}`)
    console.log(`  Email:   ${email}`)
    console.log(`  Subject: ${subject || 'N/A'}`)
    console.log(`  Message: ${message}`)
    console.log(`  Time:    ${new Date().toISOString()}`)
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n')

    res.json({ success: true, message: 'Your message has been received. We will get back to you soon!' })
})

app.listen(PORT, () => {
    console.log(`\n🚀 Aarixa Innovix Backend running on http://localhost:${PORT}`)
    console.log(`   Health: http://localhost:${PORT}/api/health\n`)
})
