const steps = [
  { title: 'Prise de contact', text: 'Vous nous écrivez via WhatsApp ou le formulaire. Réponse sous 24h.' },
  { title: 'Audit gratuit', text: 'Un échange de 15-20 min pour comprendre votre profil et votre projet.' },
  { title: 'Accompagnement', text: 'On travaille ensemble sur le dossier, l\u2019entretien, ou les deux selon votre formule.' },
  { title: 'Admission', text: 'Vous décrochez votre place. On reste disponible jusqu\u2019aux démarches de visa.' }
]

export default function Process() {
  return (
    <section id="parcours" className="max-w-6xl mx-auto px-6 py-20 md:py-28">
      <div className="max-w-xl mb-14">
        <p className="font-mono text-xs tracking-[0.2em] uppercase text-gold-dark mb-4">Comment ça marche</p>
        <h2 className="font-display text-3xl md:text-4xl text-navy font-medium leading-tight">
          Quatre étapes, du premier message à l'admission.
        </h2>
      </div>

      <div className="relative">
        <div className="hidden md:block absolute top-6 left-0 right-0 h-px bg-navy/15" />
        <div className="grid md:grid-cols-4 gap-10 md:gap-6">
          {steps.map((s, i) => (
            <div key={s.title} className="relative">
              <div className="relative z-10 w-12 h-12 rounded-full bg-ivory border-2 border-navy flex items-center justify-center font-mono text-sm text-navy mb-5">
                {i + 1}
              </div>
              <h3 className="font-display text-lg text-navy mb-2">{s.title}</h3>
              <p className="font-body text-sm text-navy/65 leading-relaxed">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
