import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
const app = express()

app.use(cors())
app.use(express.json())

async function sendNotificationEmail({ name, phone, country, formule, message }) {
  if (!process.env.BREVO_API_KEY) return

  try {
    const res = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'api-key': process.env.BREVO_API_KEY
      },
      body: JSON.stringify({
        sender: { email: process.env.NOTIFY_FROM || process.env.SMTP_USER },
        to: [{ email: process.env.NOTIFY_TO || process.env.SMTP_USER }],
        subject: `Nouvelle demande — ${name} (${formule})`,
        textContent: `Nom: ${name}\nTéléphone: ${phone}\nPays: ${country || '-'}\nFormule: ${formule}\nMessage: ${message || '-'}`
      })
    })

    if (!res.ok) {
      const errText = await res.text()
      console.error('Email non envoyé (API Brevo):', res.status, errText)
    }
  } catch (err) {
    console.error('Email non envoyé (erreur reseau):', err.message)
  }
}

app.post('/api/leads', async (req, res) => {
  const { name, phone, country, formule, message } = req.body

  if (!name || !phone || !formule) {
    return res.status(400).json({ error: 'Champs requis manquants (name, phone, formule).' })
  }

  try {
    const lead = await prisma.lead.create({
      data: { name, phone, country, formule, message }
    })

    await sendNotificationEmail({ name, phone, country, formule, message })

    res.status(201).json({ ok: true, lead })
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Erreur serveur.' })
  }
})

app.get('/api/leads', async (req, res) => {
  const leads = await prisma.lead.findMany({ orderBy: { createdAt: 'desc' } })
  res.json(leads)
})

const PORT = process.env.PORT || 4000
app.listen(PORT, () => console.log(`API leads sur http://localhost:${PORT}`))