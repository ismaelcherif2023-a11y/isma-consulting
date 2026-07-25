import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import nodemailer from 'nodemailer'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
const app = express()

app.use(cors())
app.use(express.json())

// Transporteur email (Brevo SMTP) — optionnel
let transporter = null
if (process.env.SMTP_HOST) {
  transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT || 465),
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  })
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

    if (transporter) {
      try {
        await transporter.sendMail({
          from: process.env.NOTIFY_FROM || process.env.SMTP_USER,
          to: process.env.NOTIFY_TO || process.env.SMTP_USER,
          subject: `Nouvelle demande — ${name} (${formule})`,
          text: `Nom: ${name}\nTéléphone: ${phone}\nPays: ${country || '-'}\nFormule: ${formule}\nMessage: ${message || '-'}`
        })
      } catch (mailErr) {
        console.error('Email non envoyé:', mailErr.message)
      }
    }

    res.status(201).json({ ok: true, lead })
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Erreur serveur.' })
  }
})

app.get('/api/leads', async (req, res) => {
  // Endpoint simple pour consulter les leads reçus (à protéger par auth avant mise en prod)
  const leads = await prisma.lead.findMany({ orderBy: { createdAt: 'desc' } })
  res.json(leads)
})

const PORT = process.env.PORT || 4000
app.listen(PORT, () => console.log(`API leads sur http://localhost:${PORT}`))