const testimonials = [
  {
    name: 'Aïssatou D.',
    origin: 'Conakry → Lyon',
    text: "J'avais déjà été refusée une fois. Le travail sur la lettre de motivation et les vœux a tout changé pour ma deuxième candidature."
  },
  {
    name: 'Mamadou B.',
    origin: 'Rabat → Toulouse',
    text: "La simulation d'entretien m'a enlevé le stress. Le jour J, je savais exactement à quoi m'attendre."
  }
]

export default function Testimonials() {
  return (
    <section id="temoignages" className="bg-ivory py-20 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <p className="font-mono text-xs tracking-[0.2em] uppercase text-gold-dark mb-4">Témoignages</p>
        <h2 className="font-display text-3xl md:text-4xl text-navy font-medium leading-tight mb-14 max-w-xl">
          Ce que ça change, concrètement.
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map(t => (
            <div key={t.name} className="border border-navy/10 rounded-2xl p-8 bg-white/40">
              <p className="font-display text-lg text-navy leading-relaxed mb-6">
                « {t.text} »
              </p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-navy/10 flex items-center justify-center font-mono text-xs text-navy">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="font-body text-sm font-medium text-navy">{t.name}</p>
                  <p className="font-mono text-[0.65rem] uppercase tracking-wide text-navy/50">{t.origin}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
