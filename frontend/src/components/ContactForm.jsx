import { useState } from 'react'

const initialForm = { name: '', phone: '', country: '', formule: 'Complet', message: '' }

export default function ContactForm() {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState('idle') // idle | loading | success | error

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/leads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      if (!res.ok) throw new Error('request failed')
      setStatus('success')
      setForm(initialForm)
    } catch (err) {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="bg-navy py-20 md:py-28">
      <div className="max-w-3xl mx-auto px-6">
        <p className="font-mono text-xs tracking-[0.2em] uppercase text-gold mb-4">Étape suivante</p>
        <h2 className="font-display text-3xl md:text-4xl text-ivory font-medium leading-tight mb-4">
          Réservez votre audit gratuit.
        </h2>
        <p className="font-body text-ivory/60 mb-10 max-w-md">
          Remplissez le formulaire, on vous recontacte sous 24h pour fixer un appel de 15-20 min.
        </p>

        {status === 'success' ? (
          <div className="bg-navy-light rounded-2xl p-8 text-ivory">
            <p className="font-display text-xl mb-2">Message envoyé.</p>
            <p className="font-body text-ivory/70">On vous recontacte très vite. Vous pouvez aussi nous écrire directement sur WhatsApp si c'est urgent.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-5">
            <div className="md:col-span-1">
              <label htmlFor="name" className="font-mono text-[0.65rem] uppercase tracking-widest text-ivory/50 block mb-2">
                Nom complet
              </label>
              <input
                id="name" name="name" required value={form.name} onChange={handleChange}
                className="w-full rounded-lg bg-navy-light border border-ivory/15 px-4 py-3 text-ivory placeholder:text-ivory/30 focus-ring font-body"
                placeholder="Votre nom"
              />
            </div>

            <div>
              <label htmlFor="phone" className="font-mono text-[0.65rem] uppercase tracking-widest text-ivory/50 block mb-2">
                Téléphone / WhatsApp
              </label>
              <input
                id="phone" name="phone" required value={form.phone} onChange={handleChange}
                className="w-full rounded-lg bg-navy-light border border-ivory/15 px-4 py-3 text-ivory placeholder:text-ivory/30 focus-ring font-body"
                placeholder="+224 / +212 / +33 ..."
              />
            </div>

            <div>
              <label htmlFor="country" className="font-mono text-[0.65rem] uppercase tracking-widest text-ivory/50 block mb-2">
                Pays actuel
              </label>
              <input
                id="country" name="country" value={form.country} onChange={handleChange}
                className="w-full rounded-lg bg-navy-light border border-ivory/15 px-4 py-3 text-ivory placeholder:text-ivory/30 focus-ring font-body"
                placeholder="Guinée, Maroc, ..."
              />
            </div>

            <div>
              <label htmlFor="formule" className="font-mono text-[0.65rem] uppercase tracking-widest text-ivory/50 block mb-2">
                Formule souhaitée
              </label>
              <select
                id="formule" name="formule" value={form.formule} onChange={handleChange}
                className="w-full rounded-lg bg-navy-light border border-ivory/15 px-4 py-3 text-ivory focus-ring font-body"
              >
                <option>Dossier</option>
                <option>Entretien</option>
                <option>Complet</option>
                <option>Je ne sais pas encore</option>
              </select>
            </div>

            <div className="md:col-span-2">
              <label htmlFor="message" className="font-mono text-[0.65rem] uppercase tracking-widest text-ivory/50 block mb-2">
                Votre situation (optionnel)
              </label>
              <textarea
                id="message" name="message" rows="4" value={form.message} onChange={handleChange}
                className="w-full rounded-lg bg-navy-light border border-ivory/15 px-4 py-3 text-ivory placeholder:text-ivory/30 focus-ring font-body resize-none"
                placeholder="Où en êtes-vous dans vos démarches ?"
              />
            </div>

            <div className="md:col-span-2 flex items-center gap-4">
              <button
                type="submit"
                disabled={status === 'loading'}
                className="inline-flex items-center justify-center rounded-full bg-gold text-navy px-8 py-3.5 font-body font-medium hover:bg-gold-light transition-colors focus-ring disabled:opacity-60"
              >
                {status === 'loading' ? 'Envoi...' : 'Envoyer ma demande'}
              </button>
              {status === 'error' && (
                <p className="font-body text-sm text-red-300">Une erreur est survenue, réessayez ou écrivez sur WhatsApp.</p>
              )}
            </div>
          </form>
        )}
      </div>
    </section>
  )
}
