const points = [
  {
    title: 'Dossier mal construit',
    text: "Lettre de motivation générique, vœux mal hiérarchisés, pièces manquantes : les raisons de refus sont presque toujours évitables."
  },
  {
    title: 'Entretien improvisé',
    text: "Beaucoup de bons dossiers échouent à l'oral faute de préparation aux questions types et à la posture attendue."
  },
  {
    title: "Mauvais choix d'école",
    text: "Viser trop haut, trop bas, ou une formation mal alignée avec son projet réduit les chances d'admission."
  }
]

export default function Problem() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20 md:py-24">
      <div className="max-w-xl">
        <p className="font-mono text-xs tracking-[0.2em] uppercase text-gold-dark mb-4">Le constat</p>
        <h2 className="font-display text-3xl md:text-4xl text-navy font-medium leading-tight">
          Chaque année, des milliers de dossiers solides sont recalés pour des raisons évitables.
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mt-14">
        {points.map((p, i) => (
          <div key={p.title} className="border-t-2 border-navy/10 pt-6">
            <p className="font-mono text-xs text-navy/40 mb-3">0{i + 1}</p>
            <h3 className="font-display text-xl text-navy mb-2">{p.title}</h3>
            <p className="font-body text-navy/65 leading-relaxed">{p.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
